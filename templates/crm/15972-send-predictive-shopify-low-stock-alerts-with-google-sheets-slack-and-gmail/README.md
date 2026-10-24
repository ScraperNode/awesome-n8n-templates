# 🤝 Send predictive Shopify low-stock alerts with Google Sheets, Slack, and Gmail

> ⚡ **33 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily to calculate Shopify product sales velocity, predict days until stockout, and alert on low inventory. It logs alerted variant IDs to Google Sheets to avoid duplicate notifications, then sends a Slack summary and a detailed HTML email via Gmail, with Slack error alerts.

## How it works
1. Runs every day at 7:00 AM UTC on a schedule.
2. Loads configuration values and reads the existing alert log from Google Sheets for deduplication.
3. Fetches recent paid Shopify orders from the configured lookback window and retrieves all active Shopify products and variants with inventory tracking.
4. Calculates per-variant daily sales velocity, estimates days of stock remaining, categorizes urgency, and skips variants already alerted for the current UTC date.
5. Appends the newly alerted variant IDs and run metadata to Google Sheets as an alert log.
6. Posts a Slack message with the urgency breakdown and predicted depletion timelines.
7. Generates an HTML table report and sends it to the configured recipient using Gmail.
8. If the workflow fails at any point, sends the failed node name and error message to Slack via the global error trigger.

## Setup
1. Connect Shopify OAuth2 credentials in n8n and ensure your store has access to Orders and Products APIs.
2. Create a Google Sheet with headers `runTimestamp`, `variantIds`, and `totalVariantsAlerted`, connect Google Sheets OAuth2 credentials, and paste the sheet URL into the configuration.
3. Connect Slack API credentials, set the Slack channel ID in the configuration (and select a channel for the error-alert Slack node), and connect Gmail OAuth2 credentials for sending email.
4. Update `daysToCalculateVelocity`, `recipientMail`, `googleSheetUrl`, and `slackEscalationChannel` in the configuration, then adjust the schedule time if needed.

## Requirements
- **n8n Version:** 2.20 or higher
- **Shopify Store:** An active Shopify store with API access
- **Accounts Needed:** Shopify, Google Sheets, Gmail, Slack
- **Google Sheet:** Set up in advance with the 3 required column headers (see Step 2 above)

## Customization
- **Adjust the Velocity Window:** Change the `daysToCalculateVelocity` in the config node (e.g., to 14 or 30 days) if you sell slower-moving goods and need a wider average.
- **Tweak Urgency Thresholds:** Open the `Calculate Velocity & Depletion` node and modify the `THRESHOLDS` variable to match your supply chain lead times (e.g., change "Critical" from 2 days to 14 days if your supplier takes two weeks to ship).
- **Send to More People:** Add multiple emails to the Gmail node separated by commas, or use a distribution email address.
- **Automate Reorders:** Add a Shopify node to the end of the workflow to automatically create a "Draft Order" for any items that hit the Critical threshold.

## 🔗 Nodes Used

Google Sheets, Slack, Shopify, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
