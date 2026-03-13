# 🔬 Extract Amazon book data & generate purchase reports with Decodo Scraper

> ⚡ **442 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Decodo Scraper API Workflow Template (n8n Automation Amazon Book Purchase Report)
### Watch the demo video below:
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/how-to-use-scraper-api-with-n8n.jpg)](https://www.youtube.com/watch?v=9Kn583UJlqY)
&gt; This workflow demos how to use **Decodo Scraper API** to crawl any public web page (headless JS, device emulation: mobile/desktop/tablet), extract structured product data from the returned HTML, generate a **purchase-ready report**, and automatically deliver it as a **Google Doc + PDF** to Slack/Drive.
## 🚀 Try Decodo — Web Scraping & Data API (Coupon: **TRUNG**)
![Decodo Logo](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/decodo-logo-black.jpg)
**Decodo** is a powerful public data access platform offering managed web scraping APIs and proxy infrastructure to collect structured web data at scale. It handles proxies, anti-bot protection, JavaScript rendering, retries, and global IP rotation—so you can focus on data, not scraping complexity.
**Why Decodo**
- Managed **Web Scraping API** with anti-bot bypass & high success rates  
- Works with JS-heavy sites; outputs JSON/HTML/CSV  
- Easy integration (Python, Node.js, cURL) for eCommerce, SERP, social & general web data
**🎟️ Special Discount**
Use coupon **`TRUNG`** to get the **Advanced Scraping API** plan — ~**23,000 requests for ~$5**.

## Who’s it for
- **Creators / Analysts** who need quick product lists (books, gadgets, etc.) with prices/ratings.
- **Ops & Marketing teams** building weekly “top picks” reports.
- **Engineers** validating the Decodo Scraper API + LLM extraction pattern before scaling.

## How it works / What it does

1. **Trigger** – Manually run the workflow.
2. **Edit Fields (manual)** – Provide inputs:
   - `targetUrl` (e.g., an Amazon category/search/listing page)
   - `deviceType` (`desktop` | `mobile` | `tablet`)
   - Optional: `maxItems`, `notes`, `reportTitle`, `reportOwner`
3. **Scraper API Request (HTTP Request → POST)**  
   Calls **Decodo Scraper API** with:
   - URL to crawl, **headless JS** enabled
   - **Device emulation** (UA + viewport)
   - Optional **waitFor / executeJS** to ensure late-loading content is captured
4. **HTML Response Parser (Code/Function or HTML node)**  
   Pulls the HTML string from Decodo response and normalizes it (strip scripts/styles, collapse whitespace).
5. **Product Analyzer Agent (LLM + Structured Output Parser)**  
   Prompts an LLM to extract **structured “book” objects** from the HTML:
   The **Structured Output Parser** enforces a strict JSON schema and drops malformed items.
6. **Build 📚 Book Purchase Report (Code/LLM)**  
   Converts the JSON array into a **Markdown** (or HTML) report with:
   - Executive summary (top picks, average price/rating)
   - Table of items (rank, title, author, price, rating, link)
   - “Recommended to buy” shortlist (rules configurable)
   - Notes / owner / timestamp
7. **Configure Google Drive Folder (manual)**  
   Choose/create a Drive folder for output artifacts.
8. **Create Document File (Google Docs API)**  
   Creates a Doc from the generated Markdown/HTML.
9. **Convert Document to PDF (Google Drive export)**  
   Exports the Doc to PDF.
10. **Upload report to Slack**  
   Sends the PDF (and/or Doc link) to a chosen Slack channel with a short summary.

## How to set up

### 1 Prerequisites
- **n8n** (self-hosted or Cloud)
- **Decodo Scraper API** key
- **OpenAI (or compatible) API key** for the Analyzer Agent
- **Google Drive/Docs** credentials (OAuth2)
- **Slack** Bot/User token (files:write, chat:write)

### 2 Environment variables (recommended)
- `DECODO_API_KEY`
- `OPENAI_API_KEY`
- `DRIVE_FOLDER_ID` (optional default)
- `SLACK_CHANNEL_ID`

### 3 Nodes configuration (high level)
**Edit Fields (Set node)**
**Scraper API Request (HTTP Request → POST)**
**HTML Response Parser (Code node)**
**Product Analyzer Agent**
**Build Book Purchase Report (Code/LLM)**
**Create Document File**
**Convert to PDF**
**Upload to Slack**

## Requirements

- **Decodo**: Active API key and endpoint access. Be mindful of concurrency/rate limits.
- **Model**: GPT-4o/4.1-mini or similar for reliable structured extraction.
- **Google**: OAuth client (Docs/Drive scopes). Ensure n8n can write to the target folder.
- **Slack**: Bot token with `files:write` + `chat:write`.

## How to customize the workflow

- **Target site**: Change `targetUrl` to any **public** page (category, search, or listing).  
  For other domains (not Amazon), tweak the **LLM guidance** (e.g., price/label patterns).
- **Device emulation**: Switch `deviceType` to `mobile` to fetch mobile-optimized markup (often simpler DOMs).
- **Late-loading pages**: Adjust `waitFor.selector` or use `waitUntil: "networkidle"` (if supported) to ensure full content loads.
- **Client-side JS**: Extend `executeJS` if you need to interact (scroll, click “next”, expand sections). You can also loop over pagination by iterating URLs.
- **Extraction schema**: Add fields (e.g., `discount_percent`, `bestseller_badge`, `prime_eligible`) and update the Structured Output schema accordingly.
- **Filtering rules**: Modify recommendation logic (e.g., min ratings count, price bands, languages).
- **Report branding**: Add logo, cover page, footer with company info; switch to HTML + inline CSS for richer Docs formatting.
- **Destinations**: Besides Slack & Drive, add Email, Notion, Confluence, or a database sink.
- **Scheduling**: Add a **Cron** trigger for weekly/monthly auto-reports.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
