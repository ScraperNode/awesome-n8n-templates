# 🎫 Detect phishing and triage Gmail with Google Gemini and Google Sheets

> ⚡ **19 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Watches Gmail for new unread mail, then an AI agent on Google Gemini sorts each one into a category — including a phishing/fraud check — and applies the matching Gmail label itself. Every result gets logged to Google Sheets with sender, subject, category, and timestamp.

## How it works
1. Checks Gmail every minute for new unread emails.
2. Retrieves all labels from the connected Gmail account and matches the five category label names to their Gmail label IDs.
3. Sends each email’s subject, sender, and preview text to a Google Gemini-powered AI agent to choose exactly one category (Possible Fraud, Urgent, Ads, Review, or Not Important).
4. Applies the selected category as a Gmail label to the original email using the matching label ID.
5. Combines the email details with the AI’s selected category and appends a row to Google Sheets with the classification result and timestamp.

## Setup
1. Create five Gmail labels with these exact names: ⚠️ Possible Fraud, 🔴 Urgent, 📢 Ads, 🔎 Review, ⚪ Not Important.
2. Connect your Gmail account credentials so the workflow can watch the inbox, list labels, and apply labels.
3. Connect Google Gemini (Google AI) credentials for the chat model used by the AI agent.
4. Connect Google Sheets credentials and set the target spreadsheet ID and sheet/tab name in “Set log sheet details”.
5. Ensure the Google Sheet has columns (or headers) for subject, from, category, and classified_at so appended rows match your logging format.

## Requirements
- A Gmail account (OAuth2)
- A Google Sheet for logging (OAuth2)
- A Google Gemini API key (Google AI Studio — free tier available)

## Customization
- Tighten or loosen the fraud-detection criteria in the agent's system prompt, or add a dedicated alert email that fires only for Possible Fraud.
- Add, rename, or merge the non-security categories by updating the prompt and adding a matching Gmail label plus tool node.
- Swap the Sheet log for n8n's Data Table, or adjust the polling interval and unread-only filter.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
