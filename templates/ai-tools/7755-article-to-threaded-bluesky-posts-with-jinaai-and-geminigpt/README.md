# 🎯 Article to threaded Bluesky posts with JinaAI and Gemini/GPT

> ⚡ **151 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

### Who is this for?

Automation enthusiasts, content creators, or social media managers who post article-based threads to Bluesky and want to automate the process end-to-end.

### What problem is this solving?

Manual content repackaging and posting can be repetitive and time-consuming. This workflow automates the process from capturing article URLs (via Telegram or RSS) to scraping content, transforming it into a styled thread, and posting on Bluesky platform.

### What this workflow does

* Listens on **Telegram** or fetches from **RSS feeds** (AI Trends, Machine Learning Mastery, Technology Review).
* Extracts content from URLs using **JinaAI**.
* Converts the article into a neat, scroll-stopping thread via **LangChain + Gemini / OpenAI ChatGPT**.
* Splits the thread into multiple posts. The first post is published with “Create a Post”, while subsequent posts are replies.
* Adds short delays between posting to avoid rate limits.

### Setup

1. Add credentials for **Telegram Bot API**, **JinaAI**, **Google Gemini**, and **Bluesky App Password**.
2. Add or customize RSS feeds if needed 
3. Test with a sample URL to validate posting sequence.

### How to customize

* Swap out RSS feeds or trigger sources.
* Modify prompt templates or thread formatting rules in the LangChain/Gemini node.
* Adjust wait times or content parsing logic.
* Replace Bluesky with another posting target if desired.


Made by: **[Khaisa Studio](https://khaisa.studio?utm_source=n8nofficial)**
Need customs workflows? **[Contact Me!](https://khmuhtadin/contact)**

## 🔗 Nodes Used

Telegram Trigger, Basic LLM Chain, OpenAI Chat Model, RSS Feed Trigger, Google Gemini Chat Model, Jina AI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
