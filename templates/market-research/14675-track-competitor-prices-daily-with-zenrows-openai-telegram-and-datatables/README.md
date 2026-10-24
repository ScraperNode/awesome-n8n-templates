# 📊 Track competitor prices daily with ZenRows, OpenAI, Telegram, and DataTables

> ⚡ **22 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Stop checking competitor prices manually.

This workflow monitors product prices across multiple online retailers every day — automatically. The moment a price changes, you get an instant Telegram alert with the product name, old price, new price, and a direct link to the page.

**Set it up once. Let it run forever.**

---

## What it does

- Scrapes product pages daily using ZenRows with JS rendering and residential proxies
- Extracts prices via JSON-LD structured data — works across most major retailers
- Compares each price against the last known value stored in an n8n DataTable
- Tracks full price history for every product over time
- Sends an AI-written summary alert via Telegram only when prices actually change
- Updates all records automatically — no manual database management

---

## What's inside

- Ready-to-import n8n workflow (14 nodes, fully documented with sticky notes)
- Full setup guide — step by step from zero to running in ~15 minutes
- DataTable schema template for instant import
- Sample Amazon product URLs to test immediately after setup

---

## What you need

- n8n (self-hosted or cloud)
- ZenRows API key (web scraping)
- OpenAI API key (alert generation)
- Telegram Bot token

---

## Who it's for

Perfect for e-commerce store owners, small businesses, and anyone who needs to stay on top of competitor pricing without lifting a finger.

---

**P.S.** I actually use this workflow myself to monitor the price of a tablet I want to buy. I simply pasted the product URLs from a few local retailers and now every morning,if any price changed overnight, I get a Telegram message. That's it. No app, no subscription(only Open Ai, zenrows have free tier), no manual checking.

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
