# 💬 Automate meeting scheduling through Telegram with Google Calendar & Notion CRM

> ⚡ **58 views** · 💬 [Support Chatbots](../)

## Description

# 💼 Graceful Scheduler Bot — Client & Affiliate Booking Automation

The **Graceful Scheduler Bot** transforms scheduling into an elegant, automated process.  
Clients and affiliates simply send a `/book` message in Telegram, and the workflow manages everything:  
conflict checks, calendar booking, confirmations, CRM logging, and reminders. ✨

---

## 🌸 Features
- 📲 **Telegram Intake**: Accepts `/book` command with meeting type, date, time, and email.  
- 📅 **Google Calendar Integration**: Checks if the requested time is free and creates a 30-minute event.  
- 💌 **Confirmations**: Sends instant confirmation by **Email** and **Telegram**.  
- 🗂️ **Notion CRM Log**: Records details (Name, Email, Meeting Type, Date, Status).  
- ⏰ **Reminders**: Sends polite reminders 24h before the meeting via **Email** and **Telegram**.  

---

## ⚙️ Setup Instructions
1. **Telegram Bot**:  
   - Create a bot with BotFather  
   - Add your token into n8n credentials  
2. **Google Calendar**:  
   - Connect your account in n8n credentials  
   - Use `primary` or specify your calendar ID  
3. **Email Send Node**:  
   - Configure SMTP or Gmail OAuth  
4. **Notion Database**:  
   - Create a database with properties:  
     - `Name` (title)  
     - `Email` (email)  
     - `Meeting Type` (select)  
     - `Date` (date)  
     - `Status` (select)  
   - Replace `YOUR_NOTION_DATABASE_ID` in the workflow  
5. **Customize Messages**:  
   - Update confirmation + reminder copy to match your tone  
6. **Test Example**:  
    /book client 2025-09-20 14:00 hello@example.com Jane Doe

---

## 🧩 Node List
- **Telegram Trigger** → listens for `/book` messages  
- **Function (Parse Command)** → extracts meeting type, date/time, email, name  
- **IF Valid?** → routes to help or booking flow  
- **Google Calendar (Get Events)** → checks for conflicts  
- **IF Time Free?** → prevents double booking  
- **Google Calendar (Create Event)** → books slot + invites guest  
- **Email Send (Confirmation)** → elegant confirmation email  
- **Telegram (Confirmation)** → graceful in-chat confirmation  
- **Notion (Create Page)** → logs details into CRM  
- **Wait** → pauses until 24h before meeting  
- **Email Send (Reminder)** → gentle email reminder  
- **Telegram (Reminder)** → in-chat reminder  

---

## 🧪 Testing Tips
- Start with a test booking command using today’s date/time.  
- Check Google Calendar → event should appear with guest invite.  
- Confirm both **email** and **Telegram** confirmations are sent.  
- Verify a new page is created in your Notion database.  
- Let the Wait node trigger → reminders should arrive 24h before.  

---

## 🏷️ Tags
`Automation`, `Scheduling`, `Calendars`, `CRM`, `Telegram`, `Notion`

---

✨ With the **Graceful Scheduler Bot**, scheduling feels less like admin work and more like having your own **digital assistant** — polished, timely, and beautifully automated.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
