# 🎯 Capture and nurture fraud-proof leads with AI scoring, sheets tracking & multi-channel alerts

> ⚡ **189 views** · 🎯 [AI Summarization & Classification](../)

## Description

## 1. Who's It For
- Ad agencies needing **automated lead capture**.
- Sales teams fighting **fraud** and scoring leads.
- B2B SaaS companies nurturing **prospects**.
- Marketing pros boosting **sales pipelines**.

## 2. How It Works
- Captures leads via **Webhook** from forms.
- Validates emails with **Verifi Email** node.
- Checks **IP** for fraud using **IP Lookup**.
- Scores leads (0-100) with **Function** node.
- Logs data in **Google Sheets**.
- Alerts sales via **Slack** for high scores.
- Sends **welcome email** via **Gmail**.
- Tracks email **opens** for engagement.
- Follows up after 24 hours if unopened.
- Updates **engagement scores**.
- Generates **weekly report** (leads, scores, avg.).
- Emails report to **sales head**.
- Offers: **fraud-proofing**, **AI scoring**, **nurturing**, **reporting**.

## 3. How to Set Up
- **1.** Link form to **Webhook** (POST to https://[your-n8n-url]/webhook/lead-capture).
- **2.** Install **Verifi Email** node (npm install n8n-nodes-verifiemail) on self-hosted n8n.
- **3.** Add credentials: **Verifi Email**, **Slack**, **Gmail**, **Google Sheets**.
- **4.** Set up **Set User Config** (e.g., score, channel, email).
- **5.** Adjust **Weekly Report** cron (default: Mondays 00:00 IST).
- **6.** Test with sample data (e.g., {"email": "test@example.com", "ip": "8.8.8.8"}).

## Requirements
- Self-hosted **n8n** (for **Verifi Email**).
- Credentials: **Verifi Email** key, **Slack** token, **Gmail**, **Google Sheets**.
- **Node.js** and **npm** for installation.
- Form to send data to **Webhook**.

## Core Features
- **Fraud Detection**: Email and IP validation.
- **Lead Scoring**: AI-driven quality assessment.
- **Automated Nurturing**: Personalized emails.
- **Real-Time Alerts**: Slack notifications.
- **Weekly Reporting**: Performance insights.

## Use Cases & Applications
- **Sales Teams**: Streamline lead follow-ups.
- **Marketing**: Enhance campaign tracking.
- **B2B SaaS**: Automate prospect nurturing.
- **Agencies**: Deliver client-ready reports.

## Key Benefits
- **Efficiency**: Automates manual tasks.
- **Accuracy**: Reduces fraud with validation.
- **Scalability**: Handles multiple leads.
- **Insight**: Weekly performance data.

## Customization Options
- Adjust **scoring** in **Function** node.
- Edit **email templates** in **Gmail**.
- Add **attachments** via **File** node.
- Change **cron** schedule.
- Integrate **CRM** with **HTTP Request**.

## Important Disclaimers
- For **educational** use only.
- Validate with your **risk tolerance**.
- Seek **professional advice** before use.
- Account for **market volatility**.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
