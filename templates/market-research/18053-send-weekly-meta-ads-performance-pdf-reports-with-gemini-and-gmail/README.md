# 📊 Send weekly Meta Ads performance PDF reports with Gemini and Gmail

> ⚡ **48 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to pull Meta Ads campaign and ad-level insights from the Meta Graph API, summarizes performance, generates charts with QuickChart, asks Google Gemini for written analysis, converts the resulting HTML report to a PDF via PDFShift, and emails it through Gmail.

## How it works
1. Runs every Monday at 8:00 AM using a schedule trigger.
2. Builds the reporting date range (last 7/14/30 days based on your schedule setting) and loads the Meta Ads account ID, access token, company name, and report recipient email.
3. Calls the Meta Graph API to fetch ad account details plus daily campaign-level insights for the selected period.
4. Aggregates campaign metrics (spend, impressions, clicks, CTR, CPC, CPM, results, revenue/ROAS) and prepares daily totals used for reporting.
5. Pulls the top ads by spend from the Meta Graph API and fetches each ad’s creative details (thumbnail, body, title) to enrich the ad performance data.
6. Generates chart image URLs with QuickChart, sends a structured performance summary to Google Gemini for narrative insights and next steps, and builds a branded HTML report.
7. Converts the HTML to a PDF using PDFShift and emails the PDF report to the configured recipient via Gmail.

## Setup
1. Create or obtain a Meta access token with `ads_read` permissions and set your Meta Ads Account ID (without the `act_` prefix) and token in the workflow’s configuration values.
2. Add Google Gemini (PaLM) API credentials for the model call.
3. Add PDFShift HTTP Basic Auth credentials (API key) for the PDF conversion request.
4. Connect a Gmail OAuth2 account and set the recipient email address that should receive the weekly PDF report.
5. (Optional) Update the schedule trigger timing and the reporting schedule setting (Weekly, Biweekly, Monthly) to control when and how far back the report pulls data.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
