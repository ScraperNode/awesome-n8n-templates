# 🔬 Transcribe & summarize Telegram voice notes with OpenAI and DeepSeek Chat to Google Docs

> ⚡ **394 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates the process of transcribing voice notes from Telegram and then summarizing them, finally saving both the transcript and the summary to Google Drive.

Here's a step-by-step breakdown of what the workflow does:
* **Triggered by Telegram Message:** The workflow starts when a new message is received on Telegram.
* **Get Audio File from Telegram:** It then retrieves the audio file from the Telegram message.
* **Transcribe Audio with OpenAI:** The audio file is sent to OpenAI for transcription.
* **Save Transcript to Google Drive:** The generated transcript is saved as a new Google Doc in a designated "N8N Transcribes" folder within Google Drive. The document is named after the original audio file.
* **Summarize Transcript with AI:** The transcript is then sent to an AI agent (which uses DeepSeek Chat Model 1 as its language model) to generate a summary description. The prompt instructs the AI to create a plain text summary suitable for a report to a supervisor, expanding on the title and avoiding rich text formatting.
* **Save Summary to Google Drive:** Finally, the generated summary is saved as a new Google Doc in a "N8N Summaries" folder in Google Drive, also named after the original audio file.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Drive, AI Agent, OpenAI, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
