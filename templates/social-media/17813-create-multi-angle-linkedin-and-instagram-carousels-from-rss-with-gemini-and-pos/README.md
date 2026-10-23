# 📱 Create multi-angle LinkedIn and Instagram carousels from RSS with Gemini and PostNitro

> ⚡ **4 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow monitors the TechCrunch RSS feed, uses Google Gemini to generate three distinct LinkedIn content angles per article, then uses PostNitro AI to build a carousel design and schedule matching draft posts for LinkedIn and Instagram, sending Gmail notifications for successes and failures.

## How it works
1. Polls the TechCrunch RSS feed every minute for newly published articles.
2. Sends each article’s title, snippet, and URL to Google Gemini to generate three audience-specific content angles with hooks as structured JSON.
3. Splits the three angles into individual items and limits how many angles are processed per execution.
4. For each angle, uses PostNitro AI to generate a carousel design from the article URL.
5. Creates two PostNitro scheduled-post drafts for the generated design: a LinkedIn document post and an Instagram carousel post, both scheduled for one day later and using the angle hook as the caption.
6. If both drafts are created, emails a Gmail confirmation with the angle details and scheduled statuses; if generation fails, emails an error report with the article link and failed angle.

## Setup
1. Add a Google Gemini (PaLM) API credential and ensure it is selected for the AI step.
2. Add a PostNitro API credential, then set your PostNitro brandId, presetId, templateId, and the target LinkedIn/Instagram account IDs in the two scheduled-post steps.
3. Add a Gmail OAuth2 credential and update the recipient email address(es) for success and failure notifications.
4. Update the RSS feed URL and polling frequency if you want to monitor a different publication or reduce run frequency.
5. Adjust the scheduled time offset (currently “now + 1 day”) and platform settings if you want different posting times or formats.

## 🔗 Nodes Used

Gmail, AI Agent, Structured Output Parser, RSS Feed Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
