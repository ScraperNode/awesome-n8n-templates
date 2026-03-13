# 📊 Filter real-time news with Gemini AI and BrowserAct for Telegram channels

> ⚡ **463 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Automate AI News Filtering with Keywords to Telegram

### This n8n template helps you stay up-to-date by automatically filtering news and sending relevant articles to Telegram using an AI Agent.

This workflow is perfect for **content marketers, journalists, or researchers** who need to find specific articles without manually sifting through countless news feeds.

---
### Steps to Take
* **Create BrowserAct Workflow:** Set up the **News Content Marketing Automation** template in your BrowserAct account.
* **Add BrowserAct Token:** Connect your BrowserAct account credentials to the **HTTP Request** inside **Run Node**.
* **Update Workflow ID:** Change the `workflow_id` value in the **HTTP Request** inside **Run Node** to match the one from your BrowserAct workflow.
* **Connect Gemini:** Add your Google Gemini credentials to the **AI Agent** node.
* **Configure Telegram:** Connect your Telegram account and add your Channel ID to the **Send a News Photo To Telegram** node.

---
### How it works
* The workflow is triggered automatically on a schedule, but you can also manually run it.
* It uses an **HTTP Request** node to start a web scraping task via the **BrowserAct** API to collect the latest news.
* A series of **If** and **Wait** nodes monitor the scraping job until the full data is ready.
* An **AI Agent** node, powered by **Google Gemini**, processes the headlines and filters the news based on a list of keywords you define.
* A **Code** node then formats the AI's output into a clean, readable format.
* Finally, the filtered news articles are sent as rich media messages to **Telegram**, including the headline, a picture, and a link.

---
### Requirements
* **BrowserAct** API account
* **BrowserAct** **“News Content Marketing Automation”** Template
* **Gemini** account
* **Telegram** credentials

---
### Need Help ?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
