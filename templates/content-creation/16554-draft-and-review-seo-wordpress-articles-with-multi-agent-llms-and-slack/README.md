# 🎬 Draft and review SEO WordPress articles with multi-agent LLMs and Slack

> ⚡ **61 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow accepts an article brief via webhook, routes it through a three-stage LLM pipeline to research, draft, and review HTML content, optionally generates a featured image with Google Imagen, then creates a WordPress draft post with tags and Rank Math SEO metadata and sends an optional Slack notification.

## How it works
1. Receives a POST webhook request with a required `prompt` (and optional category, tone, and style overrides) and optionally validates a Bearer token.
2. A researcher agent calls the LLM sub-workflow to produce a structured JSON outline, including title, H2 sections, tags, focus keyword, and image subject.
3. Optionally starts the generation of a 16:9 featured image in parallel using Imagen 4 and the outline's image subject. The default option for whether this is enabled (set in CONFIG), can be overridden per run in the request prompt.
4. Optionally fetches recent published WordPress posts and selects up to five relevant URLs to use as internal links.
5. A writer agent drafts the full HTML article body based on the outline (and internal links), tone guide, and style guide from CONFIG.
6. A reviewer agent edits the draft for voice, accuracy, and structure, then returns the revised HTML and SEO metadata as a combined response.
7. The workflow upserts WordPress tags, uploads the featured image if one was generated, uploads it to WordPress Media and sets the image alt text.
8. It then creates a new WordPress post in draft status with the content, excerpt, category, author, featured media, and tag IDs, and optionally sets Rank Math SEO fields via the REST API.
9. A response is sent to the webhook with the draft URL (or returns 400/401/500 on errors). Optionally a Slack notification is sent with the post edit link, focus keyword, token usage, and estimated LLM cost.
10. If any LLM stage fails, the error is caught, a Slack alert is optionally sent to the configured channel, and a 500 response is returned to the webhook.

## Setup
1. Import and activate the referenced LLM routing sub-workflow [Route AI prompts to Anthropic, Google Gemini, Mistral, or OpenAI](https://n8n.io/workflows/16330).
2. Open the CALL RESEARCHER, CALL WRITER, and CALL REVIEWER nodes and update to point to your imported copy of the sub-workflow.
3. Open the CONFIG node and set WORDPRESS_URL, AUTHOR_ID, and DEFAULT_CATEGORY_ID for your site. 
4. Set AGENT_RESEARCHER_PROVIDER, AGENT_WRITER_PROVIDER, and AGENT_REVIEWER_PROVIDER in CONFIG to your preferred LLM providers (anthropic, google, mistral, or openai).
5. Set SLACK_CHANNEL to your channel ID for notifications, or leave blank to disable.
6. if needed set `WEBHOOK_SECRET` in CONFIG and configure your client to send `Authorization: Bearer <secret>`.
7. Link credentials: Google AI (PaLM) API to GENERATE IMAGE; WordPress API to FETCH RECENT POSTS, UPLOAD IMAGE TO WORDPRESS, SET IMAGE ALT TEXT, UPSERT TAG, CREATE WORDPRESS POST, and SET RANK MATH SEO; 
8. If you enable image generation, add a Google Gemini (PaLM) / Generative Language API credential with Imagen access and confirm the Imagen model name in `IMAGEN_MODEL`.
9. If set channel ID in CONFIG and want Slack notifications (including failure alerts), add a Slack OAuth2 credential to SLACK NOTIFICATION and SLACK PIPELINE ERROR.
10. If you want Rank Math SEO fields set, install the Rank Math plugin on your WordPress site and expose `rank_math_*` meta fields to the WordPress REST API (see the sticky in the workflow for an example using a mu-plugin)
11. Activate the workflow and POST to /webhook/article-publisher with a JSON body containing a prompt field.

## Requirements
- n8n version 1.70 or later
- Anthropic, Google Gemini, Mistral, or OpenAI account (any combination; at least one provider required)
- Google AI (PaLM) API credential for Imagen 4 image generation
- WordPress site with Application Password authentication enabled
- Rank Math SEO plugin with REST API mu-plugin (optional — only needed for SEO field population; see canvas sticky note for plugin code)
- Slack workspace with OAuth2 app (optional — only needed for notifications)

## Customization
- Set ENABLE_IMAGE_GENERATION to false in CONFIG to skip Imagen 4 and post without a featured image.
- Set ENABLE_INTERNAL_LINKS to false in CONFIG to skip fetching recent posts for internal link suggestions.
- Change IMAGE_STYLE_PROMPT in CONFIG to match your site's visual style for featured image generation.
- Replace TONE_GUIDE in CONFIG with your own writing persona to change the voice across all three agents.
- Replace STYLE_GUIDE in CONFIG with your own formatting rules to control article structure and length.
- Set AGENT_RESEARCHER_MODEL, AGENT_WRITER_MODEL, and AGENT_REVIEWER_MODEL independently to use different models per stage, or set all three to the same model for single-model mode.
- Pass category_id, tone_guide, or style_guide in the webhook request body to override CONFIG values on a per-request basis.

## Additional info
### Background
For more information on how the system works and how to use this WordPress publishing automation workflow, see [Refactoring the WordPress Publishing Pipeline: From Single Prompt to Three-Agent Newsroom](https://www.triple8labs.com/nexus/wordpress-publishing-automation-workflow/)


### Who's it for

Content teams and solo bloggers who want to automate first-draft production for WordPress without giving up editorial control — the workflow produces a draft for review, not a live post. Assumes basic familiarity with n8n and a working WordPress installation.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
