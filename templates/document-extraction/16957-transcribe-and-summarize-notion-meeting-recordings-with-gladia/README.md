# 🔬 Transcribe and summarize Notion meeting recordings with Gladia

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow triggers on new meeting entries in a Notion database, sends the recording URL to Gladia for transcription with diarization and summarization, polls until the job completes, and then writes the summary and full transcript back to the same Notion page.

## How it works
1. Triggers when a new page is added to the selected Notion meetings database.
2. Reads the page’s “Recording URL” and starts an asynchronous transcription job in Gladia with speaker diarization and summarization enabled.
3. Waits for a configured interval and repeatedly checks Gladia for the transcription result until it returns `done` or the maximum poll attempts is reached.
4. When processing completes, updates the Notion page Status to “Transcribed” and writes the returned summary to the “Summary” property.
5. Splits the full transcript into Notion-safe text chunks and appends them to the meeting page as blocks.
6. If Gladia returns an error or the polling times out, updates the Notion page Status to “Failed” and writes a failure message to the “Summary” property.

## Setup
1. Use a self-hosted n8n instance and install the `n8n-nodes-gladia` community node (Settings → Community Nodes).
2. Add credentials for the Notion API and Gladia API (API key from app.gladia.io).
3. Update the Notion Trigger with your meetings database ID and ensure the database has “Recording URL” (URL), “Status” (Status with “Transcribed” and “Failed” options), and “Summary” (Text) properties.
4. Adjust the run configuration values for `number_of_speakers`, `wait_seconds`, and `max_attempts` to match your recordings and desired timeout behavior.

## Requirements
- A self-hosted n8n instance (this template uses the n8n-nodes-gladia community node, which does not run on n8n Cloud)
- The n8n-nodes-gladia community node installed (Settings > Community Nodes)
- Notion API credential (internal integration) with access to the meetings database
- Gladia account and API key (app.gladia.io)
- A Notion database with a Recording URL (URL) property, a Status property with "Transcribed" and "Failed" options, and a Summary (Text) property

## Customization
- Update the Notion Trigger with your meetings database ID
- Set number_of_speakers to hint diarization for your typical meeting size
- Tune wait_seconds and max_attempts for recording length and desired timeout behavior
- Toggle Gladia summarization or diarization if you only want one of them
- Change how the transcript is chunked into Notion blocks if you hit block size limits

## Additional info
This template is self-hosted only, because the n8n-nodes-gladia community node is not available on n8n Cloud. Gladia bills per minute of audio, so cost scales with meeting length. On any error or timeout, the page Status is set to "Failed" and a failure message is written to the Summary property, so nothing fails silently. One thing to check: the recording URL must be reachable by Gladia as a public or signed link, not a file that only Notion can open.

## 🔗 Nodes Used

Notion, Notion Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
