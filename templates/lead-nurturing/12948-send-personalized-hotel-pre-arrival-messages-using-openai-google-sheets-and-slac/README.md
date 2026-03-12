# 💬 Send personalized hotel pre-arrival messages using OpenAI, Google Sheets and Slack

> ⚡ **83 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Description
This workflow automates a personalized pre-arrival guest experience for hotels by combining Google Sheets, OpenAI, Email, and Slack. It detects upcoming check-ins, maintains unified guest profiles for new and returning guests, and sends warm, AI-generated welcome messages exactly 2 days before arrival, ensuring a premium, consistent experience without manual effort.

⚠️ Deployment Disclaimer
 This workflow is intended for self-hosted n8n instances.

⚙️ What This Workflow Does (Step-by-Step)
 ▶️ Scheduled Daily Trigger
 Runs automatically each day to process upcoming arrivals.
📄 Fetch Guest Profiles (Google Sheets)
 Loads guest reservations and existing guest history from the source of truth.
👤 Guest Profile Handling
 Merges data for returning guests or creates a new profile for first-time visitors.
⏰ Pre-Arrival Window Check
 Calculates days until check-in and filters guests arriving within 2 days only.
🤖 AI Welcome Message Generation
 Uses OpenAI to generate short, personalized pre-arrival messages based on preferences, allergies, and special occasions.
📬 Multi-Channel Delivery
 Sends the message via Slack (if available) or Email and logs all messages to Google Sheets.
🗂 Profile & Message Logging
 Updates guest profiles and stores sent messages for tracking and audit.
🚨 Error Monitoring
 Any workflow failure triggers an immediate Slack alert.

🧩 Prerequisites
 • Google Sheets OAuth2
 • OpenAI API key
 • Slack API access
 • SMTP email credentials
 • Self-hosted n8n recommended

💡 Key Benefits
 ✔ Personalized pre-arrival communication
 ✔ Zero manual guest follow-ups
 ✔ Unified guest profiles (new + returning)
 ✔ Timed, non-spammy outreach
 ✔ Full logging and error visibility

👥 Perfect For
-  Hotels & resorts
-  Boutique hospitality brands
-  Property managers
-  Guest experience teams

## 🔗 Nodes Used

Send Email, Function, Google Sheets, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
