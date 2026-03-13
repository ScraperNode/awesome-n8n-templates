# 📊 Landing page conversion optimizer with Gemini 2.5-pro & Telegram

> ⚡ **825 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

🛠️ Landing-Page Roast & CRO Ideas Bot – Quick Guide
What this workflow does

    Takes any public landing-page URL.

    Scrapes the page content.

    Uses Gemini 2.5-pro to
    • Roast the page (friendly but brutally honest)
    • Give 10 high-impact, 2024-ready CRO ideas – all in Turkish, max 3 000 characters.

    Sends the result back to you on Telegram.

Two ways to trigger it

1. Web form
• Open the form titled “Conversion Rate Optimizer.”
• Paste your landing-page URL(with https or http in front of it).
• Click Submit.

2. Telegram (fastest)
• Send the URL in a DM to @MertSiteRaporBot.
• Forgot the “https://”? No worries—the bot adds it automatically.
Behind the scenes

• Code node normalises the URL.
• HTTP Request scrapes the page HTML.
• AI Agent (Gemini) produces the Roast + Recommendations.
• Telegram node sends the formatted reply to you.
Usage tips

• One URL per request.
• Page must be publicly accessible (no login).
• Very long pages may be trimmed to fit model limits.
• Output language is always Turkish.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
