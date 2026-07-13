// === РАЗДЕЛ: ОГОНЬ ===
const fireData = {
  category: "fire",
  title: "🔥 Огонь",
  description: "Разведение огня в любых условиях",

  questions: [
    {
      id: "location",
      text: "Где вы находитесь?",
      type: "single",
      options: [
        { id: "forest",    label: "🌲 Лес / тайга",      tags: ["forest", "wood", "resin"] },
        { id: "desert",    label: "🏜️ Пустыня / степь",    tags: ["desert", "dry", "sand"] },
        { id: "mountain",  label: "⛰️ Горы",              tags: ["mountain", "wind", "cold"] },
        { id: "coast",     label: "🏖️ Побережье / остров", tags: ["coast", "wet", "driftwood"] },
        { id: "urban",     label: "🏙️ Город / промзона",   tags: ["urban", "debris", "chemicals"] },
        { id: "swamp",     label: "🌿 Болото / тундра",   tags: ["swamp", "peat", "moss", "damp"] }
      ]
    },
    {
      id: "inventory",
      text: "Что есть под рукой?",
      type: "multi",
      options: [
        { id: "matches",   label: "🪄 Спички / зажигалка",           tags: ["fire_source", "easy"] },
        { id: "magnesium", label: "🪨 Огниво / магниевая палочка",   tags: ["spark", "reliable"] },
        { id: "lens",      label: "🔍 Линза / очки / бутылка",       tags: ["solar", "lens"] },
        { id: "battery",   label: "🔋 Батарейка + проволока/фольга", tags: ["electric", "short"] },
        { id: "knife",     label: "🔪 Нож / мультитул",              tags: ["tool", "friction"] },
        { id: "rope",      label: "🪢 Верёвка / паракорд",           tags: ["fiber", "bow_drill"] },
        { id: "plastic",   label: "🧊 Пластик / пакет",              tags: ["lens", "magnifier"] },
        { id: "chemical",  label: "🧪 Химия (KMNO4, глицерин)",     tags: ["chemical", "reliable"] },
        { id: "nothing",   label: "❌ Ничего нет",                   tags: ["primitive", "friction"] }
      ]
    },
    {
      id: "weather",
      text: "Какая погода?",
      type: "single",
      options: [
        { id: "dry",    label: "☀️ Сухо / тепло",      tags: ["dry", "easy"] },
        { id: "damp",   label: "🌫️ Влажно / роса",    tags: ["damp", "tinder_needed"] },
        { id: "rain",   label: "🌧️ Дождь / ливень",   tags: ["wet", "shelter_needed"] },
        { id: "wind",   label: "💨 Сильный ветер",     tags: ["wind", "windbreak"] },
        { id: "snow",   label: "❄️ Снег / мороз",      tags: ["cold", "frozen_fuel"] }
      ]
    },
    {
      id: "urgency",
      text: "Как срочно нужен огонь?",
      type: "single",
      options: [
        { id: "now",  label: "⚠️ Сейчас! Холод / ночь", tags: ["critical", "immediate"] },
        { id: "hour", label: "⏱️ Есть 1-2 часа",       tags: ["urgent", "short"] },
        { id: "day",  label: "🌅 Есть день",           tags: ["planned", "medium"] },
        { id: "days", label: "📅 Нужен на несколько дней", tags: ["long_term", "strategic"] }
      ]
    },
    {
      id: "fuel",
      text: "Что есть для топлива?",
      type: "single",
      options: [
        { id: "wood",      label: "🪵 Дрова / сухие ветки",  tags: ["wood", "dry_fuel"] },
        { id: "wet_wood",  label: "🌧️ Сырые дрова",        tags: ["wet", "needs_drying"] },
        { id: "grass",     label: "🌾 Трава / солома",      tags: ["grass", "quick_burn"] },
        { id: "peat",      label: "🌿 Торф / мох",         tags: ["peat", "slow_burn"] },
        { id: "chemicals", label: "🧪 Химия / пластик",    tags: ["chemical", "toxic"] }
      ]
    }
  ],

  solutions: [
    // ===== БЫСТРЫЕ РЕШЕНИЯ (FAST) =====
    {
      id: "matches_easy",
      title: "🪄 Спички / зажигалка — быстрый огонь",
      description: "Самый простой способ. Соберите сухое трухо (берёста, сухая трава, мох). Сложите в гнездо. Подожгите спичкой. Добавляйте тонкие веточки, затем толстые.",
      conditions: { location: ["forest", "mountain", "coast", "urban", "swamp"], inventory: ["matches"], weather: ["dry", "damp"], urgency: ["now", "hour"], fuel: ["wood", "grass", "peat"] },
      priority: "fast", reliability: "high",
      time_estimate: "2-5 мин", yield_estimate: "огонь с первой попытки",
      tags: ["matches", "easy", "universal"],
      steps: [
        "🌿 Соберите сухое трухо: берёста, сухая трава, мох, пух",
        "✊ Сложите в гнездо размером с кулак",
        "🔥 Подожгите изнутри спичкой или зажигалкой",
        "💨 Дуйте осторожно, добавляя тонкие веточки",
        "🪵 Постепенно увеличивайте толщину дров"
      ],
      warnings: [
        "💧 Храните спички в водонепроницаемом месте",
        "💨 В ветер — защищайте пламя телом",
        "🧊 Не тушите огонь водой в мороз — лёд",
        "🔥 Не используйте все спички сразу — оставьте запас"
      ]
    },
    {
      id: "magnesium_striker",
      title: "🪨 Огниво (магниевая палочка)",
      description: "Соскоблите магниевую стружку на сухое трухо. Ударьте огнивом по стержню — искры подожгут стружку. Работает в любую погоду, даже мокрую.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["magnesium"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["wood", "grass", "peat", "wet_wood"] },
      priority: "fast", reliability: "high",
      time_estimate: "3-7 мин", yield_estimate: "огонь с 1-3 попыток",
      tags: ["magnesium", "reliable", "all_weather"],
      steps: [
        "🪨 Соскоблите магниевую стружку размером с монету на сухое трухо",
        "💥 Ударьте огнивом по ферроцериевому стержню",
        "✨ Искры попадут в стружку — она вспыхнет температурой 3000°C",
        "💨 Быстро подложите трухо и дуйте",
        "🪵 Добавляйте веточки"
      ],
      warnings: [
        "⚡ Стружка горит очень быстро — будьте готовы",
        "🛑 Не держите огниво мокрым — ржавеет",
        "💥 Ударяйте резко, под углом 45°",
        "🔥 Держите подальше от бензина и газов"
      ]
    },
    {
      id: "battery_short",
      title: "🔋 Батарейка + фольга / проволока",
      description: "Соедините + и - батарейки тонкой проволокой, фольгой от жвачки или стальной ватой. Проволока нагреется докрасна и воспламенит трухо. Работает с любой батарейкой.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["battery"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["wood", "grass"] },
      priority: "fast", reliability: "medium",
      time_estimate: "1-3 мин", yield_estimate: "огонь с 1-2 попыток",
      tags: ["battery", "electric", "urban", "quick"],
      steps: [
        "🔋 Найдите батарейку (любая: AA, AAA, телефон, фонарик)",
        "🔗 Сделайте тонкий мостик из фольги/проволоки между + и -",
        "🔥 Мостик нагреется докрасна через 1-3 секунды",
        "🌿 Подложите трухо к горячему мостику",
        "💨 Раздуйте пламя"
      ],
      warnings: [
        "💥 Батарейка может взорваться при коротком замыкании",
        "⛔ Не используйте толстую проволоку — не нагреется",
        "🧊 Фольга от жвачки — идеальный мостик",
        "🔋 Используйте только в крайнем случае — портится батарея"
      ]
    },
    {
      id: "chemical_fire",
      title: "🧪 Химическое зажигание (KMNO4 + глицерин)",
      description: "Смешайте глицерин с перманганатом калия (KMNO4). Через 10-30 секунд начнётся реакция с выделением тепла и пламени. Работает в любую погоду.",
      conditions: { location: ["urban", "forest", "mountain", "coast"], inventory: ["chemical"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["wood", "grass"] },
      priority: "fast", reliability: "high",
      time_estimate: "1-2 мин", yield_estimate: "огонь гарантированно",
      tags: ["chemical", "urban", "first_aid_kit", "reliable"],
      steps: [
        "🧪 Найдите перманганат калия (KMNO4) — фиолетовые кристаллы",
        "💧 Найдите глицерин (в аптечке, косметике)",
        "🧴 Смешайте на трухе: 1 ч.л. KMNO4 + несколько капель глицерина",
        "💨 Через 10-30 секунд начнётся дым, затем пламя",
        "🌿 Подложите трухо и раздуйте"
      ],
      warnings: [
        "🟣 KMNO4 окрашивает всё в фиолетовый — не касайтесь глаз",
        "⚡ Реакция неуправляемая — готовьте трухо заранее",
        "💧 Храните KMNO4 в сухом месте — влага активирует",
        "🔥 При реакции выделяется кислород — не дышите дымом"
      ]
    },
    {
      id: "wet_weather_fire",
      title: "🌧️ Огонь в дождь / мокрую погоду",
      description: "В мокрой погоде ищите сухое топливо под деревьями, в расщелинах скал, под корнями. Используйте смолу, берёзовую кору, сухие иглы ели. Разведите огонь под укрытием.",
      conditions: { location: ["forest", "mountain", "coast", "swamp"], inventory: ["matches", "magnesium", "battery", "nothing", "chemical"], weather: ["rain", "damp", "snow"], urgency: ["now", "hour"], fuel: ["wet_wood"] },
      priority: "fast", reliability: "medium",
      time_estimate: "10-20 мин", yield_estimate: "зависит от навыка",
      tags: ["wet", "rain", "survival", "skill"],
      steps: [
        "🌲 Ищите сухое топливо: берёзовая кора, смола, сухие иглы под елью",
        "🏔️ Соберите трухо под корнями деревьев, в пещерах, расщелинах",
        "🏕️ Разведите огонь под укрытием: под большим деревом, в пещере",
        "🔥 Используйте много труха — мокрое топливо труднее загорается",
        "🌞 Сушите влажные дрова у огня перед использованием"
      ],
      warnings: [
        "🌿 Мокрый мох не горит — ищите берёзовую кору",
        "💨 Не разводите огонь под единственным укрытием — дым",
        "🔥 Смола горит ярко, но быстро — запасайте",
        "🌧️ В дождь собирайте дрова заранее, до намокания"
      ]
    },
    {
      id: "dry_wood_fire",
      title: "🔥 Сушка дров у костра",
      description: "Если дрова сырые — расколите их на мелкие части, снимите кору. Сложите вокруг костра вертикально — сушите 15-30 минут. Сухое дерево горит ярко и бездымно.",
      conditions: { location: ["forest", "mountain", "coast", "swamp"], inventory: ["knife", "matches", "magnesium", "nothing"], weather: ["damp", "rain", "snow"], urgency: ["hour", "day"], fuel: ["wet_wood"] },
      priority: "fast", reliability: "high",
      time_estimate: "15-30 мин", yield_estimate: "сухие дрова для огня",
      tags: ["dry", "wood", "preparation", "skill"],
      steps: [
        "🪓 Расколите дрова на мелкие части (толщина 2-5 см)",
        "🪵 Снимите кору — она задерживает влагу",
        "🔥 Сложите вокруг костра вертикально, торцом к огню",
        "⏳ Сушите 15-30 минут, переворачивая",
        "🔥 Сухое дерево горит ярко, без дыма"
      ],
      warnings: [
        "💨 Не кладите рядом с огнём — загорится",
        "🌧️ В дождь сушите под навесом",
        "🪵 Сырые дрова дымят и плохо горят",
        "🔥 Для быстрой сушки — используйте сухой мох/траву как растопку"
      ]
    },

    // ===== СРЕДНИЕ ПО ВРЕМЕНИ РЕШЕНИЯ (MEDIUM) =====
    {
      id: "solar_lens",
      title: "🔍 Солнечное зажигание (линза)",
      description: "Используйте линзу, очки, дно бутылки с водой, ледяную линзу. Сфокусируйте солнечный луч на трухе. Через 10-60 секунд появится дым. Работает только в сухую погоду.",
      conditions: { location: ["forest", "desert", "mountain", "coast"], inventory: ["lens", "plastic", "nothing"], weather: ["dry"], urgency: ["hour", "day"], fuel: ["wood", "grass"] },
      priority: "medium", reliability: "medium",
      time_estimate: "1-5 мин", yield_estimate: "зависит от солнца",
      tags: ["solar", "lens", "no_fuel"],
      steps: [
        "🔍 Найдите выпуклую линзу: очки, лупа, дно бутылки с водой",
        "☀️ Направьте на солнце, фокусируя луч на трухе",
        "⏳ Держите 10-60 секунд, пока не появится дым",
        "💨 Аккуратно подуйте — появится уголёк",
        "🌿 Положите в гнездо из труха, раздуйте пламя"
      ],
      warnings: [
        "☀️ Работает только при ярком солнце",
        "😎 Не смотрите в фокус — повредите глаза",
        "🧊 Ледяная линза работает, но тает быстро",
        "⏳ В пасмурную погоду бесполезно"
      ]
    },
    {
      id: "bow_drill",
      title: "🪚 Лук и сверло (bow drill)",
      description: "Классический метод трения. Сделайте лук из гибкой ветки и верёвки. Свёрло — сухая прямая ветка. Доска — сухое мягкое дерево. Вращайте сверло луком, давя сверху. Требует практики.",
      conditions: { location: ["forest", "desert", "swamp"], inventory: ["rope", "knife", "nothing"], weather: ["dry", "damp"], urgency: ["hour", "day"], fuel: ["wood"] },
      priority: "medium", reliability: "medium",
      time_estimate: "15-45 мин", yield_estimate: "огонь с 3-10 попыток",
      tags: ["primitive", "friction", "skill", "forest"],
      steps: [
        "🪵 Найдите сухое мягкое дерево: тополь, осина, кедр (доска)",
        "🪚 Сделайте сверло: прямую сухую ветку 20-30 см",
        "🏹 Сделайте лук: гибкая ветка + верёвка/паракорд/шнурок",
        "🔄 Вдавите сверло в доску, вращайте луком",
        "🔥 Соберите тлеющую пыль (уголь) в лист/трухо, раздуйте"
      ],
      warnings: [
        "⏳ Требует практики — тренируйтесь заранее",
        "🌞 Всё должно быть абсолютно сухим",
        "💪 Боль в руке — нормально, это тяжёлый метод",
        "🌿 Используйте смолу/берёсту для растопки"
      ]
    },
    {
      id: "fire_plough",
      title: "🔥 Огневой плуг (fire plough)",
      description: "Проталкивайте острую сухую ветку вдоль борозды в сухой доске. Трение создаёт тлеющую пыль. Соберите её в лист и раздуйте. Проще hand drill, но тоже требует силы.",
      conditions: { location: ["forest", "desert", "coast"], inventory: ["nothing", "knife"], weather: ["dry", "damp"], urgency: ["hour", "day"], fuel: ["wood"] },
      priority: "medium", reliability: "low",
      time_estimate: "10-30 мин", yield_estimate: "огонь с 3-10 попыток",
      tags: ["primitive", "friction", "no_tools", "coast"],
      steps: [
        "🌴 Найдите сухое мягкое дерево (бамбук, тополь, пальма)",
        "🔪 Сделайте борозду в доске ножом или камнем",
        "🌿 Возьмите острую сухую ветку как сверло",
        "💨 Проталкивайте вдоль борозды с силой и скоростью",
        "🔥 Соберите тлеющую пыль, раздуйте"
      ],
      warnings: [
        "💪 Требует сильного давления — устаете быстро",
        "📏 Борозда должна быть прямой и глубокой",
        "🌧️ Не работает на влажном дереве",
        "🔄 Тренируйтесь заранее — метод сложный"
      ]
    },

    // ===== МЕДЛЕННЫЕ РЕШЕНИЯ (SLOW) =====
    {
      id: "hand_drill",
      title: "🖐️ Ручное сверло (hand drill)",
      description: "Простейший метод трения: вращайте сухую прямую ветку ладонями, вдавливая в сухую доску. Требует огромной скорости и силы. Подходит только для лёгких пород дерева.",
      conditions: { location: ["forest", "desert"], inventory: ["nothing", "knife"], weather: ["dry"], urgency: ["day"], fuel: ["wood"] },
      priority: "slow", reliability: "low",
      time_estimate: "20-60 мин", yield_estimate: "огонь с 5-20 попыток",
      tags: ["primitive", "friction", "no_tools", "hard"],
      steps: [
        "🌳 Найдите сухое мягкое дерево: тополь, ива, кедр",
        "🌿 Сделайте сверло: прямую тонкую ветку 40-50 см",
        "🪵 Доска: плоский кусок того же дерева",
        "🔄 Вращайте сверло ладонями как палочки для еды",
        "🔥 Соберите уголь, раздуйте"
      ],
      warnings: [
        "💪 Очень сложно — требует идеальной техники",
        "🩸 Ладони могут натереться до крови",
        "🪵 Не работает на твёрдых породах (дуб, берёза)",
        "⏳ Тренируйтесь месяцами — метод для профессионалов"
      ]
    },
    {
      id: "ice_lens",
      title: "🧊 Ледяная линза",
      description: "В мороз сделайте линзу из чистого льда. Отполируйте руками или тёплой водой до прозрачности. Фокусируйте солнечный луч на трухо. Работает, но линза тает быстро.",
      conditions: { location: ["mountain", "forest"], inventory: ["nothing", "knife"], weather: ["snow"], urgency: ["hour", "day"], fuel: ["wood"] },
      priority: "slow", reliability: "low",
      time_estimate: "20-40 мин", yield_estimate: "зависит от солнца и льда",
      tags: ["ice", "solar", "winter", "primitive"],
      steps: [
        "🧊 Найдите чистый лёд (речной, озёрный — не снег)",
        "🔍 Сформируйте линзу толщиной 5-7 см в центре",
        "🪞 Отполируйте руками или тёплой водой до прозрачности",
        "☀️ Фокусируйте солнечный луч на трухо",
        "⏳ Работайте быстро — линза тает"
      ],
      warnings: [
        "☀️ Только при ярком солнце и морозе",
        "⏳ Линза тает за 5-15 минут",
        "📏 Толщина в центре должна быть 5-7 см",
        "🧊 Используйте прозрачный лёд — мутный не работает"
      ]
    },
    {
      id: "fire_maintain",
      title: "🔥 Как сохранить огонь надолго",
      description: "Для поддержания огня всю ночь: сложите дрова в виде 'шалаша' (типи). Используйте толстые брёвна (горят долго). Добавляйте сухой торф/мох. Ночью угли тлеют под золой — утром раздуйте.",
      conditions: { location: ["forest", "mountain", "coast", "swamp"], inventory: ["knife", "matches", "magnesium"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["day", "days"], fuel: ["wood", "peat"] },
      priority: "slow", reliability: "high",
      time_estimate: "15-30 мин настройка", yield_estimate: "огонь на 6-12 часов",
      tags: ["maintain", "night", "long_term", "skill"],
      steps: [
        "🏕️ Сложите дрова 'шалашом' (типи) — конус из поленьев",
        "🪵 Используйте толстые брёвна — они горят дольше",
        "🌿 Добавьте торф/сухой мох — тлеет долго",
        "🔥 Ночью угли тлеют под слоем золы",
        "💨 Утром раздуйте — подбросьте тонкие ветки",
        "🔄 Для длительного огня — меняйте дрова по мере сгорания"
      ],
      warnings: [
        "💨 Ветер может раздуть огонь — оградите камнями",
        "🌧️ Дождь зальёт — накройте навесом",
        "🔥 Не оставляйте без присмотра — лесной пожар",
        "🧊 На морозе огонь горит хуже — используйте больше дров"
      ]
    },
    {
      id: "fire_without_tinder",
      title: "🔥 Огонь без трута (экстренно)",
      description: "Если нет трута — используйте сухой мох, лишайник, старую одежду (хлопок), вату, пух птиц. В городе — газеты, картон, мелкие щепки. Даже сухие листья дадут дым.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["nothing", "knife", "matches", "magnesium", "battery"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["grass"] },
      priority: "fast", reliability: "medium",
      time_estimate: "5-15 мин", yield_estimate: "огонь для розжига",
      tags: ["tinder", "emergency", "survival", "improvised"],
      steps: [
        "🌿 Используйте сухой мох, лишайник, сухую траву",
        "👕 Старая хлопковая одежда, вата — отличный трут",
        "🪶 Пух птиц, сухой пух растений",
        "📰 В городе — газеты, картон, мелкие щепки",
        "🔥 Соберите в гнездо, подожгите, раздуйте"
      ],
      warnings: [
        "🧪 Синтетика плавится — не используйте",
        "🌧️ Влажный трут не горит — ищите сухой",
        "🔥 Трут должен быть очень сухим и пушистым",
        "💨 Для ветра — защищайте огонь рукой/телом"
      ]
    }
  ]
};