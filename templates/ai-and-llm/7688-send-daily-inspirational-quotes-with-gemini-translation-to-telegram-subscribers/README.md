# ✨ Send daily inspirational quotes with Gemini translation to Telegram subscribers

> ⚡ **234 views** · ✨ [AI & LLMs](../)

## Description

# Send daily inspirational quotes with AI translation to Telegram subscribers

This n8n workflow creates an automated daily quote bot that fetches inspirational quotes, translates them using AI, adds emoji "stickers," and sends them to registered Telegram subscribers. Perfect for content creators, coaches, or anyone wanting to share daily motivation with their audience.

## Who's it for

- Content creators and social media managers
- Life coaches and motivational speakers  
- Community managers running Telegram channels
- Anyone wanting to automate daily inspirational content
- Developers learning n8n automation with AI integration

## How it works

The workflow operates on two main flows:

**Daily Quote Distribution:**
1. **Schedule Trigger** runs daily to fetch a random inspirational quote
2. **HTTP Request** fetches quotes from the ZenQuotes API (free service)
3. **Google Gemini AI** translates the quote to your target language and adds relevant emoji "stickers" 
4. **Google Sheets** retrieves the list of registered subscribers
5. **Telegram** sends the formatted quote (original + translated + emojis) to all subscribers

**User Registration:**
1. **Telegram Trigger** listens for new messages to your bot
2. **Google Sheets** automatically registers new users who interact with the bot

## Requirements

- **Telegram Bot Token** - Create a bot via @BotFather on Telegram
- **Google Gemini API** - For AI translation and emoji enhancement
- **Google Sheets** - To store subscriber list (free Google account)
- **ZenQuotes API** - Free, no API key required

## How to set up

1. **Create Telegram Bot**: Message @BotFather on Telegram, create a new bot, and save the token
2. **Set up Google Sheets**: Create a spreadsheet with columns: `registered_users`, `date`
3. **Configure Gemini API**: Get your API key from Google AI Studio
4. **Update the Set Fields node**: Configure your target language and bot preferences
5. **Test the workflow**: Send a message to your bot to register, then manually trigger the quote sending

## How to customize the workflow

- **Change target language**: Modify the AI prompt in the LLM Chain node to translate to any language
- **Adjust sending schedule**: Update the Schedule Trigger to send quotes at your preferred time/frequency
- **Customize quote sources**: Replace the HTTP Request with other quote APIs or your own content
- **Add quote categories**: Enhance the AI prompt to categorize quotes (motivational, business, life, etc.)
- **Include user preferences**: Expand Google Sheets to store user language preferences for personalized translations

## Good to know

- The workflow automatically handles new subscriber registration
- Supports MarkdownV2 formatting for rich text in Telegram
- Uses emoji "stickerization" to make quotes more engaging and visual
- Demo bot working with this workflow is @sgsbot on Telegram

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
