# 📊 Daily competitor WordPress analysis with charts, Gemini & Telegram reporting

> ⚡ **65 views** · 📊 [Market Research & Insights](../)

## Description

## What this workflow does
Every night at 22:00 (Asia/Ho_Chi_Minh), the workflow fetches the latest posts from multiple competitor WordPress RSS feeds, upserts them into Google Sheets, captures a dashboard screenshot (via ApiFlash), has Gemini Vision analyze the chart, and sends a concise insight report to Telegram.

## Details
- Schedule (22:00) → runs daily.
- Fetch RSS → HTTP Request (or RSS Read) pulls each competitor’s /feed/ (standard WordPress RSS).
- Normalize & limit → parse XML → JSON, keep the most recent 5 per site for the digest (you can raise/lower this).
- Upsert to Google Sheets → match on link to avoid duplicates; store fields like guid, site, link, title, excerpt/description, content (if available), pubDate, updated.
- Screenshot the dashboard → ApiFlash captures the Google Sheets dashboard (specific gid) with your line chart of monthly post counts.
- Vision analysis → Gemini 1.5-Flash analyzes the chart image and returns a short executive summary, a Markdown table of values (≈ when estimated), insights, and recommended next steps.
- Telegram push → posts the AI summary (and optionally the screenshot) to your channel/group.


## Who it’s for
- SEO/Content/Marketing teams tracking competitor publishing cadence.
- Founders/PMs who want a nightly snapshot.
- Competitive intelligence and analytics roles.
## Requirements
1. n8n (cloud or self-hosted).
2. Google Sheets OAuth2, Telegram Bot, ApiFlash (access key), Google Gemini access.
3. A Google Sheet with columns similar to: id/guid, site, link, title, excerpt, content, pubDate, updated.
4. Setup
5. Import the workflow JSON into n8n.
6. Switch to RSS:
- Option A (simple): replace HTTP nodes with RSS Read and paste each competitor’s https://{domain}/feed/.
- Option B (keep HTTP): keep HTTP Request nodes, set Response: XML, then parse with XML node.
7. Mapping to Sheets: point to your documentId and sheetName; set matching column = link for upsert.
8. ApiFlash: add access_key and the Sheet URL with the correct gid that shows your chart; set scale_factor=2 (or higher for clarity).
9. Gemini Vision: use model gemini-1.5-flash-latest with the included prompt (English output; Markdown table + insights + recommendations).
10. Telegram: set bot credentials and chatId.
11. Schedule: confirm 22:00 Asia/Ho_Chi_Minh (adjust as needed).
12. Test: run once → verify rows append/update → see dashboard render → receive AI summary in Telegram.


## Extending to more competitors
- Clone an HTTP/RSS node for each additional competitor, update the /feed/ URL, and connect it to the Merge node.
- No other changes are required—new data will be normalized, upserted, included in charts and in the AI summary automatically.
- Tips & gotchas
- WordPress RSS typically includes title, link, pubDate, guid, description, and sometimes content:encoded. If content:encoded is absent, fall back to description.
- Keep the Sheet chart source range dynamic (e.g., open-ended ranges) so new rows are reflected automatically.
- If a site’s RSS limits items, you can run multiple feeds (e.g., category feeds) or capture more history on the first run.


## 💡 About Margin AI
[Margin Ai](http://marginai.co/) is an AI-services agency that acts as your AI Service Companion. We design intelligent, human-centric automation solutions—turning your team’s best practices into scalable workflows and tools. Industries like marketing, sales, and operations benefit from our tailored AI consulting, automation tools, and chatbot development.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
