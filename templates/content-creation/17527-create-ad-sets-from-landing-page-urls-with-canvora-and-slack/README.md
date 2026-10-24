# 🎬 Create ad sets from landing page URLs with Canvora and Slack

> ⚡ **18 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a landing page URL via an n8n form, sends it to Canvora to generate square, landscape, and portrait ad creatives, polls Canvora until the generation completes or times out, and then posts the resulting ad links (or a failure alert) to a Slack channel.

## How it works
1. Receives a landing page URL when the n8n form is submitted.
2. Sends the URL to the Canvora Generations API requesting the ad_square, ad_landscape, and ad_portrait output formats.
3. Waits 30 seconds and repeatedly polls Canvora for the generation status until it reaches a terminal state or the maximum number of checks is reached.
4. If the generation completes successfully (completed or partial), sorts the returned outputs and formats a Slack message with the creative file URLs and a Canvora review link.
5. Posts the finished ad set message to the selected Slack channel.
6. If the generation fails, is cancelled, or times out, posts a failure notification to Slack with the final status.

## Setup
1. Create a Canvora account and add your Canvora API key as an HTTP Header Auth credential (header name `X-API-Key`).
2. Connect a Slack credential in n8n and set the target channel (for example, `#content`) where the workflow posts results.
3. Open the form URL from the form trigger and submit a test landing page URL to verify Canvora generation and Slack delivery.

## Requirements
- A free **Canvora** account (free credits, no card; API keys on all plans).
- A **Slack** connection.

## Customization
- Add `og_image`, `blog_header`, or `instagram_carousel` to outputFormats (100+ formats: GET /api/formats).
- Pass a `brandId` (GET /api/brands) to lock ads to your brand kit.
- Swap the form trigger for a webhook to fire from your CMS or product catalog.

## Additional info
- Core nodes – Cloud & self-hosted. Nodes: Form Trigger, HTTP Request, Wait, IF, Code, Slack.
- Works inside ChatGPT, Claude & any workflow → canvora.ai/for-agents.

**Example output** (all three placements from one URL – real run against canvora.ai/for-agents):

![Square ad](https://cdn.canvora.ai/visualdocs/generations/23f6d108-2fa8-4843-ba8b-496fa1a2aef7/ad-square-1-1784535095750-d69f855f.png)
![Landscape ad](https://cdn.canvora.ai/visualdocs/generations/23f6d108-2fa8-4843-ba8b-496fa1a2aef7/ad-landscape-2-1784535088348-344d1a52.png)
![Portrait ad](https://cdn.canvora.ai/visualdocs/generations/23f6d108-2fa8-4843-ba8b-496fa1a2aef7/ad-portrait-3-1784535087167-a218c76d.png)

## 🔗 Nodes Used

HTTP Request, Slack, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
