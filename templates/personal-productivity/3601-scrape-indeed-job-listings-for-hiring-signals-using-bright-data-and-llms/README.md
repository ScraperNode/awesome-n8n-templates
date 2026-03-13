# ⚡ Scrape Indeed job listings for hiring signals using Bright Data and LLMs

> ⚡ **4,799 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Scrape Indeed Job Listings for Hiring Signals Using Bright Data and LLMs

## How the flow runs
1. Fill the form with job position you're hunting for.
2. Bright data's scraper will scrape Indeed based on your requirments.  
3. Workflow waits for the snapshot.  
4. Data returns as JSON.  
5. Jobs append to Google Sheets.  
6. Each row goes to an LLM to analyze if you're a good fit for the job (based on your prompts).  
7. The LLMswrites **YES** or **NO** next to each job opportunity, helping you find job posts that are relevant to you.

## What you need
- Google Sheets with our template.  
- Bright Data dataset and API key.  
- OpenAI key for GPT‑4o mini (or any other LLM).  
- n8n with required nodes.

## Form fields To Fill
- **Job Location** – city or region.  
- **Keyword** – role or skills.  
- **Country** – two‑letter code.

## Setup steps
1. Copy the sheet template link.  
2. Import the JSON workflow. 
3. Add your credentials in nodes.  
4. Test the form manually.  
5. Add a schedule if desired.

## Bright Data filter example
```json
[
  {
    "country": "US",
    "domain": "indeed.com",
    "keyword_search": "Growth Marketer",
    "location": "Miami",
    "date_posted": "Last 24 hours"
  }
]

**Tips**
-Choose Last 24 hours often.

-Increase wait time for big snapshots.

-Narrow keywords to save credits.


**Need help?
**Email me anytime: 
Yaron@nofluff.online
YouTube: @YaronBeen
- LinkedIn: https://www.linkedin.com/in/yaronbeen/
=======================================
Bright Data Docs: https://docs.brightdata.com/introduction

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
