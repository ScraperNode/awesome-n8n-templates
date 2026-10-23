# 👥 Screen LinkedIn jobs and send tailored applications with Apify and OpenAI

> ⚡ **370 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects your job preferences via an n8n form, uses Apify to scrape LinkedIn job listings, and has OpenAI screen and rank them. After you approve a shortlist by Gmail, it generates tailored resume and cover-letter PDFs with DocRaptor, emails them to you, and logs matches to Sheets

## How it works
1. Receives your job preferences and resume text through an n8n form submission.
2. Sends the preferences to Apify to scrape recent LinkedIn jobs, then removes duplicates and obvious mismatches (seniority, years of experience, and location).
3. Uses OpenAI to score each job’s relevance and eligibility and returns a JSON verdict with a fit score and short reason.
4. Keeps the top matches above the configured threshold and emails you a shortlist in Gmail with approve/decline buttons.
5. If you approve, uses OpenAI to draft a job-specific resume and cover letter from only the provided profile text and generates HTML interview prep questions.
6. Converts the resume and cover letter HTML into PDFs via DocRaptor, emails the tailored application package to you in Gmail, and appends the match details to a Google Sheets tracker.

## Setup
1. Add credentials for OpenAI, Gmail OAuth2, Google Sheets OAuth2, Apify (HTTP Header Auth with an Authorization Bearer token), and DocRaptor (HTTP Basic Auth with API key as username and a blank password).
2. In the configuration values, set the Apify actor (or keep the default), fit threshold, top matches, approval wait time, and DocRaptor test mode.
3. Create a Google Sheet with a “Tracker” tab and map/select the target spreadsheet document ID in the Google Sheets append step.

## Additional info
# Screen LinkedIn jobs with AI and email tailored applications after your approval

# [Open full documentation on Notion](https://automatisation.notion.site/Course-Screen-LinkedIn-jobs-with-AI-and-email-tailored-applications-after-your-approval-39d3d6550fd981428828f2fa8cb5b582)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
