# 🎬 Create SEO WordPress blog drafts from a Google Sheets queue with Gemini

> ⚡ **44 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs weekly to turn a picked topic from Google Sheets into a validated SEO blog draft in WordPress using Google Gemini for article and image generation, then writes the draft metadata and image URLs back to the sheet and sends a Gmail notification.

## How it works
1. Runs weekly on a schedule trigger and reads Google Sheets rows where Pick is set to 1.
2. Selects the first row that is not already DraftReady or Published and prepares the topic, SEO fields, slug, category slug, and image style inputs.
3. Queries the WordPress REST API for an existing post with the same slug and, if found, updates the Google Sheets row with the post ID/URL and emails a reconciliation notice via Gmail.
4. If no duplicate exists and the row is not already marked Processing, the workflow marks the row as Processing in Google Sheets and looks up the WordPress category by slug via the WordPress REST API.
5. Uses Google Gemini to generate an <article> HTML block with required image placeholders, then validates the HTML for structure, unsafe elements, placeholders, and minimum length.
6. Uses Google Gemini to generate three image briefs, generates three images with Gemini Image, converts them to JPEG, and uploads them to the WordPress media library via the WordPress REST API.
7. Replaces the HTML placeholders with the uploaded image URLs, creates a WordPress post as a draft, updates it with featured image, excerpt, and category, then commits DraftReady status and links back to Google Sheets and sends a Gmail notification.

## Setup
1. Add Google Sheets OAuth2 credentials and select the correct spreadsheet and sheet name in all Google Sheets nodes.
2. Add Google Gemini credentials for the chat model and image generation models used in the workflow.
3. Add WordPress credentials (WordPress API and WordPress node Basic Auth) and replace the placeholder WordPress REST endpoints for posts, categories, and media with your site URLs.
4. Add Gmail OAuth2 credentials and set the notification email address used for the “draft ready” and “reconciled” emails.
5. Ensure your Google Sheet includes the required columns (at minimum rowKey, Pick, STATUS, TOPIC, SEO_TITLE, SLUG, and optional SEO/image fields plus WP_POST_ID/WP_URL/IMAGE_URL_1–3) and set your desired schedule timing.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Wordpress, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
