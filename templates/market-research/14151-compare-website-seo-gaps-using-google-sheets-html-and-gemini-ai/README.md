# 📊 Compare website SEO gaps using Google Sheets, HTML and Gemini AI

> ⚡ **162 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works  
This workflow automates SEO analysis by comparing your website with a competitor’s site. It reads input URLs from Google Sheets, scrapes structured SEO data from both sites, and expands into important internal pages for deeper insights. The collected data is processed and merged before being analyzed using Google Gemini AI. Finally, it generates a structured SEO gap report and saves it back into Google Sheets while updating the workflow status.

## Step-by-step  

- **Trigger and filter input data**  
  - **Manual Trigger** – Starts the workflow execution manually.  
  - **Google Sheets (Get row(s))** – Fetches website data from the input sheet.  
  - **If** – Filters only rows where status is NEW.  

- **Prepare and fetch website data**  
  - **Set (Edit Fields)** – Maps your website and competitor URLs.  
  - **HTTP Request (My Website HTTP)** – Fetches your website HTML.  
  - **HTTP Request (Competitor)** – Fetches competitor website HTML.  
  - **HTML (Extract Data)** – Extracts SEO elements like title, H1, H2, links, and content.  

- **Extract and process internal pages**  
  - **Code (All Links)** – Filters important internal URLs from both websites.  
  - **Google Sheets (Insert Links)** – Stores extracted links.  
  - **Split In Batches** – Iterates through each page URL.  
  - **HTTP Request + HTML + Code** – Scrapes and formats SEO data for each page.  

- **Store and update structured SEO data**  
  - **Google Sheets (Append & Update)** – Saves page-level SEO data.  
  - **Wait nodes** – Controls execution timing and prevents rate limits.  

- **Analyze SEO gaps using AI**  
  - **Merge** – Combines your site and competitor data.  
  - **Code** – Structures merged dataset.  
  - **Google Gemini (Message a model)** – Generates SEO gap analysis.  
  - **Code (Parse JSON)** – Cleans and validates AI output.  

- **Save report and finalize workflow**  
  - **Google Sheets (Append Report)** – Stores SEO gap report.  
  - **Google Sheets (Update Row)** – Marks input row as DONE.  

## Why use this?  

- Automates complete SEO competitor analysis without manual effort  
- Identifies keyword, content, and technical SEO gaps instantly  
- Scales across multiple websites and competitors efficiently  
- Provides AI-driven insights and actionable SEO improvement plans  
- Centralizes all SEO data and reports inside Google Sheets

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
