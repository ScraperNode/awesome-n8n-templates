# 📊 Analyze competitor Facebook ads with Apify, OpenAI, and Google Sheets

> ⚡ **180 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually scrapes Facebook Ad Library results via **[apify](https://www.apify.com?fpr=udemy)**, filters for high-like advertisers, analyzes video/image/text ads with OpenAI (vision + text), and appends a strategic summary plus rewritten ad copy for each ad to Google Sheets.

## How it works
1. Starts when you run the workflow manually.
2. Sends your keyword, country, status, and limit settings to an **[apify](https://www.apify.com?fpr=udemy)** Facebook Ad Library scraper API to fetch recent ads and their details.
3. Filters out ads from advertisers whose Facebook page likes are below the configured minimum.
4. Routes each remaining ad into video, image, or text-only processing based on which creative fields are present.
5. For video and image ads, uses OpenAI Vision to describe the ad creative (video cover frame or image) and then uses OpenAI to generate a structured strategic analysis and a rewritten version of the ad copy.
6. For text-only ads, uses OpenAI to generate the same structured strategic analysis and rewritten ad copy from the scraped ad data.
7. Appends each analysis result to a Google Sheets spreadsheet for tracking and review.

## Setup
1. Add an **[apify](https://www.apify.com?fpr=udemy)** API token as an HTTP Header Auth credential and ensure you have access to the Apify actor used by the Facebook Ad Library scraper request.
2. Add an OpenAI API credential with access to the configured vision and chat models, and update the model IDs in the configuration if needed.
3. Connect Google Sheets OAuth2 credentials and select the target spreadsheet and sheet in each of the three Google Sheets append steps.
4. Adjust the configuration values (search keywords, country, active status, minimum page likes, and max ads) to match the competitors and markets you want to monitor.

## Additional info
# Analyze competitor Facebook ads with Apify and OpenAI
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Analyze-competitor-Facebook-ads-with-Apify-and-OpenAI-3a03d6550fd9810ca5d5f5a8d6f07431)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
