# 📊 Track competitor pricing and launches with DeepSeek, Slack and Google Sheets

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Competitor alerts you can actually act on. This workflow snapshots each watched pricing or launch page on its own cadence, and only lets a page that genuinely changed reach AI, which has to hand back quoted evidence before anything lands in Google Sheets or Slack.

*Last updated: September 2026.*

## Quick Overview
This workflow verifies competitor pricing and launch changes instead of sending generic monitoring alerts. It loads prior page snapshots and past change events, watches each configured pricing or launch URL on its own cadence, and records a normalized page hash plus price anchors on every valid check. Only an eligible changed page reaches DeepSeek, which must return quoted evidence for a real price or launch delta. Material events are deduplicated, severity-scored, logged to Google Sheets, and sent to Slack. A Friday pricing and launch brief summarizes verified changes only.

## How it works
1. The scheduled watch run loads the Watch History and Change Event history, then expands the configured competitors with their watch URL, watch type, cadence, threshold, launch keywords, and price terms.
2. Each page is fetched, normalized to remove volatile boilerplate, hashed deterministically, and scanned for price-like anchors. The workflow compares that result with the competitor's latest Watch History row and honors cadence_days.
3. Every valid check is appended to Watch History. Unchanged pages, baseline checks, and checks that are not yet due stop before AI.
4. For a changed page, DeepSeek returns a strict JSON price or launch delta with before/after values, billing details, evidence quote, and confidence, or explicitly returns no event.
5. A deterministic fingerprint deduplicates the event. Severity and alert_threshold route only material price increases, price decreases or promos, new plans, and launches to Slack and Change Events. Price events also append to Price History.
6. The Friday run reads Change Events, so the email and Slack pricing and launch brief excludes unchanged checks.

## Setup
1. Create Google Sheets tabs named Watch History, Sightings, Price History, and Errors. Update the Sheet ID in every Google Sheets node.
2. Connect Google Sheets, OpenAI, Slack, and Gmail credentials. Set the Slack channel and Friday brief recipient.
3. In Watch Config, replace the example competitors and set watch_url, watch_type, cadence_days, alert_threshold, launch_keywords, and price_terms for each one.
4. Run once to establish baseline snapshots, then run again after a real page change to test the alert path.
5. Optional floating nodes are intentionally disconnected: connect Email Executive on High Severity or Send Event to Another System after Score and Deduplicate Event when you want those extensions.

### Quick Answers
**Why not just alert on every page change?**
Every check is normalized, hashed, and compared with the competitor's latest Watch History row. Unchanged pages, baseline checks, and checks that are not yet due by cadence_days stop before AI.

**What proof does the AI have to give?**
For a changed page, DeepSeek must return a strict JSON price or launch delta with before and after values, billing details, an evidence quote, and confidence, or explicitly report that there is no event.

**Where do verified changes go?**
A deterministic fingerprint deduplicates the event, and severity plus alert_threshold route only material price increases, price decreases or promos, new plans, and launches into Slack and the Change Events sheet. Price events also append to Price History.

**What does the Friday brief contain?**
It reads the Change Events sheet, so the Slack and email pricing and launch brief summarizes verified changes only.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
