# 🎬 Create Shopify product video ads from new products with OpenAI and Sisif

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Triggers on new Shopify products, writes a motion prompt with OpenAI, animates the main image into a 5-second Sisif video, attaches the MP4 to the product via the Admin GraphQL API, falls back to Google Drive on failure, and reports the outcome in Slack.

## How it works
1. Triggers when a product is created in Shopify.
2. Extracts the product title, type, description, and main image URL, and skips processing if no HTTPS image URL is available.
3. Uses OpenAI to generate a short image-to-video motion prompt from the product details, then sends the prompt and image URL to Sisif to start video generation.
4. Polls Sisif every 30 seconds until the render is READY, stops on ERROR/REFUNDED, or times out after 40 checks.
5. When the video is ready, downloads the MP4, requests a Shopify staged upload target via the Admin GraphQL API, uploads the file to the staged target, and updates the product to attach the video as media.
6. If Shopify upload/attach fails, downloads the MP4 and uploads it to Google Drive as a fallback.
7. Posts a Slack message indicating whether the video was attached in Shopify, saved to Google Drive, or failed/timed out during rendering.

## Setup
1. Add a Shopify Access Token credential for a custom app with read_products and write_products (and write_files if required), and set your shop subdomain and Admin API version in the workflow configuration.
2. Create a Sisif API key at https://sisif.ai/users/api-keys/ and add it as an HTTP Bearer Auth credential used by the Sisif generate and status requests.
3. Add an OpenAI API credential for the chat model used to write the motion prompt.
4. Add Google Drive OAuth2 credentials and set the target Drive folder ID for fallback uploads.
5. Add Slack credentials and set the destination channel name in the workflow configuration.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Shopify Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
