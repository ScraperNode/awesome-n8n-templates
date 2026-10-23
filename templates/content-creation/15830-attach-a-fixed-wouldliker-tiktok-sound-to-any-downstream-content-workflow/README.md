# 🎬 Attach a fixed Wouldliker TikTok sound to any downstream content workflow

> ⚡ **8 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

  This workflow adds one fixed Wouldliker TikTok sound to any downstream posting
  or content workflow.

  1. A webhook receives an optional `sound_slug`.
  2. The workflow defaults to `vlog` when no sound is provided.
  3. It fetches the official sound profile from `GET /api/sounds/{slug}`.
  4. The final node returns a flat object with TikTok sound URL, music ID, page
  URL, saturation state, and boundary copy.

  Use this when another system already chooses, renders, uploads, or posts the
  video and only needs the official Wouldliker sound fields.

  ## Set up steps

  Setup takes about 3 minutes.

  1. Import the template.
  2. Execute the workflow once to enable the test webhook.
  3. Send a POST request with `sound_slug`, or omit it to use `vlog`.
  4. Connect the final output to your own uploader, scheduler, browser
  automation, CMS, or content queue.

  Valid slugs: `vlog`, `product-reveal`, `core`, `presentation`, `affirmation`,
  `hala-madrid`, `barcelona`.

  No credentials or API keys are required.

  ## Boundaries

  This workflow prepares sound metadata only.

  - It does not auto-post to TikTok.
  - It does not download or redistribute audio.
  - It does not guarantee views.
  - A downstream publisher must support attaching the returned
  `tiktok_sound_url` or `tiktok_music_id` for official TikTok sound usage.
  - If the publisher only uploads an MP4, official sound usage may not be
  counted by TikTok.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
