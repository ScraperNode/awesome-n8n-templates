# 🎯 Automate meeting summaries & action items with Google Meet, AssemblyAI & Claude AI

> ⚡ **551 views** · 🎯 [AI Summarization & Classification](../)

## Description

The Google Meet AI Assistant workflow provides intelligent meeting analysis by integrating Google Calendar, Google Drive, AssemblyAI transcription, Anthropic Claude AI, Slack, and Notion. It automates the complete process of fetching meeting data, retrieving recordings, transcribing conversations, analyzing with AI, and distributing actionable insights.

**Workflow Steps**

Step 1: Fetch Meetings
- Retrieves Google Calendar events from the last 24 hours.
- Filters for confirmed meetings with Google Meet conference links.

Step 2: Get Recording
- Searches for the meeting recording file saved in Google Drive.
- Downloads the recording for transcription purposes.

Step 3: Transcribe Recording
- Uses AssemblyAI to transcribe the recording.
- Transcription includes speaker labels, highlights, and sentiment analysis.

Step 4: AI Analysis
- Analyzes the transcript with Anthropic Claude AI.
- Extracts:
Meeting summary (2-3 paragraphs)
Action items with responsible parties
Mentioned dates or deadlines
Overall meeting sentiment

Step 5: Distribute Summary
- Posts meeting summary and insights to a Slack channel.
- Creates tasks for action items in Notion.

**Integration Overview**
- Google Calendar: Event retrieval and filtering of Google Meet meetings.
- Google Drive: Recording search and download.
- AssemblyAI: Audio transcription with advanced features.
- Anthropic Claude (Langchain): AI-driven analysis of transcripts.
- Slack: Notification distribution for meeting summaries.
- Notion: Task creation for actionable items.

**Error Handling**
If a recording is not found, stops execution and returns an error message:
*"No recording found for this meeting. Please ensure the meeting was recorded and saved to Google Drive."*

**Summary**
This workflow fully automates the end-to-end process of meeting analysis from calendar event detection to action item task creation using AI, enabling productivity gains for meeting-heavy teams.

If further use or support is needed, you can contact me via [LinkedIn](LinkedIn).

If you want, I can also help create a detailed documentation or a formatted description ready for sharing or integration guides. Let me know!

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Google Calendar, Notion, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
