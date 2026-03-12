# 📊 Automated RSS monitoring with Gemini AI summaries and deduplication to Google Sheets

> ⚡ **3,998 views** · 📊 [Market Research & Insights](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Who's it for

Content creators, marketers, and researchers who need to monitor multiple RSS feeds and get AI-generated summaries without manual work.

## How it works

This workflow automatically monitors RSS feeds, filters new articles from the last X days, checks for duplicates, and generates structured AI summaries. It fetches full article content, converts HTML to markdown, and uses Gemini AI to create consistent summaries with quick takeaways, key points, and practical insights. All data is saved to Google Sheets for easy access and sharing.

The system processes RSS feeds in batches, ensuring no duplicate articles are processed twice by checking existing URLs in your Google Sheets. Each new article gets a comprehensive AI summary that includes the main message, key takeaways, important points, and practical applications.

## Requirements

- Google Sheets access
- OpenRouter API key for Gemini AI model or other language model
- RSS feed URLs to monitor

## How to set up

Copy the template Google Sheet, add your RSS feeds in the "RSS FEEDS" tab, configure Google Sheets and OpenRouter credentials in n8n, and adjust the time filter in the Settings node. The workflow can run manually or on schedule every hour.

## How to customize

Modify AI prompts for different summary styles, change the time filter duration, add more data fields to Google Sheets, or switch to a different AI model in the LLM Chat Model node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Markdown, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
