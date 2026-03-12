# 🤝 Monitor agency profitability with Facebook Ads, Shopify, Stripe, Clockify, Google Sheets, Slack and Gemini

> ⚡ **142 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Overview
Stop guessing your agency's actual margins. This workflow acts as a centralized financial brain for digital marketing agencies. It aggregates real-time data from your time-tracking, ad platforms, and payment processors to calculate precise profitability metrics (Gross Profit, Net Margin, ROAS, and Efficiency).

It doesn't just crunch numbers; it uses Google Gemini to act as a virtual CFO, analyzing the data and sending an executive summary to Slack with actionable insights, while simultaneously archiving the data to Google Sheets for historical trending.

## Key Features
Multi-Source Aggregation: Pulls data from Facebook Ads, Google Ads, Shopify, Stripe, and Clockify.

Smart Cost Allocation: Automatically calculates overhead (default 30%) and software costs against your gross revenue.

AI Analysis: Uses Google Gemini to review the calculated metrics and draft a "Human-readable" executive summary for Slack.

Dual Output: Sends instant alerts to Slack and logs granular data to Google Sheets.

## How to Setup
### 1. Configure Credentials
Ensure you have authenticated credentials for:

Clockify

Stripe & Shopify

Facebook Marketing API & Google Ads

Google Sheets & Google Gemini (PaLM)

Slack

### 2. Prepare Google Sheet
Create a new Google Sheet with the following headers in Row 1:
timestamp, date, totalRevenue, totalAdSpend, facebookAdSpend, googleAdSpend, totalTimeCost, grossProfit, profitMargin, roas.

### 3. Adjust Logic Configuration
Open the "Code in JavaScript" node. At the very top, you will see a CONFIG object. Edit these values to match your agency's model:


```
const CONFIG = {
  platformFeeRate: 0.029,      // Stripe/Shopify fees
  monthlySoftwareCosts: 500,   // Fixed monthly SaaS costs
  overheadRate: 0.30,          // Overhead % (rent, admin, etc)
  minProfitMargin: 20          // Target margin %
};
```

### 4. Remove Mock Data
The template includes "Set" nodes with mock data for testing purposes. Simply bypass these nodes and connect the API nodes directly to the "Merge" node when you are ready to go live.

## 🔗 Nodes Used

Google Sheets, Slack, Shopify, Facebook Graph API, Clockify, Stripe

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
