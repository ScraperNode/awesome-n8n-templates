# 📈 Detect dividend yield traps with Google Sheets, Supabase, OpenAI, Slack, and Gmail

> ⚡ **2 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs weekly to scan a Google Sheets dividend watchlist, pulls upcoming ex-dividend and fundamentals data via HTTP requests, scores yield-trap risk, uses OpenAI to explain high-risk candidates, stores results in Google Sheets and Supabase, and sends a digest to Slack and Gmail.

## How it works
1. Runs weekly on a schedule trigger.
2. Reads the stock watchlist from Google Sheets and keeps only rows marked as enabled.
3. Fetches upcoming ex-dividend events from an HTTP endpoint and filters them to enabled symbols with ex-dividend dates in the next 7 days.
4. Fetches dividend fundamentals from an HTTP endpoint, merges them with the calendar candidates, and calculates a dividend sustainability score, a yield-trap risk score/level, and a list of red-flag conditions.
5. For candidates with a risk score of 60 or higher, OpenAI generates a short JSON explanation (caution note, key concern, investor question) based only on the supplied metrics.
6. Logs flagged candidates to a Google Sheets “Risk Results” tab and inserts the full analysis record into a Supabase table, then compiles a sorted weekly risk digest.
7. Sends the weekly digest to a Slack channel and to a Gmail recipient, or sends a “no-risk” digest if no candidates meet the risk threshold.

## Setup
1. Create and connect Google Sheets credentials, then update the Spreadsheet ID and ensure the Watchlist sheet includes at least symbol and enabled columns (plus optional company_name, sector, and notes).
2. Configure the dividend calendar and fundamentals HTTP endpoints (replace the mock URLs) so they return the expected fields (for example symbol, ex_dividend_date, dividend_yield, payout_ratio, earnings_growth, revenue_growth, dividend_growth, and dividend_cuts_last_5_years).
3. Add Supabase credentials and ensure a dividend_risk_analysis table exists with columns matching the fields being inserted.
4. Add an OpenAI API credential and confirm the selected model is available for generating the high-risk explanations.
5. Add Slack and Gmail credentials, then set the target Slack channel and recipient email address for the weekly digest.

## Additional info
## How To Customize Nodes

### Watchlist Configuration

Modify the `Read Dividend Watchlist` and `Prepare Watchlist Context` nodes if the spreadsheet structure changes.

The enabled-record logic is contained in `Prepare Watchlist Context`.

### Dividend Data Sources

Modify `Get Upcoming Ex-Dividend Data1` and `Get Dividend Fundamentals1` when replacing the configured HTTP endpoints with another data provider.

Make sure the replacement API returns the fields required by the downstream Code nodes.

### Sustainability Calculation

Customize `Calculate Dividend Sustainability1` if the scoring methodology needs to change.

The current calculation considers:

* Payout ratio
* Earnings growth
* Revenue growth
* Dividend growth
* Dividend cuts during the last five years

### Risk Calculation

Customize `Calculate Yield Trap Risk1` to change the risk scoring methodology or risk-level boundaries.

The current threshold for further analysis is configured in `Risk Above Threshold`.

### Red Flags

Modify `Identify Yield Trap Red Flags1` when adding or removing dividend sustainability warning conditions.

### AI Analysis

Modify `Message a model` to change the OpenAI model or adjust the generated caution analysis.

The expected output structure should remain compatible with `Normalize AI Response`.

### Storage

Modify `Log Flagged Risks to Google Sheets` if the Risk Results spreadsheet structure changes.

Modify `Store Flagged Risks in Supabase` if the Supabase table or database field names change.

### Notifications

Modify the Slack and Gmail nodes if the notification destination changes.

The workflow currently sends separate notifications for flagged-risk and no-risk executions.


## Add-ons

The workflow can be extended with additional capabilities while keeping its current processing structure.

### Real Market Data Integration

