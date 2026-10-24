# 🔬 Review and approve NDAs with Google Drive, Google Sheets, and OpenAI GPT-4o

> ⚡ **12 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new NDA files, extracts their text, uses OpenAI to extract and assess clauses against a Google Sheets playbook, then either auto-approves and files the document or escalates it to legal review with an email and audit logging.

## How it works
1. Triggers when a new file is created in a specified Google Drive “Incoming” folder.
2. Downloads the file from Google Drive, generates an NDA ID, and checks whether the file type is supported (PDF or DOCX).
3. Moves supported files to a Google Drive “Processing” folder, re-downloads the moved file, and extracts the document text.
4. If there is enough extractable text, OpenAI parses the NDA into structured JSON clauses and document metadata.
5. Loads the NDA review playbook from Google Sheets and sends both the playbook and extracted clauses to OpenAI to produce a risk assessment and recommendation.
6. Applies deterministic approval rules to decide AUTO_APPROVED versus LEGAL_REVIEW based on risk level, risk score, confidence, deviations, and blocking issues.
7. Moves the file to either an “Approved” or “Legal Review” Google Drive folder and appends an audit entry to Google Sheets, emailing the legal team when legal review is required.

## Setup
1. Connect Google Drive OAuth2 credentials and set the Incoming, Processing, Approved, and Legal Review folder IDs used by the trigger and move actions.
2. Connect a Google Sheets OAuth2 credential and update the spreadsheet ID/sheet tabs used for the playbook and the audit log.
3. Add an OpenAI API credential and confirm the model selection (gpt-4o-mini) matches your account access.
4. Configure SMTP credentials and update the “to” and “from” email addresses used for legal review notifications.
5. Ensure incoming NDAs are PDFs (and note that DOCX is marked supported but the current extraction step is configured for PDF text extraction only).

## Requirements
- ## Required Integrations -Google Drive -OpenAI -Google Sheeet

## Customization
- ## Legal Playbook Rules Customize: -Required clauses -Preferred language -Acceptable clause variations -Risk levels -Auto-approval criteria

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Send Email, Google Sheets, Google Drive, Google Drive Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
