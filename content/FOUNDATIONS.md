# RNAwiki — Foundations

**The curriculum spine. This is what turns the compendium from a reference into a path to expertise.**

You do not become an expert by reading 220 compound entries. You become an expert by learning ~15 pathways deeply, learning how any drug reaches and acts on a target, and learning to read the evidence yourself. Then every compound is just a lever you can already understand. Read these modules first (or alongside your first few compounds). Every technical term below is defined the first time it appears.

**The intended path:** Module 1 (biology) → Module 2 (how drugs move) → Module 3 (how drugs act) → Module 4 (how to judge evidence) → then the Pathways → then compounds, each of which links back here.

---

# MODULE 1 — Biology 101: the machine a drug acts on

### 1.1 The cell
Your body is ~30 trillion cells. Each is a bag (membrane) of watery fluid (cytoplasm) holding machinery. The **membrane** is a double layer of fat (lipid bilayer) — this matters because fat-soluble molecules (vitamin D, testosterone, curcumin) pass straight through it, while water-soluble ones (peptides, most drugs) need a door (a receptor or transporter). This single fact explains half of why some compounds are pills and others are injections.

### 1.2 The central dogma: DNA → RNA → protein
This is the most important idea in the whole wiki. Learn it once and every "gene target" link makes sense.

- **DNA** is the master blueprint, stored in the nucleus. A **gene** is one instruction in that blueprint — the recipe for one protein.
- To use a gene, the cell copies it into **messenger RNA (mRNA)** — a disposable working copy (this step is *transcription*).
- The mRNA travels to a **ribosome**, which reads it and strings together **amino acids** into a **protein** (this step is *translation*).
- **A protein is a chain of amino acids that folds into a 3D shape.** The shape *is* the function.

