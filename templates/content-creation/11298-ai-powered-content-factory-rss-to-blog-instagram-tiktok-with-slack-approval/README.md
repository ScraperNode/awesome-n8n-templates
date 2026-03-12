# 🎬 AI-powered content factory: RSS to blog, Instagram & TikTok with Slack approval

> ⚡ **7,864 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the daily content creation process by monitoring trends, generating drafts for multiple platforms using AI, and requiring human approval before saving.

It acts as an autonomous "AI Content Factory" that turns raw news into polished content for SEO Blogs, Instagram, and TikTok/Reels.

## How it works
1. **Trend Monitoring:** Fetches the latest trend data via RSS (e.g., Google News or Google Trends).
2. **AI Filtering:** An AI Agent acts as an "Editor-in-Chief," selecting only the most viral-worthy topics relevant to your niche.
3. **Multi-Format Generation:** Three specialized AI Agents (using `gpt-4o-mini` for cost efficiency) run in parallel to generate:
    - An SEO-optimized Blog post structure.
    - An Instagram Carousel plan (5 slides).
    - A Short Video Script (TikTok/Reels).
4. **Human-in-the-Loop:** Sends a formatted message with interactive buttons to Slack. The workflow waits for your decision.
5. **Final Storage:** If approved, the content is automatically appended to Google Sheets.

## Who is this for
- Social Media Managers & Content Creators
- Marketing Agencies managing multiple accounts
- Anyone wanting to automate "research to draft" without losing quality control.

## Requirements
- **n8n:** Version 1.19.0+ (requires AI Agent nodes).
- **OpenAI:** API Key (works great with low-cost `gpt-4o-mini`).
- **Slack:** A workspace to receive notifications.
- **Google Sheets:** To store the approved content.

## How to set up
1. **Configure Credentials:** Set up your OpenAI, Slack, and Google Sheets credentials.
2. **Slack App:** Create a Slack App, enable "Interactivity," and set the Request URL to your n8n Production Webhook URL. Add the `chat:write` scope and install it to your workspace.
3. **Google Sheet:** Create a sheet with columns for `Blog`, `Instagram`, and `Script` (row 1 as headers).
4. **RSS Feed:** Change the RSS node URL to your preferred topic source.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
