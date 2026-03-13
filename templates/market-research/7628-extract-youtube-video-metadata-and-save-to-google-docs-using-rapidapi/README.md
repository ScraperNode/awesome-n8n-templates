# 📊 Extract YouTube Video Metadata and Save to Google Docs using RapidAPI

> ⚡ **276 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 📺 Automated YouTube Video Metadata Extraction Workflow

**Description:**
This workflow leverages the [**YouTube Metadata API**](https://rapidapi.com/PrineshPatel/api/youtube-metadata1) to automatically extract detailed video information from any YouTube URL. It uses [**n8n**](https://n8n.io) to automate the entire process and stores the metadata in a neatly formatted **Google Docs** document.

Perfect for content creators, marketers, and researchers who need quick, organized YouTube video insights at scale.

---

## ⚙️ Node-by-Node Explanation

### 1. ✅ On Form Submission

This node acts as the **trigger**. When a user submits a form containing a YouTube video URL, the workflow is activated.

* Input: YouTube Video URL
* Platform: `Webhook` or `n8n Form Trigger`

---

### 2. 🌐 YouTube Metadata API (HTTP Request)

This node sends the video URL to the [**YouTube Metadata API**](https://rapidapi.com/PrineshPatel/api/youtube-metadata1) via HTTP request.

* Action: `GET` request

* Headers:

  ```bash
  -H "X-RapidAPI-Key: YOUR_API_KEY"
  -H "X-RapidAPI-Host: youtube-metadata1.p.rapidapi.com"
  ```

* Endpoint Example:

  ```
  https://youtube-metadata1.p.rapidapi.com/video?url=YOUTUBE_VIDEO_URL
  ```

* Output: JSON with metadata like:

  * Title
  * Description
  * Views, Likes, Comments
  * Duration
  * Upload Date
  * Channel Info
  * Thumbnails

---

### 3. 🧠 Reformat Metadata (Code Node)

This node reformats the raw metadata into a clean, human-readable text block.

* Example Output Format:

  ```
  🎬 **Title:** How to Build Workflows with n8n  
  🧾 **Description:** This tutorial explains how to build...  
  👤 **Channel:** n8n Tutorials  
  📅 **Published On:** 2023-05-10  
  ⏱️ **Duration:** 10 minutes, 30 seconds  
  👁️ **Views:** 45,678  
  👍 **Likes:** 1,234  
  💬 **Comments:** 210  
  🔗 **URL:** https://youtube.com/watch?v=abc123
  ```

---

### 4. 📝 Append to Google Docs

This node connects to your Google Docs and appends the formatted metadata into a selected document.

* **Document Format Example:**

  ```markdown
  ## 📌 Video Entry – [Date]

  🎬 **Title:**  
  🧾 **Description:**  
  👤 **Channel:**  
  📅 **Published On:**  
  ⏱️ **Duration:**  
  👁️ **Views:**  
  👍 **Likes:**  
  💬 **Comments:**  
  🔗 **URL:**

  ---
  ```

---

## 📄 Use Cases

* **Content Creators**: Quickly analyze competitor content or inspirations.
* **Marketers**: Collect campaign video performance data.
* **Researchers**: Compile structured metadata across videos.
* **Social Media Managers**: Create content briefs effortlessly.

---

## ✅ Benefits

* 🚀 **Time-saving**: Automates manual video data extraction
* 📊 **Accurate**: Uses reliable, updated YouTube API
* 📁 **Organized**: Formats and stores data in Google Docs
* 🔁 **Scalable**: Handles unlimited YouTube URLs
* 🎯 **User-friendly**: Simple setup and clean output

---

## 🔑 How to Get Your API Key for YouTube Metadata API

1. Go to the [**YouTube Metadata API on RapidAPI**](https://rapidapi.com/PrineshPatel/api/youtube-metadata1).
2. Sign up or log in to your RapidAPI account.
3. Click **Subscribe to Test** and choose a pricing plan (free or paid).
4. Copy your **API Key** shown in the **"X-RapidAPI-Key"** section.
5. Use it in your HTTP request headers.

---

## 🧰 Google Docs Integration – Full Setup Instructions

### 🔐 Step 1: Enable Google Docs API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Navigate to **APIs & Services &gt; Library**.
4. Search for **Google Docs API** and click **Enable**.
5. Also enable **Google Drive API** (for document access).

---

### 🛠 Step 2: Create OAuth Credentials

1. Go to **APIs & Services &gt; Credentials**.
2. Click **Create Credentials &gt; OAuth Client ID**.
3. Select **Web Application** or **Desktop App**.
4. Add authorized redirect URIs if needed (e.g., for n8n OAuth).
5. Save your **Client ID** and **Client Secret**.

---

### 🔗 Step 3: Connect n8n to Google Docs

1. In n8n, go to **Credentials &gt; Google Docs API**.
2. Add new credentials using the Client ID and Secret from above.
3. Authenticate with your Google account and allow access.

---

### 📘 Step 4: Create and Format Your Google Document

1. Go to Google Docs and create a new document.
2. Name it (e.g., `YouTube Metadata Report`).
3. Optionally, add a title or table of contents.
4. Copy the **Document ID** from the URL:

   ```
   https://docs.google.com/document/d/DOCUMENT_ID/edit
   ```

---

### 🔄 Step 5: Use `Append Content to Document` Node in n8n

* Use the `Google Docs` node in n8n with:

  * Operation: `Append Content`
  * Document ID: Your copied Google Doc ID
  * Content: The formatted video summary string

---

## 🎨 Customization Options

* 💡 **Add Tags**: Insert hashtags or categories based on video topics.
* 📆 **Organize by Date**: Create headers for each day or week’s entries.
* 📸 **Embed Thumbnails**: Use `thumbnail_url` to embed preview images.
* 📊 **Spreadsheet Export**: Use Google Sheets instead of Docs if preferred.

---

## 🛠 Troubleshooting Tips

| Issue                          | Solution                                                            |
| ------------------------------ | ------------------------------------------------------------------- |
| ❌ **Auth Error (Google Docs)** | Ensure correct OAuth redirect URI and permissions.                  |
| ❌ **API Request Fails**        | Check API key and request structure; test on RapidAPI's playground. |
| 📄 **Doc Not Updating**        | Verify Document ID and sharing permissions.                         |
| 🧾 **Bad Formatting**          | Debug the code node output using logging or console in n8n.         |
| 🌐 **n8n Timeout**             | Consider using `Wait` or `Split In Batches` for large submissions.  |

---

## 🚀 Ready to Launch?

You can deploy this workflow in just minutes using **n8n**.

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

---

## 🔗 Nodes Used

HTTP Request, Google Docs, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
