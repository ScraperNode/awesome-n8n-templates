# 🎣 Score Reddit buying-intent leads with Apify, OpenAI, Google Sheets and Slack

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Every morning this workflow searches Reddit **posts and comments** for buying-intent phrases, scores each one from 0 to 100 with OpenAI, logs every scored lead to Google Sheets and sends only the hot ones to Slack.

## How it works
1. **Every morning** runs at 08:00 and reads your phrases and product from **Settings**.
2. **Search Reddit posts and comments** finds matches from the last day across Reddit (or one subreddit).
3. **One shape for posts and comments** and **Skip leads already scored** clean up and drop items seen in earlier runs.
4. **Score buying intent** asks OpenAI for a 0-100 score, the need, and a reply angle.
5. **Log to Google Sheets** keeps every scored item. **Hot leads only** sends items at or above `minScore` to Slack.

## Setup
1. Add the **Apify** node (`@apify/n8n-nodes-apify`, a verified node) if your n8n does not have it yet.
2. Create an **Apify API** credential with the token from [Apify Console → API & Integrations](https://console.apify.com/settings/integrations). No account yet? [Sign up free](https://console.apify.com/sign-up?fpr=tl88um); the free plan includes monthly credit.
3. Add an **OpenAI** credential.
4. Create a Google Sheet with a `Leads` tab and the columns `scoredAt, score, kind, subreddit, title, need, replyAngle, author, url, text`. Connect Google Sheets and pick the file.
5. Connect Slack and pick a channel.
6. In **Settings**, describe your product and edit `phrases` (quotes mean exact match).

## Customization
- Raise `minScore` to get fewer, warmer Slack alerts.
- Set `community` to one subreddit name to search only there.
- Reddit results cost about $2 per 1,000 on Apify. The Apify node stops each run at $2.

## Additional info
For founders, agencies and sales teams who sell to people that ask Reddit for help. Reddit data comes from the [Reddit Scraper](https://apify.com/harshmaur/reddit-scraper?fpr=tl88um) Actor on Apify, so you need **no Reddit API key or OAuth app approval**.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
