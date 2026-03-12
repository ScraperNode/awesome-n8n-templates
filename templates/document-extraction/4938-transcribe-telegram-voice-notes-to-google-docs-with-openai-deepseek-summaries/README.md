# 🔬 Transcribe Telegram voice notes to Google Docs with OpenAI & DeepSeek summaries

> ⚡ **289 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow automates the process of transcribing a voice message received via Telegram, summarizing the transcription using an AI model, and then saving both the transcription and the summary to separate Google Docs in Google Drive.

Here's a breakdown of the workflow:

* **Telegram Trigger**: The workflow is initiated when a new message is received on Telegram.
* **Telegram Node**: It retrieves the voice message file from Telegram using the `file_id` from the incoming message.
* **OpenAI Node**: The retrieved voice file is then sent to OpenAI for transcription.
* **Google Drive (for Transcription)**: The transcribed text is saved as a new Google Doc with the current time as its name in a Google Drive folder named "N8N Transcribes".
* **AI Agent**: The transcribed text is sent to an AI Agent (connected to a DeepSeek Chat Model) to generate a plain text summary. The prompt for the summary is set to "Generate A summary description from this Telegram message. Don't use ** or anything that emulates rich text. The description should be in plain text Expand on the title so that the description can be used in a report to my supervisor. Only provide one summary. Do not label it ***Summary****, I already know it's a summary. Thanks.:{{ $json.text }}".
* **Google Drive (for Summary)**: The generated summary is then saved as a new Google Doc with the current time as its name in a Google Drive folder named "N8N Summaries".

In essence, this workflow allows users to send a voice message to a Telegram bot, and automatically get both a transcription and a summary of that message saved as separate documents in their Google Drive.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Drive, AI Agent, OpenAI, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
