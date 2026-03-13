# 📊 Monitor eBay deals with GPT-4 scoring,Decodo & Telegram notifications

> ⚡ **139 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## What this workflow does

This workflow automatically monitors **eBay Deals** and sends **Telegram alerts** when relevant, high-quality deals are detected.

It combines:
- **Web scraping with Decodo**
- **JavaScript pre-processing (no raw HTML sent to the LLM)**
- **AI-based product classification and deal scoring**
- **Rule-based filtering using price and score**

Only valuable deals reach the final notification.

## How it works (overview)

1. The workflow runs manually or on a schedule.
2. The eBay Deals page is scraped using **Decodo**, which handles proxies and anti-bot protections.  
[Decodo – Web Scraper for n8n](https://visit.decodo.com/raqXGD)
3. JavaScript extracts only key product data (ID, title, price, URL, image).
4. An AI Agent classifies each product and assigns a deal quality score (0–10).
5. Price and score rules are applied.
6. Matching deals are sent to Telegram.


## How to configure it

### 1. Decodo
- Add your **Decodo API credentials** to the Decodo node.
- Optionally change the target eBay URL.

### 2. AI Agent
- Add your LLM credentials (e.g. Google Gemini).
- No HTML is sent to the model — only compact, structured data.

### 3. Telegram
- Add your **Telegram Bot Token**.
- Set your **chat_id** in the Telegram node.
- Customize the alert message if needed.

### 4. Filtering rules
- Adjust price limits and minimum deal score in the **IF node**

## 🔗 Nodes Used

Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
