# 📊 Summarize GitHub trending repos with OpenAI and share via htmlhoster and DingTalk

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to fetch GitHub Trending repositories, summarizes them with an OpenAI-compatible chat completions API, renders a single-page HTML report, uploads it to [htmlhoster for a public link](https://htmlhoster.com/), and posts the report to DingTalk and/or Feishu group bots.

## How it works
1. Runs every day at 09:00 (cron) to start the reporting cycle.
2. Downloads the GitHub Trending (daily) page and parses the top N repositories with their metadata (stars, forks, language, and stars gained today).
3. Fetches each repository’s README from raw.githubusercontent.com (when enabled) and trims it to a configured character limit.
4. Sends the curated repository data to an OpenAI-compatible Chat Completions endpoint to generate a JSON briefing with per-repo insights.
5. Renders the AI output (or falls back to a raw list if the AI call fails) into a styled, single-file HTML report.
6. [Uploads the HTML file to htmlhoster](https://htmlhoster.com/) via [htmlhoster agent](https://htmlhoster.com/agent/) and retrieves a public entry URL.
7. Builds and sends signed webhook messages to DingTalk and/or Feishu that include a short summary, top projects, and the report link.

## Setup
1. Add a Generic Header Auth credential for your OpenAI-compatible API (set `Authorization: Bearer $token`) and confirm the API URL and model in the configuration values.
2. Configure your DingTalk robot webhook URL (and signing secret if enabled) and/or your Feishu bot webhook URL (and signing secret if enabled).
3. Adjust optional settings like repository count, whether to fetch READMEs, and the README character limit to control runtime and token usage.
4. Ensure your environment can access GitHub and raw.githubusercontent.com, and note that the uploaded htmlhoster report is public and subject to htmlhoster upload limits.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
