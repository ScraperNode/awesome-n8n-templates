# 🔬 Summarize meeting transcripts with Google Drive, OpenAI, Gmail, and Sheets

> ⚡ **72 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Drop a meeting transcript in a Drive folder (Meet doc, .txt, .vtt/.srt) and get structured minutes, decisions, and action items with owners, due dates and priorities — as a Gmail draft you review before sending, a Telegram ping, and a running Google Sheets action tracker. Nothing auto-sends.

## How it works
1. A Google Drive trigger watches your transcripts folder — Google Meet's auto-saved transcript docs work as-is, and so do .txt, .vtt and .srt files.
2. The transcript is cleaned deterministically in code: subtitle timestamps, cue indexes and tags stripped, speakers detected, word count checked. Files too short to be a real transcript are skipped — no AI cost, no hallucinated minutes.
3. AI extracts a strict JSON schema — title, summary bullets, decisions, action items with owner/due/priority, open questions — under hard rules: only what was actually said, owners exactly as named or null, a due date only when one was spoken.
4. A validation node enforces the schema: empty tasks dropped, non-ISO dates nulled, priorities clamped.
5. Polished HTML minutes are assembled (actions grouped by owner, priorities flagged) and created as a draft in your Gmail — you review, address it and hit send; nothing ever sends automatically.
6. A Telegram ping delivers the action list, and every action item is appended to a running Google Sheets tracker so tasks from every meeting live in one place.

## Setup
1. Connect Google Drive in When Transcript Arrives in Drive and Download Transcript from Drive, and pick the folder your transcripts land in (Google Meet's "Meet Recordings" folder works as-is).
2. Connect an OpenAI (or compatible) credential in Use OpenAI GPT-4 Model.
3. Connect Gmail in Draft Follow-Up Email — it only ever creates drafts.
4. Create a spreadsheet with columns Date, Meeting, Task, Owner, Due, Priority, Status and select it in Append Actions to Sheet Tracker.
5. For the Telegram ping, create a bot with @BotFather, add its credential in Post Action List to Telegram and set your chat id — or delete the node.
6. Drop a transcript file into the folder and watch the draft appear in Gmail.

## Requirements
- Google Drive, Gmail and Google Sheets (Date, Meeting, Task, Owner, Due, Priority, Status); OpenAI (or compatible) API key; optional Telegram bot for the ping.

## Additional info
Minutes layout lives in one Code node; add schema fields (blockers, sentiment, next meeting) and matching tracker columns; switch the Gmail node from draft to send once you trust the output; feed transcripts from Dropbox or Fireflies/Fathom/tl;dv webhooks; swap Sheets for Todoist, ClickUp, Notion or Jira.

## 🔗 Nodes Used

Google Sheets, Telegram, Google Drive, Gmail, Google Drive Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
