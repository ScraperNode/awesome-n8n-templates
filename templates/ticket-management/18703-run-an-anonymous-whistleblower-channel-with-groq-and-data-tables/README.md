# 🎫 Run an anonymous whistleblower channel with Groq and data tables

> ⚡ **8 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow provides an anonymous whistleblower intake form that screens reports against urgency rules, triages and summarizes them with Groq, stores cases in n8n Data Tables with EU-style acknowledgment and feedback due dates, and offers a separate status-check form secured by a one-time access code.

## How it works
1. Receives a confidential report via an n8n Form trigger with a category, report text, and optional contact details.
2. Loads policy settings and retrieves all urgency rules from an n8n Data Table, then scans the report text for keyword/regex matches and generates a case ID plus a one-time access code (storing only its SHA-256 hash).
3. Sends the report text to Groq to classify it into a single category, produce a neutral two-sentence summary, and return urgency and confidence scores.
4. Combines rule-based points with a capped model-derived score, computes acknowledgment and feedback due dates, and determines whether the case is STANDARD, URGENT, or forced into MANUAL_REVIEW if no rules exist.
5. Records the case (including deadlines, status, summary, and token hash) in an n8n Data Table and shows a one-time receipt to the reporter with the case number and access code, using different messaging for urgent cases.
6. Receives status lookup requests via a second n8n Form, hashes the provided access code, validates it against the stored token hash in the case register Data Table, and displays either the case status and due dates or a generic “not found” message.

## Setup
1. Add a Groq API credential and select it in the Groq Chat Model node.
2. Create and select an n8n Data Table for urgency rules (with fields used by the workflow such as pattern, match_type, severity, points, category, and note) and populate it with your screening rules.
3. Create and select an n8n Data Table for the case register with columns matching the fields written by the workflow (for example case_id, token_hash, status, urgency, risk_score, received_at, ack_due, feedback_due, summary, report_text, and contact fields).
4. Adjust acknowledgment/feedback timeframes, urgency threshold, and the model influence cap in the policy step to match your organization’s process.

## Requirements
- A Groq API key (the free tier works)
- n8n Data Tables (n8n Cloud or a recent self-hosted version)

## Customization
- Change acknowledgment days, feedback days, urgency threshold and model cap in Set Channel Policy
- Add your own phrases to the urgency rules table in any language, without touching a node
- Case handlers update the status column in the case register; the reporter sees it on the status page

## Additional info
How you use it day to day: share the first form link with your staff as the reporting channel. A reporter fills it in and sees their case number and access code exactly once, so they must write both down. They can return through the second form link at any time to check their case, no account needed. Your case handlers work in the case register table: read the summary there and update the status column, and the reporter sees the new status on their next check. Only phrases in your rules table are screened deterministically; everything else relies on the capped Groq pass. This supports your internal channel and is not legal advice.

## 🔗 Nodes Used

AI Agent, Structured Output Parser, n8n Form Trigger, Groq Chat Model, n8n Form, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
