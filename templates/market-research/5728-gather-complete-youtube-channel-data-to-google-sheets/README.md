# 📊 Gather complete YouTube channel data to Google Sheets

> ⚡ **1,094 views** · 📊 [Market Research & Insights](../)

## Description

### This N8N template demonstrates how to use our tool to collect key information from any YouTube channel - including title, description, custom URL, stats (views, subscribers, videos), creation date, country, keywords, thumbnails, and channel ID. Everything is fetched and saved directly in a linked Google Sheet.

Use cases are many: Whether you're part of an MCN or YouTube channel network, a digital marketing agency, an influencer analyst, or a growth-focused YouTube consultant, this tool helps you instantly access detailed channel data for scouting, benchmarking, and strategic planning. It's perfect for competitive research, brand vetting, or building your next performance dashboard.

## How It Works
- The workflow starts when you manually click **Test Workflow** or **Execute Workflow** in N8N.
- It reads through the list of **full channel URLs or custom channel URLs** from the **Channel URLs** tab in a connected Google Sheet. Only the URLs marked with the **Ready** status will be processed.
- The tool loops through each row and prepares the necessary data for the YouTube API call later.
- A **Switch** node detects the URL type of each input (whether it's a full or custom channel URL) and routes it accordingly.
- Based on the input type, the appropriate YouTube API endpoint is triggered to fetch channel metrics.
- It checks whether the API call is successful before continuing:
   - If successful, the fetched data is written back to the connected Google Sheet in the same row and the row's status is updated to **Finished**. 
   - If it fails, the row's status is updated to **Error**.

## How To Use
- Download the workflow package.
- Import the workflow package into your N8N interface.
- Duplicate the [**YouTube - Get Channel Information** Google Sheet template](https://docs.google.com/spreadsheets/d/1easnNMrm8ovxhlZQwPUge6UbPnUVFKBeaQY5EmmG1gM/edit?gid=426418282#gid=426418282) into your Google Sheets account.
- Set up **Google Cloud Console** credentials in the following nodes in N8N, ensuring enabled access and suitable rights to Google Sheets and YouTube services: 
     + For Google Sheets access, ensure each node is properly connected to the correct tab in your connected Google Sheet template: 
      Node **Google Sheets - Get Channel URLs** → connected to Tab **Channel URLs**; 
      Node **Google Sheets - Update Data** → connected to Tab **Channel URLs**;
      Node **Google Sheets - Update Data - Error** → connected to Tab **Channel URLs**.
    + For YouTube access, set up a GET method to connect to YouTube API in the following nodes:
      Node **HTTP Request - Get Comments For Video URLs 1**;  
      Node **HTTP Request - Get Comments For Video URLs 2**.
- In your connected Google Sheet, enter the full or custom channel URLs that you want to crawl and set the rows' status to **Ready**.
- Run the workflow by clicking **Execute Workflow** or **Test Workflow** in N8N.
- View the results in your Google Sheet: Successful fetches will update channel data in the same row in **Channel URLs** tab and the row's status is updated to **Finished**; otherwise, the row's status will be changed to **Error**.

## Requirements
- Basic setup in Google Cloud Console (OAuth or API Key method enabled) with enabled access to YouTube and Google Sheets.

## How To Customize
- By default, the workflow is manually triggered in N8N. However, you can automate the process by adding a Google Sheets trigger that monitors new entries in your **YouTube – Get Channel Information** template and starts the workflow automatically.

## Need Help?
Join our community on different platforms for support, inspiration and tips from others.

Website: https://www.agentcircle.ai/
Etsy: https://www.etsy.com/shop/AgentCircle
Gumroad: http://agentcircle.gumroad.com/
Discord Global: https://discord.gg/d8SkCzKwnP
FB Page Global: https://www.facebook.com/agentcircle/
FB Group Global: https://www.facebook.com/groups/aiagentcircle/
X: https://x.com/agent_circle
YouTube: https://www.youtube.com/@agentcircle
LinkedIn: https://www.linkedin.com/company/agentcircle

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