**Worked example — a protein chain you can actually see:** BPC-157 is a 15-amino-acid chain:
`Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val` (written in one-letter code: **GEPPPGKPADDAGLV**). Each three-letter block is one amino acid; the bonds between them are *peptide bonds* (which is why short chains are called **peptides** and long ones **proteins**). That chain folds into a specific shape that lets it interact with the VEGFR2 receptor. *Visualize it: [PubChem 3D structure] shows the molecule; for full proteins, the [Mol\* viewer at RCSB PDB](https://www.rcsb.org/) renders the real 3D fold in your browser.*

Why this matters for drugs: some compounds work by **changing which genes get transcribed** (testosterone, vitamin D, rapamycin — they turn recipes on or off). Others never touch DNA and just flip a switch on a protein (caffeine, GLP-1 drugs). When an entry says "upregulates X," it means "makes the cell transcribe more of gene X."

### 1.3 The four kinds of protein target (this covers ~all of the wiki)
Almost every compound acts on one of four protein types. Learn these four and you can classify any drug:

1. **Receptors** — proteins that receive a signal. A molecule that fits a receptor is a **ligand**. Two big families:
   - **G-protein-coupled receptors (GPCRs)** — thread through the membrane 7 times; when a ligand binds outside, they trigger a chemical relay inside (e.g., adenosine receptor / caffeine, GLP-1 receptor / semaglutide, adrenergic receptors / clenbuterol). The largest drug-target family in medicine.
   - **Nuclear receptors** — live inside the cell; when a fat-soluble hormone binds, the pair travels to the DNA and switches genes on/off (e.g., androgen receptor / testosterone, vitamin D receptor, PPARs). This is why steroids are slow but powerful — they rewrite gene expression.
2. **Enzymes** — proteins that speed up a chemical reaction. Drugs usually *inhibit* them (statins block HMG-CoA reductase; finasteride blocks 5-alpha-reductase; SSRIs block the serotonin transporter's function).
3. **Transporters** — doors that move things across the membrane (SLC6A8 pulls creatine into muscle; SGLT2 reabsorbs glucose; the dopamine transporter DAT recycles dopamine — blocked by stimulants).
4. **Ion channels** — gated pores for charged particles (nicotinic receptors, GABA-A channels, the potassium channels minoxidil opens).

### 1.4 The signaling relay (how one molecule outside becomes a big effect inside)
When a ligand hits a GPCR, the receptor activates a **second messenger** (often **cAMP**), which activates enzymes called **kinases**. A **kinase** attaches a phosphate group to another protein — this is **phosphorylation**, the cell's universal on/off switch. A cascade of phosphorylations amplifies a tiny signal into a big cellular response. Example you'll see repeatedly: *ligand → receptor → cAMP → PKA → hormone-sensitive lipase → fat released.* Once you recognize this shape, clenbuterol, caffeine, and ephedrine are obviously the same story.

### 1.5 The messengers: hormones vs neurotransmitters
- **Hormones** travel in blood to distant targets (testosterone, insulin, thyroid, GLP-1). Slow, body-wide.
- **Neurotransmitters** cross the tiny gap between two nerve cells (dopamine, serotonin, GABA, acetylcholine, glutamate). Fast, local. Most "focus/mood/sleep" compounds tune one of these five.

```learn
{"takeaways":["Fat-soluble molecules cross the cell membrane freely; water-soluble ones need a receptor or transporter — this is why some compounds are pills and others injections.","The central dogma is DNA → (transcription) → mRNA → (translation) → protein; 'upregulate gene X' means the cell makes more of protein X.","Almost every compound acts on one of four protein targets: receptors, enzymes, transporters, or ion channels.","A ligand hitting a GPCR triggers a second messenger (cAMP) → kinases → a phosphorylation cascade that amplifies a tiny signal into a big effect."],"quiz":[{"q":"A compound is fat-soluble. Does it need a receptor to get into a cell?","a":"No — fat-soluble molecules pass straight through the lipid-bilayer membrane. That's why they can often be pills, while water-soluble ones need a transporter or an injection."},{"q":"An entry says a compound 'upregulates' a gene. What is physically happening?","a":"The cell transcribes more of that gene into mRNA, so it builds more of the protein. (Central dogma: DNA → RNA → protein.)"},{"q":"Name the four protein-target types almost every drug acts on.","a":"Receptors (GPCR or nuclear), enzymes, transporters, and ion channels."}]}
```

---

# MODULE 2 — Pharmacokinetics: what the body does to the drug

Pharmacokinetics (PK) is the journey of a compound through your body — summarized as **ADME**.

- **Absorption** — how it gets in. Oral, sublingual, injection (subcutaneous/intramuscular/IV), transdermal, nasal. Peptides are usually injected because stomach acid destroys them (this is why BPC-157 and semaglutide are shots, not pills — and why oral semaglutide needs a special absorption enhancer).
- **Distribution** — where it goes. Fat-soluble compounds reach the brain and store in fat; water-soluble ones stay in blood.
- **Metabolism** — how it's broken down, mostly by liver **CYP450 enzymes** (e.g., CYP3A4). This is the source of most drug interactions: one compound speeding up or blocking a CYP enzyme changes the levels of another. *This is why the entries flag "CYP3A4 inhibitor."*
- **Excretion** — how it leaves (kidney/urine, bile/stool).

**Key derived concepts:**
- **Bioavailability** — the fraction that actually reaches your bloodstream. Oral arginine has low bioavailability (destroyed first-pass in the liver) — which is exactly why citrulline, which converts to arginine *after* the liver, works better. Understanding bioavailability explains dozens of "why this form over that form" choices.
- **First-pass metabolism** — everything absorbed from the gut hits the liver first, which can destroy most of an oral dose before it circulates.
- **Half-life** — the time for blood levels to halve. Caffeine's ~5–6 h half-life is why an afternoon coffee wrecks sleep; modafinil's 12–15 h is why it must be taken on waking. Half-life sets dosing frequency and timing.
- **Steady state** — with repeated dosing, levels plateau after ~5 half-lives. Why beta-alanine "loads" over weeks and creatine saturates in days.

```learn
{"takeaways":["Pharmacokinetics is the ADME journey: Absorption, Distribution, Metabolism, Excretion.","Bioavailability = the fraction that reaches your blood; first-pass liver metabolism destroys much of an oral dose (why citrulline beats arginine).","Half-life sets dosing timing — caffeine's 5–6 h is why an afternoon coffee wrecks sleep; levels reach steady state after ~5 half-lives.","Most drug interactions come from CYP450 liver enzymes: one compound speeding up or blocking a CYP changes another's blood levels."],"quiz":[{"q":"Why is oral arginine weak but citrulline effective for the same 'pump' goal?","a":"Arginine is largely destroyed first-pass in the liver (low bioavailability). Citrulline converts to arginine AFTER the liver, so more reaches the blood."},{"q":"Caffeine's half-life is ~5–6 h. What does that predict about a 4pm coffee?","a":"Roughly half is still circulating at 9–10pm, disrupting sleep. Half-life sets timing."},{"q":"What does ADME stand for?","a":"Absorption, Distribution, Metabolism, Excretion — the compound's journey through the body."}]}
```

---

# MODULE 3 — Pharmacodynamics: what the drug does to the body

Pharmacodynamics (PD) is how a compound produces its effect once it reaches the target.

- **Agonist** — a ligand that *activates* a receptor (semaglutide agonizes GLP-1; testosterone agonizes the androgen receptor).
- **Antagonist** — a ligand that *blocks* a receptor without activating it (caffeine antagonizes adenosine; yohimbine antagonizes alpha-2). Antagonists work by preventing the natural signal.
- **Partial agonist / inverse agonist** — partial = weaker-than-full activation; inverse = pushes the receptor below baseline.
- **Affinity** — how tightly a compound grips its target. **Efficacy** — how big an effect it produces once bound. A drug can bind tightly but do little (high affinity, low efficacy). SARMs are the whole point of this distinction: they bind the androgen receptor with tissue-*selective* efficacy (strong in muscle, weak in prostate).
- **Selectivity** — how many different targets it hits. Ipamorelin is *selective* (only the ghrelin receptor); older GHRPs also hit cortisol/prolactin receptors — that's why ipamorelin has fewer side effects.
- **Dose-response** — more dose = more effect, up to a ceiling (or a toxicity cliff, as with DNP where the effective and lethal doses nearly overlap — the **therapeutic index**, the safety gap between "works" and "harms").
- **Allosteric modulation** — binding a site *other* than the main one to tune the receptor up or down (L-theanine and the racetams do this).
- **Tolerance / downregulation** — with constant stimulation, the cell removes receptors, so you need more for the same effect (caffeine, nicotine, phenibut). This is why cycling matters.

```learn
{"takeaways":["An agonist activates a receptor; an antagonist blocks it; partial/inverse agonists activate weakly or below baseline.","Affinity (how tightly it binds) ≠ efficacy (how big an effect) — SARMs bind the androgen receptor with tissue-selective efficacy.","Dose-response has a ceiling, and sometimes a toxicity cliff; the therapeutic index is the safety gap between effective and toxic dose (razor-thin for DNP).","Constant stimulation causes tolerance (receptor downregulation) — which is why stimulants need cycling."],"quiz":[{"q":"What's the difference between an agonist and an antagonist?","a":"An agonist activates a receptor (mimics the natural signal, e.g. semaglutide on GLP-1); an antagonist occupies it without activating, blocking the natural signal (e.g. caffeine on adenosine)."},{"q":"A drug binds its target very tightly but produces little effect. Which is high, which is low — affinity or efficacy?","a":"High affinity (tight binding), low efficacy (small effect). They're independent — the whole point of SARMs."},{"q":"Why do stimulants stop working as well over time?","a":"Tolerance: constant stimulation makes the cell remove receptors (downregulation), so you need more for the same effect. Hence cycling."}]}
```

---

# MODULE 4 — Evidence literacy: how to think like a researcher (the real expert skill)

This is the module that makes you "better than a researcher who only knows their niche." A compound's star rating is only as trustworthy as your ability to check it yourself.

### The hierarchy of evidence (weakest → strongest)
1. **In vitro** ("in glass") — cells in a dish. Shows a mechanism is *possible*, not that it works in a person. Most "this molecule kills cancer cells" headlines are here.
2. **Animal (in vivo)** — mice/rats. Establishes it works in a living body — but most animal findings don't translate to humans. **This wiki caps animal-only compounds at ⭐⭐ for exactly this reason.** BPC-157's problem is that it's stuck here.
3. **Observational human studies** — cohort/epidemiology. Finds *associations* (spermidine-eaters live longer) but cannot prove *causation* (confounding — maybe spermidine-eaters also exercise more).
4. **Randomized controlled trials (RCTs)** — randomly assign drug vs placebo. The gold standard, because randomization cancels out confounders. Double-blind = neither patient nor researcher knows who got what.
5. **Meta-analysis** — pools many RCTs for the most reliable estimate. The top of the pyramid.

### The numbers you must be able to read
- **p-value** — the chance the result was a fluke. p<0.05 is the convention, but "statistically significant" ≠ "meaningful."
- **Effect size** — *how big* the effect is. A supplement can be statistically significant and practically useless (2% change). Always ask "significant *and* large?"
- **Confidence interval** — the plausible range of the true effect. Wide interval = uncertain (small study).
- **Number needed to treat (NNT)** — how many people must take it for one to benefit. A powerful reframing of "does this matter."
- **Relative vs absolute risk** — "cuts risk 50%" (relative) can mean 2%→1% (absolute). Marketers quote relative; think in absolute.

### The traps
- **Publication bias** — positive results get published, null results get buried, so the literature looks rosier than reality.
- **Funding bias** — industry-funded supplement trials skew positive.
- **Surrogate endpoints** — a drug that improves a *marker* (LDL, testosterone) hasn't proven it improves an *outcome* (heart attacks, lifespan).
- **N and duration** — a 12-person, 4-week study proves little.

### The regulatory maps (so "approved" means something)
- **FDA drug approval:** Preclinical → Phase 1 (safety, small) → Phase 2 (does it work?) → Phase 3 (large confirmatory) → approval. "Phase 3" in an entry means late-stage, strong-but-unfinished (e.g., retatrutide).
- **Supplement vs drug:** supplements are regulated as food — not tested for efficacy before sale. "OTC" ≠ "proven."
- **Off-label:** an approved drug used for an unapproved purpose (rapamycin for longevity) — legal for doctors, but the evidence for that use may be thin.
- **WADA/USADA:** the sport-doping banned lists — most SARMs, peptides, EPO, stimulants. Relevant if you compete.
- **The 2026 peptide situation:** removal from FDA Category 2 (April 2026) ≠ approval; it only lifted a prohibition. Watch the July 2026 PCAC compounding decision. A literate reader holds "reclassified" and "approved" as different states.

```learn
{"takeaways":["Evidence hierarchy, weakest → strongest: in vitro → animal → observational → RCT → meta-analysis. This site caps animal-only compounds at ⭐⭐.","'Statistically significant' (p<0.05) ≠ meaningful — always ask for the effect SIZE too.","Relative risk ('cuts risk 50%') can hide a trivial absolute change (2%→1%); think in absolute terms.","'Approved', 'reclassified', 'off-label', and 'supplement' (sold as food, untested for efficacy) are different states — hold them apart."],"quiz":[{"q":"Rank by strength of evidence: a mouse study, a testimonial, a meta-analysis, an RCT.","a":"Meta-analysis > RCT > mouse study > testimonial."},{"q":"A label says a supplement 'cuts your risk by 50%'. Why might that mislead?","a":"It's a RELATIVE figure — 50% off a tiny baseline (say 2% → 1%) is a trivial absolute change. Always ask for the absolute effect."},{"q":"Why does this site cap animal-only compounds at two stars?","a":"Most animal findings don't translate to humans — animal data shows something works in a living body, not that it works in a person."}]}
```

---

# MODULE 5 — How to read an RNAwiki entry (and the core glossary)

Every entry has: **approval badge** (legal status) · **evidence stars** (human-evidence strength) · **technical mechanism** (the gene/receptor pathway) · **molecular target** (official links: [NCBI Gene] for the gene, [PubChem] for the molecule, [Mol\*/PDB] for the 3D structure) · **plain English** · **protocol/watch-out/bottom-line**.

**Core glossary** (every term used across the wiki — bookmark this):
- **Agonist / Antagonist** — activates / blocks a receptor
- **Ligand** — any molecule that binds a receptor
- **Receptor** — protein that receives a signal (GPCR, nuclear, ion-channel)
- **Enzyme** — protein that speeds a reaction (drugs often inhibit them)
- **Transporter** — membrane door that moves molecules in/out
- **Kinase / Phosphorylation** — enzyme that adds a phosphate = the cell's on/off switch
- **Transcription / Translation** — DNA→mRNA / mRNA→protein
- **Upregulate / Downregulate** — make more / less of a protein
- **Gene expression** — how much a gene is being used
- **Half-life** — time for blood level to halve
- **Bioavailability** — fraction reaching the bloodstream
- **First-pass** — liver destroying an oral dose before circulation
- **CYP450** — liver enzymes that metabolize drugs (interaction source)
- **Second messenger (cAMP)** — the internal relay after a receptor fires
- **Selectivity** — how few off-targets a drug hits
- **Tolerance / Downregulation** — receptors removed after overstimulation
- **Therapeutic index** — safety gap between effective and toxic dose
- **RCT / meta-analysis** — the gold-standard evidence forms
- **Effect size / p-value** — how big / how likely-real a result is
- **In vitro / in vivo** — in a dish / in a living body
- **HPTA** — hypothalamic-pituitary-testicular axis (the testosterone control loop steroids suppress)
- **HPA axis** — hypothalamic-pituitary-adrenal axis (the cortisol/stress loop)

---

## The visualization toolkit (free, embeddable — used across the site)
- **Compound structure (2D + 3D):** [PubChem](https://pubchem.ncbi.nlm.nih.gov/) — every molecule, embeddable.
- **Protein/receptor 3D structure:** [Mol\* at RCSB PDB](https://www.rcsb.org/) — open-source viewer (built by the Protein Data Bank, used by AlphaFold), embeds in-browser. See the actual fold of the androgen receptor, VEGFR2, mTOR.
- **Protein sequence & domains:** [UniProt](https://www.uniprot.org/) — the amino-acid chain and functional regions of any protein.
- **Predicted structures:** [AlphaFold DB](https://alphafold.ebi.ac.uk/) — 3D predictions for proteins without experimental structures.
- **Pathway maps:** [Reactome](https://reactome.org/) and [KEGG](https://www.genome.jp/kegg/) — the wiring diagrams for the Pathways module.

```learn
{"takeaways":["Every compound page carries: approval badge (legal status) · evidence stars (HUMAN-evidence strength) · technical mechanism (gene/receptor) · molecular target (official links) · plain English · protocol / watch-out / bottom-line.","The glossary is your key: agonist/antagonist, ligand, kinase/phosphorylation, transcription/translation, half-life, bioavailability, CYP450, therapeutic index, RCT/meta-analysis.","The visualization toolkit (PubChem, Mol*/RCSB PDB, UniProt, AlphaFold, Reactome/KEGG) lets you see the actual molecule, protein fold, and pathway — all free."],"quiz":[{"q":"On a compound page, what do the evidence stars measure — and what tag must an animal-only compound carry?","a":"The strength of HUMAN evidence. Animal-only data is capped at ⭐⭐ and must say 'animal'."},{"q":"Where would you go to see the real 3D fold of a receptor like the androgen receptor?","a":"Mol* at RCSB PDB (the Protein Data Bank's in-browser viewer). PubChem shows small-molecule structures; AlphaFold predicts proteins that lack an experimental structure."}]}
```

*Next: the Pathways module — the ~15 master cascades every compound plugs into.*
