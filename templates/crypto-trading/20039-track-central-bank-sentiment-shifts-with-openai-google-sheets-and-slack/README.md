# 📈 Track central bank sentiment shifts with OpenAI, Google Sheets, and Slack

> ⚡ **3 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every three hours to fetch new FED, ECB, and RBI statements from an HTTP feed, analyzes hawkish/dovish sentiment with OpenAI, logs results to Google Sheets, and posts a Slack alert when the latest score shifts by 20+ points versus the recent rolling average.

## How it works
1. Runs every three hours on a schedule trigger.
2. Fetches the latest central bank statement records from an HTTP endpoint and normalizes/validates them (required fields, minimum length, supported bank codes).
3. Loads previously processed statement IDs from a Google Sheets “Sentiment Log” sheet and filters out duplicates.
4. Sends each new statement to OpenAI (GPT-4.1-nano) to classify it as hawkish/neutral/dovish and return a sentiment score, confidence, key phrase, summary, and policy signal as JSON.
5. Parses and validates the OpenAI response, then appends the structured sentiment record to Google Sheets.
6. Calculates the sentiment shift versus the rolling average of the previous five logged scores for the same bank and flags shifts of 20 points or more.
7. Builds a detailed Slack message for meaningful shifts and posts it to the configured Slack channel.

## Setup
1. Provide OpenAI API credentials for the OpenAI node and confirm the selected model is available in your account.
2. Connect Google Sheets credentials and ensure the target spreadsheet contains a “Sentiment Log” sheet with columns matching the fields being appended (for example statement_id, bank_code, published_at, sentiment_score, stance, and summary).
3. Update the HTTP Request URL to your central bank feed endpoint and ensure it returns items with at least id, central_bank, bank_code (FED/ECB/RBI), content, and published_at.
4. Connect Slack credentials and select the channel where sentiment shift alerts should be posted.

## Additional info
## Add-ons

The workflow can be extended with additional functionality without changing its core architecture.

Potential additions include:

- Add more central banks such as the Bank of England or Bank of Japan
- Store data in Supabase instead of or alongside Google Sheets
- Add separate sentiment trends for different speakers
- Add daily or weekly sentiment summaries
- Create a dashboard for historical sentiment
- Add stronger alert thresholds for major policy changes
- Add currency-specific monitoring
- Add email notifications alongside Slack
- Add historical sentiment charts
- Add separate alerts for extremely hawkish or extremely dovish statements
- Connect a production financial news or central bank feed


## Use Case Examples

### 1. Federal Reserve Policy Monitoring

Monitor Federal Reserve statements and identify changes toward more hawkish or dovish monetary policy language.

### 2. ECB Sentiment Tracking

Track European Central Bank communications over time and compare the latest sentiment against recent ECB statements.

### 3. RBI Monetary Policy Monitoring

Analyze Reserve Bank of India statements and identify meaningful changes in monetary policy tone.

### 4. Forex Research

Use the sentiment score and direction as an additional qualitative input when researching currency market conditions.

### 5. Interest Rate Research

Maintain a historical record of central bank sentiment and identify significant changes that may deserve further investigation.

There can be many additional use cases depending on the central bank data source, downstream systems, and financial monitoring requirements.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Workflow does not start | Schedule configuration is incorrect or workflow is inactive | Verify the Central Bank Monitoring Schedule node and activate the workflow |
| HTTP Request returns an error | Dummy or production feed URL is unavailable | Verify the URL and replace the dummy endpoint with a working data source |
| No statements continue after validation | Required fields are missing or the content is shorter than 50 characters | Check the incoming feed structure and ensure required fields are populated |
| Statements are not processed | Statement IDs already exist in Google Sheets | Check the Sentiment Log and confirm whether the statements were previously processed |
| OpenAI node fails | OpenAI credential is missing or invalid | Reconnect the configured OpenAI credential in n8n |
| AI response is not parsed correctly | The AI response does not match the expected JSON structure | Review the OpenAI prompt and Parse Sentiment Analysis Result node |
| Google Sheets read fails | Spreadsheet or credential configuration is incorrect | Verify the spreadsheet, Sentiment Log sheet, and Google Sheets credential |
| Sentiment records are not stored | Sheet columns do not match the configured mappings | Confirm that all required Sentiment Log columns exist |
| No trend alert is sent | Sentiment shift is below 20 points | Review the current score and rolling average |
| Slack alert fails | Slack credential or channel configuration is incorrect | Verify the Slack credential and selected notification channel |
| Duplicate records appear | Statement IDs are missing or inconsistent | Ensure the source provides a stable unique statement ID |
| Trend calculation has limited history | Fewer than five previous records exist for the central bank | Continue processing statements until sufficient historical records are available |


## Need Help

This workflow can be customized for different central banks, financial data sources, databases, notification channels, sentiment models and business requirements.

WeblineIndia can help with workflow setup, production API integration, n8n deployment, OpenAI configuration, Google Sheets or Supabase integration, Slack notifications, troubleshooting, optimization and additional workflow add-ons.

If you need help [building a financial automation workflow](https://www.weblineindia.com/process-automation-solutions.html) or extending this tracker for your specific business requirement, contact WeblineIndia for implementation and customization support.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
