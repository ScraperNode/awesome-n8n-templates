# 📊 Send AI-written multi-channel ad performance PDFs with GA4, Google Ads, Meta and GoHighLevel

> ⚡ **21 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs monthly and builds a multi-channel client performance report by pulling KPIs from Google Analytics 4, Google Ads, and Meta Ads, generating an OpenAI executive summary, converting a branded HTML report to PDF with PDFShift, uploading it to Google Drive, and emailing it via GoHighLevel (LeadConnector).

## How it works
1. Runs on a schedule at 9:00 AM on the 1st of every month.
2. Loads a JSON client roster (IDs and email addresses), calculates the current vs previous reporting windows, and processes each client as a separate item.
3. Fetches current/previous period website and channel KPIs from the Google Analytics Data API (GA4).
4. Pulls campaign performance data from the Google Ads API for the date range and requests campaign insights from the Meta Graph API.
5. Aggregates GA4, Google Ads, and Meta results into a single KPI model with period-over-period deltas and blended paid-media metrics.
6. Sends the KPI model to OpenAI (gpt-4o-mini) to produce a JSON executive summary and recommendations.
7. Builds a branded HTML report, converts it to a PDF using PDFShift, uploads it to Google Drive, and creates a shareable link.
8. Upserts the client as a GoHighLevel contact and sends an email with the PDF link and PDF URL as an attachment.

## Setup
1. Add credentials for Google Analytics OAuth2 (GA4) and Google Drive OAuth2 (Drive upload/sharing).
2. Add Google Ads OAuth2 credentials and set your Google Ads developer token and login customer ID (MCC) values used in the request headers.
3. Provide a Meta access token for HTTP header authentication and confirm the Graph API version and ad account IDs you use.
4. Add an OpenAI API credential (for the gpt-4o-mini summary) and a PDFShift API key for HTML-to-PDF conversion.
5. Add your GoHighLevel (LeadConnector) Private Integration Token and set the GHL location ID and sender email used for delivery.
6. Update the client list and required IDs/emails in the configuration, and set the target Google Drive folder ID where PDFs are stored.

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
