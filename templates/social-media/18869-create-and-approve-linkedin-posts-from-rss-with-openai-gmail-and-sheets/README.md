# 📱 Create and approve LinkedIn posts from RSS with OpenAI, Gmail, and Sheets

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily, reads RSS news and your recent post history from Google Sheets, uses OpenAI to draft a new LinkedIn post in Brazilian Portuguese, fetches a relevant image from Pexels, and emails you for approval before publishing to LinkedIn and logging the result.

## How it works
1. Runs on a daily schedule (configured to trigger at 08:00).
2. Reads your previously generated/published posts from Google Sheets to provide recent-topic context.
3. Pulls the latest items from a predefined list of RSS feeds and sends the headlines and summaries to OpenAI to generate a new LinkedIn post as structured JSON.
4. Parses the OpenAI JSON output into fields like topic, post text, theme, and source link, then queries the Pexels API to pick a matching image URL.
5. Sends a Gmail message with the draft post and image link and waits for your response to approve, reject, or request a rewrite.
6. If you request a rewrite, sends your feedback to OpenAI to surgically edit the post and loops back to re-parse and re-request approval.
7. If you approve, downloads the selected image, uploads it to LinkedIn, publishes the post to your LinkedIn profile, and logs the outcome in Google Sheets (or logs rejection if you reject).

## Setup
1. Add credentials for Google Sheets, OpenAI, and Gmail, and update the Google Sheets document ID and sheet name used for reading history and logging outcomes.
2. Replace placeholders for your author details in the OpenAI prompt (name, company, niche, audience, and only truthful proof points).
3. Create a Pexels API key and paste it into the Pexels key placeholder so the workflow can fetch an image.
4. Generate a LinkedIn OAuth access token with the required posting permissions, paste it into the LinkedIn token placeholders, and (optionally) enable and configure the organization URN nodes if you want to post to a company page.
5. Set the review recipient email address in the Gmail approval step and ensure you can receive and submit the approval form responses.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
