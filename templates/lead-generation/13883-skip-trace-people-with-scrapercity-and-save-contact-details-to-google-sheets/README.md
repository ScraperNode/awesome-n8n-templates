# 🎣 Skip trace people with ScraperCity and save contact details to Google Sheets

> ⚡ **38 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

This workflow is for skip tracers, real estate investors, debt collectors, and data brokers who need to find current contact details -- phone numbers, email addresses, and physical addresses -- for a list of people using only names, phone numbers, or email addresses as inputs.

## How it works

1. A configuration node lets you define up to five people to search (by name, phone, or email).
2. The workflow submits a skip trace job to the ScraperCity People Finder API and captures the returned run ID.
3. A polling loop checks job status every 60 seconds until the scrape is marked SUCCEEDED (scrapes typically take 10--60 minutes).
4. Once complete, the results CSV is downloaded, parsed, and deduplicated.
5. Clean contact records are written row-by-row into a Google Sheet.

## How to set up

1. Create a ScraperCity account at app.scrapercity.com and copy your API key.
2. In n8n, create a Header Auth credential named **ScraperCity API Key** with the header name `Authorization` and value `Bearer YOUR_KEY`.
3. Connect your Google Sheets OAuth2 credential.
4. Open the **Configure Search Inputs** node and replace the sample names/phones/emails.
5. Set your Google Sheet ID and sheet name in the **Write Results to Google Sheets** node.
6. Click **Execute workflow**.

## Requirements

- ScraperCity account (app.scrapercity.com)
- Google Sheets OAuth2 credential in n8n

## How to customize the workflow

- Swap the manual trigger for a Schedule trigger to run nightly.
- Feed inputs from a Google Sheet instead of the Set node to process large lists.
- Add a Filter node after parsing to keep only records that have a verified phone number.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
