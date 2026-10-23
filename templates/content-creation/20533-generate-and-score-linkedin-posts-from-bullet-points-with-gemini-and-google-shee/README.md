# 🎬 Generate and score LinkedIn posts from bullet points with Gemini and Google Sheets

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives bullet points via a webhook, uses Google Gemini to generate and score three LinkedIn post variations, logs the results to Google Sheets, and returns an HTML page with all versions plus an automatically selected recommended post.

## How it works
1. Receives a POST request to a webhook with bullet_points, tone, post_type, and an optional author_name.
2. Normalizes incoming fields and sets configuration values such as the target Google Sheets document ID and sheet name.
3. Uses Google Gemini to generate exactly three distinct LinkedIn post variations from the provided bullet points and options.
4. Uses Google Gemini again to score each variation on hook strength, readability, and engagement potential.
5. Totals the three scores per variation, selects the highest-scoring post as the recommendation, and prepares the variations and score breakdown for output.
6. Appends all three variations, their totals, the input metadata, and the recommended index to a Google Sheets worksheet.
7. Returns a formatted HTML response showing the recommended post and all three variations with their scores.

## Setup
1. Add a Google Gemini (PaLM) API credential and attach it to both Gemini steps (generation and scoring).
2. Add a Google Sheets OAuth2 credential.
3. Create a Google Sheet with a worksheet named “Posts” (or update the sheet name) and add headers: generated_at, bullet_points, tone, post_type, variation_1, score_1, variation_2, score_2, variation_3, score_3, recommended_index.
4. Replace REPLACE_WITH_GOOGLE_SHEET_ID in the configuration step with your Google Sheet document ID.
5. Activate the workflow, copy the webhook URL, and send JSON requests to the /linkedin-generator endpoint from your form or client.

## 🔗 Nodes Used

Google Sheets, Webhook, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
