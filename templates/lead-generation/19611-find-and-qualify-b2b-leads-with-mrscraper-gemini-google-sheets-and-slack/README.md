# 🎣 Find and qualify B2B leads with MrScraper, Gemini, Google Sheets, and Slack

> ⚡ **12 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects an ICP via an n8n form, uses Google Gemini and MrScraper to find and extract company details from websites, scores each lead and writes an icebreaker, saves qualified/disqualified results to Google Sheets, and posts a ranked summary to Slack.

## How it works
1. Receives target niche, location, ICP details, score threshold, and run limits from an n8n form.
2. Uses Google Gemini to generate alternative Google search queries and deduplicates them into a capped list.
3. Uses MrScraper to run Google SERP searches for each query, then filters out directories/social sites and keeps one prospect website per domain up to the maximum company count.
4. For each selected website, uses MrScraper to extract a business description, services, and any published contact details from the site.
5. Uses Google Gemini to score the company against the ICP, list buying signals, and generate a personalized outreach icebreaker.
6. Appends the lead to a Google Sheets tab for qualified or disqualified leads based on score and presence of email/phone.
7. After processing all companies, builds a top-10 ranked summary of qualified leads and posts it to a Slack channel.

## Setup
1. Install the community node `n8n-nodes-mrscraper` and add a MrScraper API credential.
2. Add a Google Gemini (PaLM) API credential for the keyword-generation and lead-scoring steps.
3. Connect Google Sheets OAuth, select the target spreadsheet, and set the sheet tabs for qualified and disqualified leads.
4. Connect Slack OAuth and set the destination channel (or remove the Slack notification step if not needed).
5. Run the form once and adjust Search Region/Search Language, Minimum Lead Score, Keyword Variations, and Max Companies To Process to match your target market and budget.

## 🔗 Nodes Used

Google Sheets, Slack, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
