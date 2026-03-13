# 📊 Generate content strategy reports analyzing Reddit, YouTube & X with Gemini

> ⚡ **5,157 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

### **Description**

This workflow provides a powerful AI assistant for content creators, book editors, and marketers. It automates the collection and analysis of trending discussions from Reddit, YouTube, and X (Twitter), generating insightful topic reports. This frees you from hours of tedious data compilation, allowing you to make faster, more accurate topic decisions based on deep AI analysis.

### **How it works**

This workflow simulates the complete research process of a strategic editor:

1.  **Initiate & Collect**: A user submits a keyword via a public Form Trigger. The workflow then automatically fetches relevant, trending content in parallel from the official APIs of Reddit, YouTube, and X (Twitter).

2.  **Multi-stage AI Processing & Analysis**: The workflow utilizes a layered AI pipeline to process the data.
    * First, a lightweight Gemini model in the `AI Pre-filter Content` node rapidly screens the vast amount of content to filter out noise.
    * Next, a more powerful Gemini Pro model in the `AI Deep Analysis` node performs a detailed, structured analysis on each high-value item, extracting summaries, sentiment, and key arguments.
    * Finally, a "strategist" AI model in the `AI Synthesize Final Report` node aggregates all analyses to generate the comprehensive final topic report in HTML.

3.  **Multi-Channel Report Distribution**: The workflow distributes the final report to multiple channels based on pre-defined templates. The `Send Gmail Report` node sends the complete HTML report. The `Send Feishu Notification` node sends a concise summary card to a group chat. Meanwhile, the `Archive to Google Sheets` node archives key data.

### **Setup Steps**

This workflow takes approximately 20-30 minutes to set up, with most of the time spent connecting your accounts.

1.  **Connect Your API Accounts**: In the n8n `Credentials` section, you will need to prepare and connect credentials for the following services:
    * **Google**: For the Gemini AI model, Gmail sending, and Google Sheets archiving. This requires a Google Cloud API Key and OAuth2 credentials.
    * **Reddit**: For fetching Reddit posts. This requires a Reddit account with OAuth2 configured in n8n to allow searches.
    * **YouTube**: For collecting YouTube videos. You'll need to enable the YouTube Data API v3 in your Google Cloud Console and get an API Key.
    * **Twitter**: For the official Twitter node, requiring a free developer account and an App with v2 API access.

2.  **Configure Output Channels**: In the final nodes (`Send Gmail Report`, `Send Feishu Notification`, `Archive to Google Sheets`), update the recipient email address, the Feishu bot's Webhook URL, and the target spreadsheet ID to match your own.

3.  **Activate and Share the Trigger**: Activate the workflow. The first `Form Trigger` node will automatically generate a public URL. Share this link with your team members to let them start using the tool.

## 🔗 Nodes Used

Google Sheets, HTTP Request, X (Formerly Twitter), Gmail, Reddit, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
