# 🎫 Auto-draft professional email replies with Gmail, AI, and Slack

> ⚡ **52 views** · 🎫 [Ticket Management & Triage](../)

## Description

## What this workflow does

This workflow monitors your Gmail inbox for new, unreplied emails and automatically generates a professional reply draft using AI.  
Instead of sending the email automatically, the draft is sent to Slack so a human can review and decide whether to send it.

This makes it ideal for teams that want to save time on email replies while keeping full control over outgoing communication.

---

## How it works

1. Checks Gmail on a schedule for new, unreplied emails  
2. Limits the number of emails processed per run to avoid overload  
3. Extracts the email body and sends it to an AI model  
4. Generates a polite, professional reply draft  
5. Sends the draft to a Slack channel for review  
6. Adds a Gmail label to prevent duplicate processing

---

## Setup time

~10–15 minutes

---

## Who this is for

- Customer support teams  
- Freelancers and consultants  
- Small businesses handling frequent email inquiries  
- Anyone who wants AI-assisted email replies with human approval

---

## Requirements

- Gmail account  
- Slack workspace  
- OpenAI (or compatible AI) credentials

## 🔗 Nodes Used

Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
