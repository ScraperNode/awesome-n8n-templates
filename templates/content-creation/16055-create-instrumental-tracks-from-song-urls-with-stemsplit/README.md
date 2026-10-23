# 🎬 Create instrumental tracks from song URLs with StemSplit

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Let visitors request a karaoke instrumental via an n8n form. The workflow validates the song URL, removes vocals with StemSplit AI, uploads the MP3 to Google Drive, and emails the requester a download link—with automatic error emails for invalid URLs or low credits.


## How it works
1. A visitor submits your public n8n form with email, song title, and a direct link to an audio file (MP3, WAV, or FLAC).

2. The workflow normalizes the fields and checks that the URL starts with https://.

3. StemSplit checks your credit balance, then runs AI stem separation and returns an instrumental MP3.

4. An HTTP Request downloads the file, Google Drive stores it, and Gmail emails the requester the Drive link.

5. Invalid URLs or insufficient credits trigger separate Gmail notifications so the requester knows what went wrong.


## Setup
1. Connect a StemSplit API credential on both StemSplit nodes (create a key at stemsplit.io → Settings → API).

2. Connect Google Drive OAuth2 on the upload node and choose a folder, or keep the default root.

3. Connect Gmail OAuth2 on all three Gmail nodes (success, invalid URL, and low-credits paths).

4. Install n8n-nodes-stemsplit if needed (verified on n8n Cloud).

5. Activate the workflow and share the Form Trigger Production URL from the form node.

## Requirements
- StemSplit account and API key (stemsplit.io)
- Google Drive OAuth2 credential in n8n
- Gmail OAuth2 credential in n8n
- n8n-nodes-stemsplit community node (verified: n8n.io/integrations/stemsplit)
- Public audio URL per submission (MP3, WAV, or FLAC; max 50 MB)
- Enough StemSplit credits (workflow requires ≥ 60 seconds balance before processing)

## Customization
- Change the credit threshold in Enough StemSplit credits? (default: 60 seconds)
- Switch StemSplit output to BOTH, VOCALS, FOUR_STEMS, or SIX_STEMS for acapellas or multi-stem exports
- Replace Gmail with Outlook, SendGrid, or Slack for notifications
- Add a Google Sheets row per submission for logging requests
- Use a Webhook trigger instead of the form for API-driven requests
- Point Upload to Google Drive at a shared team folder for karaoke libraries

## Additional info
Form path: karaoke-instrumental-request (customize in the Form Trigger options).
Supported inputs: MP3, WAV, FLAC, M4A, OGG, WEBM, AAC, WMA. StemSplit download URLs expire 1 hour after completion; files are removed after 14 days.
Credits: 1 credit = 1 second of audio. Pay-as-you-go at stemsplit.io — no subscription required.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
