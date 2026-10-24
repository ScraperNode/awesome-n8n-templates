# 🤝 Summarize sales calls into GoHighLevel notes with Deepgram, Gemini, and Sheets

> ⚡ **19 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video Explanation: https://youtu.be/GNAplBWdCDE?si=fX31M-nu3sP2b276
This workflow receives an authenticated webhook with an audio file and mobile number, looks up the matching contact and recent notes in GoHighLevel, transcribes the audio with Deepgram, generates a structured CRM call note using Gemini, and logs the results to Google Sheets before responding.

## How it works
1. Receives an authenticated POST webhook request containing a contact mobile number and an uploaded audio file.
2. Looks up the contact in GoHighLevel (LeadConnector) by the provided mobile number and continues only if a matching contact ID is found.
3. Extracts the uploaded audio from the webhook payload and sends it to Deepgram’s transcription API to produce a call transcript.
4. Retrieves the contact’s notes from GoHighLevel and uses only notes from the last 30 days as context.
5. Sends the recent notes and transcript to Google Gemini to generate a structured CRM interaction note.
6. Appends or updates a row in Google Sheets with the contact details, recent notes, execution link, and the AI-generated note.
7. Returns the workflow result back to the original webhook request.

## Setup
1. Configure the Webhook trigger URL in your calling app and include the required header authentication plus a POST body field named `mobile_number` and a binary audio upload.
2. Add GoHighLevel (HighLevel OAuth2) credentials with access to contacts and notes for your location/account.
3. Add a Deepgram API key (HTTP Header Auth) and ensure the webhook uploads an audio format supported by Deepgram.
4. Add Google Gemini (Google PaLM) credentials for the Gemini chat model used to generate the CRM note.
5. Add Google Sheets service account credentials, select the target spreadsheet and sheet, and replace `https://enter-your-n8n-instance-url-here` with your n8n base URL for the execution link.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, HighLevel, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
