# 📊 Web research summarizer with Decodo Scraper, Google Gemini AI & Sheets integration

> ⚡ **231 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works  
This workflow takes a list of links from Google Sheets, visits each page, extracts the main text using [Decodo](https://visit.decodo.com/raqXGD), and creates a summary with the help of artificial intelligence.  
It helps you turn research articles or web pages into clear, structured insights you can reuse for your projects, content ideas, or newsletters.

**Input:** A Google Sheet named `input` with one column called `url`.  
**Output:** Another Google Sheet named `output`, where all the processed data is stored:  
- **URL:** original article link  
- **Title:** article title  
- **Source:** website or domain  
- **Published Date:** publication date (if found)  
- **Main Topic:** main theme of the article  
- **Key Ideas:** three main takeaways or insights  
- **Summary:** short text summary  
- **Text Type:** type of content (e.g., article, blog, research paper)

## Setup steps  
1. Connect your Google Sheets account.  
2. Add your links to the `input` sheet.  
3. In the **[Decodo](https://visit.decodo.com/raqXGD)** node, insert your API key.  
4. Configure the AI model (for example, Gemini).  
5. Run the workflow and check the results in the `output` sheet.

## 🔗 Nodes Used

Google Sheets, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
