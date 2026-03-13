# 📊 Healthcare policy monitoring with ScrapeGraphAI, Pipedrive and Matrix alerts

> ⚡ **52 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Medical Research Tracker with Matrix and Pipedrive

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically monitors selected government and healthcare-policy websites, extracts newly published or updated policy documents, logs them as deals in a Pipedrive pipeline, and announces critical changes in a Matrix room. It gives healthcare administrators and policy analysts a near real-time view of policy developments without manual web checks.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n cloud)
- ScrapeGraphAI community node installed
- Active Pipedrive account with at least one pipeline
- Matrix account & accessible room for notifications
- Basic knowledge of n8n credential setup

### Required Credentials
- **ScrapeGraphAI API Key** – Enables the scraping engine  
- **Pipedrive OAuth2 / API Token** – Creates & updates deals  
- **Matrix Credentials** – Homeserver URL, user, access token (or password)

### Specific Setup Requirements
| Variable | Description | Example |
|----------|-------------|---------|
| `POLICY_SITES` | Comma-separated list of URLs to scrape | `https://health.gov/policies,https://who.int/proposals` |
| `PD_PIPELINE_ID` | Pipedrive pipeline where deals are created | `5` |
| `PD_STAGE_ID_ALERT` | Stage ID for “Review Needed” | `17` |
| `MATRIX_ROOM_ID` | Room to send alerts (incl. leading `!`) | `!policy:matrix.org` |

Edit the initial *Set* node to provide these values before running.

## How it works

This workflow automatically monitors selected government and healthcare-policy websites, extracts newly published or updated policy documents, logs them as deals in a Pipedrive pipeline, and announces critical changes in a Matrix room. It gives healthcare administrators and policy analysts a near real-time view of policy developments without manual web checks.

## Key Steps:
- **Scheduled Trigger**: Runs every 6 hours (configurable) to start the monitoring cycle.
- **Code (URL List Builder)**: Generates an array from `POLICY_SITES` for downstream batching.
- **SplitInBatches**: Iterates through each policy URL individually.
- **ScrapeGraphAI**: Scrapes page titles, publication dates, and summary paragraphs.
- **If (New vs Existing)**: Compares scraped hash with last run; continues only for fresh content.
- **Merge (Aggregate Results)**: Collects all “new” policies into a single payload.
- **Set (Deal Formatter)**: Maps scraped data to Pipedrive deal fields.
- **Pipedrive Node**: Creates or updates a deal per policy item.
- **Matrix Node**: Posts a formatted alert message in the specified Matrix room.

## Set up steps

**Setup Time: 15-20 minutes**

1. **Install Community Node**  
   – In n8n, go to *Settings → Community Nodes → Install* and search for **ScrapeGraphAI**.

2. **Add Credentials**  
   – *Create New* credentials for ScrapeGraphAI, Pipedrive, and Matrix under *Credentials*.

3. **Configure Environment Variables**  
   – Open the *Set (Initial Config)* node and replace placeholders (`POLICY_SITES`, `PD_PIPELINE_ID`, etc.) with your values.

4. **Review Schedule**  
   – Double-click the *Schedule Trigger* node to adjust the interval if needed.

5. **Activate Workflow**  
   – Click *Activate*. The workflow will run at the next scheduled interval.

6. **Verify Outputs**  
   – Check Pipedrive for new deals and the Matrix room for alert messages after the first run.

## Node Descriptions

### Core Workflow Nodes:
- **stickyNote** – Provides an at-a-glance description of the workflow logic directly on the canvas.
- **scheduleTrigger** – Fires the workflow periodically (default 6 hours).
- **code (URL List Builder)** – Splits the `POLICY_SITES` variable into an array.
- **splitInBatches** – Ensures each URL is processed individually to avoid timeouts.
- **scrapegraphAi** – Parses HTML and extracts policy metadata using XPath/CSS selectors.
- **if (New vs Existing)** – Uses hashing to ignore unchanged pages.
- **merge** – Combines all new items so they can be processed in bulk.
- **set (Deal Formatter)** – Maps scraped fields to Pipedrive deal properties.
- **matrix** – Sends formatted messages to a Matrix room for team visibility.
- **pipedrive** – Creates or updates deals representing each policy update.

### Data Flow:
1. **scheduleTrigger** → **code** → **splitInBatches** → **scrapegraphAi** → **if** → **merge** → **set** → **pipedrive** → **matrix**

## Customization Examples

### 1. Add another data field (e.g., policy author)
```javascript
// Inside ScrapeGraphAI node → Selectors
{
  "title": "//h1/text()",
  "date": "//time/@datetime",
  "summary": "//p[1]/text()",
  "author": "//span[@class='author']/text()"   // new line
}
```

### 2. Switch notifications from Matrix to Email
```javascript
// Replace Matrix node with “Send Email”
{
  "to": "policy-team@example.com",
  "subject": "New Healthcare Policy Detected: {{$json.title}}",
  "text": "Summary:\n{{$json.summary}}\n\nRead more at {{$json.url}}"
}
```

## Data Output Format

The workflow outputs structured JSON data for each new policy article:

```json
{
  "title": "Affordable Care Expansion Act – 2024",
  "url": "https://health.gov/policies/acea-2024",
  "date": "2024-06-14T09:00:00Z",
  "summary": "Proposes expansion of coverage to rural areas...",
  "source": "health.gov",
  "hash": "2d6f1c8e3b..."
}
```

## Troubleshooting

### Common Issues
1. **ScrapeGraphAI returns empty objects**  
   – Verify selectors match the current HTML structure; inspect the site with developer tools and update the node configuration.

2. **Duplicate deals appear in Pipedrive**  
   – Ensure the “Find or Create” option is enabled in the Pipedrive node, using the page `hash` or `url` as a unique key.

### Performance Tips
- Limit `POLICY_SITES` to under 50 URLs per run to avoid hitting rate limits.
- Increase Schedule Trigger interval if you notice ScrapeGraphAI rate-limiting.

**Pro Tips:**
- Store historical scraped data in a database node for long-term audit trails.
- Use the n8n *Workflow Executions* page to replay failed runs without waiting for the next schedule.
- Add an *Error Trigger* node to emit alerts if scraping or API calls fail.

## 🔗 Nodes Used

Pipedrive, Matrix, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
