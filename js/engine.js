// === ДВИЖОК ФИЛЬТРАЦИИ РЕШЕНИЙ ===

// Проверяем, что все данные загружены
console.log("🔍 Проверка данных:");
console.log("  waterData:", typeof waterData !== 'undefined' ? '✅' : '❌');
console.log("  fireData:", typeof fireData !== 'undefined' ? '✅' : '❌');
console.log("  shelterData:", typeof shelterData !== 'undefined' ? '✅' : '❌');
console.log("  foodData:", typeof foodData !== 'undefined' ? '✅' : '❌');
console.log("  medicineData:", typeof medicineData !== 'undefined' ? '✅' : '❌');
console.log("  navigationData:", typeof navigationData !== 'undefined' ? '✅' : '❌');
console.log("  radioData:", typeof radioData !== 'undefined' ? '✅' : '❌');
console.log("  kitData:", typeof kitData !== 'undefined' ? '✅' : '❌');

// Регистр всех данных (только если данные определены)
const dataRegistry = {};

if (typeof waterData !== 'undefined') dataRegistry.water = waterData;
if (typeof fireData !== 'undefined') dataRegistry.fire = fireData;
if (typeof shelterData !== 'undefined') dataRegistry.shelter = shelterData;
if (typeof foodData !== 'undefined') dataRegistry.food = foodData;
if (typeof medicineData !== 'undefined') dataRegistry.medicine = medicineData;
if (typeof navigationData !== 'undefined') dataRegistry.navigation = navigationData;
if (typeof radioData !== 'undefined') dataRegistry.radio = radioData;
if (typeof kitData !== 'undefined') dataRegistry.kit = kitData;

console.log("✅ Зарегистрировано категорий:", Object.keys(dataRegistry).length);
console.log("📋 Список категорий:", Object.keys(dataRegistry).join(", "));

function getCategoryData(category) {
  const data = dataRegistry[category];
  if (!data) {
    console.error("❌ Категория не найдена:", category);
    return null;
  }
  console.log("✅ Загружена категория:", category, "вопросов:", data.questions?.length || 0, "решений:", data.solutions?.length || 0);
  return data;
}

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

// Экспорт для глобального использования
window.getCategoryData = getCategoryData;
window.filterSolutions = filterSolutions;
window.getSolutionById = getSolutionById;

console.log("✅ Движок загружен, готов к работе!");
