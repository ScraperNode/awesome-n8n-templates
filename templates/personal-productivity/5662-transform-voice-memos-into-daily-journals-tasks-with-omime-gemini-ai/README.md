# ⚡ Transform voice memos into daily journals & tasks with OMI.ME & Gemini AI

> ⚡ **1,080 views** · ⚡ [Personal Productivity](../)

## Description

## Who’s it for

This template is perfect for [OMI pendant](https://www.omi.me/?ref=ANGELGMENENDEZ) users or anyone with AI-generated memory transcripts who want to:

* Automatically create daily journals in Markdown
* Extract actionable tasks from conversations
* Store memories in Google Drive
* Sync action items to Google Tasks

Great for creators, ADHD professionals, techies, or productivity hackers who want to build a second brain workflow with no manual data entry.

---

## What it does / How it works

This workflow:

1. Accepts POST data from the OMI AI pendant (via webhook)
2. Extracts structured summaries, tasks, events, and raw transcript data
3. Converts the transcript into Markdown using metadata like emoji, category, and overview
4. Uses Google Gemini or an AI Agent to generate a high-quality journal entry
5. Splits out action items and creates tasks in Google Tasks
6. Uploads both the transcription and the final journal file into separate Google Drive folders for archival
7. Deletes processed files if needed (cleanup path is included)

---

## How to set up

* [Connect your OMI device to send daily summaries to the webhook endpoint](https://docs.omi.me/doc/get_started/introduction)
* Authenticate your Google Drive and Google Tasks accounts
* Replace any hardcoded values (like folder IDs or task list IDs) with your own
* Review the system prompt in the AI Agent node if you'd like to personalize your journal style

---

## ## Requirements

* OMI pendant or device that generates `.md` summaries via API or webhook
* Google Drive & Google Tasks credentials set up in n8n
* Optional: Google Gemini or OpenAI for natural language journal generation

---

## ## How to customize

* Change the output folder IDs for GDrive in the **Upload Transcription** and **Upload Journal** nodes. One folder is for long term storage and the other is short term, the contents of which are deleted every night to generate the journal entries. Ensure your workflow timezone is set correctly in the settings. 
* Replace Google Tasks with another todo app (e.g. Notion, Todoist) using HTTP or native nodes
* Customize the AI prompt in the **AI Agent** or **Gemini Chat** node to reflect your tone (e.g., poetic, minimalist, spiritual)
* Modify the Markdown format in the `Build Markdown Transcription` node for your preferred structure

## 🔗 Nodes Used

Webhook, Google Drive, Google Tasks, Schedule Trigger, AI Agent, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
