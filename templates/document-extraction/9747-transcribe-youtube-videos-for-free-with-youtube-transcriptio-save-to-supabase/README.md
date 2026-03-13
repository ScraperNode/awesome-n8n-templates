# 🔬 Transcribe Youtube videos for free with youtube-transcript.io & save to Supabase

> ⚡ **1,232 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## **Transcribe New YouTube Videos and Save to Supabase**

### **Who's It For?**

This workflow is for **content creators**, **marketers**, **researchers**, and anyone who needs to quickly get text transcripts from YouTube videos. If you analyze video content, repurpose it for blogs or social media, or want to make videos searchable, this template will save you hours of manual work.


### **What It Does**

This template automatically monitors multiple YouTube channels for new videos. When a new video is published, it extracts the video ID, retrieves the full transcript using the `youtube-transcript.io` API, and saves the structured data—including the title, author, URL, and full transcript—into a **Supabase** table.

It intelligently filters out YouTube Shorts by default and includes error handling to ensure that only successful transcriptions are processed.

### **Requirements**

* A **Supabase** account with a table ready to receive the video data.
* An API key from [youtube-transcript.io](https://www.youtube-transcript.io/) (offers a free tier).
* The **Channel ID** for each YouTube channel you want to track. You can find this using a free online tool like TunePocket's Channel ID Finder.

### **How to Set Up**

1.  **Add Channel IDs:**
    * In the **"Channels To Track"** node, replace the example YouTube Channel IDs with your own. The workflow uses these IDs to create RSS links and find new videos.
2.  **Configure API Credentials:**
    * Find the **"youtube-captions"** HTTP Request node.
    * In the credentials tab, create a new "Header Auth" credential. Name it `youtube-transcript-io` and paste your API key into the "Value" field. The "Name" field should be `x-api-key`.
3.  **Connect Your Supabase Account:**
    * Navigate to the **"Add to Content Queue Table"** node.
    * Create new credentials for your Supabase account using your Project URL and API key.
    * Once connected, select your target table and map the incoming fields (`title`, `source_url`, `content_snippet`, etc.) to the correct columns in your table.
4.  **Set Your Schedule (Optional):**
    * The workflow starts with a manual trigger. To run it automatically, replace the **"When clicking ‘Execute workflow’"** node with a **Schedule** node and set your desired interval (e.g., once a day).
5.  **Activate the Workflow:**
    * Save your changes and toggle the workflow to **Active** in the top right corner.

### **How to Customize**

* **Transcribe YouTube Shorts:** To include Shorts in your workflow, select the **"Does url exist?"** If node and delete the second condition that checks for `youtube.com/shorts`.
* **Change Your Database:** Don't use Supabase? Simply replace the **"Add to Content Queue Table"** node with another database or spreadsheet node, such as **Google Sheets**, **Airtable**, or n8n's own **Table**.

## 🔗 Nodes Used

HTTP Request, RSS Read, Stop and Error, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
