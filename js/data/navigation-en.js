// === SECTION: NAVIGATION (ENGLISH) ===
const navigationDataEn = {
  category: "navigation",
  title: "🧭 Navigation",
  description: "Orientation and rescue signals",

  questions: [
    {
      id: "situation",
      text: "What's your situation?",
      type: "single",
      options: [
        { id: "lost",      label: "🗺️ Lost",  tags: ["lost", "find_way"] },
        { id: "stranded",  label: "🆘 Stranded / accident",        tags: ["stranded", "wait_rescue"] },
        { id: "evacuate",  label: "🏃 Need to evacuate",    tags: ["evacuate", "move"] },
        { id: "night",     label: "🌙 Night / darkness",          tags: ["night", "dark", "wait"] },
        { id: "rescue",    label: "🚁 Want to attract rescuers", tags: ["rescue", "signals"] }
      ]
    },
    {
      id: "tools",
      text: "What navigation tools do you have?",
      type: "multi",
      options: [
        { id: "compass",   label: "🧭 Compass",                     tags: ["compass", "direction"] },
        { id: "gps",       label: "📱 GPS / phone with maps",    tags: ["gps", "coordinates"] },
        { id: "map",       label: "🗺️ Map",                      tags: ["map", "terrain"] },
        { id: "watch",     label: "⌚ Analog watch",         tags: ["watch", "sun", "time"] },
        { id: "mirror",    label: "🪞 Mirror / shiny object", tags: ["mirror", "signals", "sun"] },
        { id: "nothing",   label: "❌ Nothing",                 tags: ["primitive", "natural"] }
      ]
    },
    {
      id: "weather",
      text: "Weather / time of day?",
      type: "single",
      options: [
        { id: "sunny",     label: "☀️ Sunny / day",        tags: ["sun", "day", "shadows"] },
        { id: "cloudy",    label: "☁️ Cloudy",               tags: ["clouds", "no_sun", "landmarks"] },
        { id: "night",     label: "🌙 Night / stars",          tags: ["stars", "moon", "polaris"] },
        { id: "fog",       label: "🌫️ Fog / rain",         tags: ["fog", "low_vis", "wait"] },
        { id: "moon",      label: "🌕 Night / full moon",     tags: ["moon", "night_vis"] }
      ]
    },
    {
      id: "terrain",
      text: "What terrain?",
      type: "single",
      options: [
        { id: "forest",    label: "🌲 Forest / taiga",           tags: ["forest", "trees", "moss"] },
        { id: "open",      label: "🏜️ Open / plains",    tags: ["open", "horizon", "sun"] },
        { id: "mountain",  label: "⛰️ Mountains / hills",          tags: ["mountain", "ridge", "valley"] },
        { id: "coast",     label: "🏖️ Coast / river",      tags: ["coast", "water", "follow"] },
        { id: "urban",     label: "🏙️ City / industrial zone",      tags: ["urban", "roads", "signs"] },
        { id: "swamp",     label: "🌿 Swamp / tundra",       tags: ["swamp", "flat", "moss"] }
      ]
    }
  ],

  solutions: [
    {
      id: "compass_basic",
      title: "🧭 Compass — basic navigation",
      description: "Compass shows magnetic north. Remember: magnetic declination (in Russia 5-15° east). Align with map: rotate compass until needle matches north on map.",
      conditions: { situation: ["lost", "evacuate", "stranded"], tools: ["compass"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "open", "mountain", "coast", "urban", "swamp"] },
      priority: "fast", reliability: "high",
      time_estimate: "2-5 min", yield_estimate: "exact direction",
      tags: ["compass", "direction", "universal", "tool"],
      steps: [
        "Hold compass level, wait for needle to stop",
        "Needle points to magnetic north (red end)",
        "In Russia magnetic declination ~5-15° east of true north",
        "Align with map: rotate compass until needle matches map north",
        "Choose a distant landmark in direction of travel"
      ],
      warnings: [
        "Don't hold compass near metal — distorts readings",
        "Magnetic declination varies by region",
        "When evacuating — move toward civilization, not just 'south'"
      ]
    },
    {
      id: "sun_shadow",
      title: "☀️ Navigation by sun and shadow",
      description: "In sunny weather: sun rises in east, sets in west. At 12:00 — in the south (northern hemisphere). Shadow from vertical stick shows direction.",
      conditions: { situation: ["lost", "evacuate"], tools: ["nothing", "watch", "compass"], weather: ["sunny"], terrain: ["forest", "open", "mountain", "coast"] },
      priority: "fast", reliability: "high",
      time_estimate: "5-10 min", yield_estimate: "approximate direction",
      tags: ["sun", "shadow", "primitive", "day", "free"],
      steps: [
        "Stick a vertical pole in the ground (1 m)",
        "Mark the shadow end with a stone (point A)",
        "After 15-20 minutes mark the new shadow end (point B)",
        "Draw line from A to B — this is WEST → EAST direction",
        "Perpendicular to this line — NORTH → SOUTH (in northern hemisphere)"
      ],
      warnings: [
        "Accuracy ±10-15° — approximate direction",
        "Doesn't work in cloudy weather",
        "At noon shadow is minimal — difficult to determine"
      ]
    },
    {
      id: "watch_sun",
      title: "⌚ Navigation by watch and sun",
      description: "Analog watch: point hour hand at sun. Halfway between hour hand and 12 o'clock points south. At 12:00 — hour hand itself points roughly south.",
      conditions: { situation: ["lost", "evacuate"], tools: ["watch", "nothing"], weather: ["sunny"], terrain: ["forest", "open", "mountain", "coast", "urban"] },
      priority: "fast", reliability: "medium",
      time_estimate: "1-2 min", yield_estimate: "approximate direction",
      tags: ["watch", "sun", "quick", "day"],
      steps: [
        "Point hour hand at sun",
        "Find halfway between hour hand and 12",
        "This line points SOUTH (in northern hemisphere)",
        "At 12:00 hour hand itself points roughly south",
        "At 18:00 — west, at 6:00 — east"
      ],
      warnings: [
        "Accuracy ±20-30° — approximate",
        "Daylight saving time: use 13 instead of 12",
        "Doesn't work in cloudy weather and at night"
      ]
    },
    {
      id: "stars_north",
      title: "⭐ Navigation by stars (Polaris)",
      description: "Find Big Dipper (Plough). Draw line through 2 outer stars of the Dipper 5 times its length upward. There is Polaris — it points north.",
      conditions: { situation: ["lost", "evacuate", "night"], tools: ["nothing", "compass", "watch"], weather: ["night", "moon"], terrain: ["forest", "open", "mountain", "coast", "swamp"] },
      priority: "fast", reliability: "high",
      time_estimate: "2-5 min", yield_estimate: "exact north",
      tags: ["stars", "night", "polaris", "free", "accurate"],
      steps: [
        "Find Big Dipper (Plough) — 7 bright stars",
        "Take the 2 outer stars: Merak and Dubhe",
        "Draw line through them 5 times the Dipper's length upward",
        "There is Polaris — bright, doesn't twinkle, points north",
        "Little Dipper — small Dipper near Polaris — confirms direction"
      ],
      warnings: [
        "Polaris high above horizon — that's north",
        "In southern hemisphere — look for Southern Cross",
        "Clouds, moon, lights interfere with seeing stars"
      ]
    },
    {
      id: "moon_navigation",
      title: "🌙 Navigation by the Moon",
      description: "On a clear night with Moon: Moon moves east to west. Waxing Moon (crescent like 'С') — visible evening in west. Waning (crescent like 'Р') — visible morning in east. Full Moon — in south around midnight.",
      conditions: { situation: ["lost", "evacuate", "night"], tools: ["nothing", "watch"], weather: ["moon", "night"], terrain: ["forest", "open", "mountain", "coast", "swamp"] },
      priority: "fast", reliability: "medium",
      time_estimate: "2-5 min", yield_estimate: "approximate direction",
      tags: ["moon", "night", "primitive", "free"],
      steps: [
        "Waxing Moon (crescent like 'С') — visible evening in west",
        "Waning Moon (crescent like 'Р') — visible morning in east",
        "Full Moon — around midnight in south (northern hemisphere)",
        "Line between the horns of the crescent points south (approximately)",
        "Use as supplement to stars"
      ],
      warnings: [
        "Accuracy ±15-20° — approximate",
        "Clouds interfere with seeing Moon",
        "New Moon not visible — use stars"
      ]
    },
    {
      id: "water_follow",
      title: "🌊 Follow water",
      description: "Rivers and streams almost always lead to civilization. In mountains — downstream. On plains — toward larger rivers, lakes, sea. In desert — dry riverbeds lead to oases.",
      conditions: { situation: ["lost", "evacuate", "stranded"], tools: ["nothing", "compass", "watch"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "mountain", "coast", "swamp"] },
      priority: "fast", reliability: "high",
      time_estimate: "0 min", yield_estimate: "path to civilization",
      tags: ["water", "river", "follow", "safe", "universal"],
      steps: [
        "Find stream, river, lake",
        "In mountains — move downstream",
        "On plains — follow toward larger bodies of water",
        "Rivers lead to lakes, sea, settlements",
        "In desert — dry riverbeds lead to oases"
      ],
      warnings: [
        "Don't swim in fast water — walk along bank",
        "Waterfalls and rapids — go around",
        "In desert — water may be salty, check"
      ]
    },
    {
      id: "road_follow",
      title: "🛣️ Follow roads / trails",
      description: "In forest look for trails, clearings, power lines. In city — main streets, signs, light. In mountains — passes, pastures. Roads always lead to people.",
      conditions: { situation: ["lost", "evacuate", "stranded"], tools: ["nothing", "compass", "watch"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "mountain", "urban"] },
      priority: "fast", reliability: "high",
      time_estimate: "0-10 min", yield_estimate: "path to people",
      tags: ["roads", "trails", "civilization", "safe"],
      steps: [
        "In forest look for trails, clearings, power lines",
        "Human traces, trash, cut branches — signs of civilization",
        "In mountains — passes, pastures, sheep trails",
        "In city — main streets, light, noise, traffic",
        "Roads always lead to people — follow them"
      ],
      warnings: [
        "Don't walk on railway — dangerous, walk alongside",
        "Abandoned roads may lead nowhere",
        "In fog — stick to road, don't leave it"
      ]
    },
    {
      id: "sos_signals",
      title: "🆘 Rescue signals",
      description: "International distress signal: 3 fires in triangle, 3 flashes, 3 hits, 3 shots. SOS in Morse code: three short, three long, three short. Mirror reflects sunlight to aircraft.",
      conditions: { situation: ["stranded", "lost", "evacuate", "rescue"], tools: ["nothing", "compass", "watch", "mirror"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "open", "mountain", "coast", "urban"] },
      priority: "fast", reliability: "high",
      time_estimate: "10-30 min", yield_estimate: "attract attention",
      tags: ["sos", "rescue", "signals", "universal", "emergency"],
      steps: [
        "3 fires in triangle — international distress signal",
        "3 flashlight flashes, 3 hits, 3 shots — pause, repeat",
        "SOS in Morse code: ... --- ... (three short, three long, three short)",
        "Reflect sun with mirror at airplane/helicopter (not in pilot's eyes)",
        "Smoke signal: wet branches on fire — thick smoke"
      ],
      warnings: [
        "Don't use all resources on signals — save for night",
        "In forest signals less visible — find clearing, summit",
        "Don't wave hands — may be seen as greeting",
        "Don't shine mirror in pilot's eyes — blind"
      ]
    },
    {
      id: "smoke_signals",
      title: "🔥 Smoke signals",
      description: "Smoke visible from afar. For daytime signal: wet green branches, moss, grass — give thick white smoke. For night: dry wood — bright flame. 3 columns of smoke = distress signal.",
      conditions: { situation: ["stranded", "lost", "rescue"], tools: ["fire", "nothing"], weather: ["sunny", "cloudy", "fog"], terrain: ["forest", "open", "mountain", "coast"] },
      priority: "fast", reliability: "medium",
      time_estimate: "5-15 min", yield_estimate: "visible signal 5-10 km",
      tags: ["smoke", "rescue", "signals", "fire", "day"],
      steps: [
        "Make fire in open place",
        "Add wet branches, green moss, grass — thick white smoke",
        "Make 3 columns of smoke (3 fires) — distress signal",
        "In forest smoke less visible — find clearing or elevation",
        "Renew smoke every 10-15 minutes"
      ],
      warnings: [
        "Wind carries smoke — stand leeward",
        "Don't make fire in dry windy weather — fire hazard",
        "Smoke not visible at night — use fire",
        "If smoke is white — good, if black — chemicals burning"
      ]
    },
    {
      id: "moss_trees",
      title: "🌿 Natural signs (moss, trees, anthills)",
      description: "Moss often grows on north side of trees and stones. Anthills usually on south side of trees (for warmth). Branches on south side thicker. Snow melts faster on south slopes.",
      conditions: { situation: ["lost", "evacuate"], tools: ["nothing", "compass", "watch"], weather: ["sunny", "cloudy", "fog"], terrain: ["forest", "mountain", "swamp"] },
      priority: "medium", reliability: "low",
      time_estimate: "5-10 min", yield_estimate: "approximate direction",
      tags: ["nature", "moss", "trees", "primitive", "backup"],
      steps: [
        "Moss often on north side of trees and stones",
        "Anthills — on south side of trees (seek warmth)",
        "Branches on south side thicker and longer",
        "Snow melts faster on south slopes, slower on north",
        "Bark on north side wetter and darker"
      ],
      warnings: [
        "Moss not 100% reliable — moisture and shade affect",
        "In dense forest moss grows on all sides",
        "Use only in combination with other methods",
        "Anthills may be on south side, but not always"
      ]
    },
    {
      id: "tree_notches",
      title: "🪵 Tree markings (trail marking)",
      description: "If you decide to move in forest — mark trees: deep knife notches, tied branches, arrows from sticks. This helps find way back and rescuers see your direction.",
      conditions: { situation: ["lost", "evacuate"], tools: ["knife", "nothing"], weather: ["sunny", "cloudy", "fog"], terrain: ["forest", "swamp"] },
      priority: "medium", reliability: "medium",
      time_estimate: "1-2 min per mark", yield_estimate: "return path",
      tags: ["forest", "marking", "trail", "backtrack"],
      steps: [
        "Make deep notches on trees every 50-100 m",
        "Tie branches or bend bushes in direction of travel",
        "Arrows from sticks or stones on ground",
        "If lost — follow your marks back",
        "For rescuers — leave large visible signs"
      ],
      warnings: [
        "Don't damage bark in ring — tree dies",
        "Marks may be erased by rain or snow",
        "Don't leave trash — only visible signs",
        "Distance between marks should be small"
      ]
    },
    {
      id: "landmark_orient",
      title: "🗺️ Orientation by prominent landmarks",
      description: "In any terrain look for notable objects: tall trees, rocks, hills, towers, water towers. Determine your position relative to them. Move from landmark to landmark.",
      conditions: { situation: ["lost", "evacuate"], tools: ["nothing", "map", "compass"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "open", "mountain", "coast", "urban", "swamp"] },
      priority: "medium", reliability: "medium",
      time_estimate: "5-15 min", yield_estimate: "position reference",
      tags: ["landmarks", "orientation", "visual", "universal"],
      steps: [
        "In forest — tallest trees, hills",
        "In mountains — peaks, passes, gorges",
        "In city — towers, churches, water towers",
        "On coast — lighthouses, capes, bays",
        "Identify 2-3 landmarks, move between them"
      ],
      warnings: [
        "In fog landmarks not visible — wait or use compass",
        "At night landmarks poorly visible — move only in moonlight",
        "Look back periodically — remember the way back"
      ]
    },
    {
      id: "stay_put",
      title: "🧘 Stay put and wait",
      description: "If you don't know where to go, injured, night, storm — stay put. Rescuers search within radius of last known location. Build shelter, signals, fire.",
      conditions: { situation: ["lost", "stranded", "night"], tools: ["nothing", "compass", "watch"], weather: ["fog", "night", "cloudy"], terrain: ["forest", "mountain", "open", "swamp"] },
      priority: "slow", reliability: "high",
      time_estimate: "0 min", yield_estimate: "increased rescue chances",
      tags: ["wait", "rescue", "safe", "wisdom"],
      steps: [
        "If injured, night, storm, fog — DO NOT move",
        "Rescuers search within radius of last known location",
        "Build shelter, fire, signals — be visible",
        "Stay in open place if safe",
        "Only move if confident in direction and have light"
      ],
      warnings: [
        "Panic is the main enemy. Breathe, think, act",
        "Don't wander — wastes energy and leaves search area",
        "If moving — leave signs: arrows, stone piles",
        "If thirsty — drink water, don't wait until last"
      ]
    },
    {
      id: "wait_rescue_psychology",
      title: "🧠 Psychology of waiting for rescue",
      description: "Waiting is the hardest. Stay calm: breathe deeply, plan your day. Break time into segments: food, water, signals, rest. Keep a diary — write events, this preserves sanity.",
      conditions: { situation: ["stranded", "lost", "night"], tools: ["nothing"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "open", "mountain", "coast", "urban", "swamp"] },
      priority: "slow", reliability: "high",
      time_estimate: "0 min", yield_estimate: "mental health preservation",
      tags: ["psychology", "wait", "rescue", "mental_health"],
      steps: [
        "Breathe deeply — 4 sec inhale, 4 sec pause, 4 sec exhale",
        "Plan the day: break into segments (food, signals, rest)",
        "Keep a diary: write time, weather, thoughts",
        "Set goals: 'today I'll collect wood for 2 days'",
        "At night don't panic — rest, tomorrow is a new day"
      ],
      warnings: [
        "Panic kills faster than hunger — control breathing",
        "Don't think about bad — focus on actions",
        "Talk to yourself aloud — it calms",
        "Don't sleep all day — activity is important"
      ]
    }
  ]
};
