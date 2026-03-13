# 📊 Customer pain analysis & AI briefing with Anthropic, Reddit, X, and SerpAPI

> ⚡ **541 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

**The competitive edge, delivered.** This Customer Intelligence Engine simultaneously analyzes the web, Reddit, and X/Twitter to generate a professional, actionable executive briefing.

---

### 🎯 Problem Statement

Traditional market research for **Customer Intelligence (CI)** is manual, slow, and often relies on surface-level social media scraping or expensive external reports. Service companies, like HVAC providers, struggle to efficiently synthesize vast volumes of online feedback (Reddit discussions, real-time tweets, web articles) to accurately diagnose systemic service gaps (e.g., scheduling friction, poor automated systems). This inefficiency leads to delayed strategic responses and missed opportunities to invest in high-impact solutions like **AI voice agents**.

---

### ✨ Solution

This workflow deploys a sophisticated **Multisource Intelligence Pipeline** that runs on a scheduled or ad-hoc basis. It uses parallel processing to ingest data from three distinct source types (**SERP API, Reddit, and X/Twitter**), employs a zero-cost **Hybrid Categorization** method to semantically identify operational bottlenecks, and uses the **Anthropic LLM** to synthesize the findings into a clear, executive-ready strategic brief. The data is logged for historical analysis while the brief is dispatched for immediate action.

---

### ⚙️ How It Works (Multi-Step Execution)
#### 1.  Ingestion and Parallel Processing (**The Data Fabric**)

* **Trigger:** The workflow is initiated either on an ad-hoc basis via an n8n Form Trigger or on a schedule (Time Trigger).
* **Parallel Ingestion:** The workflow immediately splits into three parallel branches to fetch data simultaneously:

  * **SERP API:** Captures authoritative content and industry commentary (*Strategic Context*).
  * **Reddit (Looping Structure):** Fetches posts from multiple subreddits via an Aggregate Node workaround to get authentic user experiences (*Qualitative Signal*).
  * **X/Twitter (HTTP Request):** Bypasses standard rate limits to capture real-time social complaints (*Sentiment Signal*).

#### 2. Analysis and Fusion (**The Intelligence Layer**)

* **Cleanup and Labeling (Function Nodes):** Each branch uses dedicated Function Nodes to filter noise (e.g., low-score posts) and normalize the data by adding a source tag (e.g., 'Reddit').
* **Merge:** A Merge Node (Append Mode) fuses all three parallel streams into a single, unified dataset.
* **Hybrid Categorization (Function Node):** A single Function Node applies the Hybrid Categorization Logic. This cost-free step semantically assigns a `pain_point` category (e.g., 'Call Hold/Availability') and a `sentiment_score` to every item, transforming raw text into labeled metrics.

#### 3. Dispatch and Reporting (**The Executive Output**)

* **Aggregation and Split (Function Node):** The final Function Node calculates the total counts, deduplicates the final results, and generates the comprehensive `summaryString`.
* **Data Logging:** The aggregated counts and metrics are appended to **Google Sheets** for historical logging.
* **LLM Input Retrieval (Function Node):** A final Function Node retrieves the summary data using the `$items()` helper (the serial route workaround).
* **AI Briefing:** The *Message a model (Anthropic)* Node receives the `summaryString` and uses a strict HTML System Prompt to synthesize the strategic brief, identifying the top pain points and suggesting AI features.
* **Delivery:** The **Gmail Node** sends the final, professional HTML brief to the executive team.

---

### 🛠️ Setup Steps

#### Credentials

* **Anthropic:** Configure credentials for the Language Model (Claude) used in the Message a model node.
* **SERP API, Reddit, and X/Twitter:** Configure API keys/credentials for the data ingestion nodes.
* **Google Services:** Set up OAuth2 credentials for Google Sheets (for logging data) and Gmail (for email dispatch).

#### Configuration

* **Form Configuration:** If using the Form Trigger, ensure the Target Keywords and Target Subreddits are mapped correctly to the ingestion nodes.
* **Data Integrity:** Due to the serial route, ensure the Function (Get LLM Summary) node is correctly retrieving the `LLM_SUMMARY_HOLDER` field from the preceding node's output memory.

---

### ✅ Benefits

* **Proactive CI & Strategy:** Shifts market research from manual, reactive browsing to proactive, scheduled data diagnostic.
* **Cost Efficiency:** Utilizes a zero-cost Hybrid Categorization method (Function Node) for intent analysis, avoiding expensive per-item LLM token costs.
* **Actionable Output:** Delivers a fully synthesized, HTML-formatted executive brief, ready for immediate presentation and strategic sales positioning.
* **High Reliability:** Employs parallel ingestion, API workarounds, and serial routing to ensure the complex workflow runs consistently and without failure.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Reddit, n8n Form Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
