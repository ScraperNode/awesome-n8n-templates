# 📊 🔥 X & Reddit tech trend analysis with Gemini AI for Notion & Telegram

> ⚡ **64 views** · 📊 [Market Research & Insights](../)

## Description

# 🔥 X & Reddit Trending Topics Finder

## 📝 Overview
This n8n workflow helps YouTubers like @cash-routine 🚀 find trending AI, n8n, and automation topics on X and Reddit. It runs daily at 8 AM, using AI to spot hot discussions, debates, and monetization ideas 💰. Results are sent to Telegram 📩 and saved in Notion 📚, perfect for creating viral videos or paid services that blend value with trending buzz.

**Benefits**:
- 🕒 Daily trend alerts
- 🤖 AI-driven insights with quotes & opportunities
- 📲 Telegram + Notion outputs
- 💸 Video ideas + business levers

## 🎯 Use Cases
- **YouTubers**: Create videos like "Build a Micro-SaaS with n8n" 📹
- **Marketers**: Sell lead-gen automations 💼
- **Analysts**: Track AI debates for content ideas 🧠

## ⚙️ How It Works
1. ⏰ **Trigger**: Runs daily at 8 AM.
2. ✍️ **Prompt**: Sets AI focus on AI/n8n trends.
3. 🌐 **Data**: Fetches top 10 posts from r/n8n, r/Automate, r/OpenAI, r/grok + X "Automation" tweets.
4. 🤖 **AI Analysis**: Gemini Pro finds 5 trends with:
   - 📈 Trend summary
   - 💬 Debate/quote
   - 💰 Video + monetization ideas
5. 📋 **Output**: JSON-structured results.
6. 📤 **Delivery**: Markdown chunks to Telegram (&lt;4096 chars) + Notion page with random emoji.

## 🛠️ Setup
1. 📥 Import JSON into n8n.
2. 🔑 Add credentials:
   - Reddit OAuth2
   - X OAuth2
   - Google Gemini API (Pro + Flash)
   - Telegram API
   - Notion API (parent page: [Notion URL](https://www.notion.so/News-Trends-Actu-28df5b86dd77800d9abee33a8ee86613))
3. ⚙️ Customize:
   - Adjust trigger time
   - Edit prompt for new subreddits/keywords
   - Update Notion page ID
4. ✅ Test & activate.

## 🔗 Nodes & Credentials
- **Nodes**: Schedule Trigger, Set, AI Agent, Reddit Tool (x4), Twitter Tool, Structured Output Parser, Code (x2), Telegram, Notion (x2)
- **Credentials**: Reddit, X, Gemini, Telegram, Notion

## 🚀 Enhancements
- Add Slack/email alerts 📧
- Expand sources (e.g., Discord) 🌐
- Sell as a premium setup on @cash-routine for $49 💸

**Note**: Not free! Optimized for n8n cloud/self-hosted. Runtime: ~1-2 min. Check n8n forums for support. 🛠️

![Screenshot 20251015 at 21.58.51.png](fileId:2963)![Screenshot 20251015 at 21.58.31.png](fileId:2964)

## 🔗 Nodes Used

Telegram, Notion, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
