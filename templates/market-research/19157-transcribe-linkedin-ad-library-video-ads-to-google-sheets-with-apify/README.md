# 📊 Transcribe LinkedIn Ad Library video ads to Google Sheets with Apify

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Every Monday this workflow transcribes your competitors' new LinkedIn video ads, has an AI classify the hook and offer, appends the new ones to a Google Sheet and posts a digest to Slack.

## How it works
1. A Schedule Trigger fires weekly. One Config node holds the Ad Library URLs, the ads per competitor and the Slack channel.
2. It loops over the competitors: each Ad Library page is scraped on Apify, then that run's dataset goes straight to the LinkedIn Ads Transcript Scraper.
3. Remove Duplicates drops every ad seen in an earlier execution, so a weekly run only reports new creatives. Nothing new means nothing is written and nothing is sent.
4. An Information Extractor classifies each new ad: hook type, offer, CTA, persona, angle and why it works.
5. Google Sheets appends a row per ad; Slack gets the five longest new hooks.

## Setup
1. Create an HTTP Header Auth credential (name `Authorization`, value `Bearer YOUR_APIFY_TOKEN`) and select it on the three HTTP Request nodes.
2. Add a Groq credential on the chat model node - a drop-in swap for OpenAI or Anthropic.
3. Connect Google Sheets and Slack, then paste your competitors' Ad Library URLs into Config.

## Requirements
- An Apify account, a chat model account, Google Sheets and Slack.
- Transcription is charged only when text is delivered; ads with no speech are uncharged.

## Customization
- Swap in any Ad Library scraper - the transcript step reads the run by dataset ID.
- Change the digest ranking in the Code node.

## Additional info
B2B demand generation and ABM managers who watch a fixed list of competitors and want the message, not the thumbnail.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Groq Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
