# 📊 Track weekly brand visibility in ChatGPT and Perplexity with Google Sheets, Gmail, and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to ask a list of buyer-style prompts in ChatGPT (with web search) and Perplexity, then scores whether your brand is mentioned or cited and writes results to Google Sheets, emailing a report and sending a Slack alert on significant drops.

## How it works
1. Runs weekly on a schedule and reads the brand settings (brand name, domain, competitors, repeat count, report email) and active prompts from Google Sheets.
2. Expands each active prompt into multiple repeat runs and sends each run to OpenAI Responses (ChatGPT with web_search) and the Perplexity Chat Completions API.
3. Normalizes both providers’ responses into a single record that extracts answer text and cited URLs, then checks whether the brand name appears and whether the brand’s domain is cited.
4. Aggregates repeats per prompt and engine to calculate mention/citation rates, stability (always/usually/sometimes/never), competitors mentioned, and top cited domains.
5. Appends or updates per-prompt results in a Google Sheets Results tab.
6. Builds a weekly rollup (overall mention rate, citation rate, share of voice, weak prompts, and week-over-week change) and logs it to a Google Sheets History tab.
7. Emails the HTML report via Gmail and posts a Slack message if the mention rate drops by 10 points or more versus the previous run.

## Setup
1. Create Google Sheets credentials and set your spreadsheet ID, then add the Settings, Prompts, Results, and History tabs with the column names referenced in the workflow.
2. Add an OpenAI API credential and a Perplexity API credential to allow the workflow to query both engines.
3. Add a Gmail credential for sending the weekly email and populate the “Report Email” field in the Settings tab.
4. Add a Slack credential, set the target channel name/ID, and adjust the schedule or the 10-point drop threshold in the workflow if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
