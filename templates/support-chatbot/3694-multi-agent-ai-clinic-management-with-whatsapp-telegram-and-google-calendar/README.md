# 💬 Multi-Agent AI Clinic Management with WhatsApp, Telegram, and Google Calendar

> ⚡ **22,444 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Healthcare Clinic Assistant with WhatsApp and Telegram Integration
**Version:** 1.1.0  
**n8n Version:** 1.88.0+  
**License:** MIT  

---

## 📋 Description
A **comprehensive and modular automation workflow** designed for healthcare clinics.  
It manages patient communication, appointment scheduling, confirmations, rescheduling, internal tasks, and media processing by integrating **WhatsApp**, **Telegram**, **Google Calendar**, and **Google Tasks**, combined with **AI-powered agents** for maximum efficiency.

This system guarantees proactive communication with patients, streamlined internal clinic management, and consistent data synchronization across platforms.

---

## 🌟 Key Features
- 🤖 **AI-Powered Specialized Agents**:  
  Distinct agents handle WhatsApp patient support, appointment confirmations, and internal rescheduling tasks.

- 📱 **Omnichannel Communication**:  
  Handles patient interactions via WhatsApp and staff commands via Telegram.

- 📅 **Google Calendar Appointment Management**:  
  Full synchronization for creating, updating, canceling, and confirming appointments.

- 📋 **Task Management with Google Tasks**:  
  Manages shopping lists and administrative tasks efficiently through staff Telegram requests.

- 🔔 **Automated Appointment Reminders**:  
  Daily-triggered system proactively sends WhatsApp confirmations to patients for next-day appointments.

- 🖼️ **Intelligent Media Processing**:  
  Transcribes audios, extracts text from images, and processes documents using OpenAI and OpenRouter AI models.

- 🛡️ **Escalation to Human Support**:  
  Automatically detects sensitive or urgent cases and escalates them to a human agent when needed.

---

## 🏥 Use Cases
- **Patient Communication:**  
  Respond to inquiries, schedule, reschedule, and confirm appointments seamlessly via WhatsApp.

- **Internal Clinic Operations:**  
  Allow staff to modify appointments or add shopping list reminders directly from Telegram.

- **Appointment Confirmation System:**  
  Automatically contacts patients one day prior to appointments for confirmation or rescheduling.

- **Task and Reminder Management:**  
  Keeps clinic operations organized through automatic task management with Google Tasks.

---

## 🛠️ Technical Implementation

### WhatsApp Patient Interaction Flow
- **Webhook Reception:** Incoming WhatsApp messages captured via Evolution API webhook.
- **Message Classification:** Intelligent routing of messages based on content type (text, image, audio, document).
- **Media Content Processing:**  
  - **Audios:** Download, convert, and transcribe via OpenAI Whisper.  
  - **Images:** Analyze and extract text/descriptions with OpenAI Vision model.
- **Patient Request Handling:** Specialized WhatsApp assistant responds appropriately using AI prompts.
- **Outbound Message Formatting:** Ensures messages comply with WhatsApp format standards.
- **Message Delivery:** Sends responses back via Evolution API.

### Telegram Staff Management Flow
- **Telegram Webhook Reception:** Captures messages from authorized staff accounts.
- **Internal Assistant Processing:**  
  - **Appointment Rescheduling:** Identifies and updates appointments through MCP Google Calendar.  
  - **Task Creation:** Adds new entries to the clinic's shopping list using Google Tasks.
- **Notifications and Confirmations:** Sends confirmations back to staff through Telegram.

### Appointment Reminder System
- **Daily Trigger Activation:** Fires every weekday at 08:00 AM.
- **Calendar Scraping:** Lists next day's appointments from Google Calendar.
- **Patient Contact:** Sends WhatsApp confirmation messages for each appointment.
- **Response Management:** Redirects confirmation or rescheduling replies to appropriate agents.

---

## ⚙️ Setup Instructions

1. **Import the Workflow**  
   n8n → Workflows → Import from File → Upload this JSON file.

2. **Configure Credentials**  
   - Evolution API (WhatsApp Communication)  
   - Telegram Bot API (Staff Communication)  
   - Google Calendar OAuth2 (Appointment Management)  
   - Google Tasks OAuth2 (Task Management)  
   - OpenAI and OpenRouter APIs (AI Agents)  
   - PostgreSQL Database (Chat Memory)

3. **Set Sensitive Variables**
   - Replace placeholder values:
     - `{sua instância aqui}` → Evolution API instance name
     - `{número_whatsapp}` → WhatsApp numbers
     - `{url_do_servidor}` → Server URLs
     - `{a sua apikey aqui}` → API keys
     - `{seu_calendario}` → Google Calendar ID

4. **Customize AI Prompts**
   - Adjust system prompts to fit your clinic’s tone, service style, and patient communication guidelines.
   - Set clinic operating hours, escalation rules, and cancellation procedures in AI prompts.

5. **Activate and Test**
   - Simulate patient messages via WhatsApp.
   - Test Telegram commands from staff members.
   - Validate daily appointment reminders using the scheduled trigger.

---

## 🏷️ Tags
`Healthcare` `Clinic Management` `WhatsApp Integration` `Telegram Bot` `Appointment Scheduling` `Google Calendar` `Google Tasks` `AI Agents` `n8n Automation`  

---

## 📚 Technical Notes
- PostgreSQL is used for persistent chat memory across sessions.
- Multiple AI Models Used:
  - **OpenAI GPT-4.1-nano**
  - **OpenAI GPT-4.1-mini**
  - **Google Gemini 2.0 and 2.5**
- Full media content processing supported (audio, image, text).
- Compliant escalation workflows ensure patient safety and proper handoff to human staff when necessary.
- All sensitive patient data are securely stored inside calendar event descriptions for easy retrieval by agents.

---

## 📜 License
This workflow is provided under the **MIT License**.  
Feel free to adapt and customize it for your clinic’s specific needs.

## 🔗 Nodes Used

Webhook, Telegram, Telegram Trigger, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
