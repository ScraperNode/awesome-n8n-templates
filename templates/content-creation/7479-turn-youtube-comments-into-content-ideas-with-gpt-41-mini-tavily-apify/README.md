# 🎬 Turn YouTube comments into content ideas with GPT-4.1-mini, Tavily & Apify

> ⚡ **685 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description

This n8n template demonstrates how to turn raw YouTube comments into **research-backed content ideas** complete with **hooks and outlines**.

Use cases include:

* Quickly mining a competitor’s audience for video ideas.  
* Generating hooks and outlines for your own channel’s comments.  
* Validating content opportunities with live audience feedback.  

**Good to know**

* Apify is used to scrape YouTube comments (requires an API token).  
* GPT-4.1-mini is used for both filtering and content generation.  
* Tavily provides fresh research to ground the AI’s responses.  
* All outputs are stored in Google Sheets, making it easy to manage and track ideas.  

---

## How it works

1. **Trigger** – Paste a YouTube URL into the chat trigger.  
2. **Scrape Comments** – Apify fetches all comments and metadata.  
3. **Filter** – GPT-4.1-mini decides if each comment could inspire a content idea.  
4. **Store** – Comments and “Yes/No” decisions are appended to Google Sheets.  
5. **Research & Enrich** – For “Yes” comments, Tavily provides context, and GPT generates a topic, hook, and outline.  
6. **Update Sheet** – The same row in Google Sheets is updated with enriched fields.  

---

## Google Sheets Setup  

Your Google Sheet should include these columns (in this order):  


id | text | author | likes | isIdea | topic | research | hook | outline
- **id** – unique identifier for each comment  
- **text** – the full YouTube comment  
- **author** – commenter’s name/handle  
- **likes** – number of likes on the comment  
- **isIdea** – “Yes” or “No” depending on GPT filter  
- **topic** – extracted video topic  
- **research** – 300–500 word background from Tavily  
- **hook** – engaging opening sentence for a video  
- **outline** – structured video outline  

---

## Setup Steps

* Connect your **Apify**, **OpenAI**, **Tavily**, and **Google Sheets** credentials in n8n.  
* Point the Google Sheets nodes to your own document and ensure the above headers exist.  
* Replace sample API keys with your own stored in n8n Credentials.  

**Time to set up:** \~15–25 minutes for a first-time n8n user (less if you already have credentials handy).  

---

## Customizing this workflow  

* **Filter logic** – Loosen the GPT filter to allow borderline ideas, or tighten it to only accept the best ones.  
* **Research depth** – Change Tavily’s search depth (e.g., `depth: basic` vs `depth: advanced`) to control how detailed the background research is.  
* **Notification channels** – Send new “Yes” ideas directly to **Slack** (`#content-ideas`), **Notion** (your content board), or **Email** (notify the content manager instantly).  
* **Alternative outputs** – Instead of hooks/outlines, generate:  
  - A **script draft** for YouTube Shorts.  
  - **Blog post angles** based on the same audience comments.  
  - A **poll question** for community engagement.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, Chat Trigger, OpenAI, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
