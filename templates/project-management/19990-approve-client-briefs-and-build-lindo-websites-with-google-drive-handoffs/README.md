# 📋 Approve client briefs and build Lindo websites with Google Drive handoffs

> ⚡ **4 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow collects an approved website brief via an authenticated n8n form, requests email approval, starts a Lindo website build, polls for completion, archives a Markdown handoff document to Google Drive, and emails the internal reviewer the build outcome and Drive link.

## How it works
1. Receives a submission from a password-protected n8n form containing the business name, brief, target audience, and an approval acknowledgment.
2. Validates the configuration and brief content, then emails the account manager/reviewer with an approve/reject request that expires after two days.
3. If explicitly approved, sends the prompt to the Lindo API to start a single website build and captures the returned workflow ID.
4. Polls the Lindo status endpoint every 30 seconds until the build reaches a terminal state or the maximum polling limit is reached.
5. Generates a Markdown handoff document that includes the original brief, build status details, and a human QA checklist, then uploads it to a private Google Drive folder.
6. Emails the internal reviewer a plain-text report with the final outcome, workflow ID, and a link to the archived handoff document in Google Drive.
7. If the build is rejected or the approval request times out, sends an email confirming no Lindo build was started.

## Setup
1. Configure Basic Auth for the n8n form trigger so only internal users can submit briefs.
2. Add SMTP credentials for the email steps and set valid sender and reviewer email addresses in the configuration values.
3. Create an HTTP Header Auth credential for Lindo (Authorization: Bearer YOUR_LINDO_API_KEY) and select it in both Lindo HTTP Request steps.
4. Connect Google Drive OAuth credentials, create a private target folder, and paste its folder ID into the workflow configuration value.
5. Review and adjust the polling limit (maxPolls) and ensure your n8n instance is reachable so the email approval callback links work.

## Requirements
- Lindo account with API access and generation credits; SMTP; Google Drive OAuth; and a publicly reachable n8n instance for approval callbacks. Uses built-in nodes only.

## Customization
- Adjust the approval deadline, polling budget and handoff checklist. Keep the reviewer and Drive folder fixed to internal staff.

## Additional info
An approved build spends Lindo credits and creates a public website. Duplicate form submissions are separate builds. If a later step fails, recover using the recorded workflow ID rather than restarting the creation POST. Partial and timed-out outcomes require review. Keep approval links and handoff documents private.

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
