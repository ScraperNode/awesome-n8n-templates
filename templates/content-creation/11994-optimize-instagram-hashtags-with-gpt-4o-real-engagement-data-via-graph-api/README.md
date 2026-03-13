# 🎬 Optimize Instagram hashtags with GPT-4o & real engagement data via Graph API

> ⚡ **182 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Instagram Hashtag Generator Workflow

This workflow automatically generates optimal hashtags for your Instagram posts by analyzing captions and fetching real-time engagement data.

## Key Features
*   **100% Official API & Free**: Uses ONLY the official Instagram Graph API. No expensive third-party tools or risky scraping methods are required.
*   **Safe & Reliable**: Relying on the official API ensures compliance and long-term stability.
*   **Smart Caching**: Includes a Google Sheets caching mechanism to maximize the value of the official API's rate limits (30 searches/7 days).

## Workflow Overview 

1.  **Caption Input**: Set your caption manually or via a workflow trigger.
2.  **AI Suggestions**: GPT-4o-mini analyzes the caption and suggests 10 relevant hashtags, balancing popular (big words) and niche keywords.
3.  **Official API Search (Instagram Graph API)**:
    -   Fetches Hashtag IDs using the `ig_hashtag_search` endpoint.
    -   Retrieves engagement metrics (Average Likes, Average Comments) using the ID.
4.  **Selection & Sorting**:
    -   Sorts candidates by engagement metrics.
    -   Selects the top 5 most effective hashtags that balance relevance and engagement.
5.  **Output**: Returns the final list of hashtags as text.

## Setup Steps

1.  **Import to n8n**:
    -   Copy the content of `workflow_hashtag_generator.json` and paste it into your n8n canvas, or import the file directly.

2.  **Credentials**:
    -   **OpenAI account**: Connect your OpenAI credentials.
    -   **Facebook Graph account**: Connect your Facebook Graph API credentials.

3.  **Configuration**:
    -   **Instagram Business ID**: Update the `YOUR_INSTAGRAM_BUSINESS_ACCOUNT_ID` placeholder in the **Get Hashtag Info** and **Get Hashtag Metrics** nodes with your actual Business Account ID.
    -   **Google Spreadsheet ID**: Update the `YOUR_SPREADSHEET_ID` placeholder in the **Fetch Cached Hashtags** and **Save to Cache** nodes.

4.  **Adjustments**:
    -   **Filter Logic**: You can adjust the sorting or filtering logic in the `Aggregate & Rank Candidates` node's JavaScript code (e.g., exclude tags with fewer than 1000 posts) if needed.

## Important Notes on API Limits
The official **Instagram Hashtag Search API** (`ig_hashtag_search`) allows for **30 unique hashtag queries per rolling 7-day period**.
*   **Why this is fine**: This workflow caches results in Google Sheets. Once a tag is fetched, it doesn't need to be queried again for a while, allowing you to build up a large database of tags over time without hitting the limit.
*   **Recommendation**: Use mock data during initial testing to save your API quota.

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Execute Workflow Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
