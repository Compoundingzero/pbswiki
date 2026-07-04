#!/usr/bin/env node
// Export all community-generated data from Postgres to backups/*.json so it is
// durably versioned in GitHub (see .github/workflows/backup-community.yml).
//
// What it backs up: comments, compound edits (+ full history), Tier-1 votes,
// Tier-2 stewardship proposals + endorsements/flags, and expert-domain info.
// It deliberately EXCLUDES password hashes and emails (secrets/PII) — only the
// public contribution data is exported.
//
// Idempotent: rows are ordered by id so unchanged data produces an identical file
// (the CI job commits only when something actually changed).
//
// Run: DATABASE_URL=postgres://... node scripts/backup-community.js

const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const URL = process.env.DATABASE_URL;
if (!URL) { console.error('[backup] DATABASE_URL not set — nothing to back up.'); process.exit(process.env.CI ? 0 : 1); }

const OUT = path.join(__dirname, '..', 'backups');
const pool = new Pool({ connectionString: URL, ssl: process.env.PGSSL === '0' ? false : { rejectUnauthorized: false }, max: 3 });

// table -> SQL (ordered for stable diffs; no secrets)
const EXPORTS = {
  users: `SELECT id, username, role, domain, credential, domain_verified, created_at
          FROM users ORDER BY id`,
  comments: `SELECT c.id, c.goal_id, c.body, c.created_at, u.username
             FROM comments c JOIN users u ON u.id=c.user_id ORDER BY c.id`,
  edits: `SELECT e.id, e.compound_id, e.compound_name, e.fields, e.note, e.created_at, u.username
          FROM edits e JOIN users u ON u.id=e.user_id ORDER BY e.id`,
  votes: `SELECT target_id, value, created_at FROM votes ORDER BY target_id, created_at`,
  proposals: `SELECT p.id, p.problem_id, p.root_cause_id, p.layer, p.domain, p.change, p.evidence,
                     p.status, p.created_at, u.username
              FROM proposals p JOIN users u ON u.id=p.user_id ORDER BY p.id`,
  proposal_actions: `SELECT a.id, a.proposal_id, a.action, a.note, a.created_at, u.username
                     FROM proposal_actions a JOIN users u ON u.id=a.user_id ORDER BY a.id`,
};

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const manifest = { generated_at: new Date().toISOString(), counts: {} };
  for (const [name, sql] of Object.entries(EXPORTS)) {
    try {
      const r = await pool.query(sql);
      fs.writeFileSync(path.join(OUT, name + '.json'), JSON.stringify(r.rows, null, 2) + '\n');
      manifest.counts[name] = r.rowCount;
      console.log(`[backup] ${name}: ${r.rowCount} rows`);
    } catch (e) {
      // a table may not exist yet on a fresh DB — record it and continue
      manifest.counts[name] = null;
      console.warn(`[backup] ${name}: skipped (${e.message})`);
    }
  }
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  fs.writeFileSync(path.join(OUT, 'README.md'),
    '# Community backup\n\nAutomated JSON snapshots of PBswiki community data (comments, edits, ' +
    'votes, stewardship proposals, expert domains). Written by `scripts/backup-community.js` via ' +
    'GitHub Actions. Password hashes and emails are intentionally excluded.\n\n' +
    'To restore, load these JSON rows back into the matching Postgres tables (schema in `db.js`).\n');
  await pool.end();
  console.log('[backup] wrote', OUT, JSON.stringify(manifest.counts));
})().catch((e) => { console.error('[backup] FAILED', e.message); process.exit(1); });
