# 📊 Find daily Amazon India bestsellers with Apify and Google Sheets (4%+ commission)

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who's it for

Indian Amazon affiliate marketers, content creators, and dropshipping researchers who waste hours every morning hunting for trending products — only to pick items that pay 1% commission on electronics. This workflow does that hunt for you and only surfaces products that pay 4% or more.

## How it works

Every morning at 08:02 IST, the workflow:

1. **Detects the current Indian retail season** — Summer (Mar–May), Monsoon (Jun–Aug), Festive/Diwali (Sep–Nov), or Winter (Dec–Feb) — and randomly picks one matching Amazon Bestsellers category for the day.
2. **Scrapes the top 50 products** from that category page via the Apify Amazon Bestsellers actor, with a hard $0.05/run cost cap so your daily spend stays predictable.
3. **Scores every product** against a 4-layer formula: category commission rate (drops anything under 4%), review count, average rating, and seasonal keyword match in the title.
4. **Saves the Top 10 winners** to a Google Sheet with status = `Pending`, ready for any downstream content or posting workflow to pick up.

The output sheet is pre-structured with status columns for Facebook, Instagram, LinkedIn, Twitter, Threads, and YouTube — so it slots cleanly into a multi-platform affiliate content engine.

## How to set up

Total setup time: ~10 minutes.

- Install the Apify community node (`@apify/n8n-nodes-apify`) from Settings → Community Nodes.
- Add your Apify API credential and select it inside the Apify nodes.
- Create a Google Sheet with the column headers listed in the Setup sticky note on the canvas, then paste your Sheet ID into the final node.
- Connect a Google Sheets OAuth2 credential.
- Activate the workflow.

Full step-by-step instructions are in the colored sticky notes on the canvas.

## Requirements

- Apify account (free tier is enough).
- Google account with Sheets access.
- Apify community node installed in your n8n instance.

## How to customize

- Edit the seasonal category map in the **Seasonal Category Selector** Code node to target other countries (just swap `amazon.in` URLs for `amazon.com`, `amazon.co.uk`, etc.) or to focus on a single niche.
- Tweak the commission percentage map and minimum-commission floor in the **Score & Select Top 10** Code node to match your region's affiliate rates.
- Change the Schedule Trigger to run multiple times a day, or only on weekdays, depending on your content cadence.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
