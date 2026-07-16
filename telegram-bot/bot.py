import logging
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes
from config import TOKEN

# Настройка логов
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# Ссылка на приложение
APP_URL = "https://zimatoken.github.io/sos-survive/"

# Команда /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("📱 Скачать приложение", url=APP_URL)],
        [InlineKeyboardButton("🆘 SOS — инструкция", callback_data='sos')],
        [InlineKeyboardButton("📖 Помощь", callback_data='help')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "🆘 *SOS SURVIVE* — твой офлайн-ассистент выживания!\n\n"
        "📱 Приложение работает *без интернета*.\n"
        "🗺️ 98 решений для экстренных ситуаций.\n"
        "🌍 Русский и английский языки.\n"
        "📴 Полностью офлайн.\n\n"
        "👉 *Скачай прямо сейчас:*",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# Команда /help
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("📱 Скачать приложение", url=APP_URL)],
        [InlineKeyboardButton("🆘 SOS", callback_data='sos')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "🆘 *SOS SURVIVE* — возможности:\n\n"
        "💧 *Вода* — добыча и очистка\n"
        "🔥 *Огонь* — разведение в любых условиях\n"
        "🏠 *Укрытие* — защита от непогоды\n"
        "🍖 *Еда* — добыча в дикой природе\n"
        "🩹 *Медицина* — первая помощь\n"
        "🧭 *Навигация* — ориентирование\n"
        "📻 *Связь* — сигналы и связь\n"
        "🎒 *Чемоданчик* — чек-листы\n\n"
        f"📱 *Скачать:* {APP_URL}",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# Команда /demo
async def demo_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("📱 Скачать приложение", url=APP_URL)]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "📱 *Как пользоваться SOS SURVIVE:*\n\n"
        "1️⃣ Открой приложение\n"
        "2️⃣ Выбери раздел (Вода, Огонь, Укрытие...)\n"
        "3️⃣ Ответь на 3-4 вопроса\n"
        "4️⃣ Получи 2-5 решений с шагами\n\n"
        "✅ *Всё просто и быстро!*",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# Команда /sos
async def sos_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("📱 Скачать приложение", url=APP_URL)]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "🚨 *Если вы в опасности:*\n\n"
        "1️⃣ Открой *SOS SURVIVE*\n"
        "2️⃣ Нажми *SOS — Я в опасности*\n"
        "3️⃣ Введи телефон близкого человека\n"
        "4️⃣ Нажми *ОТПРАВИТЬ SOS*\n\n"
        "📱 Приложение отправит *SMS* с вашими координатами и ссылкой на карту.\n\n"
        "⚠️ *Если связи нет* — используйте сигналы:\n"
        "• 3 огня в треугольнике\n"
        "• Зеркало для отражения солнца\n"
        "• Свисток (3 коротких звука)\n\n"
        f"📱 *Скачать:* {APP_URL}",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# Обработка кнопок
async def button_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    
    if query.data == 'help':
        await query.edit_message_text(
            "🆘 *SOS SURVIVE* — возможности:\n\n"
            "💧 *Вода* — добыча и очистка\n"
            "🔥 *Огонь* — разведение в любых условиях\n"
            "🏠 *Укрытие* — защита от непогоды\n"
            "🍖 *Еда* — добыча в дикой природе\n"
            "🩹 *Медицина* — первая помощь\n"
            "🧭 *Навигация* — ориентирование\n"
            "📻 *Связь* — сигналы и связь\n"
            "🎒 *Чемоданчик* — чек-листы\n\n"
            f"📱 *Скачать:* {APP_URL}",
            parse_mode='Markdown'
        )
    elif query.data == 'sos':
        await query.edit_message_text(
            "🚨 *Если вы в опасности:*\n\n"
            "1️⃣ Открой *SOS SURVIVE*\n"
            "2️⃣ Нажми *SOS — Я в опасности*\n"
            "3️⃣ Введи телефон близкого человека\n"
            "4️⃣ Нажми *ОТПРАВИТЬ SOS*\n\n"
            "📱 Приложение отправит *SMS* с координатами.\n\n"
            f"📱 *Скачать:* {APP_URL}",
            parse_mode='Markdown'
        )

# Главная функция
def main():
    app = Application.builder().token(TOKEN).build()
    
    # Команды
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(CommandHandler("demo", demo_command))
    app.add_handler(CommandHandler("sos", sos_command))
    
    # Кнопки
    app.add_handler(CallbackQueryHandler(button_handler))
    
    # Запуск
    print("🤖 Бот запущен! Нажми Ctrl+C для остановки.")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == '__main__':
    main()
