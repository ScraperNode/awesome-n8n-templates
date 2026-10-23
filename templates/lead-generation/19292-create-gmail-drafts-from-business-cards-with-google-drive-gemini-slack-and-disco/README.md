# 🎣 Create Gmail drafts from business cards with Google Drive, Gemini, Slack and Discord

> ⚡ **16 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow scans business card images stored in Google Drive, uses Google Gemini Vision OCR to extract contact details, creates personalized Gmail drafts (optionally with a Drive attachment), moves processed cards to an archive folder, and notifies your team via Slack, Discord, or Chatwork.

## How it works
1. Runs when you manually execute the workflow.
2. Lists all files in a specified Google Drive “unprocessed” folder and downloads each card image.
3. Sends the image to Google Gemini (PaLM) Vision to extract business card fields as JSON and then cleans/parses the response, rescuing the email address if needed.
4. Checks whether a valid email address was extracted and, if not, prepares a “manual review needed” notification that includes the Google Drive link to the card.
5. For cards with a valid email, builds a personalized subject and body, optionally downloads an attachment file from Google Drive, and creates a Gmail draft (never sending it automatically).
6. Moves successfully drafted card images to a Google Drive “processed” folder and posts a success or review-needed message to Slack, Discord, or Chatwork based on your selected notification channel.

## Setup
1. Add credentials for Google Drive OAuth2, Google Gemini (PaLM) API, and Gmail OAuth2.
2. Add a notification credential for the channel you use: Slack OAuth2, a Discord Webhook URL, or a Chatwork X-ChatWorkToken header-auth credential.
3. In the Settings values, set the Google Drive source_folder_id and processed_folder_id, and optionally set attachment_file_id to a Drive file ID to include as a draft attachment.
4. In the Settings values, choose notify_channel (slack/discord/chatwork) and set slack_channel or chatwork_room_id as applicable.
5. Update the sender signature fields in Settings and customize the email subject/body text to match your outreach message.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Discord, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
