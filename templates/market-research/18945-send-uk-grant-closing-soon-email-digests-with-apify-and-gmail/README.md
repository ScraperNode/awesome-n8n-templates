# 📊 Send UK grant closing-soon email digests with Apify and Gmail

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Monday and Thursday morning, triggers an Apify actor to find UK grant and funding competitions matching your keyword watchlists, and emails an HTML digest via Gmail that highlights closing-soon opportunities and newly found matches.

## How it works
1. Runs on a schedule at 7am every Monday and Thursday.
2. Calls the Apify actor `conceivable_extension/uk-grant-alerts` with your configured sources, notice types, and keyword watchlists.
3. Fetches the resulting grant matches from the Apify dataset created by the actor run.
4. Splits results into “closing soon” items (within 21 days) and other new matches, then builds an HTML email digest and a subject line based on urgency.
5. Skips the run if no new or closing-soon grants are found so no empty email is sent.
6. Sends the digest as an HTML email through Gmail when at least one relevant match exists.

## Setup
1. Add your Apify API token and replace `YOUR_APIFY_API_TOKEN` in both Apify HTTP requests.
2. Replace `YOUR_KEYWORD_1`–`YOUR_KEYWORD_5` and `YOUR_BROAD_KEYWORD_1`–`YOUR_BROAD_KEYWORD_2` in the actor request body, and adjust `minimumFunding` and `closingSoonDays` if needed.
3. Connect Gmail via OAuth2 in n8n and replace `YOUR_EMAIL@domain.com` with your recipient address.
4. Run the workflow once manually to confirm the actor returns relevant matches before enabling the Monday/Thursday schedule.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
