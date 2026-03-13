# 📊 Automated product price tracking with ScrapeGraphAI, Slack alerts and Jira tickets

> ⚡ **57 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Product Price Monitor with Slack and Jira

![Workflow Preview Image](https://via.placeholder.com/800x400/4E79A7/FFFFFF?text=Product+Price+Monitor+Workflow+Preview)

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically scrapes multiple e-commerce sites, analyses weekly seasonal price trends, and notifies your team in Slack while opening Jira tickets for items that require price adjustments. It helps retailers plan inventory and pricing by surfacing actionable insights every week.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n cloud)
- ScrapeGraphAI community node installed
- Slack workspace & channel for notifications
- Jira Software project (cloud or server)
- Basic JavaScript knowledge for optional custom code edits

### Required Credentials
- **ScrapeGraphAI API Key** – Enables web scraping
- **Slack OAuth Access Token** – Required by the Slack node
- **Jira Credentials** – Email & API token (cloud) or username & password (server)
- (Optional) **Proxy credentials** – If target websites block direct scraping

### Specific Setup Requirements
| Resource | Purpose | Example |
|----------|---------|---------|
| Product URL list | Seed URLs to monitor | `https://example.com/products-winter-sale` |
| Slack Channel | Receives trend alerts | `#pricing-alerts` |
| Jira Project Key | Tickets are created here | `ECOM` |

## How it works

This workflow automatically scrapes multiple e-commerce sites, analyses weekly seasonal price trends, and notifies your team in Slack while opening Jira tickets for items that require price adjustments. It helps retailers plan inventory and pricing by surfacing actionable insights every week.

## Key Steps:
- **Webhook Trigger**: Kicks off the workflow via a weekly schedule or manual call.
- **Set Product URLs**: Prepares the list of product pages to analyse.
- **SplitInBatches**: Processes URLs in manageable batches to avoid rate limits.
- **ScrapeGraphAI**: Extracts current prices, stock, and seasonality hints from each URL.
- **Code (Trend Logic)**: Compares scraped prices against historical averages.
- **If (Threshold Check)**: Determines if price deviations exceed ±10%.
- **Slack Node**: Sends a formatted message to the pricing channel for each deviation.
- **Jira Node**: Creates/updates a ticket linking to the product for further action.
- **Merge**: Collects all batch results for summary reporting.

## Set up steps

**Setup Time: 15-20 minutes**

1. **Install Community Nodes**: In n8n, go to *Settings → Community Nodes*, search for “ScrapeGraphAI”, and install.
2. **Add Credentials**:  
   a. Slack → *Credentials* → *New*, paste your Bot/User OAuth token.  
   b. Jira → *Credentials* → *New*, enter your domain, email/username, API token/password.  
   c. ScrapeGraphAI → *Credentials* → *New*, paste your API key.
3. **Import Workflow**: Upload or paste the JSON template into n8n.
4. **Edit the “Set Product URLs” Node**: Replace placeholder URLs with your real product pages.
5. **Configure Schedule**: Replace the Webhook Trigger with a Cron node (e.g., every Monday 09:00) or keep as webhook for manual runs.
6. **Map Jira Fields**: In the Jira node, ensure *Project Key*, *Issue Type* (e.g., Task), and *Summary* fields match your instance.
7. **Test Run**: Execute the workflow. Confirm Slack message appears and a Jira issue is created.
8. **Activate**: Toggle the workflow to *Active* so it runs automatically.

## Node Descriptions

### Core Workflow Nodes:
- **Webhook** – Default trigger, can be swapped with Cron for weekly automation.
- **Set (Product URLs)** – Stores an array of product links for scraping.
- **SplitInBatches** – Limits each ScrapeGraphAI call to five URLs to reduce load.
- **ScrapeGraphAI** – Crawls and parses HTML, returning JSON with `title`, `price`, `availability`.
- **Code (Trend Logic)** – Calculates percentage change vs. historical data (stored externally or hard-coded for demo).
- **If (Threshold Check)** – Routes items above/below the set variance.
- **Slack** – Posts a rich-format message containing product title, old vs. new price, and link.
- **Jira** – Creates or updates a ticket with priority set to *Medium* and assigns to the *Pricing* team lead.
- **Merge** – Recombines batch streams for optional reporting or storage.

### Data Flow:
1. **Webhook** → **Set (Product URLs)** → **SplitInBatches** → **ScrapeGraphAI** → **Code (Trend Logic)** → **If** → **Slack / Jira** → **Merge**

## Customization Examples

### Change Price Deviation Threshold
```javascript
// Code (Trend Logic) node
const threshold = 0.05; // 5% instead of default 10%
```

### Alter Slack Message Template
```javascript
{
  "text": `*${item.name}* price changed from *$${item.old}* to *$${item.new}* (${item.diff}%).`,
  "attachments": [
    {
      "title": "Product Link",
      "title_link": item.url,
      "color": "#4E79A7"
    }
  ]
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "product": "Winter Jacket",
  "url": "https://example.com/winter-jacket",
  "oldPrice": 129.99,
  "newPrice": 99.99,
  "change": -23.06,
  "scrapedAt": "2023-11-04T09:00:00Z",
  "status": "Below Threshold",
  "slackMsgId": "A1B2C3",
  "jiraIssueKey": "ECOM-101"
}
```

## Troubleshooting

### Common Issues
1. **ScrapeGraphAI returns empty data** – Verify selectors; many sites use dynamic rendering, require a headless browser flag.
2. **Slack message not delivered** – Check that the OAuth token scopes include `chat:write`; also confirm channel ID.
3. **Jira ticket creation fails** – Field mapping mismatch; ensure *Issue Type* is valid and required custom fields are supplied.

### Performance Tips
- Batch fewer URLs (e.g., 3 instead of 5) to reduce timeout risk.
- Cache historical prices in an external DB (Postgres, Airtable) instead of reading large CSVs in the Code node.

**Pro Tips:**
- Rotate proxies/IPs within ScrapeGraphAI to bypass aggressive e-commerce anti-bot measures.
- Add a Notion or Sheets node after Merge for historical logging.
- Use the *Error Trigger* workflow in n8n to alert when ScrapeGraphAI fails more than X times per run.

## 🔗 Nodes Used

Slack, Webhook, Jira Software

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
