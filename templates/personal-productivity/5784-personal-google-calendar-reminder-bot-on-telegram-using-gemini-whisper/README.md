# ⚡ Personal Google Calendar & reminder bot on Telegram using Gemini & Whisper

> ⚡ **5,681 views** · ⚡ [Personal Productivity](../)

## Description

The **CA - Tele Assistant** workflow is an intelligent Telegram bot designed to help you manage your Google Calendar effortlessly through natural language and voice commands.
 
![Screenshot 20250708 at 22.13.05.png](fileId:1712)

## 💡 Why Use CA - Tele Assistant?

- **Hands-free calendar management:** Manage your events via text or voice with zero manual calendar app usage
- **Smart reminders:** Receive tailored, friendly reminders well in advance, helping you stay prepared
- **Multifunctional AI assistant:** Create, view, update, or delete events simply by chatting naturally
- **Seamless integration:** Combines Google Calendar, Telegram, OpenAI transcription, and Google Gemini model for powerful capabilities
- **Context-aware messaging:** Personalized message tone, emoji use, and prep tips depending on event type and urgency
![Screenshot 20250708 at 22.17.46.png](fileId:1711)


## ⚡ Who Is This For?

- **Busy professionals:** Who want to manage their schedule quickly without opening multiple apps
- **Remote teams:** Needing easy calendar coordination and friendly reminders via Telegram
- **People who prefer voice commands:** Allows scheduling and querying via Indonesian voice messages
- **Anyone overwhelmed by calendar clutter:** Automates reminders and event organization effortlessly

## ❓ What Problem Does It Solve?

Manually juggling your calendar events—creating entries, checking your schedule, or remembering appointments—is time-consuming and error-prone. Traditional calendar apps require multiple interactions and can flood you with generic notifications that lack context or personality. Voice commands or natural chat to manage calendars are rarely supported natively.

**CA - Tele Assistant** solves these issues by offering a chat-based, AI-powered interface that understands your natural language or voice, automates calendar operations, and sends smart reminders tailored to your event and preferences. This reduces the cognitive load, minimizes missed appointments, and makes calendar management seamless.

## 🔧 How This Workflow Works

**⏱ Step 1:** Incoming Telegram messages or voice messages trigger the workflow via Telegram Trigger node

**📥 Step 2:** Voice messages are automatically downloaded and transcribed into text using OpenAI

**🔀 Step 3:** A Switch node routes text and voice commands for unified processing

**✍️ Step 4:** The Google Gemini AI model processes natural language commands for calendar actions

**🧠 Step 5:** A Langchain AI agent ("Calendar Manage!") handles operations such as event creation, update, deletion, and fetching events using Google Calendar API tools. It uses session memory to keep contextual chat flow

**🔔 Step 6:** A scheduled trigger every 15 minutes retrieves upcoming calendar events (within 45-60 mins), filters duplicates, and an AI Reminder Message Agent crafts personalized reminder messages

**💬 Step 7:** Reminder messages are sent automatically to the user's Telegram chat, with typing indicators for a humanized feel

**🛠 Step 8:** All data flows and interactions are combined, ensuring seamless conversational experience with real-time calendar sync

## 🔐 Setup Instructions

1. **Import** the provided JSON workflow into your n8n instance

2. **Set up credentials:**
   - Telegram API Bot credentials via BotFather
   - Google Calendar OAuth2 credentials
   - OpenAI API key (for voice transcription)
   - Google Palm API credentials (for Gemini AI)

3. **Customize:** Adjust chat IDs, timezone preferences, and reminder timing (default 45-60 minutes before events)

4. **Update:** Replace placeholder chat IDs with your Telegram chat ID

5. **Test:** Send test commands or voice messages through your Telegram bot to verify event creation, updates, and reminder delivery

## 🧩 Pre-Requirements

1. **Telegram Bot**: Create bot via [@BotFather](https://t.me/botfather)
2. **Google Calendar**: Setup OAuth2 credentials
3. **OpenAI API**: For voice message transcription
4. **Google Gemini**: For AI language model

### 📚 Useful Resources
- [n8n Documentation](https://docs.n8n.io)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Google Calendar API](https://developers.google.com/calendar)
- [OpenAI API Docs](https://platform.openai.com/docs)

## 🛠️ Customize It Further

- Add support for additional languages in voice transcription or chat responses
- Integrate weather or traffic APIs for more enhanced reminder tips
- Enable multi-user support with dynamic chat ID handling for group chats
- Enhance personality or tone configurations for more formal or casual responses

## 🧠 Nodes Used

- **Telegram Trigger**
- **Telegram** (Send Typing Indicator, Send Message, Download Voice)
- **OpenAI** (Audio transcription)
- **Langchain Google Gemini Model**
- **Langchain AI Agents** (Reminder Message Agent, Calendar Manage! agent)
- **Google Calendar** node (Get Upcoming Events)
- **Google Calendar Tools** (Create, Update, Delete, Get events)
- **Remove Duplicates** node
- **Merge** node
- **Switch** node
- **Set** node
- **Schedule Trigger**
- **Memory Buffer Window** node

## 📞 Support

**Made by:** [khaisa Studio ](https://khaisa.studio)  
**Tag:** AI, Google Calendar, Telegram, Reminder, Schedule, Voice, OpenAI, Gemini,
**Category:** Productivity Automation  
**Need a custom?** contact [khaisa](mailto:hi@khaisa.studio) for more tailored templates

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Calendar, Schedule Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
