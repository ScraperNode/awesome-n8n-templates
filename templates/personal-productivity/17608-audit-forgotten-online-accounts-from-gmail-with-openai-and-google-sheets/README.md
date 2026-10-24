# ⚡ Audit forgotten online accounts from Gmail with OpenAI and Google Sheets

> ⚡ **11 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow audits your Gmail for account-related emails, uses an AI model via OpenRouter to extract service details and risk signals, and maintains a deduplicated account register in Google Sheets, with optional review alerts and a weekly digest sent by Gmail.

## How it works
1. Runs either manually, daily on a schedule, or weekly on a schedule to switch between discovery and digest modes.
2. In discovery mode, searches Gmail with a configurable query for account signals and fetches the full content of each matching message.
3. Cleans and filters messages, then sends each candidate email to an AI model through OpenRouter to extract structured account details (service, domain, category, evidence, billing and sensitivity signals, and confidence).
4. Normalizes the AI output, computes an account key and risk score, and labels the assessed Gmail message to avoid processing it again.
5. If the email is an account signal, upserts a single source-linked row per account into a Google Sheets “Account Register” while preserving any existing human-set fields like Status and Desired Action.
6. Sends a Gmail review notice when a record is marked “Needs review” due to low confidence, missing service identification, or parsing issues.
7. In digest mode, reads the Google Sheets register, prioritizes records that need a decision, and emails a weekly digest with evidence links and optional copy-ready data rights drafts.

## Setup
1. Add Gmail OAuth credentials (for reading messages, applying the processed label, and sending emails) and Google Sheets OAuth credentials (for reading and upserting the register).
2. Create an HTTP Header Auth credential for OpenRouter (or your compatible AI gateway) and ensure the workflow’s AI endpoint and model name match your provider.
3. Create a Google Sheet with a tab named “Account Register” and the exact headers expected by the workflow, then set the Sheet ID, tab name, and email recipients in “Set Template Fields.”
4. Create the Gmail label specified in “processedGmailLabel” (default `n8n-account-audited`) and adjust the Gmail discovery/test queries, confidence threshold, max results, and timezone to your needs before activating schedules.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
