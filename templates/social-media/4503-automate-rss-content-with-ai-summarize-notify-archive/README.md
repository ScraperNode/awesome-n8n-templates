# 📱 Automate RSS content with AI: summarize, notify & archive

> ⚡ **671 views** · 📱 [Social Media & Email Marketing](../)

## Description

🚀 Product Overview
This n8n workflow template automates the entire lifecycle of RSS feed monitoring—perfect for tech news aggregation, content curation, and AI-powered updates. It reads RSS links from a Google Sheets file, fetches content, summarizes it using GPT, sends digest messages to Discord, and stores clean content into a Google Sheets database for future use.

![Captura de tela 20250529 235305.png](fileId:1419)

🔄 How It Works
✅ 1. Scheduled RSS Fetching
Triggers every 24 hours via Schedule Trigger.

Reads a list of RSS feed URLs from a centralized Google Sheets file.

Splits them for individual processing.

🔍 2. Feed Scanning & Filtering
Loops through each RSS link and retrieves the latest entries.

Filters out content older than 24 hours to avoid duplicates or outdated info.

🤖 3. AI Summarization & Messaging
Aggregates filtered entries.

Summarizes content using an AI Agent (OpenAI Chat Model).

Sends beautifully formatted summaries directly to Discord as a message, keeping your community or team informed.

🗃️ 4. Persistent Storage
Converts each item to Markdown.

Writes entries to a second Google Sheets file, including a rate limiter (wait step) to avoid API limits.

💡 Why Use This Template?
No-code setup: Drag, drop, and deploy in n8n.

AI-powered: Smart summarization reduces content noise.

Discord integration: Great for community managers, news bots, or internal updates.

Database-ready: Stores everything cleanly for later analysis or republishing.

🧩 Use Cases
Daily tech news digest for Discord communities.

Content curation for newsletters.

Competitive intelligence via targeted RSS feeds.

Auto-archiving of blog or podcast updates.

## 🔗 Nodes Used

Google Sheets, RSS Read, Markdown, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
