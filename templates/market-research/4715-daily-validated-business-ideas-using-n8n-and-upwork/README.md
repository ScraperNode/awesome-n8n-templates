# 📊 Daily validated business ideas using n8n and Upwork

> ⚡ **808 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

**How it works**
- Runs at set times to fetch new Upwork job listings.
- Checks each job’s total or hourly budget and keeps only higher-budget ones.
- Extracts the job description for those selected jobs.
- Uses AI to identify the core business idea from each description.
- Records the idea and job details into a Google Sheet.
- Can also be triggered manually to process a single job description.

**Set up steps**

- **Required:** Upwork API key, AI service key, and a Google Sheet.
- **Import:** Bring the JSON into n8n.
- **Configure:** Enter your API keys and connect to your Google Sheet.
- **Time:** About 25–35 minutes to complete all steps.
- **Notes:** Detailed setup instructions are added as sticky notes inside the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Workflow Trigger, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
