# 🎫 Triage Gmail, draft replies, upload to Drive, and alert via Telegram with OpenRouter

> ⚡ **38 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors Gmail for new incoming emails, uses OpenRouter (LLM) to classify them against your live Gmail labels, drafts suggested replies, uploads attachments to Google Drive, sends urgent alerts to Telegram, and applies Gmail labels including a “digested” label to prevent reprocessing.

## How it works
1. Triggers every minute when a new Gmail message arrives (excluding messages from you), then fetches the full thread and loads the latest message for context.
2. Retrieves all Gmail labels, filters to user-created labels, and passes them to the LLM so classification matches your current inbox categories.
3. Uses OpenRouter to produce structured JSON that includes a summary, priority, chosen Gmail label IDs, and flags for replying, urgency, and attachment handling.
4. If a reply is needed, generates a business-casual response in your style and saves it as a Gmail draft on the original thread.
5. If attachments should be uploaded and the email has files, splits each attachment into its own item, checks Google Drive to avoid duplicates, and uploads missing files to the target folder.
6. If the email is marked urgent, sends a Telegram message with sender, subject, summary, and a direct Gmail link.
7. Aggregates the selected label IDs and applies them to the Gmail message, then adds a “digested” label to mark it as processed.

## Setup
1. Connect credentials for Gmail, Google Drive, Telegram, and OpenRouter (as the chat model used for classification and reply drafting).
2. Create the Gmail labels you want the LLM to choose from and ensure a “digested” label exists, then select the correct “digested” label ID in the label-application step.
3. Set the Google Drive folder where attachments are stored (folder IDs used for search and upload should point to the same destination).
4. Enter your Telegram chat ID in the urgent alert step and verify the workflow can message that chat.

## 🔗 Nodes Used

Telegram, Google Drive, Gmail, Gmail Trigger, Basic LLM Chain, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
