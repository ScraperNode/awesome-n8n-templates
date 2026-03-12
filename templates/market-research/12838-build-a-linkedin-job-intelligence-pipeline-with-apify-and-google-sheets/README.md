# 📊 Build a LinkedIn job intelligence pipeline with Apify and Google Sheets

> ⚡ **42 views** · 📊 [Market Research & Insights](../)

## Description

## Categories  
**Lead Generation, Market Intelligence, Recruitment Automation, Business Intelligence**

---

## LinkedIn Job Intelligence Automation (n8n + Apify)

This workflow creates a **fully automated LinkedIn job intelligence system** that continuously scrapes job postings, enriches them with time-based insights, removes duplicates, and stores them in a structured Google Sheet for analysis, outreach, or decision-making.

Built for founders, recruiters, sales teams, and consultants who want **real-time hiring signals** instead of static lead databases, this workflow turns job postings into **actionable business intelligence**.

---

## Benefits

- **Real-Time Hiring Signals**  
  Detect company growth, hiring urgency, and budget intent before announcements.

- **Automated Lead Discovery**  
  Identify companies actively hiring relevant roles, indicating readiness to buy services or tools.

- **Zero Manual Work**  
  Fully automated scraping, enrichment, and storage.

- **De-duplicated Data**  
  Prevents repeated job entries using job ID matching logic.

- **Time-Based Insight**  
  Automatically calculates how many days ago a job was posted.

- **Flexible Output**  
  Stored in Google Sheets for BI tools, CRMs, AI agents, or manual review.

---

## How It Works

### LinkedIn Job Scraping (Apify Actor)

- Uses Apify LinkedIn Jobs Scraper actor  
- Accepts up to 10 LinkedIn job search URLs  
- Extracts up to 100 jobs per run (configurable)  
- Pulls structured data including:
  - Job ID
  - Job title
  - Company name
  - Location
  - Posting date
  - Job URL

---

### Data Enrichment & Transformation

- Standardizes all job fields using a Set node  
- Computes **“How many days since posted”** using runtime date comparison  
- Prepares clean, analysis-ready records

---

### Batch Processing Control

- Uses Split In Batches to:
  - Avoid API throttling
  - Maintain stable execution
  - Scale safely for larger job volumes

---

### De-Duplication Logic

- Checks Google Sheets for existing job IDs  
- Only inserts new jobs  
- Ensures clean historical datasets with no duplicates

---

### Persistent Storage (Google Sheets)

- Appends validated job records to a centralized sheet  
- Acts as:
  - Lead database
  - Market intelligence log
  - BI or AI agent data source

---

## Required Setup Configuration

### Apify Integration

- Connect Apify OAuth credentials
- Use the **LinkedIn Jobs Scraper** actor  
- Customize:
  - Keywords
  - Location
  - Job count
  - Company scraping toggle

---

### Google Sheets Integration

- Create a target Google Sheet  
- Columns required:
  - Job ID
  - Job URL
  - Title
  - Company Name
  - Location
  - Posted Date
  - Days Since Posted  
- Enable OAuth access for n8n

---

### n8n Configuration

- Manual trigger (can be replaced with Cron for automation)  
- Batch size control for scaling  
- Error-safe execution with continuation enabled

---

## Business Use Cases

### Sales & Lead Generation Teams
- Target companies actively hiring roles related to your offer  
- Prioritize outreach based on hiring urgency

### Founders & CEOs
- Monitor competitor hiring velocity  
- Identify market expansion signals early

### Recruiters & Staffing Agencies
- Build live job pipelines without manual LinkedIn searches  
- Reduce sourcing time dramatically

### Consultants & Agencies
- Detect companies entering problem-aware or scaling phases  
- Align service offers with real hiring pain points

### Market & VC Analysts
- Use hiring data as a leading indicator for growth or decline

---

## Revenue Potential

This workflow enables multiple monetization paths:

- **Lead Intelligence as a Service**  
  Sell curated hiring signals to sales teams or agencies

- **Recruitment Automation**  
  Reduce recruiter sourcing costs by 70–90%

- **Consulting Insights**  
  Bundle hiring data into strategy or growth audits

- **Outbound Acceleration**  
  Increase reply rates by targeting active hiring companies

---

## Difficulty Level  
**Beginner to Intermediate**

---

## Estimated Build Time  
**30–45 minutes**

---

## Monthly Operating Cost

- Apify usage (based on volume)  
- Google Sheets: Free  
- n8n: Self-hosted or cloud plan  

Typical range: **$10–25/month**

---

## Why This Workflow Works

- Hiring data reflects **real budget allocation**  
- Job posts act as **pre-revenue intent signals**  
- Time-based metrics enable prioritization  
- De-duplication ensures long-term data quality  
- Simple storage makes it easy to extend with:
  - CRMs
  - AI agents
  - BI dashboards
  - Email or LinkedIn outreach automations

---

## Advanced Extensions

- Auto-enrich companies with LinkedIn company data  
- Push qualified jobs into CRM as leads  
- Trigger outbound emails based on posting age  
- Add AI classification for role relevance  
- Connect to Slack or email alerts for new jobs

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
