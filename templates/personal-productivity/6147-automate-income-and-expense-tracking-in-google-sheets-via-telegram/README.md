# ⚡ Automate income and expense tracking in Google Sheets via Telegram

> ⚡ **252 views** · ⚡ [Personal Productivity](../)

## Description

## Who’s it for
This template is perfect for freelancers, small business owners, or financial assistants who want to record and approve financial transactions like income and expenses directly from Telegram, without opening a spreadsheet manually.

It’s also useful for teams that require a supervisor to approve expenses before they’re finalized.


## What it does
This workflow allows users to:

- Start a conversation via Telegram using the /start command.
- Choose to record an income or expense.
- Submit transaction data using a structured format.
- Store the data into Google Sheets in real time.
- For expenses, automatically notify a supervisor for approval.
- The supervisor can Approve ✅, Reject ❌, or View Details 👁.
- Sends feedback to the user based on supervisor action.


## 🔧 How it works

1. Telegram Bot Trigger: Captures user input via message or inline button callback.
2. Message Detection Logic: Differentiates between text input and button interactions.
3. Switch Node: Routes the message type:
   - /start: Displays income/expense buttons.
   - Input text: Validates formatting and parses data.
   - Callback: Handles approval/rejection process.

4. Google Sheets Integration: Appends or updates entries in different sheets based on the data type.

5. Notifications:

   - User gets feedback (recorded, pending, approved, rejected).
   - Supervisor receives inline button options for approval.


## Google Sheets Details
You will need a Google Sheet with the following two worksheets:

Sheet 1: income
Sheet 2: Sheet1 (Default tab for expenses)


## 📱 Telegram Setup Instructions

1. Create a bot using @BotFather.
2. Save the bot token.
3. Go to n8n Credentials → Telegram API and add:
   - Access Token = your bot token
4. In Telegram, send /start to your bot.
5. Make sure your bot has enabled privacy mode (or disabled, if used in a group).


💡 For the approval flow, update the node Send Approval Request with the correct chatId of the supervisor's Telegram account. You can hardcode a static ID (e.g., "123456789") or pull from a variable if dynamic.


## 🛠 Requirements

| Tool                       | Description                         |
| -------------------------- | ----------------------------------- |
| n8n (Cloud or Self-hosted) | Use latest stable version           |
| Telegram Bot               | For user input and notifications    |
| Google Sheets              | To store income and expense records |
| Google OAuth2 Credentials  | Required for Google Sheets node     |



## ⚙️ How to customize the workflow

- Change the chat ID for supervisors in the node Send Approval Request.
- Modify the text or add new buttons in the inline keyboard node.
- Update Google Sheet ID and tab names if you’re using different sheets.
- Customize the approval logic, for example, route to different teams.


## ✅ Setup Steps

1. Import the workflow JSON into your n8n instance.
2. Configure Telegram API credential with your bot token.
3. Connect your Google Sheets OAuth2 credential.
4. Replace Google Sheet document ID and tab names with your own (via UI or “Expression” mode).
5. Deploy and activate the workflow.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
