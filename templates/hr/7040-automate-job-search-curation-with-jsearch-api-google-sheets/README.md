# 👥 Automate job search & curation with JSearch API & Google Sheets

> ⚡ **983 views** · 👥 [HR & Recruitment](../)

## Description

### How it works
This workflow automates the job curation process by retrieving pending job search inputs from a spreadsheet, querying the JSearch API for relevant job listings, and writing the curated results back to another sheet. It is designed to streamline job discovery and reduce manual data entry.

### Step-by-step
**1. Trigger & Input**
- The workflow starts on a defined schedule (e.g., once per day).

- It reads a row from the Job Scraper sheet where the status is marked as "Pending".

- The selected row includes fields like Position and Location, which are used to build the search query.

**2. Job Search & Processing**
- Sends a search request to the JSearch API using the Position and Location from the spreadsheet.

- Parses the API response and extracts individual job listings.

- Filters out empty, irrelevant, or invalid entries to ensure clean and relevant job data.

**3. Output & Status Update**
- Writes valid job listings to the Job Listing output sheet with fields such as job title, company name, location, and more.

- Updates the original row in the source sheet to mark it as Scraped, ensuring it will not be processed again in future runs.

### **Benefits**
- Reduces manual effort in job research and listing.

- Ensures only valid, structured data is stored and used.

- Prevents duplicate processing with automatic status updates.

- Simple to expand by adding more job sources or filters.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
