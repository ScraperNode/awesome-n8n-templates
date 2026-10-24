# 🎫 Protect Gmail AI email workflows from prompt injection with Gemini and Sheets

> ⚡ **22 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors Gmail for new support-style emails, scans them for prompt-injection signals, and only then sends safe messages to Google Gemini for structured triage. It logs outcomes to Google Sheets and creates Gmail drafts either for a safe reply or for manual human review.

## How it works
1. Triggers every 5 minutes when a new Gmail message matches the configured query filter.
2. Normalizes the email metadata and cleans the body text to create a consistent input for safety checks.
3. Scores the email for prompt-injection risk using keyword and pattern matching and labels it as safe, review, or high risk.
4. If the email is high risk, it skips Google Gemini, logs the event to Google Sheets, and creates a Gmail draft to request manual review.
5. If the email is safe or review-level, it sends the email (wrapped as untrusted content) to Google Gemini to return a strict JSON triage including summary, intent, requested action, and a safe reply draft.
6. Logs the Gemini results and final safety status to Google Sheets, then creates either a Gmail reply draft to the sender or a Gmail draft for the reviewer when human review is required.

## Setup
1. Add credentials for Gmail, Google Gemini, and Google Sheets.
2. Create a Google Sheets spreadsheet with a sheet (for example, “AuditLog”) containing the columns used for logging (such as received_at, message_id, thread_id, from_email, subject, injection_score, injection_risk_level, risk_reasons, and draft_body).
3. In the security settings, set your Google Sheets spreadsheet ID and sheet name, plus the reviewer email address that should receive manual-review drafts.
4. Adjust the Gmail trigger query and the risk thresholds/keyword list (block_threshold, review_threshold, and dangerous_keywords) to match your environment and acceptable risk level.

## Requirements
- Requires Gmail, Google Gemini, and Google Sheets credentials. You also need a Google Sheet with an AuditLog tab and the expected column headers before running the workflow. The workflow creates Gmail drafts only and does not send emails automatically.

## Customization
- You can customize the Gmail search query, spreadsheet ID, sheet name, reviewer email address, block and review thresholds, maximum email length sent to Gemini, dangerous keyword list, risk scoring rules, and the wording of safe-reply or human-review Gmail drafts.

## Additional info
This workflow is intended as a safety layer for Gmail-based AI automations. It does not guarantee complete prompt-injection protection, but it adds pre-scan filtering, audit logging, and human review routing before AI-assisted email handling.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
