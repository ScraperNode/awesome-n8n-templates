# 🎬 Automated meeting minutes from audio using OpenAI transcription and Google Docs

> ⚡ **589 views** · 🎬 [Content Creation & Video](../)

## Description

## Who’s it for

Teams and operators who record meetings/interviews and want fast, standardized, action-oriented minutes—without writing code. New n8n users welcome. 

## What it does / How it works

On form submission, the workflow ingests an audio file and basic metadata, transcribes the audio with OpenAI, summarizes it into concise minutes (key points, next actions with owner & due date, and counterpart concerns/requests), then creates a Google Doc (if missing) and appends the minutes. Sticky notes on the canvas explain each step and required inputs.

## How to set up

1. Connect **OpenAI** via Credentials (never hardcode API keys).
2. Connect **Google (OAuth2)** with Docs/Drive scopes.
3. Replace any hardcoded Drive folder ID with an env var (e.g., `MINUTES_FOLDER_ID`).
4. In the Form Trigger, keep the audio upload field and optional metadata (Manager, Partner, Situation).
5. Test with a short audio sample (30–120 sec), then iterate on the summary prompt.
   Paste this description into a yellow sticky note at the top of the canvas.

## Requirements

* n8n (Cloud or self-hosted)
* OpenAI credential with transcription + LLM access
* Google account with Docs/Drive access and available storage

## How to customize the workflow

* Tweak the prompt tone, length, or sections (e.g., add “Risks/Blockers”).
* Change the document title pattern or parent folder.
* Add Slack or email notifications after the Doc is updated.
* Log executions to Google Sheets for weekly reporting and audits.

## Security & publishing tips

 remove personal IDs (folder IDs, real emails) before sharing; keep node names descriptive; retain sticky notes for setup guidance.

## 🔗 Nodes Used

Google Docs, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
