# 🔬 Send weekly KPI executive summaries from Google Sheets via Gemini, Gmail and Slack

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs weekly to read KPI rows from Google Sheets, merge them with benchmark KPI data from an HTTP API, calculate week-over-week trends, generate an executive summary with Google Gemini, then send the result via Gmail and Slack and log it back to Google Sheets.

## How it works
1. Runs on a weekly schedule to start the reporting cycle.
2. Reads weekly KPI data from a Google Sheets spreadsheet and fetches benchmark KPI data from an HTTP endpoint.
3. Normalizes both data sources into a consistent KPI structure and merges them into a single list.
4. Calculates KPI movement metrics such as absolute change, percentage change, trend direction, and whether each metric is above or below target.
5. Sends the consolidated KPI results to Google Gemini to generate a concise executive-style weekly summary.
6. Formats the AI summary for distribution, then sends it via Gmail and Slack and appends a copy to a Google Sheets log.

## Setup
1. Configure the Schedule Trigger to run on your preferred weekly day and time.
2. Add Google Sheets credentials and set the document and sheet for both the KPI input spreadsheet and the KPI log spreadsheet.
3. Ensure your KPI input sheet includes columns like week_start, channel, metric_name, current_value, previous_value, target_value, and notes.
4. Add a Google Gemini (PaLM) API credential and select the model you want to use for summary generation.
5. Add Gmail credentials and set the recipient email address, and add Slack credentials and choose the target channel for the weekly post.
6. Replace or remove the benchmark HTTP endpoint (jsonplaceholder) if you do not want demo benchmark data mixed into your report.

## Additional info
## How To Customize Nodes

This workflow is easy to adapt without changing the full structure.

### Weekly KPI Schedule Trigger

Adjust the run day and time to match your reporting cycle.

### Set Weekly Report Context

Change the report title, date label format, or add extra fields such as business unit or reporting owner.

### Read Weekly KPI Data

Switch the spreadsheet, use another tab, or filter source rows before normalization.

### Fetch Benchmark KPI Data

Replace the placeholder API with a live benchmark source such as an analytics API, CRM endpoint, ad platform API, or internal reporting service.

### Normalize Sheet KPI Data

Add more fields from your spreadsheet, such as region, campaign, product line, or owner.

### Normalize Benchmark KPI Data

Change how external metrics are mapped so they match the same schema as your main KPI data.

### Calculate Weekly KPI Trends

Extend the logic to calculate rolling averages, status colors, weighted scoring, or alert thresholds.

### Build Executive Summary Prompt

Refine the prompt for a different writing tone, longer narrative summaries, or department specific outputs.

### Generate Weekly KPI Summary

Switch model versions or tune generation settings if your summaries need more detail or tighter control.

### Format Email and Slack Message

Create separate message structures for leadership, sales, marketing, or clients.

### Send Weekly Summary Email

Send to multiple recipients, use a group mailbox, or route through a different email provider.

### Send Weekly Summary to Slack

Post into multiple channels, threads, or team specific destinations.

### Log Weekly Summary to Google Sheets

Add more columns such as workflow status, report owner, channel count, or execution ID.


## Add ons

You can extend this workflow with additional features such as:

- Error handling branches for failed API, Slack, Gmail, or Sheets steps
- Conditional routing so only failed or below target KPIs are escalated
- Multi team summaries for different departments from the same source file
- HTML email formatting for richer presentation
- PDF report generation before email delivery
- Dashboard sync to a data warehouse or BI tool
- Approval flow before sending the summary externally
- Separate prompts for leadership and operational teams


## Use Case Examples

This workflow supports several practical business scenarios, including these common examples:

### 1. Weekly marketing performance update

Pull sessions, leads, and email metrics from Google Sheets, summarize movement, and post the result to leadership each Monday.

### 2. Agency client KPI reporting

Collect weekly client metrics, draft a readable update with AI, and deliver the summary through email and Slack while saving a history log.

### 3. Operations review automation

Track weekly process or service KPIs from a spreadsheet, calculate movement against target, and generate a management ready summary.

### 4. Startup founder reporting

Create a short investor or founder style weekly snapshot from operational metrics without manually preparing a report every week.

### 5. Benchmark comparison testing

Keep the placeholder benchmark branch during development to test merge logic, prompt quality, and final message formatting before switching to real external data.

There can be many more use cases for this workflow depending on your reporting structure, KPI sources, and communication channels.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Workflow does not start on schedule | Workflow is inactive or schedule settings are incomplete | Activate the workflow and recheck the Weekly KPI Schedule Trigger configuration |
| Google Sheets data is empty | Wrong spreadsheet, wrong tab, or missing access | Reconnect credentials and confirm the correct document and sheet are selected |
| KPI calculations look wrong | Source values are stored as text or fields do not match expected names | Review the source sheet columns and confirm Number conversion in the normalization step |
| Benchmark data looks irrelevant | Placeholder API is still active | Replace the Fetch Benchmark KPI Data node with your real benchmark source or remove the branch |
| Gemini summary is too generic | Prompt is too broad or test data is weak | Improve the Build Executive Summary Prompt node and use more realistic KPI inputs |
| Gmail node fails | Gmail credential expired or sending account lacks permission | Reconnect Gmail and test sending from the configured mailbox |
| Slack message is not posted | Wrong channel selected or Slack app lacks posting rights | Reconnect Slack, select the correct channel, and verify app permissions |
| Log row is not added to Google Sheets | Wrong log sheet or incorrect column mapping | Review the append node, log sheet destination, and mapped column names |
| Merge output is incomplete | One branch is not returning records | Test both normalization branches separately and confirm each one outputs items before the merge |
| AI output formatting is messy | The formatter node is not extracting the expected Gemini field | Review the Format Email and Slack Message node and confirm which response property contains the summary text |


## Need Help

This workflow can be a solid foundation for a reliable reporting system and it can be tailored further based on your exact business process. If you need help setting up this workflow, replacing the placeholder benchmark API with a production data source, improving the Gemini prompt, adding approval flows or extending the workflow with more channels and logic, WeblineIndia can help.

WeblineIndia can assist with:

- n8n workflow setup and deployment
- Credential and node configuration
- Google Sheets, Slack, Gmail, and AI integration setup
- Prompt optimization for business summaries
- Production hardening with error handling and retries
- Building similar custom automation workflows for operations, reporting, sales and marketing
- [Hiring dedicated n8n developers](https://www.weblineglobal.com/hire/n8n-developers/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
