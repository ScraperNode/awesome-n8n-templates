# ⚡ Hacker news job listing scraper and parser

> ⚡ **5,216 views** · ⚡ [Personal Productivity](../)

## Description

This automated workflow scrapes and processes the monthly "Who is Hiring" thread from Hacker News, transforming raw job listings into structured data for analysis or integration with other systems. Perfect for job seekers, recruiters, or anyone looking to monitor tech job market trends.

## How it works

Automatically fetches the latest "Who is Hiring" thread from Hacker News
Extracts and cleans relevant job posting data using the HN API
Splits and processes individual job listings into structured format
Parses key information like location, role, requirements, and company details
Outputs clean, structured data ready for analysis or export

## Set up steps

1. Configure API access to [Hacker News](https://github.com/HackerNews/API
) (no authentication required)
2. Follow the steps to get your cURL command from [https://hn.algolia.com/](https://hn.algolia.com/) 
3. Set up desired output format (JSON structured data or custom format)
4. Optional: Configure additional parsing rules for specific job listing information
5. Optional: Set up integration with preferred storage or analysis tools
The workflow transforms unstructured job listings into clean, structured data following this pattern:

- Input: Raw HN thread comments
- Process: Extract, clean, and parse text
- Output: Structured job listing data

This template saves hours of manual work collecting and organizing job listings, making it easier to track and analyze tech job opportunities from Hacker News's popular monthly hiring threads.

## 🔗 Nodes Used

Airtable, HTTP Request, Filter, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
