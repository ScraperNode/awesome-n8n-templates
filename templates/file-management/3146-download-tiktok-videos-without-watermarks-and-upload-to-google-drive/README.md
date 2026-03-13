# 📁 Download TikTok videos without watermarks and upload to Google Drive

> ⚡ **23,772 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for?
Content creators, social media managers, digital marketers, and researchers who need to **download** original **TikTok videos without watermarks** for analysis, repurposing, or archiving purposes.

## What problem does this workflow solve?
Downloading TikTok videos without watermarks typically requires using questionable third-party websites that may have limitations, ads, or privacy concerns. This workflow provides a clean, automated solution that can be integrated into your own systems and processes.

## What this workflow does
This workflow automates the process of downloading TikTok videos without watermarks in three simple steps:

1. **Fetch the TikTok video page** by providing the video URL
2. **Extract the raw video URL** from the page's HTML data
3. **Download the original video file** without watermark
4. **(Optional) Upload to Google Drive** with public sharing link generation

The workflow uses web scraping techniques to extract the original video source directly from TikTok's own servers, maintaining the highest possible quality without any added watermarks or branding.

## Setup (Est. time: 5-10 minutes)
Before getting started, you'll need:
- [n8n installation](https://n8n.partnerlinks.io/n8nTTVideoGenTemplate)
- The URL of a TikTok you want to download
- (Optional) Google Drive API enabled in Google Cloud Console with OAuth Client ID and Client Secret credentials if you want to use the upload feature

## How to customize this workflow to your needs
- Replace the example TikTok URL with your desired video links
- Modify the file naming convention for downloaded videos
- Integrate with other nodes to process videos after downloading
- Create a webhook to trigger the workflow from external applications
- Set up a schedule to regularly download videos from specific accounts

This workflow can be extended to support various use cases like trending content analysis, competitor research, creating compilation videos, or building a content library for inspiration. It provides a foundation that can be customized to fit into larger automated workflows for content creation and social media management.

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
