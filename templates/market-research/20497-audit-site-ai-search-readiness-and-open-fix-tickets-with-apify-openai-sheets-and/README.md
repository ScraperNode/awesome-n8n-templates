# 📊 Audit site AI search readiness and open fix tickets with Apify, OpenAI, Sheets and Telegram

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to audit a website’s SEO/GEO/AEO readiness with Apify, compares results to the previous run stored in Google Sheets, and uses OpenAI to generate prioritized fix tickets that are saved to a sheet and sent to Telegram.

## How it works
1. Runs every Monday at 7am on a schedule.
2. Sends the configured website URL and page limit to an Apify actor to crawl and audit pages, returning scores and failed checks per URL.
3. Reads last week’s scoreboard rows from Google Sheets to use as a baseline for comparison.
4. Compares current vs. previous results per URL, flags pages that regressed by the configured point threshold, fall below the minimum score, or have critical issues, and writes all pages back to the Scoreboard tab for history.
5. Limits the number of flagged pages to the maximum ticket count and uses OpenAI to generate a structured engineering ticket for each page based only on the failed checks.
6. Appends each ticket to the Tickets tab in Google Sheets and sends the same ticket details to the configured Telegram chat.

## Setup
1. Create a free Apify account at https://apify.com/?fpr=youssef and connect it in the Apify node. The node runs the SEO, GEO and AEO Audit Actor (https://apify.com/fayoussef/seo-geo-aeo-audit?fpr=youssef), which renders each page, scores it on classic SEO, generative engine readiness and answerability, and returns every failed check with a recommendation attached.
2. Add an OpenAI API credential for the chat model used to generate tickets.
3. Create a Google Sheet with two tabs (for example, “Scoreboard” and “Tickets”), paste the sheet URL, and set the tab names in the workflow.
4. Create a Telegram bot and connect Telegram credentials, then set your target chat ID in the workflow.
5. Update the website URL and adjust maxPages, minScore, dropPoints, and maxTickets to match how many pages you want to audit and when a page should generate a ticket.

## Requirements
- An Apify account (https://apify.com/?fpr=youssef). The free plan audits a few pages per run. An OpenAI account for the ticket writing step, a Google Sheet with two empty tabs, and a Telegram bot created with @BotFather. Nothing needs installing on the site itself and no analytics or Search Console access is required, because the audit reads the pages as a visitor does.

## Customization
- dropPoints is the fall in overall score that counts as a regression: 5 is sensitive, 10 is quiet. minScore is the floor below which a page always gets a ticket whether or not it moved. maxTickets caps what one run puts in front of a developer, which matters most on the first run when every page is new and nothing has a baseline yet. The Tickets tab is already shaped like an issue, so swapping the Save the ticket node for a Linear, Jira or Notion node maps the fields across without touching the rest of the workflow. Point the Telegram node at Slack if that is where your team works, and swap the OpenAI model node for Anthropic or Gemini if you prefer.

## Additional info
Run it once by hand before you schedule it. The first run has no previous audit to compare against, so every page is treated as a first audit and only the floor and critical rules apply, which is also when maxTickets matters most. The Read the last audit node has alwaysOutputData enabled on purpose: a Google Sheets read on an empty tab returns no items, and without that setting the whole workflow would stop on its very first run. Read the ticket steps before passing them to a developer. The recommendations come from the audit itself, but the wording around them is written by a model, which is told to build every step from a check that actually failed and to make no promises about rankings or traffic.

Need a custom version or another data source? See https://automationbyexperts.com

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
