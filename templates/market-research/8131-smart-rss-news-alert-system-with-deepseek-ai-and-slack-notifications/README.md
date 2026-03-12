# 📊 Smart RSS news alert system with DeepSeek AI and Slack notifications

> ⚡ **722 views** · 📊 [Market Research & Insights](../)

## Description

## How it works  
This workflow fetches articles from any RSS feed, processes them with an AI model (DeepSeek), and sends only the most relevant alerts directly to Slack.  

- Normalizes and deduplicates RSS items  
- Extracts article text and cleans HTML  
- Summarizes and classifies with AI (sentiment + flags)  
- Filters out irrelevant news  
- Sends real-time alerts to your Slack channel  

## Setup steps  
- Add your Slack Bot Token (via Slack API)  
- Add your DeepSeek API Key  
- Import this workflow into n8n  
- Deploy and start receiving smart news alerts in Slack  

## Use case  
Perfect for tracking **AI, startups, finance, and tech industry news** without the noise.  

---

![Slack Preview](https://raw.githubusercontent.com/TuguiDragos/RssAiNewsClassifier/refs/heads/main/Message.png)

## 🔗 Nodes Used

HTTP Request, Slack, Basic LLM Chain, RSS Feed Trigger, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
