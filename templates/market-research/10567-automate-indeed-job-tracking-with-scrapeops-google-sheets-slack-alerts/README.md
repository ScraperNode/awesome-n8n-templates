# 📊 Automate Indeed job tracking with ScrapeOps, Google Sheets & Slack alerts

> ⚡ **131 views** · 📊 [Market Research & Insights](../)

## Description

## Overview
This n8n template automates the process of scraping job listings from Indeed, parsing the data into a structured format, and saving it to Google Sheets for easy tracking. It also includes a Slack notification system to alert you when new jobs are found.

Built with **ScrapeOps**, it handles the complexities of web scraping - such as proxy rotation, anti-bot bypassing, and HTML parsing - so you can focus on the data.

## Who is this for?
- **Job Seekers**: Automate your daily job search and get instant alerts for new postings.
- **Recruiters & HR Agencies**: Track hiring trends and find new leads for candidate placement.
- **Sales & Marketing Teams**: Monitor companies that are hiring to identify growth signals and lead opportunities.
- **Data Analysts**: Gather labor market data for research and competitive analysis.

## What problems it solves
- **Manual Searching**: Eliminates the need to manually refresh Indeed and copy-paste job details.
- **Data Structure**: Converts messy HTML into clean, organized rows in a spreadsheet.
- **Blocking & Captchas**: Uses ScrapeOps residential proxies to bypass Indeed's anti-bot protections reliably.
- **Missed Opportunities**: Automated scheduling ensures you are the first to know about new listings.

## How it works
1. **Trigger**: The workflow runs on a schedule (default: every 6 hours).
2. **Configuration**: You define your search query (e.g., "Software Engineer") in the `Set Search URL` node.
3. **Scraping**: The **ScrapeOps Proxy API** fetches the Indeed search results page using a residential proxy to avoid detection.
4. **Parsing**: The **ScrapeOps Parser API** takes the raw HTML and extracts key details like Job Title, Company, Location, Salary, and URL.
5. **Filtering**: A code node filters out invalid results and structures the data.
6. **Storage**: Valid jobs are appended to a Google Sheet.
7. **Notification**: A message is sent to Slack confirming the update.

## Setup steps (~ 10-15 minutes)
1. **ScrapeOps Account**:
   - Register for a free [ScrapeOps API Key](https://scrapeops.io/app/register/n8n).
   - In n8n, open the **ScrapeOps** nodes and create a new credential with your API key.
   
2. **Google Sheets**:
   - Duplicate this [Google Sheet Template](https://docs.google.com/spreadsheets/d/1r_ZMwAli50Bes9quxZtB37WE7S9HwlYOcj50bZzbOAM/edit?gid=0#gid=0).
   - Open the **Save to Google Sheets** node.
   - Connect your Google account and select your duplicated sheet.
   
3. **Slack Setup**:
   - Open the **Send a message** node.
   - Connect your Slack account and select the channel where you want to receive alerts.

4. **Customize Search**:
   - Open the **Set Search URL** node.
   - Update the `search_query` value to the job title or keyword you want to track.

## Pre-conditions
- An active [ScrapeOps account](https://scrapeops.io/app/register/n8n) (Free tier available).
- A Google Cloud account with Google Sheets API enabled (for n8n connection).
- A Slack workspace for notifications.

## Disclaimer
This template uses ScrapeOps as a community node. You are responsible for complying with Indeed's Terms of Use, robots directives, and applicable laws in your jurisdiction. Scraping targets may change at any time; adjust render/scroll/wait settings and parsers as needed. Use responsibly for legitimate business purposes.

## Resources
- [ScrapeOps n8n Overview](https://scrapeops.io/docs/n8n/overview/)
- [ScrapeOps Proxy API Documentation](https://scrapeops.io/docs/n8n/proxy-api/)
- [ScrapeOps Parser API Documentation](https://scrapeops.io/docs/n8n/parser-api/)

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
