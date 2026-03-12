# 👥 Team morale monitoring from Teams/Slack messages with Gemini AI

> ⚡ **133 views** · 👥 [HR & Recruitment](../)

## Description

## AI Team Morale Monitor

### Who’s it for
For team leads, HR, and managers who want to monitor the emotional tone and morale of their teams based on message sentiment.

### How it works
1. **Trigger:** Runs every Monday at 9 AM.
2. **Config:** Defines your Teams and Slack channels.
3. **Fetch:** Gathers messages for the week.
4. **AI Analysis:** Evaluates tone and stress levels.
5. **Aggregate:** Computes team sentiment averages.
6. **Report:** Creates a readable morale summary.
7. **Slack Post:** Sends report to your workspace.

### How to set up
1. Connect Microsoft Teams and Slack credentials.
2. Enter your Team and Channel IDs in the **Workflow Configuration** node.
3. Adjust the schedule if desired.

### Requirements
- Microsoft Teams and Slack access.
- Gemini (or OpenAI) API credentials set in AI nodes.

### How to customize
- Modify the AI prompts for different insight depth.
- Replace Gemini with other LLMs if preferred.
- Change posting platform or format.

**Note:** This workflow uses *only* linguistic data — no personal identifiers or private metadata.

## 🔗 Nodes Used

Slack, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
