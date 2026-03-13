# 🎬 Create LinkedIn content from workflows using Gemini & Cloudflare AI

> ⚡ **558 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

This workflow is a complete, AI-powered content engine designed to help automation experts build their personal brand on LinkedIn. It transforms a technical n8n workflow (in JSON format) into a polished, engaging LinkedIn post, complete with a custom-generated AI image and a strategic call-to-action.

This system acts as your personal content co-pilot, handling the creative heavy lifting so you can focus on building, not just writing.


## Who’s it for?
This template is for n8n developers, automation consultants, and tech content creators who want to consistently showcase their work on LinkedIn but lack the time or desire to write marketing copy and design visuals from scratch. If you want to turn your projects into high-quality content with minimal effort, this is your solution.

## How it works
This workflow is divided into two main parts that work together through Telegram:

**Content Generation & Image Creation:**
You send an n8n workflow's JSON file to your first Telegram bot.

The workflow sends the JSON to Google Gemini with a sophisticated prompt, instructing it to analyze the workflow and write a compelling LinkedIn post in one of two high-engagement styles ("Builder" or "Strategist").

Gemini also generates a detailed prompt for an AI image model, including a specific headline to be embedded in the visual.

This image prompt is then sent to the Cloudflare Workers AI model to generate a unique, high-quality image for your post.

The final image and the AI-generated text prompt are sent back to you via Telegram for review.

**Posting to LinkedIn:**
You use a second Telegram bot for publishing.

Simply reply to the image you received from the first bot with the final, polished post text.

The workflow triggers on your reply, grabs the image and the text, and automatically publishes it as a new post on your LinkedIn profile.

**Why Two Different Workflows?**
The first workflow sends you the image and the post content. You can make changes in the content or the image and send the image to BOT-2. Then copy the post content send it to BOT-2 as a reply to the image. Then both the image and Content will be posted on LinkedIn as a single post. 


## How to set up
Create Two Telegram Bots: You need two separate bots. Use BotFather on Telegram to create them and get their API tokens.

Bot 1 (Generator): For submitting JSON and receiving the generated content/image.

Bot 2 (Publisher): For replying to the image to post on LinkedIn. (After Human Verification)

Set Up Accounts & Credentials:

Add credentials for Google Gemini, Cloudflare (with an API Token), Google Sheets, and LinkedIn.

For Cloudflare, you will also need your Account ID.

Google Sheet for Tracking: Create a Google Sheet with the columns: Keyword, Image Prompt, Style Used to keep a log of your generated content.

Configure Nodes:

In all Telegram nodes, select the correct credential for each bot.

In the Google Gemini node, ensure your API credential is selected.

In the Cloudflare nodes ("Get accounts" and "Get Flux Schnell image"), select your Cloudflare credential and replace the placeholder with your Account ID in the URL.

In the LinkedIn node, select your credential and choose the author (your profile).

In the Google Sheets node, enter your Sheet ID.

Activate: Activate both Telegram Triggers in the workflow.


**Requirements**

- An n8n instance.
- Credentials for: Google Gemini, Cloudflare, LinkedIn, Google Sheets.
- Two Telegram bots with their API tokens.
- A Cloudflare Account ID.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, LinkedIn, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
