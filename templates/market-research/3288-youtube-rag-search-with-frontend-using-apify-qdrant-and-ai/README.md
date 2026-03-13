# 📊 Youtube RAG search with frontend using Apify, Qdrant and AI

> ⚡ **4,398 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

### Ever wanted to build your own RAG search over Youtube videos? Well, now you can! This n8n template shows how you can build a very capable Youtube search engine powered by Apify, Qdrant and your LLM of choice to quickly and efficiently browse over many videos for research.

I originally started to template to ask questions on the "n8n @ scale office-hours" livestream videos but then extended it to include the latest videos on the official channel.

**Check out a demo here**: [https://jimleuk.app.n8n.cloud/webhook/n8n_videos](https://jimleuk.app.n8n.cloud/webhook/n8n_videos)

## How it works
* Stage 1 is to collect the Youtube video transcripts and push them into a vector database. For this, I've used Apify to scrape Youtube and Qdrant to store the embeddings.
* Transcripts are broken down into smaller chunks and carefully tagged with metadata to assist in later search and filtering.
* Stage 2 is to build a web frontend for the user to query the vectorised transcripts. I'm using a webhook to serve a simple web app and API to dynamically fetch the results.
* When searching for a video, I've opted to use Qdrant's search groups API which in this use-case, performs better as it returns a wider range of videos results.
* In the web frontend, when the user clicks on the results, the matching Youtube video plays in an embedded video player.

## How to use
* Once credentials are all set, first run steps 1 - 3 to populate your vector store.
* Next, set the workflow to active to expose the web frontend. Visit the webhook URL in your browser to use it.
* If only for personal use, you may want to remove the rate limiting mechanism in step 4.

## Requirements
* Apify for Youtube Channel and Video Scraping
* Qdrant for Vector store
* OpenAI for LLM and Embeddings

## Customising the template
* Not interested in official n8n videos? Swap to a different channel - this template will work on many as long as videos are not private or set to prevent embeds.
* Technically any vector store should work but may not have the same grouping API. Use the simple vector store node and revert back to basic searching instead.

## 🔗 Nodes Used

HTTP Request, Redis, Webhook, Execute Sub-workflow, Markdown, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
