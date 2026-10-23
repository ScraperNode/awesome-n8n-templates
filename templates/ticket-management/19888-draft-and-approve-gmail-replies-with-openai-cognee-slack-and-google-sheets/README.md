# 🎫 Draft and approve Gmail replies with OpenAI, Cognee, Slack, and Google Sheets

> ⚡ **17 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for new messages, uses OpenAI to decide whether a reply is needed, drafts grounded replies with a Cognee knowledge base, saves them as Gmail drafts, and requests human approval in Slack while logging approvals to Google Sheets.

## How it works
1. Triggers every minute when a new email arrives in the Gmail INBOX.
2. Filters out automated senders (for example no-reply and mailer-daemon addresses) to skip unnecessary processing.
3. Uses OpenAI (gpt-4o-mini) to classify the email as needing a human reply or not.
4. For emails that need a reply, uses an OpenAI agent (gpt-4o-mini) with Cognee search to retrieve relevant company context and draft a response.
5. Creates a Gmail draft reply in the same thread and posts a preview to Slack for approve/reject decision.
6. Logs the approval status, timestamp, sender, subject, and draft text to Google Sheets.
7. If any step fails, formats the error details and sends an alert to Slack.

## Setup
1. Connect Gmail OAuth2 credentials and choose the mailbox/label to monitor, then ensure draft creation has access to the same Gmail account.
2. Add an OpenAI API credential for the classifier and drafting agent, and ensure the gpt-4o-mini model is available to your account.
3. Add a Cognee API credential and set the Cognee dataset used for search (for example `cognee_3rd_workflow_dataset`).
4. Connect Slack credentials and set the target Slack channel ID for approval requests and the channel for error alerts.
5. Connect Google Sheets OAuth2 credentials, then set the spreadsheet/document ID and sheet name and ensure the sheet has columns for Timestamp, From, Subject, Draft, and Approval Status.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
