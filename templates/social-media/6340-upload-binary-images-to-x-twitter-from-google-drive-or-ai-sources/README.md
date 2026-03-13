# 📱 Upload binary images to X (Twitter) from Google Drive or AI sources

> ⚡ **150 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow lets you post images to X (Twitter) by uploading binary image files obtained from any source, not just Google Drive. Whether you’re fetching images stored on Google Drive or working with AI image generation models that output images directly as binary files, you can integrate these binary files seamlessly into your n8n workflow. Simply download or receive the image as binary data, then pass it as the file parameter in the media upload node to X’s API. This flexible approach lets you automate posts with images generated on-demand by AI, pulled from cloud storage, or anywhere else you can access as binary data—giving you full control to design powerful, no-code social media automations that combine AI creativity with native X posting, all within n8n.

## How to Setup
1. Create Google Drive credentials (if you are using Google Drive for downloading binary files). If you are using any AI model, just connect your download file node before the "Upload Media" node.
2. Create OAuth 1 credentials by following the guide in the sticky notes. (Required: Consumer Key, Consumer Secret)
3. Create OAuth 2 credentials for the native X node within n8n. (Required: Client ID, Client Secret)

## Key Features
- Only native n8n nodes—no external code or scripts needed. 
- Fully no-code: Uses only native, prebuilt n8n nodes visualized in an easy workflow.
- Supports binary image files: Directly uploads any binary image data from Google Drive or AI generation nodes.
- OAuth2 and OAuth1 ready: Straightforward setup for secure authentication with Google Drive and X.

## 🔗 Nodes Used

HTTP Request, Google Drive, X (Formerly Twitter)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
