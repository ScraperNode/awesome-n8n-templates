# 📱 Automated RSS to Telegram publisher with Groq AI rewriting

> ⚡ **951 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Telegram RSS Autoposter

This workflow monitors multiple RSS feeds, detects new posts, rewrites them using AI, and sends the formatted output to your Telegram account. It helps you keep your Telegram feed active with clear, polished, and ready-to-publish content — all fully automated.

## How It Works

- A scheduled trigger runs every 30 minutes and loads all RSS feed URLs from an n8n Data Table.  
- Each feed is fetched, and only the most recent item is selected.  
- The workflow checks whether this post has already been processed.  
  - If it’s new, the link is stored in a second Data Table used for deduplication.  
- A Groq LLM rewrites the article text so it stays within Telegram’s limits and has clean, readable formatting.  
- The final message is sent to your Telegram account.

## Requirements

- Groq API key  
- Telegram bot token and your Telegram user ID  
- Two n8n Data Tables:
  - One for RSS feed URLs  
  - One for processed post links

## How to Set Up

1. Add your RSS URLs to the Data Table.  
2. Insert your Groq API key into the Groq node.  
3. Add your Telegram bot token and user ID to the Telegram node.  
4. Adjust the schedule trigger interval if needed.

## Customization Ideas

- Replace the schedule trigger with a webhook for manual on-demand checks.  
- Change the AI prompt for a different tone or formatting style.  
- Send messages to a Telegram channel instead of a private chat.  
- Add keyword filters to send only specific articles.

## 🔗 Nodes Used

RSS Read, Telegram, Schedule Trigger, AI Agent, Groq Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
