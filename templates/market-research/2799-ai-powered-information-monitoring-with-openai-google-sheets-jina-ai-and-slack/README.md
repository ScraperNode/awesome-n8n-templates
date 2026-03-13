# 📊 AI-powered information monitoring with OpenAI, Google Sheets, Jina AI and Slack

> ⚡ **19,500 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Check Legal Regulations**:
This workflow involves scraping, so ensure you comply with the legal regulations in your country before getting started. Better safe than sorry!

## 📌 Purpose  
This workflow enables **automated and AI-driven topic monitoring**, delivering **concise article summaries** directly to a **Slack channel** in a structured and easy-to-read format.  
It allows users to stay informed on specific topics of interest effortlessly, without manually checking multiple sources, ensuring a **time-efficient and focused** monitoring experience.  

**To get started, copy the Google Sheets template required for this workflow from [here](https://docs.google.com/spreadsheets/d/1F2FzWt9FMkA5V5i9d_hBJRahLDvxs3DQBOLkLYowXbY).**  


## 🎯 Target Audience  
This workflow is designed for:  
- **Industry professionals** looking to track key developments in their field.  
- **Research teams** who need up-to-date insights on specific topics.  
- **Companies** aiming to keep their teams informed with relevant content.  

## ⚙️ How It Works  
1. **Trigger:** A **Scheduler** initiates the workflow at regular intervals (default: every hour).  
2. **Data Retrieval:**  
   - RSS feeds are fetched using the **RSS Read** node.  
   - Previously monitored articles are checked in **Google Sheets** to avoid duplicates.  
3. **Content Processing:**  
   - The article relevance is assessed using **OpenAI (GPT-4o-mini)**.  
   - Relevant articles are scraped using **Jina AI** to extract content.  
   - Summaries are generated and formatted for Slack.  
4. **Output:**  
   - Summaries are posted to the specified Slack channel.  
   - Article metadata is stored in **Google Sheets** for tracking.  

## 🛠️ Key APIs and Nodes Used  
- **Scheduler Node:** Triggers the workflow periodically.  
- **RSS Read:** Fetches the latest articles from defined RSS feeds.  
- **Google Sheets:** Stores monitored articles and manages feed URLs.  
- **OpenAI API (GPT-4o-mini):** Classifies article relevance and generates summaries.  
- **Jina AI API:** Extracts the full content of relevant articles.  
- **Slack API:** Posts formatted messages to Slack channels.  

---

This workflow provides an **efficient and intelligent way** to stay informed about your topics of interest, directly within Slack.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
