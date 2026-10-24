# 🎣 Scrape and qualify HR job leads with Apify, Google Sheets and OpenAI GPT-4o-mini

> ⚡ **126 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### HR Client Acquisition (Part 1) – Job Lead Discovery & AI Qualification System

This n8n template helps recruitment agencies discover active job openings, filter them based on hiring relevance, and qualify them using AI — specifically designed for semi-skilled manpower hiring use cases.

### What this template demonstrates
- Job lead discovery using Apify scraping  
- Hash-based deduplication to avoid duplicate entries  
- Batch processing using Split In Batches  
- Google Sheets as a structured lead database  
- AI-based lead qualification with strict JSON outputs  
- Separation between scraping, processing, and scoring  

### Use cases
- Recruitment agencies sourcing overseas job demand  
- HR consultancies targeting bulk hiring companies  
- Manpower supply businesses (semi-skilled labor focus)  
- Job demand validation before outreach  
- Building job-based lead pipelines  

### How it works
- User submits job roles and locations via form  
- Inputs are expanded into multiple search combinations  
- Apify scrapes job listings based on these inputs  
- Jobs are normalized and assigned unique identifiers  
- Existing jobs in Google Sheets are checked for duplicates  
- Only new jobs are stored and processed  
- Missing company data is enriched if required  
- AI scores each job based on hiring relevance  
- Jobs are marked as qualified or not qualified  
- Final results are saved back into Google Sheets  

### How to use
- Submit job roles and locations using the form trigger  
- Connect your Apify API credentials  
- Connect your Google Sheets account  
- Add your OpenAI API key  
- Run the workflow in test mode  
- Check results inside Google Sheets  
- Adjust scoring logic if needed  

### Requirements
- n8n (Cloud or Self-hosted)  
- Apify account for job scraping  
- Google Sheets for storage  
- OpenAI or compatible LLM API  

### Customising this workflow
- Modify job roles to match your niche (e.g., drivers, welders, helpers)  
- Adjust AI scoring logic for your hiring criteria  
- Replace Google Sheets with a database if needed  
- Add filters like salary, visa type, or urgency  
- Extend workflow for enruching & outreach automation (Part 2)  

### Good to know
- This template focuses only on job discovery and qualification  
- It is designed for semi-skilled manpower hiring workflows  
- AI scoring can be customized for any industry or role  
- No outreach is performed in this workflow  
- Works best with consistent job data sources  

### Who this is for
- Recruitment agencies working with overseas clients  
- HR consultants sourcing bulk hiring opportunities  
- Founders building recruitment automation systems  
- Anyone building a job-based lead generation pipeline

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
