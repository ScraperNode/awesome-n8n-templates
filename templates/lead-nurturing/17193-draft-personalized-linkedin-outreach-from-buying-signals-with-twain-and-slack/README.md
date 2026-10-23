# 💬 Draft personalized LinkedIn outreach from buying signals with Twain and Slack

> ⚡ **6 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow captures buying-signal leads via a webhook (or optionally polls a HubSpot list), generates a personalized LinkedIn intro and follow-up sequence with Twain, and posts the ready-to-send draft to Slack, with an optional step to stage the lead in a HeyReach campaign.

## How it works
1. Receives a lead signal via a POST webhook (or, if enabled, runs every 15 minutes to pull contacts from a HubSpot list).
2. Sets the Twain LinkedIn campaign and optional HeyReach campaign IDs, then normalizes the incoming lead fields (name, email, company, LinkedIn URL, and signal context).
3. Deduplicates leads using a stable unique identifier so previously processed contacts are skipped on future runs.
4. If the lead has no LinkedIn profile URL but has an email, optionally looks up the LinkedIn URL using Findymail (or an alternative provider you enable) and merges it back into the lead.
5. If a LinkedIn URL is available, calls the Twain Generate Sequence API to research the lead and generate an intro message plus follow-ups, or posts an error to Slack if generation fails.
6. Formats the generated messages into a review-friendly summary and posts the draft to a Slack channel for manual sending, while also optionally pushing the lead and first message into a HeyReach campaign.

## Setup
1. Create a Twain campaign for LinkedIn outreach, add your Twain API key (Header Auth), and replace `REPLACE_WITH_LINKEDIN_CAMPAIGN_ID` in LinkedIn Settings.
2. Add Slack credentials (Slack bot token) and set the destination channel for the “LinkedIn outreach ready”, “Skipped”, and “Twain error” Slack messages.
3. (Optional) Add a HeyReach API key, set `REPLACE_WITH_HEYREACH_CAMPAIGN_ID` in LinkedIn Settings, and enable the HeyReach push step if you want to stage leads there.
4. (Optional) Enable one LinkedIn lookup provider (Findymail/Apollo/People Data Labs/Proxycurl), add its API credential, and adjust the LinkedIn URL extraction in the “Apply Resolved LinkedIn” code if your provider’s response differs.
5. (Optional) To use HubSpot as the signal source, enable the schedule branch, add a HubSpot private app/service token (Bearer Auth) with `crm.lists.read` and `crm.objects.contacts.read`, and replace `REPLACE_WITH_HUBSPOT_LIST_ID` in the list memberships request.
6. If using the webhook trigger, copy the webhook URL from n8n and configure your source system to POST lead signals to the `linkedin-signal` endpoint (and add authentication before production use).

## Requirements
- Twain account

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
