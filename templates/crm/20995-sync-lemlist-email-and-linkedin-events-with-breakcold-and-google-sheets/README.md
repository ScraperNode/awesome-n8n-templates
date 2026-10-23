# 🤝 Sync Lemlist email and LinkedIn events with Breakcold and Google Sheets

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives Lemlist email and LinkedIn activity events via webhook, posts recognized events to the matching lead’s timeline in Breakcold as custom activities, and appends every event (including failures and unrecognized types) to a Google Sheets audit log.

## How it works
1. Receives Lemlist activity events through an incoming POST webhook.
2. Normalizes each payload by extracting the event type, timestamp, lead email, campaign and sequence step, plus custom variables like `breakcold_lead_id` and `contact_id`.
3. Drops non-lead events and optionally rejects requests that do not match the configured shared webhook secret.
4. Routes the event by type, treating 12 specific Lemlist email/LinkedIn events as recognized and marking everything else as unrecognized.
5. For recognized events with a `breakcold_lead_id`, sends a POST request to the Breakcold API to create a custom activity on the record’s timeline, and captures any API errors without stopping execution.
6. Appends a row to Google Sheets for every event with timestamp, contact and campaign details, channel, event type, sequence step, a matched flag, and an error reason such as `no_breakcold_id`, `unrecognized_event_type`, or a Breakcold error code.

## Setup
1. In Lemlist, configure a webhook for the desired email and LinkedIn activity events and point it to this workflow’s production webhook URL.
2. Create a Breakcold API key and add an n8n HTTP Header Auth credential that sends `Authorization: Bearer YOUR_BREAKCOLD_API_KEY`.
3. Create a Google Sheet with an `Events` tab and columns for `timestamp, contact_id, campaign_id, client, channel, event_type, sequence_step, matched, error`, then connect your Google Sheets credential and select the target spreadsheet.
4. Ensure Lemlist leads include the custom variable `breakcold_lead_id` (and optionally `contact_id`) so events can be matched to Breakcold records.
5. Update the configuration in the normalization code (at least `CLIENT_NAME`, and `SECRET` if you enable a shared secret check).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
