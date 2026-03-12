# ⚙️ Aggregate error alerts and send consolidated reports via Email and Jira

> ⚡ **21 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Error Alert Aggregator – Email and Jira

This workflow aggregates error logs arriving from multiple sources, deduplicates identical events within a configurable time-window, and sends a single consolidated notification via Email and Jira. It prevents alert fatigue by batching similar errors and guarantees that responsible teams are informed through both channels.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted ≥ v1.0 or n8n.cloud account)
- Basic understanding of your log source’s payload structure
- SMTP server or n8n Email credentials configured
- Jira Cloud or Jira Server account with API access

### Required Credentials
- **Email (SMTP/IMAP or n8n Email node credential)** — to dispatch alert emails
- **Jira** — Create issues automatically in the chosen project
- **HTTP Request Auth (optional)** — If your log endpoint requires authentication

### Specific Setup Requirements
| Setting                     | Recommended Value                      | Notes                                                     |
|-----------------------------|----------------------------------------|-----------------------------------------------------------|
| Batch window (Wait node)    | 10 minutes                             | Time allowed to collect & deduplicate errors              |
| Deduplication key (Code)    | `error_id` or `message` field          | Choose a unique attribute representing the same incident |
| Email recipients            | Security & DevOps distribution list    | Use semicolons for multiple addresses                     |
| Jira project key            | `SEC`                                  | Project where alert tickets should be filed               |

## How it works

This workflow aggregates error logs arriving from multiple sources, deduplicates identical events within a configurable time-window, and sends a single consolidated notification via Email and Jira. It prevents alert fatigue by batching similar errors and guarantees that responsible teams are informed through both channels.

## Key Steps:
- **Schedule Trigger**: Runs every X minutes to poll/collect new log items.
- **HTTP Request**: Pulls error events from your monitoring or log system.
- **IF Node**: Quickly filters out non-error or resolved events.
- **Code Node (Deduplicator)**: Hashes & stores unique error signatures, skipping already-seen items.
- **Wait Node**: Holds processing for the batching period (e.g., 10 min).
- **Merge Node**: Combines all unique errors gathered during the window.
- **Set Node**: Formats the consolidated message for Email & Jira.
- **Email Send**: Dispatches the summary email.
- **Jira Node**: Creates (or updates) an issue with the same summary.
- **Sticky Notes**: Provide inline documentation right inside the workflow for easier maintenance.

## Set up steps

**Setup Time: 15-20 minutes**

1. **Import template**: Download the JSON template and drag & drop it into your n8n editor.
2. **Configure Schedule Trigger**: Set polling interval (e.g., every 5 minutes).
3. **HTTP Request Node**:
   - Enter the URL of your log endpoint.
   - Add authentication if required.
4. **Adjust IF filter**: Modify the condition to match your log’s error severity field (`status === "error"`).
5. **Customize Code Node**:
   - Replace `error_id` with the field that uniquely identifies an error.
   - Optionally tweak deduplication TTL.
6. **Wait Node**: Set the batch time (e.g., 600 seconds).
7. **Set Node**: Edit the email subject/body and Jira issue summary/description placeholders.
8. **Credentials**:
   - Add or select your Email credential in **Email Send**.
   - Add or select your Jira credential in **Jira** node.
9. **Test run** the workflow to verify that:
   - Duplicate events are collapsed.
   - Email and Jira tickets show combined information.
10. **Activate** the workflow to start production monitoring.

## Node Descriptions

### Core Workflow Nodes:
- **Schedule Trigger** – Initiates workflow on a fixed interval.
- **HTTP Request** – Retrieves fresh error logs from an external API.
- **IF** – Only lets true error events proceed.
- **Code (Deduplicator)** – Uses JavaScript to remove already-known errors via n8n static data.
- **Wait** – Creates a batching window for aggregation.
- **Merge (Queue mode)** – Joins events accumulated during the wait.
- **Set** – Crafts a human-readable report for Email & Jira.
- **Email Send** – Dispatches the consolidated message to stakeholders.
- **Jira** – Opens/updates an issue containing the same error digest.
- **Sticky Note** – Provides inline explanations for future maintainers.

### Data Flow:
1. **Schedule Trigger** → **HTTP Request** → **IF** → **Code**  
2. **Code** → **Wait** → **Merge** → **Set**  
3. **Set** → **Email Send** & **Jira**

## Customization Examples

### Change Deduplication Strategy
```javascript
// Code Node snippet
// Use error 'stacktrace' + 'service' for uniqueness
const signature = `${item.json.stacktrace}_${item.json.service}`;
if ($workflow.staticData.signatureCache?.includes(signature)) {
  // duplicate, skip
  return [];
}
$workflow.staticData.signatureCache = [
  ...( $workflow.staticData.signatureCache || [] ),
  signature
];
return item;
```

### Update Existing Jira Issue Instead of Creating New
```javascript
// Jira Node settings
// Search for an open ticket with the same summary
// If found, add a comment instead of creating
{
  "operation": "comment",
  "issueKey": "={{$node['Set'].json['jiraIssueKey']}}",
  "comment": "New occurrences: {{$json.errorCount}}"
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "errors": [
    {
      "id": "ERR123",
      "message": "Database timeout",
      "count": 5,
      "firstSeen": "2024-03-14T10:12:00Z",
      "lastSeen": "2024-03-14T10:22:00Z"
    }
  ],
  "emailStatus": "success",
  "jiraStatus": "issue_created"
}
```

## Troubleshooting

### Common Issues
1. **No data returned from HTTP Request** – Verify endpoint URL, authentication headers, and that your monitoring tool actually has recent error events.
2. **Duplicate alerts still coming through** – Increase the Wait node’s batching window or refine the deduplication key in the Code node.

### Performance Tips
- Cache HTTP responses if the log API supports it to reduce bandwidth.
- Use selective fields in the HTTP Request’s `query` parameters to limit payload size.

**Pro Tips:**
- Store a rolling hash list in external Redis or DB for large-scale deduplication.
- Add a second IF branch to auto-resolve Jira tickets when an error disappears for X hours.
- Use Slack or Microsoft Teams nodes in parallel to broaden alert coverage.

---

*This is a community-contributed n8n workflow template provided “as-is.” Thoroughly test in a non-production environment before deploying to production.*

## 🔗 Nodes Used

Send Email, HTTP Request, Jira Software, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
