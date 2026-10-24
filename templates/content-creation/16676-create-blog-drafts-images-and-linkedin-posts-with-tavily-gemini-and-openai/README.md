# 🎬 Create blog drafts, images, and LinkedIn posts with Tavily, Gemini, and OpenAI

> ⚡ **85 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives a blog request via webhook, researches the topic with Tavily, generates a long-form HTML article using Google Gemini, creates two images via the kie.ai API, stores assets in Google Drive, updates a Google Sheets tracker, and notifies a Slack user with links.

## How it works
1. Receives a POST webhook request containing a Google Sheets row payload with an “AI Blog Title” and related metadata.
2. Searches the web for supporting sources using Tavily and passes the research plus the title to Google Gemini to generate the full article as HTML.
3. Converts the generated content to HTML, creates a temporary HTML file in Google Drive, downloads it to set the correct text/html MIME type, re-uploads it as the final Drive file, and deletes the temporary file.
4. Sends the finished article to OpenAI to generate a short LinkedIn post, then updates the matching row in Google Sheets with a Done flag, the article folder/link value, and the LinkedIn post text.
5. Creates a cover image and an in-article infographic by submitting two text-to-image jobs to the kie.ai API, polling until each job succeeds, downloading each resulting image, and uploading both images to Google Drive.
6. Writes the Google Drive links for both images back to the same Google Sheets row and then fetches the updated row to send a Slack message with quick links to the sheet and the generated assets.

## Setup
1. Create credentials for Tavily, Google Gemini (PaLM), OpenAI, Google Drive, Google Sheets, and Slack, then select them in the corresponding nodes.
2. Replace the placeholder “Bearer {YOUR API KEY}” headers and callback URL values in the kie.ai HTTP requests with your actual API key and a valid callback URL.
3. Update the Google Sheets document ID and sheet/tab name (and ensure columns like AI Blog Title, row_number, Done, ARTICLE, LN Post, Image 1, and Image 2 exist and match the workflow mappings).
4. Set the target Google Drive folder IDs for saving article HTML files and images, and adjust naming conventions if needed.
5. Set the Slack recipient (user or channel) and edit the message template links to match your Drive folder and Google Sheets dashboard URLs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Markdown

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
