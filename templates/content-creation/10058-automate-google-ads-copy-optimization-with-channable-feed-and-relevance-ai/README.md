# 🎬 Automate Google Ads copy optimization with Channable feed and Relevance AI

> ⚡ **415 views** · 🎬 [Content Creation & Video](../)

## Description

## 🧠 Google Ads Monthly Performance Optimization (Channable + Google Ads + Relevance AI)

### 🚀 Overview

This workflow automatically analyzes your **Google Ads performance every month**, identifies top-performing themes and categories, and regenerates optimized ad copy using **Relevance AI** — powered by insights from your **Channable product feed**.

It then saves the improved ads to **Google Sheets** for review and sends a detailed performance report to your **Slack** workspace.

Ideal for marketing teams who want to **automate ad optimization at scale** with zero manual intervention.

---

### 🔗 Integrations Used

* **Google Ads** → Fetch campaign and ad performance metrics using GAQL.
* **Relevance AI** → Analyze performance data and regenerate ad copy using AI agents and tools.
* **Channable** → Pull updated product feeds for ad refresh cycles.
* **Google Sheets** → Save optimized ad copy for review and documentation.
* **Slack** → Send a 30-day performance report to your marketing team.

---

### 🧩 Workflow Summary

| Step | Node                                                | Description                                                                 |
| ---- | --------------------------------------------------- | --------------------------------------------------------------------------- |
| 1    | **Monthly Schedule Trigger**                        | Runs automatically on the 1st of each month to review last 30 days of data. |
| 2    | **Get Google Ads Performance Data**                 | Fetches ad metrics via GAQL query (`impressions`, `clicks`, `CTR`, etc.).   |
| 3    | **Calculate Performance Metrics**                   | Groups results by ad group and theme to find top/bottom performers.         |
| 4    | **AI Performance Analysis (Relevance AI)**          | Generates human-readable insights and improvement suggestions.              |
| 5    | **Update Knowledge Base (Relevance AI)**            | Saves new insights for future ad copy training.                             |
| 6    | **Get Updated Product Feed (Channable)**            | Retrieves the latest catalog items for ad regeneration.                     |
| 7    | **Split Into Batches**                              | Splits the feed into groups of 50 to avoid API rate limits.                 |
| 8    | **Regenerate Ad Copy with Insights (Relevance AI)** | Rewrites ad copy with the latest product and performance data.              |
| 9    | **Save Optimized Ads to Sheets**                    | Writes output to your “Optimized Ads” Google Sheet.                         |
| 10   | **Generate Performance Report**                     | Summarizes the AI analysis, CTR trends, and key insights.                   |
| 11   | **Email Performance Report (Slack)**                | Sends report directly to your Slack channel/team.                           |

---

### 🧰 Requirements

Before running the workflow, make sure you have:

1. A **Google Ads** account with API access and OAuth2 credentials.
2. A **Relevance AI** project (with one Agent and one Tool setup).
3. A **Channable** account with API key and project feed.
4. A **Google Sheets** document for saving results.
5. A **Slack webhook URL** for sending performance summaries.

---

### ⚙️ Environment Variables

Add these environment variables to your n8n instance (via `.env` or UI):

| Variable                         | Description                                                         |
| -------------------------------- | ------------------------------------------------------------------- |
| `GOOGLE_ADS_API_VERSION`         | API version (e.g., `v17`).                                          |
| `GOOGLE_ADS_CUSTOMER_ID`         | Your Google Ads customer ID.                                        |
| `RELEVANCE_AI_API_URL`           | Base Relevance AI API URL (e.g., `https://api.relevanceai.com/v1`). |
| `RELEVANCE_AGENT_PERFORMANCE_ID` | ID of your Relevance AI Agent for performance analysis.             |
| `RELEVANCE_KNOWLEDGE_SOURCE_ID`  | Knowledge base or dataset ID used to store insights.                |
| `RELEVANCE_TOOL_AD_COPY_ID`      | Relevance AI tool ID for generating ad copy.                        |
| `CHANNABLE_API_URL`              | Channable API endpoint (e.g., `https://api.channable.com/v1`).      |
| `CHANNABLE_COMPANY_ID`           | Your Channable company ID.                                          |
| `CHANNABLE_PROJECT_ID`           | Your Channable project ID.                                          |
| `FEED_ID`                        | The feed ID for product data.                                       |
| `GOOGLE_SHEET_ID`                | ID of your Google Sheet to store optimized ads.                     |
| `SLACK_WEBHOOK_URL`              | Slack Incoming Webhook URL for sending reports.                     |

