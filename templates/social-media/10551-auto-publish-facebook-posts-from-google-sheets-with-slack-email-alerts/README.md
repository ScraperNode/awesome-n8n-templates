# 📱 Auto-publish Facebook posts from Google Sheets with Slack & email alerts

> ⚡ **334 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 📊 Description
Simplify your social media publishing process by automating post scheduling from Google Sheets directly to Meta (Facebook Pages). 📅💬 This workflow detects pending posts, uploads images with captions to your Facebook Page, updates the sheet status, and sends real-time notifications via Slack and email — keeping your marketing team always in sync. 🚀

## What This Template Does
1️⃣ Trigger – Monitors a Google Sheet for new or pending posts every minute. ⏰
 2️⃣ Filter – Identifies the latest “pending” entry for publishing. 🔍
 3️⃣ Extract – Captures post details like caption, image URL, and ID. 🧾
 4️⃣ Publish – Uploads the post to your Meta (Facebook) Page using the Graph API. 📤
 5️⃣ Validate – Confirms success or failure of the post operation. ✅
 6️⃣ Notify – Sends instant Slack and email updates on publishing status. 💌
 7️⃣ Update – Marks the published post as “Completed” in Google Sheets. 📊

## Key Benefits
✅ Hands-free publishing from Google Sheets to Meta
 ✅ Instant Slack and email alerts for post outcomes
 ✅ Prevents duplicate or failed post uploads
 ✅ Centralized content tracking and status updates
 ✅ Improves consistency and speed in social media operations

## Features
- Google Sheets trigger for post scheduling
- Facebook Graph API integration for auto-posting
- Slack and Outlook notifications for success/error alerts
- Automatic sheet updates post-publication
- Error handling and reporting for failed posts

## Requirements
- Google Sheets OAuth2 credentials
- Facebook Page Access Token via Graph API
- Slack Bot token for notifications
- Outlook or SMTP credentials for email updates
- Target Audience
- Marketing teams managing Facebook content calendars 📆
- Social media managers seeking automated posting 📣
- Agencies coordinating client content delivery 📋
- Teams tracking campaign publishing performance 📊

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, Facebook Graph API, Microsoft Outlook, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
