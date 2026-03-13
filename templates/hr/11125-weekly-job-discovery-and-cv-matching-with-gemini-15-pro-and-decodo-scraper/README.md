# 👥 Weekly job discovery and CV matching with Gemini 1.5 Pro and Decodo Scraper

> ⚡ **262 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Header 1Smart Weekly Job Discovery Powered by Decodo

This workflow automates the entire search process: every week, it uses **Decodo’s reliable scraping engine** to scan the web for fresh opportunities in your region and industry — no manual searching, no endless scrolling.

Decodo handles the heavy lifting behind the scenes:
it gathers search results, opens each job link, and extracts clean, readable text from pages that are normally full of scripts and formatting noise. The workflow always receives structured, usable information ready for AI analysis.

## Intelligent Matching — Not Just Scraping
Once the jobs are collected, the system analyzes the candidate’s CV and compares it to each posting.
It evaluates:
- Skill alignment
- Experience relevance
- Domain match
- Seniority level

Then it generates a Match Percentage for each role, filtering out weak options and keeping only meaningful opportunities.

## A Weekly Report That Feels Human
Every week, the workflow sends a polished report straight to your inbox:
- A quick overview of the candidate’s strengths
- Best-fit roles sorted by match score
- Clear reasons why each job fits
- Posted dates and direct links
- Insights on skills and market trends

It reads like a personalized career briefing — generated automatically.

## How to Configure It
### Decodo Setup
Add your Decodo API credentials to n8n.
The Google Search + Scraper nodes rely on Decodo’s Web Scraping API.
Make sure your plan supports scraping LinkedIn/Indeed pages.

### AI Setup
Add your Google Gemini API key.
The workflow uses two Gemini models: one for summarizing, one for job-matching.
You can switch to OpenAI or Claude if you prefer.

### CV Input
Add your CV text into the workflow (or connect Google Drive/Sheets for auto-loading).
The Job Matcher Agent will use this text to compute match percentages.

### Email Setup
Add your Gmail credentials and choose where the final report should be sent.

## Flexible and Easy to Customize
- Change the search region.
- Target different industries.
- Store all job data in Notion or Google Sheets.


With **Decodo’s** scraping pipeline at the core, the whole process stays consistent, fast, and dependable.

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Summarization Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
