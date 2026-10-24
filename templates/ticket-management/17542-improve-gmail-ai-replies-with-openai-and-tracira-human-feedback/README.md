# 🎫 Improve Gmail AI replies with OpenAI and Tracira human feedback

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow drafts Gmail reply emails using OpenAI guided by Tracira-stored instructions, routes drafts to Tracira for human approval or correction, and then sends the approved or rewritten reply via Gmail while using reviewer feedback to improve future drafts.

## How it works
1. Triggers every minute when a new Gmail message arrives and ignores messages labeled as SENT.
2. Extracts key fields from the email (sender, subject, plain text/HTML body, thread ID, message ID) for consistent prompting and tracking.
3. Fetches the current reply instructions from Tracira and sends the email content to OpenAI to generate a draft reply.
4. Logs the draft reply to Tracira with the original email, metadata, and instruction version so a reviewer can approve, rewrite, or send it back with comments.
5. Triggers on Tracira review events, filters to the configured Tracira project and task, and replies in Gmail with either the approved AI draft or the reviewer’s rewritten text.
6. If the reviewer sends it back with a comment, retrieves the latest Tracira instructions, has OpenAI revise the draft based on the comment, and submits the revised draft back to Tracira for re-checking.

## Setup
1. Connect Gmail credentials with permission to read messages and send replies.
2. Add an OpenAI credential and select the model you want to use for drafting and revisions.
3. Create or select a Tracira workspace/project and task for your email-reply instructions, then connect your Tracira credentials.
4. Update the Tracira project and task names in the instruction fetch, draft logging, and Tracira-trigger filtering to match your Tracira setup.
5. (Optional) Adjust the Gmail trigger/filter logic (labels or sender criteria) and the starter instructions in Tracira to match your support policy.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
