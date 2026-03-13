# 📊 Monitor supplier financial distress and risk with Bright Data, OpenRouter and Google Sheets

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description
This workflow automatically scans companies for signs of financial distress across filings, insolvency registers, and financial news.  
It helps procurement, credit, and risk teams detect early warning signals before a supplier or partner defaults.

## Overview
This workflow uses Bright Data to scrape financial filings, insolvency registers, and news sources for distress signals like bankruptcy, restructuring, or payment defaults.  

AI classifies the type and severity of distress, applies probability weighting and confidence guardrails, then generates structured business decisions — including:

- Supplier Monitoring risk status  
- Onboarding Approval recommendations  
- Portfolio Exposure classifications  

All outputs are logged into Google Sheets for tracking and auditability.

## Tools Used
- **n8n**: Automation platform orchestrating the workflow  
- **Bright Data**: Scrapes filings, insolvency registers, and financial news without getting blocked  
- **OpenRouter**: AI-powered distress classification, risk scoring, and business decision generation  
- **Google Sheets**: Logs supplier risk status, onboarding decisions, portfolio exposure, and errors  

## How to Install

### 1. Import the Workflow
Download the `.json` file and import it into your n8n instance.

### 2. Configure Bright Data
Add your Bright Data API credentials to all Bright Data nodes.

### 3. Configure OpenRouter
Add your OpenRouter API key for AI distress classification and decision generation.

### 4. Set Up Google Sheets
Create a spreadsheet following the **"Google Sheets Setup"** sticky note inside the workflow.  
Connect each Google Sheets node to your document.

### 5. Customize
Edit the configuration node to define:
- Target company  
- Country  
- Risk indicators  
- Monitoring scope  

## Use Cases

### Procurement Teams
Monitor supplier financial health and get alerts before disruptions hit your supply chain.

### Credit Risk Analysts
Screen new vendors or partners for bankruptcy signals and insolvency red flags.

### Onboarding Workflows
Automate go/no-go decisions for new supplier or partner approvals.

### Portfolio Managers
Track financial exposure across your vendor or investment portfolio.

### Finance Teams
Detect early signs of distress in key business relationships before they become critical.

## Connect with Me
- Website: https://www.nofluff.online  
- YouTube: https://www.youtube.com/@YaronBeen/videos  
- LinkedIn: https://www.linkedin.com/in/yaronbeen/  
- Get Bright Data: https://get.brightdata.com/1tndi4600b25  
  *(Using this link supports my free workflows with a small commission)*

## Tags
#n8n #automation #brightdata #webscraping #creditrisk #financialdistress #riskmanagement  
#suppliermonitoring #supplychainrisk #insolvency #bankruptcy #duediligence #vendorscreening  
#portfoliorisk #financialanalysis #n8nworkflow #workflow #nocode #businessintelligence  
#riskassessment #creditanalysis #procurementautomation #supplierrisk #financialmonitoring #earlywarning

## 🔗 Nodes Used

Google Sheets, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
