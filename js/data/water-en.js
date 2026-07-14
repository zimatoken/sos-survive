// === SECTION: WATER (ENGLISH) ===
const waterDataEn = {
  category: "water",
  title: "💧 Water",
  description: "Procurement, purification and preservation of drinking water",

  questions: [
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "forest",    label: "🌲 Forest / taiga",      tags: ["forest", "vegetation", "streams"] },
        { id: "desert",    label: "🏜️ Desert / steppe",    tags: ["desert", "heat", "no_water"] },
        { id: "mountain",  label: "⛰️ Mountains",              tags: ["mountain", "snow", "altitude"] },
        { id: "coast",     label: "🏖️ Coast / island", tags: ["coast", "saltwater", "humidity"] },
        { id: "urban",     label: "🏙️ City / industrial zone",   tags: ["urban", "pipes", "rain_collectors"] },
        { id: "swamp",     label: "🌿 Swamp / tundra",   tags: ["swamp", "peat", "insects"] }
      ]
    },
    {
      id: "inventory",
      text: "What do you have at hand?",
      type: "multi",
      options: [
        { id: "bottle",   label: "🧴 Plastic bottle / container", tags: ["container", "plastic"] },
        { id: "knife",    label: "🔪 Knife / multitool",              tags: ["cutting", "tool"] },
        { id: "fire",     label: "🔥 Matches / lighter",           tags: ["heat_source", "fire"] },
        { id: "rope",     label: "🪢 Rope / paracord",           tags: ["cordage", "binding"] },
        { id: "plastic",  label: "🧊 Plastic film / bag",   tags: ["sheet", "condensation"] },
        { id: "cloth",    label: "👕 Fabric / clothing",               tags: ["filter", "absorbent"] },
        { id: "metal",    label: "🥫 Metal container",        tags: ["boil", "durable"] },
        { id: "chemical", label: "🧪 Chemicals (iodine, chlorine, potassium permanganate)", tags: ["chemical", "purification"] },
        { id: "nothing",  label: "❌ Nothing",                   tags: ["bare_hands", "primitive"] }
      ]
    },
    {
      id: "urgency",
      text: "How urgently do you need water?",
      type: "single",
      options: [
        { id: "now",  label: "⚠️ Now! Thirst, dehydration", tags: ["critical", "immediate"] },
        { id: "hour", label: "⏱️ Have 1-2 hours",               tags: ["urgent", "short"] },
        { id: "day",  label: "🌅 Have a day",                   tags: ["planned", "medium"] },
        { id: "days", label: "📅 Have several days",         tags: ["long_term", "strategic"] }
      ]
    },
    {
      id: "weather",
      text: "What's the weather?",
      type: "single",
      options: [
        { id: "sunny",  label: "☀️ Sunny / hot",  tags: ["solar", "evaporation"] },
        { id: "cloudy", label: "☁️ Cloudy",         tags: ["no_sun", "cool"] },
        { id: "rain",   label: "🌧️ It's raining",       tags: ["precipitation", "collect"] },
        { id: "cold",   label: "❄️ Cold / snow",   tags: ["freeze", "snow_melt"] },
        { id: "fog",    label: "🌫️ Fog",           tags: ["fog", "condensation", "humidity"] }
      ]
    }
  ],

  solutions: [
    // ===== FAST SOLUTIONS =====
    {
      id: "find_spring",
      title: "🔍 Finding a spring / groundwater",
      description: "The fastest way to find clean water. Look for damp ground, green vegetation in dry areas, animal tracks. Springs at the foot of slopes, in rock crevices.",
      conditions: { location: ["forest", "mountain", "desert", "swamp"], inventory: ["nothing", "knife", "bottle", "cloth", "metal", "fire", "rope", "plastic"], urgency: ["now", "hour", "day", "days"], weather: ["sunny", "cloudy", "rain", "cold", "fog"] },
      priority: "fast", reliability: "high",
      time_estimate: "15-60 min (search)", yield_estimate: "unlimited",
      tags: ["universal", "natural", "search", "groundwater"],
      steps: [
        "🔎 Look for damp ground, green vegetation in dry areas",
        "🐾 Follow animal tracks — they lead to water",
        "⛰️ Springs at the foot of slopes, in rock crevices",
        "🏜️ In desert — near tree roots, in lowlands",
        "🌿 In swamp — look for streams, not standing water"
      ],
      warnings: [
        "🔥 Always boil or filter",
        "⚠️ Swamp water is dangerous, look for flowing water",
        "🧂 Salt springs — don't drink, look for others"
      ]
    },
    {
      id: "boil_stream",
      title: "🔥 Boiling water from a stream",
      description: "Reliable and fast disinfection. Find a fast stream (not standing water). Strain through fabric. Boil in a metal container for 1 minute (3 min at altitude >2000 m).",
      conditions: { location: ["forest", "mountain", "swamp"], inventory: ["metal", "fire"], urgency: ["now", "hour"], weather: ["sunny", "cloudy", "cold", "rain", "fog"] },
      priority: "fast", reliability: "high",
      time_estimate: "20-30 min", yield_estimate: "depends on container",
      tags: ["metal", "fire", "forest", "mountain", "safe"],
      steps: [
        "💧 Find a fast stream — water is cleaner than standing",
        "🧻 Strain through a layer of fabric/gauze",
        "🥫 Pour into a metal container",
        "🔥 Boil for 1 minute (3 min at altitude >2000 m)",
        "🧊 Cool and drink"
      ],
      warnings: [
        "☣️ Boiling does not remove chemical contamination",
        "🏔️ At altitude >2000 m boil for 3 minutes",
        "💨 Cloudy water — strain 2-3 times"
      ]
    },
    {
      id: "seawater_distill",
      title: "💧 Desalination of seawater (with fire)",
      description: "Boil seawater in a metal container. Steam condenses on a cold surface. Collect drops. Do not drink seawater — accelerates dehydration.",
      conditions: { location: ["coast"], inventory: ["metal", "fire"], urgency: ["now", "hour"], weather: ["sunny", "cloudy", "cold", "fog"] },
      priority: "fast", reliability: "high",
      time_estimate: "30-45 min", yield_estimate: "0.2-0.5 L per cycle",
      tags: ["metal", "fire", "coast", "saltwater", "distill"],
      steps: [
        "🌊 Pour seawater into a metal container 1/3 full",
        "🔒 Cover upside down or with film",
        "🔥 Boil — steam condenses on cold surface",
        "💧 Collect drops in a separate container",
        "🔄 Repeat cycle for larger volume"
      ],
      warnings: [
        "🚫 DO NOT DRINK SEAWATER — accelerates dehydration 2-3 times",
        "🧼 Condensate must drip into a CLEAN container",
        "🌡️ Repeat cycle for larger volume"
      ]
    },
    {
      id: "solar_still_coast",
      title: "☀️ Solar still (without fire)",
      description: "For coast without fire: dig a pit near shore, place container, cover with film. Evaporation from sun gives fresh water. Slow but safe.",
      conditions: { location: ["coast", "desert"], inventory: ["plastic"], urgency: ["day", "days"], weather: ["sunny"] },
      priority: "slow", reliability: "medium",
      time_estimate: "4-8 hours", yield_estimate: "0.3-0.8 L/day",
      tags: ["solar", "coast", "desert", "no_fire", "saltwater"],
      steps: [
        "⛏️ Dig a pit 50×50 cm near shore (but not in tide)",
        "🥤 Place clean container in center",
        "🧊 Cover with film, pressing edges with stones",
        "🪨 Place stone in center above container",
        "💧 Condensate drips into container in 4-8 hours"
      ],
      warnings: [
        "🌊 Don't dig too close to water — tide will flood",
        "☀️ Only works in bright sun",
        "⏳ Takes time — plan for a day"
      ]
    },
    {
      id: "snow_melt",
      title: "❄️ Melting snow / ice",
      description: "Fastest way in cold. Don't eat snow — wastes energy on heating. Melt in container on body or near fire. Snow gives ~10% water by volume.",
      conditions: { location: ["mountain", "forest"], inventory: ["metal", "fire", "nothing"], urgency: ["now", "hour"], weather: ["cold"] },
      priority: "fast", reliability: "high",
      time_estimate: "20-40 min", yield_estimate: "10% of snow volume",
      tags: ["metal", "fire", "mountain", "cold", "snow"],
      steps: [
        "❄️ Collect clean snow (not yellow/dirty)",
        "🧣 Place in container under clothing (body melts)",
        "🔥 Or melt near fire in metal container",
        "💧 Add a little water — speeds melting"
      ],
      warnings: [
        "🚫 DO NOT EAT SNOW — wastes energy, cools body",
        "🧹 Dirty snow — filter or boil",
        "⚠️ Yellow snow — animals, dangerous"
      ]
    },
    {
      id: "cactus",
      title: "🌵 Water from cactus / succulents",
      description: "In desert find barrel cactus or aloe. Cut top. Pulp contains water. Not all cacti are safe — avoid milky sap.",
      conditions: { location: ["desert"], inventory: ["knife", "nothing"], urgency: ["now", "hour"], weather: ["sunny", "cloudy"] },
      priority: "fast", reliability: "medium",
      time_estimate: "10-15 min", yield_estimate: "0.1-0.5 L",
      tags: ["knife", "desert", "vegetation", "immediate"],
      steps: [
        "🌵 Find barrel cactus (Ferocactus) or aloe",
        "🔪 Cut top with knife or sharp stone",
        "🥄 Scrape out pulp",
        "💧 Squeeze through fabric or eat pulp"
      ],
      warnings: [
        "🚫 Avoid cacti with milky sap — poisonous",
        "💩 Don't eat too much pulp — causes diarrhea",
        "☠️ Agave requires boiling — raw causes vomiting"
      ]
    },
    {
      id: "emergency_cloth",
      title: "🧻 Filtration through clothing (emergency)",
      description: "Fold several layers of fabric. Pass dirty water through. This does NOT make water safe, but removes large particles. Still boil or find another source.",
      conditions: { location: ["forest", "desert", "urban", "coast", "mountain", "swamp"], inventory: ["cloth"], urgency: ["now"], weather: ["sunny", "cloudy", "rain", "cold", "fog"] },
      priority: "fast", reliability: "low",
      time_estimate: "5 min", yield_estimate: "depends on source",
      tags: ["cloth", "emergency", "universal", "temporary"],
      steps: [
        "👕 Fold 4-8 layers of fabric/t-shirt",
        "💧 Pass water through fabric",
        "🥤 Collect in container",
        "🔥 Look for way to boil or purify"
      ],
      warnings: [
        "🦠 Fabric does NOT kill bacteria and parasites",
        "⏳ This is temporary — look for boiling",
        "🔄 Cloudy water — strain several times"
      ]
    },

    // ===== MEDIUM TIME SOLUTIONS =====
    {
      id: "birch_sap",
      title: "🌳 Birch sap (spring only!)",
      description: "Make V-shaped cut on birch trunk (>15 cm diameter). Insert tube — sap will flow. Collect in any container. ONLY spring — up to 2 liters per day.",
      conditions: { location: ["forest"], inventory: ["knife", "nothing"], urgency: ["hour", "day", "days"], weather: ["sunny", "cloudy", "cold"] },
      priority: "fast", reliability: "medium",
      time_estimate: "15-30 min", yield_estimate: "0.5-2 L/day",
      tags: ["forest", "knife", "spring", "natural"],
      steps: [
        "🌳 Find birch >15 cm diameter (thicker = more sap)",
        "🔪 Make V-shaped cut on south side",
        "🌿 Insert willow/birch bark tube or bent twig",
        "🪣 Place container. Sap flows 2-4 weeks in spring",
        "⏳ Collect in morning — sap is sweeter and cleaner"
      ],
      warnings: [
        "🛑 No deeper than 2-3 cm — don't kill tree",
        "⏰ Sap ferments after a day — drink fresh",
        "❄️ No sap in winter and summer — only spring (March-May)"
      ]
    },
    {
      id: "sand_filter",
      title: "🪣 Sand filter + boiling",
      description: "Make column from plastic bottle: layers of burnt charcoal, sand, gravel. Pass water through filter. Then mandatory boil or use chemicals.",
      conditions: { location: ["forest", "urban", "coast", "swamp"], inventory: ["bottle", "cloth", "fire"], urgency: ["hour", "day"], weather: ["sunny", "cloudy", "rain", "cold", "fog"] },
      priority: "medium", reliability: "medium",
      time_estimate: "30-60 min", yield_estimate: "depends on speed",
      tags: ["bottle", "cloth", "filter", "urban", "forest"],
      steps: [
        "🪣 Cut bottom off bottle",
        "🔥 Burn charcoal in fire (activation)",
        "🧱 Layer: gravel (5 cm), sand (10 cm), charcoal (5 cm), sand (5 cm)",
        "💧 Pass water through filter (slowly!)",
        "🔥 Still boil or add chemicals"
      ],
      warnings: [
        "🦠 Filter removes particles but NOT all bacteria/viruses",
        "🔥 Charcoal MUST be burnt before use",
        "🔄 Change sand every 20-30 liters"
      ]
    },
    {
      id: "chemical_purify",
      title: "🧪 Chemical water purification",
      description: "Use: iodine (5 drops per 1 L, wait 30 min), chlorine (2 drops per 1 L, wait 30 min), potassium permanganate (to light pink, wait 1 hour). Kills 99% bacteria and viruses.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["chemical", "bottle", "cloth"], urgency: ["now", "hour"], weather: ["sunny", "cloudy", "rain", "cold", "fog"] },
      priority: "medium", reliability: "high",
      time_estimate: "5-10 min + waiting", yield_estimate: "depends on volume",
      tags: ["chemical", "purification", "universal", "fast"],
      steps: [
        "💧 Strain water through fabric (large particles)",
        "🧪 Iodine: 5 drops per 1 liter, wait 30 minutes",
        "🧪 Chlorine: 2 drops per 1 liter, wait 30 minutes",
        "🧪 Potassium permanganate: to light pink, wait 1 hour",
        "🧊 After purification — aerate or pass through charcoal (remove smell)"
      ],
      warnings: [
        "⚠️ Don't exceed dosage — poisoning",
        "🤰 Pregnant and children — iodine contraindicated",
        "🧊 Chlorine + organics = dangerous compounds, use only for clear water",
        "🔄 Potassium permanganate leaves taste — add activated charcoal"
      ]
    },
    {
      id: "transpiration_bag",
      title: "🌿 Transpiration bag",
      description: "Put transparent bag on branch with green leaves. Tie tightly. After 4-6 hours collect condensate. Don't use poisonous plants.",
      conditions: { location: ["forest", "mountain", "swamp"], inventory: ["plastic"], urgency: ["hour", "day", "days"], weather: ["sunny", "cloudy", "fog"] },
      priority: "medium", reliability: "medium",
      time_estimate: "4-6 hours", yield_estimate: "0.1-0.3 L per branch",
      tags: ["plastic", "forest", "vegetation", "passive"],
      steps: [
        "🌿 Choose branch with dense foliage in sun",
        "🛍️ Put transparent bag covering all leaves",
        "🎀 Tie tightly at branch base",
        "⏳ After 4-6 hours collect water from bag corner",
        "🌳 Use multiple bags = more water"
      ],
      warnings: [
        "☠️ Don't use poisonous plants: oak, boxwood, ivy, oleander",
        "🧊 Bag must be TRANSPARENT — otherwise won't work",
        "🌡️ Works best in heat and sun"
      ]
    },
    {
      id: "dig_well",
      title: "⛏️ Well in sand / gravel",
      description: "Dig pit on coast or in dry riverbed until moisture appears. Wait for water to settle. Strain through fabric and boil.",
      conditions: { location: ["coast", "desert", "forest"], inventory: ["knife", "nothing"], urgency: ["hour", "day"], weather: ["sunny", "cloudy", "rain", "fog"] },
      priority: "medium", reliability: "medium",
      time_estimate: "1-2 hours", yield_estimate: "0.5-2 L",
      tags: ["knife", "coast", "desert", "groundwater", "dig"],
      steps: [
        "🏞️ Find dry riverbed or beach",
        "⛏️ Dig pit 30-50 cm deep",
        "⏳ Wait for water to fill pit (10-30 min)",
        "🧻 Strain through fabric and boil",
        "🔄 For cloudy water — let settle 15 min"
      ],
      warnings: [
        "🧂 Water may be salty near shore — dig further from sea",
        "🔥 Always boil or filter",
        "🌵 In desert dig in lowlands, near tree roots"
      ]
    },
    {
      id: "fog_collect",
      title: "🌫️ Fog collection",
      description: "On coast or in mountains fog gives water. Stretch film/fabric vertically. Water condenses on surface. Collect drops. Up to 1-2 liters per foggy day.",
      conditions: { location: ["coast", "mountain"], inventory: ["plastic", "cloth", "bottle"], urgency: ["hour", "day", "days"], weather: ["fog"] },
      priority: "medium", reliability: "medium",
      time_estimate: "1-3 hours", yield_estimate: "0.5-2 L/day",
      tags: ["fog", "coast", "mountain", "condensation", "passive"],
      steps: [
        "🌫️ Stretch film or fabric vertically between trees/stakes",
        "💧 Water condenses on surface",
        "🧴 Place container below to collect drops",
        "⏳ Larger area = more water",
        "🌅 Collect in morning — fog is thicker"
      ],
      warnings: [
        "🌫️ Only works in fog and high humidity",
        "🧊 Fabric must be clean — otherwise water with impurities",
        "🌡️ More water in cold fog"
      ]
    },

    // ===== SLOW SOLUTIONS =====
    {
      id: "solar_still",
      title: "☀️ Solar still (all locations)",
      description: "Dig pit 50×50 cm. Place container in center. Cover with film, pressing edges. Place stone above container — condensate will drip. Up to 0.5 L per day in sunny weather.",
      conditions: { location: ["forest", "desert", "coast"], inventory: ["plastic"], urgency: ["day", "days"], weather: ["sunny"] },
      priority: "slow", reliability: "high",
      time_estimate: "4-8 hours", yield_estimate: "0.3-0.8 L/day",
      tags: ["plastic", "solar", "desert", "coast", "forest"],
      steps: [
        "⛏️ Dig pit 50×50 cm, 30-40 cm deep",
        "🥤 Place container in center of pit",
        "🧊 Cover pit with film, pressing edges with soil/stones",
        "🪨 Place stone above container — film sags down",
        "💧 Condensate drips along film into container"
      ],
      warnings: [
        "☀️ Only works in sun",
        "🌿 Add green leaves/urine to increase evaporation",
        "🚫 Don't touch film — disrupts process"
      ]
    },
    {
      id: "dew_collect",
      title: "💧 Dew collection",
      description: "Early morning drag fabric across grass. Squeeze into container. Can stretch film over pit. Up to 1 liter per 2-3 hours on 100 m².",
      conditions: { location: ["forest", "desert", "coast"], inventory: ["cloth", "plastic"], urgency: ["day", "days"], weather: ["sunny", "cloudy", "fog"] },
      priority: "slow", reliability: "low",
      time_estimate: "2-3 hours (morning)", yield_estimate: "0.3-1 L per morning",
      tags: ["cloth", "plastic", "passive", "morning", "forest"],
      steps: [
        "🌅 Early morning (before sunrise) drag fabric across grass",
        "🔄 Squeeze into container",
        "🧊 Or stretch film over pit — dew drips to center",
        "⏰ Repeat every morning"
      ],
      warnings: [
        "🌅 Only works early morning",
        "🏜️ In desert little dew — expect minimum",
        "☠️ Don't collect from poisonous plants"
      ]
    },
    {
      id: "urban_rain",
      title: "🌧️ Rainwater collection in city",
      description: "Use clean surface (film, tarp). First 10 minutes of rain — drain (washes dust). Collect in bottles. Avoid water from bitumen roofs.",
      conditions: { location: ["urban"], inventory: ["bottle", "plastic"], urgency: ["day", "days"], weather: ["rain"] },
      priority: "slow", reliability: "low",
      time_estimate: "Wait for rain", yield_estimate: "depends on rain",
      tags: ["bottle", "plastic", "urban", "rain", "passive"],
      steps: [
        "🧊 Stretch film/tarp at angle",
        "⏳ First 10 minutes — drain (washes roof dust)",
        "🪣 Collect in clean bottles",
        "🔥 Boil or use chlorine tablets"
      ],
      warnings: [
        "☠️ Water from bitumen roofs — toxic",
        "🏭 Industrial areas — mandatory filtering",
        "☔ First rain after drought — dirty, drain"
      ]
    },
    {
      id: "rain_collect_nature",
      title: "🌧️ Rainwater collection in nature",
      description: "In forest and mountains — use burdock leaves, bark rolled into cone, or just place containers in open area. Rainwater is the cleanest.",
      conditions: { location: ["forest", "mountain", "swamp"], inventory: ["bottle", "plastic", "knife", "nothing"], urgency: ["day", "days"], weather: ["rain"] },
      priority: "slow", reliability: "low",
      time_estimate: "Rain duration", yield_estimate: "depends on rain",
      tags: ["forest", "mountain", "rain", "passive", "natural"],
      steps: [
        "🌿 Spread large burdock leaves as funnels",
        "🪣 Place all containers in open area",
        "🧊 Stretch film/tarp for water collection",
        "💧 Collect water after rain washed dust (10 min)",
        "🔥 Still boil for safety"
      ],
      warnings: [
        "☁️ Don't collect during thunderstorm — lightning",
        "🌳 Don't place under large trees — may be poisonous",
        "🧊 Don't use leaves from poisonous trees (oak, oleander)"
      ]
    }
  ]
};
