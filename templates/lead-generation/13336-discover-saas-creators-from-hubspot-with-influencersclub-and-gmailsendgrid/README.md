# 🎣 Discover SaaS creators from HubSpot with influencers.club and Gmail/SendGrid

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

How it works:

Get multi social platform data for SaaS clients with their email and send personalized comms to onboard them as organic creators, partners and ambassadors.

Step by step workflow to enrich customer emails with multi social (Instagram, Tiktok, Youtube, Twitter, Onlyfans, Twitch and more) profiles, analytics and metrics using the influencers.club API and sending tailored outreach to activate them as creators.

Set up:

Hubspot (can be swapped for any CRM like Salesforce, Attio or DB)
Influencers.club
Gmail
Sendgrid (can be swapped for any programmatic email sender like Mailgun)

## 🔗 Nodes Used

HubSpot, HubSpot Trigger, Gmail, SendGrid, Stop and Error, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
