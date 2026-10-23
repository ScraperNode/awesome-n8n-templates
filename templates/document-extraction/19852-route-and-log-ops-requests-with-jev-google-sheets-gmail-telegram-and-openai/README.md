# 🔬 Route and log ops requests with Jev, Google Sheets, Gmail, Telegram and OpenAI

> ⚡ **61 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives operations requests via webhook, uses Jev (TypeSafe) to classify and evaluate them, logs outcomes to Google Sheets, and notifies teams via Gmail and Telegram, then generates a weekly route summary using OpenAI and emails it to ops.

## How it works
1. Receives an operations request via a POST webhook and normalizes fields like run ID, requester, request text, and destination.
2. Rejects requests with missing request text and emails ops via Gmail about the intake problem.
3. Sends usable requests to Jev (TypeSafe) to classify them into vendor invoice, production incident, user/content report, external data share, or an unclear/needs-review route.
4. For vendor invoices, Jev extracts required invoice fields, the workflow logs the result to a Google Sheets “Invoice Intake” tab, then emails AP if the invoice clears the completeness gate or posts a Telegram message to chase missing details.
5. For production incidents, Jev scores severity, the workflow appends the scored incident to a Google Sheets “Jev Console” log, and pages the on-call engineer via Telegram.
6. For user/content reports and external data shares, Jev checks for personal data, the workflow logs the decision to Google Sheets and either sends an acknowledgment/approval via Gmail or escalates via Telegram when a privacy gate is triggered.
7. Every Monday at 09:00, the workflow reads the Google Sheets “Jev Console” log, summarizes runs by route, drafts a short report with an OpenAI chat model, and emails the weekly console report via Gmail.

## Setup
1. Configure the source system to POST requests to the webhook path (jev-c5-ops-console) and include body fields for requester, request_text, destination, and optionally run_id.
2. Add credentials for Jev (TypeSafe) Classification API, Google Sheets OAuth2, Gmail OAuth2, Telegram bot API, and OpenAI.
3. Update the Google Sheets document ID and ensure the “Jev Console” and “Invoice Intake” sheets exist with the expected columns.
4. Replace placeholder email recipients (ops@yourcompany.com, ap@yourcompany.com, reporter@yourcompany.com, data-owner@yourcompany.com) and set the correct Telegram chat ID for paging/escalations.
5. Review and tune the Jev thresholds and gate criteria (classification confidence, personal-data probability, and invoice completeness) to match your operations policies.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
