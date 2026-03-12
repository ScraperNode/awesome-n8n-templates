# 👥 Remote job updates pipeline with RemoteOK, Airtable, and Telegram

> ⚡ **769 views** · 👥 [HR & Recruitment](../)

## Description

🚀 Remote Job Automation Workflow
Automatically fetch, clean, and broadcast the latest remote job listings — powered by RemoteOK, Airtable, and Telegram.

🔧 Key Features
Seamless Data Fetching:
Pulls the latest job listings from the RemoteOK API using an HTTP Request node.

Smart Data Processing (via Code Node):

Filters out irrelevant metadata

Cleans and sanitizes job descriptions (e.g., HTML tags, special characters)

Handles malformed or encoded text gracefully

Extracts and formats salary ranges for clarity

Airtable Integration (Upsert):

Stores each job as a unique record using job ID

Avoids duplication through conditional upserts using Airtable's Personal Access Token

Telegram Bot Broadcasting:

Automatically formats and sends job posts to a Telegram group or channel

Keeps your community or team updated in real-time

📦 Tech Stack
RemoteOK API – source of curated remote job listings

Airtable – lightweight, accessible job database

Telegram Bot API – for real-time job notifications

n8n – workflow automation engine to tie everything together

🔁 Workflow Overview
Fetch Jobs from RemoteOK API

Clean & Normalize job descriptions and metadata

Extract Salary ranges and standardize them

Upsert to Airtable (avoiding duplicates)

Format Post for visual clarity

Send to Telegram via bot integration

🧠 Perfect For
Remote job boards or aggregators

Recruitment agencies/startups

Developers building personal job feeds

Communities or channels sharing curated remote opportunities

Automating newsletters or job digests

✅ Benefits

Near real-time updates

Minimal maintenance

Full control and extensibility with n8n

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
