# 📊 Generate content strategy insights from Reddit & X using Gemini AI analysis

> ⚡ **232 views** · 📊 [Market Research & Insights](../)

## Description

## Who’s it for
This template is perfect for content creators, marketers, solopreneurs, agencies, and social media strategists who want to understand what audiences are talking about online. It helps teams quickly turn broad topics into structured insights, trend opportunities, and actionable content ideas.

## What it does / How it works
This workflow begins with a form where the user enters a single topic.  
An AI agent expands the topic into subtopics and generates multiple relevant keywords.  
For each keyword, the workflow automatically gathers content from Reddit and X (formerly Twitter), extracting posts, titles, text, engagement metrics, and links.

Each collected post is then analyzed by an AI model to determine:

- Trend potential  
- Audience relevance  
- Platform suitability  
- Recommended content formats  
- Categories and keywords  

Once all posts are processed, a final AI agent synthesizes the results, identifies the strongest emerging trends, groups similar insights, and generates strategic content recommendations.

## Requirements
- Google Gemini (PaLM) API credentials  
- X / Twitter OAuth2 credentials  
- Access to the n8n Form Trigger (publicly accessible URL)

## How to set up
1. Connect your Gemini API and Twitter API credentials.  
2. Make sure the Form Trigger node is accessible.  
3. Review and adjust the AI prompts if you want different output formats.  
4. Run the form, enter a topic, and execute the workflow.

## How to customize the workflow
- Add more platforms (YouTube, TikTok, Instagram, Hacker News)  
- Add sentiment scoring or engagement ranking  
- Export insights to Google Sheets or Notion  
- Generate ready-to-post content from the trends

## 🔗 Nodes Used

HTTP Request, X (Formerly Twitter), AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
