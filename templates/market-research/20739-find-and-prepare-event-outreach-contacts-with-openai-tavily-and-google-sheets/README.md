# 📊 Find and prepare event outreach contacts with OpenAI, Tavily, and Google Sheets

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Spent hours finding where to promote your event and who to contact? Fill in one form and this workflow finds relevant directories, communities and local media, works out how to get listed on each, and drafts a personalized message for every one, all collected in a Google Sheet.


## How it works
1. Receives event details from an n8n Form submission (name, description, dates, location, and optional website link).
2. If a valid event website URL is provided, fetches the page, converts it to Markdown, and uses OpenAI to extract structured summaries for event context, target audience, and location.
3. Uses three OpenAI research agents with Tavily Search to find up to five relevant promotion platforms each for the event theme, the target audience, and the event location.
4. Merges all discovered outreach candidates, deduplicates them by URL while preserving combined tags, and routes social platforms to a simple “post to the group/page” path.
5. For non-social platforms, loops through candidates one by one and uses an OpenAI contact-finder agent that scrapes the target site (and optionally crawls contact-like subpages) and falls back to Tavily web search to determine the best submission method and contact details.
6. Uses OpenAI to write a platform-specific outreach draft (email, form text, community post, or DM) using the event details, relevance notes, and submission instructions.
7. Appends or updates each candidate as a row in a Google Sheets tab, keyed by the Link, including tags, contact method, and the message draft for manual review and sending.

## Setup
1. Add an OpenAI credential and select your preferred chat model in all OpenAI nodes used for summarization, research, contact finding, and message writing.
2. Install and configure the Tavily community node and add a Tavily API credential (or replace the Tavily nodes with another search tool and reconnect them to the agents’ tool inputs).
3. Create a Google Sheet with a tab named “Outreach Candidates” and the required header columns, then connect Google Sheets OAuth credentials and set the document URL in the Google Sheets node.
4. Activate/publish the workflow so the internal “Scrape Pages” and “Crawl Contact Pages” tool calls (which execute this same workflow) can run successfully.
5. If you customize the form fields, update the field mappings in the workflow so the event details are captured correctly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Markdown, Execute Workflow Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
