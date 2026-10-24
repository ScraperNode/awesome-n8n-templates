# 🎣 Qualify Reddit leads with API Direct and OpenAI and send a daily Gmail digest

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to search Reddit via API Direct, uses an OpenAI chat model to classify posts as buying-intent leads, and sends a Gmail digest email containing only newly found qualified posts.

## How it works
1. Runs every morning on a schedule trigger.
2. Searches Reddit posts (newest first) via API Direct using your configured query.
3. Filters out posts that were already processed in earlier active runs using persisted workflow memory.
4. Uses an OpenAI chat model to classify each remaining post as a buying-intent lead based on your product description.
5. Builds an HTML digest of the qualified posts with links and key metadata.
6. Sends the digest to the configured recipient using Gmail.

## Setup
1. Add an API Direct API key credential and install/enable the API Direct community node if needed.
2. Add an OpenAI API credential for the chat model used by the classifier.
3. Connect your Gmail OAuth2 account for sending email.
4. Update the search query, product description, and digest recipient email address in the workflow’s search settings.

## Requirements
- An API Direct API key (new accounts include free credit)
- An OpenAI API key (or any chat model n8n supports)
- A Gmail account

## Customization
- Use boolean search syntax: "looking for" (crm OR "sales tool") — see apidirect.io/docs/boolean-search
- Duplicate the search node with a second phrase and merge the results
- Tighten or loosen the classifier by editing the category description

## Additional info
API Direct is a verified community node, available on n8n Cloud and self-hosted n8n — search "API Direct" in the nodes panel to install. One API key covers Twitter/X, Reddit, TikTok, Instagram, YouTube, Facebook, Threads, Truth Social and Google News/Maps/web search (58 operations), pay-as-you-go from $0.002/request.

## 🔗 Nodes Used

Gmail, Schedule Trigger, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
