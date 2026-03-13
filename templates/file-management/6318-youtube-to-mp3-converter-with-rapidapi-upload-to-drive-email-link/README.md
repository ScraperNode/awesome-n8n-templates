# 📁 YouTube to MP3 converter with RapidAPI - upload to drive & email link

> ⚡ **3,883 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### 📥 YouTube to MP3 Converter Workflow – Auto Upload to Google Drive & Email Link with RapidAPI

This n8n workflow allows users to convert any YouTube video to MP3 using the [YouTube To MP3 Fast API on RapidAPI](https://rapidapi.com/skdeveloper/api/youtube-to-mp3-fast). It handles the entire process end-to-end — from form input to automatic delivery via email with cloud storage.

---

## 🔁 How It Works

1. **📝 User Form Input**  
   Users submit a YouTube URL and their email through a simple form.

2. **🎬 MP3 Conversion**  
   The video URL is sent to the [YouTube To MP3 Fast API on RapidAPI](https://rapidapi.com/skdeveloper/api/youtube-to-mp3-fast) to process and convert into MP3 format.

3. **⏳ Wait for Processing**  
   Introduces a short delay to ensure the file is ready for download.

4. **📥 File Download**  
   The converted MP3 file is downloaded securely.

5. **☁️ Google Drive Upload**  
   The MP3 is uploaded to Google Drive for cloud-based access and storage.

6. **🔗 Share Permissions**  
   Permissions are updated to allow anyone with the link to access the MP3.

7. **📧 Email Notification**  
   The final download link is emailed to the user.

---

## ✅ Benefits

- **Completely Automated** – From input to email, everything runs without manual effort.
- **Cloud Storage Integration** – Files are saved to your Google Drive for easy management.
- **User-Friendly** – Simple interface for users to get their MP3 in just a few clicks.
- **Fast & Reliable Conversion** – Leveraging the [YouTube To MP3 Fast API on RapidAPI](https://rapidapi.com/skdeveloper/api/youtube-to-mp3-fast) ensures quick and accurate results.
- **Time-Saving** – No need for manual downloads, converters, or email composition.

---

## ❌ Problems This Workflow Solves

- ⛔ **Manual Download Hassles** – No need to use third-party websites or shady downloaders.
- ⛔ **Slow or Unreliable Conversions** – The workflow uses the robust [YouTube To MP3 Fast API on RapidAPI](https://rapidapi.com/skdeveloper/api/youtube-to-mp3-fast) for reliable performance.
- ⛔ **Missing Files or Lost Links** – Files are securely stored on Google Drive with shareable links.
- ⛔ **User Follow-up** – Automatically sends download links via email, saving you support effort.

---

## 🔧 Tech Stack

- 🧠 **n8n** – No-code automation engine
- 🌐 **[YouTube To MP3 Fast API on RapidAPI](https://rapidapi.com/skdeveloper/api/youtube-to-mp3-fast)** – Fast MP3 conversion service
- ☁️ **Google Drive** – Cloud storage and file sharing
- 📤 **SMTP** – Email delivery system

---

&gt; 🔗 **Built for creators, educators, and automation fans who need fast YouTube-to-MP3 conversion with effortless delivery.**

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
