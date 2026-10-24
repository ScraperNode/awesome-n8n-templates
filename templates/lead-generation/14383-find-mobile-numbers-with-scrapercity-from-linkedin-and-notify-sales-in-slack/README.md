# 🎣 Find mobile numbers with ScraperCity from LinkedIn and notify sales in Slack

> ⚡ **58 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

This template is for sales teams, SDRs, and revenue operations professionals who need to quickly find mobile phone numbers from a list of LinkedIn profile URLs or work email addresses. If your team relies on cold calling as part of outreach and wants to automate the enrichment step, this workflow saves hours of manual lookup.

## How it works

The workflow reads a list of LinkedIn URLs or work emails from a Set node, submits them to the ScraperCity Mobile Finder API, then polls asynchronously until results are ready. Once complete, it downloads the results, parses each contact record, removes duplicates, and posts a formatted Slack alert to your sales team channel with the discovered mobile numbers.

## How to set up

1. Add your ScraperCity API key as an n8n credential named "ScraperCity API Key" using the HTTP Header Auth type with the header name "Authorization" and value "Bearer YOUR_KEY".
2. Add your Slack credential under the "Alert Sales Team in Slack" node.
3. Open the "Configure Inputs" node and replace the sample LinkedIn URLs or emails with your actual targets.
4. Set your target Slack channel name in the "Alert Sales Team in Slack" node.
5. Click "Execute workflow" to run.

## Requirements

- ScraperCity account with Mobile Finder access (app.scrapercity.com)
- Slack workspace with a bot token or OAuth credential configured in n8n

## How to customize the workflow

- Swap the manual trigger for a Schedule Trigger to run enrichment automatically on a cadence.
- Replace the Slack node with an email send node or a CRM node (HubSpot, Airtable) to push results directly into your pipeline.
- Add a Filter node after parsing to only alert on records where a mobile number was actually found.

## 🔗 Nodes Used

HTTP Request, Slack, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
