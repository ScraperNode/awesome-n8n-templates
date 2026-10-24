# 🎣 Sync dental leads from Apify Google Maps to HighLevel CRM opportunities

> ⚡ **10 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Video: https://youtu.be/FUI6QNU9IJE

This workflow runs weekly to pull dentist leads from Apify Google Maps scraping results, normalizes the data, and syncs them to HighLevel (GoHighLevel) by upserting contacts and creating opportunities when needed, with Slack alerts sent if the workflow fails.

## How it works
1. Runs weekly on a schedule.
2. Calls the Apify Google Maps actor to fetch dental clinic listings for the configured locations and keywords.
3. Limits processing to the first 5 results, normalizes fields (name, phone, website, domain, address, ratings), and drops entries without a name plus at least a phone or website.
4. Searches HighLevel contacts by phone number and marks each lead as new or existing based on whether a matching contact is found.
5. For new leads, upserts the contact in HighLevel and then checks whether an opportunity already exists for that contact.
6. For existing leads, checks HighLevel for an existing opportunity using the lead’s phone number.
7. Creates a new HighLevel opportunity in the specified pipeline and stage for any lead that does not already have an opportunity.
8. If any node errors, posts a failure message to the configured Slack channel with the node name and error details.

## Setup
1. Add an Apify API token (HTTP Header Auth) and update the Apify actor input (search terms, locations, max results) to match your targeting.
2. Connect your HighLevel (GoHighLevel) OAuth2 credentials and replace the locationId, pipelineId, and stageId values with those from your account.
3. Ensure your HighLevel account is set up to allow contact upserts and opportunity creation in the selected pipeline.
4. Add Slack credentials and select the channel where you want workflow failure alerts to be posted.
5. Adjust the item limit if you want to process more than 5 leads per run.

## 🔗 Nodes Used

HTTP Request, Slack, HighLevel, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
