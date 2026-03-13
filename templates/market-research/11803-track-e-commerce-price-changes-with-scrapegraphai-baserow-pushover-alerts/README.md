# 📊 Track e-commerce price changes with ScrapeGraphAI, Baserow & Pushover alerts

> ⚡ **205 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Product Price Monitor with Pushover and Baserow

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically scrapes multiple e-commerce sites for selected products, analyzes weekly pricing trends, stores historical data in Baserow, and sends an instant Pushover notification when significant price changes occur. It is ideal for retailers who need to track seasonal fluctuations and optimize inventory or pricing strategies.

## Pre-conditions/Requirements

### Prerequisites
- An active n8n instance (self-hosted or n8n.cloud)
- ScrapeGraphAI community node installed
- At least one publicly accessible webhook URL (for on-demand runs)
- A Baserow database with a table prepared for product data
- Pushover account and registered application

### Required Credentials
- **ScrapeGraphAI API Key** – Enables web-scraping capabilities  
- **Baserow: Personal API Token** – Allows read/write access to your table  
- **Pushover: User Key & API Token** – Sends mobile/desktop push notifications  
- (Optional) **HTTP Basic Token or API Keys** for any private e-commerce endpoints you plan to monitor

### Baserow Table Specification
| Field Name | Type      | Description              |
|------------|-----------|--------------------------|
| Product ID | Number    | Internal or SKU          |
| Name       | Text      | Product title            |
| URL        | URL       | Product page             |
| Price      | Number    | Current price (float)    |
| Currency   | Single select (`USD`, `EUR`, etc.) |
| Last Seen  | Date/Time | Last price check         |
| Trend      | Number    | 7-day % change           |

## How it works

This workflow automatically scrapes multiple e-commerce sites for selected products, analyzes weekly pricing trends, stores historical data in Baserow, and sends an instant Pushover notification when significant price changes occur. It is ideal for retailers who need to track seasonal fluctuations and optimize inventory or pricing strategies.

## Key Steps:
- **Webhook Trigger**: Manually or externally trigger the weekly price-check run.
- **Set Node**: Define an array of product URLs and metadata.
- **Split In Batches**: Process products one at a time to avoid rate limits.
- **ScrapeGraphAI Node**: Extract current price, title, and availability from each URL.
- **If Node**: Determine if price has changed &gt; ±5 % since last entry.
- **HTTP Request (Trend API)**: Retrieve seasonal trend scores (optional).
- **Merge Node**: Combine scrape data with trend analysis.
- **Baserow Nodes**: Upsert latest record and fetch historical data for comparison.
- **Pushover Node**: Send alert when significant price movement detected.
- **Sticky Notes**: Documentation and inline comments for maintainability.

## Set up steps

**Setup Time: 15-25 minutes**

1. **Install Community Node**: In n8n, go to “Settings → Community Nodes” and install **ScrapeGraphAI**.
2. **Create Baserow Table**: Match the field structure shown above.
3. **Obtain Credentials**: 
   - ScrapeGraphAI API key from your dashboard  
   - Baserow personal token (`/account/settings`)  
   - Pushover user key & API token
4. **Clone Workflow**: Import this template into n8n.
5. **Configure Credentials in Nodes**: Open each ScrapeGraphAI, Baserow, and Pushover node and select/enter the appropriate credential.
6. **Add Product URLs**: Open the first **Set** node and replace the example array with your actual product list.
7. **Adjust Thresholds**: In the **If** node, change the `5` value if you want a higher/lower alert threshold.
8. **Test Run**: Execute the workflow manually; verify Baserow rows and the Pushover notification.
9. **Schedule**: Add a **Cron** trigger or external scheduler to run weekly.

## Node Descriptions

### Core Workflow Nodes:
- **Webhook** – Entry point for manual or API-based triggers.
- **Set** – Holds the array of product URLs and meta fields.
- **SplitInBatches** – Iterates through each product to prevent request spikes.
- **ScrapeGraphAI** – Scrapes price, title, and currency from product pages.
- **If** – Compares new price vs. previous price in Baserow.
- **HTTP Request** – Calls a trend API (e.g., Google Trends) to get seasonal score.
- **Merge** – Combines scraping results with trend data.
- **Baserow (Upsert & Read)** – Writes fresh data and fetches historical price for comparison.
- **Pushover** – Sends formatted push notification with price delta.
- **StickyNote** – Documents purpose and hints within the workflow.

### Data Flow:
1. **Webhook** → **Set** → **SplitInBatches** → **ScrapeGraphAI**  
2. **ScrapeGraphAI** → **If**  
   - **True** branch → **HTTP Request** → **Merge** → **Baserow Upsert** → **Pushover**  
   - **False** branch → **Baserow Upsert**

## Customization Examples

### Change Notification Channel to Slack
```javascript
// Replace the Pushover node with Slack
{
  "channel": "#pricing-alerts",
  "text": `🚨 ${$json["Name"]} changed by ${$json["delta"]}% – now ${$json["Price"]} ${$json["Currency"]}`
}
```

### Additional Data Enrichment (Stock Status)
```javascript
// Add to ScrapeGraphAI's selector map
{
  "stock": {
    "selector": ".availability span",
    "type": "text"
  }
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "ProductID": 12345,
  "Name": "Winter Jacket",
  "URL": "https://shop.example.com/winter-jacket",
  "Price": 79.99,
  "Currency": "USD",
  "LastSeen": "2024-11-20T10:34:18.000Z",
  "Trend": 12,
  "delta": -7.5
}
```

## Troubleshooting

### Common Issues
1. **Empty scrape result** – Check if the product page changed its HTML structure; update CSS selectors in ScrapeGraphAI.
2. **Baserow “Row not found” errors** – Ensure `Product ID` or another unique field is set as the primary key for upsert.

### Performance Tips
- Limit batch size to 5-10 URLs to avoid IP blocking.
- Use n8n’s built-in proxy settings if scraping sites with geo-restrictions.

**Pro Tips:**
- Store historical JSON responses in a separate Baserow table for deeper analytics.
- Standardize currency symbols to avoid false change detections.
- Couple this workflow with an **n8n Dashboard** to visualize price trends in real-time.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Pushover

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
