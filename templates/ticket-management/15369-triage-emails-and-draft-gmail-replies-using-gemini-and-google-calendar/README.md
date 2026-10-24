# 🎫 Triage emails and draft Gmail replies using Gemini and Google Calendar

> ⚡ **6,417 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who it's for

This workflow is for professionals and small business owners who receive a high volume of emails and want to automate triage, labeling, and draft reply generation — without losing the human touch before sending.

## How it works

1. A Gmail trigger polls the inbox every minute for new unread emails and retrieves the current date.
2. The full email message is fetched, and any existing processing labels are stripped from the thread.
3. A Gemini 2.5 Pro AI Agent reads the email (and the full thread via a Gmail Thread tool), checks Google Calendar for availability, then classifies the email into one of six categories (Urgent, Reply, Read, Notification, Newsletter, Invoice) and drafts an HTML reply when needed.
4. A Switch node routes the output: emails requiring a reply (Urgent or Reply) pass through a JavaScript node that appends an HTML signature before saving the message as a Gmail draft.
5. All paths converge to fetch the matching Gmail label, filter for validity, apply it to the thread, and mark the message as unread so it surfaces for human review.

## How to set up

- [ ] Connect a **Gmail OAuth2** credential to all Gmail nodes (trigger, fetch, remove label, draft, label, mark unread)
- [ ] Connect a **Google Gemini (PaLM)** API credential to the Gemini Chat Model node
- [ ] Connect a **Google Calendar OAuth2** credential to the Google Calendar Tool node
- [ ] Configure the Gmail Trigger label/filter to match your inbox setup
- [ ] Update the label IDs in `Remove Label from Thread`, `Get label for response`, and `Labelliser` to match your Gmail labels
- [ ] Customize the HTML signature in the `Build HTML Signature` code node

## Requirements

- Gmail account with OAuth2 access
- Google Gemini (PaLM) API key
- Google Calendar account

## How to customize

- Adjust the AI Agent's system prompt to change tone, add new label categories, or modify the reply structure.
- Extend the Switch node with additional branches (e.g., forward to a team member, archive automatically, create a CRM task).
- Replace the Gmail draft step with a direct send for fully automated responses on low-risk categories like Notifications.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Filter, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
