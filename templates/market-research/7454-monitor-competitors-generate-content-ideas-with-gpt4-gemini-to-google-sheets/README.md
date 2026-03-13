# 📊 Monitor competitors & generate content ideas with GPT4 & Gemini to Google Sheets

> ⚡ **251 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

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
