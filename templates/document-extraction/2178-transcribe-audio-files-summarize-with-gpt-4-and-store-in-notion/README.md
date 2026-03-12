# 🔬 Transcribe audio files, summarize with GPT-4, and store in Notion

> ⚡ **67,731 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Who is this for?
This workflow template is perfect for content creators, researchers, students, or anyone who regularly works with audio files and needs to transcribe and summarize them for easy reference and organization.

### What problem does this workflow solve?
Transcribing audio files and summarizing their content can be time-consuming and tedious when done manually. This workflow automates the process, saving users valuable time and effort while ensuring accurate transcriptions and concise summaries.

### What this workflow does
This template automates the following steps:

- Monitors a specified Google Drive folder for new audio files
- Sends the audio file to OpenAI's Whisper API for transcription
- Passes the transcribed text to GPT-4 for summarization
- Creates a new page in Notion with the summary

### Setup
To set up this workflow:

- Connect your Google Drive, OpenAI, and Notion accounts to n8n
- Configure the Google Drive node with the folder you want to monitor for new audio files
- Set up the OpenAI node with your API key and desired parameters for Whisper and GPT-4
- Specify the Notion database where you want the summaries to be stored

### How to customize this workflow
- Adjust the Google Drive folder being monitored
- Modify the OpenAI node parameters to fine-tune the transcription and summarization process
- Change the Notion database or page properties to match your preferred structure


With this AI-powered workflow, you can effortlessly transcribe audio files, generate concise summaries, and store them in a structured manner within Notion. 

*Streamline your audio content processing and organization with this automated template.*

## 🔗 Nodes Used

Google Drive, Notion, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
