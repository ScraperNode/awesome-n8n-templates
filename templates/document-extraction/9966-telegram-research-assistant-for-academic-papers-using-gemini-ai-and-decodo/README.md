# 🔬 Telegram research assistant for academic papers using Gemini AI and Decodo

> ⚡ **550 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## AI Research Assistant Using Gemini AI and Decodo

Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

This workflow transforms your Telegram bot into a smart academic research assistant powered by Gemini AI and Decodo. It analyzes queries, interprets URLs, scrapes scholarly data, and returns concise summaries of research papers directly in chat.

## Who’s it for?
For researchers, students, and AI enthusiasts who want to search and summarize academic content via Telegram using Google Scholar and arXiv.

## How it works
1. The Telegram bot captures text, voice, or image messages.
2. Gemini models interpret academic URLs and user intent.
3. Decodo extracts paper details like titles, abstracts, and publication info.
4. The AI agent summarizes results and delivers them as text or file (if too long).

## How to set up
- Add your Telegram bot credentials in the `Start Telegram Bot` node.
- Connect Google Gemini and Decodo API credentials.
- Replace `{{INPUT_SEARCH_URL_INSIGHTS}}` placeholder on `Research Summary Agent`'s system message with your search URL insights (or use the pinned example).
- Test by sending a text, image, or voice message to your bot.
- Activate the workflow to run in real-time.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Basic LLM Chain, Simple Memory, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
