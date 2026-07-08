/* RNAwiki — Supplement interaction engine.  window.RNAWIKI_INTERACTIONS
 *
 * Exhaustive-by-RULE, not by pair: every compound is TAGGED with its interaction-relevant
 * pharmacology (via category defaults + name matches), then a bounded set of authored rules
 * fires when tags collide. Covers all 170 compounds; the authored surface is ~20 tags + ~20
 * rules of established pharmacology a clinician can audit. Deterministic — no runtime AI.
 * Each danger/blunt/timing rule carries a plain-English WHY (educate, don't just warn) and,
 * where relevant, a pathway link. Synergies suggest what pairs WELL. Not medical advice.
 *
 * ANTI-SLOP: tags assigned only where confident; danger rules err toward established, textbook
 * interactions. AI drafted this; a pharmacist should review before it's treated as authoritative.
 */
window.RNAWIKI_INTERACTIONS = {
  // Category → default tags (broad, safe defaults; refined by nameTags below).
  catTags: {
    "SARMs & SELECTIVE METABOLIC AGENTS": ["hpta_suppressive"],
    "ANABOLIC-ANDROGENIC STEROIDS": ["hpta_suppressive"]
  },

  // name substring (lowercased) → tags. All matches apply; order irrelevant.
  nameTags: [
    // serotonergic → serotonin-syndrome risk
    { m: "5-htp", t: ["serotonergic"] }, { m: "tryptophan", t: ["serotonergic"] },
    { m: "ssri", t: ["serotonergic"] }, { m: "sertraline", t: ["serotonergic"] }, { m: "escitalopram", t: ["serotonergic"] },
    { m: "sam-e", t: ["serotonergic"] }, { m: "saffron", t: ["serotonergic"] }, { m: "psilocybin", t: ["serotonergic"] },
    { m: "ketamine", t: ["serotonergic", "cns_depressant"] },
    // stimulants → additive cardiovascular strain
    { m: "caffeine", t: ["stimulant"] }, { m: "ephedrine", t: ["stimulant"] }, { m: "yohimbine", t: ["stimulant"] },
    { m: "clenbuterol", t: ["stimulant"] }, { m: "synephrine", t: ["stimulant"] }, { m: "higenamine", t: ["stimulant"] },
    { m: "theacrine", t: ["stimulant"] }, { m: "phentermine", t: ["stimulant"] }, { m: "amphetamine", t: ["stimulant"] },
    { m: "lisdexamfetamine", t: ["stimulant"] }, { m: "methylphenidate", t: ["stimulant"] }, { m: "modafinil", t: ["stimulant"] },
    { m: "bromantane", t: ["stimulant"] }, { m: "nicotine", t: ["stimulant"] }, { m: "pt-141", t: ["stimulant"] },
    { m: "bupropion", t: ["stimulant"] },
    // blood-thinning → additive bleeding
    { m: "nattokinase", t: ["blood_thinning"] }, { m: "omega-3", t: ["blood_thinning"] }, { m: "ginkgo", t: ["blood_thinning"] },
    { m: "vitamin e", t: ["blood_thinning"] }, { m: "resveratrol", t: ["blood_thinning"] },
    // strong CNS depressants → additive sedation / respiratory depression
    { m: "phenibut", t: ["cns_depressant"] }, { m: "zolpidem", t: ["cns_depressant"] }, { m: "z-drug", t: ["cns_depressant"] },
    { m: "trazodone", t: ["cns_depressant"] }, { m: "orexin", t: ["cns_depressant"] }, { m: "suvorexant", t: ["cns_depressant"] },
    { m: "lemborexant", t: ["cns_depressant"] }, { m: "doxylamine", t: ["cns_depressant"] },
    // mild sedatives → gentle stacking note only
    { m: "melatonin", t: ["sedative_mild"] }, { m: "valerian", t: ["sedative_mild"] }, { m: "apigenin", t: ["sedative_mild"] },
    // glucose-lowering → additive hypoglycemia
    { m: "metformin", t: ["hypoglycemic"] }, { m: "berberine", t: ["hypoglycemic"] }, { m: "acarbose", t: ["hypoglycemic"] },
    { m: "semaglutide", t: ["hypoglycemic", "glp1"] }, { m: "tirzepatide", t: ["hypoglycemic", "glp1"] }, { m: "retatrutide", t: ["hypoglycemic", "glp1"] },
    { m: "liraglutide", t: ["hypoglycemic", "glp1"] }, { m: "orforglipron", t: ["hypoglycemic", "glp1"] }, { m: "cagrilintide", t: ["hypoglycemic"] },
    { m: "sglt2", t: ["hypoglycemic"] }, { m: "insulin", t: ["hypoglycemic"] }, { m: "alpha-lipoic", t: ["hypoglycemic", "antioxidant_hd"] },
    { m: "myo-inositol", t: ["hypoglycemic"] },
    // blood-pressure lowering / nitrate / PDE-5
    { m: "beetroot", t: ["hypotensive", "nitrate"] }, { m: "nitrate", t: ["hypotensive", "nitrate"] },
    { m: "pde-5", t: ["hypotensive", "pde5"] }, { m: "sildenafil", t: ["hypotensive", "pde5"] }, { m: "tadalafil", t: ["hypotensive", "pde5"] },
    { m: "citrulline", t: ["hypotensive"] }, { m: "agmatine", t: ["hypotensive"] }, { m: "taurine", t: ["hypotensive"] },
    // hepatotoxic (liver strain) — oral AAS + a few others
    { m: "green tea", t: ["hepatotoxic"] }, { m: "red yeast rice", t: ["statin_like", "hepatotoxic"] },
    { m: "dnp", t: ["do_not_use", "hepatotoxic"] }, { m: "dinitrophenol", t: ["do_not_use", "hepatotoxic"] },
    { m: "tamoxifen", t: ["hepatotoxic"] }, { m: "oxandrolone", t: ["hepatotoxic"] }, { m: "stanozolol", t: ["hepatotoxic"] },
    { m: "winstrol", t: ["hepatotoxic"] }, { m: "dianabol", t: ["hepatotoxic"] }, { m: "methandrostenolone", t: ["hepatotoxic"] },
    { m: "anadrol", t: ["hepatotoxic"] }, { m: "oxymetholone", t: ["hepatotoxic"] }, { m: "trenbolone", t: ["hepatotoxic"] },
    { m: "rad-140", t: ["hepatotoxic"] }, { m: "lgd-4033", t: ["hepatotoxic"] }, { m: "s-23", t: ["hepatotoxic"] },
    // statin-like
    { m: "statin", t: ["statin_like"] }, { m: "atorvastatin", t: ["statin_like"] }, { m: "rosuvastatin", t: ["statin_like"] },
    // niacin (myopathy risk with statins)
    { m: "niacin", t: ["niacin"] },
    // grapefruit-type metabolism
    { m: "bergamot", t: ["cyp3a4"] },
    // minerals that compete for absorption
    { m: "calcium", t: ["divalent_mineral"] }, { m: "iron", t: ["divalent_mineral", "iron"] }, { m: "zinc", t: ["divalent_mineral", "zinc"] },
    { m: "magnesium", t: ["divalent_mineral"] }, { m: "strontium", t: ["divalent_mineral"] }, { m: "boron", t: ["divalent_mineral"] },
    // high-dose antioxidants (can blunt training adaptation)
    { m: "n-acetylcysteine", t: ["antioxidant_hd"] }, { m: "vitamin c", t: ["antioxidant_hd", "vitc"] },
    { m: "astaxanthin", t: ["antioxidant_hd"] },
    // mTOR
    { m: "rapamycin", t: ["mtor_inhibitor", "immunosuppress"] }, { m: "eaas", t: ["mtor_activator"] }, { m: "bcaa", t: ["mtor_activator"] },
    { m: "hmb", t: ["mtor_activator"] }, { m: "igf-1", t: ["mtor_activator", "hypoglycemic"] },
    // immune direction
    { m: "beta-glucan", t: ["immunostim"] }, { m: "mushroom", t: ["immunostim"] }, { m: "reishi", t: ["immunostim"] },
    { m: "andrographis", t: ["immunostim"] }, { m: "ll-37", t: ["immunostim"] }, { m: "thymosin", t: ["immunostim"] },
    // aromatase inhibitors (estrogen crash)
    { m: "anastrozole", t: ["aromatase_inhibitor"] }, { m: "exemestane", t: ["aromatase_inhibitor"] },
    { m: "letrozole", t: ["aromatase_inhibitor"] }, { m: "aromatase", t: ["aromatase_inhibitor"] },
    // 5-alpha-reductase inhibitors (redundant if doubled)
    { m: "finasteride", t: ["5ar_inhibitor"] }, { m: "dutasteride", t: ["5ar_inhibitor"] },
    // thyroid hormone (mineral-blocked absorption)
    { m: "t3 / t4", t: ["thyroid"] }, { m: "levothyroxine", t: ["thyroid"] }, { m: "liothyronine", t: ["thyroid"] },
    // exogenous testosterone
    { m: "testosterone", t: ["hpta_suppressive"] }
  ],

  // Rules: fire when every `need` [tag, minDistinctCompounds] is satisfied by the stack.
  // tier: danger | blunt | timing.  Each has a plain-English why + action; optional pathway.
  rules: [
    { id: "serotonin", tier: "danger", need: [["serotonergic", 2]],
      title: "Serotonin syndrome risk",
      why: "Both raise serotonin — one blocks its reuptake, the other supplies the raw material. Together it can build up faster than the body clears it and overstimulate receptors.",
      action: "Don't combine serotonin-raisers. If you take a prescribed antidepressant, treat 5-HTP / SAM-e / St John's Wort as off-limits without a doctor.", pathway: "/pathway/7" },
    { id: "bleeding", tier: "danger", need: [["blood_thinning", 2]],
      title: "Additive bleeding risk",
      why: "Each of these independently slows clotting (dissolving fibrin or making platelets less sticky). Stacked, the effects add up.",
      action: "Avoid stacking blood-thinners; if you're on a prescribed anticoagulant (warfarin, a DOAC, aspirin), don't add these without medical advice." },
    { id: "nitrate_pde5", tier: "danger", need: [["nitrate", 1], ["pde5", 1]],
      title: "Nitrate + PDE-5 = blood-pressure crash",
      why: "Nitrates (like beetroot) and PDE-5 drugs (sildenafil / tadalafil) both widen blood vessels through the same NO→cGMP route. Together, blood pressure can drop dangerously.",
      action: "Never combine a nitrate source with a PDE-5 inhibitor.", pathway: "/pathway/4" },
    { id: "sedation", tier: "danger", need: [["cns_depressant", 2]],
      title: "Additive sedation / breathing risk",
      why: "Each of these slows the brain's arousal system. Stacked, sedation deepens toward slowed breathing — phenibut with a Z-drug or alcohol is a documented cause of overdoses.",
      action: "Don't layer strong sedatives, and never combine phenibut with alcohol." },
    { id: "double_statin", tier: "danger", need: [["statin_like", 2]],
      title: "Double statin — muscle-damage risk",
      why: "Red yeast rice *is* a natural statin. Taking it alongside a prescription statin is effectively a double dose, which raises the risk of muscle breakdown (rhabdomyolysis).",
      action: "Pick one. Never combine red yeast rice with a prescribed statin." },
    { id: "statin_niacin", tier: "danger", need: [["statin_like", 1], ["niacin", 1]],
      title: "Statin + high-dose niacin — myopathy risk",
      why: "High-dose niacin adds to a statin's small risk of muscle injury.",
      action: "Only combine under medical supervision; watch for muscle aches." },
    { id: "stim_stack", tier: "danger", need: [["stimulant", 2]],
      title: "Stacked stimulants — cardiovascular strain",
      why: "Each drives the same fight-or-flight system. Stacked, heart rate and blood pressure compound — the classic ephedrine + caffeine combo is the cautionary example.",
      action: "Use one stimulant at a time; don't layer them." },
    { id: "hypoglycemia", tier: "danger", need: [["hypoglycemic", 2]],
      title: "Additive low-blood-sugar risk",
      why: "Two or more glucose-lowering agents together can drop blood sugar too far — shakiness, confusion, and in severe cases worse. Insulin plus anything else is especially risky.",
      action: "Combine glucose-loweres only under medical supervision; never self-stack with insulin." },
    { id: "liver", tier: "danger", need: [["hepatotoxic", 2]],
      title: "Stacked liver strain",
      why: "The liver clears these and takes strain doing it. Two together (e.g. an oral steroid plus high-dose green-tea extract) stack the load.",
      action: "Don't combine oral hepatotoxic compounds; get bloodwork if unavoidable." },
    { id: "estrogen_crash", tier: "danger", need: [["aromatase_inhibitor", 2]],
      title: "Estrogen crash",
      why: "Aromatase inhibitors shut down estrogen production. Doubled, estrogen can crash — joint pain, crushed libido, mood and bone problems.",
      action: "Use one AI, dosed to bloodwork; don't zero out estrogen." },
    { id: "dnp", tier: "danger", need: [["do_not_use", 1]],
      title: "DNP — do not use",
      why: "DNP uncouples cellular energy production; the effective and lethal doses nearly overlap, and it can cause fatal overheating.",
      action: "There is no safe way to use or combine DNP." },

    { id: "mtor_conflict", tier: "blunt", need: [["mtor_inhibitor", 1], ["mtor_activator", 1]],
      title: "Opposing growth signals",
      why: "Rapamycin lowers growth signalling for longevity/autophagy; IGF-1 and high leucine (EAAs/HMB) raise it. Run together, each undoes the other's purpose.",
      action: "Separate by goal and timing; don't run them the same day.", pathway: "/pathway/2" },
    { id: "immune_conflict", tier: "blunt", need: [["immunostim", 1], ["immunosuppress", 1]],
      title: "Opposing immune direction",
      why: "Mushrooms / beta-glucans push the immune system up; rapamycin pushes it down. Together they pull in opposite directions.",
      action: "Pick a direction for your goal." },
    { id: "antioxidant_training", tier: "blunt", need: [["antioxidant_hd", 2]],
      title: "May blunt training adaptation",
      why: "The brief oxidative stress of a hard workout is the signal that tells muscle and mitochondria to adapt. Mega-dosing antioxidants around training can mop up that signal.",
      action: "Get antioxidants from food; keep high doses away from your workout window.", pathway: "/pathway/11" },
    { id: "hpta_stack", tier: "blunt", need: [["hpta_suppressive", 2]],
      title: "Compounded testosterone shutdown",
      why: "Each of these suppresses your natural testosterone. Stacked, the shutdown is deeper and recovery is harder.",
      action: "Understand the suppression and have a recovery plan; this is not casual stacking.", pathway: "/pathway/9" },

    { id: "mineral", tier: "timing", need: [["divalent_mineral", 2]],
      title: "Minerals compete — space them out",
      why: "Calcium, iron, zinc and magnesium ride the same intestinal transporter and compete; whichever is in excess wins, and the other barely absorbs.",
      action: "Take competing minerals about 2 hours apart." },
    { id: "thyroid_mineral", tier: "timing", need: [["thyroid", 1], ["divalent_mineral", 1]],
      title: "Minerals block thyroid absorption",
      why: "Calcium, iron and magnesium bind thyroid hormone in the gut and stop it being absorbed.",
      action: "Take thyroid medication 4 hours away from minerals and coffee." },
    { id: "zinc_copper", tier: "timing", need: [["zinc", 1]],
      title: "Long-term zinc depletes copper",
      why: "High zinc switches on a gut protein that carries copper out in the stool — over weeks, plenty of zinc can quietly cause copper deficiency.",
      action: "If taking zinc long-term, add ~1 mg copper per 10–15 mg zinc." },
    { id: "cyp3a4_statin", tier: "timing", need: [["cyp3a4", 1], ["statin_like", 1]],
      title: "Bergamot may raise statin levels",
      why: "Bergamot (like grapefruit) can slow the gut enzyme that breaks down statins, nudging their levels up.",
      action: "Be cautious combining; ask a pharmacist about your specific statin." }
  ],

  // Synergies — pairs that work well together (match by name substring; both must be present).
  synergies: [
    { a: "statin", b: "coq10", title: "Statin + CoQ10", why: "Statins deplete CoQ10; replacing it can ease the muscle aches that make people quit statins." },
    { a: "caffeine", b: "theanine", title: "Caffeine + L-Theanine", why: "Theanine smooths caffeine's jitter for clean focus without the crash." },
    { a: "iron", b: "vitamin c", title: "Iron + Vitamin C", why: "Vitamin C converts iron to its absorbable form and multiplies uptake." },
    { a: "collagen", b: "vitamin c", title: "Collagen + Vitamin C", why: "Vitamin C is the cofactor your body needs to build collagen from the peptides." },
    { a: "vitamin d", b: "magnesium", title: "Vitamin D + Magnesium", why: "Magnesium is a cofactor for activating vitamin D — low magnesium blunts D's effect." },
    { a: "glycine", b: "n-acetylcysteine", title: "Glycine + NAC (GlyNAC)", why: "Together they restore glutathione more than either alone." },
    { a: "creatine", b: "beta-alanine", title: "Creatine + Beta-Alanine", why: "Complementary buffers — creatine fuels short bursts, beta-alanine buffers acid for longer sets." }
  ]
};
