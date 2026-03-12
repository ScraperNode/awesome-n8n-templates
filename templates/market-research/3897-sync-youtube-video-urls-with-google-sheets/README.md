# 📊 Sync Youtube video URLs with Google Sheets

> ⚡ **665 views** · 📊 [Market Research & Insights](../)

## Description

## Sync Youtube Videos with Google Sheets
**(Part 1 of Youtube comments sentiment analyze automation along with detailed dashboard)**

This workflow is the **first part of a multi-part automation system** designed to perform large-scale YouTube comment sentiment analysis alongwith detailed dashboard. It solves the problem of manually tracking new videos across multiple YouTube channels by automatically fetching and organizing video URLs in a Google Sheet, setting the stage for deeper analysis in Part 2.

### What It Does
1. **Reads Channel IDs** from `Sheet3` of a connected Google Sheet.
2. **Fetches the latest videos** from each Channel ID using the **YouTube Data API**.
3. **Extracts video URLs and metadata** (like title and publish date).
4. **Appends the video data** to `Sheet2` of the same Google Sheet — this sheet is later used by Part 2 for further processing.

### Part of a Multi-Step System
This is **Part 1** of a 2-workflow system:
- **Part 1 (this workflow)** populates a sheet with the latest videos from a list of channels.
- **Part 2** reads the video URLs from `Sheet2`, fetches comments for each video, analyzes their sentiment using **OpenAI**, and stores structured results in `Sheet1`.

👉 Continue to [Part 2 – YouTube Comment Sentiment Analyzer with Google Sheets & OpenAI](https://n8n.io/workflows/3855-youtube-comment-sentiment-analyzer-with-google-sheets-and-openai/)

---

### ✅ Use Cases
- Monitor and organize new videos from a list of YouTube channels
- Automate content pipelines for social media teams and analysts
- Build scalable datasets for comment and sentiment analysis
- Perfect for creators, agencies, or data analysts managing multiple YouTube accounts

---

### 🔧 Apps Used
- **Google Sheets** – To read and write channel/video data
- **YouTube** – To fetch video data from public channels

---

### 💡 Why Use This?
Manually checking YouTube channels for new content is time-consuming and error-prone. This automation ensures your data stays current and structured — enabling consistent tracking and deeper analysis (especially when paired with Part 2). It brings speed, scale, and automation to your YouTube content operations.

---

## How to Customize

### 1. Modify Trigger Settings
- Change the **Google Sheet (Sheet 3)** channel ID entry to track other channels.
- Use a **time-based trigger** to fetch new videos regularly, ensuring your data stays up to date.

### 2. Adjust Output Fields
- Fetch **additional details** from YouTube, such as view count, description, or thumbnails.
- Add **custom columns** in **Sheet 2** for organizing videos by different criteria, such as:
  - "Published Date"
  - "Video Type"
  - "View Count"
  - "Video Description"

### 3. Extend with Integrations
- Integrate with other workflows like **YouTube Comment Sentiment Analysis** (Part 2) for a deeper dive into content analysis.
- Use **filters** to fetch videos by certain tags, keywords, or publish dates.

### 4. Adjust Sheet Structure
- Modify the structure of **Sheet 2** to categorize videos based on criteria like:
  - Channel
  - Video Status (e.g., "Published," "Scheduled")
  - Video Type (e.g., "Tutorial," "Review")

### 5. Schedule Regular Fetching
- Set a **schedule trigger** to fetch videos at regular intervals (e.g., daily or weekly), ensuring new content is automatically added to your sheet.

### 6. Customize Google Sheet Layout
- Change the layout of **Sheet 2** to better fit your needs. For example, you can add additional columns for

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
