# 📊 Scrape LinkedIn job listings with Phantombuster & save to Google Sheets

> ⚡ **684 views** · 📊 [Market Research & Insights](../)

## Description

## How it works
This workflow automatically scrapes LinkedIn job postings for a list of target companies and organizes the results in Google Sheets. Every Monday morning, it checks your company list, runs a LinkedIn job scrape using Phantombuster, waits for the data to be ready, and then fetches the results. Finally, it formats the job postings into a clean structure and saves them into a results sheet for easy analysis.

## Step-by-step

**Start with Scheduled Trigger**
- The workflow runs automatically at 9:00 AM every Monday.
- It reads your “Companies Sheet” in Google Sheets and filters only those marked with Status = Pending.

**Scrape LinkedIn Jobs**
- The workflow launches your Phantombuster agent with the LinkedIn profile URLs from the sheet.
- It waits 3 minutes to let the scraper finish running.
- Then it fetches the output CSV link containing the job posting results.

**Format the Data**
- The scraped data is cleaned and structured into fields like:

  - Company Name

  - Job Title

  - Job Description

  - Job Link

  - Date Posted

  - Location

   - Employment Type

**Save Everything in Google Sheets**
- The formatted job data is appended into your “Job Results” Google Sheet.

- Each entry includes a scrape date so you can track when the data was collected.

## Why use this?

- Automates job market research and competitive hiring analysis.

- Collects structured job posting data from multiple companies at scale.

- Saves time by running on a schedule with no manual effort.

- Keeps all results organized in Google Sheets for easy review and sharing.

- Helps HR and recruitment teams stay ahead of competitors’ hiring activity.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
