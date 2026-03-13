# 🔧 Recipe recommendations with Qdrant and Mistral

> ⚡ **7,054 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n workflow demonstrates creating a recipe recommendation chatbot using the Qdrant vector store recommendation API.

Use this example to build recommendation features in your AI Agents for your users.

## How it works

* For our recipes, we'll use HelloFresh's weekly course and recipes for data. We'll scrape the website for this data.
* Each recipe is split, vectorised and inserted into a Qdrant Collection using Mistral Embeddings
* Additionally the whole recipe is stored in a SQLite database for later retrieval.
* Our AI Agent is setup to recommend recipes from our Qdrant vector store. However, instead of the default similarity search, we'll use the Recommendation API instead.
* Qdrant's Recommendation API allows you to provide a negative prompt; in our case, the user can specify recipes or ingredients to avoid.
* The AI Agent is now able to suggest a recipe recommendation better suited for the user and increase customer satisfaction.

## Requirements

* Qdrant vector store instance to save the recipes
* Mistral.ai account for embeddings and LLM agent

## Customising the workflow

This workflow can work for a variety of different audiences. Try different sets of data such as clothes, sports shoes, vehicles or even holidays.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, Recursive Character Text Splitter, Call n8n Workflow Tool, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
