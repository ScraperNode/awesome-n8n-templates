# 🔬 Transcribe meetings and log action items to Notion with AssemblyAI and Gemini

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts a meeting recording URL via webhook, transcribes the audio with AssemblyAI, uses Google Gemini to extract a summary, action items, decisions, and next steps, then creates a structured Notion page and optionally posts the Notion link to Slack.

## How it works
1. Receives a POST webhook request containing an `audio_url` and an optional `meeting_title`.
2. Submits the audio URL to AssemblyAI for transcription with speaker labels enabled.
3. Polls AssemblyAI every 15 seconds until the transcript status is `completed` and the full transcript text is available.
4. Sends the completed transcript to the Google Gemini API to generate a JSON response with a meeting summary, action items, key decisions, and next steps.
5. Creates a new page in a Notion database with the meeting metadata and the extracted sections formatted as headings and paragraphs.
6. Posts a Slack message with the meeting title, summary, and the newly created Notion page URL.

## Setup
1. Create an AssemblyAI account, add your AssemblyAI API key to the Authorization header in the transcription submit and status check HTTP requests.
2. Create a Google AI Studio key and replace `YOUR_GEMINI_API_KEY` in the Gemini HTTP request URL.
3. Create a Notion integration, share your target Notion database with it, and replace `YOUR_NOTION_INTEGRATION_TOKEN` and `YOUR_NOTION_DATABASE_ID` in the Notion page creation request.
4. (Optional) Create a Slack app with `chat:write`, then replace `YOUR_SLACK_BOT_TOKEN` and `YOUR_SLACK_CHANNEL_ID` in the Slack message request.
5. Copy the production webhook URL from n8n and configure your recording source (or test client) to send a POST body with `audio_url` (publicly accessible) and `meeting_title`.

## Requirements
- AssemblyAI account and API key (free tier at assemblyai.com)
- Google Gemini API key (free tier at aistudio.google.com)
- Notion account with an Integration Token and a Database configured
- Slack Bot Token and Channel ID (optional — delete the last node if not needed)
- Publicly accessible audio file URL (mp3, mp4, wav, m4a, ogg, or webm)

## Customization
- Edit the Gemini prompt in the Post to Gemini node to extract additional fields like risks, blockers, or budget decisions
- Replace the Slack node with a Telegram or Microsoft Teams HTTP request for different notification channels
- Add a Google Calendar node after Notion to auto-schedule follow-up meetings from extracted action items
- Connect HubSpot or Salesforce via HTTP Request to log client meeting notes directly into your CRM
- Adjust the polling interval in the Wait node — increase for longer recordings, decrease for short ones

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
