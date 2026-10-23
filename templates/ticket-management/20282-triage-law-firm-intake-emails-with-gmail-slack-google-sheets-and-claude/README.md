# 🎫 Triage law firm intake emails with Gmail, Slack, Google Sheets, and Claude

> ⚡ **36 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail intake label, uses Anthropic Claude and a Google Sheets checklist to generate an internal triage brief, runs deterministic conflict and limitation screening in code, posts outcomes to Slack, replies with a fixed acknowledgement (real emails only), and logs every enquiry to Google Sheets.

## How it works
1. Triggers on new unread Gmail messages with the label `intake` (or runs a manual sample enquiry for testing).
2. Normalizes sender, subject, and body text, then uses Anthropic Claude to extract named parties, a matter type, and the key date from the email.
3. Reads a conflict register from Google Sheets and runs an auditable name-matching conflict check in code, sending a Slack hold alert and logging the intake if any match is found.
4. Screens the extracted key date against matter-type limitation rules in code, and if the deadline appears expired sends a Slack attorney-review alert and logs the intake without replying.
5. For non-expired matters, an Anthropic Claude agent pulls the relevant intake checklist from Google Sheets and generates a structured staff-only brief (summary, key facts, missing information, call questions, reviewer, and priority).
6. Flags advice-like lines in the generated brief, posts the formatted brief to a Slack intake channel, replies to the original Gmail thread with a fixed acknowledgement for real emails only, and appends a row to an Intake log sheet in Google Sheets.

## Setup
1. Connect credentials for Gmail, Google Sheets, Slack, and Anthropic Claude.
2. Create a Google Sheets file with `Conflicts`, `Checklists`, and `Intake log` tabs and update the Sheet ID in the workflow’s firm settings.
3. Populate the `Conflicts` sheet (names and aliases) and the `Checklists` sheet (matter_type, questions, reviewer) to match your firm’s intake process.
4. Set your Slack channel name and customize the fixed acknowledgement template in the firm settings.
5. Create a Gmail label (default `intake`) and ensure the Gmail trigger query matches your labeling and unread-email workflow.
6. Replace the example limitation periods in the limitation screening code with rules approved for your jurisdiction and practice areas.

## Requirements
- Gmail and Google Sheets accounts (Google OAuth credentials in n8n)
- Slack workspace with a channel for intake alerts
- Anthropic API key for the Claude chat model nodes

## Customization
- Edit the matterType list in the extractor schema and the matching rules in Limitation check (code) to fit your practice areas
- Swap the Gmail Trigger for a Form Trigger to triage website enquiries instead
- Change limitationWarningDays in Firm settings to widen or narrow the urgent window
- Replace the Slack nodes with Microsoft Teams or email if your firm doesn't use Slack

## Additional info
Based on an intake agent Amplence built for a US law firm: https://amplence.com/case-studies/ai-agents-for-law-firms-daniel-law-firm

The three hard stops (conflict, limitation, advice boundary) run in Code nodes, not in the model, so they behave the same on every run and can be audited. The limitation periods included are examples only; have your attorneys confirm the rules for your jurisdiction before going live. This workflow supports intake triage and is not legal advice.

Need it adapted to your firm's systems? We build and maintain n8n workflows: https://amplence.com/services/n8n-automation-services
All our free templates as JSON on GitHub: https://github.com/muneeb-ashraf/n8n-workflow-templates

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
