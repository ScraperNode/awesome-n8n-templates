# ⚡ Screen and auto-apply to remote jobs with MrScraper, Gemini, and Telegram

> ⚡ **32 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every four hours to discover remote job openings across Recruitee, Lever, Ashby, and Greenhouse, score them against your CV using Google Gemini, research salary and company reviews with MrScraper, and send a Telegram digest with optional approval-based auto-submission for Recruitee roles.

## How it works
1. Runs every four hours and loads your job seeker profile, prior seen jobs, and salary cache from Google Sheets, then fetches and cleans text from your portfolio URL.
2. Uses MrScraper Google SERP searches to discover company job boards on Recruitee, Lever, Ashby, and Greenhouse, then pulls openings from each ATS public API and pre-filters to remote, relevant, unseen roles.
3. Sends shortlisted openings to Google Gemini to return structured match scores, fit notes, and hard blockers, then keeps only roles above your minimum score threshold.
4. Uses MrScraper to find and extract salary benchmarks and employee review summaries for top matches, reusing cached salary lookups when available.
5. Uses Google Gemini to draft a cover letter and screening-question answers and drops applications that have hard blockers or required questions that cannot be answered confidently from your CV.
6. Sends Telegram approval requests for eligible Recruitee openings and, when approved, submits the candidate via Recruitee’s public HTTP endpoint and confirms the outcome in Telegram.
7. Logs all reviewed roles and outcomes back to Google Sheets, updates the salary cache, and sends a final Telegram digest summarizing applied, ready-to-send, and needs-you roles (or a “quiet day” message when nothing meets the threshold).

## Setup
1. Create a Google Sheets OAuth2 connection and set your spreadsheet ID, ensuring it includes the sheets named job_profile, seen_jobs, and salary_cache with the expected columns (including profile_json in job_profile).
2. Add a MrScraper API credential for SERP discovery and page extraction, and adjust Run Settings (SERP_PAGES, MAX_QUERIES, MAX_BOARDS, WITH_SALARY, WITH_REVIEWS) to fit your token budget.
3. Add a Google Gemini (Google PaLM) API credential for the scoring and drafting steps.
4. Create a Telegram bot credential, set TELEGRAM_CHAT_ID in Run Settings, and ensure your n8n instance can receive Telegram button callbacks (n8n Cloud or a reachable public URL such as via --tunnel).
5. Populate job_profile with your CV PDF URL, contact details, target roles, skills, languages, seniority, remote preference, and salary expectation, then leave DRY_RUN enabled for testing before allowing real Recruitee submissions.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
