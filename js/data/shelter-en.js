// === SECTION: SHELTER (ENGLISH) ===
const shelterData = {
  category: "shelter",
  title: "🏠 Shelter",
  description: "Building shelter from weather and cold",

  questions: [
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "forest",    label: "🌲 Forest / taiga",      tags: ["forest", "wood", "branches"] },
        { id: "desert",    label: "🏜️ Desert / steppe",    tags: ["desert", "sand", "heat"] },
        { id: "mountain",  label: "⛰️ Mountains",              tags: ["mountain", "wind", "cold", "rocks"] },
        { id: "coast",     label: "🏖️ Coast / island", tags: ["coast", "driftwood", "wind"] },
        { id: "urban",     label: "🏙️ City / industrial zone",   tags: ["urban", "debris", "buildings"] },
        { id: "swamp",     label: "🌿 Swamp / tundra",   tags: ["swamp", "moss", "insects", "water"] }
      ]
    },
    {
      id: "inventory",
      text: "What do you have at hand?",
      type: "multi",
      options: [
        { id: "tarp",     label: "🧊 Tarp / canvas / plastic film",    tags: ["cover", "waterproof"] },
        { id: "rope",     label: "🪢 Rope / paracord",          tags: ["cordage", "binding"] },
        { id: "knife",    label: "🔪 Knife / multitool",             tags: ["tool", "cutting"] },
        { id: "fire",     label: "🔥 Matches / lighter",          tags: ["heat", "warmth"] },
        { id: "blanket",  label: "🛏️ Blanket / sleeping bag",   tags: ["insulation", "warmth"] },
        { id: "nothing",  label: "❌ Nothing",                  tags: ["primitive", "natural"] }
      ]
    },
    {
      id: "weather",
      text: "What's the weather / threat?",
      type: "single",
      options: [
        { id: "cold",     label: "❄️ Cold / frost",       tags: ["cold", "insulation"] },
        { id: "rain",     label: "🌧️ Rain / downpour",     tags: ["wet", "waterproof"] },
        { id: "wind",     label: "💨 Wind / storm",        tags: ["wind", "sturdy"] },
        { id: "heat",     label: "☀️ Heat / sun",        tags: ["heat", "shade"] },
        { id: "night",    label: "🌙 Night / dark",      tags: ["dark", "quick"] },
        { id: "insects",  label: "🦟 Midges / mosquitoes",      tags: ["insects", "protection"] }
      ]
    },
    {
      id: "urgency",
      text: "How urgently do you need shelter?",
      type: "single",
      options: [
        { id: "now",  label: "⚠️ Now! Night / storm", tags: ["critical", "immediate"] },
        { id: "hour", label: "⏱️ Have 1-2 hours",       tags: ["urgent", "short"] },
        { id: "day",  label: "🌅 Have a day",           tags: ["planned", "medium"] },
        { id: "days", label: "📅 Have several days", tags: ["long_term", "strategic"] }
      ]
    }
  ],

  solutions: [
    // ===== FAST SOLUTIONS =====
    {
      id: "tarp_shelter",
      title: "🧊 Tarp / plastic shelter",
      description: "The fastest way if you have a tarp. Stretch between trees as a tent or lean-to. Secure corners with stones or pegs. Can make a hammock if you have rope.",
      conditions: { location: ["forest", "mountain", "coast", "desert", "urban", "swamp"], inventory: ["tarp", "rope"], weather: ["rain", "wind", "cold", "heat", "night", "insects"], urgency: ["now", "hour"] },
      priority: "fast", reliability: "high",
      time_estimate: "5-15 min", yield_estimate: "instant protection",
      tags: ["tarp", "quick", "universal", "modern"],
      steps: [
        "🌳 Stretch tarp between 2 trees at 1-1.5 m height",
        "🪨 Secure corners with stones or tie to bushes",
        "🏕️ For lean-to — lean one edge to ground, stretch the other",
        "🌧️ In rain — make a slope so water runs off",
        "🧊 In cold — put tarp on ground as insulation"
      ],
      warnings: [
        "💨 Tarp tears in wind — secure well",
        "🌲 Don't set up under dead tree",
        "🏜️ In desert — tarp gives shade, but doesn't protect from night cold"
      ]
    },
    {
      id: "rock_shelter",
      title: "🏔️ Shelter in crevice / under rock",
      description: "Fastest shelter in mountains. Find a natural crevice, cave, overhanging rock. Check for safety. Insulate floor with branches and leaves.",
      conditions: { location: ["mountain", "forest", "coast"], inventory: ["nothing", "knife", "tarp"], weather: ["rain", "wind", "cold", "night", "heat"], urgency: ["now", "hour"] },
      priority: "fast", reliability: "high",
      time_estimate: "5-15 min", yield_estimate: "natural protection",
      tags: ["mountain", "natural", "quick", "safe"],
      steps: [
        "🔍 Look for overhanging rocks, crevices, caves",
        "🔨 Check stability — no cracks, debris above",
        "🧹 Remove stones and unevenness from floor",
        "🌿 Lay branches, leaves, moss for insulation",
        "🧊 In cold — close entrance with branches or tarp"
      ],
      warnings: [
        "🐍 Check for animals — snakes, birds, bears",
        "🔥 Don't make fire in enclosed space — carbon monoxide",
        "⚠️ Watch for rockfalls — not under overhanging rocks",
        "💧 Check if water drips from above"
      ]
    },
    {
      id: "lean_to",
      title: "🌲 Lean-to shelter",
      description: "Simplest shelter. Lean a long pole against a tree or rock. Lay branches at an angle to make a wall. Cover with leaves, moss, snow for insulation. Works in forest and mountains.",
      conditions: { location: ["forest", "mountain", "coast"], inventory: ["rope", "knife", "nothing"], weather: ["rain", "wind", "cold", "night"], urgency: ["now", "hour"] },
      priority: "fast", reliability: "high",
      time_estimate: "20-40 min", yield_estimate: "protection from wind and rain",
      tags: ["forest", "quick", "basic", "wind"],
      steps: [
        "🌳 Find 2 trees 2-3 m apart or a large rock",
        "🪵 Place a pole (thick branch) at 1-1.5 m height",
        "🌿 Lean branches at angle to the pole, dense like a tent",
        "🍂 Cover with leaves, moss, grass — denser = warmer",
        "❄️ In cold — pile snow on top for insulation"
      ],
      warnings: [
        "⛰️ Don't build at foot of slope — snow/rockfall",
        "🌲 Not under dead tree — may fall",
        "💨 Open side — against wind, not cold"
      ]
    },
    {
      id: "urban_shelter",
      title: "🏙️ Shelter in city / industrial zone",
      description: "Use abandoned buildings, basements, garages. Check structural stability. Barricade entrance. Look for materials: cardboard, plastic, fabric for insulation.",
      conditions: { location: ["urban"], inventory: ["nothing", "knife", "tarp", "blanket"], weather: ["cold", "rain", "wind", "heat", "night", "insects"], urgency: ["now", "hour"] },
      priority: "fast", reliability: "medium",
      time_estimate: "10-30 min", yield_estimate: "protection from elements",
      tags: ["urban", "building", "debris", "quick"],
      steps: [
        "🏗️ Look for sturdy buildings: brick, concrete, no cracks",
        "🏚️ Basements — warmest and most protected (check flooding)",
        "🚪 Barricade entrance with furniture, boards",
        "📦 Use cardboard, plastic, fabric to insulate windows",
        "🔥 In cold — collect all combustible material for fire"
      ],
      warnings: [
        "🏗️ Check building stability — cracks, tilt",
        "💧 Don't enter basements with flood risk",
        "🩸 Careful with debris — sharp edges, nails, glass",
        "🔊 Choose 2-3 floor — not basement (flood) and not top (cold)"
      ]
    },
    {
      id: "desert_shade",
      title: "🏜️ Shade in desert",
      description: "In desert the main threat is overheating. Use tarp, branches, clothing to create shade. Dig a pit — ground below is cooler. Work at night, rest during day.",
      conditions: { location: ["desert"], inventory: ["tarp", "blanket", "nothing"], weather: ["heat", "night"], urgency: ["now", "hour"] },
      priority: "fast", reliability: "medium",
      time_estimate: "15-30 min", yield_estimate: "temperature drop of 10-15°C",
      tags: ["desert", "heat", "shade", "quick"],
      steps: [
        "🪨 Find natural shade: rocks, bushes, ravine",
        "🏕️ Or make a shelter from clothing/tarp on branches/rope",
        "⛏️ Dig pit 30-50 cm — ground is cooler",
        "🌙 Work at night, rest during day in shade",
        "🧣 Wet clothing/fabric on head — cooling"
      ],
      warnings: [
        "🔥 Don't lie on hot sand — burns",
        "💧 Drink water slowly, small sips",
        "❄️ At night desert is cold — conserve heat"
      ]
    },
    {
      id: "windbreak",
      title: "💨 Windbreak wall",
      description: "In open terrain (steppe, desert, coast) make a wall of stones, turf, snow or branches. Height up to waist. Wall reduces wind speed by 2-3 times and preserves heat.",
      conditions: { location: ["desert", "coast", "mountain"], inventory: ["knife", "nothing", "tarp"], weather: ["wind", "cold", "night"], urgency: ["now", "hour"] },
      priority: "fast", reliability: "medium",
      time_estimate: "20-40 min", yield_estimate: "wind reduction 50-70%",
      tags: ["wind", "quick", "universal", "open_space"],
      steps: [
        "🪨 Stack wall from stones, turf, snow blocks",
        "🌿 Or weave from branches and grass (like wattle)",
        "📏 Wall height — up to waist (reduces wind at ground level)",
        "🧊 In snow — cut blocks and stack wall",
        "🏕️ Sit on leeward side of wall"
      ],
      warnings: [
        "💨 Don't make wall too high — wind will knock it",
        "🪨 Stones must be stable — don't collapse",
        "❄️ Snow wall melts — renew"
      ]
    },

    // ===== MEDIUM TIME SOLUTIONS =====
    {
      id: "debris_hut",
      title: "🌿 Debris hut",
      description: "Fully enclosed shelter. Make a frame of flexible branches in a dome shape. Densely pack leaves, moss, grass — minimum 30 cm layer. Inside — pit for small fire or warm bedding.",
      conditions: { location: ["forest", "mountain", "swamp"], inventory: ["knife", "nothing"], weather: ["cold", "rain", "wind", "insects"], urgency: ["hour", "day"] },
      priority: "medium", reliability: "high",
      time_estimate: "1-3 hours", yield_estimate: "warm fully enclosed shelter",
      tags: ["forest", "warm", "insulated", "long"],
      steps: [
        "🌳 Find dense grove or protected place from wind",
        "🪵 Stick 2 rows of flexible branches into ground, bending into dome",
        "🔄 Weave branches, creating frame",
        "🍂 Pack leaves, moss, grass — minimum 30 cm, more = warmer",
        "🛏️ Inside — bedding of leaves or pine needles, pit for warm air"
      ],
      warnings: [
        "⏳ Requires lots of material — 2-3 hours work",
        "🐜 Check for anthills and snakes",
        "📏 Don't make too large — hard to warm",
        "🔥 Entrance should be on leeward side"
      ]
    },
    {
      id: "snow_cave",
      title: "❄️ Snow cave",
      description: "In deep snow dig a cave or use a snowdrift. Snow is an excellent insulator. Entrance should be below floor level so warm air doesn't escape. Make a ventilation hole.",
      conditions: { location: ["mountain", "forest"], inventory: ["knife", "nothing"], weather: ["cold", "wind"], urgency: ["hour", "day"] },
      priority: "medium", reliability: "high",
      time_estimate: "1-2 hours", yield_estimate: "inside temperature 0°C at -20°C outside",
      tags: ["snow", "winter", "insulated", "mountain"],
      steps: [
        "⛄ Find deep snowdrift or pile snow 2×2 m",
        "🚪 Dig entrance from side at ground level",
        "📐 Inside — dig floor higher than entrance (heat rises)",
        "🛏️ Make bed from branches or backpack",
        "💨 Make ventilation hole in ceiling with stick"
      ],
      warnings: [
        "💨 Ventilation mandatory — carbon monoxide from candle/fire",
        "📏 Don't make cave too large — hard to warm",
        "⚠️ Check snow strength — may collapse",
        "🏔️ Don't build on slope — avalanche! Only on level ground"
      ]
    },
    {
      id: "a_frame",
      title: "🏠 A-frame shelter",
      description: "Classic shelter in the shape of the letter A. Two poles tied at top form a triangle. Sides — branches, bark, moss. Very stable against wind and snow. Takes more time but more reliable.",
      conditions: { location: ["forest", "mountain", "coast"], inventory: ["rope", "knife", "nothing"], weather: ["cold", "rain", "wind", "snow"], urgency: ["hour", "day"] },
      priority: "medium", reliability: "high",
      time_estimate: "1-2 hours", yield_estimate: "reliable shelter for 1-3 people",
      tags: ["forest", "sturdy", "warm", "classic"],
      steps: [
        "🌳 Find 2 long poles (3-4 m) — for A-frame base",
        "🪢 Tie them at top with rope or bark",
        "📐 Spread bottom ends 2 m apart — A shape",
        "🪵 Lay cross poles 30-40 cm apart",
        "🌿 Cover with bark, moss, leaves — bottom to top like shingles"
      ],
      warnings: [
        "⏳ Takes 1-2 hours and lots of material",
        "🪢 Top knot must be strong — foundation of structure",
        "🌧️ Lay bark like shingles — water runs off",
        "🔥 Inside can have fire, but with ventilation"
      ]
    },
    {
      id: "swamp_shelter",
      title: "🌿 Shelter in swamp / tundra",
      description: "In swamp build on high ground or make a platform of poles. Use moss — it's water-repellent. Tarp or bark from rain. Protection from mosquitoes — smoke fire.",
      conditions: { location: ["swamp"], inventory: ["tarp", "knife", "rope", "nothing"], weather: ["rain", "cold", "wind", "insects", "night"], urgency: ["hour", "day"] },
      priority: "medium", reliability: "medium",
      time_estimate: "1-2 hours", yield_estimate: "protection from water, mud and insects",
      tags: ["swamp", "moss", "platform", "insects"],
      steps: [
        "🏔️ Find driest place: hummock, elevation, tree roots",
        "🪵 Make platform of poles over water/mud",
        "🧊 Use moss as insulation and bedding (doesn't absorb water)",
        "🌿 Above — tarp, bark, branches from rain",
        "🔥 Make smoke fire (wet branches) — repels mosquitoes"
      ],
      warnings: [
        "🌊 Don't build in lowland — water rises at night",
        "🦟 Midges and mosquitoes — smoke fire mandatory",
        "🐍 In swamp — snakes, check the area",
        "🧊 Moss can be wet — dry by fire"
      ]
    },
    {
      id: "insect_shelter",
      title: "🦟 Shelter from midges and mosquitoes",
      description: "In taiga and tundra the main threat is gnats. Make a smoke fire (wet branches, moss, grass) at entrance. Cover with tulle/net/gauze. Closed shelter with smoke — salvation from insects.",
      conditions: { location: ["forest", "swamp", "coast"], inventory: ["tarp", "fire", "nothing"], weather: ["insects", "night", "rain"], urgency: ["now", "hour"] },
      priority: "medium", reliability: "medium",
      time_estimate: "30-60 min", yield_estimate: "protection from gnats 80-90%",
      tags: ["insects", "smoke", "mosquitoes", "taiga"],
      steps: [
        "🔥 Make fire at shelter entrance",
        "🌿 Add wet branches, moss, grass — thick smoke",
        "🧊 Hang tulle/net/gauze at entrance (if available)",
        "🏕️ In enclosed shelter smoke — best mosquito repellent",
        "🌿 Use wormwood, tansy, wild rosemary — they repel"
      ],
      warnings: [
        "💨 Smoke should go into shelter but not choke you",
        "🔥 Don't leave fire unattended — fire hazard",
        "🦟 In calm weather gnats are especially strong",
        "🌿 Wormwood, tansy, wild rosemary — natural repellents"
      ]
    },

    // ===== SLOW SOLUTIONS =====
    {
      id: "log_cabin",
      title: "🪵 Log cabin (long-term)",
      description: "For long-term survival. Stack logs in a square (like a log house). Chink gaps with moss. Roof — from bark, turf. Takes 3-5 days, but gives warmth for winter.",
      conditions: { location: ["forest", "mountain"], inventory: ["knife", "rope", "nothing"], weather: ["cold", "wind", "snow"], urgency: ["days"] },
      priority: "slow", reliability: "high",
      time_estimate: "3-5 days", yield_estimate: "warm shelter for winter",
      tags: ["long_term", "winter", "sturdy", "logs"],
      steps: [
        "🪓 Cut logs of equal length (2-3 m)",
        "🪵 Stack in a square (log cabin style)",
        "🧊 Chink gaps with moss, tow, clay",
        "🪵 Roof: pole rafters + bark + turf",
        "🔥 Inside — stone hearth, clay chimney"
      ],
      warnings: [
        "⏳ Takes 3-5 days and lots of effort",
        "🪓 Need axe or large knife",
        "🔥 Hearth with chimney — otherwise carbon monoxide",
        "🌲 Choose dry trees — wet won't burn"
      ]
    },
    {
      id: "dugout",
      title: "🏠 Dugout (semi-underground shelter)",
      description: "For harsh conditions. Dig a pit 2×2 m, 1 m deep. Cover with logs, top with turf/soil. Entrance from south side. Inside temperature +5-10°C even in severe frost.",
      conditions: { location: ["forest", "mountain", "taiga"], inventory: ["knife", "nothing"], weather: ["cold", "wind", "snow"], urgency: ["days"] },
      priority: "slow", reliability: "high",
      time_estimate: "3-4 days", yield_estimate: "warm in winter, cool in summer",
      tags: ["long_term", "winter", "earth", "insulated"],
      steps: [
        "⛏️ Dig pit 2×2 m, 1 m deep (for 2 people)",
        "🪵 Cover: logs across the pit",
        "🌿 Top — turf, earth, leaves (30-50 cm thick)",
        "🚪 Entrance — from south side (warm), hang tarp",
        "🛏️ Inside — bedding of branches and moss, hearth (with chimney)"
      ],
      warnings: [
        "⏳ Takes 3-4 days and lots of effort",
        "💧 Don't build in lowland — will flood",
        "🔥 Chimney mandatory — carbon monoxide",
        "🚪 Entrance should be on leeward side"
      ]
    }
  ]
};
