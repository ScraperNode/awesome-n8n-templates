# 💬 Monitor lead response time SLA breaches with Google Sheets & Telegram alerts

> ⚡ **170 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**Description**

Never miss a lead again with this SLA Breach Alert automation powered by n8n! This workflow continuously monitors your Google Sheets for un-replied leads and automatically triggers instant Telegram alerts, ensuring your team takes immediate action.

By running frequent SLA checks, enriching alerts with direct Google Sheet links, and sending real-time notifications, this automation helps prevent unattended leads, reduce response delays, and boost customer engagement.

**What This Template Does**

📅 Runs every 5 minutes to monitor SLA breaches
📋 Fetches lead data (status, contact, timestamps) from Google Sheets
🕒 Identifies leads marked “Un-replied” beyond the 15-minute SLA
🔗 Enriches alerts with direct Google Sheet row links for quick action
📲 Sends Telegram alerts with lead details for immediate response

**Step-by-Step Setup**
- Prepare Your Google Sheet
- Create a sheet with the following columns (minimum required):
  - Lead Name
  - Email
  - Phone
  - Status (values: Replied, Un-replied)
  - Timestamp (time of last update/reply)
- Set Up Google Sheets in n8n
  - Connect your Google account in n8n.
  - Point the workflow to your sheet (remove any hardcoded document IDs before sharing).
- Configure SLA Check
  - Use the IF node to filter leads where:
  - Status = Un-replied
    - Time since timestamp &gt; 15 minutes
- Enrich Alerts with Links
  - Add a Code node to generate direct row links to the sheet.
- Set Up Telegram Bot
  - Create a Telegram bot via @BotFather.
  - Add the bot to your team chat.
  - Store the botToken securely (remove chatId before sharing templates).
- Send Alerts
  - Configure the Telegram node in n8n to send lead details + direct Google Sheet link.

**Customization Guidance**
- Adjust the SLA window (e.g., 30 minutes or 1 hour) by modifying the IF node condition.
- Add more fields from Google Sheets (e.g., Company, Owner) to enrich the alert.
- Replace Telegram with Slack or Email if your team prefers a different channel.
- Extend the workflow to auto-assign leads in your CRM once alerted.

Perfect For
- Sales teams that need to respond to leads within strict SLAs
- Support teams ensuring no customer request is ignored
- Businesses aiming to keep lead response times sharp and consistent

## 🔗 Nodes Used

Cron, Google Sheets, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
