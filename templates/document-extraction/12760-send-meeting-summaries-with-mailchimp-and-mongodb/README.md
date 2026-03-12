# 🔬 Send meeting summaries with Mailchimp and MongoDB

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Meeting Notes Distributor – Mailchimp and MongoDB


This workflow automatically converts raw meeting recordings or written notes into concise summaries, stores them in MongoDB for future reference, and distributes the summaries to all meeting participants through Mailchimp. It is ideal for teams that want to keep everyone aligned without manual copy-and-paste or email chains.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or cloud)
- Audio transcription service or written notes available via HTTP endpoint
- MongoDB database (cloud or self-hosted)
- Mailchimp account with an existing Audience list

### Required Credentials
- **MongoDB** – Connection string with insert permission
- **Mailchimp API Key** – To send campaigns
- **(Optional) HTTP Service Auth** – If your transcription/notes endpoint is secured

### Specific Setup Requirements
| Component        | Example Value                              | Notes                                               |
|------------------|--------------------------------------------|-----------------------------------------------------|
| MongoDB Database | `meeting_notes`                            | Database in which summaries will be stored          |
| Collection Name  | `summaries`                                | Collection automatically created if it doesn’t exist|
| Mailchimp List   | `Meeting Participants`                     | Audience list containing participant email addresses|
| Notes Endpoint   | `https://example.com/api/meetings/{id}`    | Returns raw transcript or note text (JSON)          |

## How it works

This workflow automatically converts raw meeting recordings or written notes into concise summaries, stores them in MongoDB for future reference, and distributes the summaries to all meeting participants through Mailchimp. It is ideal for teams that want to keep everyone aligned without manual copy-and-paste or email chains.

## Key Steps:
- **Schedule Trigger**: Fires daily (or on-demand) to check for new meeting notes.
- **HTTP Request**: Downloads raw notes or transcript from your endpoint.
- **Code Node**: Uses an AI or custom function to generate a concise summary.
- **If Node**: Skips processing if the summary already exists in MongoDB.
- **MongoDB**: Inserts the new summary document.
- **Split in Batches**: Splits participants into Mailchimp-friendly batch sizes.
- **Mailchimp**: Sends personalized summary emails to each participant.
- **Wait**: Ensures rate limits are respected between Mailchimp calls.
- **Merge**: Consolidates success/failure results for logging or alerting.

## Set up steps

**Setup Time: 15-25 minutes**

1. **Clone the workflow**: Import or copy the JSON into your n8n instance.
2. **Configure Schedule Trigger**: Set the cron expression (e.g., every weekday at 18:00).
3. **Set HTTP Request URL**: Replace placeholder with your transcription/notes endpoint. Add auth headers if needed.
4. **Add MongoDB Credentials**: Enter your connection string in the MongoDB node.
5. **Customize Summary Logic**: Open the Code node to tweak summarization length, language, or model.
6. **Mailchimp Credentials**: Supply your API key and select the correct Audience list.
7. **Map Email Fields**: Ensure participant emails are supplied from transcription metadata or external source.
8. **Test Run**: Execute once manually to verify MongoDB insert and email delivery.
9. **Activate Workflow**: Enable the workflow so it runs on its defined schedule.

## Node Descriptions

### Core Workflow Nodes:
- **Schedule Trigger** – Initiates the workflow at predefined intervals.
- **HTTP Request** – Retrieves the latest meeting data (transcript or notes).
- **Code** – Generates a summarized version of the meeting content.
- **If** – Checks MongoDB for duplicates to avoid re-sending.
- **MongoDB** – Stores finalized summaries for archival and audit.
- **SplitInBatches** – Breaks participant list into manageable chunks.
- **Mailchimp** – Sends summary emails via campaigns or transactional messages.
- **Wait** – Pauses between batches to honor Mailchimp rate limits.
- **Merge** – Aggregates success/failure responses for logging.

### Data Flow:
1. **Schedule Trigger** → **HTTP Request** → **Code** → **If**
2. If summary is new: **MongoDB** → **SplitInBatches** → **Mailchimp** → **Wait**
3. **Merge** collates all results

## Customization Examples

### 1. Change Summary Length
```javascript
// Inside the Code Node
const rawText = items[0].json.text;
const maxSentences = 5;  // adjust to 3, 7, etc.
items[0].json.summary = summarize(rawText, maxSentences);
return items;
```

### 2. Personalize Mailchimp Subject
```javascript
// In the Set node before Mailchimp
items[0].json.subject = `Recap: ${items[0].json.meetingTitle} – ${new Date().toLocaleDateString()}`;
return items;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "meetingId": "abc123",
  "meetingTitle": "Quarterly Planning",
  "summary": "Key decisions on roadmap, budget approvals...",
  "participants": [
    "alice@example.com",
    "bob@example.com"
  ],
  "mongoInsertId": "65d9278fa01e3f94b1234567",
  "mailchimpBatchIds": ["2024-01-01T12:00:00Z#1", "2024-01-01T12:01:00Z#2"]
}
```

## Troubleshooting

### Common Issues
1. **Mailchimp rate-limit errors** – Increase Wait node delay or reduce batch size.
2. **Duplicate summaries** – Ensure the If node correctly queries MongoDB using meeting ID as a unique key.

### Performance Tips
- Keep batch sizes under 500 to stay well within Mailchimp limits.
- Offload AI summarization to external services if Code node execution time is high.

**Pro Tips:**
- Store full transcripts in MongoDB GridFS for future reference.
- Use environment variables in n8n for all API keys to simplify workflow export/import.
- Add a notifier (e.g., Slack node) after Merge to alert admins on failures.

---

*This is a community template provided “as-is” without warranty. Always validate the workflow in a test environment before using it in production.*

## 🔗 Nodes Used

HTTP Request, MongoDB, Mailchimp, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
