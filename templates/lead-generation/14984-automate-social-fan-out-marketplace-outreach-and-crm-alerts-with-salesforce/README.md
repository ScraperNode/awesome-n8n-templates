# 🎣 Automate social fan-out, marketplace outreach, and CRM alerts with Salesforce

> ⚡ **135 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

⚠️ Heads up: this is satire. The "Hell Yeah!" workflow is a parody of "automate your whole life with AI agents" grindset content. The API endpoints are fictional and the function nodes are illustrative stubs. It's published as a template because the patterns underneath the joke — multi-channel social fan-out, marketplace scraping with follow-up sequences, CRM sync with chat alerts, cron-triggered daily chains — are genuinely useful starting points for n8n agencies building real lead-gen flows. Swap the jokes for your actual integrations and you've got a working skeleton.

How it works

A Rise and Grind cron kicks off a parallel "daily lifestyle" routine every morning
A gambling → flex chain runs arbitrage math against a fake sportsbook and fans the "wins" out to Instagram, TikTok, Facebook, Threads, LinkedIn, and Twitter in one blast (this is the reusable multi-channel social posting pattern)
A Facebook Marketplace lowball engine scrapes listings, filters them, fires templated lowball offers, and runs a relentless follow-up sequence (reusable pattern: scraper → filter → outreach → nurture)
An eBay arbitrage loop finds profitable items, relists them, and logs every transaction to Google Sheets
A Salesforce + Telegram branch handles "deal alerts" — the standard CRM-sync-with-chat-notification pattern every agency ships
Extra satirical branches (Tinder auto-booking, Uber Black to the casino, steak delivery, playing Alice in Chains) are there for the bit — delete or replace them

Set up steps

Takes about 15–20 minutes if you're just importing to read through the patterns
Takes 1–2 hours if you're stripping out the satirical branches and wiring the reusable patterns (social fan-out, marketplace outreach, CRM+Telegram) to your real credentials
Replace every fictional HTTP endpoint with your actual API before activating
Add credentials for whichever real nodes you keep: Salesforce, Telegram, Google Sheets, WhatsApp, Facebook Graph
Detailed notes for each section live in the sticky notes inside the workflow itself

## 🔗 Nodes Used

Cron, Function, Google Sheets, HTTP Request, Telegram, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
