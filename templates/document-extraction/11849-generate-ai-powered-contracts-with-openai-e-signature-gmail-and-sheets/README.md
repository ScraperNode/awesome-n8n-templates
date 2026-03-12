# 🔬 Generate AI-powered contracts with OpenAI, e-signature, Gmail and Sheets

> ⚡ **41 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Contract Template Generator with E-Signature Integration

### What this workflow does

This workflow automates the full contract lifecycle—from request intake to document generation and electronic signature completion.

It receives contract requests via webhook, generates customized contract documents using AI, converts them into professionally formatted HTML, and sends them to an e-signature service for execution. The workflow pauses until signatures are completed, then records outcomes and notifies all parties accordingly.

This template is designed to reduce legal and operational overhead while ensuring consistent, trackable, and scalable contract management.

---

### How it works

1. **Contract request intake**
   - Triggered by a webhook or external form.
   - Validates required fields such as contract type and signatories.
   - Generates a unique contract ID for tracking.

2. **Contract data preparation**
   - Normalizes contract metadata (dates, value, currency).
   - Stores party and term information for downstream processing.

3. **Template routing**
   - Routes requests based on contract type (e.g., NDA, Service Agreement, Employment).
   - Applies predefined base terms for each contract category.
   - Falls back to a generic template if no specific type is matched.

4. **AI-powered contract generation**
   - An AI agent generates a complete contract in Markdown format.
   - Suggests additional clauses and provides a brief risk assessment.
   - Ensures a consistent contract structure across types.

5. **Document processing**
   - Converts Markdown into HTML for professional presentation.
   - Prepares signer metadata, signing order, and deadlines.

6. **E-signature request**
   - Sends the document to an e-signature service (e.g., DocuSign, HelloSign).
   - Emails all signatories with signing instructions.
   - Uses a Wait node to pause execution until a signature webhook is received.

7. **Signature result handling**
   - Processes webhook callbacks for completed, pending, or expired signatures.
   - Updates contract status accordingly.

8. **Completion & notifications**
   - Logs signed or expired contracts to Google Sheets.
   - Sends confirmation, reminder, or expiration emails to all parties.
   - Responds to the original webhook with a structured status message.

---

### Setup requirements

Before activating this workflow, make sure to:

- Connect the contract request webhook to your intake form or system.
- Configure contract types and base terms as needed.
- Set up your e-signature provider webhook callback URL.
- Prepare Google Sheets for contract logging.
- Customize email me

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Markdown, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
