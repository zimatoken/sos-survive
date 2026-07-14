// === SECTION: FIRE (ENGLISH) ===
const fireDataEn = {
  category: "fire",
  title: "🔥 Fire",
  description: "Making fire in any conditions",

  questions: [
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "forest",    label: "🌲 Forest / taiga",      tags: ["forest", "wood", "resin"] },
        { id: "desert",    label: "🏜️ Desert / steppe",    tags: ["desert", "dry", "sand"] },
        { id: "mountain",  label: "⛰️ Mountains",              tags: ["mountain", "wind", "cold"] },
        { id: "coast",     label: "🏖️ Coast / island", tags: ["coast", "wet", "driftwood"] },
        { id: "urban",     label: "🏙️ City / industrial zone",   tags: ["urban", "debris", "chemicals"] },
        { id: "swamp",     label: "🌿 Swamp / tundra",   tags: ["swamp", "peat", "moss", "damp"] }
      ]
    },
    {
      id: "inventory",
      text: "What do you have at hand?",
      type: "multi",
      options: [
        { id: "matches",   label: "🪄 Matches / lighter",           tags: ["fire_source", "easy"] },
        { id: "magnesium", label: "🪨 Ferro rod / magnesium stick",   tags: ["spark", "reliable"] },
        { id: "lens",      label: "🔍 Lens / glasses / bottle",       tags: ["solar", "lens"] },
        { id: "battery",   label: "🔋 Battery + wire/foil", tags: ["electric", "short"] },
        { id: "knife",     label: "🔪 Knife / multitool",              tags: ["tool", "friction"] },
        { id: "rope",      label: "🪢 Rope / paracord",           tags: ["fiber", "bow_drill"] },
        { id: "plastic",   label: "🧊 Plastic / bag",              tags: ["lens", "magnifier"] },
        { id: "chemical",  label: "🧪 Chemicals (KMNO4, glycerin)",     tags: ["chemical", "reliable"] },
        { id: "nothing",   label: "❌ Nothing",                   tags: ["primitive", "friction"] }
      ]
    },
    {
      id: "weather",
      text: "What's the weather?",
      type: "single",
      options: [
        { id: "dry",    label: "☀️ Dry / warm",      tags: ["dry", "easy"] },
        { id: "damp",   label: "🌫️ Damp / dew",    tags: ["damp", "tinder_needed"] },
        { id: "rain",   label: "🌧️ Rain / downpour",   tags: ["wet", "shelter_needed"] },
        { id: "wind",   label: "💨 Strong wind",     tags: ["wind", "windbreak"] },
        { id: "snow",   label: "❄️ Snow / frost",      tags: ["cold", "frozen_fuel"] }
      ]
    },
    {
      id: "urgency",
      text: "How urgently do you need fire?",
      type: "single",
      options: [
        { id: "now",  label: "⚠️ Now! Cold / night", tags: ["critical", "immediate"] },
        { id: "hour", label: "⏱️ Have 1-2 hours",       tags: ["urgent", "short"] },
        { id: "day",  label: "🌅 Have a day",           tags: ["planned", "medium"] },
        { id: "days", label: "📅 Need for several days", tags: ["long_term", "strategic"] }
      ]
    },
    {
      id: "fuel",
      text: "What do you have for fuel?",
      type: "single",
      options: [
        { id: "wood",      label: "🪵 Firewood / dry branches",  tags: ["wood", "dry_fuel"] },
        { id: "wet_wood",  label: "🌧️ Wet wood",        tags: ["wet", "needs_drying"] },
        { id: "grass",     label: "🌾 Grass / straw",      tags: ["grass", "quick_burn"] },
        { id: "peat",      label: "🌿 Peat / moss",         tags: ["peat", "slow_burn"] },
        { id: "chemicals", label: "🧪 Chemicals / plastic",    tags: ["chemical", "toxic"] }
      ]
    }
  ],

  solutions: [
    // ===== FAST SOLUTIONS =====
    {
      id: "matches_easy",
      title: "🪄 Matches / lighter — fast fire",
      description: "The easiest way. Collect dry tinder (birch bark, dry grass, moss). Make a nest. Light with a match. Add thin twigs, then thicker ones.",
      conditions: { location: ["forest", "mountain", "coast", "urban", "swamp"], inventory: ["matches"], weather: ["dry", "damp"], urgency: ["now", "hour"], fuel: ["wood", "grass", "peat"] },
      priority: "fast", reliability: "high",
      time_estimate: "2-5 min", yield_estimate: "fire on first try",
      tags: ["matches", "easy", "universal"],
      steps: [
        "🌿 Collect dry tinder: birch bark, dry grass, moss, fluff",
        "✊ Make a nest the size of a fist",
        "🔥 Light from inside with a match or lighter",
        "💨 Blow gently, adding thin twigs",
        "🪵 Gradually increase the thickness of the wood"
      ],
      warnings: [
        "💧 Store matches in a waterproof container",
        "💨 In wind — protect flame with your body",
        "🧊 Don't put out fire with water in frost — ice",
        "🔥 Don't use all matches at once — save some"
      ]
    },
    {
      id: "magnesium_striker",
      title: "🪨 Ferro rod (magnesium stick)",
      description: "Scrape magnesium shavings onto dry tinder. Strike the rod with the striker — sparks will ignite the shavings. Works in any weather, even wet.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["magnesium"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["wood", "grass", "peat", "wet_wood"] },
      priority: "fast", reliability: "high",
      time_estimate: "3-7 min", yield_estimate: "fire in 1-3 attempts",
      tags: ["magnesium", "reliable", "all_weather"],
      steps: [
        "🪨 Scrape magnesium shavings the size of a coin onto dry tinder",
        "💥 Strike the ferrocerium rod with the striker",
        "✨ Sparks hit the shavings — they ignite at 3000°C",
        "💨 Quickly add tinder and blow",
        "🪵 Add twigs"
      ],
      warnings: [
        "⚡ Shavings burn very fast — be ready",
        "🛑 Don't keep the rod wet — rusts",
        "💥 Strike sharply at 45° angle",
        "🔥 Keep away from gasoline and gases"
      ]
    },
    {
      id: "battery_short",
      title: "🔋 Battery + foil / wire",
      description: "Connect + and - of a battery with thin wire, gum foil, or steel wool. The wire heats red-hot and ignites tinder. Works with any battery.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["battery"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["wood", "grass"] },
      priority: "fast", reliability: "medium",
      time_estimate: "1-3 min", yield_estimate: "fire in 1-2 attempts",
      tags: ["battery", "electric", "urban", "quick"],
      steps: [
        "🔋 Find any battery (AA, AAA, phone, flashlight)",
        "🔗 Make a thin bridge of foil/wire between + and -",
        "🔥 The bridge heats red-hot in 1-3 seconds",
        "🌿 Place tinder against the hot bridge",
        "💨 Blow into flame"
      ],
      warnings: [
        "💥 Battery can explode on short circuit — keep distance",
        "⛔ Don't use thick wire — won't heat",
        "🧊 Gum foil is the ideal bridge",
        "🔋 Use only as last resort — drains the battery"
      ]
    },
    {
      id: "chemical_fire",
      title: "🧪 Chemical ignition (KMNO4 + glycerin)",
      description: "Mix glycerin with potassium permanganate (KMNO4). In 10-30 seconds a reaction starts with heat and flame. Works in any weather.",
      conditions: { location: ["urban", "forest", "mountain", "coast"], inventory: ["chemical"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["wood", "grass"] },
      priority: "fast", reliability: "high",
      time_estimate: "1-2 min", yield_estimate: "fire guaranteed",
      tags: ["chemical", "urban", "first_aid_kit", "reliable"],
      steps: [
        "🧪 Find potassium permanganate (KMNO4) — purple crystals",
        "💧 Find glycerin (in first aid kit, cosmetics)",
        "🧴 Mix on tinder: 1 tsp KMNO4 + a few drops of glycerin",
        "💨 In 10-30 seconds smoke appears, then flame",
        "🌿 Add tinder and blow"
      ],
      warnings: [
        "🟣 KMNO4 stains everything purple — avoid eyes",
        "⚡ Reaction is uncontrollable — prepare tinder in advance",
        "💧 Store KMNO4 in a dry place — moisture activates it",
        "🔥 Oxygen is released during reaction — don't breathe the smoke"
      ]
    },
    {
      id: "wet_weather_fire",
      title: "🌧️ Fire in rain / wet weather",
      description: "In wet weather look for dry fuel under trees, in rock crevices, under roots. Use resin, birch bark, dry pine needles. Build fire under shelter.",
      conditions: { location: ["forest", "mountain", "coast", "swamp"], inventory: ["matches", "magnesium", "battery", "nothing", "chemical"], weather: ["rain", "damp", "snow"], urgency: ["now", "hour"], fuel: ["wet_wood"] },
      priority: "fast", reliability: "medium",
      time_estimate: "10-20 min", yield_estimate: "depends on skill",
      tags: ["wet", "rain", "survival", "skill"],
      steps: [
        "🌲 Look for dry fuel: birch bark, resin, dry needles under spruce",
        "🏔️ Collect tinder under tree roots, in caves, crevices",
        "🏕️ Build fire under shelter: under a large tree, in a cave",
        "🔥 Use plenty of tinder — wet wood is harder to ignite",
        "🌞 Dry wet wood by the fire before using"
      ],
      warnings: [
        "🌿 Wet moss doesn't burn — look for birch bark",
        "💨 Don't make fire under the only shelter — smoke",
        "🔥 Resin burns bright but fast — stock up",
        "🌧️ In rain collect wood before it gets wet"
      ]
    },
    {
      id: "dry_wood_fire",
      title: "🔥 Drying wood by the fire",
      description: "If wood is wet — split it into small pieces, remove bark. Stack vertically around fire — dry for 15-30 minutes. Dry wood burns bright and smokeless.",
      conditions: { location: ["forest", "mountain", "coast", "swamp"], inventory: ["knife", "matches", "magnesium", "nothing"], weather: ["damp", "rain", "snow"], urgency: ["hour", "day"], fuel: ["wet_wood"] },
      priority: "fast", reliability: "high",
      time_estimate: "15-30 min", yield_estimate: "dry firewood",
      tags: ["dry", "wood", "preparation", "skill"],
      steps: [
        "🪓 Split wood into small pieces (2-5 cm thick)",
        "🪵 Remove bark — it retains moisture",
        "🔥 Stack vertically around fire, end toward flame",
        "⏳ Dry for 15-30 minutes, turning occasionally",
        "🔥 Dry wood burns bright, without smoke"
      ],
      warnings: [
        "💨 Don't place too close to fire — will ignite",
        "🌧️ In rain dry under shelter",
        "🪵 Wet wood smokes and burns poorly",
        "🔥 For quick drying — use dry moss/grass as kindling"
      ]
    },

    // ===== MEDIUM TIME SOLUTIONS =====
    {
      id: "solar_lens",
      title: "🔍 Solar ignition (lens)",
      description: "Use a lens, glasses, bottom of a water bottle, ice lens. Focus sunlight on tinder. In 10-60 seconds smoke appears. Works only in dry weather.",
      conditions: { location: ["forest", "desert", "mountain", "coast"], inventory: ["lens", "plastic", "nothing"], weather: ["dry"], urgency: ["hour", "day"], fuel: ["wood", "grass"] },
      priority: "medium", reliability: "medium",
      time_estimate: "1-5 min", yield_estimate: "depends on sun",
      tags: ["solar", "lens", "no_fuel"],
      steps: [
        "🔍 Find a convex lens: glasses, magnifying glass, water bottle bottom",
        "☀️ Point at sun, focusing beam on tinder",
        "⏳ Hold 10-60 seconds until smoke appears",
        "💨 Gently blow — a glowing ember appears",
        "🌿 Place in tinder nest, blow into flame"
      ],
      warnings: [
        "☀️ Only works in bright sun",
        "😎 Don't look at the focus — damages eyes",
        "🧊 Ice lens works but melts fast",
        "⏳ Useless in cloudy weather"
      ]
    },
    {
      id: "bow_drill",
      title: "🪚 Bow drill",
      description: "Classic friction method. Make a bow from a flexible branch and rope. Drill — dry straight branch. Board — dry soft wood. Rotate the drill with the bow, pressing down.",
      conditions: { location: ["forest", "desert", "swamp"], inventory: ["rope", "knife", "nothing"], weather: ["dry", "damp"], urgency: ["hour", "day"], fuel: ["wood"] },
      priority: "medium", reliability: "medium",
      time_estimate: "15-45 min", yield_estimate: "fire in 3-10 attempts",
      tags: ["primitive", "friction", "skill", "forest"],
      steps: [
        "🪵 Find dry soft wood: poplar, aspen, cedar (board)",
        "🪚 Make a drill: straight dry branch 20-30 cm",
        "🏹 Make a bow: flexible branch + rope/paracord/cord",
        "🔄 Press drill into board, rotate with bow",
        "🔥 Collect glowing dust (charcoal) in leaf/tinder, blow"
      ],
      warnings: [
        "⏳ Requires practice — train beforehand",
        "🌞 Everything must be absolutely dry",
        "💪 Hand pain — normal, this is a tough method",
        "🌿 Use resin/birch bark for kindling"
      ]
    },
    {
      id: "fire_plough",
      title: "🔥 Fire plough",
      description: "Push a sharp dry branch along a groove in a dry board. Friction creates glowing dust. Collect it in a leaf and blow. Easier than hand drill, but also requires strength.",
      conditions: { location: ["forest", "desert", "coast"], inventory: ["nothing", "knife"], weather: ["dry", "damp"], urgency: ["hour", "day"], fuel: ["wood"] },
      priority: "medium", reliability: "low",
      time_estimate: "10-30 min", yield_estimate: "fire in 3-10 attempts",
      tags: ["primitive", "friction", "no_tools", "coast"],
      steps: [
        "🌴 Find dry soft wood (bamboo, poplar, palm)",
        "🔪 Make a groove in the board with a knife or stone",
        "🌿 Take a sharp dry branch as the drill",
        "💨 Push along the groove with force and speed",
        "🔥 Collect glowing dust, blow"
      ],
      warnings: [
        "💪 Requires strong pressure — you tire quickly",
        "📏 The groove must be straight and deep",
        "🌧️ Doesn't work on wet wood",
        "🔄 Practice beforehand — it's a complex method"
      ]
    },

    // ===== SLOW SOLUTIONS =====
    {
      id: "hand_drill",
      title: "🖐️ Hand drill",
      description: "Simplest friction method: spin a dry straight branch with your palms, pressing into dry board. Requires tremendous speed and strength. Only suitable for light woods.",
      conditions: { location: ["forest", "desert"], inventory: ["nothing", "knife"], weather: ["dry"], urgency: ["day"], fuel: ["wood"] },
      priority: "slow", reliability: "low",
      time_estimate: "20-60 min", yield_estimate: "fire in 5-20 attempts",
      tags: ["primitive", "friction", "no_tools", "hard"],
      steps: [
        "🌳 Find dry soft wood: poplar, willow, cedar",
        "🌿 Make a drill: straight thin branch 40-50 cm",
        "🪵 Board: flat piece of the same wood",
        "🔄 Rotate the drill with palms like eating chopsticks",
        "🔥 Collect charcoal, blow"
      ],
      warnings: [
        "💪 Very difficult — requires perfect technique",
        "🩸 Palms can rub to blood",
        "🪵 Doesn't work on hard woods (oak, birch)",
        "⏳ Train for months — method for professionals"
      ]
    },
    {
      id: "ice_lens",
      title: "🧊 Ice lens",
      description: "In frost make a lens from clear ice. Polish with hands or warm water until transparent. Focus sunlight on tinder. Works, but lens melts fast.",
      conditions: { location: ["mountain", "forest"], inventory: ["nothing", "knife"], weather: ["snow"], urgency: ["hour", "day"], fuel: ["wood"] },
      priority: "slow", reliability: "low",
      time_estimate: "20-40 min", yield_estimate: "depends on sun and ice",
      tags: ["ice", "solar", "winter", "primitive"],
      steps: [
        "🧊 Find clear ice (river, lake — not snow)",
        "🔍 Shape a lens 5-7 cm thick in the center",
        "🪞 Polish with hands or warm water until transparent",
        "☀️ Focus sunlight on tinder",
        "⏳ Work fast — lens melts"
      ],
      warnings: [
        "☀️ Only in bright sun and frost",
        "⏳ Lens melts in 5-15 minutes",
        "📏 Center thickness must be 5-7 cm",
        "🧊 Use clear ice — cloudy doesn't work"
      ]
    },
    {
      id: "fire_maintain",
      title: "🔥 How to keep fire going for a long time",
      description: "To keep fire all night: stack wood in a 'tipi' (cone). Use thick logs (burn long). Add dry peat/moss. At night embers smolder under ash — blow in the morning.",
      conditions: { location: ["forest", "mountain", "coast", "swamp"], inventory: ["knife", "matches", "magnesium"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["day", "days"], fuel: ["wood", "peat"] },
      priority: "slow", reliability: "high",
      time_estimate: "15-30 min setup", yield_estimate: "fire for 6-12 hours",
      tags: ["maintain", "night", "long_term", "skill"],
      steps: [
        "🏕️ Stack wood in a 'tipi' — cone of logs",
        "🪵 Use thick logs — they burn longer",
        "🌿 Add peat/dry moss — smolders for a long time",
        "🔥 At night embers smolder under ash layer",
        "💨 In the morning blow — add thin twigs",
        "🔄 For long fire — replace logs as they burn"
      ],
      warnings: [
        "💨 Wind can blow up fire — protect with stones",
        "🌧️ Rain will put out — cover with shelter",
        "🔥 Don't leave unattended — forest fire",
        "🧊 In frost fire burns worse — use more wood"
      ]
    },
    {
      id: "fire_without_tinder",
      title: "🔥 Fire without tinder (emergency)",
      description: "If no tinder — use dry moss, lichen, old clothing (cotton), cotton wool, bird down. In city — newspapers, cardboard, small splinters. Even dry leaves give smoke.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["nothing", "knife", "matches", "magnesium", "battery"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["grass"] },
      priority: "fast", reliability: "medium",
      time_estimate: "5-15 min", yield_estimate: "fire for kindling",
      tags: ["tinder", "emergency", "survival", "improvised"],
      steps: [
        "🌿 Use dry moss, lichen, dry grass",
        "👕 Old cotton clothing, cotton wool — excellent tinder",
        "🪶 Bird down, dry plant fluff",
        "📰 In city — newspapers, cardboard, small splinters",
        "🔥 Collect in a nest, ignite, blow"
      ],
      warnings: [
        "🧪 Synthetics melt — don't use",
        "🌧️ Wet tinder doesn't burn — find dry",
        "🔥 Tinder must be very dry and fluffy",
        "💨 For wind — protect fire with hand/body"
      ]
    }
  ]
};
