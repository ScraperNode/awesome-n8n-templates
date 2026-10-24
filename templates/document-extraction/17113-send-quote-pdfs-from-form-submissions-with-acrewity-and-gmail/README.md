# 🔬 Send quote PDFs from form submissions with Acrewity and Gmail

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects quote requests via an n8n Form, generates a styled PDF quote using Acrewity, emails it to the prospect through Gmail, and automatically sends a follow-up email after a configurable delay.

## How it works
1. Receives a new quote request submission through the built-in n8n Form.
2. Applies your company and follow-up settings (company name, sender name, quote validity, and delay) to the submission data.
3. Builds an HTML quote that includes a generated quote number, validity date, and the requester’s details.
4. Converts the HTML into a PDF using Acrewity and prepares it as an email attachment.
5. Sends the quote PDF to the requester via Gmail with the quote number and validity date in the subject and body.
6. Waits the configured number of days and then sends a Gmail follow-up email referencing the same quote.

## Setup
1. Install the community node `@acrewity/n8n-nodes-acrewity` and add an Acrewity API credential.
2. Add a Gmail credential with permission to send email from the account you want to use.
3. Update the workflow configuration values (company name, sender name, quote validity days, follow-up delay days, and any notes) to match your business.
4. Activate the workflow and share the n8n Form URL from the trigger so prospects can submit quote requests.

## 🔗 Nodes Used

Gmail, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
