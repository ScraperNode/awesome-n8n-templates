# 📊 Analyze YouTube comments with OpenAI and send reports via email and chat

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for
This advanced **n8n workflow** is designed for **YouTube content creators**, **social media managers**, **digital marketers**, and **agency owners** who need a deep, automated understanding of their video performance. It acts as a virtual audience research analyst, automatically fetching video details, scraping *all* comments (handling pagination), and analyzing them with AI to extract sentiment, trends, and content ideas.

## Features
* **Complete Comment Scraping**: Fetches all YouTube comments using automatic API pagination.
* **Telegram Control**: Start analysis directly from Telegram with Admin/User access checks and owner alerts.
* **Smart ID Extraction**: Detects and extracts `Video ID` from different message formats automatically.
* **AI-Powered Analysis**: Uses LangChain + OpenAI to generate insights on sentiment, audience, engagement, and content opportunities.
* **Multi-Format Reporting**: Sends reports in HTML/Markdown through Gmail, Telegram, and WhatsApp simultaneously.
* **Cloud Archiving**: Saves reports automatically to Google Drive with the video title as the document name.
* **Actionable Insights**: Identifies viewer pain points, keyword ideas, and optimization opportunities for future videos.

## Requirements
*   **YouTube Data API v3**: A valid Google API Key with access to the `commentThreads` and `video` resources is required for fetching data.
*   **OpenAI API**: Required for the LangChain Agent (using models like `gpt-4.1-mini`) to analyze the data and generate the comprehensive report.
*   **Telegram API**: For triggering the workflow and receiving the final report.
*   **Gmail & Google Drive**: Google OAuth2 credentials are needed to send the report email and save the file to your drive.
*   **Rapiwa (WhatsApp)**: API credentials to send the report via WhatsApp messages.

## Important Notes
* **API Key Configuration**: Replace `"add_your_google_API_key"` in `Edit Fields (Set API key)` with your valid YouTube Data API key.
* **Telegram Setup**: Add your Admin ID and Chat ID in the Telegram message nodes for correct notifications.
* **Video Input**: Send a Telegram message containing `VIDEO_ID`, `video id`, or `videoid` to trigger the workflow.
* **Cost Management**: Large videos with many comments can use high OpenAI token limits since all comments are analyzed.
* **Permissions**: Make sure YouTube Data API v3 is enabled in your Google Cloud Project.

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spapgreen)

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Drive, Gmail, Markdown, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
