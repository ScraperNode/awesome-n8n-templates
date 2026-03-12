# 📊 Copy viral reels with Gemini AI

> ⚡ **13,252 views** · 📊 [Market Research & Insights](../)

## Description

### Video Guide

I prepared a detailed guide that shows the whole process of building an AI tool to analyze Instagram Reels using n8n.

[![Youtube Thumbnail](https://res.cloudinary.com/de9jgixzm/image/upload/v1740390927/Youtube%20Thumbs/Video_21_-_Philipp_Instagram_Blur.png)](https://youtu.be/SQPPM0KLsrM)

[Youtube Link](https://youtu.be/SQPPM0KLsrM)

### Who is this for?
This workflow is ideal for social media analysts, digital marketers, and content creators who want to leverage data-driven insights from their Instagram Reels. It's particularly useful for those looking to automate the analysis of video performance to inform strategy and content creation.

### What problem does this workflow solve?
Analyzing video performance on Instagram can be tedious and time-consuming, requiring multiple steps and data extraction. This workflow automates the process of fetching, analyzing, and recording insights from Instagram Reels, making it simpler for users to track engagement metrics without manual intervention.

### What this workflow does
This workflow integrates several services to analyze Instagram Reels, allowing users to:
- Automatically fetch recent Reels from specified creators.
- Analyze the most-watched videos for insights.
- Store and manage data in Airtable for easy access and reporting.

1. **Initial Trigger**: The process begins with a manual trigger that can later be modified for scheduled automation.
2. **Data Retrieval**: It connects to Airtable to fetch a list of creators and their respective Instagram Reels.
3. **Video Analysis**: It handles the fetching, downloading, and uploading of videos for analysis using an external service, simplifying performance tracking through a structured query process.
4. **Record Management**: It saves relevant metrics and insights into Airtable, ensuring that users can access and organize their video analytics effectively.

### Setup

1. **Create accounts**:
   - Set up Airtable, Edify, n8n, and Gemini accounts.

2. **Prepare triggers and modules**:
   - Replace credentials in each node accordingly.

3. **Configure data flow**:
   - Ensure modules are set to fetch and analyze the correct data fields as outlined in the guide.

4. **Test the workflow**:
   - Run the scenario manually to confirm that data is fetched and analyzed correctly.

## 🔗 Nodes Used

Airtable, HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
