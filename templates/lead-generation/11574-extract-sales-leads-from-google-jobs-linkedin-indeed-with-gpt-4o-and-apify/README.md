# 🎣 Extract sales leads from Google Jobs, LinkedIn & Indeed with GPT-4o and Apify

> ⚡ **390 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?

This template is designed for B2B sales teams, recruiters, and business development professionals who want to identify sales opportunities by monitoring hiring signals from target companies. It's particularly useful for:

- Sales teams selling HR tech, recruitment software, or staffing services
- Consultancies offering technical talent or project-based work
- Any B2B company that uses "intent data" from job postings to time their outreach

## What this workflow does

This workflow automates the entire process of monitoring job postings and converting hiring signals into actionable sales leads:

1. **Daily Job Scraping**: Automatically scrapes job postings from Google Jobs, LinkedIn, and Indeed for your target companies using Apify actors
2. **Data Normalization**: Standardizes job data from multiple sources into a unified format
3. **Keyword Filtering**: Filters jobs based on your target keywords to identify relevant opportunities
4. **AI-Powered Analysis**: Uses GPT-4o to analyze each qualified job posting and generate:
   - Inferred pain points from the hiring signal
   - Strategic sales approach angles
   - Urgency scoring (1-10)
   - Ready-to-send cold email drafts
5. **Slack Notifications**: Sends real-time alerts with AI insights to your sales channel
6. **Weekly Reports**: Generates comprehensive trend analysis reports every Monday with AI-powered insights

## Setup

1. **Google Sheets**: Create a spreadsheet with 4 sheets:
   - `Target Companies` (columns: Company Name, Target Keywords, My Solution)
   - `Raw Jobs` (for all scraped jobs)
   - `Qualified Leads` (for filtered opportunities)
   - `Weekly Reports` (for trend analysis)

2. **Apify**: Set up accounts and get Actor IDs for:
   - Google Jobs Scraper
   - LinkedIn Jobs Scraper
   - Indeed Scraper

3. **Credentials**: Connect your Google Sheets, Slack, Gmail, OpenAI, and Apify credentials

4. **Configuration**: Update the placeholder values in the workflow for your specific IDs and channel names

## Requirements

- n8n instance (self-hosted or cloud)
- Apify account with credits
- OpenAI API key (GPT-4o access)
- Google Sheets access
- Slack workspace (optional, for notifications)
- Gmail account (optional, for email reports)

## Customization

- Adjust `maxJobsPerSource` and `daysToCheck` in the Configuration node
- Modify AI prompts to match your sales style and language preferences
- Add or remove job sources based on your needs
- Customize Slack message format and notification triggers

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
