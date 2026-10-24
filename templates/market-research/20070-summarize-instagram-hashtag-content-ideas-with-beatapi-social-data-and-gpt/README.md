# 📊 Summarize Instagram hashtag content ideas with BeatAPI Social Data and GPT

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This manual workflow pulls public Instagram posts for a given hashtag using BeatAPI Social Data, extracts up to 12 captioned posts as evidence, and sends them to a BeatAPI chat completion model to generate a cited content-idea brief.

## How it works
1. Runs when you manually execute the workflow.
2. Sets the target Instagram hashtag keyword and the BeatAPI text model to use.
3. Calls BeatAPI Social Data to fetch public Instagram hashtag posts in full view.
4. Extracts up to 12 identifiable posts (captions plus post IDs/URLs) and stops with an error if no usable results are returned.
5. Sends the sampled post evidence to the BeatAPI chat completions API to identify repeated content angles and provide cited examples.
6. Returns the generated content brief along with source metadata and BeatAPI request IDs.

## Setup
1. Create a BeatAPI API key and add an n8n HTTP Header Auth credential with `Authorization: Bearer <your_key>`, then select it in both BeatAPI HTTP Request steps.
2. Set the `keyword` value to the Instagram hashtag you want to analyze (without `#`) and choose a BeatAPI text model available to your account.
3. Run the workflow manually and review the cited post IDs/URLs before using the brief, since it is based on a limited sample (up to 12 posts).

## Additional info
BeatAPI Instagram API and use cases: https://beatapi.io/instagram-api. Create and manage your own BeatAPI API key: https://beatapi.io/dashboard/apikeys. Social Data action catalog: https://docs.beatapi.io/social-data-catalog. This workflow reads public hashtag posts only; it does not publish to Instagram.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
