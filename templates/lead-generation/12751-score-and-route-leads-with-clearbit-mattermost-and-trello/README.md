# 🎣 Score and route leads with Clearbit, Mattermost and Trello

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Lead Scoring Pipeline with Mattermost and Trello

This workflow automatically enriches incoming form-based leads, calculates a lead-score from multiple data points, and then routes high-value prospects to a Mattermost alert channel while adding all leads to Trello for further handling. It centralizes lead intelligence and streamlines sales team triage—no manual spreadsheet work required.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n cloud)
- ScrapeGraphAI community node installed
- Active Trello and Mattermost workspaces
- Lead-capture form or webhook that delivers JSON payloads

### Required Credentials
- **Trello API Key & Token** – Access to the board/list where cards will be created
- **Mattermost Access Token** – Permission to post messages in the target channel
- **(Optional) Clearbit / Apollo / 3rd-party enrichment keys** – If you replace the sample enrichment HTTP requests

### Specific Setup Requirements
| Variable                | Purpose                                   | Example Value          |
|-------------------------|-------------------------------------------|------------------------|
| `MM_CHANNEL_ID`         | Mattermost channel to post high-score leads | `leads-alerts`         |
| `TRELLO_BOARD_ID`       | Board where new cards are added           | `62f1d…`               |
| `TRELLO_LIST_ID_HOT`    | Trello list for hot leads                 | `Hot Deals`            |
| `TRELLO_LIST_ID_BACKLOG`| Trello list for all other leads           | `New Leads`            |
| `LEAD_SCORE_THRESHOLD`  | Score above which a lead is considered hot| `70`                   |

## How it works

This workflow grabs new leads at a defined interval, enriches each lead with external data, computes a custom score, and routes the lead: high-scorers trigger a Mattermost alert and are placed in a “Hot Deals” list, while the rest are stored in a “Backlog” list on Trello. All actions are fully automated and run unattended once configured.

## Key Steps:
- **Schedule Trigger**: Runs every 15 minutes to poll for new form submissions.
- **HTTP Request – Fetch Leads**: Retrieves the latest unprocessed leads from your form backend or CRM API.
- **Split In Batches**: Processes leads 20 at a time to respect API rate limits.
- **HTTP Request – Enrich Lead**: Calls external enrichment (e.g., Clearbit) to append company and person data.
- **Code – Calculate Score**: JavaScript that applies weightings to enriched attributes and outputs a numeric score.
- **IF – Score Threshold**: Branches flow based on `LEAD_SCORE_THRESHOLD`.
- **Mattermost Node**: Sends a rich-text message with lead details for high-score prospects.
- **Trello Node (Hot List)**: Creates a Trello card in the “Hot Deals” list for high-value leads.
- **Trello Node (Backlog)**: Creates a Trello card in the “New Leads” list for everyone else.
- **Merge & Flag Processed**: Marks leads as processed to avoid re-processing in future runs.

## Set up steps

**Setup Time: 10–15 minutes**

1. **Import the Workflow**: Download the JSON template and import it into n8n.
2. **Create / Select Credentials**:  
   - Add your Trello API key & token under **Trello API** credentials.  
   - Add your Mattermost personal access token under **Mattermost API** credentials.
3. **Configure Environment Variables**: Set `MM_CHANNEL_ID`, `TRELLO_BOARD_ID`, `TRELLO_LIST_ID_HOT`, `TRELLO_LIST_ID_BACKLOG`, and `LEAD_SCORE_THRESHOLD` in n8n → Settings → Environment.
4. **Form Backend Endpoint**: Update the first HTTP Request node with the correct URL and authentication for your form or CRM.
5. **(Optional) Enrichment Provider**: Replace the sample enrichment HTTP Request with your chosen provider’s endpoint and credentials.
6. **Test Run**: Execute the workflow manually with a sample payload to ensure Trello cards and Mattermost messages are produced.
7. **Activate**: Enable the workflow; it will now run on the defined schedule.

## Node Descriptions

### Core Workflow Nodes:
- **Schedule Trigger** – Triggers workflow every 15 minutes.
- **HTTP Request (Fetch Leads)** – Pulls unprocessed leads.
- **SplitInBatches** – Limits processing to 20 leads per batch.
- **HTTP Request (Enrich Lead)** – Adds firmographic & technographic data.
- **Code (Calculate Score)** – JavaScript scoring algorithm; outputs `score` field.
- **IF (Score ≥ Threshold)** – Determines routing path.
- **Mattermost** – Sends formatted message with lead summary & score.
- **Trello (Create Card)** – Adds lead as a card to the appropriate list.
- **Merge (Flag Processed)** – Updates source system to mark lead as processed.

### Data Flow:
1. Schedule Trigger → HTTP Request (Fetch Leads) → SplitInBatches  
2. → HTTP Request (Enrich Lead) → Code (Calculate Score) → IF  
3. IF (Yes) → Mattermost → Trello (Hot List)  
4. IF (No) → Trello (Backlog)  
5. Both branches → Merge (Flag Processed)

## Customization Examples

### Adjust Scoring Weights
```javascript
// Code node: adjust weights to change scoring logic
const weights = {
  industry: 15,
  companySize: 25,
  jobTitle: 20,
  intentSignals: 40
};
```

### Dynamic Trello List Mapping
```javascript
// Use a Lookup table instead of IF node
const mapping = {
  hot: 'TRELLO_LIST_ID_HOT',
  cold: 'TRELLO_LIST_ID_BACKLOG'
};
items[0].json.listId = mapping[items[0].json.segment];
return items;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "leadId": "12345",
  "email": "jane.doe@example.com",
  "score": 82,
  "priority": "hot",
  "trelloCardUrl": "https://trello.com/c/abc123",
  "mattermostPostId": "78yzk9n8ppgkkp"
}
```

## Troubleshooting

### Common Issues
1. **Trello authentication fails** – Ensure the token has write access and that the API key & token pair belong to the same Trello account.
2. **Mattermost message not sent** – Confirm the token can post in the target channel and that `MM_CHANNEL_ID` is correct.

### Performance Tips
- Batch leads in groups of 20–50 to avoid enrichment API rate-limit errors.
- Cache enrichment responses for repeat domains to reduce API calls.

**Pro Tips:**
- Add a second IF node to send ultra-high (&gt;90) scores directly to an account executive via email.
- Store raw enrichment responses in a database for future analytics.
- Use n8n’s built-in **Execution Data Save** to debug edge-cases without rerunning external API calls.

## 🔗 Nodes Used

HTTP Request, Trello, Mattermost, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
