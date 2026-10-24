# 🎬 Create LinkedIn posts from articles with OpenAI, Pexels and Google Sheets

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a daily schedule, reads a “TO DO” topic from Google Sheets, uses Tavily and OpenAI to generate a LinkedIn post, finds and selects a matching image from Pexels, uploads the image to LinkedIn, publishes the post, and writes the generated content back to Google Sheets.

## How it works
1. Runs on a schedule and fetches the first Google Sheets row where the Status column is set to “TO DO”.
2. Searches the web for the row’s Topic using the Tavily Search API and collects content from the top three results.
3. Uses OpenAI (GPT-4) to synthesize the three article excerpts into a single LinkedIn post and outputs JSON containing the post text, an image search query, and image alt text.
4. Uses OpenAI to refine the post into a 2–5 keyword visual search query and then searches Pexels for 10 landscape images.
5. Uses OpenAI (GPT-4o) to review the 10 Pexels image URLs and select the best match, then extracts the chosen image URL.
6. Downloads the selected image, uploads it to LinkedIn via the LinkedIn REST image upload endpoint, and publishes the LinkedIn post with the uploaded image.
7. Updates the matching row in Google Sheets with the generated content output.

## Setup
1. Connect Google Sheets OAuth credentials and ensure your spreadsheet has at least Topic and Status columns, with rows marked “TO DO” to be picked up.
2. Add an OpenAI API credential (GPT-4 and GPT-4o access) for post generation and image selection.
3. Add API keys for Tavily Search and Pexels and replace the hard-coded Authorization headers in the HTTP Request nodes.
4. Create a LinkedIn app/access token with permission to upload images and post, then set your person URN (YOUR_PERSON_ID), access token (YOUR_ACCESS_TOKEN), and desired visibility.
5. (Optional) Connect Google Drive OAuth credentials and set the target folder ID if you want to save the downloaded image to Google Drive.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, LinkedIn, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
