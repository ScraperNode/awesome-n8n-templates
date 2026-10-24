# 🔬 Send TurboDocx e-signature contracts from Excel with Slack approval and SharePoint filing

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Rows in an Excel table (in SharePoint) are the queue. For each contract marked Ready to send, TurboDocx generates the agreement, a manager approves it in Slack, then it is sent for e-signature. When signed, the PDF is filed to SharePoint and Slack is notified.

## How it works
1. Every 15 minutes, read the Excel table and loop rows marked Ready to send.
2. Generate each agreement in TurboDocx.
3. Post an Approve & send / Reject request to Slack and wait.
4. On approval, download the PDF and send for e-signature.
5. Mark the Excel row Sent (or Rejected) and notify Slack.
6. On signature, a TurboDocx trigger downloads the executed PDF.
7. File the signed PDF in SharePoint, mark the row Signed, notify Slack.

## Setup
1. Connect Microsoft Excel credentials and set the workbook, worksheet, and table, plus the filter that selects the rows marked Ready to send.
2. Connect TurboDocx, upload a .docx template with your merge variables and the {client_sig} / {client_date} anchors, and set its template ID.
3. Connect Slack and choose the channel used for the approval message and for the sent and signed notifications.
4. Connect Microsoft SharePoint and pick the site and the signed-contracts folder where executed PDFs are filed.
5. Activate the workflow so the TurboDocx signature webhook registers itself automatically on activation.

## Requirements
- A TurboDocx account, Microsoft 365 (Excel + SharePoint), and a Slack workspace.

## Customization
- Adjust the schedule, approval rules, Slack text, Excel statuses, template fields, and SharePoint path.

## 🔗 Nodes Used

Slack, Microsoft Excel 365, Schedule Trigger, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
