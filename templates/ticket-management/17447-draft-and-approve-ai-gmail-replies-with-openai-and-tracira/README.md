# 🎫 Draft and approve AI Gmail replies with OpenAI and Tracira

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow monitors Gmail for new inbound messages, uses OpenAI to draft a reply, and sends the draft to Tracira for human approval before replying in Gmail when approved.

## How it works
1. Triggers every minute when a new email arrives in Gmail.
2. Filters out messages that already have the Gmail SENT label.
3. Extracts key fields from the email (sender, subject, body, HTML, thread ID, message ID) for consistent processing.
4. Sends the email content to OpenAI to generate a concise customer-support reply.
5. Logs the original email and AI-generated draft in Tracira as an approval task tied to the Gmail thread and message.
6. When Tracira records an approval decision for the matching project and task, the workflow replies to the original Gmail message with the approved text.

## Setup
1. Connect Gmail credentials with permission to read incoming messages and send replies.
2. Add an OpenAI credential and confirm the model configured in the OpenAI step is available to your account.
3. Create or choose a Tracira workspace/project, add Tracira credentials, and set the project name, task name, and log/workspace values used for approval.
4. Activate the workflow and approve drafts in Tracira to allow Gmail replies to be sent.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
