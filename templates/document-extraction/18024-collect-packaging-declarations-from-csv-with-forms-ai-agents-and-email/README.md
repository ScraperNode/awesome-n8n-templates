# 🔬 Collect packaging declarations from CSV with forms, AI agents and email

> ⚡ **13 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow emails packaging declaration (PPWR) requests from an uploaded supplier CSV, collects supplier submissions via an n8n Form with a PDF attachment, uses agent to extract key fields from the PDF, runs a deterministic checklist, and emails either a completion confirmation or notice regarding what is missing

## How it works
1. You open an n8n form and upload a CSV of suppliers and items to request declarations for.
2. The workflow parses the CSV, validates required columns and email addresses, drops invalid or duplicate rows, and keeps a rejection report by line number.
3. For each valid row, it builds an email containing the supplier’s item reference and the n8n Supplier declaration form link, then sends the request via SMTP.
4. When a supplier submits the PPWR declaration form with their details and a PDF attachment, the workflow extracts text from the PDF and uses an agent to report key fields (such as signatory, date, material, and PFAS/BPA statements).
5. No model produces a pass or a fail, so the same submission gives the same answer next quarter and swapping the chat model cannot change a verdict.
6. If all blocker checks pass, it emails the supplier a confirmation; otherwise, it emails a gap notice with the outstanding items and the same form link for resubmission, and shows an on-screen completion message.

## Setup
1. Add an SMTP credential for the two email steps and set the sender address in the Configuration values.
2. Connect a chat model to the two agent steps used to read the declaration and draft the covering paragraph.
3. Publish/copy the public URL for the Supplier declaration form and paste it into Configuration as form_url (this link is used in both outgoing emails).
4. Prepare your supplier CSV with headers supplier_name, contact_email, internal_sku (and optional description) and adjust declaration_max_age_days, confidence_floor, and checklist rules in Configuration/code as needed.

## Requirements
- An SMTP credential, used by both email steps
- A chat model credential for the two agent steps. 
- No model is pinned in the template, so use whichever one you already pay for. n8n 1.7 or newer, for the agent node.
- Nothing else. No database, no external service and nothing to install.

## Customization
- The checklist is the list at the top of Run the checklist: an id, a severity, the sentence the supplier reads, and a function returning pass, fail or skip. Adding a check means adding an entry, never a node. 
- confidence_floor in configuration sets how sure the agent has to be before a value it read from the document is used, instead of being reported to the supplier as unconfirmed
- declaration_max_age_days sets how old a declaration you will still accept
- Either email node swaps for Gmail, Outlook, Slack or a webhook without touching anything before it
- Add fields to the supplier form and read them in Merge answers. The form field labels are the keys

## Additional info
Workflow checks PPWR declarations for completeness and internal consistency. It is not a conformity assessment, it is not legal advice, and it does not replace a technical file, a notified body or a competent authority. The checklist shipped here is an example written to be readable rather than to be right: read it and change it before you point it at real suppliers.

Where the AI sits. Two agents, both narrow. One reads the uploaded document and reports what it says with a confidence on each field. One writes the covering paragraph of a gap notice, and that paragraph is checked afterwards for any check id that is not in the notice, so it cannot invent a finding. Everything else is deterministic.

What it does not do. It keeps no record, so there is no history and nothing to hand an auditor afterwards. The form link carries no token, so anyone holding it can submit. It sends one email per CSV row rather than grouping by supplier. All three are fine for a batch you can hold in your head and wrong for four hundred suppliers you do not know.

## 🔗 Nodes Used

Send Email, AI Agent, n8n Form Trigger, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
