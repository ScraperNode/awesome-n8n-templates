# 📊 Monitor viral competitor Instagram posts with Apify, Groq, Google Sheets and Slack

> ⚡ **66 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Every morning this workflow reads the newest posts from the competitor accounts you name, works out which ones beat that account's own normal engagement, has an AI read the caption, appends them to a Google Sheet and pings Slack only when something breaks out.

## How it works
1. A Schedule Trigger fires daily. One Config node holds the handles, posts per profile, viral multiplier and Slack channel.
2. It loops over the handles, running the Instagram Profile Posts Scraper on Apify for each and keeping the post rows only.
3. Remove Duplicates drops every post seen in an earlier execution, so each morning brings yesterday's posts only.
4. A Code node adds engagement (likes plus comments) and compares each post with the median for its own account, so big and small accounts are judged fairly. At or above the multiplier is flagged viral.
5. An Information Extractor reads the caption for theme, tone, format and CTA.
6. Google Sheets appends a row per post. Slack is pinged only if something broke out.

## Setup
1. Create an HTTP Header Auth credential (name `Authorization`, value `Bearer YOUR_APIFY_TOKEN`) and select it on the HTTP Request node.
2. Add a Groq credential on the chat model node - a drop-in swap for OpenAI or Anthropic.
3. Connect Google Sheets and Slack, then list the accounts to watch.

## Requirements
- An Apify account, a chat model account, Google Sheets and Slack.
- Posts are charged only when delivered.

## Customization
- Raise `viralMultiplier` to 3 for a quieter alert.
- Chain the run into the Instagram Reel Transcript Scraper to transcribe video posts too.

## Additional info
Social media managers watching competitor accounts who want to hear about the posts that broke out, not about every post.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Groq Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
