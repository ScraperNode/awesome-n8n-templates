# 📊 Monitor Google Maps reviews with sentiment analysis & RAG agent using Pinecone

> ⚡ **64 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Analyze and Sync Google Maps Reviews to Pinecone

&gt; **Note:** This template requires an Apify account, an OpenAI account, and a Pinecone database.

### Overview
This workflow automates your reputation management by scraping Google Maps reviews, analyzing their sentiment using AI, and storing them in a Vector Database (Pinecone). It also includes a RAG (Retrieval-Augmented Generation) agent that allows you to chat with your review data via Telegram to ask specific questions about customer feedback.

### How it works
* **Scrape:** At a scheduled time (or manually), the workflow triggers an Apify actor to scrape the latest reviews from a specific Google Maps URL.
* **Analyze:** It uses GPT-4o to analyze the sentiment of the reviews and generates a summary of complaints and praises.
* **Notify:** A Telegram message is sent with the sentiment score and a summary of the latest reviews.
* **Store:** The review data is embedded and upserted into a Pinecone Vector Store.
* **Chat (RAG):** You can send messages to a Telegram bot to query the database (e.g., "What are people saying about our coffee?"). The AI retrieves relevant reviews from Pinecone to answer your question.
* **Cleanup:** A weekly schedule cleans up the namespace to ensure data freshness (optional).

### How to set up
1. **Apify:** Create an account and subscribe to the *Google Maps Reviews Scraper* actor. Set up your Apify credentials in n8n.
2. **OpenAI:** Set up your OpenAI credentials in n8n.
3. **Pinecone:** Create an Index in Pinecone. Set up your Pinecone credentials in n8n.
4. **Telegram:** Create a new bot via BotFather to get your Token and Chat ID. Set up your Telegram credentials in n8n.

### Configure the Workflow
1. Open the **⚠️ CONFIGURATION** nodes.
2. Paste your `telegram_chat_id`.
3. Paste the `Maps_url` of the business you want to monitor.
4. Define your `pinecone_namespace`.

### HTTP Node Configuration
In the "Empty Namespace" node, update the URL to match your Pinecone Index Host and add your Pinecone API Key in the header or use credentials.

## 🙋 Support
If you encounter any issues during setup or have questions about customization, please reach out to our dedicated support email: **foivosautomationhelp@gmail.com**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
