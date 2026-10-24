# 🎫 Draft Google review replies with Bright Data, GPT-5.6, Google Sheets and Slack

> ⚡ **12 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Runs daily to find unanswered Google Business Profile reviews, pulls local competitor ratings and review snippets from Bright Data, uses OpenAI to draft reply text with escalation flags, logs drafts to Google Sheets and posts a digest to Slack, optionally publishing safe replies back to Google.

## How it works
1. Runs every day at 09:00 on a schedule.
2. Fetches up to the configured number of Google Business Profile reviews and keeps only those without an existing owner reply.
3. If there are unanswered reviews, triggers a Bright Data Google Maps discovery for the configured business category and city, polls until the snapshot is ready, and downloads the local competitor results.
4. Builds a local benchmark from the competitor dataset (ratings, review counts, and positive review excerpts) and attaches that context to each unanswered review.
5. Sends each review plus the local benchmark to OpenAI to extract a structured draft reply, a short theme, and whether the review should be escalated to a human.
6. Applies guardrails (missing/too-long draft, low-star reviews, or escalation flag) to decide whether each reply is held or, when auto-reply is enabled, posted back to Google Business Profile.
7. Creates a Slack digest of all drafts and their status, and appends each reply row to a Google Sheets “Replies” sheet for record keeping.

## Setup
1. Add Google Business Profile credentials and set your account and location IDs (and business name) in the Settings values.
2. Add a Bright Data Web Scraper API key (HTTP header auth) and set business_category, city, country, and rivals_to_compare in Settings.
3. Add an OpenAI credential and confirm the model setting (gpt-5.6-terra) is available in your account.
4. Add Slack credentials and set the target channel (for example, #reviews) in the Slack message step.
5. Add Google Sheets credentials, set the destination spreadsheet URL/ID, and ensure a “Replies” sheet exists to append rows.
6. Leave auto_reply set to false until you review the drafted replies and are ready to allow automatic public posting.

## Requirements
- A Google Business Profile with review access, a Bright Data account with the Google Maps dataset, plus OpenAI, Google Sheets and Slack credentials.

## Customization
- Three optional add-ons ship unwired beside the main chain, so you can plug in whichever fits your business: Escalate 1-Star Reviews By Email mails an owner directly, Translate Replies First matches the reviewer's language, and Telegram Ping On New Review replaces the Slack digest.
- auto_reply ships off, so every reply is drafted and held for a person until you turn it on. Tune min_stars_to_auto_reply, max_reply_length and rivals_to_compare in Settings.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
