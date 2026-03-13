# 📊 Track top YouTube videos by view count with Google Sheets

> ⚡ **410 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Workflow Setup Guide

This workflow collects the most-viewed videos from specified YouTube channels and saves the data to a Google Sheet. Follow these steps to set it up:

## 1. Credentials Setup

*   **Google Sheets:** You need to have a Google Sheets credential configured in your n8n instance. If you don't have one, go to the 'Credentials' section in n8n and add a new credential for Google Sheets.
*   **YouTube API Key:** You need a YouTube Data API v3 key.
    1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
    2.  Create a new project or select an existing one.
    3.  Go to 'APIs & Services' &gt; 'Library' and enable the **YouTube Data API v3**.
    4.  Go to 'APIs & Services' &gt; 'Credentials', click 'Create Credentials', and choose 'API key'.
    5.  Copy the generated API key.

## 2. Google Sheet Setup

You will need one Google Sheet with two separate sheets (tabs) inside it.

### Input Sheet
Use [Template](https://docs.google.com/spreadsheets/d/1EwALToSWKp4EyzPCx4q3rhMHMaJ3MMfwXQoZmC2BWZk/edit?usp=sharing)
This sheet provides the list of YouTube channels to process.
*   **Required Columns:** Create a sheet with the following two columns:
    *   `ChannelID`: The ID of the YouTube channel (e.g., `T7M3PpjBZzw`).
    *   `video_num_to_get`: The number of top videos to retrieve for that channel (e.g., `5`).

### Output Sheet
This sheet is where the results will be saved.
*   **Required Columns:** The workflow will automatically append data to the following columns. You can create them beforehand or let the workflow do it.
    *   `channelName`
    *   `title`
    *   `videoId`
    *   `videoLink`

## 3. Node Configuration

*   **Read Channel Info from Sheet:**
    *   Select your Google Sheets credential.
    *   Enter your **Spreadsheet ID**.
    *   Enter the **name of your Input Sheet**.
*   **Fetch Most-Viewed Videos via YouTube API:**
    *   Replace `YOUR_YOUTUBE_API_KEY` with the API key you generated in Step 1.
*   **Append Video Details to Sheet:**
    *   Select your Google Sheets credential.
    *   Enter your **Spreadsheet ID** (the same one as before).
    *   Enter the **name of your Output Sheet**.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
