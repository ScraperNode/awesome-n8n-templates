# 📊 Monitor website changes and send diff alerts via Telegram and email

> ⚡ **40 views** · 📊 [Market Research & Insights](../)

## Description

## **Who is this for**


This workflow is ideal for marketers, product managers, competitive intelligence teams, and anyone who needs to track changes on web pages — whether it's competitor pricing, job postings, policy updates, product pages, or any content that matters to your business.


## **What this workflow does**


It automatically monitors a list of URLs on a schedule, fetches each page, extracts clean text content, compares it against the previous snapshot stored in Google Sheets, generates a detailed line-by-line diff with change percentage and severity rating, and sends instant alerts via Telegram and email when changes are detected.


## **How it works**


- Schedule Trigger checks your target URLs at a configurable interval (default: every 4 hours).
- URL List node defines which pages to monitor — easily add or remove URLs without touching other nodes.
- HTTP Request fetches the current HTML content of each page with browser-like headers.
- Content Extractor strips HTML tags, scripts, styles, and navigation to get clean readable text, plus extracts page title and meta description.
- Load Previous Snapshot reads the last saved version from Google Sheets for comparison.
- Diff Engine compares current vs. previous content line-by-line, calculates a change percentage, assigns a severity level (low/medium/high/critical), and generates a human-readable diff summary showing exactly what was added or removed.
- Change Filter only passes through pages that actually changed — no noise, no false alerts.
- Save Snapshot stores the new version in Google Sheets for the next comparison cycle.
- Telegram + Email Alerts send formatted notifications with the diff summary, change percentage, severity, and a direct link to the page.


## **Setup steps**


- Add URLs — Edit the "URL List" code node and add your target URLs. Each entry needs a name (friendly label) and url (full URL). Optionally add a selector keyword to focus on specific page sections.
- Google Sheets — Create a new spreadsheet with a sheet named "website" and columns: Name, url, selector, pageTitle, metaDescription, cleanText, contentHash, contentLength, fetchedAt, httpStatus. Connect your Google Sheets OAuth credential and set the spreadsheet ID in both Sheet nodes.
- Telegram — Create a bot via @BotFather, get your Bot Token and Chat ID. Connect the Telegram credential and set your Chat ID in the Telegram Alert node.
- Email (optional) — Connect your SMTP or Gmail credential in the Email Alert node and set your from/to addresses.
- Schedule — Adjust the cron interval in the trigger node (every 1 hour for critical pages, every 24 hours for low-priority).
- First Run — Run the workflow manually once to save baseline snapshots. Change detection begins from the second run onward.

## **Requirements**


- Google Sheets account with OAuth credentials
- Telegram bot (created via @BotFather) with bot token and chat ID
- SMTP or Gmail credentials for email alerts (optional)
- n8n instance (cloud or self-hosted)


## **How to customize**


- Add CSS selector keywords in the URL List to monitor only specific sections of a page (e.g., pricing tables, job listings).
- Increase check frequency to every 15 minutes for critical monitoring.
- Add Slack, Discord, or WhatsApp as additional alert channels by branching from the Save Snapshot node.
- Use AI (OpenAI, Ollama) to summarize changes in plain language instead of raw diff output.
- Monitor API endpoints (JSON responses) by adjusting the Content Extractor logic.
- Add multiple sheets for different monitoring categories (competitors, pricing, legal, careers).

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
