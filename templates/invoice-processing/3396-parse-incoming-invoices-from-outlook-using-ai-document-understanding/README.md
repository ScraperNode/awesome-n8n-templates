# 🧾 Parse incoming invoices from Outlook using AI Document Understanding

> ⚡ **18,398 views** · 🧾 [Invoice Processing](../)

## Description

### This n8n template monitors an Outlook mailbox for invoices, automatically parses/extracts data from them and then uploads the output to an Excel Workbook.

One of my top workflow requests, this template can save many hours of manual labour for you or your finance/accounts team.

### How it works
* A scheduled trigger is set to fetch recent Outlook messages to the Accounts receivable mailbox.
* Each message is analysed to determine whether or not it from a supplier and is issuing/contains an invoice.
* For each valid message, the attachments are downloaded and non-invoice documents are filtered out via AI Vision classification.
* Invoices are then processed through a AI vision model again to extract the details.
* The extracted data can then be used for reconciliation or otherwise. For this demonstration, we'll just append the row to an Excel sheet for now.

### How to use
* Ensure your Microsoft365 credential points to the correct mailbox. If a shared folder is used, toggle "shared folder" option to "on" and for the principal ID, use the email address.
* If you receive lots of other types of messages such as replies and forwards, you may want to implement additional checks to prevent processing invoices twice. The "remove duplicates" node can help with this.

### Requirements
* Outlook for Mailbox
* Google Gemini for Document Understanding and Invoice Extraction
* Excel for Data Storage

### Customising this workflow
* Note the assumption for this template is that all invoices will come as a PDF attachment. In real life, this is rarely the case! Adding in document conversion to cover all invoice formats.
* Human feedback is also an important factor in AI workflows. Try tagging emails as a way to notify team members that the invoice was processed.

## 🔗 Nodes Used

HTTP Request, Microsoft Excel 365, Microsoft Outlook, Markdown, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
