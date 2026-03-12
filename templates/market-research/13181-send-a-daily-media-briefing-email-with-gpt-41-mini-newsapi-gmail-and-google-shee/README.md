# 📊 Send a daily media briefing email with GPT-4.1-mini, NewsAPI, Gmail and Google Sheets

> ⚡ **36 views** · 📊 [Market Research & Insights](../)

## Description

This workflow creates a daily media briefing based on public news sources. It retrieves relevant articles, summarizes key coverage, evaluates sentiment, and compares the current media volume against historical data. If an unusual spike in coverage is detected, the agent autonomously performs additional research and highlights the anomaly in the briefing. The result is sent as a structured HTML email, ready for executive consumption.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
