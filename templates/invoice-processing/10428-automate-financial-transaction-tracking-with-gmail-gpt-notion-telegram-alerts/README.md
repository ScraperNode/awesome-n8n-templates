# 🧾 Automate financial transaction tracking with Gmail, GPT, Notion & Telegram alerts

> ⚡ **157 views** · 🧾 [Invoice Processing](../)

## Description

## 📩 Automatically Log Transactions from Gmail into Notion and Get Telegram Alerts

### Who’s it for  
This workflow is for individuals or entrepreneurs who receive **bank alerts, invoices, and payment emails** in Gmail and want them to be **automatically organized in Notion** — while also receiving quick **Telegram notifications** for each transaction.  

If you manage personal or business finances and find it tedious to manually record every debit, credit, or invoice — this automation does it all for you.

---

### How it works  
The workflow acts as an **AI-powered Accountant Agent** that reads incoming Gmail messages and decides whether each email represents a **Debit Transaction, Credit Transaction, Debit Invoice, or Credit Invoice**.  

- The **Gmail Trigger** watches your selected inboxes (like `forwarding@bayesian-labs.com`, `support@bayesian-labs`, `anoop.karnik@bayesian-labs`).  
- The **Classifier (GPT-5-nano)** determines the correct transaction type.  
- The appropriate **Agent (GPT-5)** then extracts amount, currency, and description details.  
- The Agent uses Notion API tools to log structured data into your **Personal Finance System** Notion template (Financial Transactions & Income databases).  
- Finally, a **Telegram notification** is sent summarizing the entry (From, To, Subject, Snippet).  

In short: every time your bank emails you — Notion gets updated, and you get notified.

---

### How to set up  

1. **Duplicate the [Personal Finance System Notion template](https://www.notion.so/templates/personal-finance-system)** into your workspace.  
2. Create a **Telegram Bot** with BotFather → copy the bot token and your chat ID.  
3. Generate an **OpenRouter API key** for GPT-5 / GPT-5-nano.  
4. Create a **Notion Integration Token** and connect it to your duplicated finance databases.  
5. Add your **Gmail accounts** (`forwarding@`, `support@`, and/or personal Gmail) under **Gmail OAuth2 credentials** in n8n.  
6. Import the workflow JSON into n8n → fill in the credential names as listed below:  
   - `n8n_cloud_regular_usage` → OpenRouter  
   - `Notion account` → Notion API  
   - `Accountant AI` → Telegram Bot  
   - Gmail OAuth2 for each inbox trigger  

Once active, n8n polls Gmail every minute, classifies emails, updates Notion, and sends Telegram updates.

---

### Requirements  
- n8n instance (self-hosted or cloud)  
- Gmail accounts connected via OAuth2  
- OpenRouter API key  
- Telegram bot token & chat ID  
- Notion integration token  
- Your duplicated **Personal Finance System Notion template**

---

### How to customize the workflow  
You can extend this workflow to:  
- Track **credit card statements**, **subscriptions**, or **payroll notifications**.  
- Add **Slack or WhatsApp** alerts alongside Telegram.  
- Include **live FX rates** for USD→INR conversion using an API node.  
- Connect **Google Sheets** as a backup ledger or export target.  
- Add **error-handling branches** to mark Gmail messages as processed or label them “Logged to Notion”.

## 🔗 Nodes Used

Telegram, Gmail Trigger, AI Agent, Text Classifier, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
