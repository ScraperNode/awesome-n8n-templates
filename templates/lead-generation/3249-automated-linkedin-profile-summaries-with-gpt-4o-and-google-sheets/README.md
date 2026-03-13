# 🎣 Automated LinkedIn profile summaries with GPT-4o and Google Sheets

> ⚡ **505 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Quickly transform any LinkedIn profile URL into a concise, AI‑generated professional summary — perfect for recruiters, sales teams, and hiring managers who need instant insights into prospects or candidates without manual research.

### How it works
- The workflow polls a Google Sheet for new or updated rows containing LinkedIn profile URLs.
- For each URL, the Real‑Time LinkedIn Scraper API (via RapidAPI) pulls experience and education sections.
- Extracted profile data is sent to OpenAI’s GPT model, which generates a clean, structured summary highlighting key strengths, career trajectory, and differentiators.
- The generated summary is written back into a new column in the same row of your Google Sheet for easy review and sharing.


### Set up steps
- Connect your Google account and select the spreadsheet + worksheet containing your list of LinkedIn URLs.
- Sign up for the Real‑Time LinkedIn Scraper API on RapidAPI, copy your API key, and add it to the workflow’s HTTP Request node.
- Insert your OpenAI API key credentials.
- Ensure your Google Sheet has one column for “linkedin_url” and create two empty columns named “full_name” and "summary" (or customize them based on your needs).
- Run a single row through the workflow to verify scraping accuracy and summary formatting, then turn on the workflow for continuous automation.


With this template, eliminate hours of manual profile review — instantly gain actionable insights and focus on what really matters: building relationships and closing deals.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
