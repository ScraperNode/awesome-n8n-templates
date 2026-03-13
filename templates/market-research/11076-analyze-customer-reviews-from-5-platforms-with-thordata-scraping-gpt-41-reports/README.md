# 📊 Analyze Customer Reviews from 5 Platforms with Thordata Scraping & GPT-4.1 Reports

> ⚡ **270 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Automatically gather hundreds of real customer reviews from five major platforms in one run using [Thordata](https://www.thordata.com/?ls=n8n&lk=reviewmonitor) API and Proxy — Trustpilot, Capterra, Chrome Web Store, TrustRadius, and Product Hunt — then let GPT-4.1 perform deep collective sentiment analysis, uncover common praises & complaints, flag critical issues, assess churn risk, and deliver actionable recommendations straight to your inbox as a stunning executive HTML report.

## Who’s it for
- Product managers & founders  
- Growth and marketing teams  
- Customer success & support leads  
- Agencies delivering competitor or product review reports

## How it works
1. Submit product URLs via form, webhook, or use defaults  
2. Smart, Cloudflare-safe scraping with automatic pagination  
3. Universal parser standardizes every review format  
4. Global deduplication using deterministic unique IDs  
5. GPT-4.1 analyzes all reviews collectively (not one-by-one)  
6. Beautiful responsive HTML email with sentiment badges, stats, and recommendations

## Requirements
- [Thordata](https://www.thordata.com/?ls=n8n&lk=reviewmonitor) API key (free tier works) → set as HTTP Header Auth credential  
- OpenAI API key  
- Gmail account (or replace with any email node)

## How to set up
1. Add your Thordata and OpenAI credentials  
2. Connect Gmail  
3. Click “Execute Workflow” – instantly tests with Thordata’s own reviews

## How to customize
- Edit default product in “Prepare Review Sources” node  
- Modify the AI prompt or email design anytime  
- Add more sources or change the output format easily

Zero browser automation · Rate-limit safe · Fully deduplicated · Plug-and-play in minutes.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
