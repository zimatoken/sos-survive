// === SECTION: MEDICINE (ENGLISH) ===
const medicineDataEn = {
  category: "medicine",
  title: "🩹 Medicine",
  description: "First aid and treatment in the field",

  questions: [
    {
      id: "symptom",
      text: "What happened? (choose the main problem)",
      type: "single",
      options: [
        { id: "bleeding",  label: "🩸 Bleeding / wound",    tags: ["bleeding", "wound", "trauma"] },
        { id: "fracture",  label: "🦴 Fracture / dislocation",       tags: ["fracture", "bone", "immobilize"] },
        { id: "burn",      label: "🔥 Burn",                   tags: ["burn", "heat", "cool"] },
        { id: "hypothermia", label: "❄️ Hypothermia",      tags: ["cold", "hypothermia", "warmth"] },
        { id: "heatstroke", label: "☀️ Heatstroke",        tags: ["heat", "dehydration", "cool"] },
        { id: "poison",    label: "☠️ Poisoning / snake bite", tags: ["poison", "venom", "toxin"] },
        { id: "bite",      label: "🦟 Insect / tick bite", tags: ["bite", "insect", "tick"] },
        { id: "infection", label: "🦠 Infection / inflammation",  tags: ["infection", "bacteria", "antiseptic"] },
        { id: "allergy",   label: "🤧 Allergy",             tags: ["allergy", "rash", "swelling"] },
        { id: "shock",     label: "😰 Shock / panic",          tags: ["shock", "panic", "psychological"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is the condition?",
      type: "single",
      options: [
        { id: "mild",    label: "🟢 Mild — can move, conscious", tags: ["mild", "self_treat"] },
        { id: "moderate", label: "🟡 Moderate — painful, but conscious", tags: ["moderate", "help_needed"] },
        { id: "severe",  label: "🔴 Severe — unconscious, severe pain, bleeding", tags: ["severe", "emergency"] }
      ]
    },
    {
      id: "time",
      text: "How long since the injury?",
      type: "single",
      options: [
        { id: "minutes",  label: "⏱️ Just now (up to 30 min)", tags: ["fresh", "acute"] },
        { id: "hours",    label: "🕐 1-6 hours",            tags: ["recent", "treatable"] },
        { id: "day",      label: "🌅 Over 6 hours",       tags: ["old", "chronic"] },
        { id: "days",     label: "📅 Over 24 hours",         tags: ["old_wound", "infection_risk"] }
      ]
    },
    {
      id: "inventory",
      text: "What medications do you have?",
      type: "multi",
      options: [
        { id: "bandage",   label: "🧻 Bandage / plaster",           tags: ["bandage", "dressing"] },
        { id: "antiseptic", label: "🧴 Antiseptic / alcohol",       tags: ["antiseptic", "disinfect"] },
        { id: "painkiller", label: "💊 Painkiller",           tags: ["pain", "relief"] },
        { id: "knife",     label: "🔪 Knife / multitool",           tags: ["tool", "cutting"] },
        { id: "fire",      label: "🔥 Fire / matches",            tags: ["heat", "sterilize"] },
        { id: "herbs",     label: "🌿 Medicinal herbs",       tags: ["herbs", "natural"] },
        { id: "nothing",   label: "❌ Nothing",                tags: ["primitive", "natural"] }
      ]
    }
  ],

  solutions: [
    // ===== FAST SOLUTIONS =====
    {
      id: "bleeding_pressure",
      title: "🩸 Bleeding — direct pressure",
      description: "For any bleeding: press the wound with clean cloth/bandage. Hold for 10-15 minutes. Don't remove soaked cloth — add layers on top. For arterial (pulsating) — tourniquet above the wound.",
      conditions: { symptom: ["bleeding"], severity: ["mild", "moderate", "severe"], time: ["minutes", "hours", "day"], inventory: ["bandage", "antiseptic", "nothing", "knife", "fire"] },
      priority: "fast", reliability: "high",
      time_estimate: "2-10 min", yield_estimate: "bleeding stopped",
      tags: ["bleeding", "first_aid", "universal", "critical"],
      steps: [
        "🧤 Wear gloves or use clean cloth",
        "🩹 Press wound with clean cloth/bandage/shirt",
        "⏳ Hold pressure for 10-15 minutes, don't lift",
        "❌ Don't remove soaked cloth — add layers on top",
        "🔄 For arterial (pulsing, bright red) — tourniquet above wound",
        "🖊️ Mark tourniquet application time"
      ],
      warnings: [
        "🚫 Tourniquet — only life-threatening, mark time",
        "⏰ Release tourniquet every 20-30 minutes for 5 minutes",
        "🦠 Don't use dirty cloth — infection",
        "🩸 For venous bleeding (dark blood) — pressure dressing"
      ]
    },
    {
      id: "shock_treatment",
      title: "😰 Shock / panic — psychological help",
      description: "For shock (pale, cold sweat, weak pulse) — lay down, elevate legs (if no spinal injury). For panic — breathe together, count to 10. Speak calmly, confidently.",
      conditions: { symptom: ["shock"], severity: ["mild", "moderate", "severe"], time: ["minutes", "hours"], inventory: ["nothing"] },
      priority: "fast", reliability: "high",
      time_estimate: "5-15 min", yield_estimate: "stabilization",
      tags: ["shock", "panic", "psychological", "emergency"],
      steps: [
        "😰 Lay down, elevate legs (if no spinal injury)",
        "🧘 Breathe together: 4 sec inhale, 4 sec pause, 4 sec exhale",
        "🗣️ Speak calmly, confidently: 'you're safe, I'm here'",
        "🧣 Cover, warm if cold",
        "💧 Give water in small sips (if conscious)",
        "📞 Call for help if possible"
      ],
      warnings: [
        "🚫 Don't give alcohol, coffee, unnecessary pills",
        "🔄 Repeat: 'You're breathing with me. You're safe'",
        "🧠 Panic is contagious — stay calm yourself",
        "🏃 In severe shock — don't let them stand or move"
      ]
    },
    {
      id: "burn_cool",
      title: "🔥 Burn — cooling",
      description: "For burns immediately cool under running water for 10-20 minutes. No ice! No oil! No ointments! Cover with sterile cloth. For extensive burns — prevent hypothermia.",
      conditions: { symptom: ["burn"], severity: ["mild", "moderate", "severe"], time: ["minutes", "hours"], inventory: ["bandage", "antiseptic", "nothing", "knife"] },
      priority: "fast", reliability: "high",
      time_estimate: "10-30 min", yield_estimate: "reduced damage",
      tags: ["burn", "cool", "first_aid", "universal"],
      steps: [
        "💧 Cool under running cold water for 10-20 minutes",
        "❌ Do NOT use ice — damages tissue",
        "🧈 Do NOT apply oil, sour cream, ointments — traps heat",
        "🧻 Cover with sterile cloth/bandage, don't stick to wound",
        "🧊 For extensive burns — prevent hypothermia, give water"
      ],
      warnings: [
        "🔥 Burns >10% body — shock, need medical help",
        "😷 Facial burns, airways — life-threatening",
        "🧪 Chemical burns — rinse with water 20-30 minutes",
        "💊 Give painkiller for severe pain"
      ]
    },
    {
      id: "hypothermia_warm",
      title: "❄️ Hypothermia — warming",
      description: "For hypothermia: remove wet clothing, wrap in dry blankets. Warm gradually — not hot water, not by fire. Give warm sweet drinks. Rub extremities, but not the body.",
      conditions: { symptom: ["hypothermia"], severity: ["moderate", "severe"], time: ["minutes", "hours"], inventory: ["blanket", "fire", "nothing", "knife"] },
      priority: "fast", reliability: "high",
      time_estimate: "30-60 min", yield_estimate: "gradual warming",
      tags: ["cold", "hypothermia", "warmth", "winter"],
      steps: [
        "🧥 Remove wet clothing — it conducts heat away",
        "🧣 Wrap in dry blankets, cloth, leaves, pine needles",
        "🌡️ Warm gradually — NOT hot water, NOT by fire",
        "🍵 Give warm sweet drinks — tea, sugar solution",
        "🔄 Rub extremities (hands, feet), but NOT body — shock",
        "🧊 For severe hypothermia — warm torso with warm compresses"
      ],
      warnings: [
        "🚫 Do NOT warm rapidly — blood vessels burst, shock",
        "🍷 Do NOT give alcohol — dilates vessels, accelerates heat loss",
        "😴 If unconscious — recovery position, monitor breathing",
        "❄️ Body temperature <32°C — critical, need help"
      ]
    },
    {
      id: "heatstroke_cool",
      title: "☀️ Heatstroke — cooling",
      description: "For heatstroke: move to shade, undress, pour water, ventilate. Give small sips of water. If unconscious — recovery position, call for help.",
      conditions: { symptom: ["heatstroke"], severity: ["moderate", "severe"], time: ["minutes", "hours"], inventory: ["nothing", "knife", "bandage"] },
      priority: "fast", reliability: "high",
      time_estimate: "10-30 min", yield_estimate: "temperature reduction",
      tags: ["heat", "dehydration", "cool", "summer"],
      steps: [
        "🌳 Move to shade or cool place",
        "🧥 Undress, loosen clothing",
        "💦 Pour water, wrap in wet cloth",
        "🌬️ Ventilate — fan, leaves, air movement",
        "💧 Give small sips of water — with salt/sugar",
        "😴 If unconscious — recovery position, monitor breathing"
      ],
      warnings: [
        "🚫 Don't give lots of water at once — vomiting",
        "🚫 Don't give alcohol, coffee — dehydration",
        "🌡️ Temperature >40°C — critical, need ambulance",
        "🧊 For convulsions — massage muscles, give water"
      ]
    },
    {
      id: "snake_bite",
      title: "🐍 Snake bite — what to do",
      description: "For snake bite: don't suck venom, don't apply tourniquet, don't make cuts. Immobilize limb, keep below heart level. Remember snake color. Call for help.",
      conditions: { symptom: ["poison"], severity: ["moderate", "severe"], time: ["minutes", "hours"], inventory: ["bandage", "antiseptic", "nothing"] },
      priority: "fast", reliability: "high",
      time_estimate: "5-15 min", yield_estimate: "first aid",
      tags: ["snake", "venom", "emergency", "bite"],
      steps: [
        "🚫 Don't suck venom — useless, infection",
        "🚫 Don't apply tourniquet — amputation",
        "🚫 Don't make cuts — infection and bleeding",
        "🦴 Immobilize limb, keep below heart level",
        "🐍 Remember snake color and size (for antivenom)",
        "📞 Call for help or walk to people (don't run!)"
      ],
      warnings: [
        "⚡ Venom spreads through lymph — move slowly",
        "⏳ Time is critical — first 30 minutes",
        "💊 Antihistamines (if available) — may help",
        "🩸 For swelling — loosen jewelry, clothing"
      ]
    },
    {
      id: "insect_bite",
      title: "🦟 Insect / tick bite",
      description: "For bee/wasp sting: remove stinger (don't squeeze!), apply cold. For tick: remove with tweezers (don't pull, twist), apply antiseptic to site. For allergy — antihistamine.",
      conditions: { symptom: ["bite"], severity: ["mild", "moderate", "severe"], time: ["minutes", "hours", "day"], inventory: ["antiseptic", "bandage", "nothing"] },
      priority: "fast", reliability: "high",
      time_estimate: "5-15 min", yield_estimate: "bite treatment",
      tags: ["insect", "tick", "bite", "allergy"],
      steps: [
        "🐝 Bee/wasp: remove stinger (don't squeeze!), apply cold",
        "🕷️ Spider: wash, apply cold, observe",
        "🕷️ Tick: remove with tweezers (twist counter-clockwise), don't pull!",
        "🧴 Apply antiseptic to bite site",
        "💊 For allergy (swelling, rash) — antihistamine",
        "📏 Mark bite time, monitor redness"
      ],
      warnings: [
        "⚠️ Tick: if head remains — remove with needle/knife",
        "🦟 For allergic reaction — antihistamine immediately",
        "🌡️ Face/throat swelling — life-threatening, go to hospital",
        "🧪 Don't crush tick — infection"
      ]
    },

    // ===== MEDIUM TIME SOLUTIONS =====
    {
      id: "fracture_splint",
      title: "🦴 Fracture — splint / immobilization",
      description: "Don't try to set the bone. Immobilize fracture with splint (stick, branch, umbrella). Splint must cover joints above and below fracture. For open fracture — cover wound, don't set bone.",
      conditions: { symptom: ["fracture"], severity: ["moderate", "severe"], time: ["minutes", "hours"], inventory: ["bandage", "rope", "knife", "nothing"] },
      priority: "medium", reliability: "high",
      time_estimate: "10-20 min", yield_estimate: "fracture immobilization",
      tags: ["fracture", "immobilize", "trauma", "bone"],
      steps: [
        "🚫 Don't try to set bone — only doctor",
        "🪵 Find splint: straight stick, branch, umbrella, ski pole",
        "📏 Splint must be longer than joints above and below fracture",
        "🪢 Tie splint with rope/cloth/paracord — not too tight",
        "🩸 For open fracture — cover wound with clean cloth",
        "🧊 Apply cold (through cloth) to reduce swelling"
      ],
      warnings: [
        "🔄 Check pulse below splint — don't constrict",
        "🦵 For femur fracture — splint from armpit to heel",
        "🦠 Open fracture — high infection risk, need antiseptic",
        "💊 Give painkiller for severe pain"
      ]
    },
    {
      id: "infection_wound",
      title: "🦠 Wound infection — treatment",
      description: "For purulent wound, redness, swelling: wash with water, treat with antiseptic. For furuncle — don't squeeze, warm compresses. For fever — rest, drink, painkiller.",
      conditions: { symptom: ["infection"], severity: ["mild", "moderate"], time: ["hours", "day", "days"], inventory: ["antiseptic", "bandage", "painkiller", "nothing", "herbs"] },
      priority: "medium", reliability: "medium",
      time_estimate: "10-20 min", yield_estimate: "prevention of complications",
      tags: ["infection", "wound", "antiseptic", "care"],
      steps: [
        "🧼 Wash wound with running water and soap (if available)",
        "🧴 Treat with antiseptic: iodine, alcohol, peroxide",
        "🧻 Apply sterile dressing, change daily",
        "🧊 For purulent wound — warm compresses for maturation",
        "🌿 For fever — rest, drink, painkiller",
        "🌿 Use herbs: plantain, calendula, chamomile (poultices)"
      ],
      warnings: [
        "🚫 Don't squeeze furuncle — infection into blood",
        "🌡️ Fever >38.5°C for 3+ days — need doctor",
        "🔴 Red streak from wound — lymphangitis, see doctor immediately",
        "🦠 Greenish pus with odor — serious infection"
      ]
    },
    {
      id: "allergy_treatment",
      title: "🤧 Allergic reaction",
      description: "For allergy: remove allergen, take antihistamine (diphenhydramine, suprastin, loratadine). For skin reaction — cold compress. For face/throat swelling — go to hospital immediately.",
      conditions: { symptom: ["allergy"], severity: ["mild", "moderate", "severe"], time: ["minutes", "hours"], inventory: ["antiseptic", "bandage", "painkiller", "nothing"] },
      priority: "medium", reliability: "medium",
      time_estimate: "10-20 min", yield_estimate: "symptom relief",
      tags: ["allergy", "rash", "swelling", "medication"],
      steps: [
        "🔍 Remove allergen (food, pollen, bite, medication)",
        "💊 Take antihistamine (if available): suprastin, loratadine, diphenhydramine",
        "🧊 For skin rash/itch — cold compress",
        "🌿 For throat swelling — give air, sitting position",
        "📞 For face/throat swelling, breathing difficulty — go to hospital immediately"
      ],
      warnings: [
        "🚨 Quincke's edema — life-threatening, go to hospital immediately",
        "💊 Don't give antihistamines unnecessarily",
        "🧊 Cold — best for local allergy",
        "📝 Remember what you're allergic to — avoid in future"
      ]
    },
    {
      id: "herbal_treatment",
      title: "🌿 Herbal treatment (field medicine)",
      description: "In the field use plantain (hemostatic, antiseptic), nettle (vitamins, hemostatic), chamomile (antiseptic, soothing), calendula (wound healing).",
      conditions: { symptom: ["bleeding", "infection", "burn", "bite"], severity: ["mild", "moderate"], time: ["minutes", "hours", "day", "days"], inventory: ["herbs", "nothing", "knife"] },
      priority: "medium", reliability: "medium",
      time_estimate: "10-30 min", yield_estimate: "natural help",
      tags: ["herbs", "natural", "field_medicine", "primitive"],
      steps: [
        "🌿 Plantain: apply leaf to wound (hemostatic)",
        "🍃 Nettle: apply (hemostatic) or brew tea",
        "🌸 Chamomile: brew tea (antiseptic, soothing)",
        "🌼 Calendula: poultices on wounds (healing)",
        "🌳 Oak/willow bark: decoction for washing wounds (tannins)",
        "🧊 Celandine: juice on warts/fungus (with caution!)"
      ],
      warnings: [
        "🚫 Celandine is toxic — only topical, don't swallow",
        "🌿 Not all herbs are safe — learn before using",
        "💊 Herbs — help, but not substitute for antibiotics",
        "🧪 If allergic to plants — don't use"
      ]
    },
    {
      id: "wound_cleaning",
      title: "🧼 Wound cleaning (deep)",
      description: "For deep wound: wash with water, remove foreign bodies (not deep!). Treat with antiseptic. For heavy contamination — can wash with hydrogen peroxide. Apply dressing.",
      conditions: { symptom: ["bleeding", "infection"], severity: ["moderate", "severe"], time: ["minutes", "hours"], inventory: ["antiseptic", "bandage", "knife", "nothing", "herbs"] },
      priority: "medium", reliability: "medium",
      time_estimate: "15-30 min", yield_estimate: "wound cleaning",
      tags: ["wound", "cleaning", "first_aid", "deep"],
      steps: [
        "💧 Wash wound with running water (boiled!)",
        "🧤 Remove surface foreign bodies (don't dig deep!)",
        "🧴 Treat with antiseptic: iodine, alcohol, peroxide",
        "🧻 Apply sterile dressing",
        "🔄 Change dressing daily or when soaked",
        "🌿 For inflammation — chamomile/calendula poultices"
      ],
      warnings: [
        "🦠 Deep wounds — high tetanus risk, need doctor",
        "🧪 Peroxide — only for washing, don't pour deep",
        "🧤 Use clean hands, sterilized tool",
        "🩸 For arterial bleeding — stop first, then clean"
      ]
    },

    // ===== SLOW SOLUTIONS =====
    {
      id: "infection_antibiotic",
      title: "💊 Infection — antibiotics (if available)",
      description: "For serious infection (pus, fever, redness): take antibiotics strictly according to instructions. Amoxicillin, ampicillin, azithromycin — broad spectrum. Don't stop the course.",
      conditions: { symptom: ["infection"], severity: ["moderate", "severe"], time: ["hours", "day", "days"], inventory: ["antiseptic", "bandage", "painkiller", "nothing"] },
      priority: "slow", reliability: "high",
      time_estimate: "5-7 days", yield_estimate: "recovery",
      tags: ["antibiotics", "infection", "medication", "long_term"],
      steps: [
        "💊 Take antibiotics strictly according to instructions",
        "📋 Amoxicillin, ampicillin, azithromycin — broad spectrum",
        "⏰ Strict dosage and timing",
        "🚫 Do NOT stop the course — bacteria become resistant",
        "🌿 Additionally: rest, drink, vitamins (nettle, rosehip)",
        "🌡️ For fever >38.5°C — add antipyretic"
      ],
      warnings: [
        "⚠️ Antibiotics only for bacterial infection",
        "💊 Don't exceed dosage — liver, kidneys",
        "🔄 If allergic — antibiotics prohibited",
        "🍷 NOT with alcohol — hepatotoxic"
      ]
    },
    {
      id: "wound_healing_long",
      title: "🩹 Long-term wound healing",
      description: "For long-term wound healing: regularly wash, change dressings. Use antiseptics, herbs (plantain, calendula). Monitor nutrition: more protein, vitamins (nettle, rosehip).",
      conditions: { symptom: ["infection", "bleeding"], severity: ["moderate", "severe"], time: ["days"], inventory: ["antiseptic", "bandage", "herbs", "nothing"] },
      priority: "slow", reliability: "medium",
      time_estimate: "1-4 weeks", yield_estimate: "complete healing",
      tags: ["wound", "healing", "long_term", "nutrition"],
      steps: [
        "🧼 Regularly wash wound with water and soap",
        "🔄 Change dressings 1-2 times daily",
        "🧴 Use antiseptics: iodine, peroxide, alcohol",
        "🌿 Apply plantain, calendula (healing)",
        "🍗 Nutrition: protein (meat, nuts, insects), vitamins (nettle, rosehip)",
        "🛌 Rest, sleep — more important than medicine"
      ],
      warnings: [
        "🦠 If worsening (pus, fever, swelling) — need antibiotics",
        "🌿 Herbs — help, but not substitute for antiseptics",
        "🥩 Protein important for tissue regeneration",
        "💧 Dehydration slows healing — drink water"
      ]
    }
  ]
};
