# 🎣 Enrich LinkedIn leads with Aimfox, Apify, OpenAI and Airtable

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow listens for Aimfox webhooks when a LinkedIn connection request is accepted, notifies a Slack channel, creates and enriches a lead in Airtable using Apify scrapers for profile/company data and website content, and uses OpenAI to generate a lead rating, outreach angles, and hooks.

## How it works
1. Receives a webhook from Aimfox when a lead accepts a LinkedIn connection request.
2. Extracts the lead, campaign, and LinkedIn profile identifier from the webhook payload and posts a notification to Slack.
3. Creates a new lead record in Airtable with the lead’s name, campaign, date, and LinkedIn profile URL.
4. Uses Apify to scrape the lead’s LinkedIn profile details, the most recent lead post, the lead’s company details, and the most recent company post.
5. Downloads the company website with an HTTP request and converts the HTML content to Markdown for easier analysis.
6. Sends the aggregated lead, company, posts, and website data to OpenAI to produce a structured lead rating, automation outreach angles, and outreach hooks.
7. Updates the Airtable record with the scraped enrichment fields and the OpenAI-generated insights, and sets the lead status to “not contacted”.

## Setup
1. In Aimfox, configure the “accepted connection request” webhook to point to this workflow’s webhook URL.
2. Add credentials for Slack, Airtable (Personal Access Token), Apify, and OpenAI.
3. Update the Slack channel target and the Airtable base/table to match your workspace, and ensure the table contains fields that match the workflow’s mapped columns (for example Headline, About, Company Website, Hooks, and Icp match).

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Webhook, Markdown, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
