# 🔬 Create monthly sales report slides from Google Sheets with Claude and Google Slides

> ⚡ **60 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts a monthly report request from an n8n Form or Google Chat, reads sales data from Google Sheets, uses Anthropic Claude to interpret the requested month and draft a short summary, and fills a copied Google Slides template (including a Sheets chart) with the computed results.

## How it works
1. Receives a report request either from an n8n Form submission or a Google Chat webhook event.
2. If the request comes from Google Chat, validates the sender against an allowlist and returns a help/denial response when the message is invalid.
3. Fetches the configured data tab from Google Sheets and parses rows into normalized records (date, group, value, and optional distinct key).
4. Uses Anthropic Claude to extract the requested month from the user’s text, then verifies the month is valid, not in the future, and has matching rows in Google Sheets.
5. Computes totals, month-over-month change (month-to-date when applicable), counts, optional averages/distinct counts, and top groups, then writes a comparison table to a Google Sheets “Report” tab to drive a chart.
6. Uses Anthropic Claude to write a 3-line summary from the computed facts and replaces it with a safe fallback if it contains any numbers not present in the computed data.
7. Copies a Google Slides template via Google Drive, replaces {{placeholders}} and embeds the Google Sheets chart image where {{chart}} appears, then returns the Slides link back to the form completion page or as a Google Chat reply.

## Setup
1. Add credentials for Google Sheets OAuth2, Google Slides OAuth2, Google Drive OAuth2, and Anthropic (Claude) in n8n.
2. Update the Config values with your Google Sheets spreadsheet ID, your Google Slides template ID, and the correct tab/column names (data tab, Report tab, date/group/value/distinct columns, timezone, and labels).
3. Prepare your Google Sheets file with a data tab matching the configured columns and a “Report” tab that contains at least one chart based on the report range.
4. Create a Google Slides template that includes the required {{placeholders}} (for example {{total}}, {{vs_last_month}}, {{top_groups}}, {{summary}}) and a text box containing {{chart}} where the chart should be inserted.
5. If using Google Chat, create/configure a Google Chat app with an HTTP endpoint, paste the production webhook URL, replace the webhook path with a long random string, and set the allowed sender emails in the Chat settings.

## Requirements
- Google account with Google Sheets, Google Drive and Google Slides (OAuth2)
- Anthropic API key (two short Claude Haiku 4.5 calls per report)
- A sheet with a data tab (a date, a group, and a number or one row per record) and a Report tab with one chart
- For the optional Google Chat entry: Google Workspace and an n8n instance reachable from the internet

## Customization
- Report on any table by setting the tab, columns and slide wording in Config (sales, inquiries, expenses, overtime)
- Leave value_column empty to count one row per record, and remove the average line from the template
- Change the comparison to the same month last year in "Compute the numbers"
- Add a Slack or Chatwork entry in front of Config

## Additional info
Claude only reads which month and writes a 3-line summary from numbers that code computed; code checks every number in the summary and replaces it with a plain one if any number is not in the data. The chart is inserted as a plain image (not linked), so earlier reports do not change when the Report tab is rewritten. The Report tab is shared, so two reports made at the same moment could mix their charts (not tested). The Chat webhook does not verify Google's signed token; it relies on a long random path and a list of allowed emails.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Basic LLM Chain, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
