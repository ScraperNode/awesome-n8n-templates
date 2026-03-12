# 🔬 WordPress blog to Google Sheets sync (posts, categories, tags, media)

> ⚡ **397 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# WordPress Blog to Google Sheets Sync  
### Posts • Categories • Tags • Media

---

## 🧩 Overview
This n8n workflow automatically syncs your **WordPress website content** — including posts, categories, tags, and media — into **Google Sheets**.

It helps automate content reporting, SEO analysis, and data backups.  
The workflow can run **on schedule** or **on demand** via a webhook.

---

## 💡 Use cases
- Maintain a live database of blog posts in Google Sheets.  
- Create dashboards in Google Data Studio or Looker Studio.  
- Track new articles for newsletters or social media scheduling.  
- Backup all WordPress content and media outside of your CMS.

---

## ⚙️ Prerequisites

Before importing the workflow, ensure you have:

1. A **WordPress website** with the REST API enabled (default in WP 4.7+).  
2. **Authentication**: either Application Passwords or Basic Auth credentials.  
3. A **Google Sheet** with the following tabs:
   - `Posts`
   - `Categories`
   - `Tags`
   - `Media`
4. The following **credentials configured in n8n**:
   - `HTTP Basic Auth` (for WordPress)
   - `Google Sheets OAuth2`

---

## 🚀 Setup instructions

1. **Import** the workflow into your n8n instance.  
2. Replace all example WordPress API URLs with your domain, for example: https://yourdomain.com/wp-json/wp/v2/ 
3. Connect your **HTTP Basic Auth** credentials (WordPress username + Application Password).  
4. Connect your **Google Sheets OAuth2** account.  
5. Update the **spreadsheet ID** in each Google Sheets node with your own.  
6. Adjust the **Schedule Trigger** (e.g. run daily at 2:00 AM).  
7. Run once manually to verify data sync.

---

## 🧠 Workflow structure

| Section | Description |
|----------|--------------|
| **Schedule / Webhook Trigger** | Starts the workflow manually or automatically |
| **Variables & Loop Vars** | Initialize pagination for REST API requests |
| **Get Posts → Split Out → Update Posts** | Fetch and update all WordPress posts |
| **Get Categories → Update Categories** | Sync WordPress categories |
| **Get Tags → Update Tags** | Sync WordPress tags |
| **Get Media → Split Out → Update Media** | Sync media library (images, videos, etc.) |
| **IF Loops** | Handles pagination logic until all items are retrieved |

---

## ⚠️ Notes & Limitations

- Works with **standard WordPress REST API endpoints** only.  
- Custom post types require editing endpoint URLs.  
- The `per_page` value defaults to **10**; increase for faster syncs.  
- For large sites, consider increasing n8n memory or adding execution logs.  
- Avoid running the workflow too frequently to prevent API rate limits.

---

## 🎥 Video Tutorial

A step-by-step setup guide is available here:
👉 [https://www.youtube.com/watch?v=czSMWyD6f-0](https://www.youtube.com/watch?v=czSMWyD6f-0)

Please subscribe to my YouTube channel to support me: 👉 [https://www.youtube.com/@gregfrolovpersonal](https://www.youtube.com/@gregfrolovpersonal)

---

## 👨‍💻 Author

**Created by:** [Grigory Frolov](https://ozwebexpert.com)  
SEO & Automation Specialist — helping businesses integrate WordPress, AI, and data tools with n8n.

---

## 🧾 License

This workflow is provided under the MIT License.  
Feel free to use, modify, and share improvements with the community.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
