# 🎬 Create reviewed process videos with OpenAI TTS and schedule via Metricool

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a scene manifest and zipped images from an authenticated n8n form, validates stage order and face-review metadata, renders a narrated process video via a companion renderer service, and optionally schedules the approved 9:16 MP4 to Instagram, YouTube, and TikTok using the Metricool API.

## How it works
1. Receives an operator submission via an authenticated n8n Form (or runs a manual synthetic demo) containing a scene-manifest JSON and an image ZIP.
2. Validates the manifest for required stages, chronological scene order, safe filenames, text length limits, and explicit reviewed face-box entries for every image.
3. Uploads the manifest and assets to the external renderer service to generate masked preview images, then pauses for the operator to approve face coverage.
4. Generates one narration audio file per scene using OpenAI Text-to-Speech and uploads each clip to the renderer service.
5. Starts the reviewed render and polls the renderer service until the job completes or fails.
6. Prompts the operator to review the encoded video and QA frames via a renderer-provided review URL, then records final approval.
7. If Metricool scheduling is enabled, collects and validates a UTC publish time plus caption/title, releases a public MP4 URL from the renderer, schedules a three-network post in Metricool, and records the scheduler ID and provider statuses.
8. On a 15-minute schedule, fetches recorded scheduled posts and queries Metricool for provider publication status updates, then writes the results back to the renderer service records.

## Setup
1. Run the included companion renderer service (downloaded from the workflow’s “Export setup files” output) with FFmpeg and required fonts/dependencies, and set the renderer base URL and HTTP header auth in the workflow.
2. Create an OpenAI API key and configure it as an HTTP header credential for the OpenAI Text-to-Speech request.
3. If using Metricool scheduling, obtain Metricool API access and set up an HTTP header credential (X-Mc-Auth), then fill in your Metricool userId/blogId and verify Instagram/YouTube/TikTok account connections and network options.
4. Ensure your renderer can generate a stable public HTTPS MP4 URL for Metricool to ingest, and keep portrait exports at 1080×1920 and under 175 seconds to pass the workflow checks.

## Requirements
- Self-hosted companion renderer (complete source and README included in Export setup files), Python 3.10+, FFmpeg/ffprobe with libx264, NumPy, Pillow, a licensed Japanese font, and OpenAI API access. Optional scheduling requires Metricool Advanced or Custom API access, three connected accounts and a stable public HTTPS media origin.

## Customization
- Adjust stage labels, scene text, narration voice and portrait/landscape output. Keep every required stage and end with completion. Configure face boxes for every image, using [] only after checking a face-free image. Enable Metricool only after verifying account-specific network settings.

## Additional info
This template accepts an operator-reviewed manifest; automatic photo classification is not included. Face coverage and the final encoded video require human review. Scheduling is disabled by default. Local validation used synthetic photos/audio and mock provider APIs; live OpenAI generation, Metricool authentication and actual social publication were not tested. A scheduled receipt is not proof of publication. Durable claims prevent blind scheduling retries; reconcile uncertain responses before retrying. Companion source and setup instructions are embedded in the JSON and downloadable from Export setup files. No credentials, personal photographs or account IDs are included.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
