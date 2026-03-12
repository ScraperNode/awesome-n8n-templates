# 🔬 Convert meeting recordings to notes & action items with AssemblyAI, GPT-4 & Sheets

> ⚡ **363 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates the process of turning meeting recordings into structured notes and actionable tasks using AssemblyAI and Google Sheets. It is ideal for teams who want to save time on manual note-taking and ensure that action items from meetings are never missed.

### What it does
- Receives a meeting recording (audio file) via webhook
- Transcribes the audio using AssemblyAI
- Uses AI to generate structured meeting notes and extract action items (tasks)
- Logs meeting details and action items to a Google Sheet for easy tracking

### Use cases
- Automatically document meetings and share notes with your team
- Track action items and responsibilities from every meeting
- Centralize meeting outcomes and tasks in Google Sheets

---

## Quick Setup

1. AssemblyAI API Key:
   Sign up at [AssemblyAI](https://www.assemblyai.com/) and get your API key.

2. Google Sheets Credentials:
   Set up a Google Service Account and share your target Google Sheet with the service account email.

3. OpenAI API Key (optional, if using OpenAI for notes extraction):
   Get your API key from [OpenAI](https://platform.openai.com/).

4. Configure the following essential nodes:
   - **Recording Ready Webhook:** Set the webhook URL in your meeting platform to trigger the workflow when a recording is ready.
   - **Workflow Configuration:** Enter your AssemblyAI API key, default due date, and admin email.
   - **AssemblyAI Transcription:** Add your AssemblyAI API key in the credentials.
   - **Generate Meeting Notes & Extract Action Items:** Add your OpenAI API key if required.
   - **Log Meeting to Sheets:** Enter your Google Sheets document ID and sheet name.

---

## How to Use AssemblyAI in this Workflow

- The workflow sends the meeting audio file to AssemblyAI via the **AssemblyAI Transcription** node.
- AssemblyAI processes the audio and returns a full transcript.
- The transcript is then used by AI nodes to generate meeting notes and extract action items.

---

## Requirements

- AssemblyAI API key
- Google Service Account credentials
- (Optional) OpenAI API key for advanced note and action item extraction

---

Start the workflow by sending a meeting recording to the webhook URL. The rest is fully automated!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
