# 📱 Post daily Verge tech updates to LinkedIn with Gemini and Airtable

> ⚡ **203 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily, reads the latest articles from The Verge RSS feed, uses Google Gemini to select and rewrite one story into an Airtable-ready record plus a formatted LinkedIn post, generates an image with Gemini, then publishes the post to LinkedIn and logs the result in Airtable.

## How it works
1. Runs every day at 6:35 PM on a schedule.
2. Fetches the latest items from The Verge RSS feed and keeps only the 10 most recent entries.
3. Aggregates titles, links, publish dates, authors, and content into index-aligned arrays for batch processing.
4. Uses a Google Gemini-powered agent (with optional Wikipedia and calculator tools) to pick the best article, clean the text, categorize it, generate an image prompt, and produce structured output for Airtable plus a formatted LinkedIn post.
5. Generates a LinkedIn-ready image using Gemini based on the agent’s image prompt.
6. Publishes the LinkedIn post with the generated image and then creates a new Airtable record that stores the post text, article URL, timestamp, and the returned LinkedIn post URL.

## Setup
1. Add Google Gemini (PaLM) API credentials for both the Gemini chat model (text generation) and the Gemini image generation step.
2. Add a LinkedIn OAuth2 connection, set the target LinkedIn person/account, and ensure your LinkedIn app has permissions to post with images.
3. Add an Airtable Personal Access Token, then select or update the Base and Table (and ensure the table has fields like Post Body, Article URL, Date & Time, Status, and LinkedIn Post URL).
4. Update the RSS feed URL if you want a different source and adjust the schedule time to match your timezone and posting cadence.

## 🔗 Nodes Used

Airtable, RSS Read, LinkedIn, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
