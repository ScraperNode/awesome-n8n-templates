# 🔬 Convert handwritten meeting notes to Google Docs with Gmail and easybits

> ⚡ **37 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for unread emails with image attachments, uses easybits Extractor to turn handwritten meeting notes into structured data, creates a Google Doc in a chosen Drive folder, inserts the formatted notes, and replies to the original email with the document link.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail and downloads its attachments.
2. Sends the attached meeting-notes image to easybits Extractor to extract the meeting title, date, attendees, summary, action items, and source transcription.
3. Formats the extracted fields into a single plain-text document body with fallbacks for missing values and counts the action items.
4. Creates a new Google Doc in Google Drive using the extracted meeting title (or a date-based fallback).
5. Inserts the generated plain-text body into the newly created Google Doc.
6. Replies in Gmail to the original email thread with a link to the Google Doc and the number of action items captured.

## Setup
1. Connect Gmail OAuth2 credentials for the Gmail trigger and reply action.
2. Install and configure the easybits Extractor community node and add your easybits API key (and select/configure the extractor pipeline used for meeting-note fields).
3. Connect Google Docs (Google) OAuth2 credentials and set the destination Google Drive folder ID in the doc creation step.

## 🔗 Nodes Used

Gmail, Google Docs, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
