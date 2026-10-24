# 🎬 Generate and optimize AI blog posts for WordPress with Gemini and OpenAI

> ⚡ **23 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow receives a webhook request with a draft article and AI configuration, then uses Google Gemini, OpenAI, and/or OpenRouter to generate WordPress-ready HTML content, SEO metadata, FAQs, and a cover image (base64) formatted for WPBakery, returning the assembled payload as JSON.

## How it works
1. Receives a POST webhook request containing a title, article text, writing and image style instructions, optional existing data, and AI provider settings.
2. Normalizes the incoming payload, determines whether the request is for a new post or for regenerating a specific asset, and prepares defaults such as categories and image constraints.
3. For regeneration requests, generates only the requested asset (image, excerpt, FAQ, or SEO JSON) using a fallback chain across Google Gemini, OpenAI, and OpenRouter, then returns the result to the webhook response.
4. For new post requests, generates excerpt, FAQ items, a single category selection, and SEO fields in one JSON response using the same multi-provider fallback strategy.
5. Rewrites the full article into clean WordPress-ready HTML (for example using <p>, <h2>, <ul>, and <strong>) while preserving the original meaning and applying the requested writing style.
6. Creates a detailed image prompt from the article, then generates a cover image with Google Gemini (fallback to OpenAI), and returns the final JSON containing content, SEO metadata, and base64 image data.

## Setup
1. Configure the Webhook trigger URL (POST /create-post) in your WordPress plugin or source system that sends the article payload.
2. Provide at least one AI provider credential in the incoming ai_config (Google Gemini API key, OpenAI API key, and/or OpenRouter API key) and enable the corresponding text/image flags.
3. Update the allowed category list sent in available_categories (or set a default in the workflow) to match the categories you use in WordPress.
4. Set your preferred Gemini/OpenAI/OpenRouter model names in ai_config (including image models if you want image generation) and adjust retry_count and retry_delay as needed.
5. Use the Manual Trigger test path to validate the payload structure and confirm that the webhook response returns the expected JSON fields (content_body, seo_data, faq_items, and image_base64).

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
