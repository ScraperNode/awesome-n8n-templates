# ⚙️ Monitor core web vitals with Lighthouse, Gemini AI, Telegram alerts & Google Sheets

> ⚡ **795 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Automate Lighthouse report alerts to messenger and Google Sheets

## Who’s it for
This workflow is ideal for developers, SEO specialists, performance engineers, and digital agencies who want to continuously monitor website performance using Core Web Vitals. It’s also perfect for product or infrastructure teams that need real-time alerts when a site underperforms and want a historical log of reports in Google Sheets.

## What it does
This automation periodically fetches a Lighthouse report from the PageSpeed Insights API, checks whether any of the Core Web Vitals (CWV) scores fall below a defined threshold, and sends a notification to Telegram (or any other preferred messenger). It also logs the summarized report in a specific row within a Google Spreadsheet for long-term tracking and reporting.

The CWV audit results are processed using JavaScript and passed through a summarization step using Gemini Chat, making the audit descriptions concise and actionable.

## How to set up
1. Configure the Schedule Trigger node to run at your preferred frequency.

2. Set your target URLs and API Key, then connect the HTTP Request node to Google PageSpeed Insights.

3. Update the JavaScript Code node to filter and parse only CWV metrics.

4. Define thresholds in the IF Node to trigger Telegram messages only when needed.

5. Connect your Telegram (or other messenger) credentials.

6. Set up the Google Sheets node by linking your account and choosing the sheet and range to log data.

## Requirements
- Google account with access to Google Sheets

- Telegram bot token or any preferred messenger

- API key for PageSpeed Insights

- Gemini Chat integration (optional for summarization, can be replaced or removed)

## How to customize the workflow
Swap Telegram for Slack, Discord, or email by replacing the Send Notification node.

Adjust the CWV thresholds or include other Lighthouse metrics by modifying the IF Node and JavaScript logic.

Add multiple URLs to monitor by introducing a loop or extending the schedule with different endpoints.

Replace the Gemini Chat model with OpenAI, Claude, or your custom summarizer if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Summarization Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
