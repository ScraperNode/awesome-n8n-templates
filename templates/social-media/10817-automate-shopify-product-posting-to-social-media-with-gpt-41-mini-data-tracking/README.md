# 📱 Automate Shopify Product Posting to Social Media with GPT-4.1-Mini & Data Tracking

> ⚡ **564 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
This workflow listens for new products in Shopify and transforms the product data into polished social media content. It generates captions and hashtags using an AI model, then posts the product to Instagram and Facebook using the Facebook Graph API. It logs every post to Google Sheets and sends a confirmation message to Discord. The flow ensures consistent publishing across all platforms with automated formatting and tracking.

## Step-by-step

- **Trigger on Shopify product creation**  
  - **Shopify Trigger** – Activates when a new product is added to the store.

- **Prepare product data**  
  - **parse product data** – Extracts product name, price, description, URL, image, and timestamp.

- **Generate caption and hashtags**  
  - **Generate caption and hashtags** – Uses an AI model to craft a caption and produce 10 relevant hashtags.

- **Configure posting parameters**  
  - **Set Configuration** – Stores access tokens, platform IDs, caption text, hashtags, and image URL.

- **Publish to Instagram**  
  - **Create Instagram Media Container** – Sends the image and caption to create a media container.  
  - **Wait for Processing** – Waits for the container to finish processing.  
  - **Publish Instagram Media** – Publishes the processed container to the Instagram feed.

- **Publish to Facebook**  
  - **Download Image for Facebook** – Downloads the product image from Shopify.  
  - **Post to Facebook Page** – Uploads the image with the caption and hashtags to the Facebook Page.

- **Merge publishing results**  
  - **Merge** – Combines responses from Instagram and Facebook for unified logging.

- **Log post to Google Sheets**  
  - **Log Product Post Data** – Appends product info, caption, and hashtags to a spreadsheet.

- **Notify via Discord**  
  - **Notify Discord About Post** – Sends a message summarizing the published product.

## Why use this?
- Ensures every new Shopify product is promoted instantly across major social platforms.  
- Eliminates manual posting and caption creation with reliable automation.  
- Maintains centralized logging for auditing, tracking, or analytics.  
- Provides real-time team notifications to confirm successful posts.  
- Reduces errors and keeps brand messaging consistent across channels.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Discord, Shopify Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
