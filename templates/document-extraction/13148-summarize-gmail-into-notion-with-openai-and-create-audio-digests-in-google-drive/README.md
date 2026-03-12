# 🔬 Summarize Gmail into Notion with OpenAI and create audio digests in Google Drive

> ⚡ **149 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Gmail → AI Summary → Notion + Audio Digest**

This n8n workflow turns incoming Gmail emails into structured AI summaries and optional audio digests, automatically delivered to Notion and Google Drive.

It is designed to reduce email overload by transforming raw messages into concise, readable, and listenable content.

What this workflow does

On a scheduled basis, the workflow:

- Retrieves Gmail messages (all subjects or filtered)

- Marks processed emails as read to avoid duplicates

- Extracts and normalizes the email body

- Uses OpenAI to generate a clean, structured summary

From the summary, the workflow branches into two outputs:

Text summary

The final AI-generated summary is appended as a block in Notion

Ideal for daily logs, knowledge bases, or team dashboards

Audio transcript (optional)

- The summary text is converted into speech using a TTS model

- The audio file is uploaded to Google Drive

- A shareable link is generated

- The audio reference is added back into Notion

Key features

- Automated Gmail ingestion

- AI-powered email summarization

- JavaScript preprocessing for clean input

- Notion integration for structured storage

- Text-to-speech audio generation

- Google Drive hosting for audio files

- Error-aware branching for TTS generation

- Idempotent and schedule-safe execution

*Typical use cases*

- Daily or weekly email digests

- Executive summaries of inbox activity

- Audio briefings you can listen to on the go

- Knowledge capture from important emails

- Reducing cognitive load from long email threads

Who this template is for

- Professionals dealing with high email volume

- Teams using Notion as a central workspace

- n8n users building AI productivity automations

- Anyone who wants emails summarized instead of skimmed

This template is designed to be practical, extensible, and production-ready, and can be easily adapted to:

- multiple Gmail labels

- different summary styles

- alternative TTS providers

- additional destinations (Slack, Docs, databases)

## 🔗 Nodes Used

Google Drive, Gmail, Notion, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
