# 📱 Improving title clarity with Google Sheets and email notifications

> ⚡ **93 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 🎁 Automate YouTube Giveaway Winner Selection with YouTube Comments Scraper API

**Description:**
Easily automate your YouTube video giveaways using n8n and the [**YouTube Comments Scraper API**](https://rapidapi.com/PrineshPatel/api/youtube-comments-scraper). This workflow fetches comments, selects a random winner, logs results to Google Sheets, and notifies the admin—all hands-free!

---

## 🧩 Node-by-Node Breakdown

| Node | Name                             | Purpose                                                                                                                                      |
| ---- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 1️⃣  | **Form Trigger**                 | Captures a YouTube video URL from a user via form submission.                                                                                |
| 2️⃣  | **Fetch YouTube Comments**       | Makes a POST request to [**YouTube Comments Scraper API**](https://rapidapi.com/PrineshPatel/api/youtube-comments-scraper) to retrieve comments. |
| 3️⃣  | **Check API Response Status**    | Ensures that the response status is `200` before proceeding.                                                                                 |
| 4️⃣  | **Select Random Commenter**      | Parses the comments and selects a random commenter as the giveaway winner.                                                                   |
| 5️⃣  | **Log Winner to Google Sheet**   | Appends winner name, video URL, and date to a Google Sheet for record-keeping.                                                               |
| 6️⃣  | **Notify Winner Email**          | Sends a congratulatory email to the admin with the selected winner's name.                                                                   |
| 7️⃣  | **Notify: Invalid API Response** | If the API fails, sends an alert to the admin about the issue.                                                                               |


---

## 🔑 How to Get Your RapidAPI Key

To use the [**YouTube Comments Scraper API**](https://rapidapi.com/PrineshPatel/api/youtube-comments-scraper), follow these steps:

1. Go to [**YouTube Comments Scraper API**](https://rapidapi.com/PrineshPatel/api/youtube-comments-scraper).
2. Sign in or create a free RapidAPI account.
3. Click the **"Subscribe to Test"** button.
4. Copy your **x-rapidapi-key** from the "Code Snippets" or "Header Parameters" section.
5. Paste it into your HTTP Request node in n8n.

---

## 🎯 Use Case & Benefits

### ✅ Use Case:

* Automatically pick a **random commenter** from a **YouTube video** as a **giveaway winner**.

### 🚀 Benefits:

* **Fully automated** – no manual comment scanning or random selection.
* **Accurate & fair** – random selection from valid commenters only.
* **Time-saving** – especially for creators running multiple giveaways.
* **Integrated logging** – keep a historical record of all winners in Google Sheets.
* **Email alerts** – get notified whether the flow succeeds or fails.

---

## 👥 Who Is This For?

* **YouTube Content Creators** running giveaways.
* **Marketing Teams** promoting products via YouTube contests.
* **Agencies** managing influencer campaigns.
* **Developers & Automation Enthusiasts** looking to simplify giveaway processes.

---

## 💡 Why Use YouTube Comments Scraper API?

The [**YouTube Comments Scraper API**](https://rapidapi.com/PrineshPatel/api/youtube-comments-scraper) offers a simple and effective way to extract public YouTube comments programmatically. It’s fast, reliable, and integrates smoothly with platforms like n8n.

You’ll use this API:

* To retrieve all comments from a YouTube video.
* To power fair and transparent giveaways.
* To trigger downstream automations like winner logging and notification.
---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
