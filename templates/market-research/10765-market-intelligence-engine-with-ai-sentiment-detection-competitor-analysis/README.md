# 📊 Market intelligence engine with AI sentiment detection & competitor analysis

> ⚡ **468 views** · 📊 [Market Research & Insights](../)

## Description

## How It Works
A scheduled process aggregates content from eight distinct data sources and standardizes all inputs into a unified format. AI models perform sentiment scoring, detect conspiracy or misinformation signals, and generate trend analyses across domains. An MCDN routing model prioritizes and channels insights to the appropriate workflows. Dashboards visualize real-time analytics, trigger KPIs based on thresholds, and compile comprehensive market-intelligence reports for stakeholders.

## Setup Steps
1. **Data Sources:** Connect news APIs, social media platforms, academic databases, code repositories, and documentation feeds.
2. **AI Analysis:** Configure OpenAI models for sentiment analysis, conspiracy detection, and trend scoring.
3. **Dashboards:** Integrate analytics platforms and enable automated email or reporting outputs.
4. **Storage:** Configure a database for historical records, trend archives, and competitive-intelligence storage.


## Prerequisites
Multi-source API credentials; OpenAI API key; dashboard platform access; email service; code repository access; academic database credentials

## Use Cases
Competitive intelligence monitoring; market trend analysis; technology landscape tracking; product strategy research; misinformation filtering

## Customization
Adjust sentiment thresholds; add/remove data sources; modify analysis rules; extend AI models

## Benefits
Reduces research time 80%; consolidates market intelligence; improves decision accuracy

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
