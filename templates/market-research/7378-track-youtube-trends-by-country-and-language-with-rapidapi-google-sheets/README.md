# 📊 Track YouTube trends by country and language with RapidAPI & Google Sheets

> ⚡ **1,160 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 📈 YouTube Trend Finder Workflow using n8n & RapidAPI

**Description:**  
Easily discover trending YouTube videos by country and language using this automated n8n workflow. The flow leverages the [**YouTube Trend Finder API**](https://rapidapi.com/PrineshPatel/api/youtube-trend-finder) and logs insights to Google Sheets — ideal for content creators, marketers, and researchers.

---

## 🔗 Node-by-Node Explanation

| Node Name                    | Type               | Description                                                                 |
|-----------------------------|--------------------|-----------------------------------------------------------------------------|
| **1. On form submission**    | `Form Trigger`     | Captures user input for `country` and `language` through a web form.        |
| **2. Trend Finder API Request** | `HTTP Request`     | Sends a request to [**YouTube Trend Finder API**](https://rapidapi.com/PrineshPatel/api/youtube-trend-finder) with the form data. |
| **3. Re format output**      | `Code`             | Extracts and reshapes API response data like `title`, `link`, and `tags`.  |
| **4. Google Sheets**         | `Google Sheets`    | Appends the trending video data into a structured spreadsheet.             |

---

## 🎯 Use Cases

- 🔍 **Content Research:** Find top-trending videos in any region or language for idea inspiration.
- 📈 **Marketing Intelligence:** Track video trends to tailor your video marketing strategy.
- 📰 **Trend Monitoring:** Journalists and analysts can quickly surface viral video topics.

---

## ✅ Benefits of this Workflow

- **No Coding Required:** Easy-to-use form interface for non-technical users.
- **Real-Time Trends:** Instantly access trending YouTube content with the [**YouTube Trend Finder API**](https://rapidapi.com/PrineshPatel/api/youtube-trend-finder).
- **Automated Logging:** Stores data directly in Google Sheets for future analysis or sharing.
- **Customizable:** Easily modify for more inputs like `video category`, `max results`, or add filters.

---

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
