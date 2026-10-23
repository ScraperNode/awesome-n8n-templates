# 🎣 Triage and enrich contact form leads, log to Sheets, and notify via Gmail

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives website contact form submissions via a webhook, logs the details to Google Sheets, generates a branded HTML notification, and sends the submission to a specified recipient using Gmail.

## How it works
1. Receives a contact form submission through an HTTP POST webhook.
2. Sets the workflow’s notification recipient email used for alerts.
3. Appends the submission fields (Date, Time, Name, Email, Phone, Message) to a Google Sheets spreadsheet.
4. Builds a branded HTML email body from the submitted form data.
5. Sends the formatted notification email via Gmail, using the submitter’s email as the Reply-To address.

## Setup
1. Copy the webhook URL from n8n and configure your contact form to POST submissions to it with the expected fields (Date, Time, Name, Email, Phone, Message).
2. Add Google Sheets credentials and replace `YOUR_SPREADSHEET_ID` (and sheet name if needed) so the workflow can append rows.
3. Add Gmail credentials and set the `notificationEmail` value to the address that should receive the alerts.
4. Update the email branding values in the HTML generator (logo URL, brand name/website, and colors) to match your company.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
