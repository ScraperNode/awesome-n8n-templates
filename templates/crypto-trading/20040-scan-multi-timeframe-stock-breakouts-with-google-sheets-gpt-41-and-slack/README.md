# 📈 Scan multi-timeframe stock breakouts with Google Sheets, GPT-4.1 and Slack

> ⚡ **1 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs daily to scan a Google Sheets watchlist for active tickers, fetches daily and weekly OHLCV data via an HTTP API, uses OpenAI to summarize confirmed multi-timeframe breakouts, logs signals back to Google Sheets, and posts formatted alerts to a Slack channel.

## How it works
1. Runs every 24 hours on a schedule trigger.
2. Reads the breakout watchlist from Google Sheets and keeps only symbols marked active.
3. For each active symbol, requests daily OHLCV data from an HTTP endpoint and stores it alongside the symbol metadata.
4. Requests weekly OHLCV data, normalizes daily/weekly series into a single structure, and calculates daily and weekly breakout direction using recent support/resistance and volume thresholds.
5. Continues only when the workflow’s multi-timeframe confirmation flag indicates the daily and weekly signals are aligned.
6. Sends the confirmed signal details to OpenAI to generate a JSON analysis (confidence, narrative, key confirmation, and risk note) and normalizes the response into a consistent format.
7. Appends the confirmed breakout, metrics, and AI narrative to a Google Sheets log and posts a detailed alert message to Slack.

## Setup
1. Create or select a Google Sheets spreadsheet with a Watchlist sheet (including at least symbol and active columns) and a Breakout Signals sheet with the logging columns used by the append step.
2. Add Google Sheets OAuth credentials and update the spreadsheet ID and sheet tabs in the read and append steps if you use a different document.
3. Set the daily/weekly market data HTTP endpoint URL and ensure it returns OHLCV arrays with fields like high, low, close, and volume.
4. Add an OpenAI API credential (LangChain OpenAI node) and optionally adjust the model and prompt to match your analysis requirements.
5. Add Slack credentials, choose the destination channel, and update the channel selection if you want alerts posted elsewhere.

## Additional info
## Troubleshooting Guide

| Issue                                | Possible Cause                                                    | Solution                                                               |
| ------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------------- |
| No symbols are processed             | Watchlist records are inactive                                    | Set `active` to `true`, `1`, or `yes`                                  |
| A watchlist symbol is ignored        | Symbol field is empty                                             | Add a valid value to the `symbol` column                               |
| Daily breakout is not detected       | Less than 21 daily records are available                          | Provide at least 21 daily OHLCV records                                |
| Weekly breakout is not detected      | Less than 13 weekly records are available                         | Provide at least 13 weekly OHLCV records                               |
| Daily breakout never triggers        | Close does not exceed resistance or volume is below 1.5x          | Verify the OHLCV data and breakout parameters                          |
| Weekly breakout never triggers       | Close does not exceed support/resistance or volume is below 1.5x  | Verify weekly OHLCV data and configured threshold                      |
| HTTP Request fails                   | Dummy API URL is unavailable                                      | Verify the webhook URL and n8n endpoint                                |
| Market data is empty                 | API response does not contain the expected data structure         | Verify that the response contains `data` or `body.data`                |
| Breakout data is incomplete          | OHLCV fields are missing or invalid                               | Verify `high`, `low`, `close`, and `volume` values                     |
| AI analysis does not continue        | Signal did not pass the confirmation branch                       | Check the output of `Check Multi Timeframe Confirmation`               |
| AI output is not parsed              | OpenAI returned an unexpected response                            | Review `Normalize AI Analysis` and the raw OpenAI response             |
| AI confidence is zero                | AI response was unavailable or did not contain a confidence score | Check OpenAI credentials and response structure                        |
| Google Sheets logging fails          | Credential or sheet configuration is incorrect                    | Verify Google Sheets credentials, spreadsheet, sheet name, and columns |
| Slack notification is not received   | Slack credential or channel configuration is incorrect            | Verify Slack credentials and destination channel                       |
| Slack message contains N/A values    | Required fields were not available upstream                       | Inspect the output of `Log Confirmed Breakout` and previous nodes      |
| Workflow runs but produces no alerts | No symbols passed the multi-timeframe confirmation logic          | Review daily and weekly signal outputs                                 |
| Workflow runs only manually          | Workflow is not active                                            | Activate the workflow after testing                                    |


## Important Configuration Notes

The workflow currently uses a **dummy market-data API** rather than a live financial-market data provider.

The configured endpoint is:

```text
http://192.168.101.63:5678/webhook-test/dummy-market-data
```

Before using the workflow with live market data, replace this endpoint with an appropriate market-data service and update the HTTP Request and normalization logic according to that API's response format.

The workflow should be tested with representative market data before being used for operational monitoring.

The workflow itself does not execute trades. It detects and analyzes breakout conditions and sends notifications.


## Need help setting up or customizing this n8n workflow?

**WeblineIndia** can help with:

* n8n workflow implementation
* Real market-data API integration
* Google Sheets integration
* OpenAI workflow integration
* Slack notification setup
* Technical-indicator implementation
* Workflow debugging
* Error handling
* Database integration
* Workflow optimization
* Custom trading and market-monitoring automation
* Additional workflow add-ons and integrations

If you need a similar business automation workflow built or want to extend this breakout scanner for your specific process, **WeblineIndia can help design, implement, test and customize the complete n8n automation.**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