---

### 🔐 Credentials Setup in n8n

| Credential                                      | Type    | Usage                                               |
| ----------------------------------------------- | ------- | --------------------------------------------------- |
| **Google Ads OAuth2 API**                       | OAuth2  | Authenticates your Ads API queries.                 |
| **HTTP Header Auth (Relevance AI & Channable)** | Header  | Uses your API key as `Authorization: Bearer &lt;key&gt;`. |
| **Google Sheets OAuth2 API**                    | OAuth2  | Writes optimized ads to Sheets.                     |
| **Slack Webhook**                               | Webhook | Sends monthly reports to your team channel.         |

---

### 🧠 Example AI Insight Output

```json
{
  "insights": [
    "Ad groups using 'vegan' and 'organic' messaging achieved +23% CTR.",
    "'Budget' keyword ads underperformed (-15% CTR).",
    "Campaigns featuring 'new' or 'bestseller' tags showed higher conversion rates."
  ],
  "recommendations": [
    "Increase ad spend for top-performing 'vegan' and 'premium' categories.",
    "Revise copy for 'budget' and 'sale' ads with low CTR."
  ]
}
```

---

### 📊 Output Example (Google Sheet)

| Product             | Category | Old Headline             | New Headline                                 | CTR Change | Theme   |
| ------------------- | -------- | ------------------------ | -------------------------------------------- | ---------- | ------- |
| Organic Protein Bar | Snacks   | “Healthy Energy Anytime” | “Organic Protein Bar — 100% Natural Fuel”    | +12%       | Organic |
| Eco Face Cream      | Skincare | “Gentle Hydration”       | “Vegan Face Cream — Clean, Natural Moisture” | +17%       | Vegan   |

---

### 📤 Automation Flow

1. **Run Automatically** on the first of every month (`cron: 0 0 1 * *`).
2. **Fetch Ads Data** → **Analyze & Learn** → **Generate New Ads** → **Save & Notify**.
3. Every iteration updates the AI’s knowledge base — improving your campaigns progressively.

---

### ⚡ Scalability

* The flow is **batch-optimized** (50 items per request).
* Works for **large ad accounts** with up to 10,000 ad records.
* AI analysis & regeneration steps are **asynchronous-safe** (timeouts extended).
* Perfect for agencies managing multiple ad accounts — simply duplicate and update the environment variables per client.

---

### 🧩 Best Use Cases

* Monthly ad creative optimization for eCommerce stores.
* Marketing automation for Google Ads campaign scaling.
* Continuous learning ad systems powered by Relevance AI insights.
* Agencies automating ad copy refresh cycles across clients.

---

### 💬 Slack Report Example

```
# 30-Day Performance Optimization Report

Date: 2025-10-01
Analysis Period: Last 30 days
Ads Analyzed: 842

Top Performing Themes
1. Vegan: 5.2% CTR (34 ads)
2. Premium: 4.9% CTR (28 ads)

Underperforming Themes
1. Budget: 1.8% CTR (12 ads)

AI Insights
“Vegan” and “Premium” themes outperform baseline by +22% CTR.
“Budget” ads underperform due to lack of value framing.

Next Optimization Cycle: 2025-11-01
```

---

### 🛠️ Maintenance Tips

* Update your **GAQL query** occasionally to include new metrics or segments.
* Refresh Relevance AI tokens every 90 days (if required).
* Review generated ads in Google Sheets before pushing them live.
* Test webhook and OAuth connections after major n8n updates.

---

### 🧩 Import Instructions

1. Open **n8n** → **Workflows** → **Import from File / JSON**.
2. Paste this workflow JSON or upload it.
3. Add all required environment variables and credentials.
4. Execute the first run manually to validate connections.
5. Once verified, enable scheduling for automatic monthly runs.

---

### 🧾 Credits

Developed for AI-driven marketing teams leveraging **Google Ads**, **Channable**, and **Relevance AI** to achieve continuous ad improvement — fully automated via **n8n**.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
