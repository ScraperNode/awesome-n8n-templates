# 🎬 Generate SEO blog articles for SunoAPI with OpenAI and IndexNow

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow generates long-form developer SEO articles using OpenAI, publishes them to a website API, and pings IndexNow for fast indexing, running either on a 2-day schedule or via an on-demand webhook.

## How it works
1. Runs every 2 days on a schedule or receives an on-demand POST request via a webhook.
2. Selects a predefined Suno API keyword/topic (or uses webhook-provided overrides) and prepares the article brief and target slug.
3. Calls the OpenAI Chat Completions API to generate a structured JSON SEO article including markdown content and FAQs.
4. Parses the AI output, computes word count, and generates Schema.org JSON-LD for TechArticle, FAQPage, and BreadcrumbList.
5. Publishes the article payload (content, metadata, and schemas) to the sunoapi.top blog publishing endpoint if basic quality checks pass.
6. Sends the published URL to the IndexNow API for near-instant search engine indexing and returns a JSON status response to the webhook caller.

## Setup
1. Add an OpenAI API key (or compatible provider key) and replace the Authorization header value in the OpenAI HTTP request.
2. Configure the publishing secret by setting the x-sync-secret header value expected by your https://sunoapi.top/api/blog/publish endpoint.
3. If you use IndexNow, set your IndexNow key and keyLocation URL in the IndexNow request body and host the key file at that location.
4. If triggering externally, copy the webhook URL for the POST /sunoapi-generate-content endpoint and configure the calling system to send optional topic/keyword override fields.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
