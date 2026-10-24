# 💬 Send and track LinkedIn outreach with Airtable, Unipile, and OpenRouter

> ⚡ **31 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow automates LinkedIn outreach by using Airtable as a CRM, Unipile to fetch profiles and send connection requests/messages, and OpenRouter to generate personalized connection notes and follow-ups, while tracking accepts and replies via Unipile webhooks.

## How it works
1. Runs every weekday at 09:00 to pull up to 15 Airtable leads with Connection Status set to New.
2. For each lead, derives the LinkedIn public identifier, fetches the LinkedIn profile from Unipile, and uses OpenRouter to generate a personalized connection note capped at 300 characters.
3. Sends the LinkedIn connection request via Unipile, updates the Airtable record with request details (note, timestamps, invitation ID), and waits 30–90 seconds between sends.
4. Receives Unipile new_relation webhook events, matches the lead by Provider ID, and marks the Airtable record as Accepted with an Accepted At timestamp.
5. Receives Unipile message_received webhook events, filters to inbound replies, finds the matching Airtable lead, and marks it Replied while stopping the campaign.
6. Runs daily at 10:00 to find accepted, no-reply leads due for follow-up, uses OpenRouter to write follow-up #1 or #2, sends the DM via Unipile, logs follow-up timestamps in Airtable, and marks the campaign Completed after follow-up #2.

## Setup
1. Create or choose an Airtable base/table for your leads and update the Base ID, Table ID, and field names used for statuses, timestamps, Provider ID, and message history.
2. Add an Airtable Personal Access Token credential with access to the selected base.
3. Add a Unipile API credential (X-API-KEY), then set your Unipile accountId and dsn values in both configuration steps used by the connection-sender and follow-up flows.
4. Add an OpenRouter API credential and select the models you want to use for the connection-note and follow-up generation.
5. In Unipile, register two webhooks (new_relation and message_received) pointing to this workflow’s webhook URLs (unipile-new-relation and unipile-message-received).

## Requirements
- A LinkedIn account connected to Unipile (premium recommended: ~80–100 invites/day and full 300-character notes).
- A Unipile account + API key (DSN from your Unipile dashboard).

- An Airtable account with a Personal Access Token.
- An OpenRouter API key (any capable chat model).
- A publicly reachable n8n instance so Unipile can deliver the two webhooks.
- No community nodes needed — the LinkedIn calls use core HTTP Request nodes against Unipile's REST API.

## Customization
- Volume & timing: change the daily cap (default 15), the schedule times/timezone, and the random 30–90s delay between actions.
- Voice & offer: edit the system prompts in the Write Connection Note and Write Follow-up nodes to match your ICP, tone, and value proposition.
- Model: swap the OpenRouter model on any AI node to trade cost for quality.
- Follow-up cadence: adjust the +3-day / +4-day timing (in the Fetch Due Follow-ups Airtable formula), or add a 3rd follow-up.
- Channel options: switch invites to InMail, or extend the note/DM logic.
- Robustness: add an Email field to cover invites LinkedIn requires an email for, add an Activity Log table, or wire a workflow-level error workflow for alerts.

## Additional info
Three independent flows in one workflow (2 schedule triggers + 2 webhook triggers). They run separately and share the Airtable table as the single source of truth — Provider ID is the join key across all three.
Acceptance detection is not instant by design: LinkedIn provides no real-time "accepted" event, so Unipile's new_relation webhook can fire up to ~8 hours after acceptance. Replies (message_received) are near real-time.
Rate-safe: batches are capped and spaced with randomized delays to respect LinkedIn's automation limits — keep daily volume within your account's tier.
Webhooks acknowledge immediately (HTTP 200) then process, so Unipile never times out.
On first live run, confirm the exact Unipile response field names (e.g. provider_id, invitation_id, webhook payload keys) against your account and tweak the mapping expressions if needed.
Credentials are not included in the template — after importing, add your own Airtable, Unipile, and OpenRouter credentials and fill the Set Config placeholders (YOUR_DSN, REPLACE_WITH_UNIPILE_ACCOUNT_ID).


Contact

Email: salmanmesalmanmehboob1947@gmail.com
Linkedin: https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
