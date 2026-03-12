# 🎬 Automate meeting summaries with Google Drive, Gemini AI & Google Docs

> ⚡ **276 views** · 🎬 [Content Creation & Video](../)

## Description

# AI Meeting Summary Generator with Google Docs Integration

## Who’s it for
- Teams that record meetings and want fast, clear summaries without manual note-taking.
- Managers who need action items extracted automatically.
- Anyone using Google Drive + Google Docs as their central workspace.

## How it works / What it does
This workflow automates meeting documentation:

1. Watches a Google Drive folder for new audio/video meeting files.
2. Downloads the file and transcribes speech into text using Gemini AI.
3. Summarizes transcripts into Key Discussions and Action Items.
4. Creates or updates a Google Doc with the formatted summary (title, bullets, checkmarks, styling).
5. Sends final output to Docs with bold headings, bullets, and spacing for readability.

## How to set up
- Add your Google Drive Trigger to monitor a folder.
- Connect Gemini AI to handle transcription + summarization.
- Configure the Google Docs Tool to create/update your summary documents.
- (Optional) Use the Code Node + Docs API to apply bullet/checkmark formatting.

## Requirements
- Google Drive OAuth2 – for monitoring & downloading files
- Google Docs OAuth2 – for creating and updating documents
- Google Gemini API – for transcription + AI-powered summarization

## How to customize the workflow
- Change the Google Drive folder to monitor a different workspace.
- Edit the system prompt in the Summarizer to tweak summary style (e.g., more detail, decisions only, etc.).
- Modify the Code Node formatting rules (bullets, checkmarks, bold text).
- Add integrations (e.g., Slack, Email, Notion) to send summaries beyond Google Docs.

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
