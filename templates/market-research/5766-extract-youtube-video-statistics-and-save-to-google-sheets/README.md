# 📊 Extract YouTube video statistics and save to Google Sheets

> ⚡ **573 views** · 📊 [Market Research & Insights](../)

## Description

### This N8N template makes it easy to extract key YouTube video data - including title, view count, like count, comment count, and many more - and save it directly into a connected Google Sheet.

Use cases are many: Whether you're **YouTubers**, **content strategists**, **growth marketers**, and **automation engineers**, this tool gives you fast, structured access to video-level insights in seconds.

## How It Works
- The workflow begins when you click **Execute Workflow** or **Test Workflow** manually in N8N.
- It reads the list of video URLs in the connected Google Sheet. Only the URLs marked with the **Ready** status will be processed.
- The tool loops through each video and prepares the necessary data for the YouTube API call later.
- For each available URL, the tool extracts the video ID and sends a request to the YouTube API to fetch key metrics.
- The response is checked:
     - **If successful**: the video’s statistics are written back to the corresponding row in the Google Sheet and the row's status is marked as **Finished**.
     - **If unsuccessful**: the row's status is updated to **Error** for later review.

## How To Use
- Download the workflow package.
- Import the workflow package into your N8N interface.
- Duplicate the [**YouTube - Get Video Statistics** Google Sheet template](https://docs.google.com/spreadsheets/d/1I9gyb27WiRHz--g-xi-QH1W3WppZJdSfY6L32-DyUw0/edit?gid=426418282#gid=426418282) into your Google Sheets account.
- Set up **Google Cloud Console** credentials in the following nodes in N8N, ensuring enabled access and suitable rights to Google Sheets and YouTube services:
    + For Google Sheets access, ensure each node is properly connected to the correct tab in your connected Google Sheet template:
       Node **Google Sheets - Get Video URLs** → connected to Tab **Video URLs**;
       Node **Google Sheets - Update Data** → connected to Tab **Video URLs**;
       Node **Google Sheets - Update Data - Error** → connected to Tab **Video URLs**.
    + For YouTube access, set up a GET method to connect to YouTube API in the following node:
      Node **HTTP - Find Video Data**.
- In your connected Google Sheet, enter the video URLs that you want to crawl and set the rows' status to **Ready**.
- Run the workflow by clicking **Execute Workflow** or **Test Workflow** in N8N.
- View the results in your connected Google Sheet: Successful fetches will update the rows' status in **Column A** in the **Video URLs** tab to **Finished** and the video metrics will populate. If the call fails, the rows' status in **Column A** in the tab will be marked as **Error**.

## Requirements
- Basic setup in Google Cloud Console (OAuth or API Key method enabled) with enabled access to YouTube and Google Sheets.

## How To Customize
- By default, the workflow is manually triggered in N8N. However, you can automate the process by adding **a Google Sheets trigger** that monitors new entries automatically.
- If you want to fetch additional video fields or analytics (like tags, category ID, etc.), you can expand the **HTTP - Find Video Data** node to include those.

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
