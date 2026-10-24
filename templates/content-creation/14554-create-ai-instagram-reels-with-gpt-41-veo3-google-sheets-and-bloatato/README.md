# 🎬 Create AI Instagram Reels with GPT-4.1, Veo3, Google Sheets and Bloatato

> ⚡ **31 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who Is This For?
This workflow is designed for **social media managers, content creators, digital marketers, and entrepreneurs** who want to automate the entire lifecycle of creating and publishing short-form video content (like TikToks or Instagram Reels). It's perfect for anyone looking to maintain a consistent posting schedule without the manual effort of ideation, video production, and distribution.

## What This Workflow Does
This workflow functions as an **end-to-end AI-powered video content engine** that:
1.  **Generates Creative Concepts** – Uses AI to brainstorm original, non-human-centric "before/after" transformation video ideas.
2.  **Crafts Professional Prompts** – Transforms the simple idea into a highly detailed, structured JSON prompt optimized for cinematic AI video generation.
3.  **Renders the Video** – Sends the prompt to the VEO 3 AI model to generate the video asset.
4.  **Monitors and Downloads** – Polls the VEO 3 API until the video is ready and then downloads the final file.
5.  **Publishes to Social Media** – Uploads the video to a media service (Bloatato) and then schedules it for publication on Instagram.
6.  **Sends Multi-Channel Notifications** – Alerts the user via WhatsApp, Telegram, and Slack once the video is successfully published.
7.  **Logs Everything** – Saves the original idea, captions, prompts, and production status to a Google Sheet for tracking and reference.

## Key Features
* **Automated Ideation** – AI generates viral video ideas.
* **Smart Prompt Engineering** – Converts ideas into production-ready prompts.
* **AI Video Creation** – Generates cinematic vertical videos via VEO 3 API.
* **Intelligent Rendering** – Monitors and retries video processing automatically.
* **Auto Social Publishing** – Uploads and posts to Instagram via Bloatato.
* **Real-Time Notifications** – Updates via WhatsApp, Telegram, or Slack.
* **Centralized Tracking** – Logs all content and status in Google Sheets.

## Requirements & Setup
* **AI Model APIs**: Access to an OpenAI-compatible API for the AI agents that generate ideas and scripts.
* **VEO 3 API**: An active account with `api.kie.ai` and the necessary Bearer Token for video generation.
* **Bloatato API**: Credentials for the Bloatato service to upload media and publish to Instagram.
* **Instagram Account**: An Instagram account connected to Bloatato, with its `accountId` noted.
* **Google Sheets**: A Google Sheet to log content, with its ID and Sheet Name (GID) configured.
* **Notification Services**:
    * **Rapiwa**: For WhatsApp notifications.
    * **Telegram Bot**: For Telegram alerts.
    * **Slack App**: For Slack messages.
* **Scheduled Trigger**: A cron trigger (e.g., `0 8,20 * * *`) to run the workflow automatically.

## Support & Help
* **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
* **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
* **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
* **Website**: [https://spagreen.net](https://spagreen.net)
* **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
