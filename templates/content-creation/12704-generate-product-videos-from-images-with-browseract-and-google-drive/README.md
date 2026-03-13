# 🎬 Generate product videos from images with BrowserAct and Google Drive

> ⚡ **29 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

This workflow uses BrowserAct to run an AI-powered browser automation that collects structured product data, including image URLs and related metadata.

The workflow then:
- Parses the BrowserAct output into individual product items
- Iterates through each product entry
- Downloads the product image and converts it into Base64 format
- Sends the image together with a predefined prompt to an AI video generation API
- Polls the generation status until the video is ready
- Downloads the generated short video file
- Uploads both the original product image and the generated video to Google Drive

Each product is processed independently, making the workflow suitable for batch-based and scalable automation scenarios.

## Set up steps

- Connect your BrowserAct account to enable the browser-based data extraction workflow
- Connect a Google Drive account where source images and generated videos will be stored
- Review the input parameters provided by the BrowserAct node, such as target URL, search keyword, or data limit
- Adjust the product processing limit or batch size if you want to control execution time
- Run the workflow manually once to verify the output before using it in regular automation

Additional explanations and configuration details are provided as sticky notes directly inside the workflow.


Workflow Guidance and Showcase
https://www.youtube.com/watch?v=XS5vyh-bdz0

## 🔗 Nodes Used

HTTP Request, Google Drive, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
