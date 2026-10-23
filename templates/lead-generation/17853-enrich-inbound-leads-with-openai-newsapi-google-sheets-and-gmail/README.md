# 🎣 Enrich inbound leads with OpenAI, NewsAPI, Google Sheets, and Gmail

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow captures inbound contact form submissions, enriches each lead with recent company news from NewsAPI, generates company intelligence and a personalized outreach draft using OpenAI, logs the result to Google Sheets, and emails an HTML summary to a sales rep via Gmail.

## How it works
1. Receives a new website contact submission via an n8n Form trigger.
2. Normalizes the submitted fields, extracts a clean website domain, and assigns a Hot/Warm/Cold lead score based on job title keywords.
3. Validates required inputs, then queries NewsAPI for recent articles about the company and compiles a short research brief.
4. Sends the lead context and news brief to OpenAI Chat Completions to return structured company intelligence and an outreach email subject/body in JSON.
5. Appends the enriched lead (including score, news summary, and outreach draft) to a Google Sheets “leads” tab.
6. Sends the sales rep a formatted Gmail message with the lead details, AI-generated intelligence, and the ready-to-review outreach draft.
7. If any step fails, sends a Gmail error alert containing the error message, failed node name, and execution ID.

## Setup
1. Add an OpenAI API credential in n8n and ensure the OpenAI request node uses it.
2. Get a NewsAPI key and replace `YOUR_NEWS_API_KEY` in the NewsAPI HTTP request header.
3. Connect Google Sheets OAuth credentials and replace `YOUR_LEAD_CRM_SHEET_ID`, then create a spreadsheet with a “leads” tab and the required column headers.
4. Connect Gmail OAuth2 credentials and replace `YOUR_SALES_REP_EMAIL` for both the sales notification and error alert emails.
5. Publish the n8n Form and embed or link its form URL on your website contact page.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
