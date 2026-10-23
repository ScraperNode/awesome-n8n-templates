# 🔬 Extract and classify legal documents with Claude Sonnet and Google Sheets

> ⚡ **69 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Stop treating document review as a manual task. Let AI extract, classify, and route every contract, invoice, and NDA automatically.**

Legal and financial document review is slow, inconsistent, and expensive when done by hand. This workflow accepts any document via webhook, runs it through Claude Sonnet 4.6 for structured extraction and risk classification, logs the result to a compliance audit sheet, and fires alerts before a human ever opens the file.

---

### How it works

The workflow operates in six stages:

**1. Ingestion & Early Validation**
The webhook receives the document payload and immediately validates and deduplicates before responding. Invalid payloads return a 400. Duplicate submissions within a 30-day window (matched by SHA-256 fingerprint) return a 200 without reprocessing. Only clean, unique requests receive a 202 Accepted and continue to processing.

**2. Document Acquisition**
Routes to one of two paths depending on the payload. URL submissions pass through an SSRF guard (blocks private ranges, hex/octal/decimal IP obfuscation, and non-HTTPS schemes), download the file, check it stays under 10 MB, and extract text via PDF parser. Inline text submissions pass directly to the prompt builder.

**3. LLM Extraction & Classification**
The prompt is assembled with explicit prompt-injection defences using document delimiters, then sent to Claude Sonnet 4.6 via the Basic LLM Chain. The response is parsed and normalised into a structured output item covering document type, parties, dates, obligations, governing law, total value, and a plain-English summary.

**4. Risk Routing & Alerting**
Classifies the document as LOW, MEDIUM, or HIGH risk based on explicit criteria embedded in the prompt (unlimited liability, GDPR exposure, lock-in periods, penalty clauses, and more). HIGH risk triggers an email and Slack alert chain in parallel with logging. A separate branch monitors token usage and fires a Slack nudge if input tokens exceed 40,000.

**5. Compliance Logging**
Every processed document is appended to a Google Sheets audit log with job ID, risk level, parties, risk factors, governing law, token counts, and a truncated summary. Both the HIGH risk alert path and the LOW/MEDIUM path write to the same sheet.

**6. Delivery & Callback**
If the original payload included a callback URL, the full extraction result is POSTed back to the upstream system after passing a second SSRF guard. The callback includes the job ID for end-to-end traceability.

---

### Key benefits

- **Prompt-injection defence:** Document content is isolated between delimiters with explicit instructions to treat everything inside as data, not commands
- **Dual input support:** Accepts both remote document URLs and raw inline text from any upstream system
- **Early rejection:** Validation and deduplication run before the webhook responds, so invalid or duplicate requests never consume LLM credits
- **SSRF protection:** Both the download URL and callback URL pass through guards that block private ranges, loopback addresses, and obfuscated IP formats
- **Audit-ready logging:** Every extraction is logged with token costs, risk classification, and a full job ID for compliance traceability
- **Global error handling:** A dedicated Error Trigger catches any execution failure and posts a structured alert to Slack with the failed node name

---

### Setup

1. **Credentials:** Connect your Anthropic account to the Anthropic Chat Model node
2. **Google Sheets:** Connect a Google Sheets OAuth2 credential to the Log to Google Sheets node
3. **Slack:** Connect your Slack credential to the three Slack nodes (High Risk Alert, High Token Alert, Pipeline Error)
4. **Environment variables:** Set `GSHEETS_SPREADSHEET_ID`, `GSHEETS_SHEET_NAME`, `ALERT_FROM_EMAIL`, and `ALERT_TO_EMAIL`
5. **SMTP:** Connect an SMTP credential to the Email: High Risk Alert node
6. **Allowlist (optional):** Set `ALLOWED_DOWNLOAD_DOMAINS` as a comma-separated list of trusted document domains
7. **Model (optional):** To switch model versions, update the model field directly in the Anthropic Chat Model node
8. **Activate:** POST a test payload to the webhook path `process-document`

---

### Who this is for

- **Legal operations teams:** Automating first-pass contract review and risk flagging before legal sign-off
- **Finance departments:** Extracting structured data from invoices and agreements at volume without manual entry
- **Compliance teams:** Maintaining a complete, timestamped audit log of every document processed and its risk classification
- **MSPs and agencies:** Offering AI-powered document intelligence as a managed service to clients

---

### Required credentials

- Anthropic (Claude Sonnet 4.6)
- Google Sheets OAuth2
- Slack
- SMTP (for High Risk email alerts)

---

### How to customize it

- **Adjust risk criteria:** Modify the risk level rules in the `Prepare Claude Prompt` node to match your organisation's legal thresholds
- **Add more alert channels:** Fan out from `Snapshot Parsed Result` to add Teams messages, PagerDuty alerts, or HubSpot ticket creation for HIGH risk documents
- **Extend the schema:** Add fields to the JSON schema in `Prepare Claude Prompt` to extract additional data points specific to your document types
- **Custom triggers:** Swap the webhook for an email trigger, a SharePoint file watch, or a scheduled batch processor

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Webhook, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
