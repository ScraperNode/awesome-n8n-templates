# 📊 Extract and merge Twitter (X) threads using TwitterAPI.io

> ⚡ **2,772 views** · 📊 [Market Research & Insights](../)

## Description

## Twitter (X) Thread Fetcher: Extract and Merge Tweets from Threads
### What it does

- **Thread Detection:** Automatically detects whether the provided Twitter link is a single tweet or a thread.
- **Tweet Extraction:** Fetches and returns the content of a single tweet, or gathers all tweets in a thread by retrieving the first tweet and all connected replies.
- **Thread Merging:** Merges all tweets in the correct order to reconstruct the complete thread, filtering out any empty results.
- **Seamless Integration:** Easily trigger this workflow from other n8n workflows to automate Twitter thread extraction from various sources.

### How it works
- Accepts a Twitter link as input-either a single tweet or a thread.
- If the link is for a single tweet, fetches and returns the tweet content.
- If the link is for a thread, fetches the first tweet, then iteratively retrieves all connected replies that form the thread, ensuring only relevant tweets are included.
- Merges the first tweet and all subsequent thread tweets in order, filters out any empty results, and returns the complete thread.
- Uses [twitterapi.io](https://twitterapi.io) for all Twitter API requests.

### Set up steps
- Setup typically takes just a few minutes. You’ll need to configure your Twitter API credentials for [twitterapi.io](https://twitterapi.io).
- You can trigger this workflow manually for testing or call it from another workflow to automate thread fetching from sources like Notion, spreadsheets, or other platforms.
- For best results, create a separate workflow to gather Twitter links from your preferred source, then trigger this workflow to fetch and return the full thread.

&gt; *Detailed configuration instructions and node explanations are included as sticky notes within the workflow canvas.*

### Benefits

- **Light speed:** Fetches a 15-tweet thread in just **3 seconds** for rapid results.
- **Cost effective:** Processes a **15-tweet thread** for only **$0.0027**, making it highly affordable. *(Cost may vary depending on the density of replies in the thread.)*

## 🔗 Nodes Used

Function, HTTP Request, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
