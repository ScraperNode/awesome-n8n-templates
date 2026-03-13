# 🔬 Distribute summarized meeting notes with Microsoft Teams and ClickUp

> ⚡ **132 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow processes raw meeting recordings or handwritten notes, automatically transcribes and summarizes them, and then distributes the concise summary to all meeting participants via Microsoft Teams while also creating an action-item task in ClickUp. The goal is to save time, keep everyone aligned, and ensure follow-up tasks are tracked in your project management workspace.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n.cloud)
- ScrapeGraphAI community node installed
- Microsoft Teams tenant with permissions to create Incoming Webhooks or use Bot Framework
- ClickUp workspace and a target List to hold meeting action items
- Optional: OpenAI or any LLM API account for high-quality summarization

### Required Credentials
- **Microsoft Teams Webhook URL** – to post summary messages
- **ClickUp Personal Access Token** – to create tasks
- **OpenAI API Key** (optional but recommended) – for AI-powered summarization
- **ScrapeGraphAI API Key** – placeholder key to satisfy the template requirement

### Specific Setup Requirements
| Item | Description | Example |
|------|-------------|---------|
| Teams Channel Webhook | Create an Incoming Webhook in the desired Teams channel and copy the URL | `https://outlook.office.com/webhook/...` |
| ClickUp List ID | The numeric ID of the list where tasks will be created | `90123456` |
| Summarization Model | The LLM model or API you prefer to use | `gpt-3.5-turbo` |

## How it works

This workflow transcribes or parses meeting content, leverages an LLM to generate a concise summary and action items, then distributes the results to participants in Microsoft Teams and creates a follow-up task in ClickUp. Everything runs in a single automated flow triggered manually or on a schedule.

## Key Steps:
- **Manual Trigger**: Start the workflow after a meeting ends.
- **Sticky Note**: Provides on-canvas documentation for quick reference.
- **Set Node – Upload Metadata**: Define meeting title, date, and participants.
- **HTTP Request – Transcription**: Send audio/video file to a transcription service (e.g., Azure Speech-to-Text).
- **Wait**: Pause until the transcription is complete.
- **Code – Summarize**: Use OpenAI to summarize the transcript and extract action items.
- **IF Node – Validate Output**: Ensure the summary exists; handle errors otherwise.
- **Merge**: Combine summary with participant list.
- **Microsoft Teams Node**: Send the summary to each participant or channel via webhook.
- **ClickUp Node**: Create a task containing the summary and action items.

## Set up steps

**Setup Time: 10-15 minutes**

1. **Create Teams Webhook**:  
   In Microsoft Teams, navigate to the target channel → Manage channel → Connectors → Incoming Webhook → give it a name (e.g., “MeetingBot”) and copy the generated URL.

2. **Generate ClickUp Personal Access Token**:  
   ClickUp → Settings → Apps → Generate Token → copy and store it securely.

3. **Get ClickUp List ID**:  
   Open the list in ClickUp and copy the numeric ID from the URL bar.

4. **Optional – Obtain OpenAI API Key**:  
   Sign in to OpenAI → API Keys → Create new secret key.

5. **Add Credentials in n8n**:  
   In n8n, go to Credentials → New → add Microsoft Teams, ClickUp, and OpenAI (Generic HTTP).

6. **Import Workflow**:  
   Paste the JSON workflow into n8n or use “Templates → Import”.

7. **Configure Nodes**:  
   - In the **Set Node**: update `meeting_title`, `date`, and `participants` array.  
   - In **HTTP Request**: set the transcription service endpoint and authentication.  
   - In **Code – Summarize**: paste your OpenAI key or select credential.  
   - In **Microsoft Teams Node**: select the Teams credential and webhook URL.  
   - In **ClickUp Node**: select ClickUp credential and enter the List ID.

8. **Test**:  
   Click “Execute Workflow” on the **Manual Trigger** node. Verify that a message appears in Teams and a task is created in ClickUp.

## Node Descriptions

### Core Workflow Nodes:
- **Manual Trigger** – Initiates the workflow manually or on a schedule.
- **Sticky Note** – Documentation block outlining purpose and credential usage.
- **Set** – Stores meeting metadata and participants list.
- **HTTP Request** – Sends meeting recording to a transcription service and fetches results.
- **Wait** – Holds the workflow until transcription is ready.
- **Code** – Summarizes transcript and extracts action items via OpenAI.
- **IF** – Validates summarization success; branches on failure.
- **Merge** – Combines summary text with participant emails/usernames.
- **Microsoft Teams** – Posts summary to Teams channel or direct messages.
- **ClickUp** – Creates a task containing summary and action items.

### Data Flow:
1. **Manual Trigger** → **Set** → **HTTP Request** → **Wait** → **Code** → **IF** → **Merge** → **Microsoft Teams**  
2. **Merge** → **ClickUp**

## Customization Examples

### Change summarization prompt
```javascript
// Inside the Code node
const prompt = `
You are an expert meeting assistant.
Summarize the following transcript in under 150 words.
List action items in bullet points with owners.
Transcript:
${items[0].json.transcript}
`;
```

### Send summary as a PDF attachment
```javascript
// Add Convert & Save node before Teams
// Convert markdown summary to PDF and attach in Teams node
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "meeting_title": "Q3 Strategy Sync",
  "date": "2024-05-10",
  "participants": ["john@corp.com", "jane@corp.com"],
  "summary": "We reviewed Q3 OKRs, decided to ...",
  "action_items": [
    { "owner": "John", "task": "Prepare budget draft", "due": "2024-05-20" },
    { "owner": "Jane", "task": "Compile market research", "due": "2024-05-25" }
  ],
  "clickup_task_id": "abcd1234",
  "teams_message_id": "msg7890"
}
```

## Troubleshooting

### Common Issues
1. **Teams message not sent** – Verify the Incoming Webhook URL and that the Teams node uses the correct credential.
2. **ClickUp task missing** – Ensure the List ID is correct and the ClickUp token has `tasks:write` scope.
3. **Empty summary** – Check that the transcription text is populated and the OpenAI prompt is valid.

### Performance Tips
- Compress large audio/video files before sending to the transcription service.
- Use batching in the Teams node if participant list is &gt;20 to avoid rate limits.

**Pro Tips:**
- Schedule the workflow to auto-run 5 minutes after recurring meeting end-times.
- Customize the ClickUp task description template to include embedded links.
- Add a “Send Email” node for participants not on Teams.

## 🔗 Nodes Used

HTTP Request, ClickUp, Microsoft Teams

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
