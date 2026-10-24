# 🎯 Article to threaded Bluesky posts with JinaAI and Gemini/GPT

> ⚡ **204 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin).*

Turn articles into Bluesky threads automatically. This workflow grabs article URLs from Telegram or RSS, scrapes the content with JinaAI, rewrites it as a styled thread with LangChain + Gemini/GPT, and posts it to Bluesky with smart pacing. No manual repackaging.

*Last updated: September 2026.*

### Who is this for?

Automation enthusiasts, content creators, or social media managers who post article-based threads to Bluesky and want the process handled end-to-end.

### What problem is this solving?

Repackaging content by hand is repetitive and slow. This workflow automates every step from capturing article URLs (via Telegram or RSS) to scraping, transforming into a styled thread, and posting on Bluesky.

### What this workflow does

* Listens on **Telegram** or fetches from **RSS feeds** (AI Trends, Machine Learning Mastery, Technology Review).
* Extracts content from URLs using **JinaAI** ([jina.ai](https://jina.ai/)).
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

### Quick Answers
**Where do articles come from?**  
Telegram messages or RSS feeds (AI Trends, Machine Learning Mastery, Technology Review).  
**How does it avoid rate limits?**  
Short delays between posts, with the first post published normally and the rest as replies.  
**Can I change the target platform?**  
Yes. Swap Bluesky for another posting target and adjust the formatting rules.  


Made by: **[khmuhtadin](https://khmuhtadin.com)**
Need custom workflows? **[Contact Me](https://khmuhtadin.com/contact)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Telegram Trigger, Basic LLM Chain, OpenAI Chat Model, RSS Feed Trigger, Google Gemini Chat Model, Jina AI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
