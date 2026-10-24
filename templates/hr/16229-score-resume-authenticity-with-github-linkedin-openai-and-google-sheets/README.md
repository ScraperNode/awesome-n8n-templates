# 👥 Score resume authenticity with GitHub, LinkedIn, OpenAI and Google Sheets

> ⚡ **63 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow accepts resume submissions via webhook or a weekday schedule, extracts verifiable claims from the resume text, cross-checks them against GitHub and LinkedIn data, uses OpenAI to generate a verification report, calculates an authenticity score, logs results to Google Sheets, and emails a summary via SendGrid.

## How it works
1. Triggers from an inbound webhook request or on a weekday cron schedule for batch verification.
2. Normalizes incoming candidate data (ID, name, resume text, LinkedIn URL, GitHub username) and loads scoring weights and thresholds.
3. Parses the resume text with Python to extract employment, education, skills, and certification claims and stops if no claims are found.
4. Fetches public GitHub profile and repository data from the GitHub API and retrieves a public LinkedIn profile via a RapidAPI endpoint, with a short wait to reduce rate-limit risk.
5. Aggregates GitHub and LinkedIn evidence and sends the extracted claims plus evidence to OpenAI to produce a structured JSON verification report.
6. Computes category scores and an overall authenticity score and verdict, then appends the results to Google Sheets, emails a summary via SendGrid, and returns the full report in the webhook response.

## Setup
1. Provide an OpenAI API credential for the LangChain agent node (or replace the model with your preferred provider).
2. Replace the placeholder tokens/keys for the GitHub API and the RapidAPI LinkedIn endpoint (X-RapidAPI-Key and host) in the HTTP requests.
3. Configure Google Sheets access by setting your spreadsheet ID and providing a valid Google OAuth access token (or switch to the Google Sheets node with OAuth credentials).
4. Add your SendGrid API key and update the sender/recipient email addresses used for the verification summary.
5. If using the webhook trigger, copy the production webhook URL for `resume-verify-inbound` and configure your ATS/form to POST candidateId, name, resumeText, linkedinUrl, githubUsername, and optional portfolioUrl.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
