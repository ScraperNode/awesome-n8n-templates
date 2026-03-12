# 🔬 Convert audio emails to Japanese transcripts with OpenAI GPT-4o & Google Suite

> ⚡ **43 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Overview**

This workflow turns audio attachments you receive by Gmail into Japanese transcripts and structured AI summaries, then saves everything to Google Drive and Google Sheets while notifying you via Gmail and Slack. Every time an email with a voice recording arrives, the audio is stored in a dated folder, fully transcribed in Japanese, summarized into clear meeting-style points, and logged so you can quickly review and search later. 

Audio Email to Japanese Transcr…

Audio Email to Japanese Transcript with AI Summary & Multi-Channel Notification

**Who this is for**

People who get voice memos or meeting recordings as email attachments

Teams that want clear Japanese transcripts plus action-item summaries from calls

Anyone who wants audio notes automatically archived and searchable in Drive/Sheets

**How it works**

Trigger: New Gmail with audio attachment
A Gmail Trigger watches your inbox, downloads attachments for each new email, and passes them into the workflow.

Split & filter attachments
A Code node splits the email into one item per attachment and normalizes the binary data to binary.data.
A Filter node keeps only audio files (mp3, wav, m4a, ogg) and discards everything else.

Create date-based Drive folder & upload audio
A Code node builds a YYYY/MM folder path from the current date.
A Google Drive node creates that folder (if it doesn’t exist) under your chosen parent folder.
A Merge node combines folder info with file info, and the audio file is uploaded into that folder so all recordings are organized by year/month.

Transcribe audio to Japanese text
An HTTP Request node calls the OpenAI Audio Transcriptions API (gpt-4o-transcribe) with the audio file.
The prompt tells the model to produce a verbatim Japanese transcript (no summarization, no guessing), returned as plain text.

Generate structured AI summary
The transcript is sent to an OpenAI Chat node (gpt-4o), which outputs JSON with:

title: short Japanese title for the recording

points: key discussion points (array)

decisions: decisions made (array)

actionItems: action items with owner/deadline (array)
A Set node then formats this JSON into a Markdown summary (summaryContent) with sections for 要点 / 決定事項 / アクションアイテム.

Save transcript & summary files to Drive
The transcript text is converted into a .txt file and uploaded to the same YYYY/MM folder.
The Markdown summary is converted into a .md file (e.g. xxx_summary.md) and uploaded as well.
Each file is then shared in Drive so you have accessible web links to both transcript and summary.

Log to Google Sheets
A Code node collects the email subject, file name, full transcript, formatted summary, and Drive links into one JSON object.
A Google Sheets node appends a new row with timestamp, subject, summary, transcript, and link so you get a running log of all processed audios.

Notify via Gmail & Slack
Finally, the workflow:

Sends a Gmail message back to the original sender with the meeting summary and links

Posts a Slack notification in your chosen channel, including subject, file name, summary text, and Drive link

**How to set up**

Connect your Gmail, Google Drive, Google Sheets, Slack, and OpenAI credentials in the respective nodes.

In the Gmail Trigger, narrow the scope if needed (e.g. specific label, sender, or inbox).

In the Drive nodes, set the parent folder where you want the YYYY/MM subfolders to be created.

In the Google Sheets node, point to your own spreadsheet and sheet name.

In the Slack node, select the channel where reminders should be posted.

Make sure your OpenAI credentials have access to both audio transcription and chat endpoints.

**Customization ideas**

Filter by sender, subject keyword, or label so only certain emails are processed.

Change the folder structure (e.g. ProjectName/YYYY/MM or YYYY/MM/DD) in the folder-path Code node.

Adjust the transcription prompt (e.g. allow light punctuation clean-up, use another language).

Modify the summary format or add extra fields (e.g. meeting participants, project name) in the AI prompt and Markdown template.

Send notifications to other tools: add branches for Notion, LINE, Teams, or additional Slack channels.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
