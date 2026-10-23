# 🎬 Create UGC video ads with Google Flow Omni 1.1 Flash and useapi.net

> ⚡ **40 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow uses an n8n multi-step form and the useapi.net Google Flow API to generate UGC-style video ads with a consistent presenter and voice, creating/choosing presenter images, voice previews, product reference images, scenes, and final multi-clip Omni 1.1 Flash videos with optional upscaling.

## How it works
1. Starts from an n8n form where you choose the Google Flow account email, presenter source (generate/upload/saved character), number of products, intro/closing clips, format, and takes per clip.
2. Collects detailed inputs (presenter/voice/scene and per-product descriptions, actions, durations, and optional photos) and uploads any provided images to your Google Flow account via useapi.net.
3. Checks the connected Google Flow account status and available credits via useapi.net and stops with an explanation page if the account is unhealthy, unpaid, or underfunded.
4. If needed, generates presenter images, a second-angle image, and voice preview candidates via useapi.net, lets you re-roll, and saves the selected face+voice as a reusable Google Flow character.
5. Generates four-view product sheets (or uses uploaded product photos), then generates multiple scene keyframes that include the chosen character and product references and lets you pick or re-roll.
6. Submits one Omni 1.1 Flash video job per clip (intro/product/closing) with multiple takes, polls job status until completion, and lets you pick takes or re-roll specific clips.
7. Optionally upscales selected takes to 1080p, then provides a playback/download page that joins the chosen clips on demand through a webhook and supports re-joining with adjustable trim cuts.

## Setup
1. Create a useapi.net account, connect your Google Flow account email in useapi.net, and ensure the Google account is on a paid Google AI plan with enough Flow credits for the selected number of clips and takes.
2. In n8n, add an HTTP Header Auth credential for useapi.net (Authorization: Bearer <token>) and select it for the workflow’s HTTP Request nodes.
3. Activate the workflow and open the “Start form” URL to run the guided, multi-page flow (and keep the “Download ad” webhook URL unchanged unless you also update links generated on the final page).

## Requirements
- A useapi.net subscription and API token (one flat monthly plan covers every useapi.net API).
- A Google account connected to useapi.net on a paid Google AI plan. Omni 1.1 Flash clips spend its Flow credits: 7, 10, 12 or 15 per take for 4, 6, 8 or 10 seconds.
- n8n with core nodes only (Form, HTTP Request, Code, Wait, Switch, If), no community nodes. Tested on self-hosted n8n 2.41.

## Customization
- On the start form: 1 to 5 products, optional intro and closing clips, vertical 9:16 or horizontal 16:9, and 1 to 4 takes per clip.
- The Settings node holds the details-page defaults, the image model and the captcha attempts per request.
- The clip prompt is in the Clip requests node, and every other step calls a documented useapi.net endpoint you can change.

## Additional info
Full walkthrough with screenshots and example ads: https://useapi.net/docs/articles/google-flow-n8n-ugc-ads

Images, voices, the character, the 1080p upscale and the final join are free. Only the Omni 1.1 Flash clips spend Flow credits, and the scene page shows the cost before anything is paid.

Disclosure: this template is published by useapi.net, the third-party API service it calls.

## 🔗 Nodes Used

HTTP Request, Webhook, n8n Form Trigger, Convert to File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
