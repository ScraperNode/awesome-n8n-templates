# 👥 Automate employee onboarding with Groq, Gmail, Slack and Google Workspace

> ⚡ **31 views** · 👥 [HR & Recruitment](../)

## Description

## How it works
1. New hire submits an onboarding form with their details
2. Groq AI generates personalised welcome content, Slack messages, and IT access request
3. Welcome email sent to the new hire via Gmail
4. Automated emails sent to HR, the manager, and IT team
5. Company Policy and Employee Handbook PDFs downloaded from Drive and attached
6. Slack messages posted to #general and #hr-team channels
7. Onboarding record appended to Google Sheets tracker

## Set up steps
- Estimated time: ~15 minutes
- Connect Groq API, Gmail, Slack, Google Drive, and Google Sheets credentials
- Upload your Policy and Handbook PDFs to Drive and link them in the Download nodes
- Select your Slack channels in the two Slack nodes
- Select your onboarding Google Sheet in the Append row node
- Activate the workflow and share the form link with new hires

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
