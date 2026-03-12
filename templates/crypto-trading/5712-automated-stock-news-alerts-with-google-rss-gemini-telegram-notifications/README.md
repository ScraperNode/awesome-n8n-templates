# 📈 Automated stock news alerts with Google RSS, Gemini & Telegram notifications

> ⚡ **2,219 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 🎯 Purpose
This workflow helps you automatically monitor stock related news, extract the main content, summarize it using a LLM (via OpenRouter), and send real time alerts to Telegram and store them in Google Sheets.

## ⚙️ How It Works
### Trigger
- A Cron node triggers the workflow every 15 minutes (adjustable).
- RSS Feed node checks latest articles from Google Alerts RSS.
- The workflow filters duplicates using Google Sheets as a log.
- The article URL is sent to Jina AI Readability API to extract the main body text.
- The content is summarized using a model from OpenRouter (e.g., Gemini, Claude, GPT-4).
- You can customize the prompt to suit your tone and analysis needs.
- The result is appended to a Google Sheets file.
- Sends the title, summary, and reccomendation to Telegram chat.

**🧾 Google Sheets Template**
Create a Google Sheet using this template: [Stock Alert](https://docs.google.com/spreadsheets/d/109kj97ABR37XviIpxARCFviZwq8opOoe--rayOeFDSo/edit?usp=sharing)

## 🧰 Requirements
- Telegram Bot + your Chat ID
- OpenRouter account and API key
- Jina AI account for content extraction
- Google Account with access to Google Sheets
- Google Alerts RSS feed

## 🛠 Setup Instructions
- Install required credentials:
  - Add OpenRouter API key to n8n credentials.
  - Add Telegram Bot Token and Chat ID.
  - Add Google Sheets credentials.
  - Add Jina AI credentials.
- Create or copy the Google Sheet using the link above.
- Go to Google Alerts, create alerts, and copy the RSS feed URL.
- Replace placeholder API keys and URLs.
- Adjust Telegram Chat ID.

## 🔐 Security Note
All sensitive credentials (e.g., API keys, personal chat IDs) have been removed from this template. Please replace them using the n8n credentials manager before activating the workflow.

## 🔗 Nodes Used

Google Sheets, RSS Read, Telegram, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
