# 📱 Create LinkedIn news posts with Google Gemini, OpenAI images and Slack

> ⚡ **54 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This scheduled workflow pulls the latest AI-related articles from NewsAPI, uses Google Gemini to filter and draft a LinkedIn post plus image prompt, generates an image with OpenAI, uploads the image and post to LinkedIn via its API, and sends status notifications through Gmail and Slack.

## How it works
1. Runs on a schedule and requests the latest AI/tech articles from NewsAPI.
2. Checks whether the NewsAPI response contains any results and emails via Gmail if no articles are available.
3. Sends the first returned article to Google Gemini to decide whether it is suitable for a professional LinkedIn post.
4. Parses Gemini’s JSON decision, continues only if the article is approved, and emails via Gmail if it is rejected as not relevant.
5. Uses Google Gemini to generate LinkedIn post copy and an AI image prompt from the approved article, then cleans and parses the model output into structured JSON.
6. Generates an image from the prompt with OpenAI, fetches the LinkedIn user profile, registers a LinkedIn media upload, converts the image data for upload, and uploads it to LinkedIn.
7. Creates a LinkedIn UGC post that includes the generated text and uploaded image asset, then sends a success notification to a Slack channel.

## Setup
1. Add credentials for Google Gemini (PaLM API), OpenAI, LinkedIn OAuth2, Gmail OAuth2, and Slack, and ensure the LinkedIn connection has permission to upload media and publish posts.
2. Replace `YOUR_NEWS_API_KEY_HERE` in the NewsAPI request URL with your NewsAPI key and adjust the query, language, and pageSize if needed.
3. Update the Gmail recipient addresses used for “no news” and “not relevant” notifications.
4. Set the Slack channel for success notifications.
5. In the LinkedIn image upload step, replace `YOUR_GENRATED_UPLOAD_URL` with the upload URL returned by LinkedIn’s registerUpload response (and map it dynamically) so the PUT upload targets the correct URL.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
