# 💬 Draft and stage LinkedIn re-engagements with HeyReach, Twain, and Slack

> ⚡ **17 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly (or manually) to pull tagged “cold” HeyReach conversations, uses Twain to draft context-aware re-engagement messages, then stages leads in a HeyReach list and notifies Slack for review while tagging processed leads to avoid duplicates.

## How it works
1. Runs on a weekly schedule or via a manual trigger.
2. Fetches all conversations from the HeyReach Inbox API using pagination.
3. Filters conversations by HeyReach lead tags (include tags like “Cold”/“Not interested” and exclude tags like “Re-engaged”) and extracts each lead’s LinkedIn URL, name, and prior message thread.
4. Sends the conversation context to Twain to generate a re-engagement sequence draft and add the contact to the specified Twain campaign.
5. Adds the lead to a HeyReach re-engagement list and stores the first Twain draft message in a custom user field.
6. Posts the drafted re-engagement message to a Slack channel for review.
7. Tags the lead as “Re-engaged” in HeyReach to prevent reprocessing.

## Setup
1. Add HeyReach API credentials for HTTP Header Auth and ensure the header matches HeyReach requirements (for example, `X-API-KEY`).
2. Add Twain API credentials for HTTP Header Auth and ensure the header matches Twain requirements (for example, `X-Api-Key`) and have a Twain campaign ID ready.
3. Connect your Slack account and set the target channel name used for notifications.
4. In the Settings values, fill in `reengagement_campaign_id` and `reengagement_list_id`, and adjust `include_tags`, `exclude_tags`, and `reengaged_tag` to match your HeyReach tagging scheme.
5. Ensure the HeyReach list exists for staging re-engagement leads and that your team reviews/sends messages from HeyReach (this workflow drafts and stages messages rather than sending them).

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
