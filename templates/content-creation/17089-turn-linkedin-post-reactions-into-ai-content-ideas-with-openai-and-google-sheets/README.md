# 🎬 Turn LinkedIn post reactions into AI content ideas with OpenAI and Google Sheets

> ⚡ **41 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to fetch your recent LinkedIn post reactions via a RapidAPI LinkedIn endpoint, uses OpenAI to turn each reacted post into a structured original content idea, and appends or updates the results in a Google Sheets idea vault without duplicates.

## How it works
1. Runs every day at 08:00 using a schedule trigger.
2. Loads configurable settings like your LinkedIn username, reaction type filter, recency window, max posts to analyze, OpenAI model, and output language.
3. Calls the linkedin-api8 RapidAPI endpoint to retrieve posts you recently reacted to and splits the response into individual reaction items.
4. Filters reactions to keep only the selected reaction type (or all when blank) and posts newer than the configured number of days.
5. Limits the number of reactions sent for analysis to control cost.
6. Sends each source post (author, reaction, text, and URL) to OpenAI to generate a structured content idea (category, angle, hook, takeaway, format, and hashtags).
7. Saves each idea to Google Sheets using an upsert that matches on Post URL to avoid duplicate rows.

## Setup
1. Create a RapidAPI subscription for linkedin-api8 and add an HTTP Header Auth credential that sends your `x-rapidapi-key` (and ensure the request includes the `x-rapidapi-host` header).
2. Add an OpenAI API credential and set the model name in the configuration (for example, `gpt-5-mini`).
3. Add a Google Sheets OAuth2 credential, set the target spreadsheet and sheet tab, and ensure your header row includes the mapped columns (including `Post URL` for matching).
4. Update `linkedin_username` (and optionally `reaction_filter`, `recency_days`, `max_ai_posts`, and `content_language`) in the workflow configuration.

## Additional info
# Turn LinkedIn post reactions into AI content ideas in Google Sheets

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Turn-LinkedIn-post-reactions-into-AI-content-ideas-in-Google-Sheets-Course-39c3d6550fd98181bf84d1827e88543c)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
