# ⚡ AI-powered personal assistant for Telegram with memory & task management

> ⚡ **1,794 views** · ⚡ [Personal Productivity](../)

## Description

# **Telegram AI Assistant with Memory, Tasks, and Live Search (Airtable + Google Calendar)**

This workflow creates an intelligent Telegram-based AI assistant that remembers user details, manages lists, integrates with Google Calendar, and can fetch live information from the web. It is designed for everyday use and improves over time with your feedback.

## **What It Does**
- **Personal Memory:** Saves user preferences and instructions in Airtable.
- **Task & Grocery Lists:** Add, search, or delete grocery and to-do items directly in Telegram.
- **Calendar Management:** Create, update, delete, and search events (single or recurring) with Google Calendar.
- **Voice Support:** Send voice messages—these are transcribed and processed like text.
- **Web Search:** (Optional) Fetch real-time answers using SerpAPI.

---

## **Prerequisites**
1. **n8n** (Cloud or self-hosted instance).
2. **Telegram Bot** (create via @BotFather on Telegram).
3. **Airtable account** with a new Base containing 3 tables:
   - **User Memory**
   - **Grocery's**
   - **To Do List**
4. **Google Account** with Calendar enabled (for OAuth2).
5. **OpenAI API Key** (for AI responses + voice transcription).
6. **SerpAPI Key** (optional, for live web search).

---

## **Airtable Schema**
Inside your new Airtable Base, create the following tables and fields:

### **User Memory**
- Memory (text)
- User (text)
- Time (created time)

### **Grocery's**
- Item (text)
- User (text)
- Created (created time)

### **To Do List**
- Task (text)
- Project or Class (text)
- User (text)
- Created (created time)

&gt; Field names must match exactly.

---

## **Setup Instructions**
1. **Import the workflow JSON** into n8n.
2. **Configure credentials** for each service in the workflow:
   - **Telegram API** → Paste in your bot token.
   - **Airtable** → Add your Airtable personal access token. After this, Airtable nodes will show dropdowns where you can select your **Base** and then your **Tables** (no need to paste IDs).
   - **Google Calendar** → Connect your Google account. Once credentials are added, simply pick your Calendar from the dropdown (e.g., “primary” or any shared calendar).
   - **OpenAI** → Add your API key for chat + voice transcription.
   - **SerpAPI** → Add your API key (optional).
3. For **Telegram Trigger**:
   - Click “Listen for Test Event” and send a message to your bot to register the webhook.
   - In group chats: disable privacy mode in @BotFather so the bot can see all messages.
4. **Activate the workflow** and start chatting with your bot.

---

## **How to Use**
- **Memory**
  - “Remember my coffee order is oat milk latte.”
  - “Keep replies shorter.”
- **Grocery List**
  - “Add eggs.” → “Added eggs.”
  - “What’s on my grocery list?” → Lists all items
  - “Remove bread.” → “Removed bread.”
- **To-Do List**
  - “Add finish report for work.”
  - “What’s on my to-do list?”
  - “Remove finish report.”
- **Calendar**
  - “Create event ‘Team sync’ tomorrow 3–4 pm.”
  - “Make a recurring study session every Friday at 2 pm.”
  - “Delete the dentist appointment at 4 pm.”
- **Web Search**
  - “Get news.” → Summarizes top 5–6 stories from the past 24 hours.

---

## **Configuration Notes**
- You don’t need to enter Airtable IDs or Calendar IDs manually — just use the dropdowns after credentials are set up.
- Airtable “User” field is filled automatically with the Telegram username.
- Voice messages are downloaded and transcribed by OpenAI before being processed as text.

---

## **Security**
- All API keys and tokens are stored securely in **n8n Credentials**.
- No hard-coded IDs, emails, or secrets in this template.
- Webhook IDs are not included; n8n generates them automatically on import.

---

## **Troubleshooting**
- **Bot not responding?** Ensure the workflow is active, Telegram Trigger is listening, and bot privacy settings are configured for groups.
- **Airtable errors?** Check that your base and tables exist, and that field names match exactly.
- **Calendar issues?** Confirm the Google account has access to the selected calendar.
- **Voice transcription failing?** Verify your OpenAI credentials and Telegram bot permissions.

---

## **Why This Template Works for Everyone**
- Uses dropdown selections for Airtable and Google Calendar (no IDs needed).
- Includes clear setup instructions.
- Credentials are handled securely through n8n.
- Flexible: works with groceries, tasks, memory, calendar, and optional live web search.

## 🔗 Nodes Used

Airtable, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
