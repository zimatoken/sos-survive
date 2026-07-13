// js/voice.js
// ============================================================
// ГОЛОСОВОЙ ВВОД — Распознавание команд голосом
// ============================================================

function startVoiceInput() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    showToastKey('toast_voice_unsupported');
    return;
  }
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = currentLang === 'ru' ? 'ru-RU' : 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;
  
  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript.toLowerCase().trim();
    console.log('🎤 Распознано:', text);
    
    // Категории на разных языках
    const categories = {
      ru: ['вода', 'огонь', 'укрытие', 'еда', 'медицина', 'навигация'],
      en: ['water', 'fire', 'shelter', 'food', 'medicine', 'navigation']
    };
    
    const langMap = {
      ru: { water: 'вода', fire: 'огонь', shelter: 'укрытие', food: 'еда', medicine: 'медицина', navigation: 'навигация' },
      en: { water: 'water', fire: 'fire', shelter: 'shelter', food: 'food', medicine: 'medicine', navigation: 'navigation' }
    };
    
    // Ищем категорию
    const list = categories[currentLang] || categories.ru;
    for (let cat of list) {
      if (text.includes(cat)) {
        // Находим английское название
        const enCat = Object.keys(langMap.en).find(key => langMap[currentLang][key] === cat);
        if (enCat) {
          startFlow(enCat);
          showToast('🎤 ' + cat);
          return;
        }
      }
    }
    
    // Если не нашли категорию
    if (text.includes('sos') || text.includes('помощь') || text.includes('help')) {
      showSOS();
      showToast('🆘 SOS активирован!');
      return;
    }
    
    showToast('❌ Не понял: "' + text + '"');
  };
  
  recognition.onerror = function(event) {
    console.warn('🎤 Ошибка:', event.error);
    if (event.error === 'not-allowed') {
      showToast('❌ Разрешите доступ к микрофону');
    } else if (event.error === 'no-speech') {
      showToast('🎤 Ничего не сказано');
    } else {
      showToast('🎤 Ошибка: ' + event.error);
    }
  };
  
  recognition.start();
  showToast('🎤 Слушаю...');
}

// Экспорт
window.startVoiceInput = startVoiceInput;

console.log('✅ Голосовой ввод загружен');
