# 🎫 Log Twilio SMS delivery statuses to Google Sheets and alert Slack on failures

> ⚡ **5 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives Twilio SMS status callbacks, logs each delivery status (including decoded error reasons) to Google Sheets, and posts an alert to Slack when a message is marked failed or undelivered.

## How it works
1. Receives a POST webhook from Twilio each time an SMS message status changes.
2. Maps known Twilio error codes to human-readable failure reasons and extracts the message SID, recipient number, status, and error code from the callback.
3. Appends a new row to Google Sheets to create a complete delivery-status ledger for every callback event.
4. Checks whether the message status is failed or undelivered.
5. Posts a formatted failure alert to a Slack channel when a delivery failure is detected.
6. Responds to Twilio with an HTTP 200 so Twilio stops retrying the callback.

## Setup
1. Create a Google Sheet with columns received_at, message_sid, to_number, message_status, error_code, and failure_reason, and add Google Sheets OAuth2 credentials in n8n.
2. Add Slack credentials in n8n and choose the target channel for failure alerts.
3. Update the Google Sheets spreadsheet ID and sheet tab name, and set the Slack channel name in the workflow nodes.
4. Activate the workflow, copy the production webhook URL, and configure it as the StatusCallback URL in Twilio for your messages.

## Requirements
- A Twilio account with at least one SMS-capable number. No Twilio credential is needed in n8n, because Twilio calls in rather than the other way around.
- A Google account with edit access to the ledger spreadsheet.
- A Slack workspace where the app can post to your alert channel.
- An n8n instance reachable from the public internet. Twilio POSTs the callback from outside, so a local or tunnel-only instance will not receive events in production.
- No AI model and no paid API beyond Twilio's own messaging costs.

## Customization
- Add error codes by adding one key and value to the map in Load Twilio Error Code Map. Unmapped codes still log and still alert, just without a friendly reason.
- Change what pages you by editing Check For Failed Delivery, which currently continues only on failed and undelivered.
- Send alerts somewhere else by swapping the Slack node for email, Teams, or Discord. The decoded reason is already on the item.
- Write the ledger to Postgres or Airtable instead of Google Sheets if you expect high volume.
- Build a daily rollup by reading the ledger tab on a schedule and counting statuses per day.

## Additional info
Twilio sends a callback on every state change, so one message usually produces several rows as it moves from queued to sent to delivered. The ledger is an event log rather than one row per message, so group by 'message_sid' for a per-message view. Only 'failed' and 'undelivered' reach Slack, and successful traffic stays silent. Six common error codes ship in the map (30003, 30005, 30006, 30007, 30008 and 21610), and anything outside that set is still recorded and still alerts. Two operational notes: the webhook is publicly reachable by design, so validate the 'X-Twilio-Signature' header or restrict the path to Twilio's IP ranges before trusting the payload in production, and leave the response node in place, because Twilio retries any callback that does not return a 200.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
