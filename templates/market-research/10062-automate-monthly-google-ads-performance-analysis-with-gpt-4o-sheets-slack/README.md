# 📊 Automate monthly Google Ads performance analysis with GPT-4o, Sheets & Slack

> ⚡ **494 views** · 📊 [Market Research & Insights](../)

## Description

# 📊 Google Ads + OpenAI + Sheets — Monthly AI Performance Analysis

### Automate monthly ad performance insights with AI-powered recommendations

---

## 🧩 Overview

This workflow automatically **analyzes Google Ads performance every month**, using the **Google Ads API** and **OpenAI (GPT-4o)** to uncover which ad themes, categories, and messages perform best.
It then **generates a structured AI report**, saves it to **Google Sheets**, and sends a **Slack summary** to your marketing team.

💡 Perfect for digital marketers, agencies, and growth analysts who want automated campaign insights without manually crunching numbers.

---

## ⚙️ Features

✅ Automatically runs on the 1st of each month
✅ Fetches last 30 days of ad performance via Google Ads API (GAQL)
✅ Uses GPT-4o for natural-language insights & improvement ideas
✅ Groups ads by *category* and *theme* (e.g., “Free Shipping,” “Premium”)
✅ Generates a clean, formatted markdown report
✅ Archives reports in Google Sheets for trend tracking
✅ Notifies your Slack channel with AI-driven recommendations

---

## 🧠 Architecture

| Component           | Purpose                                          |
| ------------------- | ------------------------------------------------ |
| **n8n**             | Workflow engine                                  |
| **Google Ads API**  | Source of ad performance data                    |
| **OpenAI (GPT-4o)** | Analyzes CTR patterns and writes recommendations |
| **Google Sheets**   | Report archiving and history tracking            |
| **Slack**           | Team notifications                               |

---

## 🧭 Workflow Logic (Summary)

**Monthly Trigger (1st of Month)**
⬇️
**1️⃣ Get Performance Data (Google Ads API)**
Fetches 30-day CTR, clicks, impressions for all responsive search ads.
⬇️
**2️⃣ Prepare Performance Data**
Groups data by ad group and theme keywords, builds an AI prompt.
⬇️
**3️⃣ AI Agent (LangChain) + GPT-4o**
Analyzes patterns and generates actionable insights.
⬇️
**4️⃣ Generate Report (Code)**
Formats a Markdown report with AI recommendations and KPIs.
⬇️
**5️⃣ Save to Google Sheets**
Archives results for long-term analytics.
⬇️
**6️⃣ Send Report to Slack**
Delivers the summary directly to your marketing channel.

---

## 🔑 Environment Variables

| Variable                 | Example                       | Description                    |
| ------------------------ | ----------------------------- | ------------------------------ |
| `GOOGLE_ADS_CUSTOMER_ID` | `123-456-7890`                | Google Ads customer account ID |
| `GOOGLE_ADS_API_VERSION` | `v17`                         | Current Ads API version        |
| `GOOGLE_SHEET_ID`        | `1xA1B2c3D4EFgH...`           | Target spreadsheet ID          |
| `OPENAI_API_KEY`         | `sk-xxxxx`                    | OpenAI API key for GPT-4o      |
| `SLACK_WEBHOOK_URL`      | `https://hooks.slack.com/...` | Slack incoming webhook         |

---

## 🔐 Credential Setup

| Service           | Type                          | Required Scopes                                |
| ----------------- | ----------------------------- | ---------------------------------------------- |
| **Google Ads**    | OAuth2 (`googleAdsOAuth2Api`) | `https://www.googleapis.com/auth/adwords`      |
| **OpenAI**        | API key (`openAiApi`)         | Full access                                    |
| **Google Sheets** | OAuth2                        | `https://www.googleapis.com/auth/spreadsheets` |
| **Slack**         | Webhook                       | `chat:write`                                   |

---

## 🧱 Node-by-Node Breakdown

