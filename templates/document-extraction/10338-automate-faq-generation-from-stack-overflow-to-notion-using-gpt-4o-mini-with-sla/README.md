# 🔬 Automate FAQ generation from Stack Overflow to Notion using GPT-4o-mini with Slack alerts

> ⚡ **72 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 📊 Description
This workflow automatically classifies new Stack Overflow questions by topic, generates structured FAQ content using GPT-4o-mini, logs each entry in Google Sheets, saves formatted FAQs in Notion, and notifies your team on Slack — ensuring your product and support teams stay aligned with real-world developer discussions. 🤖💬📚

## ⚙️ What This Template Does
- Step 1: Monitors Stack Overflow RSS feeds for new questions related to your selected tags. ⏱️
- Step 2: Filters out irrelevant or incomplete questions before processing. 🧹
- Step 3: Uses OpenAI GPT-4o-mini to classify each question into a topic category (Frontend, Backend, DevOps, etc.). 🧠
- Step 4: Generates structured FAQ content including summaries, technical insights, and internal guidance. 📄
- Step 5: Saves formatted entries into your Notion knowledge-base database. 📚
- Step 6: Logs all FAQ data into a connected Google Sheet for analytics and tracking. 📊
- Step 7: Sends real-time Slack notifications with quick links to the new FAQ and the original Stack Overflow post. 🔔
- Step 8: Provides automatic error detection — any failed AI or Notion step triggers an instant Slack alert. 🚨

## 💡 Key Benefits
✅ Builds a continuously updated, AI-driven knowledge base
 ✅ Reduces repetitive support and documentation work
 ✅ Keeps product and dev teams aware of trending community issues
 ✅ Enhances internal docs with verified Stack Overflow insights
 ✅ Maintains an audit trail via Google Sheets
 ✅ Alerts your team instantly on errors or new FAQs

## 🧩 Features
- Automatic Stack Overflow RSS monitoring
- Dual-layer OpenAI integration (Topic Classification + FAQ Generation)
- Structured Notion database integration
- Google Sheets logging for analytics
- Slack notifications for new FAQs and error alerts
- Custom tag-based question filtering
- Near real-time updates (every minute)
- Built-in error handling for reliability

## 🔐 Requirements
- OpenAI API Key (GPT-4o-mini access)
- Notion API credentials with database access
- Google Sheets OAuth2 credentials
- Slack bot token with chat:write permissions
- Stack Overflow RSS feed URL for your preferred tags

## 👥 Target Audience
- SaaS or product teams building internal FAQ and knowledge systems
- Developer relations and documentation teams
- Customer-support teams automating knowledge reuse
- Technical communities curating content from Stack Overflow

## 🧭 Setup Instructions
- Add your OpenAI API credentials in n8n.
- Connect your Notion database and update the page or database ID.
- Connect Google Sheets credentials and select your tracking sheet.
- Connect your Slack account and specify your notification channel.
- Update the RSS Feed URL with your chosen Stack Overflow tags.
- Run the workflow manually once to test connectivity, then enable automation.

## 🔗 Nodes Used

Google Sheets, Slack, Notion, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
