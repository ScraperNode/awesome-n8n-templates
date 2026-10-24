# ⚡ Score job listings and generate tailored cover letters with Apify, OpenAI and Google Sheets

> ⚡ **9 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule to scrape job listings via Apify (Google Jobs and Career Site API), scores each role against your base resume using OpenAI, generates tailored cover letter and optionally a tailored resume in Google Docs, and logs the results to Google Sheets with Gmail error alerts.

## How it works
1. Runs on a schedule (with an optional manual test trigger) and loads your search query and Google IDs from the configured variables.
2. Uses Apify actors to scrape jobs from Google Jobs and the Career Site API, then normalizes and merges both result sets into a single list.
3. Processes jobs in batches and skips listings that already exist in Google Sheets (matched by Apply URL), have no apply link, have short descriptions, or don’t meet the seniority criteria.
4. Fetches your base resume from Google Docs and sends the resume plus job details to OpenAI to score relevance from 1–10 with a one-sentence rationale.
5. For jobs scoring 7+, uses OpenAI to generate a personalized cover letter from the job description and your resume.
6. For jobs scoring 8+, uses OpenAI to tailor your resume, saves it as a new Google Doc in your Drive folder, and makes the document publicly readable to create a shareable link.
7. Appends or updates the job row in Google Sheets with the score, reasoning, cover letter, and resume URL (when generated), and sends a Gmail notification if any step errors.

## Setup
1. Create an Apify account, add your Apify API token in n8n, and ensure your n8n instance supports the Apify community node.
2. Add OpenAI API credentials in n8n for the scoring and writing steps.
3. Add Google OAuth credentials for Google Sheets and Google Docs/Drive access (Sheets read/write, Docs read/create/update, and Drive permissions updates).
4. Create a Google Sheet with a “Jobs” tab and columns that match the workflow mapping (including “Apply URL” for deduping), then set your Google Sheet ID in the workflow variables.
5. Upload your base resume as a Google Doc, set its document ID and the output Drive folder ID in the workflow variables, and set the notification email address used by Gmail error alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Google Docs, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
