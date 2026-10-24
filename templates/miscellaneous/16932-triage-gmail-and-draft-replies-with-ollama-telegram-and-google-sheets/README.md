# 🔧 Triage Gmail and draft replies with Ollama, Telegram and Google Sheets

> ⚡ **97 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow pulls unread Gmail messages, uses a local Ollama Llama 3.1 model to classify and extract action items, drafts a reply, and sends an approval request to Telegram before creating a threaded Gmail draft and logging the decision to Google Sheets.

## How it works
1. Runs manually and fetches up to 10 unread emails from Gmail.
2. Normalizes each email into a consistent structure (sender, subject, body, message ID, and thread ID) and classifies it with Ollama into urgent, action_needed, fyi, or spam.
3. Continues only for emails classified as urgent or action_needed and marks all other categories as skipped.
4. For actionable emails, uses Ollama to extract a task title and deadline and to draft a short professional reply as structured JSON.
5. Sends the classification, extracted task/deadline, and draft reply to Telegram and waits for you to approve or decline.
6. If approved, creates a Gmail draft reply in the original thread, adds a Gmail label (STARRED), and logs the approval/rejection plus details to Google Sheets.

## Setup
1. Connect your Gmail OAuth2 credential and ensure it has permission to read messages, create drafts, and add labels.
2. Install and run Ollama, pull the `llama3.1:latest` model, and add an Ollama API credential pointing to your Ollama host (for example, `http://localhost:11434`).
3. Create a Telegram bot, add the Telegram API credential, and set the workflow’s Telegram chat ID to the chat where approvals should be sent.
4. Connect a Google Sheets OAuth2 credential and set the target spreadsheet URL/ID and sheet tab used to log decisions.
5. Optionally adjust the Gmail search query and the label applied on triage to match your inbox process and avoid reprocessing.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Basic LLM Chain, Ollama Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
