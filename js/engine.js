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
  // Русские версии (используются по умолчанию)
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
  // Английские версии (используются при выборе языка en)
  en: {}
};

// Заполняем английский регистр, если данные загружены
if (typeof waterDataEn !== 'undefined') dataRegistry.en.water = waterDataEn;
if (typeof fireDataEn !== 'undefined') dataRegistry.en.fire = fireDataEn;
if (typeof shelterDataEn !== 'undefined') dataRegistry.en.shelter = shelterDataEn;
if (typeof foodDataEn !== 'undefined') dataRegistry.en.food = foodDataEn;
if (typeof medicineDataEn !== 'undefined') dataRegistry.en.medicine = medicineDataEn;
if (typeof navigationDataEn !== 'undefined') dataRegistry.en.navigation = navigationDataEn;
if (typeof radioDataEn !== 'undefined') dataRegistry.en.radio = radioDataEn;
if (typeof kitDataEn !== 'undefined') dataRegistry.en.kit = kitDataEn;

// Определяем текущий язык (из глобальной переменной или localStorage)
function getCurrentLang() {
  // Используем глобальную переменную из locales.js
  return typeof currentLang !== 'undefined' ? currentLang : 'ru';
}

/**
 * Получение данных по категории с учётом языка
 */
function getCategoryData(category) {
  const lang = getCurrentLang();
  const langData = dataRegistry[lang] || dataRegistry.ru;
  const data = langData[category];
  
  if (!data) {
    console.error(`❌ Категория не найдена: ${category} (язык: ${lang})`);
    // Пробуем найти в русской версии как fallback
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
 */
function filterSolutions(data, answers) {
  if (!data || !data.solutions) {
    console.warn("⚠️ Нет данных или решений для фильтрации");
    return [];
  }

  // Если нет ответов — возвращаем первые 5 решений
  if (!answers || Object.keys(answers).length === 0) {
    console.warn("⚠️ Нет ответов, возвращаем первые 5 решений");
    return data.solutions.slice(0, 5);
  }

  let matched = data.solutions.filter(sol => {
    // Проверяем все условия решения
    for (let [key, allowedValues] of Object.entries(sol.conditions)) {
      const userAnswer = answers[key];
      
      // Если пользователь не ответил на этот вопрос — пропускаем условие
      if (!userAnswer || userAnswer.length === 0) continue;
      
      // Проверяем, что хотя бы один ответ пользователя совпадает с разрешёнными
      const hasMatch = userAnswer.some(val => allowedValues.includes(val));
      if (!hasMatch) return false;
    }
    return true;
  });

  // Fallback если нет точных совпадений
  if (matched.length === 0) {
    console.log("🔄 Нет точных совпадений, ищем универсальные решения");
    
    // Собираем все теги из ответов пользователя
    const allTags = Object.values(answers).flat();
    
    // Ищем решения, которые содержат любой из тегов пользователя
    matched = data.solutions.filter(sol => {
      if (!sol.tags) return false;
      
      // Проверяем, есть ли пересечение тегов
      const hasTagMatch = allTags.some(tag => sol.tags.includes(tag));
      
      // Или решение помечено как универсальное/базовое
      const isUniversal = sol.tags.includes("universal") || 
                         sol.tags.includes("primitive") ||
                         sol.tags.includes("search") ||
                         sol.tags.includes("basic") ||
                         sol.tags.includes("emergency") ||
                         sol.tags.includes("checklist");
      
      return hasTagMatch || isUniversal;
    });
  }

  // Сортировка по приоритету и надёжности
  const prioOrder = { fast: 3, medium: 2, slow: 1 };
  const relOrder = { high: 3, medium: 2, low: 1 };

  matched.sort((a, b) => {
    // Сначала по приоритету
    const prioA = prioOrder[a.priority] || 1;
    const prioB = prioOrder[b.priority] || 1;
    if (prioB !== prioA) {
      return prioB - prioA;
    }
    // Затем по надёжности
    const relA = relOrder[a.reliability] || 1;
    const relB = relOrder[b.reliability] || 1;
    return relB - relA;
  });

  // Возвращаем топ-5 решений
  const result = matched.slice(0, 5);
  console.log(`✅ Найдено решений: ${matched.length}, показано: ${result.length}`);
  
  return result;
}

/**
 * Получение решения по ID
 */
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

// Обновляем данные при смене языка
function refreshDataRegistry() {
  // Просто перезагружаем — данные уже в регистре
  const lang = getCurrentLang();
  console.log(`🔄 Обновление данных для языка: ${lang}`);
  
  // Проверяем доступность данных для текущего языка
  const langData = dataRegistry[lang] || dataRegistry.ru;
  const categories = Object.keys(langData);
  console.log(`📋 Доступно категорий (${lang}): ${categories.join(", ")}`);
}

// Экспорт для глобального использования
window.getCategoryData = getCategoryData;
window.filterSolutions = filterSolutions;
window.getSolutionById = getSolutionById;
window.refreshDataRegistry = refreshDataRegistry;

console.log("✅ Движок загружен, готов к работе!");
console.log(`🌍 Доступные языки: ${Object.keys(dataRegistry).join(", ")}`);
