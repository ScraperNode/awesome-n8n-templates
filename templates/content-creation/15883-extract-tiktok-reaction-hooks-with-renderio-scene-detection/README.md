# 🎬 Extract TikTok reaction hooks with RenderIO scene detection

> ⚡ **42 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Works on both n8n Cloud and self-hosted instances.** This template uses the `n8n-nodes-renderio` community node, which is installable on n8n Cloud and self-hosted setups.

## Who's it for

UGC creators, performance marketers, and AI avatar producers who want to harvest the reaction shot from a TikTok and reuse it as the opening hook of new content. The extracted clip is designed to feed straight into Kling motion control or any AI avatar pipeline to mass-produce on-brand UGC reactions, without manually scrubbing through videos to find the cut point.

## What it does

You paste a TikTok URL into a form. The workflow downloads the video, runs FFmpeg scene detection through [RenderIO](https://renderio.dev/) to find where the opening reaction shot ends and the product or app demo begins, then trims the source at that exact cut point. You get back a clean MP4 of just the reaction hook (typically the first 1 to 6 seconds), ready to drop into your avatar workflow. All video processing runs on cloud-based FFmpeg via RenderIO, so no local rendering is needed.

## How it works

1. **On TikTok URL Submission** is a form trigger that accepts a TikTok URL from the user.
2. **Download & Detect Scenes** uses RenderIO to download the video and run an FFmpeg scene detection pass (`select='gt(scene,0.3)'`) that writes timestamps of every detected cut to a `scenes.txt` file.
3. **Wait 5 Seconds for Detection** pauses to let the RenderIO job complete, then **Verify Scene Detection Status** checks the job state. **If Scenes Detected** branches based on whether the result is ready, with **Wait 10 Seconds for Detect Retry** handling retries.
4. **Extract Initial Scene Cut** fetches the `scenes.txt` file, parses all `pts_time` timestamps with a regex, and picks the first cut that falls in the 1 to 6 second window. If the first cut is too early it uses the next valid one; if no cut is found it falls back to 6 seconds.
5. **Execute Visual Hook Split** sends a POST to the RenderIO API with an FFmpeg command that trims the source from 0 to the detected hook end time, re-encoding with libx264 veryfast and AAC audio.
6. **Wait 5 Seconds for Split** and **Verify Split Execution Status** poll until the trim job finishes, with **Wait 10 Seconds for Split Retry** handling retries.
7. **Show Hook Download Link** displays a completion form with the hook end time, the detection reason, all detected cut timestamps, and a direct download link to the trimmed MP4.

## Requirements

* An n8n Cloud or self-hosted instance
* The `n8n-nodes-renderio` community node installed via **Settings &gt; Community Nodes**
* A free RenderIO account and API key from [renderio.dev](https://renderio.dev/)
* A public TikTok URL where the first 1 to 6 seconds is a reaction shot and the rest is the demo or payoff

## How to set up

1. Install the `n8n-nodes-renderio` community node from **Settings &gt; Community Nodes**.
2. Create a RenderIO API credential in n8n using your key from [renderio.dev](https://renderio.dev/).
3. Import the workflow.
4. Open the **On TikTok URL Submission** node and copy the production form URL, or use the test URL for trial runs.
5. Activate the workflow.
6. Open the form, paste a TikTok URL where the first 1 to 6 seconds is a clear reaction (smile, gasp, cry, eyes wide) and the rest is product or app footage, then submit.

## How to customize the workflow

* Change the scene sensitivity by editing the `gt(scene,0.3)` threshold in the **Download & Detect Scenes** FFmpeg command. Lower values like `0.2` catch softer cuts, higher values like `0.4` only catch hard cuts.
* Adjust the hook window by editing `minS` and `maxS` in the **Extract Initial Scene Cut** code node (defaults are 1 and 6 seconds).
* Tweak the output encoding in the **Execute Visual Hook Split** FFmpeg command, for example change `-crf 20` for quality or swap `libx264` for `libx265`.
* Add a Google Drive or S3 upload node after the split step to archive every extracted hook.
* Chain a Kling, HeyGen, or other avatar API call directly after **Show Hook Download Link** to automatically produce the avatar reaction variant.
* Increase the wait durations if you process longer videos that take more time on RenderIO.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
