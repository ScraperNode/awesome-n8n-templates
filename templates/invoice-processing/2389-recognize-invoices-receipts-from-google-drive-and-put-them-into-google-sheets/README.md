# 🧾 Recognize invoices / receipts from Google Drive and put them into Google Sheets

> ⚡ **9,947 views** · 🧾 [Invoice Processing](../)

## Description

This workflow allows you to recognize a folder with receipts or invoices (make sure your files are in .pdf, .png, or .jpg format). The workflow can be triggered via the "Test workflow" button, and it also monitors the folder for new files, automatically recognizing them.

## Video Demo
https://youtu.be/mGPt7fqGQD8

### 1. n8n import glitch
After import, the trigger node "When clicking 'Test workflow'" might be disconnected. You need to connect it via 2 arrows to "Google Sheets1" and "Google Drive" nodes. So, the workflow has 2 triggers - via button, and via Google Sheets "new file" event - both of these triggers should be connected to 2 nodes.
Here is how it should look like: https://ocr.oakpdf.com/n8n_fix.png


### 2. Set up RapidAPI HTTP auth key
Create new "HTTP header" n8n credential and paste your RapidAPI key from https://rapidapi.com/restyler/api/receipt-and-invoice-ocr-api  into it. https://ocr.oakpdf.com/n8n_api_key.png

Make sure "HTTP Request" node uses this credential.

### 3. Set up your Google Auth
You need a Google connection to work with your Google Sheets and Google Drive accounts: https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/#finish-your-n8n-credential

### 4. Set up Google Sheets
Copy this Google Sheets document: https://docs.google.com/spreadsheets/d/1G0w-OMdFRrtvzOLPpfFJpsBVNqJ9cfRLMKCVWfrTQBg/edit?usp=sharing

## Custom document formats and advanced usage
Email: contact@scrapeninja.net 
Linkedin: https://www.linkedin.com/in/anthony-sidashin/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
