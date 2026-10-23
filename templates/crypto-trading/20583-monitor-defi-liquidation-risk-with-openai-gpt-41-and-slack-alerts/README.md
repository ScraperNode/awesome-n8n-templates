# 📈 Monitor DeFi liquidation risk with OpenAI GPT-4.1 and Slack alerts

> ⚡ **13 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every 10 minutes to monitor a DeFi lending position by fetching position and price data via HTTP, calculating liquidation risk metrics, logging results to Google Sheets, and sending AI-written Slack alerts (via OpenAI) when the risk level changes or escalates.

## How it works
1. Runs every 10 minutes on a schedule.
2. Loads the monitoring configuration, including the lending position API URL and the asset price API URL.
3. Fetches the current lending position via HTTP and continues only if collateral amount, debt amount, and liquidation threshold are greater than zero.
4. Fetches the live collateral asset price via HTTP and continues only if the USD price is greater than zero.
5. Calculates health factor, estimated liquidation price, and distance to liquidation, then classifies the position risk level and determines whether an alert is required based on the previous risk level.
6. Appends each monitoring result to a Google Sheets “Monitoring History” worksheet.
7. When an alert is required, OpenAI generates a concise risk summary which is posted to a Slack channel and recorded in a Google Sheets “Alert History” worksheet.

## Setup
1. Provide reachable HTTP endpoints for the lending position API and the asset price API, then update the two URLs (and any threshold values) in the configuration step.
2. Add Google Sheets credentials and select the target spreadsheet and worksheets for “Monitoring History” and “Alert History.”
3. Add an OpenAI API credential and ensure the selected model is available in your OpenAI account.
4. Add Slack credentials and set the destination channel for liquidation risk alerts.
5. Adjust the schedule interval if you want a different monitoring cadence.

## Additional info
## How To Customize Nodes

* `Schedule Monitoring Cycle`: Change the monitoring frequency from the current 10-minute interval.
* `Load Monitor Configuration`: Change API endpoints and health factor thresholds.
* `Calculate Risk Metrics`: Modify the liquidation-risk calculations if the position data model changes.
* `Classify Liquidation Risk`: Adjust risk-level boundaries and alert escalation behavior.
* `Generate Risk Alert Message`: Customize the OpenAI prompt or selected model while keeping the supplied risk data as the source of truth.


## Add-ons

The following are optional extensions and are not part of the current workflow:

* Email fallback alerts when Slack delivery fails.
* Additional lending positions so multiple wallets or positions can be monitored.
* Separate Google Sheets reporting for daily or weekly risk summaries.
* Historical health-factor trend analysis.
* Additional notification channels for critical or breached liquidation states.


## Use Case Examples

1. **Collateral Monitoring:** Track an ETH-backed lending position and identify declining health factor levels.
2. **Risk Escalation Alerts:** Notify a Slack channel when a position moves from a safe state into a warning or higher-risk state.
3. **Liquidation Distance Tracking:** Store current price, estimated liquidation price, and liquidation distance for historical review.
4. **Operational Risk History:** Maintain a Google Sheets record of every monitoring cycle for later analysis.
5. **AI Risk Summaries:** Convert calculated risk metrics into concise, human-readable alert messages.

Additional use cases may be possible through customization.


## Troubleshooting Guide

| Issue                         | Possible Cause                                                                         | Solution                                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| No lending position data      | The configured position API endpoint is unavailable or returns an unexpected structure | Verify `position_api_url` and confirm the response contains collateral amount, debt amount, and liquidation threshold |
| Market price validation fails | The price response does not contain a positive `price_usd` value                       | Verify the configured price API and its response structure                                                            |
| Health factor is incorrect    | Position fields or liquidation threshold do not match the expected data format         | Review the response fields used by `Calculate Risk Metrics`                                                           |
| No Slack notification         | `alert_required` is false or Slack credentials/channel configuration is incorrect      | Check the risk classification and verify Slack configuration                                                          |
| AI message is not normalized  | The OpenAI response does not contain the expected text structure                       | Review the OpenAI output and the parsing logic in `Normalize AI Risk Alert`                                           |
| Google Sheets logging fails   | Spreadsheet credentials, sheet selection, or column mappings are incorrect             | Verify Google Sheets credentials, selected sheets, and required column names                                          |


## Need Help?

WeblineIndia can assist with workflow setup, API and credential configuration, Google Sheets and Slack integration, workflow customization, troubleshooting, optional add-ons and development of similar [n8n automation workflows](https://www.weblineindia.com/n8n-automation/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
