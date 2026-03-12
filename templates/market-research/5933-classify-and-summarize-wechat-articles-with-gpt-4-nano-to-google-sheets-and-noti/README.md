# 📊 Classify and summarize WeChat articles with GPT-4 Nano to Google Sheets and Notion

> ⚡ **3,852 views** · 📊 [Market Research & Insights](../)

## Description

## Who’s it for 👥
This template is perfect for content creators, marketers, and researchers managing WeChat public account articles! 🚀 It’s ideal for n8n newcomers or anyone wanting to save time on manual content analysis, especially if you use Google Sheets for tracking. 📊 Whether you’re into AI, 欧阳良宜, or automation, this is for you! 😄

## How it works / What it does 🔧
This workflow automates the retrieval, filtering, classification, and summarization of WeChat articles. 🌐 It reads RSS feed links from a Google Sheet, filters articles from the last 10 days ⏳, cleans HTML content 🧹, classifies them as relevant or not 🎯, generates insightful Chinese summaries with AI 🤖, and saves results to Google Sheets and Notion. 📝 Outputs are Slack-formatted for team collaboration! 💬

## How to set up 🛠️
1. **Prepare Google Sheets**: Use your own documentId (replace the example) and set up sheets "Save Initial Links" (gid=198451233) and "Save Processed Data" (gid=1936091950). 📋
2. **Configure Credentials**: Add Google Sheets and OpenAI API credentials—avoid hardcoding keys! 🔐
3. **Set RSS Feed**: Update the rss_feed_url in the "RSS Read" node with your WeChat RSS feed. 🌐
4. **Customize AI**: Tweak "Relevance Classification" and "Basic LLM Chain" prompts for your topics (e.g., 欧阳良宜, AI). 🎨
5. **Notion (Optional)**: Swap the databaseId (e.g., 22e79d55-2675-8055-a143-d55302c3c1b1) with your own. 📚
6. **Run Workflow**: Trigger manually via the "When clicking ‘Execute workflow’" node. 🚀
## Requirements ✅
- n8n account with Google Sheets and OpenAI integrations.
- Access to a WeChat public account RSS feed.
- Basic JSON and node config knowledge.
## How to customize the workflow 🎛️
- Topic Adjustment: Update categories in "Relevance Classification" for new topics (e.g., "technology", "education"). 🌱
- Summary Length: Modify the LLM prompt in "Basic LLM Chain" to adjust length or style. ✂️
- Output Destination: Add Slack or Email nodes for more outputs. 📩
- Date Filter: Change the "IF (Filter by Date)" condition (e.g., 7 days instead of 10). ⏰
- Scalability: Use a "Schedule Trigger" node for automation. ⏳

## 🔗 Nodes Used

Google Sheets, RSS Read, Notion, Basic LLM Chain, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
