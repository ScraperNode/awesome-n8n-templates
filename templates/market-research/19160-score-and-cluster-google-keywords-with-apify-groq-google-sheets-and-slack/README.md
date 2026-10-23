# 📊 Score and cluster Google keywords with Apify, Groq, Google Sheets and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Paste a keyword list into a built-in n8n form and get it back triaged: Google Ads Keyword Planner volume, competition and CPC, an AI intent label, a topic cluster and the page type, ranked by opportunity score in a Google Sheet, with the ten best posted to Slack.

## How it works
1. Submit the built-in n8n form with your keywords, country and language, or run it manually with the demo list.
2. One HTTP Request runs the Keyword Search Volume Scraper on Apify for the licensed metrics. Keywords Google has no data for are uncharged.
3. An Information Extractor labels each keyword with its intent, a short topic cluster and the page type worth building.
4. A Code node scores it: `volume x (1 - competition/100) / CPC`, favouring high volume, low competition and cheap clicks, then sorts by that score.
5. Remove Duplicates drops keywords already scored for that country, Sheets appends the rest, and the ten best go to Slack.

## Setup
1. Create an HTTP Header Auth credential (name `Authorization`, value `Bearer YOUR_APIFY_TOKEN`) and select it on the HTTP Request node.
2. Add a Groq credential on the chat model node - a drop-in swap for OpenAI or Anthropic.
3. Connect Google Sheets and Slack, then open the form URL and paste a list.

## Requirements
- An Apify account, a chat model account, Google Sheets and Slack.
- Keywords are charged only when Google returns metrics.

## Customization
- Reweight the scoring formula in the Code node.
- Set `mode` to `ideas` in Config to expand every seed into new ideas.

## Additional info
SEO and SEM specialists who need Keyword Planner figures without a Google Ads account and want the list triaged before they read it.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, n8n Form Trigger, Groq Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
