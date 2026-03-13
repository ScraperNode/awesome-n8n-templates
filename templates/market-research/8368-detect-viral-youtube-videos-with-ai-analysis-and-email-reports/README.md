# 📊 Detect viral YouTube videos with AI analysis and email reports

> ⚡ **1,177 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## Analyze YouTube videos for virality with an AI-powered report

This workflow automates the discovery and analysis of potentially viral YouTube videos. It searches for recent, popular videos based on a keyword, calculates a unique **"Algorithmic Lift Score"** to measure virality, and uses an AI agent to generate an insightful summary report that is sent directly to your email.

## What it does

This workflow identifies videos that are outperforming their channel's baseline, a key indicator of viral potential. It operates in several stages:
1.  **Searches YouTube:** It finds recent, top-performing videos based on your specified keyword and timeframe.
2.  **Gathers Data:** For each video found, it fetches detailed statistics for both the video (views, likes, comments) and its channel (subscriber count, total views).
3.  **Calculates Virality Score:** It calculates an "Algorithmic Lift Score" for each video. This custom metric prioritizes videos that achieve high view counts and engagement relative to their channel's subscriber base.
4.  **Analyzes with AI:** The top 5 videos, sorted by their virality score, are sent to an AI agent (pre-configured for OpenAI). The AI generates a concise summary highlighting trends, top performers, and other noteworthy patterns.
5.  **Sends Email Report:** The final AI-generated analysis is converted to HTML and emailed to you, providing a ready-to-read report on what's trending in your niche.

## Who it's for

This workflow is perfect for:
*   **Content Creators** looking for trending topics and content ideas.
*   **Digital Marketers** conducting competitor analysis or market research.
*   **Social Media Managers** wanting to understand what content resonates on YouTube.
*   **Data Analysts** who need to automate the collection and analysis of YouTube trends.

## Requirements

*   A **Google API Key** with the "YouTube Data API v3" enabled.
*   An **OpenAI API Key** (or another compatible AI model credential).
*   A connected **Gmail account** in n8n to send the final report.

## How to set up

1.  **Configure the `Setup` Node:** Click on the "Setup" node and fill in the values:
    *   `query`: The keyword you want to search for (e.g., "AI tools").
    *   `GoogleAPIkey`: Your Google API key.
    *   `daysback`: How many days in the past to search for new videos.
    *   `maxResult`: The number of videos to analyze (e.g., 20).
    *   `email`: The email address where the report will be sent.
2.  **Set AI Credentials:** Click the "OpenAI Chat Model" node and add your OpenAI API key to the credentials.
3.  **Set Gmail Credentials:** Click the "Send_Report" node and connect your Gmail account to the credentials.

## 🔗 Nodes Used

HTTP Request, Gmail, Markdown, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
