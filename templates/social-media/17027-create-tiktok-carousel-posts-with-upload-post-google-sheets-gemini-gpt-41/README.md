# 📱 Create TikTok carousel posts with Upload Post, Google Sheets, Gemini, GPT-4.1

> ⚡ **84 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to pull TikTok post and profile analytics from Upload Post, updates a Google Sheets performance log, uses Google Gemini and OpenAI to generate a new carousel concept and caption, creates four images via fal.ai, publishes to TikTok, and updates a persistent “Agent Skill” sheet.

## How it works
1. Runs on a daily schedule (or manually) and loads product, Upload Post, and Google Sheets configuration values.
2. Reads the Google Sheets “Performance Log,” selects posts missing stats or posted recently, fetches TikTok post analytics from the Upload Post API, and writes updated metrics back to the sheet.
3. Aggregates the refreshed history, fetches TikTok profile analytics from Upload Post, reads the “Agent Skill” sheet, and compiles a single context summary.
4. Uses Google Gemini (via a structured JSON output) to generate a TikTok carousel plan including caption, strategy notes, four slide prompts, hashtags, and an engagement question.
5. Sends the four prompts to fal.ai to generate four 9:16 PNG carousel images and collects their hosted image URLs.
6. Uses OpenAI (GPT-4.1) to write a short TikTok photo-post description, publishes the carousel to TikTok via Upload Post (auto-adding music), and logs the new post details back to Google Sheets.
7. Uses OpenAI (GPT-4.1) to update the “Agent Skill” content based on the latest performance data and writes the refreshed skill file back to the “Agent Skill” sheet.

## Setup
1. Create or copy a Google Sheets file with two tabs named “Performance Log” and “Agent Skill,” and ensure the columns match the workflow’s expected fields (including request_id and skill_content).
2. Connect Google Sheets OAuth2 credentials and update the spreadsheet ID (and any sheet names if different) in the configuration.
3. Add Upload Post credentials for publishing plus HTTP Header Auth credentials for the Upload Post analytics endpoints, then set your Upload Post username and API key in the configuration.
4. Add a Google Gemini (PaLM) API credential for the strategy generation step.
5. Add an OpenAI API credential (GPT-4.1) for generating the TikTok description and updating the skill file.
6. Add a fal.ai HTTP Header Auth credential and ensure the fal.run endpoint is accessible for image generation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
