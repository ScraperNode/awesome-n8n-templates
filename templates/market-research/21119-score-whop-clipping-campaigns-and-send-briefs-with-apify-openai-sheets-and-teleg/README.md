# 📊 Score Whop clipping campaigns and send briefs with Apify, OpenAI, Sheets and Telegram

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every morning to pull Whop Content Rewards clipping campaigns via Apify, estimates what each campaign pays at your typical views, uses OpenAI to score niche fit and extract rules, logs all results to Google Sheets, and sends the best clip briefs to Telegram.

## How it works
1. Runs every day at 8am on a schedule.
2. Pulls up to 50 Whop Content Rewards campaigns from the directory using Apify, applying filters like platforms, minimum payout per 1,000 views, budget left, budget progress, and creator count.
3. Skips campaigns already seen in previous executions to avoid reprocessing and repeated AI costs.
4. Calculates estimated pay per post from the CPM rate and your typical views, along with budget/competition context and platform overlap.
5. Uses OpenAI to score each campaign’s fit for your niche and platforms, extract posting requirements from the campaign text, and flag the most likely rejection risk.
6. Appends one row per campaign (including rejected ones and reasons) to a Google Sheets tab for tracking over time.
7. Filters to campaigns that meet your minimum fit and pay thresholds, caps the number of briefs, generates a concise clip brief with OpenAI, and sends it to Telegram with key stats and the campaign link.

## Setup
1. Create an [Apify account](https://apify.com/?fpr=youssef), open the [Whop Content Rewards Scraper](https://apify.com/fayoussef/whop-clipping-campaigns-scraper?fpr=youssef), and add your Apify credentials in n8n.
2. Add an OpenAI API credential in n8n for the campaign scoring and brief-writing steps.
3. Add a Google Sheets OAuth credential, paste your Google Sheet URL, and ensure the target tab name (for example, “Campaigns”) exists.
4. Add a Telegram bot credential, set your Telegram chat ID, and confirm the bot can message the target chat.
5. Update the creator profile and thresholds (niche, platforms, typical views, won’t-post topics, minimum fit, minimum pay per post, and max briefs) to match your channel and preferences.

## Requirements
- An [Apify account](https://apify.com/?fpr=youssef) and the [Whop Content Rewards Scraper](https://apify.com/fayoussef/whop-clipping-campaigns-scraper?fpr=youssef), which reads the public campaign directory including budget spent, creator counts and the rules text. An OpenAI API key for the two AI steps. A Google account for the sheet. A Telegram bot and your chat id.

## Customization
- Raise minPayPerPost so you only see campaigns worth your editing time, or set maxCreators to hunt low-competition ones. Change typicalViewsPerPost whenever your median moves, since every pay figure is built from it. Swap the OpenAI node for Anthropic, Gemini or a local model, and Telegram for Discord, Slack or Gmail. The Code node that works out the money is plain JavaScript, so you can add your own rule, for example a minimum unspent budget per creator.

## Additional info
Nothing here guarantees a payout. The pay per post is arithmetic on the view count you entered, not a promise, and the posting rules are read out of the campaign's own text, so open the campaign page before you post. When a campaign publishes no requirements, the brief says so and tells you to read the page rather than inventing a checklist. Every campaign scored is written to the sheet, rejections included, so after a few weeks you can see which campaigns are still paying and which have had their budget eaten.

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
