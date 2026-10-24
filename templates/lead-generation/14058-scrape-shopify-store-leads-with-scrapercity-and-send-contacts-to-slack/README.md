# 🎣 Scrape Shopify store leads with ScraperCity and send contacts to Slack

> ⚡ **33 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

This workflow is for sales teams, growth hackers, and lead generation agencies who want to build a targeted list of Shopify store owners -- complete with emails, phone numbers, and social profiles -- and receive those contacts directly in Slack for immediate follow-up.

## How it works

1. A manual trigger starts the workflow and passes your search parameters (country, platform, lead count) to the ScraperCity store-leads API.
2. The API returns a `runId` immediately. Because scrapes can take 10--60 minutes, the workflow enters an async polling loop -- waiting 60 seconds between each status check.
3. Once the scrape status returns `SUCCEEDED`, the workflow downloads the full CSV result set.
4. A Code node parses the CSV, removes duplicates, and formats each lead into a clean Slack message block.
5. Each contact (store name, email, phone, social links) is posted as a structured Slack message so your team can act on leads in real time.

## How to set up

1. Create a ScraperCity account at scrapercity.com and copy your API key.
2. In n8n, add an HTTP Header Auth credential named `ScraperCity API Key` with the header name `Authorization` and value `Bearer YOUR_KEY`.
3. Add a Slack credential (OAuth2) and connect it to the **Post Lead to Slack** node.
4. In the **Configure Search Parameters** node, update `countryCode`, `totalLeads`, and `slackChannel` to match your needs.
5. Click **Execute workflow** to run.

## Requirements

- ScraperCity account and API key (scrapercity.com)
- n8n instance (cloud or self-hosted)
- Slack workspace with a bot token and target channel

## How to customize the workflow

- Change `platform` in **Configure Search Parameters** from `shopify` to `woocommerce` to target WooCommerce stores instead.
- Increase `totalLeads` up to 5000 per run.
- Add a **Filter** node after CSV parsing to keep only leads with verified emails.
- Replace the Slack node with a Google Sheets or HubSpot node to store leads in a CRM.

## 🔗 Nodes Used

HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
