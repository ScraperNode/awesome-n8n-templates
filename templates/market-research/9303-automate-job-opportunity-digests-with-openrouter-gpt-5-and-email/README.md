# 📊 Automate Job Opportunity Digests with OpenRouter GPT-5 and Email

> ⚡ **97 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# n8n Forum Job Aggregator - AI-Powered Email Digest

## Overview
Automate your n8n community job board monitoring with this intelligent workflow that scrapes, analyzes, and delivers opportunities straight to your inbox. Perfect for freelancers, agencies, and developers looking to stay on top of n8n automation projects without manual checking.

## How It Works
1. **Scrapes** the n8n community job board to find new postings from the last 7 days
2. **Extracts** key metadata including job titles, descriptions, posting dates, and client details
3. **Analyzes** each listing using OpenRouter AI to generate concise summaries of project requirements and client needs
4. **Delivers** a professionally formatted email digest with all opportunities organized and ready for review

## Prerequisites
- **OpenRouter API Key**: Sign up at [OpenRouter.ai](https://openrouter.ai) to access AI summarization capabilities
- **SMTP Email Account**: Gmail, Outlook, or any SMTP-compatible email service

## Setup Steps
**Time estimate: 5-10 minutes**

1. **Configure OpenRouter Credentials**
   - Add your OpenRouter API key in n8n credentials manager
   - Recommended model: GPT-3.5-turbo or Claude for cost-effective summaries

2. **Set Up SMTP Email**
   - Configure sender email address
   - Add recipient email(s) for digest delivery
   - Test connection to ensure delivery

3. **Customize Date Range** (Optional)
   - Default: Last 7 days of job postings
   - Adjust the date filter node to match your preferred frequency

4. **Test & Refine**
   - Run a test execution
   - Review email formatting and AI summary quality
   - Customize HTML template styling to match your preferences

## Customization Options
- **Scheduling**: Set up cron triggers (daily, weekly, or custom intervals)
- **Filtering**: Add keyword filters for specific technologies or project types
- **AI Prompts**: Modify the summarization prompt to extract different insights
- **Email Design**: Customize HTML/CSS styling in the email template node

## Example Use Cases
- **Freelance Developers**: Never miss relevant n8n automation opportunities
- **Agencies**: Monitor market demand and competitor activity
- **Job Seekers**: Track n8n-related positions and consulting gigs
- **Market Research**: Analyze trends in automation project requests

## Example Output
Each email digest includes:
- Job title and posting date
- AI-generated summary (e.g., "Client needs workflow automation for Shopify order processing with Slack notifications")
- Direct link to original posting
- Organized by recency

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Filter, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
