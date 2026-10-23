# ⚡ Create Google Tasks from Tactiq meeting transcripts using OpenAI and Telegram

> ⚡ **28 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new Tactiq transcript files, uses OpenAI to extract explicit action items, creates matching Google Tasks, sends a Telegram notification, and logs each processed transcript in an n8n Data Table to prevent duplicate processing.

## How it works
1. Triggers when a new file is created in a specified Google Drive folder (or on an optional 12-hour schedule).
2. Loads previously processed transcript filenames from an n8n Data Table and lists files in the target Google Drive folder.
3. Filters out files that have already been processed, then downloads each new transcript and converts it to plain text.
4. Sends the transcript text to OpenAI to return strict JSON containing only explicit action items with an owner, optional due date, and an evidence quote.
5. Creates a Google Task for each extracted action item, including source transcript details in the task notes, and sends a Telegram error message if task creation fails.
6. Records the transcript as processed in the n8n Data Table (including zero-task transcripts) and sends a Telegram success message.

## Setup
1. Add credentials for Google Drive, Google Tasks, OpenAI, and Telegram.
2. Create or choose an n8n Data Table to store processed transcripts (for example, with columns like nombre_archivo, fecha_proceso, and total_tareas).
3. Update the template variables with your Google Drive folder ID, Google Tasks list ID, Data Table ID, Telegram chat ID, and preferred timezone.
4. In the Google Drive trigger, select the same transcript folder you set in the template variables.

## Requirements
- Tactiq account, Google account

## 🔗 Nodes Used

Telegram, Google Drive, Google Tasks, Google Drive Trigger, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
