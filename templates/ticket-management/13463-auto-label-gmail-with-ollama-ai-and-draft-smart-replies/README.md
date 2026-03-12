# 🎫 Auto-label Gmail with Ollama AI and draft smart replies

> ⚡ **74 views** · 🎫 [Ticket Management & Triage](../)

## Description

## **Who is this for**


This workflow is built for professionals, founders, freelancers, and anyone drowning in email who wants to automatically triage their inbox using AI — sorting emails into categories, applying Gmail labels, and generating reply drafts for important messages, all running locally with Ollama (zero paid API costs).


## **What this workflow does**


It watches your Gmail inbox for new unread emails, uses a local AI model (Ollama) to classify each email into one of six categories (Urgent, Action Required, Follow-up, Newsletter, Automated, or Spam/Promotional), automatically applies the matching Gmail label, generates reply drafts for high-priority emails, and logs every processed email to Google Sheets for analytics.


## **How it works**

- Gmail Trigger watches your inbox for new unread emails at a configurable interval (default: every 30 minutes).
- Extract Email Data parses the sender, subject, body, attachments, and metadata into clean fields — handles all Gmail node output formats.
- AI Classifier (Ollama, running locally) analyzes the email content and returns a structured classification with category, priority, confidence score, summary, suggested action, sentiment, and a reply draft for important messages.
- Extract Classification robustly parses the AI response (handles markdown fences, nested objects, and edge cases) and merges it with email metadata.
- Smart Router sends each email down one of six dedicated paths based on its classification.
- Gmail Label nodes automatically apply the correct label to each email in your inbox.
- Reply Draft nodes create Gmail drafts for Urgent and Action Required emails — ready for you to review, edit, and send from your Drafts folder.
- Log Entry tracks every processed email in Google Sheets with category, priority, confidence, summary, and timestamp for analytics and review.


## **Setup steps**


- Gmail OAuth — Connect your Google account. Grant read, modify, and compose permissions.
- Create Gmail Labels — In Gmail, manually create these labels (the workflow applies them automatically):
🔴 Urgent
📋 Action Required
💬 Follow-up
📰 Newsletter
🤖 Automated
🚫 Spam-Promo
- Get Label IDs — Use the Gmail API or n8n's Gmail node (operation: "Get Many Labels") to find each label's ID. Update the labelIds in each Gmail Label node with your actual IDs.
- Ollama — Ensure Ollama is running locally (http://localhost:11434) with your preferred model pulled (e.g., ollama pull mistral). Change the model name in the Ollama Chat Model node if needed.
- Google Sheets (optional) — Connect your Google Sheets OAuth credential and set a spreadsheet ID in the logging node. Create a sheet with columns: Date, From, Subject, Category, Priority, Confidence, Reason, Summary, Key Action, Has Reply Draft, Sentiment, Auto Archive, Gmail ID, Processed At.
- Test — Send yourself a few test emails (urgent request, newsletter, promotional) and run the workflow manually to verify classification accuracy.


## **Requirements**


- Gmail account with OAuth credentials (read, modify, compose permissions)
- Ollama running locally with a pulled model (mistral, llama3, gemma2, etc.)
- Google Sheets account with OAuth credentials (optional, for logging)
- n8n instance (self-hosted recommended for Ollama connectivity)


## **How to customize**


- Swap mistral for llama3, gemma2, deepseek, or any Ollama-compatible model.
- Add more categories by editing the AI system prompt and adding outputs to the Switch node.
- Change the reply draft tone (formal, casual, friendly) in the AI system prompt.
- Add Slack or Telegram notifications for urgent emails by branching from the Label nodes.
- Add auto-archive for newsletters and spam by adding a Gmail "Remove Labels" node (remove INBOX label).
- Decrease the polling interval for near-real-time processing.
- Add sender whitelist/blacklist logic in a Code node before the AI classifier.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
