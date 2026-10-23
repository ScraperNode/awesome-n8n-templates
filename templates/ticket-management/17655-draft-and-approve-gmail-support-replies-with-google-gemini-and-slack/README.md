# 🎫 Draft and approve Gmail support replies with Google Gemini and Slack

> ⚡ **12 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow polls Gmail for unread emails labeled “support”, uses Google Gemini to draft a concise reply, and posts it to Slack for human approval; approved drafts are sent via Gmail and logged to Google Sheets, while discarded drafts are logged without sending.

## How it works
1. Checks Gmail every minute for unread emails that match the query `label:support`.
2. Sends the email sender, subject, and body to Google Gemini to generate a one-line summary and a suggested support reply.
3. Formats the draft with the original email metadata (recipient, subject, thread/message IDs) and a fallback reply if needed.
4. Posts the proposed reply to a Slack channel with “Send it” and “Discard” buttons and waits for an approver’s decision.
5. If approved, sends the reply from Gmail with the subject prefixed by “Re:” and then appends a record to a Google Sheets “Replies” tab.
6. If declined, appends a record to the same Google Sheets “Replies” tab to log that the draft was discarded.

## Setup
1. Connect credentials for Gmail OAuth2, Google Gemini (PaLM) API, Slack OAuth2, and Google Sheets OAuth2.
2. Ensure support emails in Gmail are labeled `support` and arrive as unread so they match the trigger query.
3. Select the Slack channel that should receive approval requests (for example, `#support-approvals`).
4. Choose the target Google Sheets document and ensure it contains a sheet/tab named “Replies” for logging outcomes.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
