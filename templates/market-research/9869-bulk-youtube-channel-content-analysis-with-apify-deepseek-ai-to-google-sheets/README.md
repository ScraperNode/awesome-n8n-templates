# 📊 Bulk YouTube channel content analysis with Apify & DeepSeek AI to Google Sheets

> ⚡ **267 views** · 📊 [Market Research & Insights](../)

## Description

#### 🎓📺 Watching top YouTubers is now a mainstream way to learn, but watching dozens—or even hundreds—of videos isn’t realistic. This workflow gives learners a fast way to grasp an entire creator’s catalog at a glance.

#### 📄🔗 Demo Google Sheet: [click me](https://docs.google.com/spreadsheets/d/1UmIi1jvRIMGm6PnHOkoC8SHPS93yD0buZ81sQjFlCi4/edit?usp=sharing) 
---

## 🧠🔍 YouTube Channel Research & Summarization Workflow

### **👥 Who’s it for**
* 📚 Learners and educators who want a fast overview of a creator’s entire catalog.
* 🧩 Research, SEO, and content ops teams building an intelligence layer on top of YouTube channels.

### **⚙️ How it works**
* 📝 Collects parameters via a **Form Trigger**.
* 🕷️ Launches an **Apify YouTube Scraper**, polls for completion, and fetches the final dataset.
* 💾 Saves the raw JSON to **Google Drive**, reloads it, and processes records in **batches**.
* 🗣️ Auto-selects **English** subtitles when available, extracts core metadata, and feeds transcript + metadata to an **AI Summarization Agent**.
* 📧 Sends a **Gmail** completion notification when done.

### **🛠️ How to set up**

1. **🔑 Connect credentials (once)**
   * 🗂️ Google Drive
   * 📊 Google Sheets (OAuth enabled)
   * ✉️ Gmail
   * 🧠 DeepSeek API (or alternative LLM); **Apify API** (YouTube scraper actor)

2. **📝 Configure the form**
   * 🔗 `Youtuber_MainPage_URL` (e.g., `https://www.youtube.com/@n8n-io`)
   * 🔢 `Total_number_video` (tip: use the channel’s current total to crawl all)
   * 🏷️ `Storing_Name` (used for the Drive filename & the Sheet tab)
   * 🔑 `Apify_API` (Apify provides $5 free credit per month, which can crawl ~1,000 YouTube videos → [https://console.apify.com/](https://console.apify.com/))
   * 📧 `Email`

3. **📁 Point Sheets & Drive**
   * 🔗 Create a Google Sheet and link it to all Google Sheets–related nodes.
   * 💽 Select a Drive folder to save raw CSV backups (optional).

### **🎛️ How to customize the workflow**
* **🈯 Subtitle logic:**
  Extend the language selector `Select_Subtitle_Language` to choose English, Mandarin, or another language.
* **🔔 Notifications:**
  Customize the Gmail subject/body, or add Slack/Teams alerts on success/failure with basic run stats.


📬 Need help? Contact me &lt;owenlzyxg@gmail.com&gt;

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, AI Agent, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
