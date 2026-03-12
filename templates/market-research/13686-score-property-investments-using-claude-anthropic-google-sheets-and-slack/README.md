# 📊 Score property investments using Claude (Anthropic), Google Sheets and Slack

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

This workflow scrapes property listings, enriches them with market data, and uses Claude AI to score each listing's investment potential based on rental yield, capital growth trends, location desirability, and risk factors.

### How it works

1. **Trigger** - Scheduled run initiates a scrape job
2. **Scrape Listings** - Fetches property listings from target URL(s) via HTTP
3. **Parse Listings** - Extracts structured data (price, bedrooms, suburb, etc.)
4. **Fetch Market Data** - Pulls suburb median prices, rental yields, vacancy rates
5. **Fetch Demographics** - Gets population growth, income levels, infrastructure data
6. **Combine Enrichment** - Merges all data per listing
7. **AI Investment Scoring** - Claude AI scores each listing (0–100) with rationale
8. **Filter Top Picks** - Keeps listings above configurable score threshold
9. **Format Report** - Builds a clean investment report
10. **Save to Google Sheets** - Logs all scored listings for tracking
11. **Send Digest** - Posts top picks to Slack or email

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** - Claude AI for investment scoring
   - **Google Sheets** - Results & historical tracking
   - **Slack OAuth** - Daily digest notifications
   - **RapidAPI / Zillow / Domain API** - Property market data
3. Set your target listing URLs in the 'Configure Scrape Targets' node
4. Set your score threshold (default: 65) in 'Filter Top Picks'
5. Set your Google Sheet ID and Slack channel
6. Activate the workflow or POST to the webhook

### Sample Webhook Payload
```json
{
  "searchUrl": "https://www.domain.com.au/sale/sydney/?bedrooms=2-4&price=500000-900000",
  "suburb": "Parramatta",
  "maxListings": 20,
  "scoreThreshold": 65
}
```

### Scoring Criteria (Claude AI)
- **Rental Yield** - Gross and estimated net yield vs suburb average
- **Capital Growth** - 5-year suburb price trend
- **Location Score** - Transport, schools, amenities proximity
- **Vacancy Risk** - Suburb rental demand and vacancy rate
- **Cash Flow** - Estimated weekly cash flow after mortgage
- **Risk Flags** - Flood zones, high crime, oversupply signals

### Features
- Multi-source market enrichment
- AI-powered investment scoring with SWOT analysis
- Automated filtering of top-performing listings
- Google Sheets audit trail with historical scores
- Slack/email digest of daily top picks

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
