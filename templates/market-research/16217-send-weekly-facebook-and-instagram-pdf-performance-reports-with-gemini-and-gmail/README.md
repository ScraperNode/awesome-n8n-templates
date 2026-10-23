# 📊 Send weekly Facebook and Instagram PDF performance reports with Gemini and Gmail

> ⚡ **32 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every Monday morning, pulls last week’s Facebook Page and Instagram Business metrics from the Meta Graph API, generates chart images, asks Google Gemini to write a narrative analysis, converts a branded HTML report to PDF via PDFShift, and emails it using Gmail.

## How it works
1. Runs on a weekly schedule (Mondays at 8:00) and sets the Facebook/Instagram IDs, access tokens, and report recipient email.
2. Calculates the last full week date range (Monday–Sunday) and uses it to query the Meta Graph API.
3. Fetches Facebook Page feed posts plus daily page views, post engagements, and organic media views, then aggregates totals and a structured post list.
4. Fetches Instagram media posts and daily insights (reach, profile views, accounts engaged, interactions, and follows/unfollows) plus an organic views breakdown, then summarizes the week.
5. Merges Facebook and Instagram results and generates chart image URLs using QuickChart for key daily metrics.
6. Sends the combined stats to Google Gemini to produce a five-section weekly analysis, then builds a branded HTML report including charts, post previews, and next steps.
7. Converts the HTML to a PDF with PDFShift and emails the PDF report to the configured recipient via Gmail.

## Setup
1. Create Meta Graph API access tokens and update the workflow with your Facebook Page ID, Instagram Business Account ID, a long-lived Meta access token, and a Facebook Page access token.
2. Add your Google Gemini (PaLM) API credential and select an available model (the template uses gemini-3-flash-preview).
3. Add a PDFShift HTTP Basic Auth credential (API key) for https://api.pdfshift.io/v3/convert/pdf.
4. Connect a Gmail OAuth2 credential and confirm the recipient email address used for the report.
5. Review the schedule trigger time zone and timing so it runs at your intended Monday 08:00 slot.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
