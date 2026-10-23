# 🎣 Qualify LinkedIn hiring signals and draft outreach with Gemini and Google Sheets

> ⚡ **15 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs scheduled LinkedIn hiring-signal searches via Unipile, qualifies posts with Google Gemini, logs new leads to Google Sheets, and notifies recruiters by Gmail, plus a daily Microsoft Teams digest that summarizes recruiter outreach activity, funnel status, and SLA flags.

## How it works
1. Runs on two schedules: every 2 hours (08:00–20:00 IST, Mon–Sat) to discover leads and daily at 08:00 IST (Mon–Sat) to post a performance digest.
2. Searches LinkedIn posts from the past day via the Unipile API using rotating keyword queries and normalizes the results into one item per post.
3. Reads the existing Leads spreadsheet in Google Sheets and deduplicates posts so previously logged posts (and recently seen authors) are skipped.
4. Filters remaining posts with a regex gate, then sends survivors to Google Gemini to extract hiring details and generate an ICP fit score.
5. Keeps only qualified posts (hiring=true and score ≥ 40), assigns each lead to a recruiter via round-robin, and uses Google Gemini to draft a four-message LinkedIn outreach sequence.
6. Appends the qualified lead, recruiter assignment, score, and drafted messages to Google Sheets and sends an HTML lead notification email through Gmail.
7. For the daily digest, reads all rows from Google Sheets, calculates signals captured yesterday, touches per recruiter versus the daily target, funnel counts by status, and SLA action flags, then posts the summary to Microsoft Teams via an incoming webhook.

## Setup
1. Add credentials for Google Sheets OAuth2 (all Sheets steps) and Gmail OAuth2 (lead notification email).
2. Provide a Unipile API key and set your Unipile DSN and LinkedIn account ID used for search.
3. Provide a Google Gemini API key for both Gemini HTTP requests.
4. Update the Google Sheets document URL/ID and ensure the sheet has columns matching the workflow’s lead and outreach fields (Lead ID, Signal Date, Recruiter, Touch dates, Reply Date, Status, and draft message columns).
5. Set your Microsoft Teams incoming webhook URL for the daily digest (and optionally for recruiter pings) and update the recruiter names, emails, and target touch-per-day settings in the configuration code blocks.
6. Remove or bypass the “Limit (Testing Only)” cap before going live, then activate both schedule triggers.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
