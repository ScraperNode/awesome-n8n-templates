# 🎣 Find business emails from contact names and domains using ScraperCity

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Who is this for

Sales development reps, growth marketers, and recruiters who need to find verified business email addresses at scale from a list of contacts -- without manual lookups or guesswork.

## How it works

1. A Set node holds your list of contacts (first name, last name, and company domain).
2. An HTTP Request node POSTs the contacts to the ScraperCity email-finder API, which returns a `runId`.
3. A second Set node stores the `runId` for use in subsequent requests.
4. The workflow waits 30 seconds, then polls the ScraperCity status endpoint in a loop until the job status is `SUCCEEDED`.
5. Once complete, the results are downloaded via the ScraperCity download endpoint.
6. A Code node parses the response and formats each contact row.
7. Results are written to Google Sheets, giving you a clean, ready-to-use email list.

## How to set up

1. Create a ScraperCity account at scrapercity.com and copy your API key.
2. In n8n, create an HTTP Header Auth credential named `ScraperCity API Key` with header `Authorization` and value `Bearer YOUR_KEY`.
3. Set your Google Sheets document ID and sheet name in the Google Sheets node.
4. Update the contacts list in the `Set Contact List` node with your real contacts.

## Requirements

- ScraperCity account with email-finder credits
- Google Sheets OAuth2 credential configured in n8n

## How to customize the workflow

- Replace the manual contact list with a Google Sheets `Get Rows` node to process a dynamic list.
- Add a Slack or email notification node after the results are written to alert your team.
- Add a Filter node to keep only contacts where an email was successfully found.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
