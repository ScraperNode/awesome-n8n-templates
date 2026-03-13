# 📊 Instagram visual analysis with Apify scraping, OpenAI GPT-5 & Google Sheets

> ⚡ **1,088 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Pull recent Instagram post media for any username, fetch the image binaries, and run automated **visual analysis** with OpenAI — all orchestrated inside n8n. This workflow uses a Google Sheet to supply target usernames, calls Apify’s Instagram Profile Scraper to fetch recent posts, downloads the images, and passes them to an OpenAI vision-capable model for structured analysis. Results can then be logged, stored, or routed onward depending on your use case.

---

## 🧑‍💻 Who’s it for
- Social media managers analyzing competitor or brand posts  
- Marketing teams tracking visual trends and campaign content  
- Researchers collecting structured insights from Instagram images  

---

## ⚙️ How it works
1. **Google Sheets** – Supplies Instagram usernames (one per row).  
2. **Apify Scraper** – Fetches latest posts (images and metadata).  
3. **HTTP Request** – Downloads each image binary.  
4. **OpenAI Vision Model** – Analyzes visuals and outputs structured summaries.  
5. **Filter & Split Nodes** – Ensure only the right rows and posts are processed.  

---

## 🔑 Setup Instructions

### 1) Connect Google Sheets (OAuth2)
1. Go to **n8n → Credentials → New → Google Sheets (OAuth2)**  
2. Sign in with your Google account and grant access  
3. In the **Get Google Sheet** node, select your spreadsheet + worksheet (must contain a `User` column with Instagram usernames)  

### 2) Connect Apify (HTTP Query Auth)
1. Get your **Apify API token** at [Apify Console → Integrations/API](https://console.apify.com/account/integrations)  
2. In **n8n → Credentials → New → HTTP Query Auth**, add a query param `token=&lt;YOUR_APIFY_TOKEN&gt;`  
3. In the **Scrape Details** node, select that credential and use the provided URL:  


### 3) Connect OpenAI (API Key)
1. Create an API key at [OpenAI Platform](https://platform.openai.com/api-keys)  
2. In **n8n → Credentials → New → OpenAI API**, paste your key  
3. In the **OpenAI Chat Model** node, select your credential and choose a **vision-capable model** (`gpt-4o-mini`, `gpt-4o`, or `gpt-5` if available)  

---

## 🛠️ How to customize
- Change the **Google Sheet schema** (e.g., add campaign tags or notes).  
- Adjust the **OpenAI system prompt** to refine what details are extracted (e.g., brand logos, colors, objects).  
- Route results to **Slack, Notion, or Airtable** instead of storing only in Sheets.  
- Apply filters (hashtags, captions, or timeframe) directly in the Apify scraper config.  

---

## 📋 Requirements
- n8n (Cloud or self-hosted)  
- Google Sheets account  
- Apify account + API token  
- OpenAI API key with a funded account  

---

## 📬 Contact  
Need help customizing this (e.g., filtering by campaign, sending reports by email, or formatting your PDF)?  

- 📧 **rbreen@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
