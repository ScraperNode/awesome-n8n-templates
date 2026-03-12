# 🔬 Scheduled YouTube transcription with de-duplication using Transcript.io and Supabase

> ⚡ **170 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## **Scheduled YouTube Transcription with Duplicate Prevention**

### **Who's It For?**

This template is for advanced users, content teams, and data analysts who need a robust, automated system for capturing YouTube transcripts. It’s ideal for those who monitor multiple channels and want to ensure they only process and save each video's transcript once.


### **What It Does**

This is an advanced, "set-it-and-forget-it" workflow that runs on a daily schedule to monitor YouTube channels for new content. It enhances the basic transcription process by connecting to your **Supabase** database to prevent duplicate entries.

The workflow fetches all recent videos from the channels you track, filters out any that are too old, and then checks your database to see if a video's transcript has already been saved. Only brand-new videos are sent for transcription via the `youtube-transcript.io` API, with the final data (title, URL, full transcript, author) being saved back to your Supabase table.

### **Requirements**

* A **Supabase** account with a table to store video data. This table must have a column for the `source_url` to enable duplicate checking.
* An API key from [youtube-transcript.io](https://www.youtube-transcript.io/) (offers a free tier).
* The **Channel ID** for each YouTube channel you want to track.

### **How to Set Up**

1.  **Set Your Time Filter:**
    * In the **"Max Days"** node, set the number of days you want to look back for new videos (e.g., `7` for the last week).
2.  **Add Channel IDs:**
    * In the **"Channels To Track"** node, replace the example YouTube Channel IDs with the ones you want to monitor.
3.  **Configure API Credentials:**
    * Select the **"Get Transcript from API"** node.
    * In the credentials tab, create a new "Header Auth" credential. Name it `youtube-transcript-io` and paste your API key into the "Value" field. The "Name" field should be `x-api-key`.
4.  **Connect Your Supabase Account:**
    * This workflow uses Supabase in two places: **"Check if URL Is In Database"** and **"Add to Content Queue Table"**.
    * You must configure your Supabase credentials in **both** nodes.
    * In each node, select your target table and ensure the columns are mapped correctly.
5.  **Adjust the Schedule:**
    * The **"Schedule Trigger"** node is set to run once a day. Click it to adjust the time and frequency to your needs.
6.  **Activate the Workflow:**
    * Save your changes and toggle the workflow to **Active**.

## 🔗 Nodes Used

HTTP Request, RSS Read, Stop and Error, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
