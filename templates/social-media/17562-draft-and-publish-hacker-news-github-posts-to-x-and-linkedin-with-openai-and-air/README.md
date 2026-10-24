# 📱 Draft and publish Hacker News GitHub posts to X and LinkedIn with OpenAI and Airtable

> ⚡ **21 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every 6 hours to find Hacker News front-page posts that link to GitHub repositories, generates Twitter/X and LinkedIn copy with OpenAI, queues and deduplicates drafts in Airtable, notifies you in Telegram for review, and then publishes to X and LinkedIn.

## How it works
1. Runs every 6 hours on a schedule.
2. Downloads the Hacker News homepage and parses it to extract front-page submissions that link to GitHub.
3. Checks Airtable for existing records matching each Hacker News post and keeps only items that have not been logged before.
4. Fetches each new GitHub repository page, converts it to Markdown, and sends the details to OpenAI (gpt-4o-mini) to generate Twitter and LinkedIn posts in JSON.
5. Validates the generated output and drops any items where the expected twitter/linkedin fields are missing.
6. Creates a new Airtable record to store the source URL, title, and the drafted Twitter and LinkedIn content.
7. Sends the drafts to a Telegram chat for review, waits five minutes, then posts to X (Twitter) and LinkedIn.
8. Updates the Airtable record to mark the X and LinkedIn posts as published.

## Setup
1. Create an Airtable base/table with fields like Post, Title, Url, Tweet, LinkedIn, TDone, and LDone, add an Airtable Personal Access Token credential, and update the base/table IDs used in the Airtable steps.
2. Add an OpenAI API key credential for the OpenAI (LangChain) step and keep or change the selected model (gpt-4o-mini).
3. Add X (Twitter) OAuth credentials and set the posting account as needed.
4. Add LinkedIn OAuth credentials and replace the hardcoded LinkedIn person URN with your own profile identifier.
5. Create a Telegram bot, add its Bot API token credential, and update the Telegram chat ID to the destination you want for review messages.
6. Adjust the schedule interval and the wait time if you want a different posting cadence or a longer review window.

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, X (Formerly Twitter), LinkedIn, Markdown

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