| Node                               | Purpose                                   | Key Configuration                                                                                                                        |
| ---------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Monthly Trigger**                | Starts workflow on 1st of every month     | Cron: `0 0 1 * *`                                                                                                                        |
| **Get Performance Data**           | Queries Ads data                          | Endpoint: `https://googleads.googleapis.com/v17/customers/{id}/googleAds:search`<br>Query: GAQL (CTR, clicks, impressions, last 30 days) |
| **Prepare Performance Data**       | Aggregates and builds AI prompt           | Groups by ad group and theme, computes CTRs                                                                                              |
| **AI Agent – Analyze Performance** | Passes formatted data to GPT-4o           | System message: *“You are a Google Ads performance analyst…”*                                                                            |
| **OpenAI Chat Model (GPT-4o)**     | Analytical reasoning engine               | Model: `gpt-4o`, Temperature 0.2                                                                                                         |
| **Generate Report**                | Parses AI output, formats Markdown report | Adds recommendations + next steps                                                                                                        |
| **Save Report to Sheets**          | Archives report                           | Sheet name: *Performance Reports*                                                                                                        |
| **Send Report (Slack)**            | Sends summary                             | Uses report_markdown variable                                                                                                            |

---

## 🧠 AI Report Example

```
# 30-Day Performance Analysis Report

## Executive Summary
Analyzed: 940 ads
Period: Last 30 days

## Top Performing Categories
- Running Shoes: 9.4% CTR (120 ads)
- Fitness Apparel: 8.2% CTR (90 ads)

## Top Performing Themes
- "Free Shipping" messaging: 9.8% CTR (58 ads)
- "Premium" messaging: 8.5% CTR (44 ads)

## AI-Powered Recommendations
1. [HIGH] Emphasize “Free Shipping” across more ad groups.  
   Expected Impact: +5 % CTR  
2. [MEDIUM] Test “Premium Quality” vs. “New Arrivals.”  
   Expected Impact: +3 % CTR  

## Next Steps
1. Implement new ad variations  
2. A/B test messaging  
3. Re-analyze next month
```

---

## 🧩 Testing Procedure

1️⃣ Temporarily disable the cron trigger.
2️⃣ Run the workflow manually.
3️⃣ Confirm:

* Google Ads node returns JSON with `results`.
* AI Agent output is valid JSON.
* Report is written to Sheets.
* Slack message received.

4️⃣ Re-enable the monthly trigger once verified.

---

## 🧾 Output in Google Sheets

| Date       | Ads Analyzed | Top Category  | Top Theme     | Key Recommendations                | Generated At      |
| ---------- | ------------ | ------------- | ------------- | ---------------------------------- | ----------------- |
| 2025-10-01 | 940          | Running Shoes | Free Shipping | “Add Free Shipping copy to 10 ads” | 2025-10-01T00:05Z |

---

## 🪜 Maintenance

| Frequency | Task                                      |
| --------- | ----------------------------------------- |
| Monthly   | Review AI accuracy and update themes list |
| Quarterly | Refresh Google Ads API credentials        |
| As needed | Update GAQL fields for new metrics        |

---

## ⚙️ API Verification

**Endpoint:**
`POST https://googleads.googleapis.com/v17/customers/{customer_id}/googleAds:search`

**Scopes:**
`https://www.googleapis.com/auth/adwords`

**GAQL Query:**

```sql
SELECT ad_group_ad.ad.id,
       ad_group_ad.ad.responsive_search_ad.headlines,
       ad_group.name,
       metrics.impressions,
       metrics.clicks,
       metrics.ctr
FROM ad_group_ad
WHERE segments.date DURING LAST_30_DAYS
  AND metrics.impressions &gt; 100
ORDER BY metrics.clicks DESC
LIMIT 1000
```

✅ Fully valid query — verified for GAQL syntax, fields, and resource joins.
✅ OAuth2 flow handled by n8n’s `googleAdsOAuth2Api`.
✅ Optional: add `"timeout": 60000` for large accounts.

---

## 📈 Metrics of Success

| KPI                        | Target           |
| -------------------------- | ---------------- |
| Report accuracy            | ≥ 95 %           |
| Monthly automation success | ≥ 99 %           |
| CTR improvement tracking   | +3–5 % over time |

---

## 🔗 References

* [Google Ads API Docs](https://developers.google.com/google-ads/api/docs/start)
* [LangChain in n8n](https://docs.n8n.io/integrations/langchain/)
* [OpenAI API Reference](https://platform.openai.com/docs)
* [Google Sheets API](https://developers.google.com/sheets/api)
* [Slack Incoming Webhooks](https://api.slack.com/messaging/webhooks)

---

### 🎯 Conclusion

You now have a **fully automated Google Ads performance analysis workflow** powered by:

* **Google Ads API** for granular metrics
* **OpenAI GPT-4o** for intelligent recommendations
* **Google Sheets** for archiving
* **Slack** for team-wide updates

💡 **Result:** A recurring, data-driven optimization loop that improves ad performance every month — with zero manual effort.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
