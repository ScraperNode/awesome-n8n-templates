# 💬 Interactive recruitment customer service with WhatsApp, Google Sheets CRM

> ⚡ **336 views** · 💬 [Support Chatbots](../)

## Description

# 👔 Recruitment Office WhatsApp Automation

Automate WhatsApp communication for recruitment agencies with an interactive, structured customer experience. This workflow handles pricing inquiries, request submissions, tracking, complaints, and human escalation while maintaining full session tracking and media support.

## Good to know

- Uses WhatsApp Interactive List Messages for user selection and navigation.
- Includes session-state logic and memory across messages.
- Includes a 5-minute cooldown to avoid spam and repeated triggers.
- Supports logging for all interaction types including media files.
- Includes both a global bot shutdown switch and per-user override.

## How it works

- A customer sends a message to the official WhatsApp number.
- The workflow replies with an interactive menu containing 8 service options:
  - 💰 Pricing by nationality (8 supported countries)
  - 📝 New recruitment request submission
  - 🔍 Tracking existing applications via Google Sheets lookup
  - 🔁 Worker transfer link distribution
  - 🌍 Translation service information
  - 📄 Required documents and instructions
  - ⚠️ Complaint submission and routing
  - 👤 Request a human agent
- The workflow retrieves or stores data based on the selection using Google Sheets and Data Tables.
- If the customer requests human help or the logic detects uncertainty, the workflow:
  - Pauses automation for that user
  - Notifies a designated staff member
- All interactions are logged including files, text, timestamps, and selections.

## Features

- 📋 Structured WhatsApp service menu
- 📄 CRM-style recruitment request logging
- ✨ Pricing logic with nationality mapping
- 🔍 Lookup-based status tracking
- 📎 Support for media uploads (PDF, images, audio, documents)
- 🧠 Session tracking with persistent user state
- 🤝 Human escalation workflow with internal notifications
- 🛑 Anti-spam and cooldown control
- 🎚 Bot master switch (global + per-user)

## Technology stack

| Component | Usage |
|----------|-------|
| n8n | Automation engine |
| WhatsApp Business API | Messaging and interactive UX |
| Google Sheets | CRM and logs |
| Data Tables | State management |
| JavaScript | Custom logic and routing |

## Requirements

- WhatsApp Business API account with active credentials
- n8n Cloud or self-hosted instance
- Google Sheets for CRM storage
- Data Tables enabled for persistent session tracking

## How to use

- The workflow uses a Webhook trigger compatible with common WhatsApp API providers.
- Modify menu content, pricing, optional steps, and escalation flows as needed.
- Link your Google Sheets and replace test sheet IDs with production values.
- Configure human escalation to notify team members or departments.

## Customising this workflow

- Replace Google Sheets with Airtable, HubSpot, or SQL storage.
- Add expiration and reminder messages for missing documents.
- Add AI-powered response logic for common questions.
- Enable multi-country support (Saudi/UAE/Jordan/Qatar/Kuwait/etc.)
- Connect to dashboards for reporting and staff performance analytics.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
