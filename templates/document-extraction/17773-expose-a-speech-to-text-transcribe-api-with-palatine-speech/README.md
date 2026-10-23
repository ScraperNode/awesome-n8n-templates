# 🔬 Expose a speech-to-text /transcribe API with Palatine Speech

> ⚡ **10 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exposes a POST /transcribe webhook that accepts an uploaded audio file and uses Palatine Speech to generate a transcript, returning the transcription result as a JSON response.

## How it works
1. Receives a POST request with an audio file sent as multipart/form-data.
2. Passes the uploaded file to Palatine Speech for transcription.
3. Palatine Speech converts the audio to text using the palatine_large_highspeed model and detects the spoken language automatically.
4. Returns the transcription back to the caller as a JSON response.
5. The endpoint stays available while the workflow is active, so other systems can call it repeatedly.

## Setup
1. Install n8n-nodes-palatine-speech on self-hosted n8n, or select the verified Palatine Speech node if it is available in your n8n Cloud workspace. Add your Palatine Speech API credentials.
2. Send a POST request to the webhook URL using multipart/form-data with the audio file in the data field. First use the test URL while listening for a test event and verify the returned transcript.
3. Before exposing this endpoint to other callers, configure Header Auth on the Webhook node and share the credential only with trusted clients. Publish the workflow, use its production URL, and set upload limits appropriate for your deployment.

## Requirements
- Palatine Speech API credentials (API key from the Palatine Speech dashboard)
- An n8n installation with the Palatine Speech community node available and an audio file supported by Palatine Speech

## Customization
- Add an authentication header check on the webhook before exposing it publicly
- Extend the JSON response with metadata or route the transcript to another application
- Store every transcript in a database or spreadsheet
- Choose another transcription model supported by your Palatine Speech account

## Additional info
### Need help with Palatine Speech?

Check info here: [speech.palatine.ru](https://speech.palatine.ru/)

Documentation: [docs.speech.palatine.ru](https://docs.speech.palatine.ru/)

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
