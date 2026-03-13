# 📊 Healthcare policy monitoring with ScrapeGraphAI, Pipedrive and email alerts

> ⚡ **53 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Medical Research Tracker with Email and Pipedrive


**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically scans authoritative healthcare policy websites for new research, bills, or regulatory changes, stores relevant findings in Pipedrive, and immediately notifies key stakeholders via email. It is ideal for healthcare administrators and policy analysts who need to stay ahead of emerging legislation or guidance that could impact clinical operations, compliance, and strategy.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n cloud)
- ScrapeGraphAI community node installed
- Pipedrive account and API token
- SMTP credentials (or native n8n Email credentials) for sending alerts
- List of target URLs or RSS feeds from government or healthcare policy organizations
- Basic familiarity with n8n credential setup

### Required Credentials
| Service            | Credential Name | Purpose                           |
|--------------------|-----------------|-----------------------------------|
| ScrapeGraphAI      | API Key         | Perform web scraping              |
| Pipedrive          | API Token       | Create / update deals & notes     |
| Email (SMTP/Nodemailer) | SMTP creds     | Send alert emails                 |

### Environment Variables (optional)
| Variable                | Example Value                | Description                                   |
|-------------------------|------------------------------|-----------------------------------------------|
| N8N_DEFAULT_EMAIL_FROM  | policy-bot@yourorg.com       | Default sender for Email Send node            |
| POLICY_KEYWORDS         | telehealth, Medicare, HIPAA  | Comma-separated keywords for filtering        |

## How it works

This workflow automatically scans authoritative healthcare policy websites for new research, bills, or regulatory changes, stores relevant findings in Pipedrive, and immediately notifies key stakeholders via email. It is ideal for healthcare administrators and policy analysts who need to stay ahead of emerging legislation or guidance that could impact clinical operations, compliance, and strategy.

## Key Steps:
- **Manual Trigger**: Kick-starts the workflow or schedules it via cron.
- **Set → URL List**: Defines the list of healthcare policy pages or RSS feeds to scrape.
- **Split In Batches**: Iterates through each URL so scraping happens sequentially.
- **ScrapeGraphAI**: Extracts headlines, publication dates, and links.
- **Code (Filter & Normalize)**: Removes duplicates, standardizes JSON structure, and applies keyword filters.
- **HTTP Request**: Optionally enriches data with summary content using external APIs (e.g., OpenAI, SummarizeBot).
- **If Node**: Checks if the policy item is new (not already logged in Pipedrive).
- **Pipedrive**: Creates a new deal or note for tracking and collaboration.
- **Email Send**: Sends an alert to compliance or leadership teams with the policy summary.
- **Sticky Note**: Provides inline documentation inside the workflow.

## Set up steps

**Setup Time: 15–20 minutes**

1. **Install ScrapeGraphAI**: In n8n, go to “Settings → Community Nodes” and install `n8n-nodes-scrapegraphai`.
2. **Create Credentials**:  
   a. Pipedrive → “API Token” from your Pipedrive settings → add in n8n.  
   b. ScrapeGraphAI → obtain API key → add as credential.  
   c. Email SMTP → configure sender details in n8n.
3. **Import Workflow**: Copy the JSON template into n8n (“Import from clipboard”).
4. **Update URL List**: Open the initial Set node and replace placeholder URLs with the sites you monitor (e.g., `cms.gov`, `nih.gov`, `who.int`, state health departments).
5. **Define Keywords (optional)**:  
   a. Open the Code node “Filter & Normalize”.  
   b. Adjust the `const keywords = [...]` array to match topics you care about.
6. **Test Run**: Trigger manually; verify that:  
   - Scraped items appear in the execution logs.  
   - New deals/notes show up in Pipedrive.  
   - Alert email lands in your inbox.
7. **Schedule**: Add a Cron node (e.g., every 6 hours) in place of Manual Trigger for automated execution.

## Node Descriptions

### Core Workflow Nodes:
- **Manual Trigger** – Launches the workflow on demand.
- **Set – URL List** – Holds an array of target policy URLs/RSS feeds.
- **Split In Batches** – Processes each URL one at a time to avoid rate limiting.
- **ScrapeGraphAI** – Scrapes page content and parses structured data.
- **Code – Filter & Normalize** – Cleans results, removes duplicates, applies keyword filter.
- **HTTP Request – Summarize** – Calls a summarization API (optional).
- **If – Duplicate Check** – Queries Pipedrive to see if the policy item already exists.
- **Pipedrive (Deal/Note)** – Logs a new deal or adds a note with policy details.
- **Email Send – Alert** – Notifies subscribed stakeholders.
- **Sticky Note** – Embedded instructions inside the canvas.

### Data Flow:
1. **Manual Trigger** → **Set (URLs)** → **Split In Batches** → **ScrapeGraphAI** → **Code (Filter)** → **If (Duplicate?)** → **Pipedrive** → **Email Send**

## Customization Examples

### 1. Add Slack notifications
```javascript
// Insert after Email Send
{
  "node": "Slack",
  "parameters": {
    "channel": "#policy-alerts",
    "text": `New policy update: ${$json["title"]} - ${$json["url"]}`
  }
}
```

### 2. Use different CRM (HubSpot)
```javascript
// Replace Pipedrive node config
{
  "resource": "deal",
  "operation": "create",
  "title": $json["title"],
  "properties": {
    "dealstage": "appointmentscheduled",
    "description": $json["summary"]
  }
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "title": "Telehealth Expansion Act of 2024",
  "date": "2024-05-30",
  "url": "https://www.congress.gov/bill/118th-congress-house-bill/1234",
  "summary": "This bill proposes expanding Medicare reimbursement for telehealth services...",
  "source": "congress.gov",
  "status": "new"
}
```

## Troubleshooting

### Common Issues
1. **Empty Scrape Results** – Check if the target site uses JavaScript rendering; ScrapeGraphAI may need a headless browser option enabled.
2. **Duplicate Deals in Pipedrive** – Ensure the “If Duplicate?” node compares a unique field (e.g., URL or title) before creating a new deal.

### Performance Tips
- Limit batch size to avoid API rate limits.
- Cache or store the last scraped timestamp to skip unchanged pages.

**Pro Tips:**
- Combine this workflow with an n8n “Cron” or “Webhook” trigger for fully automated monitoring.
- Use environment variables for keywords and email recipients to avoid editing nodes each time.
- Leverage Pipedrive’s automations to notify additional teams (e.g., legal) when high-priority items are logged.

## 🔗 Nodes Used

Send Email, HTTP Request, Pipedrive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
