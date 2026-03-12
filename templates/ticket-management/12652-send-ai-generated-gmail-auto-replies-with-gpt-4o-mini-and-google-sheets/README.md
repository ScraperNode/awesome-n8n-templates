# 🎫 Send AI-generated Gmail auto replies with GPT-4o-mini and Google Sheets

> ⚡ **147 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Overview

This workflow automatically replies to important incoming Gmail messages using AI, while preventing duplicate or unnecessary replies.

It applies multiple safety checks (filters, Google Sheets history, and Gmail sent history) to ensure replies are sent only when appropriate.

This template is designed for creators, freelancers, and teams who want a reliable and maintainable AI-powered email auto-reply system.

---

## How it works

1. New Gmail messages are received and normalized into a consistent structure.
2. Unwanted emails (newsletters, promotions, no-reply senders) are filtered out.
3. The sender’s email is checked against a Google Sheets reply history.
4. Gmail is searched to confirm no recent reply was already sent.
5. If no duplicate is found, an AI-generated English reply is created and sent.

---

## Setup steps

1. Connect your Gmail account.
2. Connect a Google Sheet for reply history tracking.
3. Review the ignore rules and thresholds in the config node.
4. Customize the AI prompt if needed.
5. Activate the workflow.

Estimated setup time: 5–10 minutes.

---

## Notes

- Sticky notes inside the workflow explain each processing step in detail.
- No hardcoded API keys are used.
- The workflow is intentionally linear for clarity and easy maintenance.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
