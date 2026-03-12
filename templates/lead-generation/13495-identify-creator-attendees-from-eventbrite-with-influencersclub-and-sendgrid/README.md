# 🎣 Identify creator attendees from Eventbrite with influencers.club and SendGrid

> ⚡ **11 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

How it works:

Get multi social platform data for event attendees with their email and send personalized emails to onboard them as organic creators or ambassadors.

Step by step workflow to enrich event attendees emails from Eventbrite with multi social (Instagram, Tiktok, Youtube, Twitter, Onlyfans, Twitch and more) profiles, analytics and metrics using the influencers.club API and sending personalized partnership outreach via SendGrid.

Set up:

Eventbrite (can be swapped for any event CRM, general CRM or Google Sheet)
Influencers.club
SendGrid (can be swapped for any marketing email sender eg. Mailchimp, drip or programmatic email sender like Mailgun)

## 🔗 Nodes Used

Eventbrite Trigger, SendGrid, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
