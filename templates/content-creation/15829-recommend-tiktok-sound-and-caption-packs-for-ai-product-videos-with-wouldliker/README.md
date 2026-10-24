# 🎬 Recommend TikTok sound and caption packs for AI product videos with Wouldliker

> ⚡ **44 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

  This workflow turns a product or short-form clip description into a
  publishable Wouldliker sound pack.

  1. A webhook receives the clip or product description.
  2. The workflow normalizes the input into Wouldliker API fields.
  3. `POST /api/recommend` returns the recommended Wouldliker sound, official
  TikTok sound URL, TikTok music ID, public proof, and sound direction.
  4. `POST /api/brief` returns a short video brief, caption variants, hashtag
  pack, and boundary copy.
  5. The final node shapes a flat object for downstream tools.

  Use it inside AI-video, ecommerce video, UGC, content ops, product feed, or
  short-form publishing workflows.

  ## Set up steps

  Setup takes about 5 minutes.

  1. Import the template.
  2. Execute the workflow once to enable the test webhook.
  3. Send a POST request to the webhook with `description`, `platform`,
  `content_type`, `language`, and `is_aigc`.
  4. Connect the final output to your own publisher, CMS, Slack, Notion,
  Airtable, Shopify, or content queue.

  No credentials or API keys are required.

  ## Boundaries

  Wouldliker returns recommendation data only.

  - It does not auto-post to TikTok.
  - It does not download or redistribute audio.
  - It does not guarantee views.
  - The publisher attaches the returned `tiktok_sound_url` or `tiktok_music_id`
  in their own upload step.
  - If `is_aigc` is true, the publisher is responsible for platform disclosure
  and labeling.

  Public proof is evidence of fit and momentum

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
