# 🎣 Score and route qualified leads to Notion and Matrix

> ⚡ **17 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Lead Scoring Pipeline – Matrix + Notion

This workflow automatically enriches incoming form leads, applies a customizable scoring model, then routes high-value prospects to a Notion CRM database and a Matrix channel for instant sales notification. It streamlines lead qualification by combining third-party enrichment APIs, conditional logic, and asynchronous batching—eliminating manual research and ensuring your sales team focuses on the best opportunities.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n cloud)
- ScrapeGraphAI community node installed
- Matrix community node installed
- Notion Integration (internal integration or Notion OAuth)
- Active third-party enrichment/validation APIs (e.g., Clearbit, Hunter, Kickbox) for scoring data
- A Notion database set up as your “Leads” table with fields: `Name`, `Email`, `Company`, `Score`, `Status`, `Enrichment`

### Required Credentials
- **ScrapeGraphAI API Key** – For optional web-scraping based enrichment  
- **Notion OAuth2 / Integration Token** – To create & update pages in your CRM database  
- **Matrix Username & Password** – For sending room messages  
- **(Optional) Third-party API Keys** – Clearbit, Hunter, etc.

### Additional Setup Requirements
| Setting                         | Example / Notes                                          |
|---------------------------------|----------------------------------------------------------|
| Notion Database ID              | `8f3d49e8c8f74e6f9d32e8e2bf7c1c46`                      |
| Matrix Room ID                  | `!aBcDeFgHiJ:matrix.org`                                |
| Scoring Threshold (env var)     | `LEAD_SCORE_MIN=70`                                     |
| Batch Size                      | `SPLIT_IN_BATCHES=10` (controls parallel requests)       |
| Webhook URL for form submission | `https://your-n8n-instance/webhook/leads`                |

## How it works

This workflow automatically enriches incoming form leads, applies a customizable scoring model, then routes high-value prospects to a Notion CRM database and a Matrix channel for instant sales notification. It streamlines lead qualification by combining third-party enrichment APIs, conditional logic, and asynchronous batching—eliminating manual research and ensuring your sales team focuses on the best opportunities.

## Key Steps:
- **Schedule / Webhook Trigger**: Starts on a schedule (daily) or via a form-submission webhook.
- **Split in Batches**: Processes leads in manageable chunks to avoid rate limits.
- **HTTP Requests**: Calls enrichment APIs (Clearbit, Hunter, etc.) to retrieve firmographic & technographic data.
- **Code (Scoring Logic)**: Calculates a numeric lead score using weighted criteria (industry, employee count, email validity, etc.).
- **If Node (Qualification)**: Checks if the computed score meets or exceeds the defined threshold.
- **Notion Node**: Inserts or updates the qualified lead record in your Notion CRM database.
- **Matrix Node**: Sends a rich-text message to the sales room with lead details and score.
- **Wait + Merge**: Handles asynchronous API limits and merges enrichment data back into the main flow.

## Set up steps

**Setup Time: 15-25 minutes**

1. **Clone the template** in your n8n instance or import the JSON.
2. **Set environment variables** (`LEAD_SCORE_MIN`, `SPLIT_IN_BATCHES`, API keys) in n8n Settings → Variables.
3. **Configure the Webhook/Schedule Trigger**  
   - Webhook: copy the URL to your form provider  
   - Schedule: set cron (e.g., every hour).
4. **Update HTTP Request nodes** with your enrichment API endpoints & headers.
5. **Map Notion fields**: open the Notion node → choose your connection → select your Leads database → map data pins (`Name`, `Email`, etc.).
6. **Enter Matrix credentials & Room ID** in the Matrix node.
7. **Adjust scoring weights** in the Code node (`weights` object) to match your ICP (Ideal Customer Profile).
8. **Execute the workflow once** with test data, verify Notion rows and Matrix messages.
9. **Activate the workflow** and monitor via n8n’s execution list.

## Node Descriptions

### Core Workflow Nodes:
- **Schedule Trigger / Webhook** – Initiates the workflow on time-based interval or form submission.
- **SplitInBatches** – Limits API calls to avoid hitting rate caps.
- **HTTP Request (Enrichment)** – Queries external services for company, domain, and email data.
- **Set (Normalize)** – Formats API responses for scoring.
- **Code (Score Calculator)** – JavaScript that assigns points based on business rules.
- **If (Score ≥ Threshold?)** – Branches leads into “Qualified” or “Discard” paths.
- **Notion (Create/Update Page)** – Inserts the qualified lead into Notion database.
- **Matrix (Send Message)** – Notifies the sales team with lead context.
- **Merge (Rejoin Streams)** – Consolidates asynchronous branches before completion.
- **Sticky Note** – Documentation & config hints embedded directly in the canvas.

### Data Flow:
1. **Schedule/Webhook** → **SplitInBatches** → **HTTP Request (Enrichment)** → **Set** → **Code (Score)** → **If (Qualified?)** →  
   a. (Yes) **Notion** → **Matrix**  
   b. (No) **Wait (Cooldown)** → **Merge**

## Customization Examples

### 1. Change Scoring Weights
```javascript
// Code node snippet
const weights = {
  employeeCount: 0.4, // increase influence of company size
  emailDeliverability: 0.2,
  industryMatch: 0.25,
  techStack: 0.15,
};
```

### 2. Notify Different Matrix Rooms Based on Territory
```javascript
// If node expression
{{ $json.country === 'US' ? '!usSales:matrix.org' : '!intlSales:matrix.org' }}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "name": "Jane Doe",
  "email": "jane@acme.co",
  "company": "Acme Co.",
  "enrichment": {
    "employeeCount": 120,
    "industry": "SaaS",
    "techStack": ["AWS", "React"]
  },
  "score": 83,
  "qualified": true,
  "notionPageId": "9b2a4c09-0bf4-4b58-988a-1f361b0a2c20",
  "matrixEventId": "$15163622445EBvZJ:matrix.org"
}
```

## Troubleshooting

### Common Issues
1. **Low or zero scores for valid leads** – Review weighting logic and API response mapping in the Code node.  
2. **Notion “Missing required property” error** – Ensure all mandatory database fields are mapped and Notion token has write access.  
3. **Matrix authentication failure** – Double-check username/password or switch to an access token login method.  

### Performance Tips
- Reduce `SPLIT_IN_BATCHES` size if you’re hitting API rate limits.
- Enable “Execute Once” during testing to prevent excess API usage.

**Pro Tips:**
- Store enrichment API keys as n8n credentials, not hard-coded strings.
- Add a second If node to flag “Priority” leads (score &gt; 90) for immediate follow-up.
- Use n8n’s built-in logging to create an audit trail by writing each execution to a Loggly/Datadog endpoint.

---

_This is a community template provided “as is.” Always test thoroughly in a non-production environment before activating in production._

## 🔗 Nodes Used

HTTP Request, Matrix, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
