# ⚒️ Introduction to the HTTP tool

> ⚡ **7,212 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n template showcases the new HTTP tool released in version 1.47.0.

Overall, the tool helps simplify AI Agent workflows where custom sub-workflows were performing the same simple http requests.

## Comparisons

### 1. AI agent that can scrape webpages
Remake of https://n8n.io/workflows/2006-ai-agent-that-can-scrape-webpages/

**Changes**:
* Replaces Execute Workflow Tool and Subworkflow
* Replaces Response Formatting


### 2. Allow your AI to call an API to fetch data
Remake of https://n8n.io/workflows/2094-allow-your-ai-to-call-an-api-to-fetch-data/

**Changes**:
* Replaces Execute Workflow Tool and Subworkflow
* Replaces Manual Query Params Definitions
* Replaces Response Formatting

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
