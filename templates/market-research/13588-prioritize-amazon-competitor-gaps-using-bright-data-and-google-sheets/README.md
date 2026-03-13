# 📊 Prioritize Amazon competitor gaps using Bright Data and Google Sheets

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Amazon Competitive Gap & Assortment Intelligence Workflow

## Description
This workflow automatically scrapes competitor product data from Amazon and identifies gaps in your assortment, pricing, and positioning.  
It helps merchandising and product teams spot opportunities they are missing before competitors fill them.

## Overview
This workflow uses Bright Data to scrape Amazon product pages, then normalizes the data and feeds it to AI for competitive gap analysis.  

It identifies:
- Missing product variants  
- Bundle expansion ideas  
- Positioning gaps  
- Pricing weaknesses  

Each opportunity is scored and prioritized — high-impact gaps are routed to dedicated sheets, while standard opportunities are logged separately.  

All results are sent to Google Sheets dashboards for structured decision-making.

## Tools Used
- **n8n**: Automation platform that orchestrates the workflow  
- **Bright Data**: Scrapes Amazon product data at scale without getting blocked  
- **OpenRouter**: AI-powered competitive clustering, gap detection, and opportunity scoring  
- **Google Sheets**: Logs missing variants, bundle opportunities, pricing gaps, and errors  

## How to Install

### 1. Import the Workflow
Download the `.json` file and import it into your n8n instance.

### 2. Configure Bright Data
Add your Bright Data API credentials to the Bright Data node.

### 3. Configure OpenRouter
Add your OpenRouter API key for AI competitive analysis.

### 4. Set Up Google Sheets
Create a spreadsheet following the **"Google Sheets Setup"** sticky note inside the workflow.  
Connect each Google Sheets node to your document.

### 5. Customize
Edit the configuration node to define:
- Target Amazon product URL  
- Category scope  
- Competitive depth  
- Opportunity scoring thresholds  

## Use Cases

### Merchandising Teams
Discover product variants competitors carry that are missing from your catalog.

### Pricing Analysts
Detect pricing gaps and positioning weaknesses relative to competitors in your category.

### Product Managers
Find bundle and cross-sell opportunities based on real competitive data.

### Category Managers
Track assortment gaps across an entire product category to prioritize expansion.

### Ecommerce Strategy
Build a data-driven competitive intelligence layer for smarter assortment and pricing decisions.

## Connect with Me
- Website: https://www.nofluff.online  
- YouTube: https://www.youtube.com/@YaronBeen/videos  
- LinkedIn: https://www.linkedin.com/in/yaronbeen/  
- Get Bright Data: https://get.brightdata.com/1tndi4600b25  
  *(Using this link supports my free workflows with a small commission)*

## Tags
#n8n #automation #brightdata #webscraping #competitiveanalysis #pricingintelligence  
#assortmentplanning #ecommerce #amazondata #productgaps #pricingstrategy  
#competitortracking #merchandising #bundleopportunities #n8nworkflow #workflow  
#nocode #businessintelligence #marketresearch #pricingoptimization  
#categorymanagement #retailintelligence #competitivelandscape  
#productexpansion #ecommerceautomation

## 🔗 Nodes Used

Google Sheets, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
