# 🎣 Automatically Scrape Make.com Job Board with GPT-5-mini Summaries & Email Digest

> ⚡ **83 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automatically Scrape Make.com Job Board with GPT-5-mini Summaries & Email Digest

## Overview

**Who is this for?**  
Make.com consultants, automation specialists, and freelancers who want to catch new client opportunities without manually checking the forum.

**What problem does it solve?**  
Scrolling through forum posts to find jobs wastes time. This automation finds new postings, uses AI to summarize what clients need, and emails you a clean digest.

**How it works:**  
Runs on schedule → scrapes the Make.com professional services forum → filters jobs from last 7 days → AI summarizes each posting → sends formatted email digest.

### Use Cases

1. **Freelancers**: Get daily job alerts without forum browsing, respond to opportunities faster
2. **Agencies**: Keep sales teams informed of potential clients needing Make.com expertise
3. **Job Seekers**: Track contract and full-time positions requiring Make.com skills

### Detailed Workflow

**Scraping:** HTTP module pulls HTML from the Make.com forum job board

**Parsing:** Extracts job titles, dates, authors, and thread links

**Filtering:** Only jobs posted within last 7 days pass through (configurable)

**AI Processing:** GPT-5-mini analyzes each post to extract:
- Project type
- Key requirements
- Complexity level
- Budget/timeline (if mentioned)

**Email Generation:** Aggregates summaries into organized HTML email with direct links

**Delivery:** Sends via SMTP to your inbox

### Setup Steps

**Time:** ~10 minutes

**Requirements:**
- OpenRouter API key ([get one here](https://openrouter.ai/))
- SMTP credentials (Gmail, SendGrid, etc.)

**Steps:**

1. Import template
2. Add OpenRouter API key in "OpenRouter Chat Model" node
3. Configure SMTP settings in "Send email" node
4. Update recipient email address
5. Set schedule (recommended: daily at 8 AM)
6. Run test to verify

### Customization Tips

**Change date range:** Modify filter from 7 days to X days: `{{now - X days}}`

**Keyword filtering:** Add filter module to only show jobs mentioning "API", "Shopify", etc.

**AI detail level:** Edit prompt for shorter/longer summaries

**Multiple recipients:** Add comma-separated emails in Send Email node

**Different AI model:** Switch to Gemini or Claude in OpenRouter settings

**Team notifications:** Add Slack/Discord webhook instead of email

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Filter, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
