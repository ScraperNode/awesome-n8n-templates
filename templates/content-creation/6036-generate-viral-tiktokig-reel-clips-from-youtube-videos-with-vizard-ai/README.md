# 🎬 Generate viral TikTok/IG reel clips from YouTube videos with Vizard AI

> ⚡ **4,802 views** · 🎬 [Content Creation & Video](../)

## Description

## Who's it for
Content creators, social media managers, and marketing teams who want to automatically extract the most engaging clips from long-form YouTube videos and identify content with high viral potential.

## What it does
This workflow analyzes any YouTube video using Vizard AI's clipping technology and automatically generates up to 8 short clips with viral score ratings. It then filters for the highest-scoring clips (9/10 or above) and posts them to a designated Slack channel for team review and distribution.

## How it works
1. **Video submission**: Enter a YouTube URL through a user-friendly form
2. **AI analysis**: Submits the video to Vizard AI for automated clipping and viral score analysis
3. **Smart polling**: Waits for processing completion and retrieves results
4. **Quality filtering**: Only surfaces clips with viral scores of 9/10 or higher
5. **Team notification**: Posts results to Slack with clip titles, scores, and download links

## Requirements
- Vizard AI API credentials (sign up at vizard.ai)
- Slack workspace with OAuth app configured

## How to set up
1. **Configure Vizard AI credentials**: Add your Vizard AI API key to the HTTP Request nodes
2. **Set up Slack integration**: Configure the Slack OAuth2 credentials and select your target channel
3. **Customize filtering**: Adjust the viral score threshold in the filter node (currently set to 9/10)
4. **Test the workflow**: Submit a test YouTube URL to ensure everything works properly

## How to customize the workflow
- **Adjust clip quantity**: Modify the `maxClipNumber` parameter (currently 8) in the initial API request
- **Change viral score threshold**: Update the filter condition to match your quality standards
- **Extend with automation**: Connect to social media posting tools or caption generation workflows for full automation
- **Add scheduling**: Integrate with webhook triggers, scheduled triggers, or RSS feeds for batch processing videos

## 🔗 Nodes Used

HTTP Request, Slack, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
