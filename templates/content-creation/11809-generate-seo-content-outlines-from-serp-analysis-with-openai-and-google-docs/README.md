# 🎬 Generate SEO content outlines from SERP analysis with OpenAI and Google Docs

> ⚡ **512 views** · 🎬 [Content Creation & Video](../)

## Description

# Generate SEO content outlines from SERP analysis to Google Docs


## Overview
Stop wasting hours on manual competitor research and content briefing. This workflow automates the creation of data-backed content briefs by analyzing the current top-ranking pages for your specific keyword.


It scrapes the Google Search Engine Results Page (SERP), extracts the content structure (headings H1-H3) from competitor articles, and uses AI to generate a comprehensive article outline based on what is already ranking. The final outline is automatically saved to a Google Doc, streamlining your content production process.


## Who is this for?
- **Content Marketers:** To drastically reduce the time needed to create detailed content briefs.
- **SEO Specialists:** To analyze competitor content structures at scale without manual checking.
- **Bloggers & Writers:** To overcome writer's block and ensure their content covers all necessary topics to rank.


## How it works
1.  **Input:** You enter a "Target Keyword" and "Target Audience" via the built-in n8n Form.
2.  **SERP Scraping:** The workflow uses **Apify** (Google Search Scraper) to fetch the top results for that keyword.
3.  **Filtering:** It automatically removes non-article URLs (such as Amazon product pages, YouTube videos, and PDFs) to ensure only relevant content competitors are analyzed.
4.  **Deep Extraction:** It visits each competitor's URL using **Apify** (Cheerio Scraper) to extract their article metadata and heading structure (H1, H2, H3).
5.  **AI Analysis:** The aggregated data is sent to **OpenAI**, which analyzes common patterns and generates an optimized article outline.
6.  **Output:**
    - A new **Google Doc** is created with the generated outline.
    - The request details are logged in **Google Sheets** for your records.


## Requirements
- **Apify Account:** You will need an Apify account with access to the *Google Search Result Scraper* and *Cheerio Scraper* actors.
- **OpenAI Account:** An API key for OpenAI (GPT-3.5 or GPT-4 recommended).
- **Google Cloud:** Credentials to access Google Docs and Google Sheets.


## How to set up
1.  **Configure Credential:** Connect your Apify, OpenAI, and Google accounts in the respective nodes.
2.  **Workflow Configuration:** Open the `Workflow Configuration` node. You can change the `countryCode` (default is "jp" for Japan) to your target region (e.g., "us", "uk") and adjust `maxResults` if needed.
3.  **Google Sheets Setup:** Create a Google Sheet with a column header named `target_keyword`. Copy the Spreadsheet ID and paste it into the `Store Form Responses` node.
4.  **Run:** Click "Chat" or "Open Form" in the trigger node to start the workflow.


## How to customize
- **Change the AI Model:** In the `AI Content Structure Analysis` node, you can switch between different OpenAI models or adjust the system prompt to change the tone/format of the outline.
- **Adjust Filters:** Modify the `Filter Non-Article URLs` node to exclude specific domains you don't want to analyze (e.g., wikipedia.org).
- **Output Format:** You can modify the `Create Google Doc` node to include more specific data, such as the list of competitor URLs analyzed.![スクリーンショット 20251215 114351.png](fileId:3657)

## 🔗 Nodes Used

Google Sheets, Google Docs, Filter, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
