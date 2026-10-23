# 🔧 Plan AI-powered travel itineraries with Apify, OpenAI, and Google Docs

> ⚡ **226 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for

Travel agencies, freelance travel planners, or anyone who wants to automate personalized trip planning by combining real-time hotel and flight data with AI-generated recommendations.

## What this workflow does

- Collects travel details (airports, dates, travelers) through an n8n form
- Scrapes the top 5 hotels from Booking.com sorted by review score via Apify
- Scrapes the best available flights from Google Flights via Apify
- Generates restaurant, attraction, and day-by-day itinerary recommendations using OpenAI
- Merges all results into a formatted Google Doc and returns the link to the user

## How to set up

1. Create an [Apify](https://apify.com) account and add your API token as both an "Apify API" credential and an "HTTP Query Auth" credential (parameter name: `token`)
2. Add your OpenAI API key as an "OpenAI" credential
3. Connect your Google account via OAuth2 and update the `folderId` in the "Create Document" node to your Google Drive folder
4. Activate the workflow and share the form URL

## Requirements

- Apify account with API token (for Booking.com and Google Flights scrapers)
- OpenAI API key
- Google account with Docs and Drive access

## How to customize

- Swap the form trigger for a webhook or chatbot input
- Change the output from Google Docs to email, Slack, or Notion
- Adjust the OpenAI prompt to focus on budget travel, luxury, or specific interests

## 🔗 Nodes Used

HTTP Request, Google Docs, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
