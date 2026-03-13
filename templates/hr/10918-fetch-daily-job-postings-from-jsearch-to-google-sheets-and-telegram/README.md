# 👥 Fetch daily job postings from JSearch to Google Sheets and Telegram

> ⚡ **130 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automatically fetches job postings from the JSearch API once per day, filters out duplicates, and saves only new jobs to a Google Sheet. It also sends a Telegram summary with the number of newly added jobs.

### What this workflow does
• Builds a custom job search query  
• Fetches job listings from JSearch  
• Loads existing job IDs from Google Sheets  
• Removes already-saved jobs  
• Writes only new jobs into the sheet  
• Sends a Telegram summary with job count  

### Why it's useful
• Hands-free daily job monitoring  
• No duplicates — clean data tracking  
• Uses rate-limit-safe writing  
• Easy to customize search keywords  
• Works entirely with no-code steps  

### Requirements
• RapidAPI (JSearch) account  
• Google Sheets account  
• Telegram Bot token  

### Ideal For
• Job researchers  
• Recruitment automations  
• Personal job-search tracking  
• Data collection workflows

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
