# 💬 Route Telegram customer complaints with OpenAI and Google Sheets

> ⚡ **45 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow handles customer order complaints submitted via Telegram by looking up order details in Google Sheets, using OpenAI to classify message sentiment, and routing each case to auto-approval, support lead review, warehouse investigation, or ops manager escalation, with logging and Slack error alerts.

## How it works
1. Triggers when a customer sends a Telegram message containing an order ID and complaint text.
2. Looks up the order in Google Sheets and checks the customer’s prior complaints in the Complaints Log tab.
3. Determines the likely issue type (wrong item vs damaged/missing), flags repeat offenders, and calculates order value and liability indicators.
4. Sends the complaint text to OpenAI (gpt-4o-mini) to classify sentiment and combines sentiment with the other signals to choose a routing path.
5. If auto-approved, appends the case to Google Sheets, confirms the replacement to the customer on Telegram, waits 3 days, and sends a Telegram feedback request.
6. If escalated, notifies the appropriate party on Telegram (support lead with approve/reject buttons, warehouse team for damaged/missing checks, or ops manager for repeat offenders) and logs the case to Google Sheets, including an additional ops alert if a packer has 3+ related complaints in the last week.
7. Triggers again when the support lead taps an inline button in Telegram, updates the matching Google Sheets log row as approved, and notifies the customer and the approver via Telegram.

## Setup
1. Create a Telegram bot and add Telegram Bot API credentials in n8n for the Telegram trigger and message nodes.
2. Add an OpenAI API credential for the sentiment classification step (model: gpt-4o-mini).
3. Add Google Sheets OAuth2 credentials and create a spreadsheet with two tabs named Orders and Complaints Log using the required columns, then replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes.
4. Replace YOUR_SUPPORT_LEAD_CHAT_ID, YOUR_WAREHOUSE_CHAT_ID, and YOUR_OPS_MANAGER_CHAT_ID with the correct Telegram chat IDs used for internal notifications.
5. Add Slack OAuth2 credentials and set YOUR_SLACK_CHANNEL_ID for workflow error alerts.
6. Activate both Telegram triggers (customer message intake and support lead callback query listener).

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
