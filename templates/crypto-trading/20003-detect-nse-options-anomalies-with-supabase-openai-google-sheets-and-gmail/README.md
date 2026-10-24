# 📈 Detect NSE options anomalies with Supabase, OpenAI, Google Sheets and Gmail

> ⚡ **105 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every 30 minutes to scan an NSE options watchlist from Google Sheets, fetch option chain data via HTTP, compare it with historical snapshots in Supabase, generate an OpenAI interpretation for anomalies, log results to Google Sheets, and send a Gmail digest alert.

## How it works
1. Runs every 30 minutes on a schedule.
2. Reads a watchlist from Google Sheets and keeps only symbols marked as enabled, along with their scan settings.
3. Requests the latest option chain for each symbol from the configured HTTP endpoint and normalizes the returned contracts into a consistent structure.
4. Pulls historical option snapshot data for each symbol from Supabase and calculates volume ratio, open-interest ratio, and a z-score to flag anomalous contracts.
5. For anomalous contracts, saves the full option snapshot to Supabase and asks OpenAI to generate a concise plain-text interpretation with observation, possible interpretation, and a risk note.
6. Stores the AI-enriched anomaly record in a Supabase anomalies table, appends the anomaly to a Google Sheets log, and builds a single text digest.
7. Sends the digest email through Gmail to the configured recipient.

## Setup
1. Connect Google Sheets credentials and update the spreadsheet ID and sheet tabs for the watchlist and anomaly log.
2. Configure the HTTP request URL to point to your NSE option chain data source and ensure it returns the expected contract fields (symbol, expiry, strike, option_type, ltp, volume, open_interest, change_in_oi, iv, underlying_price, captured_at, source).
3. Connect Supabase credentials and create/configure the required tables (option_snapshots and option_anomalies) with columns matching the fields the workflow writes.
4. Add an OpenAI API credential (and adjust the model, if needed) for generating the anomaly interpretation.
5. Connect a Gmail OAuth credential and set the recipient email address in the email-sending step.

## Additional info
## Use Case Examples

### 1. NSE Options Activity Monitoring

Automatically monitor configured NSE symbols and identify contracts showing unusual volume, open interest, or statistical activity.

### 2. Unusual Volume Detection

Identify contracts where current volume is significantly higher than the configured historical baseline.

### 3. Open Interest Monitoring

Identify option contracts where current open interest exceeds the configured anomaly threshold.

### 4. Statistical Anomaly Monitoring

Use the calculated z score to identify option contracts whose activity differs significantly from the calculated historical pattern.

### 5. Automated Market Activity Reporting

Store detected anomalies in Supabase, maintain a Google Sheets log, generate AI explanations, and receive a consolidated Gmail report.

There can be many more use cases based on the available market data and the additional calculations or notification channels added to the workflow.


## Troubleshooting Guide

| Issue                                  | Possible Cause                                                           | Solution                                                                             |
| -------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| No symbols are processed               | Watchlist entries are disabled                                           | Check the `enabled` column and set the required symbols to `true`                    |
| Watchlist data is not loading          | Google Sheets credentials or sheet configuration is incorrect            | Verify the Google Sheets credential, document, worksheet, and column names           |
| HTTP Request returns no contracts      | The configured endpoint is unavailable or its response structure changed | Test the endpoint and verify that it returns the expected `data` collection          |
| Contract fields are empty              | The HTTP response does not match the expected structure                  | Compare the response fields with the fields required by `Normalize Option Contracts` |
| Historical data is missing             | Supabase table has insufficient records                                  | Verify that `option_snapshots` contains historical records for the scanned symbol    |
| No anomalies are detected              | Current values do not meet the configured thresholds                     | Review the volume ratio, OI ratio, and z score calculations                          |
| Too many anomalies are detected        | Thresholds are too low                                                   | Increase the anomaly thresholds in `Calculate Option Anomaly`                        |
| OpenAI interpretation is missing       | OpenAI credentials or response mapping may be incorrect                  | Verify the OpenAI credential, model configuration, and output field                  |
| Supabase anomaly record is not created | Supabase table or field mapping is incorrect                             | Verify the `option_anomalies` table and mapped fields                                |
| Google Sheets log is empty             | Spreadsheet mapping is incorrect                                         | Verify the anomaly log worksheet and column names                                    |
| Multiple emails are received           | The email node is receiving multiple items                               | Ensure `Build Email Alert Digest` combines the incoming items into one output item   |
| Gmail email contains no anomalies      | Email preparation fields are empty                                       | Check the output of `Build Email Alert Digest` before executing Gmail                |
| AI interpretation is not saved         | The OpenAI response field does not match the configured mapping          | Check the OpenAI node output and update the `ai_interpretation` mapping              |
| Workflow does not run automatically    | Workflow is inactive or schedule configuration is incorrect              | Activate the workflow and verify the schedule configuration                          |


## Need Help

Setting up an options monitoring workflow requires careful configuration of market data, historical calculations, database storage, AI processing and notification logic.

If you need help configuring this workflow, modifying anomaly detection rules, connecting a different market data source, improving the OpenAI analysis, creating dashboards, adding notification channels or building a similar n8n automation for your business process, the **WeblineIndia** team can help with setup, customization, integration and ongoing workflow improvements.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Supabase, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
