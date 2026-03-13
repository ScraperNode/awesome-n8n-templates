# ⚡ Automate LinkedIn job search and applications with Claude AI and Google Sheets

> ⚡ **673 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This AI-powered workflow automatically searches LinkedIn for relevant jobs, scores them using Claude AI based on your profile, sends personalized applications or connection requests, and logs everything to a Google Sheet for tracking.

## How it works

1. **Trigger** - Runs on a schedule or via webhook to start a new job search
2. **Search LinkedIn** - Fetches job listings based on keywords, location, and filters
3. **Filter & Deduplicate** - Removes already-applied or seen jobs
4. **Analyze with Claude AI** - Scores each job against your resume/profile
5. **Decision Gate** - Only proceeds with jobs above your score threshold
6. **Apply or Connect** - Sends Easy Apply or connection request to recruiter
7. **Log Results** - Records all actions in Google Sheets for tracking

## Setup Steps

1. Import this workflow into your n8n instance
2. Configure credentials:
   - **LinkedIn OAuth2** - LinkedIn Developer Portal
   - **Anthropic API** - For Claude AI job scoring
   - **Google Sheets** - To track applications
3. Update your profile/resume text in the `Build Search Context` node
4. Set your job keywords and location preferences
5. Activate the workflow

## Sample Trigger Payload
```json
{
  "keywords": "Product Manager",
  "location": "Bangalore, India",
  "experienceLevel": "mid-senior",
  "jobType": "full-time",
  "scoreThreshold": 70
}
```

## Features

- **AI-powered job scoring** based on your skills and experience
- **Duplicate prevention** - tracks seen and applied jobs
- **Auto Easy Apply** for matching jobs
- **Recruiter outreach** with personalized messages
- **Full audit log** in Google Sheets

**Explore More LinkedIn & Social Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
