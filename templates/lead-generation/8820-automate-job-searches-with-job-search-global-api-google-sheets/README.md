# 🎣 Automate job searches with Job Search Global API & Google Sheets

> ⚡ **1,063 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Job Search Automation with Job Search Global API & Google Sheet Logging

**Description:**
Automate your job search process by querying the [**Job Search Global API**](https://rapidapi.com/PrineshPatel/api/job-search-global) via RapidAPI every 6 hours for a specified keyword like “Web Developer.” This workflow extracts job listings and saves them directly to Google Sheets, with alerts sent for any API failures.

---

## Workflow Overview

1. **Schedule Trigger**
   Runs the workflow automatically every 6 hours to ensure up-to-date job listings.

2. **Set Search Term**
   Defines the dynamic job keyword, e.g., "Web Developer," used in API requests.

3. **Fetch Job Listings**
   Sends a POST request to the [**Job Search Global API**](https://rapidapi.com/PrineshPatel/api/job-search-global) (via RapidAPI) to retrieve job listings with pagination.

4. **Check API Response**
   Validates the API response status, branching workflow on success or failure.

5. **Extract Job Data**
   Parses the job listings array from the API response for processing.

6. **Save to Google Sheet**
   Appends or updates job listings in Google Sheets, avoiding duplicates by matching job titles.

7. **Send Failure Notification Email**
   Sends an alert email if the API response fails or returns an error.

---

## How to Obtain Your RapidAPI Key (Quick Steps)

1. Go to [**RapidAPI Job Search Global API**](https://rapidapi.com/PrineshPatel/api/job-search-global).
2. Sign up or log in to your RapidAPI account.
3. Subscribe to the API plan that suits your needs.
4. Copy your unique **X-RapidAPI-Key** from the dashboard.
5. Insert this key into your workflow’s HTTP Request node headers.

---

## How to Configure Google Sheets

1. Create a new Google Sheet for job listings.
2. Share the sheet with your Google Service Account email to enable API access.
3. Use the sheet URL in the Google Sheets node within your workflow.
4. Map columns correctly based on the job data fields.

---

## Google Sheet Columns Used

| Column Name | Description                         |
| ----------- | ----------------------------------- |
| title       | Job title                           |
| url         | Job posting URL                     |
| company     | Company name                        |
| postDate    | Date job was posted                 |
| jobSource   | Source of the job listing           |
| slug        | Unique job identifier or slug       |
| sentiment   | Sentiment analysis score (if any)   |
| dateAdded   | Date the job was added to the sheet |
| tags        | Associated tags or keywords         |
| viewCount   | Number of views for the job post    |

---

## Use Cases & Benefits

* **Automated Job Tracking:** Get fresh job listings without manual searching by automatically querying the Job Search Global API multiple times per day.
* **Centralized Job Data:** Save and update listings in Google Sheets for easy filtering, sharing, and tracking.
* **Failure Alerts:** Get notified immediately if API calls fail, helping maintain workflow reliability.
* **Customizable Search:** Change keywords anytime to tailor job searches for different roles or industries.

---

## Who Is This Workflow For?

* **Recruiters** looking to monitor job market trends in real-time.
* **Job Seekers** who want to automate job discovery for specific roles like “Web Developer.”
* **HR Teams** managing talent pipelines and job postings.
* **Data Analysts** needing structured job market data for research or reporting.
---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
