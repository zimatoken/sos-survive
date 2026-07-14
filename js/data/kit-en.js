// === SECTION: SURVIVAL KIT (PREPARATION) ===
const kitData = {
  category: "kit",
  title: "🎒 Survival Kit",
  description: "What to take on a hike, trip or emergency situation",

  questions: [
    {
      id: "urgency",
      text: "When do you need to pack?",
      type: "single",
      options: [
        { id: "now",     label: "⚡ Urgent! Right now", tags: ["urgent", "quick"] },
        { id: "week",    label: "📅 Have a week to prepare", tags: ["planned", "detailed"] },
        { id: "future",  label: "🌍 For the future — want to be ready", tags: ["future", "complete"] }
      ]
    },
    {
      id: "terrain",
      text: "Where are you going?",
      type: "single",
      options: [
        { id: "forest",   label: "🌲 Forest / mountains / taiga", tags: ["forest", "wild"] },
        { id: "desert",   label: "🏜️ Desert / steppe", tags: ["desert", "dry"] },
        { id: "coast",    label: "🏖️ Coast / river", tags: ["coast", "water"] },
        { id: "urban",    label: "🏙️ City / travel", tags: ["urban", "travel"] }
      ]
    },
    {
      id: "duration",
      text: "For how long?",
      type: "single",
      options: [
        { id: "short",   label: "⏱️ 1-2 days", tags: ["short", "light"] },
        { id: "medium",  label: "📆 3-7 days", tags: ["medium", "balanced"] },
        { id: "long",    label: "📅 2+ weeks / long-term", tags: ["long", "complete"] }
      ]
    }
  ],

  solutions: [
    {
      id: "forest_short",
      title: "🌲 Forest 1-2 days (basic kit)",
      description: "Minimum kit for a short forest trip. Everything fits in a small backpack. Main items: water, food, fire, and protection from cold.",
      conditions: { urgency: ["now", "week"], terrain: ["forest"], duration: ["short"] },
      priority: "fast", reliability: "high",
      time_estimate: "Pack in 20 min", yield_estimate: "weight ~3-5 kg",
      tags: ["checklist", "forest", "short", "basic"],
      steps: [
        "☐ 💧 Water — 2 liters (minimum 1 L per day)",
        "☐ 🍖 Food — ready-to-eat meals, nuts, chocolate, sandwiches",
        "☐ 🔪 Knife / multitool",
        "☐ 🔥 Matches in waterproof container + lighter",
        "☐ 🔦 Flashlight + spare batteries",
        "☐ 🩹 First aid kit: band-aid, iodine, bandage, painkiller",
        "☐ 🧥 Warm clothing (even in summer — cold at night)",
        "☐ 📱 Phone + powerbank",
        "☐ 🪢 Rope 5 m",
        "☐ 🧭 Compass or map app",
        "☐ 📢 Whistle (3 short = SOS)"
      ],
      warnings: [
        "Charge your phone in advance!",
        "Tell someone your route",
        "Easy to get lost in forest — keep compass handy",
        "Don't go alone if possible"
      ]
    },
    {
      id: "forest_medium",
      title: "🌲 Forest 3-7 days (full kit)",
      description: "For multi-day forest hike. Need more food, fuel and gear. Add tent, sleeping bag, cooking pot.",
      conditions: { urgency: ["week", "future"], terrain: ["forest"], duration: ["medium"] },
      priority: "medium", reliability: "high",
      time_estimate: "Pack in 1-2 hours", yield_estimate: "weight ~10-15 kg",
      tags: ["checklist", "forest", "medium", "camping"],
      steps: [
        "☐ 💧 Water — 5-10 liters (or filter + tablets)",
        "☐ 🍖 Food — dry rations for all days + grains + canned meat",
        "☐ 🔪 Knife / multitool + axe or saw",
        "☐ 🔥 Matches + lighter + ferro rod (spare)",
        "☐ 🔦 Flashlight + headlamp + batteries",
        "☐ 🩹 Full first aid kit: bandages, tourniquet, painkillers, antihistamine",
        "☐ 🏕️ Tent + sleeping bag + sleeping pad",
        "☐ 🍲 Cooking pot + mug + spoon",
        "☐ 🧥 Clothing: thermal underwear, fleece, raincoat, spare socks",
        "☐ 📱 Phone + powerbank (2 pcs)",
        "☐ 🪢 Rope 15-20 m",
        "☐ 🧭 Compass + terrain map",
        "☐ 📢 Whistle + signal mirror",
        "☐ 🧴 Insect repellent + sunscreen"
      ],
      warnings: [
        "Check gear before the hike",
        "Download offline maps",
        "Take spare batteries",
        "Be ready for rain and cold"
      ]
    },
    {
      id: "urban_short",
      title: "🏙️ City / travel 1-2 days",
      description: "Kit for a short city trip or business travel. Minimum items, but everything needed for comfort and safety.",
      conditions: { urgency: ["now", "week"], terrain: ["urban"], duration: ["short"] },
      priority: "fast", reliability: "high",
      time_estimate: "Pack in 10 min", yield_estimate: "weight ~2-3 kg",
      tags: ["checklist", "urban", "short", "travel"],
      steps: [
        "☐ 💧 Water — 0.5 L bottle",
        "☐ 🍖 Food — snacks (bars, nuts, fruit)",
        "☐ 💳 Documents + cash + bank card",
        "☐ 📱 Phone + charger + powerbank",
        "☐ 🩹 Minimum first aid kit: band-aid, painkiller",
        "☐ 🧥 Weather-appropriate clothing + umbrella",
        "☐ 🔦 Flashlight (on phone or separate)",
        "☐ 🗺️ City map (offline) or app"
      ],
      warnings: [
        "Tell someone where you are",
        "Don't leave belongings unattended",
        "Check phone charge"
      ]
    },
    {
      id: "desert_short",
      title: "🏜️ Desert / steppe 1-2 days",
      description: "In the desert the main things are water and sun protection. Take minimum 3-4 liters of water per day. Protect head, eyes, skin.",
      conditions: { urgency: ["now", "week"], terrain: ["desert"], duration: ["short"] },
      priority: "fast", reliability: "high",
      time_estimate: "Pack in 20 min", yield_estimate: "weight ~5-7 kg",
      tags: ["checklist", "desert", "short", "survival"],
      steps: [
        "☐ 💧 Water — minimum 4 liters per day",
        "☐ 🍖 Food — dry rations, nuts, chocolate (doesn't melt!)",
        "☐ 👕 Clothing: light, covering, breathable",
        "☐ 🧢 Hat + sunglasses",
        "☐ 🧴 Sunscreen SPF 50+",
        "☐ 🔪 Knife / multitool",
        "☐ 🔥 Matches + lighter",
        "☐ 📱 Phone + powerbank",
        "☐ 🧭 Compass + map"
      ],
      warnings: [
        "Easy to dehydrate in desert — drink often",
        "Move morning and evening, rest in shade at noon",
        "Sand burns — wear footwear",
        "Can be cold at night"
      ]
    },
    {
      id: "coast_short",
      title: "🏖️ Coast / river 1-2 days",
      description: "Kit for water-side recreation. In addition to usual items — swimwear, sun protection, insect repellent.",
      conditions: { urgency: ["now", "week"], terrain: ["coast"], duration: ["short"] },
      priority: "fast", reliability: "high",
      time_estimate: "Pack in 15 min", yield_estimate: "weight ~3-5 kg",
      tags: ["checklist", "coast", "short", "beach"],
      steps: [
        "☐ 💧 Water — 1.5-2 liters",
        "☐ 🍖 Food — snacks, fruit, sandwiches",
        "☐ 🩱 Swimsuit + towel",
        "☐ 🧴 Sunscreen SPF 30+",
        "☐ 🧢 Hat + sunglasses",
        "☐ 🩹 Minimum first aid kit",
        "☐ 📱 Phone + powerbank",
        "☐ 🧴 Insect repellent"
      ],
      warnings: [
        "Don't swim far without preparation",
        "Watch children near water",
        "Drink water regularly — dehydration in sun"
      ]
    },
    {
      id: "complete_kit",
      title: "🎒 Complete survival kit (for the future)",
      description: "Basic equipment for any travel. Suitable for long hikes, expeditions, or just storing at home for emergencies.",
      conditions: { urgency: ["future"], terrain: ["forest", "desert", "coast", "urban"], duration: ["long"] },
      priority: "slow", reliability: "high",
      time_estimate: "Pack in 1 day", yield_estimate: "weight ~15-20 kg",
      tags: ["checklist", "complete", "survival", "long_term"],
      steps: [
        "☐ 💧 Water — 5-10 liters or filter + tablets",
        "☐ 🍖 Food — dry rations + grains + canned meat + hardtack",
        "☐ 🔪 Knife + multitool + sharpener",
        "☐ 🔥 Matches + lighter + ferro rod + dry fuel",
        "☐ 🔦 Flashlight + headlamp + batteries + candles",
        "☐ 🩹 Full first aid kit: bandages, tourniquet, antiseptics, medicines",
        "☐ 🏕️ Tent + sleeping bag + sleeping pad + tarp",
        "☐ 🍲 Cooking pot + mug + canteen",
        "☐ 🧥 All-season clothing: thermal underwear, fleece, raincoat",
        "☐ 📱 Phone + powerbank 20000 mAh + solar panel",
        "☐ 🪢 Rope 20-30 m + paracord 10 m",
        "☐ 🧭 Compass + terrain map + GPS navigator",
        "☐ 📢 Whistle + mirror + signal flares",
        "☐ 🧴 Repellent + sunscreen + hygiene items",
        "☐ 🔧 Repair kit: wire, electrical tape, duct tape",
        "☐ 📖 Instructions: how to use everything"
      ],
      warnings: [
        "Regularly check expiration dates of food and medicine",
        "Update kit by season",
        "Store in dry accessible place",
        "Know how to use all gear"
      ]
    }
  ]
};
