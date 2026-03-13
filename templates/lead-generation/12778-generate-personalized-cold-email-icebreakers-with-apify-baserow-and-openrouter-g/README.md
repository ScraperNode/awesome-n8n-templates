# 🎣 Generate personalized cold email icebreakers with Apify, Baserow and OpenRouter GPT-4.1

> ⚡ **17 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## This workflow automatically researches a lead’s website, understands what the business actually does, and generates a highly personalized cold outreach subject line and icebreaker using AI.

Instead of guessing or relying on shallow placeholders, it scrapes real website content, summarizes it intelligently, and feeds that context into an LLM to produce outreach that feels relevant and human.

If a website is broken or unreachable, the workflow safely flags it so you can identify faulty leads early.

## Sticky Notes
- No API keys are hardcoded. Add all credentials via n8n’s credential manager.
- Website scraping uses markdown and strict character limits to keep token usage under control.
- Unresponsive websites return `no content`, helping you identify broken or invalid leads.
- The database can be swapped easily. Baserow is used here, but Airtable or Google Sheets can be used with minimal changes.

## How It Works

### 1. Fetch Leads from Database
The workflow starts by pulling leads from Baserow, including company name and website URL.

### 2. Visit and Scrape the Website
The lead’s website is fetched and converted into HTML. If the site fails to load or respond, the workflow records `no content` and continues without breaking.

### 3. Extract and Filter Internal Links
All links are extracted from the page, then filtered so only links belonging to the same website are kept.

### 4. Scrape Multiple Pages
The workflow scrapes up to five pages in total, including the main website page and up to four internal pages. This provides enough context while avoiding unnecessary data.

### 5. Convert to Markdown and Trim Content
Each page is converted to markdown to reduce token usage and trimmed to a maximum of 5,000 characters to control LLM costs.

### 6. Aggregate Website Content
All processed markdown content is combined into a single structured input.

### 7. Generate a Business Overview
An LLM analyzes the aggregated content and generates a concise overview of the company and its offering.

### 8. Generate Subject Line and Icebreaker
A second LLM uses the company name, lead name where available, and the generated business overview to create a highly personalized subject line and icebreaker for outreach.

### 9. Update the Database
The final outputs are written back to the database, keeping each lead enriched and ready for outreach.

## Use Cases
- Cold email personalization at scale
- Lead research and enrichment
- Sales and SDR workflows
- Agency outreach systems
- Founder-led outbound without manual research

## Requirements
- Apify API key for website scraping
- Baserow credentials (can be replaced with Airtable or Google Sheets)
- LLM API key (OpenRouter is used in this workflow)

## Why This Template Is Useful
Most outreach fails because it is generic. This workflow solves that by grounding every message in real website content while staying fast, efficient, and cost-conscious.

## 🔗 Nodes Used

Airtable, HTTP Request, Baserow, Markdown, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
