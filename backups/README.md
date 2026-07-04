# Community backup

Automated JSON snapshots of PBswiki community data (comments, edits, votes, stewardship proposals, expert domains). Written by `scripts/backup-community.js` via GitHub Actions. Password hashes and emails are intentionally excluded.

To restore, load these JSON rows back into the matching Postgres tables (schema in `db.js`).
