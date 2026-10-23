# 🔬 Generate a weekly business metrics report with Stripe, Notion, Sheets, Claude, SendGrid, and Slack

> ⚡ **46 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Stop compiling your weekly business report by hand. Let automation pull the numbers, and let Claude write the narrative.**

Every Monday morning, this workflow fetches last week's revenue from Stripe, pipeline data from Notion, and operational metrics from Google Sheets  aggregates everything into a single structured dataset, hands it to Claude Sonnet 4 for executive analysis, and delivers a styled HTML report to your inbox before you've had your first coffee.

---

### How it works

The workflow runs in five sequential stages:

**1. Trigger & Date Setup**
Fires every Monday at 08:00. Computes last week's date window in your configured business timezone using Luxon, outputting ISO timestamps, Unix epochs, and milliseconds so every downstream node speaks the same time format without conversion.

**2. Data Collection**
Fetches from three sources in sequence:
- **Stripe:** Cursor-based pagination retrieves every charge in the window no 100 record cap, no missed revenue
- **Notion:** Queries your Deals database with a date filter and a built-in 350ms rate-limit delay between pages to stay safely under the Notion API ceiling
- **Google Sheets:** Reads the latest row from your ops metrics sheet for tickets closed, NPS score, and uptime percentage

**3. Aggregation**
Normalises all three sources into a single structured item: gross and net revenue, refunds, transaction count, total and probability-weighted pipeline value, deal count by stage, and all operational KPIs. Every field has a safe fallback so missing data never crashes the report.

**4. AI Executive Narrative**
Passes the aggregated metrics to Claude Sonnet 4 with a structured prompt requesting three paragraphs: revenue performance, pipeline health, and operational highlights with a forward-looking observation. Temperature is set to 0 for consistent, professional tone on every run.

**5. Report Build & Delivery**
Assembles a styled HTML email with KPI cards, a pipeline stage breakdown table, and the AI narrative embedded inline. Sends via SendGrid, then fires a Slack message to your chosen channel with a one-line summary of net revenue and new deal count.

---

### Key benefits

- **No record caps:** Stripe pagination loops until `has_more` is false, the report always reflects the full week, not just the first 100 charges
- **Timezone-aware:** Set `REPORT_TIMEZONE` once and every date window, label, and timestamp respects your business timezone automatically
- **Consistent narrative:** Claude runs at temperature 0, so the executive summary reads in the same structured, data-driven voice every week
- **Safe fallbacks:** Every aggregation field defaults gracefully, a missing ops metric shows `N/A` rather than crashing the workflow
- **Global error handling:** A dedicated Error Trigger catches any execution failure and sends an alert email with the execution ID and the name of the failed node

---

### Setup

1. **Credentials:** Connect your Anthropic account to the Anthropic Chat Model node
2. **SendGrid:** Connect your SendGrid credential to the Send via SendGrid and Send Error Email nodes
3. **Google Sheets:** Connect a Google Sheets OAuth2 credential to the GSheets: Ops Metrics node
4. **Slack:** Connect your Slack credential to the Slack: Report Sent node
5. **Stripe:** Set `STRIPE_SECRET_KEY` environment variable
6. **Notion:** Set `NOTION_API_KEY` and `NOTION_DEALS_DB_ID` environment variables
7. **Google Sheets:** Set `GSHEETS_SPREADSHEET_ID`, `GSHEETS_SHEET_NAME`, and `GSHEETS_LAST_ROW_RANGE` environment variables
8. **Email:** Set `REPORT_EMAIL_FROM`, `REPORT_EMAIL_TO`, and `REPORT_ALERT_EMAIL` environment variables
9. **Slack:** Set `SLACK_CHANNEL_ID` environment variable
10. **Timezone:** Set `REPORT_TIMEZONE` environment variable (e.g., `Europe/Helsinki` defaults to UTC if not set)

---

### Who this is for

- **Founders and operators** who want a Monday morning briefing without opening five different dashboards
- **Finance teams** tracking weekly revenue, refunds, and transaction volume without manual Stripe exports
- **Sales managers** monitoring pipeline health and weighted deal value across Notion CRM stages
- **Agencies and MSPs** delivering automated reporting as a managed service to their clients

---

### Required credentials

- Anthropic (Claude Sonnet 4)
- SendGrid
- Google Sheets OAuth2
- Slack
- Stripe Secret Key (via env var)
- Notion API Key (via env var)

---

### How to customize it

- **Add more data sources:** Extend the collection stage with nodes for HubSpot, Jira, Intercom, or any API, just reference them in `Aggregate All Metrics`
- **Change the report schedule:** Modify the cron expression in the trigger node to run daily, bi-weekly, or on any schedule
- **Adjust the AI prompt:** Edit the prompt in `Claude: Write Executive Narrative` to change the number of paragraphs, the tone, or the specific metrics Claude should prioritize
- **Swap the email provider:** Replace SendGrid with Outlook, Gmail, or any SMTP node without touching any other part of the workflow
- **Extend the HTML template:** Modify `Build HTML Report` to add your company logo, brand colors, or additional KPI sections

## 🔗 Nodes Used

Google Sheets, Slack, SendGrid, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
