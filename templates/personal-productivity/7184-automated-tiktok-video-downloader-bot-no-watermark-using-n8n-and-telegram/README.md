# ⚡ Automated TikTok video downloader bot (no watermark) using n8n and Telegram

> ⚡ **2,919 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

![AI2.png](fileId:2000)![AI3.png](fileId:1999)

**Description**
This workflow is an n8n-based automation that allows users to download TikTok/Reels videos without watermarks simply by sending the video link through a Telegram Bot.

It uses a Telegram Trigger to receive the link from the user, then makes an HTTP request to a third-party API (tiktokio.com) to process and retrieve the download link. The workflow filters the results to find the Download without watermark link, downloads the video in MP4 format, and sends it back to the user directly in their Telegram chat.

*Key features:*

- Supports the best available video quality (bestvideo+bestaudio).
- Automatically removes watermarks.
- Instant response directly in Telegram chat.
- Fully automated — no manual downloads required.

**How It Works**
1. Telegram Trigger
- The user sends a TikTok or Reels link to the Telegram bot.
- The workflow captures and stores the link for processing.

2. HTTP Request – MediaDL API
- The link is sent via POST method to https://mediadl.app/api/download.
- The API processes the link and returns video file data.

3. Wait Delay
- The workflow waits a few seconds to ensure the API response is fully ready.

4. Edit Fields
- Extracts the video file URL from the API response.

5. Additional Wait Delay
- Adds a short pause to avoid connection errors during the download process.

6. HTTP Request – Proxy Download
- Downloads the MP4 video file directly from the filtered URL.

7. Send Video via Telegram
- The downloaded video is sent back to the user in their Telegram chat.


**How to Set Up**
1. Create & Configure a Telegram Bot
- Open Telegram and search for BotFather.
- Send /newbot → choose a name & username for your bot.
- Copy the Bot Token provided — you’ll need it in n8n.

2. Prepare Your n8n Environment
- Log in to your n8n instance (self-hosted or n8n Cloud).
- Go to Credentials → create new Telegram API credentials using your Bot Token.

3. Import the Workflow
- In n8n, click Import and select the PROJECT_DOWNLOAD_TIKTOK_REELS.json file.

4. Configure the Telegram Nodes
- In the Telegram Trigger and Send Video nodes, connect your Telegram API credentials.

5. Configure the HTTP Request Nodes
- Ensure the Download2 and HTTP Request nodes have the correct URL and headers (pre-configured for mediadl.app).
- Make sure the responseFormat is set to file in the final download node.

6. Activate the Workflow
- Toggle Activate in the top right corner of n8n.
- Test by sending a TikTok or Reels link to your bot — you should receive the no-watermark video in return.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
