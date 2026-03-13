# 🔬 Singapore university eligibility analyzer with GPT-4o-Mini, WordPress and Slack notifications

> ⚡ **74 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Introduction
Automates scholarship tracking by scraping university sites, assessing eligibility via AI, and publishing results to WordPress or Slack. Eliminates manual searches for students, counselors, and education platforms, enabling scalable curation and timely notifications.

## How it Works
Webhook triggers parallel scraping of NUS, NTU, SIT, SUTD → merge data → AI evaluates eligibility → aggregate qualified scholarships → generate summaries → post to WordPress/Slack → send email notifications with appeal options.

## Setup Steps
1. Configure OpenAI credentials and eligibility prompt template
2. Update HTTP requests with university URLs and selectors
3. Add WordPress site URL and API credentials
4. Create Slack webhook and notification channel
5. Configure Gmail/SMTP for email notifications

## Workflow
Webhook → Scrape 4 Universities (Parallel) → Merge Data → Prepare Context → AI Eligibility Check → Aggregate Results → Generate Summary → Check Status → Publish Slack/Email/WordPress → Handle Appeals

## Workflow Steps
1. Scraping: Fetch scholarship pages from four universities simultaneously
2. Merge: Combine data into a unified dataset
3. AI Processing: Analyze eligibility criteria, deadlines against student profile
4. Aggregation: Consolidate qualified scholarships with match scores
5. Publishing: Post to WordPress, send Slack/email with results
6. Appeals: Webhook handles rejection appeals with AI review

## Prerequisites
OpenAI API key, WordPress site with REST API, Slack workspace with webhook, Gmail/SMTP credentials, student profile data (GPA, citizenship, major)

## Use Cases
Counselors automating recommendations for 100+ students, financial aid offices aggregating departmental opportunities

## Customization
Add universities (SMU, SUSS, international institutions), include government schemes (MOE, Edusave, Mendaki)

## Benefits
Saves 10+ hours weekly per counselor, monitors 50+ scholarships automatically, provides AI eligibility matching (85%+ accuracy)

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Webhook, Wordpress, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
