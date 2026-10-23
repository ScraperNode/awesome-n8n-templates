# 📱 Create LinkedIn, Facebook and Bluesky posts from Google Sheets with Gemini, Nano Banana and PostWire

> ⚡ **5 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every weekday and turns “ready” topics from Google Sheets into LinkedIn, Facebook, and Bluesky posts using Google Gemini for copy and image generation, then publishes them via PostWire and writes back post links or error notes to the sheet with a Gmail alert.

## How it works
1. Runs every weekday at 9:00 and reads rows from Google Sheets where the status is set to ready.
2. Takes the first available topic and updates the row in Google Sheets to status writing to claim it.
3. Uses Google Gemini to generate platform-specific post text (LinkedIn, Facebook, Bluesky) plus an image prompt in JSON format.
4. Uses Google Gemini (image) to generate an illustration for the post from the image prompt.
5. Publishes the texts and generated image to LinkedIn, Facebook, and Bluesky via PostWire and collects the per-platform results.
6. If all platforms succeed, updates the Google Sheets row to posted with the publication timestamp and platform URLs.
7. If any step fails, updates the row to needs fix or partly posted with error details and sends a Gmail email with what to fix and any links that were published.

## Setup
1. Create a PostWire account, connect your LinkedIn/Facebook/Bluesky profiles, install the PostWire node, and add your PostWire API credential in n8n.
2. Add Google Sheets credentials and select the target spreadsheet and sheet in each Google Sheets node.
3. Add a Google Gemini credential for both Gemini nodes (text and image models).
4. Add Gmail credentials and set the notification email address in the Post settings node.
5. Ensure your Google Sheet includes columns for topic, notes, status, posted_at, links, and note, and set status to ready to queue topics.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
