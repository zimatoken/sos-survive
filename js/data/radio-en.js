// === SECTION: RADIO / COMMUNICATION (ENGLISH) ===
const radioData = {
  category: "radio",
  title: "📻 Communication",
  description: "Communication methods and signaling in emergency situations",

  questions: [
    {
      id: "device",
      text: "What do you have for communication?",
      type: "single",
      options: [
        { id: "radio",     label: "📻 Radio / Walkie-talkie",  tags: ["radio", "channel"] },
        { id: "phone",     label: "📱 Phone (with / without network)", tags: ["phone", "emergency"] },
        { id: "satellite", label: "🛰️ Satellite phone",    tags: ["satellite", "global"] },
        { id: "nothing",   label: "❌ Nothing",              tags: ["primitive", "signals"] }
      ]
    },
    {
      id: "situation",
      text: "What's the situation?",
      type: "single",
      options: [
        { id: "need_help", label: "🆘 Need help urgently",  tags: ["emergency", "distress"] },
        { id: "lost",      label: "🗺️ Lost", tags: ["lost", "orientation"] },
        { id: "waiting",   label: "⏳ Waiting for rescuers",        tags: ["wait", "position"] }
      ]
    },
    {
      id: "terrain",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "open",      label: "🏔️ Open area / summit", tags: ["open", "visibility"] },
        { id: "forest",    label: "🌲 Forest / plain",           tags: ["forest", "low_signal"] },
        { id: "valley",    label: "🏞️ Valley / ravine",         tags: ["valley", "poor_signal"] }
      ]
    },
    {
      id: "time",
      text: "Time of day?",
      type: "single",
      options: [
        { id: "day",       label: "☀️ Day",  tags: ["day", "visual"] },
        { id: "night",     label: "🌙 Night",  tags: ["night", "light", "sound"] },
        { id: "fog",       label: "🌫️ Fog", tags: ["fog", "limited", "sound"] }
      ]
    }
  ],

  solutions: [
    {
      id: "radio_use",
      title: "📻 Using a radio",
      description: "Radio setup: select channel 16 (international) or 9. Transmit: 'Mayday, Mayday, this is [your name], requesting assistance'. Repeat every 5 minutes. In mountains look for high ground.",
      conditions: { device: ["radio"], situation: ["need_help", "lost", "waiting"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      priority: "fast", reliability: "high",
      time_estimate: "1-2 min", yield_estimate: "contact with searchers",
      tags: ["radio", "emergency", "mayday"],
      steps: [
        "Turn on radio, select channel 16 (international) or 9",
        "Press transmit button, say: 'Mayday, Mayday, this is [your name]'",
        "Report coordinates, terrain description",
        "Release button, listen for response",
        "Repeat every 5 minutes",
        "In mountains — find open area, signal is better"
      ],
      warnings: [
        "Don't use radio unnecessarily — clogs the airwaves",
        "Batteries drain — conserve charge",
        "In mountains signal is worse — find high ground"
      ]
    },
    {
      id: "emergency_call",
      title: "📱 Emergency call",
      description: "If you have a phone: 112 (Europe, Russia), 911 (USA), 999 (UK). You can call even without a SIM card. Report your location, describe the situation.",
      conditions: { device: ["phone"], situation: ["need_help", "lost"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      priority: "fast", reliability: "high",
      time_estimate: "1 min", yield_estimate: "call for help",
      tags: ["phone", "emergency", "call"],
      steps: [
        "Dial 112 (Russia/Europe), 911 (USA), 999 (UK)",
        "Say: 'I'm in danger, need help'",
        "Report location (landmarks, GPS)",
        "Don't hang up until told to",
        "If signal is weak — send SMS with coordinates"
      ],
      warnings: [
        "112 works even without a SIM card",
        "Save battery charge",
        "In mountains signal is worse — find open area"
      ]
    },
    {
      id: "signal_mirror",
      title: "🪞 Mirror signal",
      description: "During the day use a mirror or shiny object. Direct sunlight reflection toward aircraft. The 'flash' is visible up to 50 km. 3 short flashes = distress signal.",
      conditions: { device: ["nothing"], situation: ["need_help", "waiting"], terrain: ["open", "forest"], time: ["day"] },
      priority: "fast", reliability: "medium",
      time_estimate: "5-10 min", yield_estimate: "visible from the air",
      tags: ["signal", "mirror", "day"],
      steps: [
        "Find mirror, shiny lid, phone screen",
        "Direct sunlight reflection toward aircraft",
        "3 short flashes = distress signal",
        "Don't shine in pilot's eyes — blinds them",
        "Repeat every 5-10 minutes"
      ],
      warnings: [
        "Don't shine in pilot's eyes",
        "Only works in clear weather",
        "Mirror can also be used at night (reflecting firelight)"
      ]
    },
    {
      id: "whistle_sound",
      title: "🔊 Sound signal",
      description: "3 short sounds = international distress signal. Use whistle, stone clacking, hitting a tree with a stick. Carries further than shouting. In forest sound travels poorly — find a clearing.",
      conditions: { device: ["nothing"], situation: ["need_help", "waiting", "lost"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      priority: "fast", reliability: "medium",
      time_estimate: "1-2 min", yield_estimate: "attract attention",
      tags: ["sound", "whistle", "signal"],
      steps: [
        "Use whistle — 3 short sounds, pause, repeat",
        "Or strike stones, hit tree with stick: 3 hits, pause, 3 hits",
        "In forest sound travels poorly — find a clearing",
        "In fog sound works better than visual signals",
        "Repeat every 5-10 minutes"
      ],
      warnings: [
        "Sound may not be heard due to wind",
        "Don't exhaust yourself shouting — voice breaks",
        "Whistle carries further than shouting"
      ]
    },
    {
      id: "fire_signal",
      title: "🔥 Fire signals",
      description: "At night fire is visible 10-15 km away. Make 3 fires in a row or triangle (international signal). During the day add wet branches — thick smoke visible from afar.",
      conditions: { device: ["nothing"], situation: ["need_help", "waiting"], terrain: ["open", "forest"], time: ["night", "day"] },
      priority: "medium", reliability: "high",
      time_estimate: "15-30 min", yield_estimate: "visible at night 10-15 km",
      tags: ["fire", "smoke", "night", "signal"],
      steps: [
        "Make 3 fires in a row or triangle",
        "At night fire visible 10-15 km away",
        "During the day add wet branches — thick smoke",
        "3 fires = international distress signal",
        "Maintain fire until help arrives"
      ],
      warnings: [
        "Don't make fire in forest in dry weather — fire hazard",
        "Smoke can be toxic if chemicals are burning",
        "Wind carries smoke — stand leeward"
      ]
    }
  ]
};
