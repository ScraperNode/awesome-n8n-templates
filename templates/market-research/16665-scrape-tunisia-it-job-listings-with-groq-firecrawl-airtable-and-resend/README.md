# 📊 Scrape Tunisia IT job listings with Groq, Firecrawl, Airtable, and Resend

> ⚡ **55 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily or via chat to scrape Tunisia-focused IT job listings from predefined company career pages using Firecrawl, saves results into Airtable tables, and emails a daily digest through Resend, with job parsing and orchestration handled by a Groq-powered AI agent.

## How it works
1. Triggers either on a daily 7AM schedule or when an n8n Chat message is received.
2. On scheduled runs, rotates through a fixed list of companies, builds a prompt for the chosen company (including pagination rules), and sets the Airtable table name.
3. Uses a Groq (Llama 3.3 70B) AI agent to decide which allowed career-page URLs to scrape and how to extract job listings into structured fields.
4. Scrapes the requested career pages via the Firecrawl API and parses the returned main content into jobs with title, company, location, description, and URL.
5. When saving is requested, uses Airtable’s API to check for the target table, create it if missing, and insert the job records.
6. For scheduled runs, emails the AI-generated job digest to the configured recipient using the Resend API; otherwise it outputs the response for the chat session.

## Setup
1. Add credentials and values for Firecrawl (API key), Airtable (API key and Base ID), Groq (API key), and Resend (API key, from address, and recipient email).
2. Ensure your Airtable base allows table creation via the Metadata API and that your API key has permission to create tables and insert records.
3. If using the chat trigger, copy the chat webhook URL and configure it in the client or tool that sends chat messages to this workflow.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Simple Memory, Chat Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
