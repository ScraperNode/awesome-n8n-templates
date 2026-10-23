# ⚒️ Predict transformer overload risk and send alerts via HTTP APIs, email, and Slack

> ⚡ **4 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs every 15 minutes to fetch transformer load, temperature, and 30-day historical data via HTTP APIs, calculates an overload risk score and projected time-to-overload, and sends an early warning email via SMTP when risk is High or Critical.

## How it works
1. Runs every 15 minutes on a schedule trigger.
2. Sets the target transformer metadata (ID, substation, and rated capacity) used in downstream requests and calculations.
3. Calls three HTTP APIs in parallel to retrieve real-time load, temperature/environmental readings, and 30-day historical load and incident data for the transformer.
4. Combines the three datasets into a single record, then briefly waits to buffer before analysis.
5. Calculates load percentage, temperature and trend-based subscores, an overall 0–100 risk score, a risk level, and an estimated hours-to-overload prediction.
6. If the risk level is High or Critical, waits for a short cooldown period and then sends an alert email with the risk level and score; otherwise, it ends without sending an alert.

## Setup
1. Configure HTTP Header Auth credentials for the three HTTP requests and replace the example API base URLs with your SCADA/sensor/history endpoints.
2. Configure an SMTP credential for sending email and update the from/to addresses (and any email body settings you want to include).
3. Update the transformer ID, substation, and rated capacity values to match your asset, or extend the workflow to loop over multiple transformer IDs.
4. Adjust the schedule interval and the scoring thresholds in the JavaScript risk calculation to match your operating limits and alerting policy.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
