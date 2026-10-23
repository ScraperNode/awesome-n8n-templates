# 🎣 Enrich website leads and draft outreach with SerpApi, GPT-4o-mini, Sheets, Gmail and Slack

> ⚡ **43 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow captures website visitor form submissions, researches the visitor’s company using SerpApi, extracts structured insights and drafts a personalized outreach email with OpenAI, logs the enriched lead to Google Sheets, and emails the sales team via Gmail, with Slack alerts for failures.

## How it works
1. Receives a submission from an n8n Form with the visitor’s contact details, company information, and stated interest.
2. Normalizes the submitted fields into a consistent lead profile.
3. Queries SerpApi twice to gather Google search results for a company overview (size, funding, tech stack signals) and to find the company’s LinkedIn page.
4. Uses OpenAI (gpt-4o-mini) to extract structured company intelligence (LinkedIn URL, size, funding, tech stack, news, competitors) from the search snippets.
5. Uses OpenAI (gpt-4o-mini) again to generate a short, role-aware outreach email draft (subject and body) based on the visitor’s details and the extracted research.
6. Appends the enriched lead record to a Google Sheets CRM tab and sends the sales rep an HTML-formatted Gmail notification containing the research summary and outreach draft.
7. If any step fails, posts an alert to Slack, including dedicated alerts for the AI research and AI outreach steps.

## Setup
1. Add credentials for SerpApi, OpenAI, Google Sheets (OAuth2), Gmail (OAuth2), and Slack (OAuth2).
2. Replace YOUR_GOOGLE_SHEET_ID and select the correct CRM sheet/tab in the Google Sheets append step, ensuring the columns match the fields being written.
3. Update the sales recipient address in the Gmail step (currently sales@yourcompany.com).
4. Replace YOUR_SLACK_CHANNEL_ID in all Slack alert steps with your real channel ID.
5. Activate the n8n Form trigger and embed or link its production URL on your website so visitors can submit the form.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
