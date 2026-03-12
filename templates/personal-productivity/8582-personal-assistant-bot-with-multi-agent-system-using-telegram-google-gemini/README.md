# ⚡ Personal assistant bot with multi-agent system using Telegram & Google Gemini

> ⚡ **2,997 views** · ⚡ [Personal Productivity](../)

## Description

# How It Works 

- **Telegram Trigger** receives incoming messages (text, voice, photo, document).  
- **Switch** routes by message type to appropriate processors:  
  - **Text** → forwarded as-is.  
  - **Voice** → downloaded and sent to *Transcribe a recording*.  
  - **Photo** → downloaded, converted to base64, then sent to *Analyze image*.  
  - **Document** → routed to document handler.  
- **Merge** collects the processed input and passes a unified prompt to **Manager Agent**.  
- **Manager Agent (LM: Google Gemini)** orchestrates specialized agents/tools:  
  - `memory_base` (Airtable) → saving & retrieving personal/company memory  
  - `todo_and_task_manager` (Todoist / Google Sheets) → tasks  
  - `email_agent` (Gmail) → composing/sending emails  
  - `calendar_agent` (Google Calendar) → scheduling  
  - `research_agent` (SerpAPI / Wikipedia / Wolfram) → web research  
  - `project_management` (Google Sheets) → project updates  
- **Manager Agent** updates memory windows and sends the final reply back to Telegram.  

---

# Setup Steps

1. Create and configure **Telegram bot**; set bot token/webhook in Telegram Trigger and Telegram nodes. Update `chatId` placeholders.  
2. Add **Google Gemini (PaLM)** credentials in the Gemini model nodes.  
3. Configure **Airtable knowledge-base**: set base ID & table IDs used by `memory_base` nodes.  
4. Connect **Google APIs**: Sheets, Calendar, Gmail credentials and set document/sheet IDs.  
5. Configure **Todoist, SerpAPI, WolframAlpha** credentials and any other tool API keys.  
6. Verify **Window Buffer Memory** `sessionKey` values (match user sessions).  
7. Check **schedule triggers** (cron expressions) and adjust times/timezone.  
8. Run quick tests: send text, voice, image, and confirm replies and memory writes.  

---

# Estimated Setup Time

- **30–60 minutes** → if credentials & IDs are ready.  
- **2–4 hours** → full setup (API keys, spreadsheets, Airtable, detailed permissions).  
- **4–8 hours** → complex deployment (team permissions, multiple calendars, advanced tool tuning, production testing).

## 🔗 Nodes Used

Telegram, Telegram Trigger, Schedule Trigger, AI Agent, Simple Memory, SerpApi (Google Search)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
