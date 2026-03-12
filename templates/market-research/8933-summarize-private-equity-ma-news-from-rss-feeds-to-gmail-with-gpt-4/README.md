# 📊 Summarize private equity & M&A news from RSS feeds to Gmail with GPT-4

> ⚡ **532 views** · 📊 [Market Research & Insights](../)

## Description

## Who’s it for
This template is for professionals, students, and investors who want a simple daily finance briefing. It is useful for anyone who follows private equity, mergers & acquisitions, and general market news but prefers short summaries instead of reading long articles.

## How it works
The workflow runs twice a day using a schedule trigger (default 09:00 and 15:00). It pulls articles from three RSS feeds: NYT Private Equity, DealLawyers M&A, and Yahoo Finance. The items are merged and limited to the five most recent stories. A code node formats them into a clean block of text. An AI Agent rewrites each article into a short, engaging 5–6 sentence summary. The results are delivered directly to your inbox via Gmail.

## How to set up
1. Add your Gmail credential and replace `{{RECIPIENT_EMAIL}}` with your email.  
2. Insert your OpenAI API key.  
3. (Optional) Replace the RSS feed URLs with your preferred sources.  
4. Adjust the schedule times if needed.

## Requirements
- n8n v1.112+  
- Gmail credential  
- OpenAI API key  

## How to customize
You can add more feeds, increase the number of articles, or translate summaries into another language. You can also deliver the summaries to Slack, Notion, or Google Sheets instead of email.

## 🔗 Nodes Used

RSS Read, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
