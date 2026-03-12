# 💬 AI-powered meeting minutes with GPT-4, task assignment & multichannel distribution

> ⚡ **284 views** · 💬 [Support Chatbots](../)

## Description

# Meeting Minutes & Action Item Tracker

Fully automated meeting documentation workflow that uses AI to transform raw transcripts into professional PDFs and actionable tasks.

## Features

- AI-powered summary generation (GPT-4)
- Automatic action item extraction with assignees, deadlines, and priorities
- Professional PDF generation with custom styling
- Multi-channel distribution (Email, Slack, Google Drive)
- Task creation in Google Tasks
- Personalized notifications to each assignee
- Deadline tracking and urgency detection

## Setup Instructions

## REQUIRED CREDENTIALS:
1. **OpenAI API** - Get from ```https://platform.openai.com```
2. **Gmail OAuth2** - Connect your Google account
3. **Google Drive OAuth2** - Same Google account
4. **Google Tasks OAuth2** - Same Google account
5. **Slack OAuth2** - Connect your workspace
6. **htmlcsstopdf API** - Get from ```https://www.htmlcsspdf.com```

## CONFIGURATION STEPS:

1. **WEBHOOK**: Note your webhook URL after activation

2. **EMAIL NODES**:
   - **"Email All Participants"**: Uses participants array from input
   - **"Send Individual Task Emails"**: Change @yourcompany.com to your domain

3. **GOOGLE DRIVE**:
   - Select folder where PDFs should be stored
   - Recommended: Create **"Meeting Minutes"** folder

4. **SLACK**:
   - Select channel for team notifications
   - Recommended: Create **#meeting-notes** channel

5. **GOOGLE TASKS**:
   - Select task list where tasks should be created
   - Default list works fine

## TESTING:
1. Use the webhook URL with sample meeting data
2. Check execution log for any errors
3. Verify PDF in Google Drive
4. Check emails were sent
5. Confirm tasks created in Google Tasks


## Example Input Format


**POST** : ```https://your-n8n-instance.com/webhook/meeting-minutes```

**Headers**:
- Content-Type: application/json

- Body:
```
{
  "title": "Weekly Team Standup",
  "date": "2025-09-29",
  "participants": [
    "john@company.com",
    "sarah@company.com",
    "joe@company.com"
  ],
  "duration": "30 minutes",
  "transcript": "John started the meeting by discussing the progress on the API development. Sarah mentioned that she's working on the dashboard and needs to prepare mockups by Thursday. The team agreed that Sarah will review the API documentation before the client demo on Friday. Akshita confirmed she finished the database schema redesign and needs to schedule a meeting with DevOps team by next Monday to discuss production deployment."
}
```
This will generate:
- Professional PDF with summary and action items
- Emails to all participants
- Individual task emails to John, Sarah, and Joe
- Tasks in Google Tasks
- Slack notification

## Output

After execution, you'll get:
1. **Professional PDF** stored in **Google Drive**
2. Email sent to all participants with meeting overview
3. Individual emails to **each assignee** with their tasks
4. **Slack notification** with **summary and download link**
5. Tasks created in **Google Tasks** with deadlines

## CUSTOMIZATION:
- Modify PDF styling in **"Generate PDF Document"** node
- Adjust **email templates** in **Gmail** nodes
- Change **AI prompts in OpenAI nodes** for different output
- Modify priority/deadline logic in **"Parse and Enrich Data"**

## Troubleshooting

**Workflow stops at validation:**
- Ensure **transcript has &gt;50 words**
- Check that **webhook payload** is correctly **formatted**

**No PDF generated:**
- Verify **htmlcsstopdf API** credentials
- Check **API** usage limits

**Tasks not created:**
- Verify deadline format is **YYYY-MM-DD**
- Check **Google Tasks API** connection

**Emails not sending:**
- Confirm **Gmail OAuth2** is connected
- Check that email addresses are **valid**

## Support

For issues or questions, visit the n8n community forum.

## License

MIT License - Feel free to modify and share!

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Google Drive, Google Tasks, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
