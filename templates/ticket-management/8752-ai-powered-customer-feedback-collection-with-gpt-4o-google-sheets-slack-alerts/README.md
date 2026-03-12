# 🎫 AI-powered customer feedback collection with GPT-4o, Google Sheets & Slack alerts

> ⚡ **73 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Description
Automatically send personalized customer feedback requests once a support ticket is marked as closed and centralize responses for service quality tracking. Uses Google Sheets as the ticket source, filters only resolved tickets, and delivers tailored survey invitations via Gmail. Ensures timely, relevant outreach while reducing manual follow-ups. 📧✨

## What This Template Does
- Fetches support ticket data from a Google Sheets database (“Ticket status dummy”). 📊
- Filters for tickets where Status = closed only. 🎯
- Sends a personalized feedback request email via Gmail, including ticket details (ID, subject, customer name). 💌
- Provides a dynamic link to your survey form (Typeform/Google Form). 🔗
- Runs on manual trigger (can be scheduled/automated later). ▶️

## Key Benefits
- Targeted communication — only resolved tickets receive surveys.
- Personalized emails — includes customer name + ticket details.
- Zero manual work — feedback requests are automatically generated.
- Quality insights — structured process for customer satisfaction measurement.
- Improved experience — timely outreach builds trust and engagement. 🌟

## Features
- Smart filtering for closed tickets only. 🛡️
- Dynamic Gmail email templates with emojis + survey link. 💬
- Google Sheets integration for centralized ticket management. 📂
- Fully customizable email subject, body, and survey form. ✍️
- Manual trigger for testing; can be extended with schedules/webhooks. ⏱️

## Requirements
- n8n instance (cloud or self-hosted).
- Google Sheets with ticket data (must include: Status, Ticket No., Description, Email, Owner).
- Gmail account connected via OAuth2 credentials.
- Survey form (Typeform/Google Form) with accessible link.
- Target Audience
- Customer Support Teams seeking structured feedback. 🛎️
- HR & Internal IT Teams using ticket-based systems (Keka, Google Sheets). 👥
- Managers wanting data-driven insights into support quality. 📈
- Businesses committed to continuous service improvement. 🚀


## Step-by-Step Setup Instructions
- Prepare Google Sheet with required columns: Status, Ticket No., Description, Email, Owner.
- In n8n, connect Google Sheets and Gmail credentials.
- Update the Gmail node with your survey link.
- Import workflow JSON and assign credentials to nodes.
- Run Manual Trigger to test → verify email delivery.
- Extend automation with schedules or webhooks for ongoing campaigns.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
