# 📱 Create and post real estate listing videos with Airtable, OpenAI, and Orshot

> ⚡ **64 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow watches listing status changes in Airtable, renders a branded vertical real estate video in Orshot from the listing and agent details, publishes the MP4 to Instagram and TikTok, and writes the video URL and post time back to the Airtable record.

## How it works
1. Triggers when the Airtable “Status Updated” field changes for a listing record.
2. Extracts and formats listing details, features, photos, and agent information from the Airtable record to match the Orshot template fields.
3. Routes the record based on the listing Status, sending “Just Listed” to a listing reel render and “Sold” to a just-sold render.
4. Calls Orshot to render the selected studio template and waits for the MP4 output URL.
5. Publishes the rendered video to the selected Instagram and TikTok accounts in Orshot with a status-based caption.
6. Updates the original Airtable record with the published video URL and the post time.

## Setup
1. Create Airtable personal access token credentials in n8n, then select your base and table in the Airtable trigger and update steps.
2. In Airtable, add a “Status Updated” Last modified time field that watches the Status field, and add “Video URL” and “Posted At” fields to store outputs.
3. Add Orshot credentials in n8n, copy the [listing reel template](https://orshot.com/templates/2460-real-estate-listing-reel-916-5-scenes-status-price-and-stats-features-open-house-agent-card) and the Just Sold template into your Orshot workspace, and pick each one in its Orshot render step.
4. Connect your Instagram Business and TikTok accounts in Orshot under Social accounts, then pick them in the publish step.
5. Ensure your Airtable field names (Address, City, Price, Beds, Baths, Square Feet, Acres, Features, Photos, and agent fields) match the mappings used in the workflow or update the field references accordingly.

## Requirements
- Orshot account on a plan with video renders and social publishing
- Airtable base with one record per listing, including a Photos attachment field
- Instagram Business and TikTok accounts connected in Orshot

## Customization
- Add Switch outputs for Open House or Price Improved videos
- Swap the Airtable trigger for Google Sheets if your listings live in a sheet
- Turn on Save as Draft in the publish step to review each reel before it goes live

## Additional info
Full walkthrough with a live preview of the template: [Real estate listing videos with Orshot](https://orshot.com/workflows/real-estate-listing-videos)

## 🔗 Nodes Used

Airtable, Gmail, Airtable Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
