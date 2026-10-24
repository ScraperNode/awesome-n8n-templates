# 🎬 Create reviewed X image posts from Hermes research with Claude, OpenAI and Buffer

> ⚡ **22 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns Hermes Agent research about X topics into editor-reviewed, original image posts by drafting text with Anthropic Claude, generating images with OpenAI, and scheduling approved posts through Buffer, with optional Discord notifications and a companion journal service for review links and state.

## How it works
1. Starts when an authenticated n8n Form submission provides a research topic (or you run the manual synthetic demo).
2. Queries a Hermes research server for recent X posts and X articles, then validates citations, dates, engagement thresholds, quotas, and duplicates to produce an eligible shortlist.
3. Stores the shortlisted candidates in a companion journal service and returns single-use review URLs for each candidate.
4. Optionally posts each candidate to a Discord channel with a button linking to its private review page.
5. When the journal calls back to the authenticated webhook with a generate or approve action, the workflow claims the action once and verifies the selected Buffer channel is connected to X.
6. For generation, it uses Anthropic Claude to draft original X post text and an image prompt, uses OpenAI Images to generate a matching PNG, and saves an immutable draft and image in the journal for final review.
7. For approval with a scheduled UTC time, it releases the approved image and creates a scheduled X post in Buffer, then records the Buffer receipt (or marks the scheduling result as unknown/failure for manual reconciliation).

## Setup
1. Download companion.zip from the “Export setup files” manual step, deploy the companion journal service, and configure its public HTTPS base URL and the authenticated n8n callback/webhook URLs.
2. Create and select credentials for the Hermes server (HTTP Header Auth), Anthropic (Claude) API, and OpenAI API for image generation.
3. Create and select a Buffer API credential, then set your Buffer organization ID and X channel ID so the workflow can verify the destination and schedule posts.
4. (Optional) Create and select a Discord Bot token credential and set the target Discord channel ID if you want review-link notifications.
5. Update the research and editorial settings (lookback window, min likes/reposts/score, per-kind limits, models, and editorial brief) before activating the form trigger and webhook.

## Requirements
- Self-hosted companion journal (complete source, README and license included in Export setup files), Python 3.11+, a research-only Hermes Agent API server with configured research tools, Anthropic Claude and OpenAI image API access, and a Buffer-connected X channel. Optional notifications require a Discord Bot. Live review links and image delivery require a stable HTTPS origin.

## Customization
- Adjust the editorial brief, research window, reported engagement thresholds, post/article quotas and supported model IDs. Configure Hermes with a research-only profile; a model name alone does not switch its profile. Discord notifications are optional. Retain source citations, immutable final-draft review, future UTC scheduling and durable action claims.

## Additional info
The companion source and setup instructions are embedded in the workflow JSON and downloadable from Export setup files. The manual demo is synthetic and makes no external calls. Local n8n validation used mock provider APIs; live Hermes research, Claude drafting, OpenAI image generation, Discord delivery and Buffer scheduling were not tested. Research engagement is Hermes-reported, not independently verified. A personal X API key is not required, but Buffer uses its platform integration. Private review links grant access; use a restricted Discord channel. Scheduling requires approval of the exact text and image. A Buffer reservation is not proof of X publication. Reconcile uncertain responses before retrying. Approved images remain publicly accessible until removed from the companion. No credentials, personal data or real account IDs are included.

## 🔗 Nodes Used

HTTP Request, Webhook, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
