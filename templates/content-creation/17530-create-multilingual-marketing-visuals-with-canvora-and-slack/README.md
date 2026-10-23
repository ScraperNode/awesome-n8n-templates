# 🎬 Create multilingual marketing visuals with Canvora and Slack

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects an idea and target languages via an n8n form, generates an original visual with the Canvora API, then localizes the same design into each language and posts each finished version plus a final summary to a Slack channel.

## How it works
1. Receives a submission from an n8n form containing the content/idea and a comma- or space-separated list of languages.
2. Sends the idea to the Canvora Generations API to create the original visual in the specified output format.
3. Polls the Canvora API until the original generation completes successfully or times out and posts a failure notice to Slack if it does not finish.
4. Splits the language list into individual items and loops through them one at a time.
5. For each language, calls Canvora’s localization endpoint to create a localized version and polls Canvora until that localization completes or times out.
6. Posts a Slack message for each language with the localized output URLs (or an error/timeout notice) and then posts a completion summary when all languages are processed.

## Setup
1. Create a Canvora account and add your Canvora API key as an HTTP Header Auth credential using header name `X-API-Key`.
2. Add Slack credentials and set the target Slack channel (for example, `#content`) in the Slack posting steps.
3. Open the n8n form URL from the form trigger and submit a test idea with a languages list (for example, `es, de, fr`).

## Requirements
- A **Canvora** account (free signup; localization uses the Visual Editor feature, included from the Starter plan).
- A **Slack** connection.

## Customization
- Change `instagram_post` in the Post Idea node to any of 100+ formats (GET /api/formats).
- Languages field accepts codes (`es, de`) or names (`Spanish, German`) – 150+ supported.

## Additional info
- Core nodes: Cloud & self-hosted. Nodes: Form Trigger, HTTP Request, Wait, IF, Code, Split in Batches, Slack.
- Works inside ChatGPT, Claude & any workflow → canvora.ai/for-agents.

**Example output** (the money shot – same design, English original and native Spanish version, real run):

![Original English visual](https://cdn.canvora.ai/visualdocs/generations/af5d5556-d59a-4775-a728-4749b35d3e33/instagram-post-1-1784534815266-25b88baa.png)
![Same design, natively localized to Spanish](https://cdn.canvora.ai/visualdocs/generations/variation-1784534915780/instagram-post-variation-1784534915780-34b7aa68.png)

## 🔗 Nodes Used

HTTP Request, Slack, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
