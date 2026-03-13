# 📱 Automate Instagram posts with Google Drive, AI captions & Facebook API

> ⚡ **9,354 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This template streamlines your Instagram content posting workflow by connecting Google Drive for image storage, using OpenAI for AI-generated captions, and leveraging Facebook Graph API for automated publishing.

**Pre-requisites**
Before setting up this workflow, ensure you have:

1. A Google account with access to Google Drive

2. An OpenAI API key for AI caption generation

3. A Facebook Developer account with Instagram Graph API access

4. An Instagram Business or Creator account connected to a Facebook Page

5. n8n.io account with workflow access

**Setup Instructions**
1. Configure Data Source
Create a Google Sheet with the following columns:

 Name: Filename of your image in Google Drive

Caption: Optional custom caption (leave empty for AI-generated captions)

URL: your Video Reel or Image in Google Drive

2. Connect Google Drive
Add your Google Drive credentials in the "Google Drive" node

Specify the folder path where your Instagram image/Video are stored

Configure the node to retrieve image files based on filenames from your Google Sheet

3. Set Up OpenAI Integration
Add your OpenAI API key to the credentials

Configure the OpenAI node to generate engaging captions based on image content

Adjust temperature and model parameters for desired creativity level

4. Configure Facebook Graph API
Connect your Facebook account with Instagram access

Set up the Facebook Graph API node to post to your Instagram Business/Creator account

Ensure proper image formatting (1:1, 4:5, or 16:9 aspect ratios supported by Instagram)

5. Workflow Automation Setup
Configure the scheduler node to run at your preferred frequency

Set up error handling to notify you of any posting failures

Add conditional nodes to use either custom or AI-generated captions

Execution Instructions
After completing all connections, test the workflow with a single image

Monitor the execution in the n8n dashboard to ensure proper functioning

View the "Executions" tab to track successful posts and troubleshoot any errors

Adjust posting frequency and scheduling as needed

This template saves hours of manual Instagram posting work while maintaining an authentic presence. Perfect for social media managers, content creators, and businesses looking to maintain consistent Instagram activity without the daily manual effort.

The workflow handles image retrieval, caption generation or customization, proper Instagram API formatting, scheduled posting, and execution tracking - all in one automated solution.

## 🔗 Nodes Used

Google Sheets, Google Drive, Facebook Graph API, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
