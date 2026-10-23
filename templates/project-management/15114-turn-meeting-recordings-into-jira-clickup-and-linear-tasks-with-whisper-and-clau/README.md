# 📋 Turn meeting recordings into Jira, ClickUp, and Linear tasks with Whisper and Claude

> ⚡ **142 views** · 📋 [Project Management](../)

## Description

This AI-powered workflow transcribes Zoom/Google Meet recordings, extracts decisions and tasks using AI, then creates tickets in Jira/ClickUp/Linear and assigns them to team members automatically.

### How it works

1. **Trigger** - Receives meeting recording URL via webhook or schedule
2. **Download Recording** - Fetches audio/video file from Zoom/Google Meet
3. **Audio Extraction** - Converts video to audio if needed using FFmpeg
4. **Transcription** - Uses Whisper API to transcribe meeting audio
5. **Wait & Process** - Allows transcription to complete
6. **Parse Transcript** - Cleans and formats the transcription text
7. **AI Analysis** - Claude extracts action items, decisions, owners
8. **Team Member Matching** - Maps names to user IDs in project tools
9. **Create Tasks** - Generates tickets in Jira/ClickUp/Linear
10. **Assign & Notify** - Assigns tasks to team members and sends notifications
11. **Meeting Summary** - Saves full summary to Google Drive/Notion
12. **Response** - Returns processed action items and task links

### Setup Steps

1. Import this workflow into your n8n instance
2. Configure credentials:
   - **Zoom OAuth** - For downloading Zoom recordings
   - **Google OAuth** - For Google Meet recordings and Drive storage
   - **OpenAI API** - For Whisper transcription service
   - **Anthropic API** - For Claude AI analysis
   - **Jira/ClickUp/Linear API** - For task creation
   - **Slack/Teams** - For notifications (optional)
3. Set up team member mapping in the config node
4. Configure your project management tool preferences
5. Activate the workflow

### Sample Trigger Payload
```json
{
  "meetingSource": "zoom",
  "recordingUrl": "https://zoom.us/rec/share/...",
  "meetingTitle": "Q1 Planning Meeting",
  "meetingDate": "2024-01-15",
  "attendees": ["alice@company.com", "bob@company.com", "charlie@company.com"],
  "projectKey": "PROJ-123",
  "taskTool": "jira",
  "defaultPriority": "medium",
  "autoAssign": true,
  "sendNotifications": true,
  "saveToNotion": false,
  "saveToDrive": true,
  "extractDecisions": true,
  "extractRisks": true,
  "dueDate": "2024-01-22"
}
```

### Features

- **Multi-platform support** (Zoom, Google Meet, MS Teams recordings)
- **Accurate transcription** using OpenAI Whisper API
- **AI-powered extraction** of action items, decisions, risks, and next steps
- **Automatic task creation** in Jira, ClickUp, or Linear
- **Smart assignment** - maps attendee names to task assignees
- **Meeting summaries** - saves comprehensive notes to Drive/Notion
- **Slack/Teams notifications** - alerts team members of new tasks
- **Duplicate detection** - prevents creating duplicate tickets
- **Priority detection** - AI assigns urgency levels to tasks

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Google Drive, Jira Software, ClickUp

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
