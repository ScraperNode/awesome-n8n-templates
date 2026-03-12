# 📊 Create data-driven SEO content briefs with AI analysis of SERP data using Bright Data

> ⚡ **592 views** · 📊 [Market Research & Insights](../)

## Description

This workflow is your all-in-one **AI Content Strategist**, designed to generate comprehensive, data-driven **content briefs** by analyzing top-ranking competitors.

It operates through a simple **chat interface**. 

You provide a target **keyword**, and the workflow automates the entire research process. First, it scrapes the **top 10 Google search results** using the powerful **[Bright Data SERP API](https://get.brightdata.com/unstoppable)**.

Then, for each of those results, it performs a deep dive, using the **Bright Data Web Unblocker** to reliably extract the full content from each page, bypassing any **anti-bot measures**.

Finally, all the gathered data—titles, headings, word counts, and page summaries—is synthesized by a **Large Language Model (LLM)** to produce a **strategic content plan**. 

This plan identifies **search intent**, **core topics**, and crucial **content gaps**, giving you a clear roadmap to **outrank the competition**. This template is indispensable for **SEO specialists**, **content marketers**, and **digital agencies** looking to scale their content production with strategies that are proven to work.

---

## Why Use This AI Content Strategist Workflow ?
* **Data-Driven Insights**: Base your content strategy on what is actually ranking on **Google**, not guesswork.
* **Automated Competitive Analysis**: Instantly understand the structure, length, and key themes of the **top-performing articles** for any keyword.
* **Strategic Gap Detection**: The **AI analysis** highlights poorly covered topics and **missed opportunities**, allowing you to create content that provides **unique value**.
* **Massive Time Savings**: Condenses hours of **manual research** into a fully automated process that runs in minutes.

---

## How It Works

1.  **Chat Interaction Begins**: The workflow is initiated via a **chat UI**. The user enters a target **keyword** to start the analysis.
2.  **Google SERP Scraping (Bright Data)**: The "**Google SERP**" node uses **Bright Data's SERP API** to fetch the **top 10 organic results**, providing the URLs for the next stage.
3.  **Individual Page Scraping (Bright Data)**: The workflow loops through each URL. The "**Access and extract data**" node uses the **Bright Data Web Unblocker** to ensure **successful and complete HTML scraping** of every competitor's page.
4.  **Content Extraction & Aggregation**: A series of `Code` nodes **clean the raw HTML** and **extract structured data** (title, meta description, headings, word count). The `Aggregate` node then **compiles the data** from all 10 pages into a single dataset.
5.  **AI Synthesis (OpenRouter)**: The "**Analysis**" node sends the entire compiled dataset to an **LLM** via **OpenRouter**. The **AI** performs a **holistic analysis** to identify **search intent**, **must-cover topics**, and **differentiation opportunities**.
6.  **Strategic Brief Generation**: The "**Format Output**" node takes the AI's structured **JSON analysis** and transforms it into a clean, human-readable **Markdown report**, which is then delivered back to the user in the chat interface.

---

## 🔑 Prerequisites

To use this workflow, you will need active accounts with both **[Bright Data](https://get.brightdata.com/unstoppable)** (for web scraping) and **OpenRouter** (for AI model access).

### Setting Up Your Credentials:

1.  **Bright Data Account**:
    * Sign up for a free trial account on their [website](https://get.brightdata.com/unstoppable).
    * Inside your Bright Data dashboard, you will need to activate both the **SERP API** and the **Web Unblocker** products to create the necessary Zones.
    * In n8n, navigate to the **Credentials** section, add a new "**Brightdata API**" credential, and enter your API key.
    * In the workflow, select your newly created credential in both the "**Google SERP**" node and the "**Access and extract data from a specific URL**" node.

2.  **OpenRouter Account**:
    * Sign up for an account at [OpenRouter.ai](https://openrouter.ai/).
    * Navigate to your account settings to find your **API Key**.
    * In n8n, go to **Credentials**, add a new "**OpenRouter API**" credential, and paste your key.
    * In the workflow, select this credential in all three "**OpenRouter Chat Model**" nodes.


---

[Phil | Inforeole](https://inforeole.fr)

🇫🇷 Contactez nous pour automatiser vos processus

## 🔗 Nodes Used

Basic LLM Chain, Simple Memory, Structured Output Parser, Chat Trigger, OpenRouter Chat Model, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
