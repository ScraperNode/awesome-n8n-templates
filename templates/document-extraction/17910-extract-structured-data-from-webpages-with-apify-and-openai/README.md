# 🔬 Extract structured data from webpages with Apify and OpenAI

> ⚡ **104 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow exposes a webhook that finds or accepts a target webpage, scrapes it to clean Markdown using Apify, and uses OpenAI with a dynamic schema to return structured JSON fields requested by the caller.

## How it works
1. Receives a POST webhook request containing either a direct `target_url` or a `subject` + `website_domain`, plus a required `target_data` array of fields to extract.
2. Validates that `target_data` is provided and returns a 400 response if it is missing or empty.
3. Resolves the page URL by using the provided `target_url` or running an Apify Google Search Scraper `site:` query and taking the first organic result.
4. If no matching URL is found, returns a 404 response to the caller.
5. Scrapes the resolved URL with Apify Website Content Crawler (optionally using provided cookies) and normalizes the returned Markdown and content length.
6. If the scraped content is too short, returns a 200 response with `success:false` indicating no content could be extracted.
7. Sends the page content and requested field definitions to OpenAI and returns a 200 response with the extracted fields as structured JSON (using "NA" for missing values).

## Setup
1. Create an Apify account and add an n8n Header Auth credential that sends `Authorization: Bearer <APIFY_TOKEN>`, then select it on both Apify HTTP Request steps.
2. Add an OpenAI API credential and select it for the OpenAI chat model used for extraction.
3. Configure the webhook path in your calling app and send a JSON body with `target_data` plus either `target_url` or `subject` and `website_domain` (and optional `cookies`).
4. Adjust defaults such as crawler type, crawl limits, timeouts, and minimum content length in the workflow’s configuration values if needed.

## Additional info
# Extract structured data from any webpage using Apify and AI
# 📥 [Open full documentation on Notion](https://automatisation.notion.site/Course-Extract-structured-data-from-any-webpage-using-Apify-and-AI-3a03d6550fd98114843fe82b3ab7ed8e)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
