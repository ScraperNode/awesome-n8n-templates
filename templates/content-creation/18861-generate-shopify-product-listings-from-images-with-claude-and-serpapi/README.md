# 🎬 Generate Shopify product listings from images with Claude and SerpAPI

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow receives a product image upload via webhook, uses Anthropic Claude to extract product features and generate SEO content, pulls competitor keywords/prices/reviews with SerpAPI, then creates a Shopify product, logs it to Google Sheets, and notifies a Slack channel.

## How it works
1. Receives a webhook request containing a product image URL (and optional category) when a product image is uploaded.
2. Downloads the image and sends it to Anthropic Claude Vision to extract structured product features, then generates accessibility-friendly alt text from the extracted attributes.
3. Queries SerpAPI Google Shopping to collect competitor product titles/keywords, routes the item into a category-based pricing search, and calculates a suggested competitive price from the competitor price distribution.
4. Fetches product reviews through SerpAPI Google Product and derives simple sentiment, themes, and average rating from the returned review data.
5. Uses Anthropic (agent + Claude) to generate structured SEO content (title, description, bullets, meta description, tags, and a quality score) using the image analysis, competitor keywords, pricing intelligence, and sentiment signals.
6. Validates the generated JSON and content-length rules, regenerating corrected content with Anthropic if the output is invalid.
7. Creates the product in Shopify with the generated title/description/tags and the source image URL, appends the result to a Google Sheets review queue, and posts a formatted notification to Slack.

## Setup
1. Create an Anthropic credential (Claude 3.5 Sonnet) and ensure the Anthropic nodes can access it for both vision and text generation.
2. Add a SerpAPI API key and replace the placeholder value in the configuration step used by all SerpAPI HTTP requests.
3. Provide your Shopify store domain and Admin API access token in the configuration step, and confirm the Admin API version/permissions allow creating products.
4. Connect Google Sheets OAuth, set the target spreadsheet ID in the configuration step, and ensure a sheet named “Review Queue” has columns matching the mapped fields.
5. Connect Slack credentials, set the target channel ID/name in the configuration step, and update the workflow’s webhook URL in the system that sends product image uploads.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
