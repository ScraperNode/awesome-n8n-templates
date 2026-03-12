# 🤝 Log new Gmail messages automatically in Google Sheets

> ⚡ **355 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 🧑‍💻 Description
This workflow automatically **fetches new Gmail messages since the last run** and appends them into a **Google Sheet** with their ID, snippet, and timestamp.  

It’s designed for **professionals, small business owners, and operations teams** who need a simple way to keep an ongoing log of emails, build lightweight CRMs, or power downstream automations like **email tracking, reporting, or follow-up reminders**.

---

## ⚙️ Setup Instructions for Gmail → Google Sheets Email Log

### 1️⃣ Connect Gmail
1. In **n8n → Credentials → New → Gmail OAuth2**  
2. Log in with your Gmail account & approve access  
3. Attach this credential to the **Get new messages** node in the workflow  

### 2️⃣ Connect Google Sheets
1. Copy this [Google Sheet template](https://docs.google.com/spreadsheets/d/1t5VXtbo9g7SvGDPmeZok4HG1K-WI1PS0DNBylzmhVwg/edit?usp=drivesdk) into your own Drive  
2. In **n8n → Credentials → New → Google Sheets (OAuth2)** → log in with your Google account & save  
3. In the workflow, select your Spreadsheet ID and Worksheet (Sheet1 by default) in the **Google Sheets nodes**  

---

## 🧠 How Email Logging Automation Works
- **Get Current Emails** → Reads the last logged messages from Google Sheets  
- **Get Max Date** → Finds the most recent email timestamp  
- **Combine** → Passes the last timestamp and today’s date together  
- **Get New Messages** → Fetches all new Gmail messages after the last logged date  
- **Add Emails to Sheets** → Appends message ID, snippet, and date to the sheet  

---

## 🎛️ Customization Guidance
- **Filter by Sender or Subject** → Modify the Gmail query to only log messages from specific addresses or with certain keywords.  
- **Track Labels** → Add Gmail labels to your sheet to separate categories (e.g., “Leads,” “Support,” “Invoices”).  
- **Auto-Reply** → Extend with an additional Gmail node to send automated responses to new messages.  
- **Send Alerts** → Add a Slack or Email node to ping your team whenever a new email is logged.  
- **Analytics** → Use Google Sheets formulas or connect to BI tools to analyze trends like response times or sender frequency.  

---

## 📬 Contact
Need advanced customization (e.g., multi-inbox tracking, CRM integration, or automated follow-ups)?

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Google Sheets, Gmail, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
