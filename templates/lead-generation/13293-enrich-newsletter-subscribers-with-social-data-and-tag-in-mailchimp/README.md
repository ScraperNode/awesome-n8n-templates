# 🎣 Enrich newsletter subscribers with social data and tag in Mailchimp

> ⚡ **18 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

How it works:

Get multi social platform data for newsletter subscribers with their email and tag them to enter organic creator, partner and ambassador workflows.

Step by step workflow to enrich subscriber emails with multi social (Instagram, Tiktok, Youtube, Twitter, Onlyfans, Twitch and more) profiles, analytics and metrics using the influencers.club API and tagging them on Mailchimp to route campaigns.

Set up:

Mailchimp (can be swapped for any email marketing sender eg. ActiveCampaign)
Influencers.club API

## 🔗 Nodes Used

Mailchimp, Mailchimp Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
