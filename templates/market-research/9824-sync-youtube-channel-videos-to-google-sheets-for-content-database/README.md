# 📊 Sync YouTube channel videos to Google Sheets for content database

> ⚡ **116 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 📊 YouTube Personal Channel Videos → Google Sheets

Automatically sync your YouTube videos (title, description, tags, publish date, captions, etc.) into Google Sheets — perfect for creators and marketers who want a clean content database for analysis or reporting.

---

## 🚀 What this workflow does

- ✅ Connects to your **personal YouTube channel** via Google OAuth  
- 🔁 Fetches **all uploaded videos** automatically (with pagination)  
- 🏷 Extracts **metadata:** title, description, tags, privacy status, upload status, thumbnail, etc.  
- 🧾 Retrieves **captions (SRT format)** if available  
- 📈 Writes or updates data in your **Google Sheets** document  
- ⚙️ Can be run manually or scheduled via Cron  

---

## 🧩 Nodes used

- **Manual Trigger** — to start manually or connect with Cron  
- **HTTP Request (YouTube API v3)** — fetches channel, uploads, and captions  
- **Code Nodes** — manage pagination and collect IDs  
- **SplitOut** — iterates through video lists  
- **Google Sheets (appendOrUpdate)** — stores data neatly  
- **If Conditions** — control data flow and prevent empty responses  

---

## ⚙️ Setup guide

1. **Connect your Google Account**  
   - Used for both YouTube API and Google Sheets.  
   - Make sure the credentials are set up in *Google OAuth2 API* and *Google Sheets OAuth2 API* nodes.

2. **Create a Google Sheet**  
   - Add a tab named `Videos`.  
   - Add these columns:  
     ```
     youtube_id | title | description | tags | privacyStatus | uploadStatus | thumbnail | captions
     ```
   - You can also include `categoryId`, `maxres`, or `published` if you’d like.

3. **Replace the sample Sheet ID**  
   - In each Google Sheets node, open the “Spreadsheet” field and choose your own document.  
   - Make sure the sheet name matches the tab name (`Videos`).

4. **Run the workflow**  
   - Execute it manually first to pull your latest uploads.  
   - Optionally add a **Cron Trigger** node for daily sync (e.g., once per day).

5. **Check your Sheet**  
   - Your data should appear instantly — with each video’s metadata and captions (if available).

---

## 🧠 Notes & tips

- ⚙️ The flow loops through *all pages* of your upload playlist automatically — no manual pagination needed.  
- 🕒 The workflow uses YouTube’s *“contentDetails.relatedPlaylists.uploads”* to ensure you only fetch your own uploads.  
- 💡 Captions fetch may fail for private videos — use “Continue on Fail” if you want the rest to continue.  
- 🧮 Ideal for dashboards, reporting sheets, SEO analysis, or automation triggers.  
- 💾 To improve speed, you can disable the “Captions” branch if you only need metadata.

---

## 👥 Ideal for

- 🎬 YouTube creators maintaining a video database  
- 📊 Marketing teams tracking SEO performance  
- 🧠 Digital professionals building analytics dashboards  
- ⚙️ Automation experts using YouTube data in other workflows  

---

## 💛 Credits

Created by **[Grigory Frolov](https://ozwebexpert.com)**  
YouTube: [@gregfrolovpersonal](https://www.youtube.com/@gregfrolovpersonal)  
More workflows and guides → [ozwebexpert.com/n8n](https://ozwebexpert.com/ai/)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
