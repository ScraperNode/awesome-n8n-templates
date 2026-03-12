# 📁 Automate Instagram reel downloads with Google Drive storage & Telegram alerts

> ⚡ **1,177 views** · 📁 [File Management](../)

## Description

## Instagram Reel Downloader & Logger
Automate Instagram Reel Downloads, Storage, and Activity Logging

### What does this workflow do?

- Handles incoming webhook requests (ideal for Instagram/Facebook API triggers).
- Validates the webhook via challenge-response and custom verify token.
- Checks for messages from yourself (filtering automated/self-triggered runs).
- Downloads Instagram Reels from URLs posted to the webhook.
- Uploads the reel to Google Drive and retrieves the download URL.
- Logs reel details (status, URL, and timestamp) to a Google Sheet for record-keeping.
- Notifies you on Telegram with the download details and Google Drive link.

### How does it work?

- Webhook: Listens for new messages/events (custom webhook endpoint for Meta).
- Validation: Confirms webhook subscribe/challenge and verify token from Meta API.
- Sender Check: Ignores messages unless they match your configured sender/recipient.
- Download Reel: Fetches the reel/attachment from Instagram using received URLs.
- Timestamp Gen: Adds a precise timestamp and ISO-based unique ID to the activity log.
- Upload to Drive: Saves the downloaded reel in a preset Google Drive folder.
- Log to Sheet: Updates a Google Sheet with the reel’s status, URL, and timestamp.
- Telegram Alert: Instantly notifies you when a new reel is downloaded and logged.

### What do I need to make this work?

- A registered webhook endpoint (from your Meta/Instagram app configuration). 
- A Google Drive and Google Sheets account (OAuth2 connected to n8n).
- A Telegram Bot and Chat ID setup to receive download completion messages.
- The correct verify_token in your webhook event source matches your template (‘youtube-automation-n8n-token’ by default).
- Update your Drive/Sheet/Bot credentials as per your n8n instance’s environment.

### Why use this?

- Fully automates the collection and archival of Instagram Reels.
- Centralizes content download, backup, and activity records for your automation flows.
- Provides instant monitoring and archival of each event.

### Setup Tips:

- Make sure your webhook path and Meta app configuration match (/n8n-template-insta-webhook).
- Double-check the Google credentials and the sheet’s tab IDs/names.
- Replace the Telegram and Google connection credentials with your own securely.

Use this as a foundation for any Instagram/Facebook-based automations in n8n,
and customize as your automation stack evolves!

Publish confidently, and let users know this template:

Saves time, automates digital content management, and notifies users in real-time.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
