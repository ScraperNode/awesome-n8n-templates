# 📊 Generate SEO meta tags with Gemini AI & competitor analysis using Google Sheets

> ⚡ **761 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow automates the entire process of creating SEO-optimized meta titles and descriptions. It analyzes your webpage, spies on top-ranking competitors for the same keywords, and then uses a multi-step AI process to generate compelling, length-constrained meta tags.

**🤖 How It Works**
This workflow operates in a three-phase process for each URL you provide:

*Phase 1: Self-Analysis*

When you add a URL to a Google Sheet with the status "New", the workflow scrapes your page's content.

The first AI then performs a deep analysis to identify the page's primary keyword, semantic keyword cluster, search intent, and target audience.

*Phase 2: Competitor Intelligence*

The workflow takes your primary keyword and performs a live Google search.

A custom code block intelligently filters the search results to identify true competitors.

A second AI analyzes their meta titles and descriptions to find common patterns and successful strategies.

*Phase 3: Master Generation & Update*

The final AI synthesizes all gathered intelligence—your page's data and the competitor's winning patterns—to generate a new, optimized meta title and description.

It then writes this new data back to your Google Sheet and updates the status to "Generated".

**⚙️ Setup Instructions**
You should be able to set up this workflow in about 10-15 minutes ⏱️.

**🔑 Prerequisites**
You will need the following accounts and API keys:

A Google Account with access to Google Sheets.

A Google AI / Gemini API key.

A SerpApi key for Google search data.

A ScrapingDog API key for reliable website scraping.

**🛠️ Configuration**
Google Sheet Setup: Create a new Google Sheet. The workflow requires the following columns: URL, Status, Current Meta Title, Current Meta Description, Generated Meta Title, Generated Meta Description, and Ranking Factor.

**Add Credentials:**

Google Sheets Nodes: Connect your Google account credentials to the Google Sheets Trigger & Google Sheets nodes.

Google Gemini Nodes: Add your Google Gemini API key to the credentials for all three Google Gemini Chat Model nodes.

Scrape Website Node: In this HTTP Request node, go to Query Parameters and replace &lt;your-api-key&gt; with your ScrapingDog API key.

Googl SERP Node: In this HTTP Request node, go to Query Parameters and replace &lt;your-api-key&gt; with your SerpApi API key.

**Configure Google Sheets Nodes:**

Copy the Document ID from your Google Sheet's URL.

Paste this ID into the "Document ID" field in the following nodes: Google Sheets Trigger, Get row(s) in sheet1, and Update row in sheet.

In each of those nodes, select the correct sheet name from the "Sheet Name" dropdown.

**✅ Activate Workflow**
Save and activate the workflow. To run it, simply add a new row to your Google Sheet containing the URL you want to process and set the "Status" column to New.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
