# 📊 Track daily LLM brand visibility with Gemini, Groq, OpenRouter, Sheets and Slack

> ⚡ **43 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Youtube Video: https://youtu.be/BOodBD6HWSU?si=yEenUFBdYOq_1RVj
This workflow runs daily at 7AM to generate buyer-style prompts with Google Gemini, query Groq, OpenRouter, and a search-grounded Gemini agent (via Tavily), score whether your brand is mentioned, and log results to Google Sheets before posting a daily visibility digest to Slack.

## How it works
1. Runs every day at 7AM on a schedule.
2. Loads your brand and competitor details, then asks Google Gemini to generate a JSON prompt bank for the day.
3. Splits the prompt bank into individual prompts and processes them one by one.
4. For each prompt, queries Groq (Llama 3.3) and OpenRouter (free model) for ungrounded answers, and uses a Gemini agent with Tavily web search to produce a search-grounded answer with citations.
5. Sends the three answers to Google Gemini to evaluate brand recognition/mentions, sentiment and competitor lists, and compute an overall visibility score weighted toward the search-grounded answer.
6. Appends each prompt’s scored results to a Google Sheets worksheet.
7. Aggregates the day’s results into averages and posts a summary message to a Slack channel.

## Setup
1. Add credentials for Google Gemini (Google PaLM API / Generative Language API), Groq, OpenRouter, Tavily, Google Sheets (Service Account), and Slack.
2. Update the Brand & Competitor Config values (brand name, domain, industry, competitors, target market, prompt count, and alert threshold).
3. Select your target Google Sheets document and worksheet, and ensure it contains columns matching the fields appended by the workflow.
4. Choose the Slack channel where the daily digest is posted.
5. (Optional) Adjust the schedule time and the OpenRouter agent’s search limit/system instructions to fit your monitoring needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
