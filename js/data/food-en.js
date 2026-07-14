// === SECTION: FOOD (ENGLISH) ===
const foodData = {
  category: "food",
  title: "🍖 Food",
  description: "Obtaining food in the wild",

  questions: [
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "forest",    label: "🌲 Forest / taiga",      tags: ["forest", "plants", "animals"] },
        { id: "desert",    label: "🏜️ Desert / steppe",    tags: ["desert", "reptiles", "insects"] },
        { id: "mountain",  label: "⛰️ Mountains",              tags: ["mountain", "goats", "plants"] },
        { id: "coast",     label: "🏖️ Coast / island", tags: ["coast", "fish", "shells", "seaweed"] },
        { id: "urban",     label: "🏙️ City / industrial zone",   tags: ["urban", "trash", "pigeons", "plants"] },
        { id: "taiga",     label: "🌲 Taiga / swamp",    tags: ["taiga", "berries", "mushrooms", "wild"] }
      ]
    },
    {
      id: "inventory",
      text: "What do you have at hand?",
      type: "multi",
      options: [
        { id: "knife",     label: "🔪 Knife / multitool",       tags: ["tool", "hunting", "processing"] },
        { id: "rope",      label: "🪢 Rope / paracord",    tags: ["traps", "snares", "fishing"] },
        { id: "fire",      label: "🔥 Matches / lighter",   tags: ["cooking", "warmth"] },
        { id: "container", label: "🥫 Container / bottle",    tags: ["cooking", "water", "storage"] },
        { id: "hook",      label: "🎣 Hook / fishing line",        tags: ["fishing", "precision"] },
        { id: "nothing",   label: "❌ Nothing",             tags: ["primitive", "gathering"] }
      ]
    },
    {
      id: "season",
      text: "What season is it?",
      type: "single",
      options: [
        { id: "spring",   label: "🌸 Spring",  tags: ["plants", "eggs", "young"] },
        { id: "summer",   label: "☀️ Summer",   tags: ["berries", "fish", "insects"] },
        { id: "autumn",   label: "🍂 Autumn",  tags: ["nuts", "mushrooms", "fat"] },
        { id: "winter",   label: "❄️ Winter",   tags: ["tracks", "hibernation", "roots", "ice"] }
      ]
    },
    {
      id: "urgency",
      text: "How urgently do you need food?",
      type: "single",
      options: [
        { id: "now",  label: "⚠️ Now! Severe hunger", tags: ["critical", "immediate"] },
        { id: "hour", label: "⏱️ Have 1-3 hours",         tags: ["urgent", "short"] },
        { id: "day",  label: "🌅 Have a day",             tags: ["planned", "medium"] },
        { id: "days", label: "📅 Have several days",   tags: ["long_term", "strategic"] }
      ]
    }
  ],

  solutions: [
    // ===== FAST SOLUTIONS =====
    {
      id: "insects",
      title: "🐛 Edible insects and larvae",
      description: "Insects are the most accessible and fast source of protein. Edible: caterpillars, crickets, grasshoppers, ants, termites, beetle larvae (chafer beetles, longhorn beetles). Always fry until crispy.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "taiga"], inventory: ["nothing", "knife", "fire", "container"], season: ["spring", "summer", "autumn", "winter"], urgency: ["now", "hour", "day"] },
      priority: "fast", reliability: "high",
      time_estimate: "10-30 min", yield_estimate: "100-200 g protein per hour",
      tags: ["insects", "protein", "universal", "quick"],
      steps: [
        "🔍 Look under stones, bark, in rotten wood, in anthills",
        "🐜 Edible: caterpillars, crickets, grasshoppers, ants, termites, beetle larvae",
        "🚫 Avoid: bright, hairy, foul-smelling, red/orange",
        "📦 Collect in container or leaf",
        "🔥 Fry on fire or hot stone until crispy — kills parasites"
      ],
      warnings: [
        "⚠️ Do NOT eat raw — parasites and toxins",
        "☠️ Spiders, scorpions, centipedes — poisonous",
        "🤧 Allergies possible — start with small amount",
        "❌ Ants with red heads — poisonous"
      ]
    },
    {
      id: "berries_plants",
      title: "🍓 Berries and edible plants",
      description: "Fast source of carbohydrates and vitamins. In forest: blueberries, lingonberries, raspberries, cranberries, bilberries. Edible plants: nettle (boil), dandelion, plantain, goosefoot, wood sorrel, goutweed.",
      conditions: { location: ["forest", "mountain", "urban", "taiga"], inventory: ["nothing", "knife", "container"], season: ["spring", "summer", "autumn"], urgency: ["now", "hour"] },
      priority: "fast", reliability: "medium",
      time_estimate: "15-30 min", yield_estimate: "200-500 g per hour",
      tags: ["plants", "berries", "forest", "vitamins"],
      steps: [
        "🍇 Collect only familiar berries: blueberries, lingonberries, raspberries, cranberries, bilberries",
        "🌿 Edible leaves: nettle (boil), dandelion, plantain, goosefoot, goutweed",
        "🥕 Roots: dandelion, burdock, goosefoot, cattail — boil or fry",
        "⚠️ Avoid: bright unknown berries, white berries, plants with milky sap",
        "📖 Rule: if in doubt — DON'T eat!"
      ],
      warnings: [
        "⚪ White berries — 90% poisonous",
        "🥛 Milky sap — toxic in most plants",
        "🍄 Some mushrooms are deadly poisonous — don't collect without 100% certainty",
        "🌿 Wolfberry — red but poisonous!"
      ]
    },
    {
      id: "coast_food",
      title: "🦀 Coast foraging",
      description: "The sea is a treasure trove of food: shellfish (mussels, scallops, oysters), crabs, sea urchins, seaweed, small fish. Find on tidal flats during low tide. In an hour you can collect for a whole day.",
      conditions: { location: ["coast"], inventory: ["nothing", "knife", "container", "fire"], season: ["spring", "summer", "autumn", "winter"], urgency: ["now", "hour", "day"] },
      priority: "fast", reliability: "high",
      time_estimate: "20-40 min", yield_estimate: "500 g - 2 kg per hour",
      tags: ["coast", "seafood", "protein", "quick"],
      steps: [
        "🐚 Shellfish: collect on tidal flats, open — alive, closed — dead",
        "🦀 Crabs: look under rocks in shallow water, catch from behind",
        "🌊 Sea urchins: careful, spiny. Cut top, eat roe",
        "🌿 Seaweed: boil 10-15 min, some raw are toxic",
        "🐟 Fish: in shallow water — catch by hand or spear"
      ],
      warnings: [
        "🔴 Red tide — shellfish toxic, check",
        "☠️ Fugu, stingray, some sea urchins — deadly poisonous",
        "🔥 All seafood boil minimum 5 minutes",
        "🦪 Oysters — only open alive, discard closed"
      ]
    },
    {
      id: "urban_food",
      title: "🏙️ Finding food in the city",
      description: "In the city food is everywhere: gardens, vegetable gardens, dumpsters near shops, abandoned warehouses and stores. Even in winter you can find canned food, bread, vegetables. And wild plants in vacant lots.",
      conditions: { location: ["urban"], inventory: ["nothing", "knife", "container"], season: ["spring", "summer", "autumn", "winter"], urgency: ["now", "hour"] },
      priority: "fast", reliability: "medium",
      time_estimate: "15-30 min", yield_estimate: "varies, up to 2 kg",
      tags: ["urban", "scavenging", "quick", "risky"],
      steps: [
        "🌳 Gardens and vegetable gardens: carrots, potatoes, apples, berries — even in winter under snow",
        "🗑️ Dumpsters near shops: canned food, bread, vegetables, fruits",
        "🥫 Check cans: no bulging, rust, smell",
        "🌿 Wild plants: dandelions, nettle, plantain, goosefoot",
        "🕊️ Birds: pigeons, sparrows — traps from rope and box"
      ],
      warnings: [
        "💀 Bulging cans — botulism, deadly",
        "🤢 Don't eat rotten food — severe poisoning",
        "❓ Careful with unlabeled cans — unknown contents",
        "🐀 In trash — rats, diseases, wash and check food"
      ]
    },
    {
      id: "fishing_hand",
      title: "🎣 Fishing by hand / spear",
      description: "In shallow water fish are easily caught by hand or spear. Look in thickets, under driftwood, in backwaters. In warm water fish are slower. At night can fish with a flashlight.",
      conditions: { location: ["forest", "coast", "mountain", "taiga"], inventory: ["knife", "nothing"], season: ["spring", "summer", "autumn"], urgency: ["now", "hour", "day"] },
      priority: "fast", reliability: "medium",
      time_estimate: "20-60 min", yield_estimate: "1-3 fish per hour",
      tags: ["water", "fish", "quick", "protein"],
      steps: [
        "💧 Find shallow backwater, thickets, under driftwood",
        "🚶 Move slowly — fish get scared by sudden movements",
        "🖐️ Catch from below — fish don't see you",
        "🗡️ Or make a spear: sharpen a long branch, tie 3-4 prongs",
        "🌡️ In warm water fish are slower — catch during day, in cold water more active"
      ],
      warnings: [
        "☣️ Don't fish in polluted water — toxin accumulation",
        "☠️ Some fish are poisonous: fugu, stingray, snakehead",
        "🔥 Always fry fish — parasites (tapeworm, opisthorchiasis)",
        "🪝 Large fish can cut hands or escape"
      ]
    },

    // ===== MEDIUM TIME SOLUTIONS =====
    {
      id: "fishing_trap",
      title: "🪤 Fish trap",
      description: "Effective passive fishing method. Make a funnel from branches or stones in shallow water. Or use a plastic bottle (cut off neck, insert back as cone). Overnight — 2-5 fish guaranteed.",
      conditions: { location: ["forest", "coast", "mountain", "taiga"], inventory: ["container", "knife", "rope", "nothing"], season: ["spring", "summer", "autumn"], urgency: ["hour", "day", "days"] },
      priority: "medium", reliability: "medium",
      time_estimate: "30-60 min setup", yield_estimate: "2-5 fish per night",
      tags: ["water", "fish", "passive", "trap"],
      steps: [
        "🌊 Find shallow water with current",
        "🪨 Make funnel from stones or branches — wide entrance, narrow exit",
        "🧪 Or bottle: cut neck, insert back as cone inside",
        "🐛 Add bait: worms, insects, fish pieces, bread",
        "🌙 Leave overnight, check morning and evening"
      ],
      warnings: [
        "⏰ Check trap every 6-8 hours — fish die",
        "💨 Don't place in fast current — fish won't stay",
        "🔥 Always fry — parasites",
        "👃 Dead fish smells like ammonia — don't eat"
      ]
    },
    {
      id: "snare_trap",
      title: "🪤 Snare / trap for hare / squirrel",
      description: "Most effective passive meat hunting method. Snare from rope/paracord on animal trail. At hare head height (15-20 cm) or squirrel (5-8 cm). Check in morning — often has results.",
      conditions: { location: ["forest", "mountain", "taiga"], inventory: ["rope", "knife", "nothing"], season: ["spring", "summer", "autumn", "winter"], urgency: ["hour", "day", "days"] },
      priority: "medium", reliability: "medium",
      time_estimate: "30-60 min setup + waiting", yield_estimate: "1 animal in 1-3 days",
      tags: ["forest", "hunting", "passive", "meat"],
      steps: [
        "🐾 Find animal trail: tracks, droppings, rubbed branches, bruises on trees",
        "🪢 Make snare from rope/paracord/cord (slip knot)",
        "🌳 Secure to tree or stake at animal head height",
        "🔄 Snare should slide — animal tightens it itself",
        "🌅 Check morning and evening, can set several"
      ],
      warnings: [
        "🐻 Don't set on bear, moose, boar trail — life threatening",
        "📜 Check local laws — prohibited in many places",
        "🦨 Don't eat sick animals — rabies, plague, trichinosis",
        "🩸 Large animal may escape with snare — don't try to chase"
      ]
    },
    {
      id: "bird_trap",
      title: "🐦 Bird trap (snares/box)",
      description: "Birds are an excellent source of meat. Make a trap: box on a stick with bait (bread, berries), or snares from rope on branches. Pigeons, partridges, sparrows — most accessible. Works anywhere.",
      conditions: { location: ["forest", "mountain", "urban", "coast", "taiga"], inventory: ["rope", "knife", "nothing"], season: ["spring", "summer", "autumn", "winter"], urgency: ["hour", "day", "days"] },
      priority: "medium", reliability: "low",
      time_estimate: "20-40 min", yield_estimate: "1-3 birds per day",
      tags: ["birds", "trap", "protein", "urban", "forest"],
      steps: [
        "📦 Make box/basket on a stick — bait inside",
        "🪢 Snares: rope with loop on branch where birds perch",
        "🍞 Bait: bread, berries, seeds, cereal, grain",
        "🌿 Camouflage trap with branches and grass",
        "⏰ Check every 2-3 hours — birds spoil quickly"
      ],
      warnings: [
        "🦅 Birds of prey — don't catch, dangerous and protected by law",
        "🧊 In winter birds are hungry — easier to catch, but meat is lean",
        "🔥 Always fry until fully cooked — salmonella",
        "📏 Snare should not be too large — bird will escape"
      ]
    },
    {
      id: "trapping_rabbit",
      title: "🐇 Rabbit snare (specialized)",
      description: "Improved snare for rabbit. Use wire or sinew. Snare 25-30 cm diameter, at height 20-25 cm from ground. Only on trails, near burrows, on feeding grounds.",
      conditions: { location: ["forest", "mountain", "taiga"], inventory: ["rope", "knife", "nothing"], season: ["spring", "summer", "autumn", "winter"], urgency: ["day", "days"] },
      priority: "medium", reliability: "high",
      time_estimate: "1-2 hours", yield_estimate: "1 rabbit in 1-2 days",
      tags: ["forest", "rabbit", "meat", "trap"],
      steps: [
        "🐾 Find rabbit trail: bruises on branches at 40-50 cm height",
        "🪢 Snare from thick fishing line/wire (twisted), or sinew",
        "📐 Height 20-25 cm from ground, diameter 25-30 cm",
        "🌿 Secure to stake or tree",
        "🌙 Check early morning — if caught, process quickly"
      ],
      warnings: [
        "🩸 Rabbits kick hard — may break",
        "🐺 Wolves/foxes may be on trail — be careful",
        "🐇 Don't eat rabbit in summer without thorough cooking — tularemia",
        "📏 Don't make snare too small — rabbit won't fit"
      ]
    },

    // ===== SLOW SOLUTIONS =====
    {
      id: "winter_survival",
      title: "❄️ Winter survival — roots and hunting",
      description: "In winter the main thing is fats and energy. Look for: dried berries on bushes (rowan, rosehip), roots of burdock, cattail, reed, bulrush. Hunting by tracks: hares, partridges, capercaillie. Fishing under ice.",
      conditions: { location: ["forest", "mountain", "taiga"], inventory: ["knife", "fire", "nothing"], season: ["winter"], urgency: ["now", "hour", "day", "days"] },
      priority: "slow", reliability: "medium",
      time_estimate: "1-3 hours", yield_estimate: "depends on skill, up to 1 kg per day",
      tags: ["winter", "survival", "roots", "tracking"],
      steps: [
        "❄️ Tracks in snow: hares, squirrels, partridges, foxes — follow them (but DON'T eat fox!)",
        "🥕 Roots of cattail, reed, burdock — boil 20-30 min in 2 waters",
        "🍒 Dried rowan berries, rosehip — on bushes (collect)",
        "🥜 Nuts: pine nuts, hazelnuts — under snow near squirrel nests",
        "🎣 Fishing: cut ice (not closer than 2 m from shore), fish with bait"
      ],
      warnings: [
        "🍒 Don't eat frozen red berries from unknown bushes — may be poisonous",
        "🧊 Ice on river — check with stick, don't walk on thin ice",
        "🔥 In winter you burn calories faster — eat fats and carbohydrates",
        "❌ Fox, wolf, bear — DON'T EAT (trichinosis, diseases)"
      ]
    },
    {
      id: "mushrooms_safe",
      title: "🍄 Edible mushrooms (only verified!)",
      description: "Mushrooms are a good source of carbohydrates and protein. Only 100% verified: porcini, boletus, birch bolete, chanterelles, honey mushrooms (autumn), milk caps. Don't collect russulas, volnushki — easy to mistake.",
      conditions: { location: ["forest", "taiga"], inventory: ["knife", "container", "fire"], season: ["spring", "summer", "autumn"], urgency: ["hour", "day", "days"] },
      priority: "slow", reliability: "low",
      time_estimate: "1-3 hours", yield_estimate: "1-5 kg per day",
      tags: ["mushrooms", "forest", "risky", "food"],
      steps: [
        "🍄 Only verified: porcini, boletus, birch bolete, chanterelles",
        "📖 Don't take: death cap, amanitas, false honey mushrooms",
        "🔍 Check each mushroom: smell, color, growth place",
        "🔥 Boil minimum 30 min, pour out water (it's toxic)",
        "❌ If in doubt — DON'T take!"
      ],
      warnings: [
        "💀 Death cap — deadly poisonous, 99% lethality",
        "🍄 False honey mushrooms — distinguish by smell (garlicky), film under cap",
        "🌡️ Some mushrooms edible only after 2-3 boils (milk caps, volnushki)",
        "☠️ Red amanita — poisonous, panther amanita — deadly"
      ]
    },
    {
      id: "hunting_bow",
      title: "🏹 Hunting with bow / slingshot",
      description: "If you have time and skill — make a bow from a flexible branch and rope. Arrows — from straight sticks with stone/bone/metal points. Requires practice, but gives prey: hares, partridges, small ungulates.",
      conditions: { location: ["forest", "mountain", "taiga"], inventory: ["knife", "rope", "nothing"], season: ["spring", "summer", "autumn", "winter"], urgency: ["day", "days"] },
      priority: "slow", reliability: "low",
      time_estimate: "2-6 hours (making + hunting)", yield_estimate: "depends on skill",
      tags: ["hunting", "primitive", "bow", "skill"],
      steps: [
        "🌿 Make bow: flexible branch of juniper, maple, ash (length 1.5 m)",
        "🪢 String: rope, paracord, sinew, nylon",
        "🏹 Arrows: straight sticks 70-80 cm, point from stone/bone/metal",
        "🎯 Practice on target 1-2 days",
        "🦌 Hunting: from 20-30 meters, aim for chest/neck"
      ],
      warnings: [
        "📈 Requires long practice — without training you won't hit",
        "🦌 On large game (boar, moose) — useless, only wound",
        "⚖️ Check sharpness of point — blunt won't penetrate",
        "🩸 Blood on snow — not always prey, don't waste time"
      ]
    },
    {
      id: "fishing_ice",
      title: "🎣 Ice fishing in winter",
      description: "In winter ice fishing is the main source of protein. Cut ice (diameter 20-30 cm). Use hook/spear. Bait: worms, insects, fish pieces. Fish under ice is always there.",
      conditions: { location: ["forest", "mountain", "taiga", "coast"], inventory: ["knife", "hook", "rope", "fire"], season: ["winter"], urgency: ["hour", "day", "days"] },
      priority: "slow", reliability: "medium",
      time_estimate: "1-3 hours", yield_estimate: "2-5 fish per day",
      tags: ["winter", "ice", "fish", "protein"],
      steps: [
        "🧊 Cut ice not closer than 2 m from shore, thickness 10+ cm",
        "🔧 Make hook from pin/wire or spear",
        "🐛 Bait: worms (in winter in ground), insects, meat pieces",
        "⏳ Fish are slow, wait 20-40 min",
        "🔥 Make fire on ice — fish warm up and bite more actively"
      ],
      warnings: [
        "🧊 Check ice with stick — don't walk on thin (<7 cm)",
        "🌡️ In cold weather fish sleep — look at depth 2-4 m",
        "🔥 Don't make fire on thin ice — will crack",
        "📏 Don't make hole wider than 30 cm — can fall through"
      ]
    }
  ]
};
