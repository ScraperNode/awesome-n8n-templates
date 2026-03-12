# 🔬 Summarize meeting recordings and create Notion action items with Gemini AI

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this for

Team leads, project managers, and operations staff who want to automate meeting documentation. Useful for any team that records meetings and needs structured notes with clear action items.

## What this workflow does

This workflow accepts a meeting recording upload via a web form. The recording is uploaded to Gemini Files API for audio analysis. Gemini AI generates a structured summary including key decisions, action items with assignees, and follow-up topics. A Notion page is created with the complete notes, and the team is notified on Slack with a summary and the action item list.

## Setup

1. Add a **Google Gemini API** credential for file upload and audio analysis.
2. Add a **Notion API** credential and create a database with columns: Title, Date, Summary, Action Items, Status.
3. Add a **Slack OAuth2** credential and set your meetings channel.

## Requirements

- Google Gemini API key (supports audio file analysis)
- Notion workspace with API integration enabled
- Slack workspace with OAuth2 app

## How to customize

- Edit the analysis prompt in "Analyze recording with Gemini" to focus on specific meeting types (standup, retrospective, planning).
- Change the Gemini model to a larger variant for longer recordings.
- Add a Google Calendar integration to automatically match recordings to calendar events.

## Important disclaimer

AI-generated summaries may not capture every detail or nuance from the recording. Always review the notes before sharing externally or making decisions based on them.

## 🔗 Nodes Used

HTTP Request, Slack, Notion, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
