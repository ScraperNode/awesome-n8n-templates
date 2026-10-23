# 🔬 Draft security questionnaire answers with Notion, Google Docs, and Slack

> ⚡ **22 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs on demand to match security questionnaire questions against an approved-answer library in Notion, then creates a Google Docs draft and notifies reviewers in Slack, optionally updating a Notion tracker page.

## How it works
1. Starts manually to run a test questionnaire and load configuration values like the Notion database ID, Google Drive folder ID, and confidence threshold.
2. Loads a list of questionnaire questions and queries the Notion database for answers whose Status equals the configured approved value.
3. Compares each questionnaire question to the approved Notion questions, selects the closest match, and marks low-confidence matches as “Needs review” instead of auto-answering.
4. Branches based on whether any answers need review and posts a corresponding Slack notification to the configured review channel.
5. Builds a formatted draft body containing each question, match confidence, owner, and either the approved answer or a “Needs review” placeholder.
6. Creates a new Google Docs document for the draft and optionally updates a Notion questionnaire tracker page with “Draft ready for review” and the needs-review count.

## Setup
1. Add Notion credentials and set the approved-answers database ID, ensuring it has a Select property named “Status” with an “Approved” option.
2. Add Google Docs OAuth credentials (and optionally provide a Google Docs template ID if you plan to extend the workflow to populate content via batchUpdate).
3. Add Slack OAuth credentials and set the review Slack channel ID used for notifications.
4. Update the variables for minimum match confidence, customer name, and (optionally) a Notion tracker page ID if you want the workflow to write back status updates.

## Requirements
- Notion database with approved security answers.
- Google Docs OAuth credentials.
- Slack OAuth credentials with permission to post messages.
- Optional Notion tracker page for questionnaire status updates.

## Customization
- Replace the sample question loader with Google Drive, Gmail, Typeform, or another intake source.
- Adapt the matching logic to your Notion database properties and confidence rules.
- Customize the Google Docs draft body with your company’s required review sections.
- Adjust Slack notifications for different reviewers or channels.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
