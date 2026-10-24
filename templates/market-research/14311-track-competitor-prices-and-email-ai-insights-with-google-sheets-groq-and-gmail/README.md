# 📊 Track competitor prices and email AI insights with Google Sheets, Groq and Gmail

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works  
This workflow automatically monitors competitor product prices stored in Google Sheets. It scrapes product pages, extracts pricing and offer data using AI, and compares it with historical values. Based on changes, it updates records and generates a market intelligence report. The workflow then emails the report and resets data for the next execution cycle.

## Step-by-step  

- **Step 1: Database sync**  
  - **Schedule Trigger** – Runs the workflow at a scheduled time.  
  - **Get row(s) in sheet** – Fetches competitor data and product URLs.  

- **Step 2: Scraping**  
  - **Loop Over Items** – Processes each competitor entry.  
  - **HTTP Request3** – Retrieves raw HTML using ScraperAPI.  
  - **Clean Content** – Cleans and prepares text for AI processing.  

- **Step 3: Price extraction**  
  - **AI Agent1** – Extracts product name, price, and offers.  
  - **Groq Chat Model1** – Provides AI extraction capability.  
  - **current Price and offer** – Converts AI output into structured data.  
  - **If2** – Checks if it's the first recorded entry.  
  - **First time price and offer added** – Stores initial values.  
  - **If1** – Compares current vs previous price and offers.  
  - **Updated current price and offer in sheet** – Updates if changes detected.  
  - **If No changes then update** – Updates sheet even when no change is found.  

- **Step 4: Analysis**  
  - **Get row(s) in sheet1** – Retrieves updated dataset.  
  - **Data Aggregator** – Builds structured market comparison data.  
  - **AI Agent** – Generates strategic insights and recommendations.  
    - **Groq Chat Model** – Powers the analysis output.  
  - **Update row in sheet** – Saves AI-generated summary in sheet. 

- **Step 5: Reporting**   
  - **Edit Fields1** – Formats the report into HTML email layout.  
  - **Send a message** – Sends the final report via Gmail.  

- **Step 6: Reset**  
  - **Get row(s) in sheet2** – Retrieves final processed data.  
  - **Update row in sheet1** – Moves current data to history and clears fields.  

## Why use this?  
- Ensures all price scenarios (change or no change) are handled properly  
- Keeps your Google Sheets always updated with accurate data  
- Provides AI-powered competitive intelligence automatically  
- Sends clean, formatted reports without manual effort  
- Maintains structured historical tracking for better decision-making

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
