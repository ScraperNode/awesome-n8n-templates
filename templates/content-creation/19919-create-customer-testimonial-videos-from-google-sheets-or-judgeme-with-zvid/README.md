# 🎬 Create customer testimonial videos from Google Sheets or Judge.me with Zvid

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Turn eligible customer reviews from Google Sheets or Judge.me into vertical testimonial videos with Zvid. Keep the original rating, shorten the review with rules or optional AI, render the video, and write its URL back to the source row in Google Sheets mode.

## How it works
1. Runs on a manual trigger or on a daily schedule at 9am.
2. Reads the next pending review from Google Sheets, or fetches reviews from Judge.me, and selects one that meets the configured minimum rating.
3. Cleans and normalizes the review text and checks the configured music URL, disabling music if the file is unreachable or too large.
4. Trims the review to a video-friendly quote using rules or, if enabled, calls OpenRouter to select an in-budget quote from the original text.
5. Builds a three-scene Zvid project JSON (hook, quote, CTA) and validates it with Zvid to catch payload issues and estimate credits.
6. If dryRun is enabled, saves a draft to the Zvid editor and outputs an editor link; otherwise submits a Zvid render job, polls until completion, and returns the final video URL.
7. In Google Sheets mode, updates the source row with Status and VideoUrl so the review is not processed again.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before configuring Zvid credentials. A workspace owner/admin may need to install it. Create a key at https://app.zvid.io/api-keys and select your Zvid API credential with Base URL https://api.zvid.io on every Zvid node.
2. Connect both Google Sheets nodes to the same spreadsheet and tab. Use the exact headers Reviewer, Rating, ReviewText, Product, ImageUrl, Status, VideoUrl. Reviewer, Rating and ReviewText are required. Use ratings from 1 to 5 and leave Status and VideoUrl empty.
3. Set brandName, storeUrl and minRating in Config. The default dryRun=false renders and spends Zvid credits. Set dryRun=true for an editor draft and quote, then test manually before enabling the daily schedule.
4. If you switch the source to Judge.me, fill in judgemeShop and judgemeToken in Config.
5. If you enable AI trimming (useLlm=true), add an OpenRouter API credential and choose the model in Config.

## Requirements
- A self-hosted n8n instance with the Zvid community package installed, a Zvid account with render credits, and Google Sheets credentials. Judge.me access and OpenRouter credentials are optional for those branches.

## Customization
- Change the brand, fonts, colors, minimum rating, maximum quote length and music in Config. Review the final quote against the original before publishing.

## Additional info
Open Watch video → Binary → data → View to preview a completed video. Keep the supplied HTTP Request v2 preview node. A completed row is skipped on later runs; clear Status only when you intend to render it again. Setup guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/review-testimonial-video.md

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
