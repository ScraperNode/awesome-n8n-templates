# 🎬 Grow TikTok carousels with Gemini, GPT-4.1, fal.ai, and Upload Post

> ⚡ **25 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to refresh TikTok post and profile analytics from Upload Post, uses Sheets as a performance log and persistent “skill” memory, generates a 4-slide carousel concept with Google Gemini, creates images with fal.ai, publishes to TikTok via Upload Post, and updates the skill file with OpenAI.

## How it works
1. Runs on a daily schedule (or manually) and loads configuration values like product details, Upload Post user, and the Google Sheets document ID.
2. Reads prior posts from Google Sheets, pulls missing or recent TikTok post analytics from the Upload Post API, and writes updated metrics (views, likes, comments, shares, engagement rate) back to the sheet.
3. Fetches overall TikTok profile analytics from Upload Post and reads the current “Agent Skill” memory and refreshed performance log from Google Sheets to build a consolidated context summary.
4. Uses Google Gemini (with a structured JSON parser) to generate a new TikTok carousel plan including caption, strategy notes, hashtags, engagement question, and four 9:16 slide prompts with on-image text.
5. Sends the four prompts to fal.ai to generate four vertical PNG images, then combines the resulting image URLs into a single set for publishing.
6. Uses OpenAI to write a short TikTok photo description, publishes the carousel to TikTok via Upload Post, logs the new post details to Google Sheets, and then uses OpenAI to update the “Agent Skill” content for the next run.

## Setup
1. Create or copy a Google Sheets file with two tabs—“Performance Log” and “Agent Skill”—and ensure the required columns exist (including request_id for matching stats updates).
2. Add Google Sheets OAuth2 credentials in n8n and set the correct spreadsheet ID in the workflow configuration.
3. Add an Upload Post account credential for publishing and an HTTP Header Auth credential for the Upload Post analytics API endpoints, then set your Upload Post username (and API key if you store it in config).
4. Add a Google PaLM (Gemini) API credential for the strategy generation step.
5. Add a fal.ai HTTP Header Auth credential for image generation.
6. Add an OpenAI API credential for generating the TikTok description and maintaining the Agent Skill memory.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
