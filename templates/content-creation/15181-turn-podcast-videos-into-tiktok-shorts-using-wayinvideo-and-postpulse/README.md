# 🎬 Turn podcast videos into TikTok shorts using WayinVideo and PostPulse

> ⚡ **156 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**How it Works**

This workflow takes podcast video URLs from a form, clips them with WayinVideo's submit clipping task endpoint, retrieves each generated clip with the get clip endpoint and schedules each clip in PostPulse.

**Setup Steps**
- **Form Trigger:** Triggers a workflow whenever a podcast URL is submitted.
- **HTTP node:** 3rd party API call to WayinVideo's submit clipping task endpoint to clip podcast video into smaller clips.
- **Wait node:** Pause workflow for 5 minutes whilst clips from WayinVideo are being generated.
- **2nd HTTP node:** 3rd party API call to WayinVideo's get clip endpoint to retrieve the results of the generated clips.
- **Split Out Node:** Split results into individual bundles.
- **3rd HTTP node:** Download each generated clip.
- **Upload Media:** Upload downloaded clips to PostPulse for attachment ID.
- **Schedule Clip:** Schedule clips in PostPulse.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
