// === ДВИЖОК ФИЛЬТРАЦИИ РЕШЕНИЙ ===
// Поддержка мультиязычности — выбирает данные по текущему языку

// Проверяем, что все данные загружены (русские версии)
console.log("🔍 Проверка данных (RU):");
console.log("  waterData:", typeof waterData !== 'undefined' ? '✅' : '❌');
console.log("  fireData:", typeof fireData !== 'undefined' ? '✅' : '❌');
console.log("  shelterData:", typeof shelterData !== 'undefined' ? '✅' : '❌');
console.log("  foodData:", typeof foodData !== 'undefined' ? '✅' : '❌');
console.log("  medicineData:", typeof medicineData !== 'undefined' ? '✅' : '❌');
console.log("  navigationData:", typeof navigationData !== 'undefined' ? '✅' : '❌');
console.log("  radioData:", typeof radioData !== 'undefined' ? '✅' : '❌');
console.log("  kitData:", typeof kitData !== 'undefined' ? '✅' : '❌');

console.log("🔍 Проверка данных (EN):");
console.log("  waterDataEn:", typeof waterDataEn !== 'undefined' ? '✅' : '❌');
console.log("  fireDataEn:", typeof fireDataEn !== 'undefined' ? '✅' : '❌');
console.log("  shelterDataEn:", typeof shelterDataEn !== 'undefined' ? '✅' : '❌');
console.log("  foodDataEn:", typeof foodDataEn !== 'undefined' ? '✅' : '❌');
console.log("  medicineDataEn:", typeof medicineDataEn !== 'undefined' ? '✅' : '❌');
console.log("  navigationDataEn:", typeof navigationDataEn !== 'undefined' ? '✅' : '❌');
console.log("  radioDataEn:", typeof radioDataEn !== 'undefined' ? '✅' : '❌');
console.log("  kitDataEn:", typeof kitDataEn !== 'undefined' ? '✅' : '❌');

// Регистр всех данных (русские и английские версии)
const dataRegistry = {
  ru: {
    water: waterData,
    fire: fireData,
    shelter: shelterData,
    food: foodData,
    medicine: medicineData,
    navigation: navigationData,
    radio: radioData,
    kit: kitData
  },
  en: {}
};

// Заполняем английский регистр
if (typeof waterDataEn !== 'undefined') dataRegistry.en.water = waterDataEn;
if (typeof fireDataEn !== 'undefined') dataRegistry.en.fire = fireDataEn;
if (typeof shelterDataEn !== 'undefined') dataRegistry.en.shelter = shelterDataEn;
if (typeof foodDataEn !== 'undefined') dataRegistry.en.food = foodDataEn;
if (typeof medicineDataEn !== 'undefined') dataRegistry.en.medicine = medicineDataEn;
if (typeof navigationDataEn !== 'undefined') dataRegistry.en.navigation = navigationDataEn;
if (typeof radioDataEn !== 'undefined') dataRegistry.en.radio = radioDataEn;
if (typeof kitDataEn !== 'undefined') dataRegistry.en.kit = kitDataEn;

function getCurrentLang() {
  return typeof currentLang !== 'undefined' ? currentLang : 'ru';
}

function getCategoryData(category) {
  const lang = getCurrentLang();
  const langData = dataRegistry[lang] || dataRegistry.ru;
  const data = langData[category];
  
  if (!data) {
    console.error(`❌ Категория не найдена: ${category} (язык: ${lang})`);
    if (lang !== 'ru' && dataRegistry.ru[category]) {
      console.log(`🔄 Используем русскую версию как fallback для ${category}`);
      return dataRegistry.ru[category];
    }
    return null;
  }
  
  console.log(`✅ Загружена категория: ${category} (язык: ${lang})`);
  console.log(`   Вопросов: ${data.questions?.length || 0}, решений: ${data.solutions?.length || 0}`);
  return data;
}

/**
 * Фильтрация решений по ответам пользователя
 * Улучшена: учитывает основной симптом при Fallback
 */
