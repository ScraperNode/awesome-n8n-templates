# ⚡ Manage personal data with multiple GPT-4o AI agents: Gmail, Tasks & Finance on Telegram

> ⚡ **1,156 views** · ⚡ [Personal Productivity](../)

## Description

## Overview  
Automate your personal productivity with this intelligent n8n workflow that integrates **Telegram**, **Google Sheets**, and **OpenAI (GPT-4o)**. This system uses multiple AI agents to manage work hours, tasks, finances, and emails—all through natural language commands sent via Telegram. Every action is synced to Google Sheets for persistent, structured data storage.

---

## What This Template Does  
This automation system deploys several specialized AI agents:

- **📊 Work Hours Analyzer**: Analyzes work logs from Google Sheets, calculates total hours by workplace, and generates detailed monthly reports in Arabic.
- **🛠️ Work Tracking Agent**: Handles start/end work commands, calculates total hours, and updates Google Sheets.
- **📋 Task Manager Agent**: Manages to-do lists—adding, listing, updating, completing, and deleting tasks—with real-time sync to Google Sheets.
- **💰 Finance Agent**: Tracks income and expenses in multiple currencies, summarizes daily financial activity, and maintains a full transaction history.
- **📧 Email Analysis Agent**: Processes incoming Gmail messages, generates AI-powered summaries in Arabic with priority, sentiment, and recommended actions.
- **📅 Monthly Report Generator**: Automatically triggers at the start of each month to compile a professional PDF report of work hours and sends it to a Telegram topic.

---

## Prerequisites & Setup

### Required Accounts & API Keys  
Before setup, ensure you have:

1. **Telegram Bot Token** – from @BotFather  
2. **OpenAI API Key** – with access to `gpt-4o-mini` or `gpt-3.5-turbo`  
3. **Google Sheets API** – OAuth2 credentials enabled  
4. **Gmail Account (Optional)** – for email analysis  
5. **n8n Instance** – self-hosted or cloud

---

### Google Sheets Structure  
Create a Google Sheet with the following sheets and columns:

#### Sheet: `work`  
- Date  
- start at  
- end at  
- place  
- note  
- Total hours  

#### Sheet: `task`  
- Task  
- Status  
- Created At  
- Due Date  
- Notes  

#### Sheet: `Expenses`  
- id  
- Amount  
- Currency  
- Note  
- Type (debit/credit)  
- Date  
- Time  

#### Sheet: `email`  
- name  
- email  

---

## Step-by-Step Setup

### Step 1: Import the Workflow  
1. In n8n, go to **Workflows &gt; Import from file**  
2. Upload the JSON template  
3. Open the canvas and verify all nodes are connected

### Step 2: Configure Credentials  
1. **Telegram**: Add your bot token under "Telegram account"  
2. **OpenAI**: Enter your API key in "OpenAi account"  
3. **Google Sheets**: Connect using OAuth2 under "Google Sheets account"  
4. **Gmail (Optional)**: Set up if using email analysis

### Step 3: Link Google Sheets  
1. Share your Google Sheet with the service account email (if using service account)  
2. Copy the **Document ID** from the sheet URL  
3. Update all Google Sheets nodes with the correct sheet names and IDs  
4. Ensure column names match exactly

### Step 4: Set Up Telegram  
1. Start a chat with your bot  
2. Use `/start` to initialize  
3. Ensure `chatId` and `message_thread_id` in Telegram nodes match your group/topic  
4. Test sending a message like "Start work at the factory"

### Step 5: Test the Agents  
Try these sample commands via Telegram:

- "Start work at the factory" → Logs start time  
- "Finished work" → Logs end time and calculates hours  
- "Add task: pay the bill" → Adds a new task  
- "How much did I spend today?" → Shows today’s expenses  
- "Send last month's report" → Triggers monthly PDF report (on the first of the month)

---

## Key Features

### Smart Work Tracking  
- Automatic time calculation  
- Query by date, place, or period  
- Real-time Google Sheets sync

### Task Management  
- Add, list, update, complete, delete tasks  
- Friendly, conversational responses  
- Daily summaries of completed and upcoming tasks

### Financial Tracking  
- Supports multiple currencies (JOD, USD, ILS, etc.)  
- Daily income/expense summaries  
- Full transaction history  
- Arabic-language responses

### Email Intelligence  
- AI-powered email summaries  
- Priority, sentiment, and action recommendations  
- Plain-text output in Arabic  
- No JSON or code blocks

### Automated Monthly Reports  
- Triggered on the 1st of each month  
- Generates detailed work hour reports by workplace  
- Outputs clean, formatted PDF  
- Sends directly to Telegram topic

---

## Customization Options

### Modify AI Prompts  
Edit the `systemMessage` in any AI agent node to:
- Change tone (formal, friendly, concise)  
- Add new response formats  
- Support additional commands or languages

### Extend Functionality  
- Add **daily reminders** using Schedule Trigger  
- Implement **budget alerts** when expenses exceed a threshold  
- Add **weekly summaries** for tasks or work hours  
- Support **multi-currency conversion**

### Enhance Telegram Interaction  
- Add **inline buttons** for quick actions  
- Create **shortcuts** like `/work`, `/tasks`, `/finance`  
- Use **message_thread_id** to organize topics

---

## Troubleshooting

| Issue | Solution |
|------|----------|
| Bot not responding | Check webhook URL, bot token, and `chatId` |
| Google Sheets not updating | Verify OAuth2 permissions and sheet sharing |
| AI not understanding commands | Review prompt clarity and test input phrasing |
| Monthly report not sending | Confirm `Schedule Trigger` timezone and execution time |

---

## Benefits  
✅ **Full automation** with minimal user input  
📱 **Control everything from Telegram**  
📊 **Data stored securely in Google Sheets**  
📄 **Professional PDF reports generated automatically**  
💬 **Natural, friendly Arabic responses**  
🔁 **Seamless sync across all components**

This template transforms personal productivity by combining AI intelligence with powerful automation—turning simple Telegram messages into structured data, actionable insights, and professional reports.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Gmail, Gmail Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
