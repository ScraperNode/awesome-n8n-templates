# 🎣 Enrich creator handles with cross-platform social data from influencers.club

> ⚡ **42 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

How it works:

Get multi social platform data for creators from one social handle.

Step by step workflow to enrich influencer contacts with multi social (Instagram, Tiktok, Youtube, Twitter, Onlyfans, Twitch and more) profiles, analytics and metrics using the influencer.club API

Set up:
- Supabase (can be swapped for any DB)
- Influencers.club

## 🔗 Nodes Used

HTTP Request, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
