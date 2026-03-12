# ⚡ Manage tasks & send scheduled reminders with Telegram Bot, Google Sheets & GPT-4o mini

> ⚡ **3,940 views** · ⚡ [Personal Productivity](../)

## Description

This n8n automation lets you build a complete AI-powered task management system that integrates **Telegram**, **Google Sheets**, and **GPT-4o mini** to help users easily manage to-do lists and receive daily task reminders.

Users can interact with the system via **Telegram**, while the AI assistant (powered by GPT-4o mini) processes commands naturally, updates a central **Google Sheet**, and ensures scheduled reminders are sent for pending tasks.

---

## **✨ Key Features**

 ✅ Add, list, update, complete, or delete tasks via Telegram
 ✅ AI-powered conversational responses using  GPT-4o
 ✅ All tasks stored and synced in Google Sheets
 ✅ Daily scheduled task summary and pending reminders sent to Telegram
 ✅ Friendly, human-like assistant responses
 ✅ Fully configurable and easy to set up

---

## **🛠️ Workflow Functionality Breakdown**

### 1. **User Interacts on Telegram**

* Sends commands like:

  * `add buy groceries`
  * `list tasks`
  * `complete submit report`
  * `delete dentist appointment`

### 2. **AI-Powered Processing**

* A GPT-4o agent processes user messages
* Ensures clear, friendly responses
* Determines task intent: add, update, delete, list, complete

### 3. **Google Sheets Sync**

* Every operation is logged to Google Sheets
* Google Sheets acts as the master task database
* Sheet structure includes:

  * `Task`
  * `Status` (`pending` or `done`)
  * `Created At` (timestamp)
  * `Due Date` (optional)
  * `Notes` (optional)

### 4. **Scheduled Daily Task Summary**

* At 9 PM daily, the workflow:

  * Fetches tasks from Google Sheets
  * Generates a warm, conversational summary via GPT-4o
  * Sends the summary to the user on Telegram

### 5. **Automated Reminders**

* Checks for pending tasks due today
* Sends reminder messages to Telegram

---

## **✅ Prerequisites**

Before setting up the workflow, ensure you have:

 ✔️ An **n8n** instance (Cloud or self-hosted)
 ✔️ A **Telegram Bot Token**
 ✔️ Access to **Google Sheets API** (OAuth2 credentials)
 ✔️ An **OpenAI API Key** with GPT-4o access
 ✔️ A Google Sheet structured as per the specification below

---

## **📝 Google Sheet Structure**

Your Google Sheet should have the following columns:

| Column Name    | Description                                          |
| -------------- | ---------------------------------------------------- |
| **Task**       | Short task description                               |
| **Status**     | `pending` or `done`                                  |
| **Created At** | Date & time task was created (`YYYY-MM-DD HH:mm:ss`) |
| **Due Date**   | (Optional) When task is due (`YYYY-MM-DD HH:mm:ss`)  |
| **Notes**      | (Optional) Additional details                        |

**Important:** The first row should be the header row with these exact column names.

---

## **🔧 Setup Instructions**

### 1. **Telegram Bot Setup**

* Create a bot via [BotFather](https://core.telegram.org/bots#botfather)
* Obtain the **Bot Token**
* Connect Telegram Trigger and Telegram Send nodes using your Bot Token in n8n

### 2. **Google Sheets API Setup**

* Follow [n8n Google Sheets integration guide](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)
* Set up OAuth2 credentials
* Provide access to your task Google Sheet

### 3. **OpenAI API Setup**

* Obtain an API key from [OpenAI](https://platform.openai.com/account/api-keys)
* Ensure GPT-4o mini access is enabled
* Add OpenAI credentials to relevant nodes

### 4. **Sheet Linking**

* Replace the **Google Sheet ID** in the workflow with your own
* Confirm sheet names and column structure match exactly

### 5. **Schedule Configuration (Optional)**

* Adjust the daily summary time (`Schedule Trigger` node) as desired

---

## **⚙️ Configuration Options**

* 🔧 Adjust AI prompt instructions for tone/style
* 🔧 Change reminder times in the schedule trigger
* 🔧 Customize Google Sheet columns if needed (update mappings accordingly)
* 🔧 Add multi-user support with chat ID checks (advanced)

---

## **📂 Files Included**

* Full n8n JSON workflow ready to import

---

## **💡 Tips**

* You can extend this with Slack, WhatsApp, or Email reminders
* Combine with Notion, ClickUp, or CRM integrations for more powerful task management
* Consider adding a "Priority" column for advanced sorting

---

**Ready to stay organized with AI-powered task management?**
Import this workflow, link your accounts, and your Telegram assistant is good to go! 🚀

---

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Telegram Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
