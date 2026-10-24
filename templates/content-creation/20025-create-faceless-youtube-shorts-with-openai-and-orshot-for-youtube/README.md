# 🎬 Create faceless YouTube Shorts with OpenAI and Orshot for YouTube

> ⚡ **148 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily at 9am to generate a faceless YouTube Short: OpenAI writes a 15-second script and metadata, Orshot creates a lip-synced AI presenter clip and renders it into a 9:16 template with captions, then the finished MP4 is uploaded to YouTube.

## How it works
1. Runs every day at 9am on a schedule.
2. Sets the niche, channel handle, Orshot template ID, presenter photo URL, voice ID, and YouTube upload settings.
3. Uses OpenAI to generate a Short package (topic, hook, 35–45 word script, stat, title, and description) as structured JSON.
4. Sends the script and presenter photo to Orshot to generate a synced 9:16 talking-presenter clip.
5. Renders the final Short in Orshot using your template, injecting the clip and text fields and generating subtitles from the clip audio.
6. Downloads the rendered MP4 and uploads it to YouTube as a Short with the generated title and description and your chosen privacy/region settings.

## Setup
1. Add an OpenAI credential and ensure the model selected in the OpenAI step is available for your account.
2. Create an Orshot account, generate an Orshot API key, add it as an Orshot credential in n8n, and set your Orshot template ID and presenter photo URL in the configuration values.
3. Add a YouTube (Google) OAuth credential with YouTube Data API access, then set your desired privacy status and region code in the configuration values.
4. Full guide with the template to copy: https://orshot.com/blog/how-to-make-faceless-videos-with-n8n

## Requirements
- Orshot account on a paid plan (AI video is paid-only); the Orshot node is verified, so it runs on n8n Cloud
- OpenAI API key (OpenAI credentials in n8n)
- YouTube channel with YouTube Data API access via Google credentials in n8n

## Customization
- Swap the schedule for a Google Sheets trigger to render one Short per row
- Change the photo and voice in Configure for a different presenter
- Set privacy to public once you trust the output

## Additional info
Full guide: [Automate faceless videos with n8n](https://orshot.com/blog/how-to-make-faceless-videos-with-n8n)
More Video API controls: [Orshot video API](https://orshot.com/solutions/video-generation-api)

## 🔗 Nodes Used

HTTP Request, YouTube, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
