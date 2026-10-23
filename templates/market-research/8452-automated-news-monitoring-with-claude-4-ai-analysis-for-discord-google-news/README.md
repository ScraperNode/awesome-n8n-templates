# 📊 Send automated weekly news digest from Google News to Discord

> ⚡ **1,182 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**📺 Full walkthrough video: https://youtu.be/QHvfykuSbF8**

⚠️ **Self-hosted only** — This template uses a community node (Firecrawl) and cannot run on n8n Cloud.

## Who it's for

This workflow is for community managers, SEO professionals, or team leads who want to deliver a curated, AI-written news digest to a Discord channel automatically — without manually browsing news sources every week.

## How it works

1. A schedule trigger fires every Monday at 9am and fetches a list of watch topics from a NocoDB data table.
2. For each topic, the workflow queries Google News via SerpAPI and extracts the top 3 article URLs.
3. Each article is scraped using Firecrawl, and the raw markdown is cleaned before being passed to Claude Sonnet.
4. Claude writes a structured French-language digest entry per topic, with media name, date, URL, and a 2–3 sentence summary.
5. All topic digests are aggregated and split into Discord-safe chunks (under 2000 characters).
6. An intro message is sent to Discord first, then each chunk is sent in a loop, followed by a closing conclusion message.

## How to set up

- [ ] Configure the **Schedule Trigger** with your desired run frequency
- [ ] Connect **NocoDB** credentials and point the table node to your watch topics table
- [ ] Add your **SerpAPI** API key to the Search Google News node
- [ ] Add your **Firecrawl** API key to the Scrape Article Content node
- [ ] Add your **Anthropic** credentials to the Claude Sonnet sub-node
- [ ] Connect your **Discord bot** and set the correct server and channel IDs

## Requirements

- NocoDB (or compatible data table) account
- SerpAPI account
- Firecrawl account
- Anthropic API key
- Discord bot with message permissions

## How to customize

- Swap NocoDB for Airtable or Google Sheets to manage your watch topics list
- Edit the AI prompt in the "Draft Watch Summary with AI" node to change the language, tone, or output structure of the digest
- Adjust the `DISCORD_CHAR_LIMIT` constant in the "Split Text for Discord" code node to handle different message size constraints

## 🔗 Nodes Used

Discord, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
