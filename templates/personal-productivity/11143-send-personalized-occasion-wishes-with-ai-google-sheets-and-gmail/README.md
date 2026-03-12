# ⚡ Send personalized occasion wishes with AI, Google Sheets and Gmail

> ⚡ **140 views** · ⚡ [Personal Productivity](../)

## Description

## Overview: Automated Occasion Wisher 
**How it works** 
- Runs daily to check if today matches any birthday, anniversary, or special occasion in your Google Sheet
- AI Agent reads the sheet and returns a list of users having a special occasion to wish with details and a personalized wishing message
- If there is no one to wish, no email is sent. If there are multiple people to wish, multiple personalized emails are sent

**Setup steps** 

- Connect your Google Sheet containing columns as: Name, Occasion_Date, Email,	Occasion_Type, Relationship, Personal_Note
- Insert the AI prompt ensuring strict JSON output (list format only)
- Configure the Email node for sending the final message

**Customization**

- Edit AI prompt to change message tone, length, or emojis
- Add support for multiple reminder styles (e.g., early notification)
- Extend with logging, Slack alerts, or saving sent email history

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
