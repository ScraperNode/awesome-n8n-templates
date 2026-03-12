# 📊 Track competitor pricing and features with BrowserAct and Google Sheets

> ⚡ **11 views** · 📊 [Market Research & Insights](../)

## Description

# Track competitor pricing and features from BrowserAct to Google Sheets

## Introduction

This workflow automates competitive intelligence by continuously monitoring competitor websites for pricing and feature updates. It scrapes current data using BrowserAct, compares it against historical records using AI to identify specific changes (like price increases or removed features), and archives the findings in a new Google Sheet tab every week.

## Target Audience

Product managers, pricing analysts, and market researchers who need to stay updated on competitor moves without manually checking websites.

## How it works

1. **Scheduling:** A **Weekly Trigger** initiates the workflow to ensure regular monitoring.
2. **Database Retrieval:** The workflow fetches a list of competitor URLs and their previous scrape data from a **Google Sheet**.
3. **Data Extraction:**


A **BrowserAct** node visits each URL and extracts the current pricing plans and feature lists using the "AI Competitor Spy" template.
4.  **AI Comparison:** An **AI Agent** (using Google Gemini Flash via OpenRouter) compares the live data against the historical data stored in the sheet. It identifies exactly what changed (e.g., "Basic plan increased by $5").
5.  **Database Update:** The workflow updates the main database with the new "Last Scrape Content" and the date, establishing a new baseline for the next run.
6.  **Report Generation:** After processing all competitors, a second **AI Agent** (using Google Gemini Pro) aggregates the findings into a comprehensive text report.
7.  **Archiving:** The workflow creates a new tab in the **Google Sheet** (named with the current date) and appends the full comparative report.
8.  **Notification:** A **Slack** message is sent to notify the team that the weekly analysis is complete.

## How to set up

1. **Configure Credentials:** Connect your **BrowserAct**, **OpenRouter**, **Google Sheets**, and **Slack** accounts in n8n.
2. **Prepare BrowserAct:** Ensure the **AI Competitor Spy: Pricing & Feature Tracker** template is active in your BrowserAct library.
3. **Prepare Google Sheet:** Create a Google Sheet with the headers listed below. Populate the `Competitor Name`, `URL`, and `row_number` columns with your targets. Leave the other columns blank initially.
4. **Configure IDs:** Select your Google Sheet in the **Fetch links & history**, **Update Database**, and **Create New Sheet** nodes.

## Google Sheet Headers

To use this workflow, create a Google Sheet with the following headers in the first row:

* `row_number` (Must be populated, e.g., 1, 2, 3...)
* `Competitor Name`
* `URL`
* `Last_Scrape_Content`
* `Last_Scrape_Date`
* `Comparison`

## Requirements

* **BrowserAct Account:** Required for scraping. Template: **AI Competitor Spy: Pricing & Feature Tracker**.
* **OpenRouter Account:** Required to access Google Gemini models for analysis.
* **Google Sheets:** Used as the database and report archive.
* **Slack Account:** Used for notifications.

## How to customize the workflow

1. **Change the AI Model:** The workflow currently uses Google Gemini models. You can swap this for GPT-4 or Claude within the **OpenRouter** nodes for different analytical styles.
2. **Add Email Alerts:** Replace or augment the **Slack** node with a **Gmail** or **SendGrid** node to email the weekly report to stakeholders.
3. **Filter Minor Changes:** Modify the System Prompt in the **Analyze target pages** node to ignore small price changes (e.g., less than 5%) or specific formatting updates.

## Need Help?

* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [How to Track Competitors Automatically (n8n + AI + Slack + Google Sheets)](https://youtu.be/yBGtCt4gIdA)

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
