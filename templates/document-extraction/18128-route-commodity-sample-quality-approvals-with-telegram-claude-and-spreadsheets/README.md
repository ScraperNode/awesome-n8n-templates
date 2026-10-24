# 🔬 Route commodity sample quality approvals with Telegram, Claude and spreadsheets

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manages commodity sample dispatch, QR-based intake, assessment, and final approval by combining n8n Forms, Telegram, Anthropic (Claude) or any other LLM Model for data extraction, and a register stored in n8n Data Tables, Google Sheets, or Microsoft Excel, with optional Outlook emails, audit logging, and SLA reminders.

## How it works
1. Receives a sample dispatch submission via an n8n Form, generates a unique sample ID plus a QR code that links to the arrival form, and looks up the contract specification.
2. Registers the sample in n8n Data Tables, Google Sheets, or Microsoft Excel and appends a dispatch event to a decision log, refusing dispatch if no spec exists for the contract.
3. Optionally emails the QR label via Microsoft Outlook and posts a dispatch notification to a Telegram chat.
4. Receives a sample arrival submission via an n8n Form, validates the sample status, writes receipt details plus an SLA due timestamp to the register, and logs the arrival.
5. Sends an arrival notification to Telegram and asks the evaluator to reply with a voice note, a photo of the grading sheet, or typed readings.
6. When a Telegram reply arrives, extracts the sample ID from the replied-to arrival message, uses Anthropic (Claude) to extract structured values from text or from an image (and optionally transcribes voice via a configured HTTP endpoint), and then applies deterministic rules to produce a pass/borderline/fail/needs_review verdict.
7. Updates the register and log with the assessment results, sends a verdict card to Telegram, and records the final decision when someone presses Approve/Reject/Re-sample, stamping the Telegram message with the outcome and a link to add a counterparty note.
8. Runs daily to scan for overdue samples and sends Telegram nudges/escalations plus a weekly digest, and provides a form to review a drafted decision notice before optionally sending it to counterparties via Microsoft Outlook.

## Setup
1. Choose one storage backend (n8n Data Tables, Google Sheets, or Microsoft Excel) and create four stores/tabs/tables for a Sample Register, Spec Library, Decision Log, and Counterparties, then paste the relevant table IDs or spreadsheet/workbook IDs into each Configuration block.
2. Populate the Spec Library with one row per quality parameter per contract (including numeric thresholds and any excluded conditions) so dispatches without a spec are correctly refused.
3. Add Telegram bot credentials, set the evaluator and dispatcher Telegram chat IDs in Configuration, and enable the Telegram trigger only after you are ready for n8n to own the bot webhook.
4. Add an Anthropic API credential (or any other LLM) and confirm the model endpoint/version values, and optionally provide a transcription HTTP endpoint and model if you want to accept voice notes.
5. Add a Microsoft Outlook credential if you want the workflow to email QR labels and send decision notices to counterparties, and ensure counterparty email addresses are maintained in the Counterparties store.

## Requirements
- n8n 1.60 or later. Data Tables and form trigger v2.2 are both used.
- A chat bot token. Nineteen nodes use the chat credential and n8n will not activate the workflow until it exists, which is normal for a template rather than a sign of a broken file.
- A model credential for the extraction step. Two HTTP Request nodes call a vision capable model. They ship set to the Anthropic (or other LLM Model) credential type, and the endpoint, model name and API version are all values in the Configuration node, so any provider that speaks the same Messages API shape works behind a proxy without touching a node.
- A mail credential only if you want it. Two Microsoft Outlook nodes sit off the main line: one emails the QR label, one sends the decision notice. Skip both and everything else still runs.
- No database and no storage credential. n8n Data Tables are the shipped fallback and need none, so the workflow runs the moment you import it.
- Optional: a transcription endpoint if you want to accept voice notes.

## Customization
- Change the parameters not the nodes
- move the storage between Data Tables, Sheets and Excel by setting one id
- turn voice on / off
- change the SLA and digest rhythm

## Additional info
Automatiqa Lab by Aleks Sidorecs
More details about workflow: https://www.automatiqa.io/sample-trail/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Telegram Trigger, Convert to/from binary data

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
