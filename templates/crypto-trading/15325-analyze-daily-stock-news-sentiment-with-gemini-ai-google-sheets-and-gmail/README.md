# 📈 Analyze daily stock news sentiment with Gemini AI, Google Sheets and Gmail

> ⚡ **240 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Stock News Sentiment Automation using Gemini AI, Google Sheets & Gmail

This workflow automatically fetches daily stock market news, analyzes sentiment using Gemini AI, calculates impact scores, sends alerts for high-impact news and stores structured results in Google Sheets.

### Quick Implementation Steps

1. [Import the workflow into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Configure the **Market News API (HTTP Request node)**
3. Add your **Google Gemini API credentials**
4. Connect **Google Sheets** and create required columns
5. Configure **Gmail node** (add recipient email)
6. Activate the workflow


## What It Does

This workflow runs every day at **8 AM** and automatically collects the latest stock market news from a public API. It filters, cleans and processes the data to ensure only relevant and unique articles are analyzed.

Each news article is sent to **Google Gemini AI**, which classifies the sentiment as *bullish*, *bearish* or *neutral*, along with a confidence score and reasoning. The workflow then calculates an **impact score** based on sentiment and confidence.

High-impact news is immediately flagged and sent via email alerts, while all processed results are stored in a structured format in Google Sheets for tracking and analysis.


## Who It's For

- Stock traders and investors  
- Financial analysts  
- Algo trading developers  
- FinTech startups  
- Anyone tracking market sentiment automatically  


## Requirements

To use this workflow, you need:

- [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Public Market News API (already used in workflow)  
- Google Gemini API credentials  
- Google Sheets account  
- Gmail account for sending alerts  


## How It Works & Setup Guide

### 1. Trigger Setup

- The workflow starts using **Schedule Trigger**
- Runs daily at **8 AM**

### 2. Fetch Market News

- HTTP Request node calls:
```
https://api.tradient.org/v1/api/market/news
```
- No authentication required (public API)


### 3. Select & Limit News

- Code node extracts:
```
data.latest_news
````
- Limits to **top 2 articles**

 You can change this limit in:
```js
return output.slice(0, 2);
````

### 4. Normalize Data

* Ensures consistent fields:
  * `news_object.title`
  * `news_object.text`
  * `stock_name`

### 5. Remove Duplicate News

* Deduplicates using **title**
* Prevents repeated analysis

### 6. Process One-by-One

* Uses **SplitInBatches**
* Ensures controlled processing

### 7. Rate Limiting

* Wait node prevents API overuse
* Avoids hitting Gemini limits

### 8. Generate AI Prompt

* Creates structured prompt like:
  * Title
  * Content
  * Expected JSON output

### 9. AI Sentiment Analysis

* Uses **Gemini model:**
  ```
  models/gemini-3.1-flash-lite-preview
  ```
* Returns:
  * Sentiment
  * Confidence
  * Reason

### 10. Parse AI Response

* Removes markdown formatting
* Converts response into valid JSON
* Handles errors safely

### 11. Calculate Impact Score

Formula logic:

* Bullish → `confidence × 1.2`
* Bearish → `confidence × -1.2`
* Neutral → `confidence × 0.3`

### 12. High Impact Filter

* Conditions:
  * Impact &gt; 60
  * Impact &lt; -60

### 13. Email Alert Setup

You MUST configure:

* **Recipient email in Gmail node (`sendTo`)**

Example message:

```
Stock: XYZ
Title: News title
Sentiment: bullish
Impact: 75
Reason: Strong earnings report
```

### 14. Google Sheets Setup

Create a sheet with EXACT column names:

```
Title
Stock
Sentiment
Reason
```

**Important:**

* Column names must match exactly (case-sensitive)
* Do NOT rename fields
* Sheet must be connected in the node


## How To Customize Nodes

### Change Number of News Articles

Modify:

```js
return output.slice(0, 2);
```

### Adjust Impact Threshold

In **IF node**:

* Change:
  * `&gt; 60`
  * `&lt; -60`

### Modify AI Prompt

Edit **Generate Sentiment Prompt node** to:

* Add more context
* Include additional fields

### Add More Sheet Columns

Update Google Sheets node mapping:

* Add new fields like:
  * `confidence`
  * `impact_score`


## Add-ons (Enhancements)

* Slack/Telegram alerts instead of Gmail
* Dashboard (Power BI / Looker Studio)
* Store historical trends in database
* Add stock price correlation
* Multi-language news analysis
* Increase batch size with queue system


## Use Case Examples

1. **Daily Trading Signals**
   * Identify high-impact bullish/bearish news instantly

2. **Portfolio Monitoring**
   * Track sentiment around owned stocks

3. **Market Intelligence Systems**
   * Build automated research dashboards

4. **Algo Trading Input**
   * Feed sentiment into trading algorithms

5. **Financial News Aggregators**
   * Classify and rank news automatically

And many more custom use cases depending on your strategy.


## Troubleshooting Guide

| Issue                          | Possible Cause           | Solution                                            |
| ------------------------------ | ------------------------ | --------------------------------------------------- |
| No data in Google Sheets       | Incorrect column names   | Ensure exact match: Title, Stock, Sentiment, Reason |
| Emails not sending             | Gmail not configured     | Add credentials + recipient email                   |
| AI response parsing error      | Invalid JSON from Gemini | Check Parse node logs                               |
| Duplicate news still appearing | Title mismatch           | Improve deduplication logic                         |
| Workflow not triggering        | Schedule inactive        | Activate workflow                                   |
| API returns empty data         | API downtime             | Test endpoint manually                              |

---

## Need Help?

If you need help with:

* Setting up this workflow
* Customizing AI prompts
* Adding dashboards or alerts
* Scaling automation systems
* Building advanced trading workflows

Reach out to our [n8n workflow development experts](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** for advanced assistance.

We can help you build production-grade automation tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
