# ⚒️ Reroute delayed shipments with OpenAI, Google Sheets, Telegram, Slack, and Gmail

> ⚡ **20 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs every 30 minutes to detect delayed shipments from Google Sheets, sends a delay summary to Telegram, uses OpenAI to recommend alternate routes from a routing API, requests approval in Slack when needed, updates the carrier TMS via HTTP, notifies via Gmail, and logs outcomes Sheets and Slack

## How it works
1. Runs every 30 minutes on a schedule trigger.
2. Reads active shipments from Google Sheets and identifies delayed ones by comparing Promised Delivery vs Current ETA (or a “delayed” status), then calculates delay hours.
3. Builds a delay summary and sends a Telegram alert when at least one delayed shipment is found.
4. For each delayed shipment, calls a routing HTTP API to fetch alternate routes and sends the shipment + route options to OpenAI (gpt-4o-mini) to get a structured reroute recommendation.
5. If the AI flags the decision as requiring approval, sends an interactive Slack approval request and waits for an approve/reject response.
6. For approved (or auto-approved) reroutes, calls the carrier TMS HTTP API to update the route, updates the shipment record in Google Sheets, emails the customer via Gmail, and posts a confirmation to Slack.
7. For rejected reroutes, marks the shipment as escalated for manual review in Google Sheets and notifies the ops Slack channel.

## Setup
1. Add credentials for Google Sheets OAuth2, OpenAI, Telegram Bot API, Slack OAuth2, and Gmail OAuth2.
2. Update the Google Sheets document ID and ensure the “Active Shipments” sheet exists with columns like Shipment ID, Customer, Customer Email, Carrier, Origin, Destination, Promised Delivery, Current ETA, Status, and Priority.
3. Replace the routing API and carrier TMS API base URLs in the two HTTP Request nodes and configure the required HTTP header auth credentials/headers.
4. Set your Telegram chat ID and Slack channel ID(s) used for approvals and ops notifications.
5. Update the Gmail recipient mapping (the template uses a placeholder email) to send to each shipment’s Customer Email field.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