function filterSolutions(data, answers) {
  if (!data || !data.solutions) {
    console.warn("⚠️ Нет данных или решений для фильтрации");
    return [];
  }

  if (!answers || Object.keys(answers).length === 0) {
    console.warn("⚠️ Нет ответов, возвращаем первые 5 решений");
    return data.solutions.slice(0, 5);
  }

  // --- ОСНОВНАЯ ФИЛЬТРАЦИЯ ---
  let matched = data.solutions.filter(sol => {
    for (let [key, allowedValues] of Object.entries(sol.conditions)) {
      const userAnswer = answers[key];
      if (!userAnswer || userAnswer.length === 0) continue;
      const hasMatch = userAnswer.some(val => allowedValues.includes(val));
      if (!hasMatch) return false;
    }
    return true;
  });

  // --- FALLBACK: если нет точных совпадений ---
  if (matched.length === 0) {
    console.log("🔄 Нет точных совпадений, ищем ближайшие по симптомам");
    
    // 1. Определяем основной симптом (для медицины)
    const mainSymptom = answers.symptom ? answers.symptom[0] : null;
    
    // 2. Собираем все теги из ответов
    const allTags = Object.values(answers).flat();
    
    matched = data.solutions.filter(sol => {
      if (!sol.tags) return false;
      
      // 2.1 Проверяем симптом (для медицины)
      if (mainSymptom) {
        // Если у решения есть symptom в условиях — проверяем соответствие
        if (sol.conditions && sol.conditions.symptom) {
          const solSymptoms = sol.conditions.symptom;
          if (!solSymptoms.includes(mainSymptom)) {
            // Если симптом не совпадает — пропускаем
            return false;
          }
        } else {
          // Если у решения нет symptom в условиях, но оно помечено как универсальное
          // и подходит по тегам — пропускаем только если это действительно универсальное
          // (для медицины — только emergency и universal)
          const isMedicalUniversal = sol.tags.includes("emergency") || 
                                     sol.tags.includes("first_aid");
          if (!isMedicalUniversal) {
            return false;
          }
        }
      }
      
      // 2.2 Проверяем пересечение тегов
      const hasTagMatch = allTags.some(tag => sol.tags.includes(tag));
      
      // 2.3 Проверяем, помечено ли как универсальное
      const isUniversal = sol.tags.includes("universal") || 
                         sol.tags.includes("primitive") ||
                         sol.tags.includes("search") ||
                         sol.tags.includes("basic") ||
                         sol.tags.includes("emergency") ||
                         sol.tags.includes("first_aid") ||
                         sol.tags.includes("checklist");
      
      return hasTagMatch || isUniversal;
    });
    
    // 3. Если всё ещё ничего не найдено — возвращаем первые 3 решения как экстренные
    if (matched.length === 0) {
      console.warn("⚠️ Не найдено подходящих решений, показываем экстренные");
      matched = data.solutions.filter(sol => 
        sol.tags && (sol.tags.includes("emergency") || sol.tags.includes("first_aid"))
      );
      if (matched.length === 0) {
        matched = data.solutions.slice(0, 3);
      }
    }
  }

  // --- СОРТИРОВКА ---
  const prioOrder = { fast: 3, medium: 2, slow: 1 };
  const relOrder = { high: 3, medium: 2, low: 1 };

  matched.sort((a, b) => {
    const prioA = prioOrder[a.priority] || 1;
    const prioB = prioOrder[b.priority] || 1;
    if (prioB !== prioA) {
      return prioB - prioA;
    }
    const relA = relOrder[a.reliability] || 1;
    const relB = relOrder[b.reliability] || 1;
    return relB - relA;
  });

  const result = matched.slice(0, 5);
  console.log(`✅ Найдено решений: ${matched.length}, показано: ${result.length}`);
  return result;
}

function getSolutionById(data, id) {
  if (!data || !data.solutions) {
    console.warn("⚠️ Нет данных для поиска решения");
    return null;
  }
  const solution = data.solutions.find(s => s.id === id);
  if (!solution) {
    console.warn(`⚠️ Решение не найдено: ${id}`);
  }
  return solution || null;
}

function refreshDataRegistry() {
  const lang = getCurrentLang();
  console.log(`🔄 Обновление данных для языка: ${lang}`);
  const langData = dataRegistry[lang] || dataRegistry.ru;
  const categories = Object.keys(langData);
  console.log(`📋 Доступно категорий (${lang}): ${categories.join(", ")}`);
}

// Экспорт
window.getCategoryData = getCategoryData;
window.filterSolutions = filterSolutions;
window.getSolutionById = getSolutionById;
window.refreshDataRegistry = refreshDataRegistry;

console.log("✅ Движок загружен, готов к работе!");
console.log(`🌍 Доступные языки: ${Object.keys(dataRegistry).join(", ")}`);
