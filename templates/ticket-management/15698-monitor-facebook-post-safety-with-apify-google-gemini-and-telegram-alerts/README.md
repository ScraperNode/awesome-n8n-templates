# 🎫 Monitor Facebook post safety with Apify, Google Gemini and Telegram alerts

> ⚡ **460 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# **Monitor Facebook Pages** and **Analyze Content Safety** via Telegram
![DesStaff_Plan_2_plan1778676536985ewrc628.png](fileId:6260)

This n8n template automates the collection, storage, and safety analysis of Facebook posts while simultaneously providing an interactive AI assistant on Telegram.

If you manage communities or brand pages and need to stay instantly informed about toxic content while having a smart assistant to answer quick operational queries, *this workflow is perfect for you*.

## How it works

* **Interactive Chatbot (Trigger):** The Telegram Trigger listens for direct messages. An **AI Agent** (powered by Google Gemini) processes the input using **MongoDB** for conversation memory and custom tools (like **SerpAPI**) for deep research.
* **Data Scraping (Schedule):** A Schedule Trigger runs every 3 hours to fetch the latest posts from your specified Facebook page using the **Apify Facebook Scraper**.
* **Data Normalization & Storage:** Extracted posts are normalized and upserted into an **n8n Data Table**. This prevents duplicate processing of the same posts in future runs.
* **Safety Analysis:** Post text and downloaded images are merged and sent to a secondary AI Agent. The AI evaluates the context and user reactions to flag the content as "Safe" or "Toxic".
* **Smart Notification:** The safety report is beautifully formatted using Telegram HTML and dispatched directly to the admin's Telegram inbox.

## How to use

1. Connect your **Telegram Bot API** credentials in both the Telegram Trigger and Send nodes.
2. Connect your **Google Gemini** API key in all Language Model nodes.
3. Connect your **Apify** API credentials and **SerpAPI** key.
4. Configure your **MongoDB** connection for the chat memory nodes.
5. Create an **n8n Data Table** (e.g., `facebook_news_db`) with a `postId` column (Number) and update the Data Table Upsert node to select your table.
6. Customize the `Set Context (Chat)` and `Set Context (Scraper)` nodes with your specific details (Telegram Admin ID, Facebook Page URL, Bot Name).
7. Activate the workflow and let the automation run.

![DesStaff_Plan_3_1778677169068.png](fileId:6259)


## Requirements

* **n8n Version:** Built and tested on **n8n 2.9.4+**. *(Note: You may encounter errors on older versions. It is highly recommended to update to the latest n8n version to use this workflow effectively).*
* **Google Gemini** API credentials.
* **Telegram Bot** token.
* **Apify** API credentials.
* **SerpAPI** credentials.
* **MongoDB** connection string.
* An active **n8n Data Table**.

## Customizing this workflow

* **Change the scraper:** Swap the Apify node with any other social media scraping tool or RSS feed to monitor different platforms (e.g., X, LinkedIn).
* **Change the database:** Replace the MongoDB Chat Memory node with Postgres or another memory node if you prefer a different database structure.
* **Modify the AI persona:** Update the system prompt in the AI Agent nodes to change the chatbot's tone or the strictness of the safety evaluation.

---

## About the Author

**Created by:** Nguyen Thieu Toan (Jay Nguyen)

**Email:** me@nguyenthieutoan.com

**Website:** [nguyenthieutoan.com](https://nguyenthieutoan.com)

**Company:** GenStaff ([genstaff.net](https://genstaff.net))

**Socials (Facebook / X / LinkedIn):** @nguyenthieutoan

**More templates:** [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Execute Workflow Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
