# 🎣 Enrich company leads and find HR contacts with Google Sheets, OpenAI and LinkFinder AI

> ⚡ **99 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description

This workflow is **Part 2** of the HR Client Acquisition system and builds on the lead discovery pipeline from the previous workflow:

🔗 [HR Client Acquisition (Part 1) – Job Lead Discovery & AI Qualification System](https://n8n.io/workflows/14859-scrape-and-qualify-hr-job-leads-with-apify-google-sheets-and-openai-gpt-4o-mini/)

In Part 1, job leads are discovered and qualified using AI.  
In this workflow (Part 2), those qualified companies are enriched further by identifying company domains, classifying them as employers or agencies, and extracting decision-maker contacts such as HR and operations leaders.

The workflow uses AI, web scraping, and enrichment APIs to transform raw company data into actionable outreach-ready leads with verified contact information.

## Use cases

- Recruitment agencies targeting companies actively hiring  
- Sales teams building high-quality outbound lead lists  
- Automating employer research and contact discovery  
- Enriching job-based leads into decision-maker pipelines  

## Requirements

- Google Sheets account  
- OpenAI API key  
- Apify account  
- LinkFinder AI API key  
- n8n instance with environment variables configured  

## How to use

1. Run Part 1 workflow to collect and qualify job leads  
2. Ensure companies are stored in Google Sheets with status = NEW or ENRICHMENT_REQUIRED  
3. Execute this workflow  
4. Workflow enriches companies and extracts key contacts  
5. Contacts are saved into Google Sheets for outreach  

## Customising this workflow

- Modify AI prompts for company classification  
- Adjust industry filtering logic  
- Change contact selection priorities (HR, operations, leadership)  
- Integrate additional enrichment or CRM tools  

## What this template demonstrates

- Multi-step lead enrichment pipeline  
- AI-powered company classification  
- Domain extraction and validation  
- Contact discovery using external APIs  
- Structured data handling using Google Sheets  

## How it works

• Step 1: Fetch qualified companies from Google Sheets  
• Step 2: Extract or predict company domain  
• Step 3: Scrape and analyze website content using AI  
• Step 4: Classify company as employer or agency  
• Step 5: Enrich employer data and fetch employee contacts  
• Step 6: Select top contacts and store results  

## Setup steps

• Estimated setup time: 15–25 minutes  
• Configure API keys (OpenAI, Apify, LinkFinder)  
• Set environment variables for Google Sheets  
• Connect output of Part 1 workflow  
• Run test execution with sample data

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
