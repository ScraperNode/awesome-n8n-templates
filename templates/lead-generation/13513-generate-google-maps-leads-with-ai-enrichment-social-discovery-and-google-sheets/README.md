# 🎣 Generate Google Maps leads with AI enrichment, social discovery and Google Sheets

> ⚡ **952 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What it does

This workflow finds local businesses from Google Maps and automatically enriches them with emails, social profiles, AI summaries, and personalized outreach messages — all saved to Google Sheets.

## How it works

- Searches Google Maps using your custom queries
- Scrapes each business website for emails and contact info
- Finds missing social profiles (Instagram, Facebook, LinkedIn, Twitter, TikTok, YouTube)
- Validates emails and removes invalid ones
- Uses AI to generate a business summary and services list
- Writes a personalized outreach message for each lead
- Scores each lead from 0 to 10 based on digital presence
- Exports everything clean and organized to Google Sheets

## Who it is for

- Lead generation agencies
- Freelancers offering outreach as a service
- B2B sales and marketing teams
- Automation consultants

## Requirements

- Serper API key
- Google Sheets OAuth
- Email validation API
- Ollama or any LLM endpoint

## How to set up

- Connect your credentials in n8n
- Add your Google Sheet ID to the Sheets node
- Add your search queries like "bakery in Ohio" or "gyms in Delhi"
- Hit run and leads start filling your sheet automatically!

![image.png](fileId:4468)

![image.png](fileId:4470)

![image.png](fileId:4467)

![image.png](fileId:4469)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
