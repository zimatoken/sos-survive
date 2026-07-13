const radioData = {
  category: "radio",
  title: "📻 Связь",
  description: "Способы связи и подачи сигналов в экстренной ситуации",

  questions: [
    {
      id: "device",
      text: "Что есть для связи?",
      type: "single",
      options: [
        { id: "radio",     label: "📻 Рация / Walkie-talkie",  tags: ["radio", "channel"] },
        { id: "phone",     label: "📱 Телефон (сеть / без сети)", tags: ["phone", "emergency"] },
        { id: "satellite", label: "🛰️ Спутниковый телефон",    tags: ["satellite", "global"] },
        { id: "nothing",   label: "❌ Ничего нет",              tags: ["primitive", "signals"] }
      ]
    },
    {
      id: "situation",
      text: "Какая ситуация?",
      type: "single",
      options: [
        { id: "need_help", label: "🆘 Нужна помощь срочно",  tags: ["emergency", "distress"] },
        { id: "lost",      label: "🗺️ Заблудился / потерялся", tags: ["lost", "orientation"] },
        { id: "waiting",   label: "⏳ Жду спасателей",        tags: ["wait", "position"] }
      ]
    },
    {
      id: "terrain",
      text: "Где находитесь?",
      type: "single",
      options: [
        { id: "open",      label: "🏔️ Открытое место / вершина", tags: ["open", "visibility"] },
        { id: "forest",    label: "🌲 Лес / равнина",           tags: ["forest", "low_signal"] },
        { id: "valley",    label: "🏞️ Долина / овраг",         tags: ["valley", "poor_signal"] }
      ]
    },
    {
      id: "time",
      text: "Время суток?",
      type: "single",
      options: [
        { id: "day",       label: "☀️ День",  tags: ["day", "visual"] },
        { id: "night",     label: "🌙 Ночь",  tags: ["night", "light", "sound"] },
        { id: "fog",       label: "🌫️ Туман", tags: ["fog", "limited", "sound"] }
      ]
    }
  ],

  solutions: [
    {
      id: "radio_use",
      title: "Использование рации",
      description: "Настройка рации: выбери канал 16 (международный) или 9. Передавай: 'Mayday, Mayday, это [твоё имя], прошу помощи'. Повторяй каждые 5 минут. В горах ищи возвышенность.",
      conditions: { device: ["radio"], situation: ["need_help", "lost", "waiting"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      priority: "fast", reliability: "high",
      time_estimate: "1-2 мин", yield_estimate: "связь с поисковиками",
      tags: ["radio", "emergency", "mayday"],
      steps: [
        "Включи рацию, выбери канал 16 (международный) или 9",
        "Нажми кнопку передачи, скажи: 'Mayday, Mayday, это [твоё имя]'",
        "Сообщи координаты, описание местности",
        "Отпусти кнопку, слушай ответ",
        "Повторяй каждые 5 минут",
        "В горах — ищи открытое место, сигнал лучше"
      ],
      warnings: [
        "Не используй рацию без нужды — забиваешь эфир",
        "Батарейки садятся — экономь заряд",
        "В горах сигнал хуже — ищи возвышенность"
      ]
    },
    {
      id: "emergency_call",
      title: "Звонок в экстренные службы",
      description: "Если есть телефон: 112 (Европа, Россия), 911 (США), 999 (Великобритания). Даже без SIM-карты можно позвонить. Сообщи своё местоположение, опиши ситуацию.",
      conditions: { device: ["phone"], situation: ["need_help", "lost"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      priority: "fast", reliability: "high",
      time_estimate: "1 мин", yield_estimate: "вызов помощи",
      tags: ["phone", "emergency", "call"],
      steps: [
        "Набери 112 (Россия/Европа), 911 (США), 999 (Великобритания)",
        "Скажи: 'Я в опасности, нужна помощь'",
        "Сообщи местоположение (ориентиры, GPS)",
        "Не вешай трубку, пока не скажут",
        "Если сигнал слабый — отправь SMS с координатами"
      ],
      warnings: [
        "Даже без SIM-карты 112 работает",
        "Экономь заряд батареи",
        "В горах сигнал хуже — ищи открытое место"
      ]
    },
    {
      id: "signal_mirror",
      title: "Сигнал зеркалом",
      description: "Днём используй зеркало или блестящий предмет. Направь отражение солнца на самолёт/вертолёт. 'Зайчик' виден на расстоянии до 50 км. 3 короткие вспышки = сигнал бедствия.",
      conditions: { device: ["nothing"], situation: ["need_help", "waiting"], terrain: ["open", "forest"], time: ["day"] },
      priority: "fast", reliability: "medium",
      time_estimate: "5-10 мин", yield_estimate: "виден с воздуха",
      tags: ["signal", "mirror", "day"],
      steps: [
        "Найди зеркало, блестящую крышку, мобильник",
        "Направь отражение солнца на самолёт/вертолёт",
        "3 короткие вспышки = сигнал бедствия",
        "Не свети в глаза пилоту — ослепишь",
        "Повторяй каждые 5-10 минут"
      ],
      warnings: [
        "Не свети в глаза пилоту",
        "Работает только в ясную погоду",
        "Зеркало можно использовать и ночью (отражение костра)"
      ]
    },
    {
      id: "whistle_sound",
      title: "Звуковой сигнал",
      description: "3 коротких звука = международный сигнал бедствия. Используй свисток, стук камней, удары палкой о дерево. Слышно дальше, чем крик. В лесу звук распространяется хуже — ищи поляну.",
      conditions: { device: ["nothing"], situation: ["need_help", "waiting", "lost"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      priority: "fast", reliability: "medium",
      time_estimate: "1-2 мин", yield_estimate: "привлечение внимания",
      tags: ["sound", "whistle", "signal"],
      steps: [
        "Используй свисток — 3 коротких звука, пауза, повтори",
        "Или стучи камнями, палкой о дерево: 3 удара, пауза, 3 удара",
        "В лесу звук распространяется хуже — ищи поляну",
        "В тумане звук работает лучше, чем визуальные сигналы",
        "Повторяй каждые 5-10 минут"
      ],
      warnings: [
        "Звук может быть не слышен из-за ветра",
        "Не трать все силы на крики — голос срывается",
        "Свисток слышен дальше, чем крик"
      ]
    },
    {
      id: "fire_signal",
      title: "Огненные сигналы",
      description: "Ночью огонь виден за 10-15 км. Разведи 3 костра в ряд или треугольником (международный сигнал). Днём добавь влажные ветки — густой дым будет виден издалека.",
      conditions: { device: ["nothing"], situation: ["need_help", "waiting"], terrain: ["open", "forest"], time: ["night", "day"] },
      priority: "medium", reliability: "high",
      time_estimate: "15-30 мин", yield_estimate: "виден ночью на 10-15 км",
      tags: ["fire", "smoke", "night", "signal"],
      steps: [
        "Разведи 3 костра в ряд или треугольником",
        "Ночью огонь виден за 10-15 км",
        "Днём добавь влажные ветки — густой дым",
        "3 огня = международный сигнал бедствия",
        "Поддерживай огонь до прибытия помощи"
      ],
      warnings: [
        "Не разводи огонь в лесу в сухую погоду — пожар",
        "Дым может быть токсичным, если горят химикаты",
        "Ветер разносит дым — стой с подветренной стороны"
      ]
    }
  ]
};
