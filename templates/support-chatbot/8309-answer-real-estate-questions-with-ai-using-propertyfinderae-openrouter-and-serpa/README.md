# 💬 Answer real estate questions with AI using PropertyFinder.ae, OpenRouter, and SerpAPI

> ⚡ **576 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Real Estate Agent with OpenRouter and SrpAPI to talk with property objects from propertyfinder.ae

This n8n template demonstrates a simple AI Agent that can:

* Scrape information from a provided `propertyfinder.ae` listing link.
* Answer questions about a specific property using the scraped information.
* Use **SerpAPI** to find details that are missing from the scraped data.
* Answer general real-estate questions using **SerpAPI**.

---

## Use Case

This workflow serves as a starting point for building complex AI assistants for real estate or other domains.

[See the demo video](https://www.youtube.com/shorts/WqudWmczjVU)
---

## Potential Enhancements

* **Expand Knowledge:** Augment the workflow with your own knowledge base using a vector database (RAG approach).
* **Add More Sources:** Adapt the scraper to support other real estate websites.
* **Optimize Speed:** Add a cache for scraped data to reduce response latency.
* **Improve Context Handling:** Implement reliable persistence to track the current listing instead of iterating through conversation history.
* **Customize Prompts:** Write more tailored prompts for your specific needs (the current one is for demonstration only).
* **Integrate Channels:** Connect the workflow to communication channels like Instagram, Telegram, or WhatsApp.

---

## How It Works

1.  The workflow is triggered by a **"When chat message received"** node for simple demonstration.
2.  The **`Chat Memory Manager`** node extracts the last 30 messages for the current session.
3.  A code node finds the property link, first by checking the most recent user message and then by searching the conversation history.
4.  If a link is found, an **`HTTP Request`** node scrapes the HTML content from the listing page.
5.  The **`Summarize`** code node parses the HTML, retrieves key information, and passes it to the AI Agent as a temporary knowledge base.
6.  The final **`AI Agent`** node answers user queries using the scraped knowledge base and falls back to the **SerpAPI** tool when information is missing.

---

## How to Use

* You can test this workflow directly in n8n or integrate it into any social media channel or your website.
* The `AI Agent` node is configured to use **OpenRouter**. Add your **OpenRouter** credentials, or replace the node with your preferred LLM provider.
* Add your **SerpAPI** key to the `SerpAPI` tool within the AI Agent node.

---

## Requirements

* An API key for **OpenRouter** (or credentials for your preferred LLM provider).
* A **SerpAPI** key. You can get one from their website; a free plan is available for testing.

---

## Need Help Building Something More?

Contact me on:
* **Telegram:** @ninesfork
* **LinkedIn:** [George Zargaryan](https://www.linkedin.com/in/george-zargaryan-b65290367/)

Happy Hacking! 🚀

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, SerpApi (Google Search), Chat Memory Manager, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
