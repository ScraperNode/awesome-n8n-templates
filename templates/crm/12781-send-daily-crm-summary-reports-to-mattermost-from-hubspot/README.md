# 🤝 Send daily CRM summary reports to Mattermost from HubSpot

> ⚡ **21 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Daily Report Generator with Mattermost and HubSpot


This workflow automatically compiles key metrics from HubSpot (and optional internal data sources) into a concise daily summary and posts it to a designated Mattermost channel. It helps sales and marketing teams stay informed without manually pulling reports or navigating multiple dashboards.

## Pre-conditions/Requirements

### Prerequisites
- An n8n instance (self-hosted or n8n Cloud)
- HubSpot account with a Private App token
- Mattermost workspace with an incoming webhook enabled
- (Optional) Internal REST API or database endpoint for additional data

### Required Credentials
- **HubSpot Private App Token** – Grants API access to Deals, Contacts, Activities, etc.
- **Mattermost Personal Access Token** (or Incoming Webhook URL) – Permits message posting to channels
- **n8n User Management** – Ensure the workflow has network access to HubSpot and Mattermost

### Specific Setup Requirements
| Component   | Requirement                                             | Example/Notes                                         |
|-------------|---------------------------------------------------------|-------------------------------------------------------|
| Mattermost  | Create an Incoming Webhook or generate a PAT           | System Console → Integrations                         |
| HubSpot     | Create a Private App → Scopes: `crm.objects.deals.read` | Settings → Integrations → Private Apps               |
| Scheduler   | External cron job or n8n’s internal trigger*            | `curl https://n8n.yourdomain.com/webhook/daily_report` |

*The provided template uses a Webhook node so you can trigger it via any scheduler (e.g., crontab, Zapier, GitHub Actions). Replace with the Cron node if preferred.

## How it works

This workflow automatically compiles key metrics from HubSpot (and optional internal data sources) into a concise daily summary and posts it to a designated Mattermost channel. It helps sales and marketing teams stay informed without manually pulling reports or navigating multiple dashboards.

## Key Steps:
- **Webhook Trigger**: Waits for a daily call from an external scheduler.
- **HubSpot Node**: Retrieves deal statistics, new contacts, and other CRM metrics.
- **HTTP Request Node**: (Optional) Pulls supplementary data from an internal API.
- **Merge Node**: Consolidates HubSpot and optional data sources.
- **Code / Set Nodes**: Formats numbers, calculates KPIs, and builds a markdown message.
- **If Node**: Guards against empty datasets or API failures.
- **Mattermost Node**: Posts the formatted report to the chosen channel.
- **Respond to Webhook**: Returns a JSON confirmation to the scheduler.

## Set up steps

**Setup Time: 15-20 minutes**

1. **Import Template**: In n8n, go to “Workflows → Import from File” and select the JSON template.
2. **Add Credentials**:  
   a. HubSpot → New credential → Paste Private App token  
   b. Mattermost → New credential → Paste PAT or Webhook URL
3. **Configure Webhook URL**: Copy the production URL of the Webhook node and add it to your external scheduler (e.g., crontab, Zapier).
4. **Adjust Query Parameters** (HubSpot node): Modify filters (e.g., deal stage, create date) as needed.
5. **Edit Message Template** (Code node): Update markdown formatting, include/exclude sections.
6. **Test Run**: Manually execute the workflow. Verify the JSON response and Mattermost post.
7. **Activate**: Toggle workflow to “Active”. Confirm your scheduler triggers it at the desired time.

## Node Descriptions

### Core Workflow Nodes:
- **stickyNote** – Contains inline documentation and instructions.
- **Webhook** – Primary trigger, receives the daily HTTP call.
- **HubSpot** – Pulls deals, contacts, and engagement data.
- **HTTP Request** – Fetches optional internal statistics (e.g., support tickets).
- **Merge** – Combines HubSpot and HTTP results into one object.
- **Set** – Selects and renames fields for clarity.
- **Code** – Calculates KPIs (e.g., conversion rate) and assembles a markdown summary.
- **If** – Checks for empty data arrays or API errors.
- **Mattermost** – Sends the final message to a channel.
- **Respond to Webhook** – Returns a success/failure payload to the caller.

### Data Flow:
1. **Webhook** → **HubSpot**  
2. **Webhook** → **HTTP Request**  
3. **HubSpot** + **HTTP Request** → **Merge** → **Set** → **Code** → **If** → **Mattermost** → **Respond to Webhook**

## Customization Examples

### Change Report Time Range
```javascript
// HubSpot Node → Additional Fields
{
  "filterGroups": [{
    "filters": [{
      "propertyName": "createdate",
      "operator": "BETWEEN",
      "highValue": Date.now(),
      "value": Date.now() - 24 * 60 * 60 * 1000 // last 24h
    }]
  }]
}
```

### Format Mattermost Message with Emojis
```javascript
// Code Node (return statement)
return [{
  json: {
    text: `:bar_chart: **Daily CRM Report**\n\n• New Deals: ${newDeals}\n• New Contacts: ${newContacts}\n• Win Rate: ${winRate}%`
  }
}];
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "status": "success",
  "date": "2024-05-23",
  "hubspot": {
    "new_deals": 12,
    "new_contacts": 34,
    "win_rate": 27.1
  },
  "internal": {
    "tickets_opened": 8,
    "tickets_closed": 6
  },
  "mattermostPostId": "abc123xyz"
}
```

## Troubleshooting

### Common Issues
1. **401 Unauthorized (HubSpot)** – Verify Private App token and scopes. Regenerate if necessary.
2. **Message Not Posting** – Ensure the Mattermost token has `post:write` or the webhook URL is valid.

### Performance Tips
- Cache HubSpot responses during testing to avoid hitting API limits.
- Reduce payload size by selecting only the fields you need in the Set node.

**Pro Tips:**
- Replace the Webhook node with the Cron node for an all-in-n8n schedule.
- Use environment variables for tokens (`{{$env.HUBSPOT_TOKEN}}`) to avoid hard-coding secrets.
- Add a second Mattermost node to DM managers for critical alerts (e.g., low win rate).

---

*This is a community workflow template provided “as-is.” It is not officially supported by n8n GmbH. Always review and test in a development environment before deploying to production.*

## 🔗 Nodes Used

HTTP Request, Webhook, Mattermost, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
