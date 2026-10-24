# 📱 Curate and publish LinkedIn tech posts with NewsData, Gemini, Slack, and Jina AI

> ⚡ **40 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily, pulls technology news from NewsData.io based on a day-specific topic, uses Google Gemini to pick an article and write a LinkedIn post, generates a matching image, requests approval in Slack, and publishes the approved post with the image to LinkedIn.

## How it works
1. Runs on a daily schedule and assigns a topic based on the current day of the week.
2. Queries the NewsData.io Latest News API for recent US technology articles matching the chosen topic.
3. Uses Google Gemini to select the single best article from the top results and rewrite it into a short, social-friendly summary with the article URL.
4. Fetches the full article content via Jina AI Reader and uses Google Gemini to write a 250–350 word LinkedIn post from the extracted content.
5. Uses Google Gemini to generate an image prompt from the drafted post and calls the Gemini image generation API to produce a 16:9 image.
6. Sends the draft post to Slack for approve/reject input and pauses the workflow until a response is received (or the wait time limit is reached).
7. If approved, attaches the generated image and publishes the post to your LinkedIn profile, otherwise the workflow ends without posting.

## Setup
1. Add a NewsData.io API key and update the HTTP request query parameters (apikey, country/category, and any topic keywords you want to use).
2. Add Google Gemini (PaLM) API credentials and ensure the selected Gemini models are available for both text generation and image generation.
3. Add a Jina AI Reader API key and set it in the Authorization header used to fetch the full article content.
4. Add Slack OAuth credentials, choose the target user/channel, and confirm interactive approval (send-and-wait) works in your Slack workspace.
5. Add LinkedIn OAuth2 credentials and update the target LinkedIn person/account ID used for publishing.

## 🔗 Nodes Used

HTTP Request, Slack, LinkedIn, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
