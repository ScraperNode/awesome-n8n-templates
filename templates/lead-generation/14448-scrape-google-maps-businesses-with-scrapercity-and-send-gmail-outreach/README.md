# 🎣 Scrape Google Maps businesses with ScraperCity and send Gmail outreach

> ⚡ **351 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

This workflow is built for agencies, freelancers, and local service businesses who want to automate prospecting. If you sell services to local businesses -- web design, SEO, bookkeeping, HVAC -- this workflow finds your prospects and reaches out for you.

## How it works

1. A manual trigger kicks off the workflow with your configured search parameters (business type and city).
2. ScraperCity's Google Maps scraper extracts up to 500 business listings -- names, websites, addresses, and phone numbers.
3. The workflow polls until the scrape completes, then downloads and parses the results.
4. For each business with a website, the ScraperCity email finder locates the owner's email address using the business domain.
5. Once emails are found, Gmail sends a personalized outreach message to each contact using their business name and city.

## How to set up

1. Create a free ScraperCity account at app.scrapercity.com and copy your API key.
2. In n8n, create an HTTP Header Auth credential named "ScraperCity API Key" with the header name `Authorization` and value `Bearer YOUR_KEY`.
3. Connect your Gmail account via OAuth2 in n8n credentials.
4. Open the **Configure Search Parameters** node and update the business type, city, and your sender details.
5. Customize the email subject and body in **Send Outreach Email**.

## Requirements

- ScraperCity account (app.scrapercity.com) -- free tier available
- Gmail account connected via n8n OAuth2
- n8n instance (cloud or self-hosted)

## How to customize the workflow

- Change `businessType` and `locationQuery` in **Configure Search Parameters** to target any niche or city.
- Edit the email body in **Send Outreach Email** to match your offer.
- Add a Google Sheets node after **Send Outreach Email** to log sent contacts.
- Increase `maxCrawledPlacesPerSearch` up to 500 for larger campaigns.

## 🔗 Nodes Used

HTTP Request, Gmail, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
