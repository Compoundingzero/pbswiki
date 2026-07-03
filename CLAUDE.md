# doswiki — Project Briefing

## What This Is
A "wants-first" wiki of health, fitness, and longevity compounds — approved and non-approved.
Users start from a **goal** ("build muscle", "lose fat", "live longer") and get compounds ranked
by human-evidence strength, each with: technical mechanism (named genes/receptors), an official
gene/molecular-target link, and a plain-English explanation.

**Owner:** Felix. **Constraint: no camera / no video ever.** Static, free-to-host, perpetual.

## Content Sources (the four-layer learning architecture)
The wiki is a *curriculum*, not just a reference. Four content layers, three now written:
- **Layer 1 — `content/FOUNDATIONS.md`** ✅ — the prerequisite spine: Biology 101 (cell, central dogma, the 4 target types, signaling), Pharmacokinetics (ADME/half-life/bioavailability), Pharmacodynamics (agonist/antagonist/affinity/selectivity/tolerance), Evidence literacy (evidence hierarchy, p-value vs effect size, trial phases, regulatory maps), core glossary, and the embeddable visualization toolkit (PubChem, Mol*/RCSB PDB, UniProt, AlphaFold, Reactome, KEGG).
- **Layer 2 — `content/PATHWAYS.md`** ✅ — the 16 master pathways (GPCR/cAMP, nuclear receptors, mTOR, AMPK, NO/cGMP, PI3K-Akt, GABA/glutamate, monoamines, cholinergic, HPTA, HPA, mitochondria, NAD⁺/sirtuins, NF-κB, melanocortin, senescence/autophagy). Each has a numbered cascade + the compounds that pull it. This is the "latticework" that makes a reader expert.
- **Layer 3 — `content/COMPENDIUM.md`** ✅ — ~220 compounds across 20 categories. *To upgrade later:* add per-entry numbered step-by-step cascade, embedded 3D structure (Mol*/PubChem), three-depth toggle (ELI5/Informed/Technical), prerequisite links back to Layers 1–2, and self-test questions.
- **Layer 4 — Learning tools** ⏳ (build with the site): wired-in glossary hover-defs, guided learning paths + progress tracking, flashcard/Anki export, compare tool.

`content/COMPENDIUM.md` — every compound entry has:
- Approval badge (🟢🟡🔵🟠🔴⚫) + evidence stars (⭐–⭐⭐⭐⭐⭐)
- **Technical mechanism** — receptor/enzyme/gene named
- **Molecular target** — official link: [NCBI Gene](https://www.ncbi.nlm.nih.gov/gene/) for the gene, [PubChem](https://pubchem.ncbi.nlm.nih.gov/) for the compound, Examine/PMC where useful
- **In plain English** — layman explanation
- Protocol / Watch out / Bottom line

When building MDX pages, split COMPENDIUM.md into one file per compound under `content/supplements/`,
preserving frontmatter: `goals`, `approval`, `evidence`, `category`, `geneTargets[]`, `pubchem`.

## Editorial Rules (never violate)
1. **Note faithfully, not through a lens.** Describe what the compound *does* mechanistically —
   do not editorialise it into an investing/business analogy.
2. **Human evidence gets the stars.** Animal-only data is capped at ⭐⭐ and must say "animal".
3. **Every molecular claim links to an official source** (NCBI Gene / PubChem / PMC / FDA / Examine).
4. **Harm-reduction framing for non-approved compounds** — document risks plainly, never encourage.
   DNP and similarly lethal compounds carry an explicit "do not use" and exist only for completeness.
5. **Legal status is per-country where it differs** (US FDA, Singapore HSA, WADA for athletes).
6. **Not medical advice** — global disclaimer on every page.

## Tech Stack (planned)
- Next.js 15 (App Router) + TypeScript + Tailwind v4
- Content as MDX (no database → static export → free hosting)
- Client-side search: Fuse.js (zero API cost)
- Deploy: Railway static or GitHub Pages
- Ongoing cost target: **$0/month**

## Site Structure
```
/                       Home — "What do you want to achieve?" goal grid
/goal/[slug]            Goal page — compounds ranked by evidence, filterable by approval
/supplement/[slug]      Entry — badges, mechanism, gene target links, plain English, protocol
/compare               Side-by-side two compounds
/az                    A–Z index
/about                 Methodology + disclaimer + evidence/approval key
```

## Goal Taxonomy
Build Muscle · Lose Fat · Endurance · Recover Faster · Sleep Better · Focus & Cognition ·
Live Longer · Joint Health · Cardiovascular · Hormonal/Testosterone · Stress & Anxiety ·
Sexual Health · Gut Health

## Build Order
1. Scaffold Next.js + Tailwind + MDX loader
2. Split COMPENDIUM.md → per-compound MDX with frontmatter
3. Components: ApprovalBadge, EvidenceStars, GoalTag, GeneTargetLink, SupplementCard, Search
4. Goal pages (ranking + filters) → supplement pages → compare → A–Z
5. About/disclaimer page
6. Deploy static to Railway; generate domain

## Regulatory Note (keep current)
April 2026: FDA removed 12 peptides (BPC-157, TB-500, GHK-Cu, MOTS-C, Epitalon, LL-37, KPV, DSIP,
Semax, Melanotan II, DiHexa, PEG-MGF) from Category 2. PCAC 503A compounding review July 23–24, 2026
for BPC-157, TB-500, MOTS-C, KPV, DSIP, Semax, Epitalon. Removal ≠ approval. Re-check this quarterly.
