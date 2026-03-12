# 📋 Process meeting transcripts into Notion notes & tasks with AI and Google Drive

> ⚡ **100 views** · 📋 [Project Management](../)

## Description

Ingest meeting webhooks, process transcript, classify the meeting, generate structured notes with AI Agent, file the transcript to Google Drive, write rich pages to Notion, and create assigned tasks. Includes optional polling path if webhooks aren’t available.

## Who is this for?
Teams that record calls and want instant, structured notes in **Notion**, with transcripts archived in **Google Drive** and action items auto-created—without manual copy/paste.

---

## What problem does it solve?
Manual note taking is slow and inconsistent. This flow listens for a meeting webhook, flattens the transcript, classifies the call, runs a tailored notetaker prompt, and writes a clean Notion page plus tasks—hands-free and standardized.

---

## How it works

| # | Node | Purpose |
|---|------|---------|
| 1 | **New Meeting Webhook** | Receives meeting payload with transcript segments and metadata. ([Webhook Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)) |
| 2 | **Flatten Transcript** (Code) | Joins segments to `speaker: text` lines and extracts `title`, `meetingId`, `url`. |
| 3 | **Set Title + Transcript + URL** | Normalizes fields for downstream nodes. |
| 4 | **Categorize Meeting** | Uses OpenAI to return `{ "meetingType": "DiscoveryCall" | "MiscMeeting" }`. ([OpenAI](https://platform.openai.com/docs/guides/realtime-and-responses/responses)) |
| 5 | **Switch** | Routes to the correct notetaker branch based on `meetingType`. |
| 6a | **Discovery Call Notetaker** | Anthropic model + structured parser to extract sales-specific fields. ([Anthropic Docs](https://docs.anthropic.com/en/docs)) |
| 6b | **Misc Meeting Notetaker** | General meeting notetaker with strict JSON schema. |
| 7a | **Add Discovery Meeting Notes to Notion** | Writes a formatted page with overview, goals, pains, risks, and action items. |
| 7b | **Add Meeting Notes to Notion** | Writes a simpler page for non-discovery meetings. |
| 8 | **Set Notion Page ID** | Captures created page ID and the action-items array. |
| 9 | **Create File** (Google Drive) | Saves raw transcript text and returns the file ID. ([Drive API](https://developers.google.com/drive/api)) |
| 10 | **Link Transcript in Notion** | Updates the Notion page with a viewable Drive link. |
| 11 | **Split out Tasks** | Expands the action-items array to one item per execution. |
| 12 | **If Assigned to Me** | Filters tasks where `assignee = "Matty Reed"`. |
| 13 | **Add Tasks** (Notion) | Creates tasks in your Notion Tasks DB, links to the meeting page. ([Notion API](https://developers.notion.com/docs)) |
| * | *(Optional polling path)* | If webhooks aren’t available: **Schedule Trigger → Get Meetings from Notion → List Meetings (HTTP Request) → Get New Meetings (Code) → Get Transcript (HTTP) → Transcript Ready? → Wait → Flatten**. Disabled by default. |

---

## Setup steps

1. **Import the JSON flow into n8n**  
   Confirm nodes marked *disabled* stay off unless you need the polling path.  
   Docs: [n8n](https://docs.n8n.io/)

2. **Credentials**  
   - **OpenAI**: add API key and attach to **Categorize Meeting**.  
   - **Anthropic**: add API key and attach to both notetaker agents.  
   - **Notion**: create an internal integration, share your **Meetings** and **Tasks** databases with it, then attach the credential to Notion nodes.  
   - **Google Drive**: OAuth2 credential for **Create File**.

3. **Map your databases and properties**  
   Replace the placeholder Notion database IDs with your **Meetings** and **Tasks** DB IDs. Verify property names like `Meeting Name|title`, `Summary|rich_text`, `Category|multi_select`, `Assignee|people`, etc., match your schema.

4. **Drive folder**  
   Update the `folderId` in **Create File** to your preferred folder. Ensure link-sharing fits your privacy policy.

5. **Webhook**  
   Expose **New Meeting Webhook** via your n8n instance. Send a sample payload from your meeting recorder to verify the `calendar_invitees`, `transcript`, `title`, and `url` fields match the code node expectations.

6. **Test**  
   Run the flow with a recorded meeting. Confirm:  
   - Page created in **Meetings** DB with structured sections.  
   - Transcript file created in **Drive** and linked back to Notion.  
   - Tasks created in **Tasks** DB when `assignee = "Matty Reed"`.

---

## Notes and tips

- **Schemas are strict.** Both notetakers output fixed JSON keys. Missing values become empty strings.  
- **PII handling.** Transcripts may include personal data. Limit access to Notion pages and Drive files per policy.  
- **Do not hardcode secrets.** Store API keys in n8n credentials. Avoid putting tokens in Code nodes.  
- **Rate limits.** Long transcripts increase token usage. Consider chunking upstream if needed.  
- **Extensibility.** Add more branches in **Switch** for other meeting types with custom prompts and parsers.

---

## Resources
- n8n Webhook Node – https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/  
- n8n HTTP Request Node – https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/  
- OpenAI Responses – https://platform.openai.com/docs/guides/realtime-and-responses/responses  
- Anthropic Docs – https://docs.anthropic.com/en/docs  
- Notion API – https://developers.notion.com/docs  
- Google Drive API – https://developers.google.com/drive/api

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Notion, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
