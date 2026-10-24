# ⚙️ Monitor scraper and endpoint health with Datasource Pulse and Slack alerts

> ⚡ **3 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 6 hours to check an Apify scraper’s recent runs and a downstream HTTP endpoint using the Datasource Pulse Apify Actor, and sends a Slack alert for any check that is not healthy.

## How it works
1. Runs every 6 hours on a schedule.
2. Executes the Datasource Pulse Apify Actor with two checks: an Apify Actor-run health check and a generic HTTP endpoint reachability check.
3. Evaluates each check result and filters for verdicts where the state is not `healthy`.
4. Sends a formatted Slack message to the selected channel with the check label, state, optional failure class, and the returned message.

## Setup
1. Install the Apify community node in n8n and add an Apify credential.
2. In the Datasource Pulse actor input JSON, set your scraper `actorId`, provide an `apifyToken` with Actor read and run-read scope, and update the target `url` and expected `successStatusCode` for the endpoint check.
3. Add Slack credentials and choose the channel to receive alerts.

## Requirements
- Apify account (free tier works; each check costs $0.02 per run)
- Apify community node (verified on n8n Cloud; self-hosted installs @apify/n8n-nodes-apify)
- Slack connection that can post to your alert channel

## Customization
- Point the checks at your own scraper (actorId) and endpoint (url) in Input JSON
- Datasource Pulse also validates API keys for 35+ pre-wired vendors, a head start, not a limit: anything with an HTTP endpoint fits a generic_http check
- Adjust the schedule; cost scales with runs per day (2 checks every 6 hours is about $4.90/month)

## Additional info
Datasource Pulse is a pay-per-event Apify Actor for monitoring the plumbing under data products: API key validity, quota burn against your own caps, endpoint reachability, scraper and actor run health, output volume drops, cost spikes, and staleness. Every check returns one verdict with a stable failure_class field, so workflows can route on it (retry, escalate, page someone) instead of parsing error text. Checks cost $0.02 each; there is no subscription.

Companion templates from the same actor: "Validate API keys and quotas daily with Datasource Pulse and Gmail alerts" and "Detect Apify actor output drift with Datasource Pulse and email alerts".

Field reference, more recipes, and webhook output options: https://datasourcepulse.com/integrations/n8n

## 🔗 Nodes Used

Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
