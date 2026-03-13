# 📊 Scrape and summarize webpages with AI

> ⚡ **378,326 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow integrates both web scraping and NLP functionalities. It uses HTML parsing to extract links, HTTP requests to fetch essay content, and AI-based summarization using GPT-4o. It's an excellent example of an end-to-end automated task that is not only efficient but also provides real value by summarizing valuable content.

Note that to use this template, you need to be on n8n version 1.50.0 or later.

## 🔗 Nodes Used

HTTP Request, Summarization Chain, OpenAI Chat Model, Recursive Character Text Splitter, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