Replace the configured HTTP endpoints with a production dividend calendar and fundamentals provider.

### Historical Risk Tracking

Store previous risk scores and compare them with the current scan to identify improving or worsening dividend sustainability.

### Risk Score Change Alerts

Add logic to notify stakeholders when a stock's risk score increases significantly compared with the previous scan.

### Additional Notification Channels

Additional n8n notification integrations can be added if risk alerts need to reach other communication systems.

### Extended Risk Metrics

Additional financial indicators can be introduced into the scoring and AI analysis stages when the upstream data source provides them.


## Use Case Examples

### Weekly Dividend Watchlist Monitoring

Automatically review enabled stocks every week and identify candidates that reach the configured dividend risk threshold.

### Dividend Sustainability Screening

Use payout ratio, earnings growth, revenue growth, dividend growth, and dividend history to identify potential sustainability concerns.

### High Yield Risk Monitoring

Identify stocks where unusually high dividend yields are accompanied by other warning signals.

### Dividend Cut Risk Review

Highlight stocks with previous dividend cuts and combine that information with other fundamental indicators.

### Investment Research Support

Generate concise AI-based caution notes, key concerns, and investor questions for stocks requiring additional review.

These are the primary use cases, but the workflow can support additional dividend monitoring and financial screening scenarios by extending its data sources, scoring rules, storage, and notification logic.


## Troubleshooting Guide

| Issue                                    | Possible Cause                                                                | Solution                                                                                                                |
| ---------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| No stocks are processed                  | No watchlist records are enabled                                              | Verify the `enabled` field contains `true`, `yes`, `1`, or Boolean `true`.                                              |
| No dividend candidates are returned      | Dividend dates are outside the workflow's seven-day filtering window          | Verify the dividend calendar response and the configured ex-dividend dates.                                             |
| Fundamentals are missing                 | The fundamentals endpoint did not return matching symbols                     | Confirm that the fundamentals response contains the same symbols returned by the dividend calendar.                     |
| Risk scores are unexpectedly low         | Fundamental values may be missing or returned with unexpected formats         | Check payout ratio, growth, dividend, and risk-related fields returned by the API.                                      |
| No OpenAI analysis is generated          | The stock did not meet the configured risk threshold                          | Check the `Risk Above Threshold` condition and the calculated risk score.                                               |
| AI fields are empty                      | The OpenAI response is not valid JSON or does not contain the expected fields | Review the `Message a model` output and confirm that it returns `caution_note`, `key_concern`, and `investor_question`. |
| Google Sheets records are not saved      | Google credentials or sheet configuration is incorrect                        | Verify the Google Sheets credential, spreadsheet ID, sheet name, and column mappings.                                   |
| Supabase records are not saved           | Supabase credentials or table configuration is incorrect                      | Verify the Supabase credential and confirm that `dividend_risk_analysis` contains the required fields.                  |
| Slack notification fails                 | Slack credentials or channel configuration is incorrect                       | Verify the Slack credential and configured channel ID.                                                                  |
| Gmail notification fails                 | Gmail credentials or recipient configuration is incorrect                     | Verify the Gmail OAuth credential and configured recipient address.                                                     |
| No-risk digest is generated unexpectedly | No record has a risk score of 60 or higher                                    | Review the calculated risk scores and the `Risk Above Threshold` condition.                                             |
| HTTP Request nodes fail                  | The configured endpoint is unavailable or inaccessible                        | Confirm that the endpoint is running and reachable from the n8n environment.                                            |


## Need help setting up, testing or customizing the Dividend Yield Trap Detector workflow?

The workflow can be customized for different data providers, dividend screening rules, risk thresholds, databases, spreadsheets and notification requirements. Additional automation can also be added for historical analysis, advanced risk monitoring, alerts, reporting and other financial research workflows. For help with workflow setup, integration, customization, troubleshooting or building similar n8n automations, [contact WeblineIndia](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
