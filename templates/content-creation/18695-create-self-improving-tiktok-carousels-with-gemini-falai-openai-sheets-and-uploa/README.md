# 🎬 Create self-improving TikTok carousels with Gemini, fal.ai, OpenAI, Sheets and Upload-Post

> ⚡ **289 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily (or manually) to refresh TikTok post analytics in Google Sheets, generate a new 4-slide TikTok carousel strategy with Google Gemini, render slide images with fal.ai, write a TikTok caption with OpenAI, publish via Upload-Post, and update a self-improving “Agent Skill” log.

## How it works
1. Runs on a daily schedule or when executed manually.
2. Reads prior posts from a Google Sheets “Performance Log”, fetches TikTok post analytics from the Upload-Post API, and writes views/likes/comments/shares and engagement rate back to the sheet.
3. Pulls TikTok profile analytics from Upload-Post and reads the current “Agent Skill” memory from Google Sheets, then compiles this with recent post performance into a single context summary.
4. Sends the context to Google Gemini to produce a structured plan for a new TikTok carousel, including a hook/title, four slide image prompts, hashtags, and an engagement question.
5. Generates four 9:16 carousel slide images by calling fal.ai with the prompts and collects the resulting image URLs.
6. Uses OpenAI to write a short TikTok photo description/caption, then publishes the carousel to TikTok through Upload-Post and appends the new post details to the Google Sheets performance log.
7. Uses OpenAI to rewrite the “Agent Skill” text based on cumulative results and saves the updated skill content back to Google Sheets for the next run.

## Setup
1. Create or copy a Google Sheet with “Performance Log” and “Agent Skill” tabs and set the correct spreadsheet ID in the workflow configuration.
2. Add Google Sheets OAuth2 credentials for all Google Sheets steps.
3. Add credentials for Google Gemini, OpenAI, and fal.ai (HTTP Header Auth with `Authorization: Key <FAL_KEY>`).
4. Add your Upload-Post username and API key in the configuration, connect your TikTok account in Upload-Post, and ensure the workflow targets the TikTok platform. Sign up and create the API key at https://www.upload-post.com (API docs: https://docs.upload-post.com).

## Requirements
- An Upload-Post account with a TikTok account connected to one of your profiles and an API key (upload-post.com). Also API keys for Google Gemini, OpenAI and fal.ai, a Google account for Google Sheets, and the n8n-nodes-upload-post community node installed on your instance.

## Customization
- Change the product fields and the Strategy Agent prompt to fit your niche, swap the fal.ai model or the number of slides, adjust the Daily Schedule, or add other platforms supported by Upload-Post (Instagram, LinkedIn, Pinterest…) in the Upload to TikTok node.

## Additional info
Copy this Google Sheet template to your Drive, it already has the "Performance Log" and "Agent Skill" tabs with the right columns: https://docs.google.com/spreadsheets/d/1jk1GvBd6b4DopVH1VXkIsY0yPoCmE-DsA9Kun0ZAfQU/edit — then paste its ID in the Set Config node. On the first run the sheet is empty, so the agent creates a baseline post; from the second run on it starts learning from real analytics.

Upload-Post (https://www.upload-post.com) is the social media posting API used by this template: one API key publishes to TikTok, Instagram, YouTube, LinkedIn, X, Facebook, Threads, Pinterest and more. API docs: https://docs.upload-post.com. If you want to turn long videos into short clips before posting, OpenShorts (https://openshorts.app) from the same team pairs well with this workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
