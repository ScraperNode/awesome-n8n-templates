# 🔬 Automate meeting transcription & minutes distribution with OpenAI and Google Drive

> ⚡ **360 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Automated Meeting Recording Transcription & Minutes Distribution Workflow

Managing meeting recordings manually—downloading audio, transcribing it, summarizing key points, saving documents, and notifying the team—quickly becomes repetitive and inefficient. This workflow eliminates all of those manual steps by automatically detecting new audio files uploaded to a designated Google Drive folder, converting them into high-quality transcripts using OpenAI, summarizing them into structured meeting minutes, transforming the content into a text file, uploading it back to Google Drive, and finally notifying a Chatwork room with the completed summary.
What used to take hours can now be completed automatically within minutes, ensuring consistency, accuracy, and faster information sharing.

## Who’s it for

This workflow is ideal for:

- Teams that need high-quality, client-ready meeting minutes generated automatically  
- Project managers who require accurate summaries, decision tracking, and action items without manual effort  
- Cross-functional teams handling multiple meetings and requiring structured, searchable documentation  
- Organizations using Google Meet, Zoom, or Teams where recordings must be turned into polished minutes  
- Anyone who wants a consistent, AI-assisted system that analyzes discussions, extracts insights, and formats them professionally  

By leveraging an advanced Meeting Minutes Generation System—capable of key-point extraction, noise reduction, speaker/topic organization, and review support—this workflow ensures that every meeting is transformed into a clean, structured, and highly usable document.

---

## How it works

### 1. Audio file upload triggers the workflow  
When a new recording is uploaded to the designated Google Drive folder, the Google Drive Trigger immediately activates and begins processing.

### 2. The audio file is downloaded  
The file is retrieved from Google Drive and prepared in binary format for accurate transcription.

### 3. AI-powered transcription  
The audio is sent to OpenAI’s transcription engine, producing a complete and highly accurate transcript of the meeting.

### 4. Generate structured, client-ready meeting minutes  
The transcript is processed by a specialized Meeting Minutes Generation System powered by a multi-step prompt.  
Instead of using a fixed template, the system intelligently analyzes the transcription and automatically generates a professionally structured document using the following capabilities:

- Extraction of key points while removing irrelevant conversation  
- Organization of content by speaker, topic, and logical flow  
- Automatic construction of headings and document structure  
- Draft generation based on client-facing writing standards  
- Review-support logic that allows refinement and improved readability  
- Task-based orchestration (ingestion → key-point extraction → draft generation → review → final approval)

Because the system dynamically determines the optimal structure, the resulting minutes adapt to the content of each meeting rather than following a rigid set of categories.  
If certain information cannot be derived from the transcript, the system will appropriately leave it out rather than forcing placeholder sections.


### 5. Convert the minutes into a file  
The structured minutes are converted into a `.txt` or `.docx` document, ready for submission or archival.

### 6. Upload the finalized document  
The completed meeting minutes are uploaded to a specific Google Drive folder and saved using a timestamped filename.

### 7. Notify Chatwork  
A formatted notification—including the summarized content—is automatically posted to a Chatwork room, ensuring immediate team visibility.

---

## How to set up

1. Import the workflow into your n8n environment.  
2. Authenticate Google Drive and select the folder to monitor for new recordings.  
3. Connect your OpenAI API keys for both transcription and structured minutes generation.  
4. Specify the Google Drive folder where the finished documents should be stored.  
5. Add your Chatwork API token and room ID for automated notifications.  
6. Upload a sample audio file to confirm the full end-to-end pipeline works correctly.

---

## Requirements

- n8n instance (cloud or self-hosted)  
- Google Drive account with appropriate folder permissions  
- OpenAI API credentials  
- Chatwork API token  
- Supported audio formats like mp3, wav, m4a, etc.

---

## How to customize the workflow

- Modify the minutes-generation prompt to reflect your organization’s preferred format  
- Add Slack, Teams, or Discord notifications in addition to Chatwork  
- Route different types of meetings to different folders or templates  
- Save transcript and structured minutes separately for compliance or analysis  
- Log metadata or decisions into Google Sheets or project management tools  
- Store minutes in a vector database to enable semantic search across past meetings  
- Attach the final document directly as a file in Chatwork  
- Extend the system to support revision cycles, reviewer comments, or approval workflows

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, Convert to File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
