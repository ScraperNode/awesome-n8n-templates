# 📱 Publish multi-angle LinkedIn and Instagram carousels with Gemini and PostNitro

> ⚡ **4 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow polls the TechCrunch RSS feed for new articles, uses Google Gemini to generate three LinkedIn content angles, then uses PostNitro to create a carousel design and schedule draft posts for LinkedIn and Instagram, sending Gmail notifications on success or failure.

## How it works
1. Polls the TechCrunch RSS feed every minute for new articles.
2. Sends each new article’s title, snippet, and URL to Google Gemini to generate three distinct content angles (audience, angle, and hook) as structured JSON.
3. Splits the three angles into individual items and limits how many angles are processed per run.
4. For each angle, uses PostNitro AI to generate a carousel design from the article URL.
5. Creates two PostNitro scheduled-post drafts for the generated design: a LinkedIn document post and an Instagram carousel post, both scheduled for one day later and using the angle’s hook as caption text.
6. Combines the LinkedIn and Instagram results per angle and emails a Gmail confirmation with the draft statuses and schedule times.
7. If carousel generation fails for an angle, emails a Gmail alert with the error, the article URL, and the angle that was attempted.

## Setup
1. Add a Google Gemini (PaLM) API credential for the LangChain agent.
2. Add a PostNitro API credential and update the brandId, presetId, templateId, and selected account IDs for LinkedIn and Instagram in the PostNitro nodes.
3. Add a Gmail OAuth2 credential and set the recipient email address for success and failure notifications.
4. Confirm the RSS feed URL and polling interval match the source and frequency you want to monitor.
5. Adjust the scheduledAt offset if you want drafts created sooner or later than “+1 day.”

## 🔗 Nodes Used

Gmail, AI Agent, Structured Output Parser, RSS Feed Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
