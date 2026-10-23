# 🔧 Create LinkedIn posts and WordPress blogs with OpenAI and Google Sheets

> ⚡ **40 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a content brief via an n8n form, uses OpenAI to generate a LinkedIn post or WordPress blog plus a matching thumbnail, saves the draft to Google Sheets and Google Drive, then publishes on approval to LinkedIn or creates a WordPress draft via the WordPress REST API.

## How it works
1. Receives a content request from an n8n form with the chosen format, categories, tone, topic source, and thumbnail preferences.
2. Uses OpenAI (gpt-4o-mini) to generate the title, HTML body, plain-text copy, hashtags/keywords, and an image prompt as structured JSON.
3. Uses OpenAI (gpt-image-1) to generate a thumbnail image, converts it to base64 for display, and uploads the image to Google Drive.
4. Appends the draft content metadata (including a unique contentId, status, and Drive file ID) to a Google Sheets table for tracking.
5. Shows a styled preview page that embeds the thumbnail and content and includes a publish button that calls a webhook with the draft ID.
6. When the publish webhook is clicked, looks up the draft in Google Sheets and stops with an “already processed/invalid” response if its status is not READY.
7. Downloads the thumbnail from Google Drive and either publishes the post to LinkedIn with the image or uploads the image to WordPress and creates a blog post as a draft with the uploaded media set as the featured image.
8. Marks the draft as PROCESSED in Google Sheets and returns an HTML confirmation response.

## Setup
1. Add an OpenAI API credential for the text generation (gpt-4o-mini) and image generation (gpt-image-1) steps.
2. Add Google Sheets and Google Drive OAuth credentials, create a sheet with the expected columns (contentId, format, title, bodyPlain, bodyHtml, hashtags, driveFileId, status, createdAt), and set the spreadsheet ID, sheet name, and Drive folder ID in the configuration fields.
3. Add a LinkedIn OAuth credential and set your LinkedIn person ID in the LinkedIn publishing step.
4. Add WordPress credentials for the HTTP Request nodes and set your WordPress site base URL in the publish configuration.
5. Copy the production URL of the publish webhook and paste it into the publishWebhookUrl field used to build the preview page button link.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, LinkedIn, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
