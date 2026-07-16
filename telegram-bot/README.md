# 🤖 SOS SURVIVE Telegram Bot

Telegram bot for promoting the SOS SURVIVE offline survival assistant application.

## 📋 Features

- `/start` — Welcome message with download button
- `/help` — List of application features
- `/demo` — Quick guide on how to use the app
- `/sos` — Emergency situation instructions

## 🚀 Setup Instructions

### 1. Create Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Send command: `/newbot`
3. Enter bot name: `SOS SURVIVE Bot`
4. Enter bot username: `@sos_survive_bot`
5. Copy the API token provided by BotFather

### 2. Configure the Bot

1. Open `config.py`
2. Replace `YOUR_BOT_TOKEN_HERE` with your actual token from BotFather

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Bot

```bash
python bot.py
```

The bot will start running and respond to commands.

## 🌐 Deployment

### Free Hosting Options

**Render.com:**
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `pip install -r requirements.txt`
4. Set start command: `python bot.py`
5. Add environment variable: `TOKEN=your_bot_token`

**Railway:**
1. Create a new project on Railway
2. Deploy from GitHub
3. Add `TOKEN` as environment variable
4. Railway will automatically detect Python and install dependencies

## 📱 Bot Commands

| Command | Description |
|---------|-------------|
| `/start` | Welcome message with download link |
| `/help` | List of all app features |
| `/demo` | Quick usage guide |
| `/sos` | Emergency instructions |

## 🔧 Configuration

Edit `config.py` to change the bot token:

```python
TOKEN = "YOUR_BOT_TOKEN_HERE"
```

## 📞 Support

For issues or questions, contact via Telegram: @zimatoken

## 📄 License

This bot is part of the SOS SURVIVE project.
