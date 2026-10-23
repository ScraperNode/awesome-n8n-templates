# 📊 Send weekly SEO and competitor intelligence reports with SEMrush, GA4, OpenAI, Gmail and Slack

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every Monday at 7am to pull SEO rankings from SEMrush, traffic metrics from Google Analytics 4, and HTML from a competitor page, then uses an OpenAI chat model to write a short weekly intelligence summary and delivers it via Gmail and Slack, with Slack alerts on failures.

## How it works
1. Runs every Monday at 7am on a scheduled trigger.
2. Requests domain organic ranking data from the SEMrush API, pulls a 7-day landing page report from the Google Analytics Data API (GA4), and downloads raw HTML from a specified competitor URL.
3. Combines the SEMrush, GA4, and competitor-page responses into a single dataset for analysis.
4. Hashes the competitor HTML, compares it to the previous run’s stored hash, and flags whether the competitor page changed.
5. Sends the combined SEO data and change flag to an AI agent using the OpenAI chat model (gpt-5-mini) to generate a 4–5 sentence summary with one key action item.
6. Sends the summary as an HTML email via Gmail and posts the same text to a Slack channel.
7. If any step fails, posts an error alert with the execution message to an ops Slack channel.

## Setup
1. Add your SEMrush API key (or required authentication method) to the SEMrush HTTP request and replace `REPLACE_WITH_DOMAIN` with the domain you want to track.
2. Create a Google Cloud OAuth credential with access to the Google Analytics Data API, connect it in the GA4 HTTP request, and replace `YOUR_GA4_PROPERTY_ID` in the request URL.
3. Replace `REPLACE_WITH_COMPETITOR_URL` with the competitor page you want to monitor for HTML changes.
4. Add your OpenAI credential and ensure the workflow can access the `gpt-5-mini` model.
5. Connect your Gmail account and update the recipient address in the email step.
6. Connect your Slack account and set the target channel IDs for the weekly report and the ops alert message.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
