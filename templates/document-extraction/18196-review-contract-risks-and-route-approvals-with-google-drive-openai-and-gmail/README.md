# 🔬 Review contract risks and route approvals with Google Drive, OpenAI, and Gmail

> ⚡ **26 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new contract PDFs, extracts and analyzes their text with OpenAI, routes the contract for email-based approval via Gmail based on contract value and policy risks, and logs the final decision to Google Sheets.

## How it works
1. Triggers every minute when a new file is created in a specified Google Drive folder.
2. Validates the file is a PDF, downloads it from Google Drive, and extracts the contract text.
3. Sends the extracted text to OpenAI (gpt-4o-mini) to return structured JSON with key contract fields and clause indicators.
4. Applies company policy rules to compute missing required clauses, risk flags, a risk score, and an approval route.
5. Routes the contract to Legal, Finance, or a Department Manager via Gmail approval emails based on the extracted contract value.
6. Waits for the recipient to approve or decline and then appends the approved or rejected outcome to a Google Sheets log.

## Setup
1. Connect Google Drive credentials and set the folder ID to watch for new contract uploads.
2. Add an OpenAI credential and confirm the model selection (gpt-4o-mini) meets your compliance and data-handling requirements.
3. Connect a Gmail account for “send and wait” approval emails and replace the recipient email addresses with your reviewers.
4. Connect Google Sheets credentials and update the spreadsheet ID/sheet tab used to append approved and rejected contract records.

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
