# 🔬 Transcribe online audio files to text with Online Speech to Text Cloud API

> ⚡ **92 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manually fetches an audio file from a URL, sends it to the Online Speech to Text Cloud API for asynchronous transcription, polls until the job finishes, and then retrieves the final transcript using the n8n-nodes-speech-to-text-cloud community node.

## How it works
1. Runs when you manually execute the workflow.
2. Sets the audio URL, language (or auto-detect), and desired output format for the transcription request.
3. Downloads the audio file from the provided URL using an HTTP request.
4. Uploads the audio to the Online Speech to Text Cloud API to start a transcription job.
5. Waits and repeatedly checks the job status until the API reports the transcription is finished.
6. Retrieves the completed transcript from the Online Speech to Text Cloud API and returns it in the workflow output.

## Setup
1. Install the community node package `n8n-nodes-speech-to-text-cloud` on an n8n instance that allows community nodes.
2. Create an Online Speech to Text Cloud API credential in n8n using your API key.
3. Update the audio file URL and any transcription preferences (language and output format) in the field-mapping step before running the workflow.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
