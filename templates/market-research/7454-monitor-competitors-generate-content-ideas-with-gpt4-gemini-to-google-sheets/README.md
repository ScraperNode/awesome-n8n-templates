# 📊 Monitor competitors & generate content ideas with GPT4 & Gemini to Google Sheets

> ⚡ **251 views** · 📊 [Market Research & Insights](../)

## Description

## Who’s it for
Women creators, homemakers-turned-entrepreneurs, and feminine lifestyle brands who want a graceful, low-lift way to keep an eye on competitor content and spark weekly ideas.

## What it does
On a weekly schedule, this workflow crawls your competitor URLs with **Firecrawl** (HTTP Request), summarizes each page with **OpenAI**, brainstorms carousel/pin ideas with **Gemini**, appends results to **Google Sheets** (Date, URL, Title, Summary, Ideas), and sends you a single email digest (optional Telegram alert). It includes basic error notifications and a setup-friendly config node.

## Requirements
- **HTTP credentials** for Firecrawl, OpenAI, and Gemini (no keys in nodes)
- **Google Sheets** OAuth credential
- A Sheets document with a target sheet/range (e.g., `Digest!A:F`)
- (Optional) Telegram bot + chat ID

## How to set up
1. Open **Set: Configuration (edit me)** and fill:
   - `competitorUrls` (one per line), `sheetsSpreadsheetId`, `sheetsRange`,
     `ownerEmail`, `emailTo`, `geminiModel`, `openaiModel`
2. Attach credentials to the HTTP and Sheets nodes.
3. Test by switching **Cron** to **Every minute**, then revert to weekly.

## How it works
Cron → Firecrawl (per URL) → Normalize → OpenAI (summary) + Gemini (ideas) → Merge → Compile Row → Google Sheets append → Build one digest → Email (+ optional Telegram).

## How to customize
- Add/remove competitors or change the weekly send time.
- Tweak the OpenAI/Gemini prompts for your brand voice.
- Expand columns in Sheets (e.g., category, tone, CTA).
- Swap email/Telegram for Slack/Notion, or add persistent logs.

## 🔗 Nodes Used

Cron, Send Email, Google Sheets, HTTP Request, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
