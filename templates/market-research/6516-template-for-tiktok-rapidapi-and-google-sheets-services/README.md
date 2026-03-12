# 📊 Template for TikTok, RapidAPI, and Google Sheets services

> ⚡ **400 views** · 📊 [Market Research & Insights](../)

## Description

### 📊 TikTok Account Monitoring Automation 

This n8n workflow automates the daily process of fetching TikTok account analytics using the [**TikTok API**](https://rapidapi.com/skdeveloper/api/tiktok-api42) and logging the results to **Google Sheets**.

It helps marketing teams, social media managers, and influencer agencies track video performance and audience growth across multiple TikTok usernames without manual effort.

---

## 🔁 Workflow Summary

1. **⏰ Trigger via Schedule**
   - The workflow runs automatically every day (or any custom interval), ensuring data is consistently updated without manual input.

2. **📥 Sheet 1 – Read TikTok Usernames**
   - A Google Sheet stores the list of TikTok usernames you want to monitor.
   - ✅ Example Columns:
     - `username`
     - `category`
     - `priority`
     - `notes`

3. **🔁 Loop Through Each Username**
   - Each username is processed individually in a loop to make separate API calls and avoid data conflicts.

4. **📡 Fetch Analytics via RapidAPI**  
   - The following [**TikTok API**](https://rapidapi.com/skdeveloper/api/tiktok-api42) endpoint is used:  
     [**`POST https://tiktok-api42.p.rapidapi.com/videos_view_count.php`**](https://rapidapi.com/skdeveloper/api/tiktok-api42)
   - You get per-user stats like:
     - Number of videos
     - Total views
     - Recent video views
   - This endpoint is highly stable and works without TikTok login or auth.

5. **📤 Sheet 2 – Append Analytics Results**
   - Fetched data is logged in another Google Sheet for performance tracking.
   - ✅ Example Columns:
     - `username`
     - `total_videos`
     - `total_views`
     - `average_views`
     - `fetch_date`
     - `category`

6. **📦 Sheet 3 – Log API History or Errors**
   - A third sheet stores logs of API fetch status, failures, or skipped usernames for debugging.
   - ✅ Example Columns:
     - `username`
     - `status` (e.g., success, failed, skipped)
     - `message`
     - `timestamp`

---

## 🔐 RapidAPI Notes

- You must have an API key from [**TikTok API**](https://rapidapi.com/skdeveloper/api/tiktok-api42)
- All requests are made to [**`https://tiktok-api42.p.rapidapi.com`**](https://rapidapi.com/skdeveloper/api/tiktok-api42)
- The main endpoint in use is:  
  [**`POST https://tiktok-api42.p.rapidapi.com/videos_view_count.php`**](https://rapidapi.com/skdeveloper/api/tiktok-api42)
- Each request uses `POST` with params like `username`, `region`, `number`
- The response is JSON and easy to parse in n8n workflows

---

## 📌 Optional Extensions (Same API, More Insights)

This same [**TikTok API**](https://rapidapi.com/skdeveloper/api/tiktok-api42) also supports other advanced endpoints that can be added to enrich your workflow:

| Endpoint Name             | Functionality                                                   |
|---------------------------|------------------------------------------------------------------|
| **User Profile Data**     | Get bio, profile image, followers, likes, etc.                  |
| **User Account Stats**    | Extract detailed user metrics (likes, comments, shares)         |
| **User Audience Stats**   | Know where their followers are from and gender split            |
| **Historical Data**       | Track historical performance trends (useful for growth charts)  |
| **HashTags Scraper**      | Find trending or related hashtags used by the user              |
| **Related User Info**     | Suggest accounts similar to the one queried                     |
| **Videos Views Counts**   | Already used to get view stats for multiple videos              |

Each of these can be added using **`HTTP Request`** nodes in n8n and plugged into the same sheet or separate ones.

---

## ✅ Benefits

- 🔄 **Fully Automated**: No manual copy-paste or login required
- 📊 **Centralized Analytics**: Track all creators or clients in one dashboard
- 📈 **Performance Insights**: Daily growth visibility with historical tracking
- 📤 **Data Export Ready**: Stored in Google Sheets for easy share/report/export
- 🔧 **Scalable & Flexible**: Add hashtags, followers, or audience demographics

---

## 🧠 Use Cases

- **Influencer Agencies** tracking clients' TikTok growth daily
- **Brands running UGC Campaigns** who want to monitor video traction
- **Analysts** building dashboards from Sheet-to-DataStudio/Looker
- **Marketers** analyzing viral trends or creators across niches

---

## 📌 Final Note

This workflow is extendable. You can:
- Merge multiple endpoints per user
- Schedule it weekly or monthly
- Send email summaries
- Push to Slack or Google Data Studio

&gt; API Used in this workflow:  
&gt; [**TikTok API**](https://rapidapi.com/skdeveloper/api/tiktok-api42)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
