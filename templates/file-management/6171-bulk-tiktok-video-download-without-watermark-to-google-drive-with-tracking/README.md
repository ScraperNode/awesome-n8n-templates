# 📁 Bulk TikTok video download without watermark to Google Drive with tracking

> ⚡ **3,147 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

### 🎥 Bulk TikTok Video Download Without Watermark to Google Drive

This workflow automates the process of downloading TikTok videos and uploading them to Google Drive. It reads TikTok URLs from a Google Sheet, downloads the video using the [TikTok Video Downloader](https://rapidapi.com/skdeveloper/api/tiktok-video-downloader23) — a tool for **downloading TikTok videos without watermark in HD quality** — uploads it to Drive, makes it public, and updates the same sheet with the Drive link.

---

## 🔧 What It Does

1. ✅ **Manually triggered** when ready to run.
2. 📄 **Reads TikTok URLs** from a Google Sheet.
3. 🔁 **Loops through each URL** one at a time.
4. 🌐 **Fetches video download links using the [TikTok Video Downloader](https://rapidapi.com/skdeveloper/api/tiktok-video-downloader23)** — a reliable **TikTok video downloader without watermark**.
5. ⬇️ **Downloads each video** in **high-definition (HD)** format using the direct media link.
6. ☁️ **Uploads the video to Google Drive**.
7. 🔓 **Sets public sharing permission** for the video.
8. ✏️ **Updates the original Google Sheet** with the public Drive URL.

---
## 📋 Google Sheet Example

Make sure your sheet has at least these columns:

| url                                 | drive_link (to be auto-filled) |
|-------------------------------------|--------------------------------|
| https://www.tiktok.com/@user1...    | *(blank initially)*            |
| https://www.tiktok.com/@user2...    | *(blank initially)*            |

&gt; The workflow reads from `url` and fills in `drive_link` after upload.

---

## 🧩 Nodes Used

| Node Name                     | Type              | Purpose                                               |
|------------------------------|-------------------|-------------------------------------------------------|
| When clicking ‘Execute’      | Manual Trigger     | Starts the workflow manually                          |
| Get Data From Google Sheets  | Google Sheets      | Fetches rows (TikTok URLs)                            |
| Loop Over Items              | Split In Batches   | Iterates over each row                                |
| Call TikTok Downloader       | HTTP Request       | Gets video download link from [TikTok Video Downloader](https://rapidapi.com/skdeveloper/api/tiktok-video-downloader23) |
| Wait                         | Wait               | Optional delay to prevent overload                    |
| Download File                | HTTP Request       | Downloads HD video using media link                   |
| Upload File In Google Drive  | Google Drive       | Uploads the video to Google Drive                     |
| Set Public Permission        | Google Drive       | Makes the uploaded file publicly accessible           |
| Update Row In Google Sheet   | Google Sheets      | Adds Drive link to the same row                       |
| Sleep                        | Wait               | Small delay between each iteration                    |

---

## 📝 Requirements

- ✅ Google API credentials (Service Account) with access to:
  - Google Sheets
  - Google Drive
- 🔐 RapidAPI Key for [TikTok Video Downloader](https://rapidapi.com/skdeveloper/api/tiktok-video-downloader23) – a **TikTok video downloader without watermark (HD supported)**
- 🗂 A Google Sheet with a `url` column containing TikTok video URLs


---

## 🧩 Challenges Solved

| ❗ Challenge | ✅ Solution |
|-------------|-------------|
| TikTok video URLs often have watermarks and low quality | Used [TikTok Video Downloader](https://rapidapi.com/skdeveloper/api/tiktok-video-downloader23) API for **HD + no watermark** download links |
| No easy way to bulk download and organize TikToks | Automated fetching, downloading, and uploading using **n8n + Google Drive** |
| Manual video saving and re-uploading to Drive is time-consuming | Eliminated all manual steps with a fully automated workflow |
| Tracking which videos are already processed | Automatically updates the **Google Sheet** row with the final Drive link |
| Drive files are private by default | Automatically sets **public sharing permission** on uploaded videos |
| Risk of API rate limits or throttling | Added **Wait nodes** and batch processing to avoid overload |

---

## 🎁 Benefits

| 🌟 Benefit | 💬 Description |
|------------|----------------|
| 🚀 Saves Time | Fully automates a previously manual workflow |
| 🎥 High Quality Content | Videos downloaded are **HD + watermark-free** — ready for reuse or archives |
| 🔁 Reusable Setup | Can process **unlimited TikTok URLs** via the Google Sheet |
| 📊 Organized Output | Keeps track of source URL and uploaded Drive link in a single sheet |
| 🔐 Secure but Shareable | Drive links are auto-shared **publicly** while remaining under your control |
| 🔄 Scalable | Can be run daily, weekly, or triggered by new rows — completely scalable |
| 💸 Cost-Effective | No need for paid tools or manual freelancers — runs on n8n + free APIs |

---


## 💡 Use Cases

- Content curation from TikTok
- Archiving user-submitted TikToks
- Automating social-to-cloud workflows
- Bulk migration of video content
- Saving **TikTok videos in HD without watermark** for sharing or archiving

---

## 📌 Tips

- Replace manual trigger with Cron for full automation.
- Use the [TikTok Video Downloader](https://rapidapi.com/skdeveloper/api/tiktok-video-downloader23) responsibly — check API limits.
- Store metadata (e.g., uploader, hashtags) in additional Google Sheet columns.
- This tool helps ensure you're always downloading **high-quality TikTok videos without watermark**.

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
