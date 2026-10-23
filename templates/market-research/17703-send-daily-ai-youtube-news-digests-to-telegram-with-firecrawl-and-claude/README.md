# 📊 Send daily AI YouTube news digests to Telegram with Firecrawl and Claude

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily, uses Firecrawl to scrape a YouTube channel’s videos from the last 24 hours, summarizes AI-related technical news with Anthropic Claude (with a Fireworks DeepSeek fallback), and sends the structured digest to a Telegram chat.

## How it works
1. Runs every day at 10:00 (instance timezone).
2. Starts a Firecrawl Agent job on the configured channel's /videos page. The agent keeps only videos published in the last 24 hours and, for each one, extracts the title, URL, publish time and a detailed technical summary drawn from the description, chapters and transcript.
3. Waits 7 minutes, then polls Firecrawl for the job status and loops back to the wait until the job reports completed. Only the initial Agent call counts against your Firecrawl run quota — the status checks are free.
4. 4. Flattens the results into a single plain-text block with the title, URL and content of each video, dropping anything that came back without a title or a summary.
5. Claude Haiku 4.5 rewrites the block into a digest where every item follows the same shape: WHAT HAPPENED, THE NUMBERS, WHY IT MATTERS, and SOURCE with a link back to the video. If Claude fails, n8n retries automatically on DeepSeek via Fireworks.
6. Sends the digest to the configured Telegram chat, retrying up to five times if Telegram is briefly unavailable.

## Setup
1. Install the Firecrawl community node (@mendable/n8n-nodes-firecrawl) if your instance doesn't have it yet — both Firecrawl nodes depend on it.
2. Open the Settings node. Set youtube_channel_url to the /videos URL of the channel you want to follow, and replace the YOUR_TELEGRAM_CHAT_ID placeholder with your own chat ID (message @userinfobot on Telegram to get it).
3. Add your Firecrawl API credential to both Firecrawl nodes.
4. Add an Anthropic credential to the primary model and an OpenAI-compatible Fireworks credential to the DeepSeek fallback. If you don't want a fallback, delete that node.
5. Add your Telegram bot credential, and make sure the bot has already been started in the target chat — bots cannot message a chat that never contacted them. And adjust the trigger hour to your timezone, run the workflow once manually to confirm the digest arrives, then activate it.

## Requirements
- Firecrawl community node @mendable/n8n-nodes-firecrawl (self-hosted n8n, or n8n Cloud with community nodes enabled)
- A Firecrawl account. The free plan's 2 Agent runs per day covers the default once-a-day schedule, so the scrape costs nothing
- An Anthropic API key for the primary summarization model
- A Fireworks API key, optional, only for the fallback model
- A Telegram bot token and the chat ID that will receive the digest

## Customization
- Follow a different channel by changing youtube_channel_url in Settings
- Change the schedule, though staying at once a day keeps you inside Firecrawl's free tier
- Change the output language or the topic focus by editing the prompt in "Summarize AI news" — nothing in the pipeline is AI-specific except that wording
- Widen or narrow the 24-hour window in the Firecrawl prompt
- Replace the last node to deliver to Slack, Discord, email or a database instead of Telegram
- Swap either model; the fallback is optional

## Additional info
- The status polling loop has no attempt cap. If a Firecrawl job never reaches "completed", the execution keeps polling until you stop it. Set a workflow execution timeout if you want a hard stop.
- This reads YouTube pages through Firecrawl's browser agent rather than the YouTube Data API, so changes to YouTube's page layout may occasionally require adjusting the extraction prompt.

## 🔗 Nodes Used

Telegram, Schedule Trigger, AI Agent, Anthropic Chat Model, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
