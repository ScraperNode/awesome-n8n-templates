# 📱 Generate automated social media reports with GPT-4o, Twitter, Facebook & Notion

> ⚡ **238 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

## Description
Automate your weekly social media analytics with this end-to-end AI reporting workflow. 📊🤖
 This system collects real-time Twitter (X) and Facebook metrics, merges and validates data, formats it with JavaScript, generates an AI-powered HTML report via GPT-4o, saves structured insights in Notion, and shares visual summaries via Slack and Gmail. Perfect for marketing teams tracking engagement trends and performance growth. 🚀💬

## What This Template Does
 1️⃣ Starts manually or on-demand to fetch the latest analytics data. 🕹️
 2️⃣ Retrieves follower, engagement, and post metrics from both X (Twitter) and Facebook APIs. 🐦📘
 3️⃣ Merges and validates responses to ensure clean, complete datasets. 🔍
 4️⃣ Runs custom JavaScript to normalize and format metrics into a unified JSON structure. 🧩
 5️⃣ Uses Azure OpenAI GPT-4o to generate a visually rich HTML performance report with tables, emojis, and insights. 🧠📈
 6️⃣ Saves the processed analytics into a Notion “Growth Chart” database for centralized trend tracking. 🗂️
 7️⃣ Sends an email summary report to the marketing team, complete with formatted HTML insights. 📧
 8️⃣ Posts a concise Slack update comparing platform performance and engagement deltas. 💬
 9️⃣ Logs any validation or API errors automatically into Google Sheets for debugging and traceability. 🧾

## Key Benefits
 ✅ Centralizes all social metrics into a single automated flow.
 ✅ Delivers AI-generated HTML reports ready for email and dashboard embedding.
 ✅ Reduces manual tracking with Notion and Slack syncs.
 ✅ Ensures data reliability with built-in validation and error logging.
 ✅ Gives instant, visual insights for weekly marketing reviews.

## Features
- Multi-platform analytics integration (Twitter X + Facebook Graph API).
- JavaScript node for dynamic data normalization.
- Azure OpenAI GPT-4o for HTML report generation.
- Notion database update for long-term trend storage.
- Slack and Gmail nodes for instant sharing and communication.
- Automated error capture to Google Sheets for workflow reliability.
- Visual, emoji-enhanced reporting with HTML formatting and insights.

## Requirements
- Twitter OAuth2 API credentials for access to public metrics.
- Facebook Graph API access token for page insights.
- Azure OpenAI API key for GPT-4o report generation.
- Notion API credentials with write access to “Growth Chart” database.
- Gmail OAuth2 credentials for report dispatch.
- Slack Bot Token with chat:write permission for posting analytics summaries.
- Google Sheets OAuth2 credentials for maintaining the error log.

## Environment Variables
TWITTER_API_KEY
FACEBOOK_ACCESS_TOKEN
AZURE_OPENAI_API_KEY
NOTION_GROWTH_DB_ID
GMAIL_REPORT_RECIPIENTS
SLACK_REPORT_CHANNEL_ID
GOOGLE_SHEET_ERROR_LOG_ID

## Target Audience
 📈 Marketing and growth teams tracking cross-platform performance
 💡 Social media managers needing automated reporting
 🧠 Data analysts compiling weekly engagement metrics
 💬 Digital agencies managing multiple brand accounts
 🧾 Operations and analytics teams monitoring performance KPIs

## Step-by-Step Setup Instructions
 1️⃣ Connect all API credentials (Twitter, Facebook, Notion, Gmail, Slack, and Sheets).
 2️⃣ Paste your Facebook Page ID and Twitter handle in respective API nodes.
 3️⃣ Verify your Azure OpenAI GPT-4o connection and prompt text for HTML report generation.
 4️⃣ Update your Notion database structure to match “Growth Chart” property names.
 5️⃣ Add your marketing email in the Gmail node and test delivery.
 6️⃣ Specify the Slack channel ID where summaries will be posted.
 7️⃣ Optionally, connect a Google Sheet tab for error tracking (error_id, message).
 8️⃣ Execute the workflow once manually to validate data flow.
 9️⃣ Activate or schedule it for weekly or daily analytics automation. ✅

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Notion, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
