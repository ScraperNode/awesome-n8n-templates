# 📱 Daily govt exam quiz by Gopal Debnath (mrtechyguru)

> ⚡ **512 views** · 📱 [Social Media & Email Marketing](../)

## Description

💡 How It Works:

1. ⏰ Triggers daily at 6:00 AM


2. 📊 Fetches one random question from your Google Sheet


3. 🧠 Formats question, options, correct answer, and explanation


4. 📤 Sends it to:

📧 Email

💬 Telegram (via Bot)

📱 WhatsApp/SMS (via Twilio)





---

🔧 What You Need to Configure:

YOUR_GOOGLE_SHEET_ID → your sheet with columns: question, optionA, optionB, optionC, optionD, correctAnswer, explanation

Email credentials (SMTP)

Telegram Bot Token & Chat ID

Twilio phone numbers and credentials

## 🔗 Nodes Used

Cron, Send Email, Function, Google Sheets, Twilio, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
