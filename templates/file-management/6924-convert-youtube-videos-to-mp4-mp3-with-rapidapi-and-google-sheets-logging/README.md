# 📁 Convert YouTube videos to MP4 & MP3 with RapidAPI and Google Sheets logging

> ⚡ **4,570 views** · 📁 [File Management](../)

## Description

### 🎬 YouTube to MP4 Downloader
This n8n workflow allows users to submit a YouTube video URL, automatically fetches multiple MP4 and MP3 download links using **[YouTube Video Downloader Fast API](https://rapidapi.com/skdeveloper/api/youtube-video-downloader-fast)**. It logs all links into Google Sheets for easy access and tracking. With **YouTube Video Downloader Fast API**, users can securely download videos in different resolutions without manual tools.

---

## 🛠️ Node-by-Node Explanation  

### 1️⃣ **On Form Submission**  
- Displays a form to collect the YouTube video URL.  
- Triggers the workflow when a URL is submitted for processing.  

### 2️⃣ **HTTP Request**  
- Sends the provided URL to [**YouTube Video Downloader Fast API**](https://rapidapi.com/skdeveloper/api/youtube-video-downloader-fast) via RapidAPI.  
- Retrieves downloadable links for multiple resolutions (360p, 720p, 1080p) and MP3 format.  
- Ensures the download process is fast and secure with [**YouTube Video Downloader Fast API**](https://rapidapi.com/skdeveloper/api/youtube-video-downloader-fast).  

### 3️⃣ **If Node**  
- Checks if the API response from [**YouTube Video Downloader Fast API**](https://rapidapi.com/skdeveloper/api/youtube-video-downloader-fast) is successful.  
- Proceeds only if valid downloadable links are available.  

### 4️⃣ **Google Sheets**  
- Saves the original YouTube URL and all MP4/MP3 download links in Google Sheets.  
- Provides a permanent log for future access and tracking.  

---

## 💡 Use Cases  
- Content managers can bulk-download YouTube videos in different formats.  
- Educators/trainers can easily organize video links for offline teaching.  
- Marketing agencies can prepare high-quality video assets for campaigns.  
- Developers can customize the workflow to integrate with other storage solutions.  

---

## 🚀 Benefits  
- Fully automated video downloading process with [**YouTube Video Downloader Fast API**](https://rapidapi.com/skdeveloper/api/youtube-video-downloader-fast).  
- Multiple resolutions and MP3 download options.  
- Centralized, structured download logs in Google Sheets.  
- Saves time, secure, and customizable for different needs.  

---

## ✅ Problem Solved  
- Eliminates the need for unsafe third-party downloaders.  
- Provides fast and secure YouTube downloads using [**YouTube Video Downloader Fast API**](https://rapidapi.com/skdeveloper/api/youtube-video-downloader-fast).  
- Offers multiple video/audio formats without manual extraction.  
- Ensures easy tracking and future accessibility of downloaded content.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
