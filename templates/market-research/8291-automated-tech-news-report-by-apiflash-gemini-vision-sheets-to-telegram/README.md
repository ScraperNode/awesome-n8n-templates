# 📊 Automated tech news report by ApiFlash, Gemini Vision & Sheets to Telegram

> ⚡ **53 views** · 📊 [Market Research & Insights](../)

## Description

## 📸 What this workflow does
Automatically captures a screenshot of a tech news homepage, extracts headlines into structured JSON, logs them in Google Sheets, and posts a daily trend report (7–10 bullet points) to Telegram at 07:00.

Details:
- ApiFlash takes a cropped full-page screenshot of technewsworld.com (configurable).
- Gemini Vision analyzes the image and returns one strict JSON object (captured_at, source, sentiment, items[]).
- Code node cleans and parses JSON (removes code fences).
- Google Sheets stores each headline (headline, topic, highlight, sentiment).
- Last 3 days of entries (max 30) are aggregated.
- Gemini writes a concise Trend Report.
- Telegram sends both the screenshot and the summary.


## 👤 Who it’s for
- Editors and creators wanting automated daily news briefs.
- Marketing/analyst teams logging tech trends.
- Founders/PMs who want quick morning updates via Telegram.


## ✅ Requirements
- n8n (self-hosted or cloud).
- Accounts/credentials: ApiFlash (API key), Google Gemini, Google Sheets OAuth2, Telegram Bot.
- A Google Sheet with columns: captured_at, source, sentiment, main_headlines, topics, highlights.


## ⚙️ Setup
- Import the workflow JSON into n8n.
- Configure ApiFlash node with your access key and target URL.
- Set Telegram Bot credentials and chatId.
- Connect Google Sheets OAuth2 and specify documentId/sheetName.
- Use Gemini (gemini-1.5-flash) for JSON extraction and trend reporting.
- Adjust schedule (default 07:00).
- Test: verify JSON parse → Sheet row → trend report → Telegram message.


## 💡 About Margin AI
[Margin AI](https://marginai.co/) is an AI-services agency that acts as your AI Service Companion. We design intelligent, human-centric automation solutions—turning your team’s best practices into scalable workflows and tools. Industries like marketing, sales, and operations benefit from our tailored AI consulting, automation tools, and chatbot development.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Filter, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
