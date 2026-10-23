# 🔬 Send, chase, and e-signature with Airtable, TurboDocx, Drive and Slack

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow generates agreements from Airtable using TurboDocx, sends them for e-signature, reminds unsigned recipients after 3 days, and archives executed PDFs plus audit trails to Google Drive while updating Airtable, posting status updates to Slack, and emailing accounting via Gmail.

## How it works
1. Triggers when a new file is created in a specific Google Drive folder and announces the batch start in Slack.
2. Searches Airtable for rows with Status set to “Ready to send,” then processes each contract one at a time.
3. Generates a personalized agreement in TurboDocx from a DOCX template, updates the Airtable row to “Generated,” and posts the generation event to Slack.
4. Downloads the generated agreement as a PDF and uploads it to TurboSign (TurboDocx) to send it to the recipient for signature, marking the Airtable row as “Sent for signature” (or “Failed” on error) and notifying Slack.
5. Runs every morning to find Airtable rows still awaiting signature for 3+ days without a previous reminder, sends a TurboSign reminder, records “Reminded” in Airtable, and posts the reminder to Slack.
6. Listens for TurboDocx signature webhook events, looks up the matching Airtable row by Document ID, and either archives the signed PDF and audit trail to Google Drive, updates Airtable, posts to Slack, and emails accounting, or marks the agreement as declined/voided in Airtable and alerts Slack.

## Setup
1. Add a TurboDocx API key credential, upload your DOCX template to TurboDocx, and set YOUR_TURBODOCX_TEMPLATE_ID in the workflow.
2. Add an Airtable credential, create the table/columns (including Status, Document ID, Sent At, Reminded At, Signed At, and Signed Doc URL), and set YOUR_AIRTABLE_BASE_ID and YOUR_AIRTABLE_TABLE_ID.
3. Add a Google Drive credential and set the trigger folder ID (YOUR_DRIVE_TRIGGER_FOLDER_ID) plus the archive folder ID (YOUR_DRIVE_ARCHIVE_FOLDER_ID).
4. Add a Slack credential and set YOUR_SLACK_CHANNEL_ID on all Slack message steps.
5. Add a Gmail credential and replace accounting@your-company.com with your accounting distribution address.
6. Activate the workflow so the TurboDocx webhook trigger registers automatically.

## Requirements
- A TurboDocx account for document generation and e-signature. The free tier covers 5 signatures a month, so you can run this workflow end to end before paying for anything (turbodocx.com). You also need Airtable, Google Drive, Slack and Gmail credentials, plus a .docx template uploaded to TurboDocx containing your merge variables and signature anchors.

## Customization
- Change the reminder window by editing DAYS in the 'Keep only unsigned for 3+ days' Code node. Swap the Gmail node for any mailer, or drop it if accounting does not need a copy. Add more signature anchors to your .docx (a countersigner, initials, a second date) and add a matching entry to the fields array on the send node. Point the Drive trigger at any folder, or replace it with a Schedule trigger to run the batch on a timer.

## Additional info
Merge variables and signature anchors are both single-brace tokens and differ only in the value you pass. Merge variables get the real value. Signature anchors get the token as their own value, so variable client_sig is given the literal text {client_sig}. That way the tag survives generation and the signature field can be placed on it afterwards. Leave a brace token without a value and it renders the literal word 'undefined' in your contract. There is a sticky note on the canvas explaining this, and full docs at docs.turbodocx.com.

## 🔗 Nodes Used

Airtable, Slack, Google Drive, Gmail, Google Drive Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
