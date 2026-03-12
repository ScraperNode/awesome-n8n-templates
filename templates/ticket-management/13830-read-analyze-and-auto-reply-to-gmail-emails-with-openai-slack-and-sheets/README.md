# 🎫 Read, analyze, and auto-reply to Gmail emails with OpenAI, Slack, and Sheets

> ⚡ **79 views** · 🎫 [Ticket Management & Triage](../)

## Description

A fully automated, AI-powered email assistant built in n8n that reads incoming emails, understands their intent and sentiment, classifies them by category, drafts intelligent context-aware replies, and sends them automatically — all without any human intervention. Built using OpenAI + Gmail/SMTP integration for any business or team.


### 🎯 What's the Goal?
Replace slow, manual email handling with an always-on AI email assistant that reads every incoming message, understands what the sender needs, and responds instantly with a professional, personalized reply — escalating only when truly necessary.


### 💡 Why Does It Matter?
Email overload is one of the biggest productivity killers for businesses. Teams spend hours every day reading, triaging, and replying to repetitive messages — support requests, meeting inquiries, sales questions, and more. This workflow automates the entire cycle: inbox → understand → reply → log → escalate, saving hours per day while improving response times from hours to seconds.


### ⚙️ How It Works
1. Gmail trigger polls inbox for new unread emails
2. Email content (subject + body) is extracted and cleaned
3. AI classifies email: Support / Sales / Meeting / Complaint / Spam / General
4. Sentiment is analyzed: Positive / Neutral / Negative / Urgent
5. AI drafts a professional, context-aware reply based on classification
6. If sentiment is Urgent or Negative → escalate to human via Slack
7. If routine → auto-send reply via Gmail
8. Email thread logged to Google Sheets (sender, category, sentiment, reply)
9. Slack notification sent with summary for team awareness
10. Label applied in Gmail for organization & tracking


### 🔧 Configuration Requirements
- **Gmail OAuth2** (for reading inbox and sending replies)
- **OpenAI API key** (for classification, sentiment & reply generation)
- **Google Sheets OAuth2** (for email log & analytics)
- **Slack Bot Token** (for escalation alerts & team summaries)
- **Optional: SMTP credentials** (if using non-Gmail provider)
- **Optional: CRM webhook** (to sync contacts & interactions)


### 🚀 Setup Guide
1. Import this workflow into your n8n instance
2. Connect credentials: Gmail OAuth2, OpenAI, Google Sheets, Slack
3. Open the **Set Email Config** node and configure:
   - `check_interval_minutes` — how often to poll inbox (recommended: 5)
   - `auto_reply_categories` — which categories to auto-reply (e.g. Support, General)
   - `escalate_categories` — which to escalate (e.g. Complaint, Urgent)
   - `sender_name` — your name or business name for reply signature
   - `log_sheet_id` — Google Sheets document ID for logging
   - `slack_channel` — channel name for escalation alerts
4. Customize reply templates in the **Set Reply Templates** node
5. Run a test with a sample email using the manual trigger
6. Verify reply quality in Gmail Sent folder
7. Check Google Sheets log for the entry
8. Activate workflow — it will now monitor inbox automatically
9. Monitor escalation volume in Slack and tune thresholds weekly

### 📞 Contact Us
Need help setting up or customizing this workflow for your business?
👉 https://www.oneclickitsolution.com/contact-us/

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
