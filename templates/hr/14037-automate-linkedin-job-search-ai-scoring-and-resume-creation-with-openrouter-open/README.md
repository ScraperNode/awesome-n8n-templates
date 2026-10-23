# 👥 Automate LinkedIn job search, AI scoring, and resume creation with OpenRouter, OpenAI, Google Sheets & Docs

> ⚡ **2,955 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?

Job seekers who want to **automate their entire job search pipeline** — from discovering new listings to generating tailored resumes and cover letters — without manually browsing LinkedIn every day.

## What does this workflow do?

This workflow runs on a schedule, scrapes LinkedIn jobs via Apify, filters out spam recruiters and wrong locations, then uses a **2-stage AI evaluation** to find the best matches for your profile. Matching jobs are logged to Google Sheets and you get a Telegram notification. When you're ready to apply, a second trigger generates a **tailored resume + cover letter** using AI and fills in your Google Docs templates automatically.

## How it works

**Stage 1 — Scrape & Filter (runs on schedule)**

1. **Schedule Trigger** fires hourly (customizable cron)
2. **Apify LinkedIn Scraper** pulls fresh job listings based on your keywords and location
3. **Filter nodes** remove unwanted recruiter companies and jobs outside your target country
4. **HTML → Markdown** converts job descriptions for better AI processing
5. **GateKeeper AI** (fast, cheap model) does a quick yes/no — rejects 90% of irrelevant jobs
6. Results are saved to a "Gatekeeper Results" Google Sheet

**Stage 2 — Score & Notify (for GateKeeper matches)**

7. **Job Match Scorer AI** (smarter model) evaluates matches in detail with a 0–100 score
8. Jobs above your threshold are added to a "Roles to Apply" Google Sheet
9. **Telegram notification** alerts you about new matches

**Stage 3 — Generate Resume & Apply (triggered from Google Sheets)**

10. When you update a row in your sheet, the workflow triggers
11. **AI Resume Writer** generates a tailored resume + cover letter in JSON format
12. **Language detection** routes to EN or DE templates (extensible to more languages)
13. **Google Drive** copies your template documents and fills in all variables
14. Links and status are updated back in Google Sheets — ready to submit

## Setup Guide

### Prerequisites

- n8n instance (self-hosted or cloud)
- Apify account (free tier works) — for LinkedIn scraping
- OpenRouter account — for AI models (GateKeeper + Job Match Scorer)
- OpenAI API key — for resume generation
- Google Workspace — Sheets, Docs, Drive (OAuth2)
- Telegram Bot — for notifications

### Step 1: Credentials

Add the following credentials in n8n (do **not** hardcode API keys):

- `HTTP Query Auth` → Apify API token
- `OpenRouter API` → your OpenRouter key
- `OpenAI API` → your OpenAI key
- `Google Sheets OAuth2` → connect your Google account
- `Google Docs OAuth2` → same Google account
- `Google Drive OAuth2` → same Google account
- `Telegram API` → your bot token

### Step 2: Google Sheets

Create **two** Google Sheets:

**Sheet 1 — Gatekeeper Results**
Columns: `title`, `company`, `location`, `url`, `score`, `reason`, `match`

**Sheet 2 — Roles to Apply**
Columns: `title`, `company`, `url`, `job_description`, `status`, `resume_link`

Paste each sheet's ID into the corresponding Google Sheets nodes.

### Step 3: Google Docs Templates

Create resume and cover letter templates in Google Docs with placeholder variables like `{{summary}}`, `{{experience_1_title}}`, `{{experience_1_company}}`, etc. The AI output JSON keys map directly to these variables.

### Step 4: Customize the Workflow

1. **Set Profile node** — Replace the placeholder with your full career profile (the more detailed, the better the AI results)
2. **LinkedIn URLs** — Update the Apify scraper with your own search URLs (keywords, geoId, filters)
3. **GateKeeper prompt** — Customize rejection criteria, "sweet spot" description, and location preferences
4. **Job Match Scorer prompt** — Adjust scoring criteria to your skills
5. **Filter nodes** — Update country filter and recruiter blocklist
6. **Telegram Chat ID** — Set your personal chat ID for notifications
7. **Google Sheet/Doc/Drive IDs** — Link all nodes to your own documents

### Step 5: Activate

Turn on the Schedule Trigger and the Google Sheets Trigger. You're live!

## Nodes used in this workflow

- Schedule Trigger
- HTTP Request (Apify)
- Filter, Switch, Merge
- Markdown (HTML to Markdown)
- LangChain LLM Chain (OpenRouter — Haiku for GateKeeper, Sonnet for Scorer)
- OpenAI (GPT for resume generation)
- Code (JSON parsing)
- Google Sheets, Google Docs, Google Drive
- Telegram


## Questions or need help?
 
If you have any questions about this workflow or want the ready-made Google Docs/Sheets templates to get started faster, feel free to reach out:
 
👉 [Connect with me on LinkedIn](https://www.linkedin.com/in/wassim-abid-iot/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, Google Docs, Markdown

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
