# 📊 Automate commercial real estate monitoring with ScrapeGraphAI, Notion and Mailchimp

> ⚡ **88 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Property Listing Aggregator with Mailchimp and Notion

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow scrapes multiple commercial-real-estate websites, consolidates new property listings into Notion, and emails weekly availability updates or immediate space alerts to a Mailchimp audience. It automates the end-to-end process so business owners can stay on top of the latest spaces without manual searching.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n.cloud)
- ScrapeGraphAI community node installed
- Active Notion workspace with permission to create/read databases
- Mailchimp account with at least one Audience list
- Basic understanding of JSON; ability to add API credentials in n8n

### Required Credentials
- **ScrapeGraphAI API Key** – Enables web scraping functionality
- **Notion OAuth2 / Integration Token** – Writes data into Notion database
- **Mailchimp API Key** – Sends campaigns and individual emails
- *(Optional)* **Proxy credentials** – If target real-estate sites block your IP

### Specific Setup Requirements
| Resource | Requirement | Example |
|----------|-------------|---------|
| Notion   | Database with property fields (Address, Price, SqFt, URL, Availability) | Database ID: `abcd1234efgh` |
| Mailchimp | Audience list where alerts are sent | Audience ID: `f3a2b6c7d8` |
| ScrapeGraphAI | YAML/JSON config per site | Stored inside the ScrapeGraphAI node |

## How it works

This workflow scrapes multiple commercial-real-estate websites, consolidates new property listings into Notion, and emails weekly availability updates or immediate space alerts to a Mailchimp audience. It automates the end-to-end process so business owners can stay on top of the latest spaces without manual searching.

## Key Steps:
- **Manual Trigger / CRON**: Starts the workflow weekly or on-demand.
- **Code (Site List Builder)**: Generates an array of target URLs for ScrapeGraphAI.
- **Split In Batches**: Processes URLs in manageable groups to avoid rate limits.
- **ScrapeGraphAI**: Extracts property details from each site.
- **IF (New vs Existing)**: Checks whether the listing already exists in Notion.
- **Notion**: Inserts new listings or updates existing records.
- **Set**: Formats email content (HTML & plaintext).
- **Mailchimp**: Sends a campaign or automated alert to subscribers.
- **Sticky Notes**: Provide documentation and future-enhancement pointers.

## Set up steps

**Setup Time: 15-25 minutes**

1. **Install Community Node**  
   Navigate to *Settings → Community Nodes* and install “ScrapeGraphAI”.
2. **Create Notion Integration**  
   - Go to Notion *Settings → Integrations → Develop your own integration*.  
   - Copy the integration token and share your target database with the integration.
3. **Add Mailchimp API Key**  
   - In Mailchimp: *Account → Extras → API keys*.  
   - Copy an existing key or create a new one, then add it to n8n credentials.
4. **Build Scrape Config**  
   In the ScrapeGraphAI node, paste a YAML/JSON selector config for each website (address, price, sqft, url, availability).
5. **Configure the URL List**  
   Open the first Code node. Replace the placeholder array with your target listing URLs.
6. **Map Notion Fields**  
   Open the Notion node and map scraped fields to your database properties. Save.
7. **Design Email Template**  
   In the Set node, tweak the HTML and plaintext blocks to match your brand.
8. **Test the Workflow**  
   Trigger manually, check that Notion rows are created and Mailchimp sends the message.
9. **Schedule**  
   Add a CRON node (weekly) or leave the Manual Trigger for ad-hoc runs.

## Node Descriptions

### Core Workflow Nodes:
- **Manual Trigger / CRON** – Kicks off the workflow either on demand or on a schedule.
- **Code (Site List Builder)** – Holds an array of commercial real-estate URLs and outputs one item per URL.
- **Split In Batches** – Prevents hitting anti-bot limits by processing URLs in groups (default: 5).
- **ScrapeGraphAI** – Crawls each URL, parses DOM with CSS/XPath selectors, returns structured JSON.
- **IF (New Listing?)** – Compares scraped listing IDs against existing Notion database rows.
- **Notion** – Creates or updates pages representing property listings.
- **Set (Email Composer)** – Builds dynamic email subject, body, and merge tags for Mailchimp.
- **Mailchimp** – Uses the *Send Campaign* endpoint to email your audience.
- **Sticky Note** – Contains inline documentation and customization reminders.

### Data Flow:
1. **Manual Trigger/CRON** → **Code (URLs)** → **Split In Batches** → **ScrapeGraphAI** → **IF (New?)**  
2. True path → **Notion (Create)** → **Set (Email)** → **Mailchimp**  
3. False path → *(skip)*

## Customization Examples

### Filter Listings by Maximum Budget
```javascript
// Inside the IF node (custom expression)
{{$json["price"] &lt;= 3500}}
```

### Change Email Frequency to Daily Digests
```json
{
  "nodes": [
    {
      "name": "Daily CRON",
      "type": "n8n-nodes-base.cron",
      "parameters": {
        "triggerTimes": [
          {
            "hour": 8,
            "minute": 0
          }
        ]
      }
    }
  ]
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "address": "123 Market St, Suite 400",
  "price": 3200,
  "sqft": 950,
  "url": "https://examplebroker.com/listing/123",
  "availability": "Immediate",
  "new": true
}
```

## Troubleshooting

### Common Issues
1. **Scraper returns empty objects** – Verify selectors in ScrapeGraphAI config; inspect the site’s HTML for changes.
2. **Duplicate entries in Notion** – Ensure the “IF” node checks a unique ID (e.g., listing URL) before creating a page.

### Performance Tips
- Reduce batch size or add delays in ScrapeGraphAI to avoid site blocking.
- Cache previously scraped URLs in an external file or database for faster runs.

**Pro Tips:**
- Rotate proxies in ScrapeGraphAI for heavily protected sites.
- Use Notion rollups to calculate total available square footage automatically.
- Leverage Mailchimp merge tags (`*|FNAME|*`) in the Set node for personalized alerts.

## 🔗 Nodes Used

Mailchimp, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
