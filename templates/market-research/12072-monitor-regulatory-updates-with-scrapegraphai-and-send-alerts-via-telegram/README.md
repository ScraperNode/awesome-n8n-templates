# 📊 Monitor regulatory updates with ScrapeGraphAI and send alerts via Telegram

> ⚡ **23 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Breaking News Aggregator with Telegram and Redis

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow monitors selected government websites, regulatory bodies, and legal-news portals for new or amended regulations relevant to specific industries. It scrapes the latest headlines, compares them against previously recorded items in Redis, and pushes real-time compliance alerts to a Telegram channel or chat.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or cloud)
- ScrapeGraphAI community node installed
- Redis server accessible from n8n
- Telegram Bot created via BotFather
- (Optional) Cron node if you want fully automated scheduling instead of manual trigger

### Required Credentials
- **ScrapeGraphAI API Key** – Enables ScrapeGraphAI scraping functionality  
- **Telegram Bot Token** – Allows n8n to send messages via your bot  
- **Redis Credentials** – Host, port, and (if set) password for your Redis instance  

### Redis Setup Requirements
| Key Name | Description | Example |
|----------|-------------|---------|
| `latestRegIds` | Redis Set used to store hashes/IDs of the most recent regulatory articles processed | `latestRegIds` |

&gt; Hint: Use a dedicated Redis DB (e.g., DB 1) to keep workflow data isolated from other applications.

## How it works

This workflow monitors selected government websites, regulatory bodies, and legal-news portals for new or amended regulations relevant to specific industries. It scrapes the latest headlines, compares them against previously recorded items in Redis, and pushes real-time compliance alerts to a Telegram channel or chat.

## Key Steps:
- **Manual Trigger / Cron**: Starts the workflow manually or on a set schedule (e.g., daily at 06:00 UTC).  
- **Code (Define Sources)**: Returns an array of URL objects pointing to regulatory pages to monitor.  
- **SplitInBatches**: Iterates through each source URL in manageable chunks.  
- **ScrapeGraphAI**: Extracts article titles, publication dates, and article URLs from each page.  
- **Merge (Combine Results)**: Consolidates scraped items into a single stream.  
- **If (Deduplication Check)**: Verifies whether each article ID already exists in Redis.  
- **Set (Format Message)**: Creates a human-readable Telegram message string.  
- **Telegram**: Sends the formatted compliance alert to your chosen chat/channel.  
- **Redis (Add New IDs)**: Stores the article ID so it is not sent again in the future.  
- **Sticky Note**: Provides inline documentation inside the workflow canvas.

## Set up steps

**Setup Time: 10-15 minutes**

1. **Install community nodes**: In n8n, go to *Settings → Community Nodes* and install `n8n-nodes-scrapegraphai`.  
2. **Create credentials**:  
   a. Telegram → *Credentials → Telegram API* → paste your bot token.  
   b. Redis → *Credentials → Redis* → fill host, port, password, DB.  
   c. ScrapeGraphAI → *Credentials → ScrapeGraphAI API* → enter your key.  
3. **Configure the “Define Sources” Code node**: Replace the placeholder URLs with the regulatory pages you need to monitor.  
4. **Update Telegram chat ID**: Open any chat with your bot and use `https://api.telegram.org/bot&lt;token&gt;/getUpdates` to find the `chat.id`. Insert this value in the Telegram node.  
5. **Adjust frequency**: Replace the Manual Trigger with a Cron node (e.g., daily 06:00 UTC).  
6. **Test the workflow**: Execute once manually; confirm messages appear in Telegram and that Redis keys are created.  
7. **Activate**: Enable the workflow so it runs automatically according to your schedule.

## Node Descriptions

### Core Workflow Nodes:
- **Manual Trigger** – Allows on-demand execution during development/testing.  
- **Code (Define Sources)** – Returns an array of page URLs and meta info to the workflow.  
- **SplitInBatches** – Prevents overloading websites by scraping in controlled groups.  
- **ScrapeGraphAI** – Performs the actual web scraping using an AI-assisted parser.  
- **Merge** – Merges data streams from multiple batches into one.  
- **If (Check Redis)** – Filters out already-processed articles using Redis SET membership.  
- **Set** – Shapes output into a user-friendly Telegram message.  
- **Telegram** – Delivers compliance alerts to stakeholders in real time.  
- **Redis** – Persists article IDs to avoid duplicate notifications.  
- **Sticky Note** – Contains usage tips directly on the canvas.

### Data Flow:
1. **Manual Trigger** → **Code (Define Sources)** → **SplitInBatches** → **ScrapeGraphAI**  
2. **ScrapeGraphAI** → **Merge** → **If (Check Redis)**  
3. **If (true)** → **Set** → **Telegram** → **Redis**

## Customization Examples

### Change industries or keywords
```javascript
// Code node snippet
return [
  {
    url: "https://regulator.gov/energy-updates",
    industry: "Energy",
    keywords: ["renewable", "grid", "tariff"]
  },
  {
    url: "https://financewatch.gov/financial-rules",
    industry: "Finance",
    keywords: ["AML", "KYC", "cryptocurrency"]
  }
];
```

### Modify Telegram message formatting
```javascript
// Set node “Parameters → Value”
items[0].json.message = `🛡️ *${$json.industry} Regulation Update*\n\n*${$json.title}*\n${$json.date}\n${$json.url}`;
return items;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "title": "EU Proposes New ESG Disclosure Rules",
  "date": "2024-04-18",
  "url": "https://europa.eu/legal/eu-proposes-esg-disclosure",
  "industry": "Finance"
}
```

## Troubleshooting

### Common Issues
1. **Empty scraped data** – Verify CSS selectors/XPath in the ScrapeGraphAI node; website structure may have changed.  
2. **Duplicate alerts** – Ensure Redis credentials point to the same DB across nodes; otherwise IDs are not shared.  

### Performance Tips
- Limit `SplitInBatches` to 2-3 URLs at a time if sites implement rate limiting.  
- Use environment variables for credentials to simplify migration between stages.

**Pro Tips:**
- Combine this workflow with n8n’s **Error Trigger** to log failures to Slack or email.  
- Maintain a CSV of source URLs in Google Sheets and fetch it dynamically via the Google Sheets node.  
- Pair with the **Webhook** node to let team members add new sources on the fly.

## 🔗 Nodes Used

Redis, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
