# 🔬 Track contract renewals and obligations with LlamaParse, GPT-4o-mini and Slack

> ⚡ **10 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow watches a Google Drive folder for new contract PDFs, parses them with LlamaParse, extracts key terms and obligations with OpenAI, stores everything in Google Sheets, and uses Slack plus a webhook approval flow to manage renew/terminate decisions and draft termination notices in Gmail.

## How it works
1. Triggers when a new file is created in a specific Google Drive folder and continues only if the file is a PDF.
2. Downloads the PDF, uploads it to LlamaParse, polls for the parsing job to finish, and alerts a Slack channel if parsing fails or times out.
3. Fetches the parsed markdown from LlamaParse and uses OpenAI (gpt-4o-mini) to extract structured contract terms, risks, and obligations.
4. Calculates the notice decision deadline, upserts the contract into a Google Sheets “Contracts” register, posts a summary to Slack, and upserts each extracted obligation into a Google Sheets “Obligations” tab.
5. Runs daily at 9 AM to read the Contracts register, detects upcoming/overdue notice milestones (90/60/30 days and overdue), posts Slack messages with Renew/Terminate buttons, and marks each sent milestone in Google Sheets.
6. Runs daily at 9 AM to read open obligations from Google Sheets, compiles items due within 7 days (or overdue), and posts a Slack digest.
7. Receives Renew/Terminate clicks via a webhook, validates a one-time approval token against Google Sheets, records the decision, then either posts a renewal confirmation to Slack or drafts a termination notice with OpenAI and saves it as a Gmail draft before notifying Slack.

## Setup
1. Create a Google Sheet with tabs named “Contracts” and “Obligations” and ensure the column headers match the fields used by the workflow (for example contract_id, decision_deadline, approval_token, and obligation_id).
2. Connect credentials for Google Drive, Google Sheets, Slack, Gmail, and OpenAI, and add a LlamaCloud API key using HTTP Header Auth (Authorization: Bearer …).
3. Replace all placeholders for the Google Drive folder ID, Google Sheet ID, and Slack channel ID, and set your public n8n base URL in the renewal milestone link builder so Slack buttons point to your webhook.
4. Copy the production webhook URL for the contract decision webhook and ensure it is reachable from Slack button clicks (including any firewall/SSO requirements).
5. Upload a sample contract PDF to the watched Drive folder and verify that the contract register, obligations sheet, Slack messages, and Gmail draft creation behave as expected.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
