# 🔬 Analyze compliant documents with PromptLock Guard, Claude, and Google Sheets

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Screen contracts, intake forms, and reports for HIPAA, GDPR, and PCI data — plus always-on prompt-injection detection — before Claude summarizes them. Clean documents pass through, risky ones get flagged for review or blocked, and every document gets an audit row in a Google Sheet.

## How it works
1. Receives a POST request to a webhook containing either a PDF upload or a JSON body with a `text` field.
2. Extracts text from PDFs or uses the provided JSON text as-is.
3. Sends the document text to PromptLock Guard to screen for regulated-data and prompt-injection risk, failing closed on screening errors.
4. If the document is allowed or redacted, sends the cleaned text to Anthropic Claude and returns a structured JSON analysis in the webhook response.
5. If the document is flagged, sends a Gmail notification email for human review instead of sending the content to the AI model.
6. If the document is blocked (or screening is unavailable), returns a JSON webhook response indicating the block/unverified reason.
7. Appends a per-document audit row (timestamp, action taken, risk score, and compliance status) to a `DocAuditLog` tab in Google Sheets.

## Setup
1. Install the `n8n-nodes-promptlock-guard` community node and add your PromptLock API key credentials (free API key at promptlock.io).
2. Add Anthropic API credentials and confirm the Claude model and request headers meet your Anthropic account requirements.
3. Add Gmail OAuth2 credentials and set the recipient address in the human review email step.
4. Add Google Sheets OAuth2 credentials and replace `YOUR_SPREADSHEET_ID` with your spreadsheet URL/ID, ensuring a `DocAuditLog` sheet/tab exists.
5. Copy the webhook URL from n8n and configure your uploader/system to POST either a PDF file or `{ "text": "..." }` to the `analyze-document` endpoint.

## Requirements
- n8n with community nodes enabled — PromptLock Guard is a verified community node, so it also installs on n8n Cloud
- PromptLock API key (free at promptlock.io)
- Anthropic API key
- Google account for the Gmail and Google Sheets OAuth credentials

## Customization
- Action on High Risk ships as Flag (report + review email). Switch to Redact or Block to enforce, or Inherit from Policy to let your per-framework PromptLock policies decide (HIPAA redact, PCI block, each at its own threshold)
- Pick which frameworks to screen (HIPAA / GDPR / PCI) on the Guard node
- Swap the Claude model or edit the analysis prompt and JSON keys
- Point the audit log at any spreadsheet; add or remove columns in the audit-row node
- Run it in shadow mode first: set Action on High Risk to Score Only and the workflow observes without enforcing — every document passes through untouched while risk scores and findings accumulate in your audit sheet. The "Route Score Only To" setting picks which output score results exit from. Review a week of real traffic, then switch to Flag or enforcement.

## Additional info
Built by the author of PromptLock Guard, a verified community node in n8n's integrations directory. Every lane was tested against the live API before submission: clean documents, PII-heavy documents, PDF extraction, and the fail-closed path with the screening API unreachable. Prompt-injection screening is always on regardless of framework selection — pattern rules plus a DeBERTa v3 classifier — so a poisoned document can't instruct the model.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
