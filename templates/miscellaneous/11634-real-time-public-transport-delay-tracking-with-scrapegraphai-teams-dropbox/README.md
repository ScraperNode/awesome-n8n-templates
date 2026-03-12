# 🔧 Real-time public transport delay tracking with ScrapeGraphAI, Teams & Dropbox

> ⚡ **51 views** · 🔧 [Miscellaneous](../)

## Description

# Public Transport Schedule & Delay Tracker with Microsoft Teams and Dropbox

![Workflow Preview Image](https://via.placeholder.com/800x400/4CAF50/FFFFFF?text=Public+Transport+Schedule+%26+Delay+Tracker+Workflow+Preview)

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically scrapes public transport websites or apps for real-time schedules and service alerts, then pushes concise delay notifications to Microsoft Teams while archiving full-detail JSON snapshots in Dropbox. Ideal for commuters and travel coordinators, it keeps riders informed and maintains a historical log of disruptions.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n.cloud)
- ScrapeGraphAI community node installed
- Microsoft Teams incoming webhook configured
- Dropbox account with an app token created
- Public transit data source (website or API) that is legally scrapable or offers open data

### Required Credentials
- **ScrapeGraphAI API Key** – enables web scraping
- **Microsoft Teams Webhook URL** – posts messages into a channel
- **Dropbox Access Token** – saves JSON files to Dropbox

### Specific Setup Requirements
| Item | Example | Notes |
|------|---------|-------|
| Transit URL(s) | https://mycitytransit.com/line/42 | Must return the schedule or service alert data you need |
| Polling Interval | 5 min | Adjust via Cron node or external trigger |
| Teams Channel | #commuter-updates | Create an incoming webhook in channel settings |

## How it works

This workflow automatically scrapes public transport websites or apps for real-time schedules and service alerts, then pushes concise delay notifications to Microsoft Teams while archiving full-detail JSON snapshots in Dropbox. Ideal for commuters and travel coordinators, it keeps riders informed and maintains a historical log of disruptions.

## Key Steps:
- **Webhook Trigger**: Starts the workflow (can be replaced with Cron for polling).
- **Set Node**: Stores target route IDs, URLs, or API endpoints.
- **SplitInBatches**: Processes multiple routes one after another to avoid rate limits.
- **ScrapeGraphAI**: Scrapes each route page/API and returns structured schedule & alert data.
- **Code Node (Normalize)**: Cleans & normalizes scraped fields (e.g., converts times to ISO).
- **If Node (Delay Detected?)**: Compares live data vs. expected timetable to detect delays.
- **Merge Node**: Combines route metadata with delay information.
- **Microsoft Teams Node**: Sends alert message and rich card to the selected Teams channel.
- **Dropbox Node**: Saves the full JSON snapshot to a dated folder for historical reference.
- **StickyNote**: Documents the mapping between scraped fields and final JSON structure.

## Set up steps

**Setup Time: 15-25 minutes**

1. **Clone or Import** the JSON workflow into your n8n instance.
2. **Install ScrapeGraphAI** community node if you haven’t already (`Settings → Community Nodes`).
3. **Open the Set node** and enter your target routes or API endpoints (array of URLs/IDs).
4. **Configure ScrapeGraphAI**:
   - Add your API key in the node’s credentials section.
   - Define CSS selectors or API fields inside the node parameters.
5. **Add Microsoft Teams credentials**:
   - Paste your channel’s incoming webhook URL into the Microsoft Teams node.
   - Customize the message template (e.g., include route name, delay minutes, reason).
6. **Add Dropbox credentials**:
   - Provide the access token and designate a folder path (e.g., `/TransitLogs/`).
7. **Customize the If node** logic to match your delay threshold (e.g., ≥5 min).
8. **Activate** the workflow and trigger via the webhook URL, or add a Cron node (every 5 min).

## Node Descriptions

### Core Workflow Nodes:
- **Webhook** – External trigger for on-demand checks or recurring scheduler.
- **Set** – Defines static or dynamic variables such as route list and thresholds.
- **SplitInBatches** – Iterates through each route to control request volume.
- **ScrapeGraphAI** – Extracts live schedule and alert data from transit websites/APIs.
- **Code (Normalize)** – Formats scraped data, merges dates, and calculates delay minutes.
- **If (Delay Detected?)** – Branches the flow based on presence of delays.
- **Merge** – Re-assembles metadata with computed delay results.
- **Microsoft Teams** – Sends formatted notifications to Teams channels.
- **Dropbox** – Archives complete JSON payloads for auditing and analytics.
- **StickyNote** – Provides inline documentation for maintainers.

### Data Flow:
1. **Webhook** → **Set** → **SplitInBatches** → **ScrapeGraphAI** → **Code (Normalize)** → **If (Delay Detected?)**  
   ├─ true → **Merge** → **Microsoft Teams** → **Dropbox**  
   └─ false → **Dropbox**

## Customization Examples

### Change to Slack instead of Teams
```javascript
// Replace Microsoft Teams node with Slack node
{
  "text": `🚊 *${$json.route}* is delayed by *${$json.delay}* minutes.`,
  "channel": "#commuter-updates"
}
```

### Filter only major delays (&gt;10 min)
```javascript
// In If node, use:
return $json.delay &gt;= 10;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "route": "Line 42",
  "expected_departure": "2024-04-22T14:05:00Z",
  "actual_departure": "2024-04-22T14:17:00Z",
  "delay": 12,
  "status": "delayed",
  "reason": "Signal failure at Main Station",
  "scraped_at": "2024-04-22T13:58:22Z",
  "source_url": "https://mycitytransit.com/line/42"
}
```

## Troubleshooting

### Common Issues
1. **ScrapeGraphAI returns empty data** – Verify CSS selectors/API fields match the current website markup; update selectors after site redesigns.
2. **Teams messages not arriving** – Ensure the Teams webhook URL is correct and the incoming webhook is still enabled.
3. **Dropbox writes fail** – Check folder path, token scopes (`files.content.write`), and available storage quota.

### Performance Tips
- Limit `SplitInBatches` to 5-10 routes per run to avoid IP blocking.
- Cache unchanged schedules locally and fetch only alert pages for faster runs.

**Pro Tips:**
- Use environment variables for API keys & webhook URLs to keep credentials secure.
- Attach a Cron node set to off-peak hours (e.g., 4 AM) for daily full-schedule backups.
- Add a Grafana dashboard that reads the Dropbox archive for long-term delay analytics.

## 🔗 Nodes Used

Dropbox, Webhook, Microsoft Teams

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
