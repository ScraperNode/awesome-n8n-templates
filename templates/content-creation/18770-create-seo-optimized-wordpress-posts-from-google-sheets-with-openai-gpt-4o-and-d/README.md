# 🎬 Create SEO-optimized WordPress posts from Google Sheets with OpenAI GPT-4o and DALL·E 3

> ⚡ **18 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Automatically generates SEO-optimized 'SEO-Writing.ai' Style 'Health and lifestyle' category WordPress blog drafts from a Google Sheet queue using Open AI (GPT-4o) for content and DALL·E 3 for featured images.

## How it works
1. Runs manually when you click “Test workflow”.
2. Reads rows from Google Sheets where the Status column is set to Pending and processes them in batches.
3. Sends each row’s topic, category, keywords, and meta description to an OpenAI-powered agent to generate a structured JSON article with HTML body content.
4. Uses OpenAI to create a realistic featured-image prompt and generates an image with DALL·E 3.
5. Uploads the generated image to the WordPress Media Library via the WordPress REST API.
6. Creates a new WordPress post in draft status using the generated title and content.
7. Updates the corresponding row in Google Sheets to set Status to Done, then waits one minute before continuing to the next item.

## Setup
1. Connect your Google Sheets OAuth credentials and set the correct spreadsheet ID, sheet/tab, and column names (including a Status column with Pending/Done values).
2. Add your OpenAI API credentials and ensure the selected models are available (GPT-4o for text and DALL·E 3 for images).
3. Connect your WordPress credentials for the WordPress node and replace the media upload URL (https://your-website.com/wp-json/wp/v2/media) with your site’s domain.
4. Configure HTTP Basic Auth (application password recommended) for the WordPress media upload request and ensure WordPress accepts REST media uploads for your user role.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
