# 📁 Gmail attachment manager with Google Drive upload and smart filtering

> ⚡ **650 views** · 📁 [File Management](../)

## Description

# This n8n template allows you to automatically upload all attached files from incoming emails to Google Drive with optional filters on sender, receiver and file types

This template is built to be customized for your specific needs. This template has the core logic and n8n node specific references sorted to work with dynamic file names throughout the workflow.

## Use cases
* Store invoices in Google Drive
* Save recurring reports in Google Drive
* Post recurring reports to another n8n workflow for further processing
* Archive files to Google Drive by email
* Save all files received by a client in a dedicated Google Drive folder

## Good to know
* The workflow is designed to not use custom code, preferring built-in nodes in n8n

## How it works
* Trigger on incoming emails with attachments
* (Optional) filter on sender/recipient
* Splits all attachments of the email into separate items
* (Optional) filter attachment based on file type
* (Optional) treat attachments with different file types through different paths
* Upload attachment to Google Drive
* Mark the email read and archive it after all attachments has been processed
* Notify in Slack how many attachments was processed in the execution

## How to use
* Configure Google credentials (1,2,6)
* Configure Slack credentials (7)
* Configure or disable sender/receiver filter (3)
* Configure or disable file type filter (4)
* Configure or disable file type paths (5)
* Configure destination folder (6)
* Build on this to fit your use case

##
Note: there's a [similar template](https://n8n.io/workflows/2966-upload-multiple-attachments-from-gmail-to-google-drive-without-a-code-node/) with the same basics but with less ready-made modifications and no loop that allows us to archive the email and notify to Slack when done.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Gmail, Gmail Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
