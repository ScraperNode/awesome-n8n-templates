# 🔬 Notify clients of delayed trade settlements with Google Sheets, Gemini, Slack and Gmail

> ⚡ **10 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to check trade settlements stored in Google Sheets, identifies overdue trades, uses Google Gemini to classify delay reasons and severity, and notifies each affected client via Slack and a formatted Gmail report.

## How it works
1. Runs daily on a schedule trigger.
2. Reads all trade records from a Google Sheets spreadsheet and normalizes key fields like trade ID, settlement date, status, client email, and Slack member ID.
3. Validates and reformats settlement dates, then flags trades as delayed when the settlement date is before today and the status is not "settled".
4. Filters to delayed trades only and groups them by client email so each client is processed as a batch.
5. Sends each client’s delayed trades to Google Gemini to generate per-trade delay reasons, a severity level (HIGH/MEDIUM/LOW), and a recommended action.
6. Routes trades by severity, then sends a Slack DM summary to the client and emails a detailed HTML report via Gmail.

## Setup
1. Connect your Google Sheets credentials and update the spreadsheet ID and sheet tab used to read the trade portfolio.
2. Add Google Gemini (LangChain) credentials and confirm the selected Gemini model is available in your project.
3. Connect your Slack OAuth2 credential and ensure each row in the sheet contains a valid Slack member ID for the recipient.
4. Connect your Gmail account (or Google OAuth credentials for Gmail) and verify the workflow is allowed to send emails to client addresses.
5. Ensure the Google Sheet includes the required columns (trade id, stock name, settlement date, quantity, price, status, client email, client name, slack member id) and adjust the schedule time if needed.

## Additional info
## How To Customize Nodes

- **Schedule Trigger**
  - Change frequency (hourly, weekly, etc.)

- **Google Sheets Node**
  - Replace with another data source if needed

- **AI Prompt**
  - Modify prompt to include more insights like risk score, expected delay duration

- **Slack Message Builder**
  - Customize tone, format, or add emojis

- **Email Template**
  - Adjust branding, colors, or content structure


## Add-Ons (Enhancements)

- Add SMS alerts for HIGH severity trades
- Store AI analysis results back into Google Sheets
- Add dashboard reporting (e.g., via Notion or Airtable)
- Integrate with CRM systems for ticket creation
- Add retry logic for failed notifications


## Use Case Examples

1. **Brokerage Firms**
   - Monitor settlement delays across multiple client portfolios

2. **Trade Operations Teams**
   - Get proactive alerts before clients raise concerns

3. **Wealth Managers**
   - Keep clients informed with automated updates

4. **Fintech Platforms**
   - Enhance transparency in trade lifecycle tracking

5. **Compliance Monitoring**
   - Track delays that may impact regulatory reporting

These are just a few examples—this workflow can be adapted for many other trade monitoring scenarios.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched | Incorrect Sheet ID or permissions | Verify Google Sheets credentials and access |
| Dates not detected properly | Invalid date format in sheet | Ensure proper date format (YYYY-MM-DD recommended) |
| No delayed trades found | All trades are settled or future dated | Check dataset and logic |
| Slack message not sent | Invalid Slack member ID | Verify Slack user ID format |
| Email not delivered | Gmail credentials issue | Reconnect Gmail OAuth |
| AI node not working | Missing Gemini API credentials | Configure API key properly |


## Need Help?

If you need assistance setting up this workflow, customizing nodes or building advanced add-ons, our [n8n workflow development team at **WeblineIndia**](https://www.weblineindia.com/hire-n8n-developers/) is happy to help.

We specialize in:
- n8n workflow automation
- AI-powered business processes
- Custom integrations and dashboards

👉 Reach out to us for:
- Workflow setup & deployment
- Custom enhancements
- End-to-end automation solutions
- [Hire n8n workflow developers](https://www.weblineglobal.com/hire/n8n-developers/)

Let us help you turn your operations into a fully automated system.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
