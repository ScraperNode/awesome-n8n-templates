# 🎬 Translate WordPress posts and ACF fields using DeepL and OpenAI

> ⚡ **39 views** · 🎬 [Content Creation & Video](../)

## Description

## Who it is for

This workflow is designed for developers, content managers, and website administrators managing multilingual WordPress sites. It is highly beneficial for websites built with complex Advanced Custom Fields (ACF) or custom Gutenberg layouts that standard translation plugins often struggle to process efficiently.

## How it works

When a post is created or updated, WordPress triggers a webhook to start the workflow. The workflow fetches the raw post JSON directly from the WordPress REST API. An OpenAI node analyzes a text snippet to detect the exact source language, ensuring it only routes and translates into missing target languages to prevent duplication. A code node then recursively extracts text from both standard fields and specific ACF fields into a single array. These strings are translated in bulk via DeepL, maintaining HTML formatting. Finally, the workflow rebuilds the original JSON structure with the translated text and pushes it back to WordPress as a newly linked translation draft.

## Requirements

- WordPress Application Password (for HTTP Basic Auth)
- OpenAI API Key
- DeepL API Key
- A WordPress plugin capable of firing webhooks on post updates (e.g., WP Webhooks)

## How to set up

1. Configure the Webhook node and point your WordPress webhook plugin to the provided test/production URL.
2. Add your HTTP Basic Auth credentials (WP Admin Username and App Password) to the WordPress request nodes.
3. Add your OpenAI API key and DeepL API key to their respective nodes.
4. Update the base URL in the HTTP nodes to point to your actual WordPress domain.

## How to customize

Open the "Smart Router & Targets" node and update the target languages array to match your website's supported languages. Most importantly, open the "Extract Content" code node and modify the text keys array to perfectly match the field names used in your site's unique ACF configuration.

## 🔗 Nodes Used

Function, HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
