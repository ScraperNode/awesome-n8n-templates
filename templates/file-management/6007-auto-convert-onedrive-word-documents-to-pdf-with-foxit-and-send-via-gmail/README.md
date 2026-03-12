# 📁 Auto-convert OneDrive Word documents to PDF with Foxit and send via Gmail

> ⚡ **1,316 views** · 📁 [File Management](../)

## Description

## This n8n template demonstrates how to add a document conversion process to incoming Word documents in a OneDrive folder. Documents are converted to PDF and emailed to a reviewer.

Use cases would be environments where incoming documents are dropped into cloud storage and a human needs to review them. By converting to PDF, it becomes easier to read in a consistent format in the browser.

## How it works

* Listen for new files added in a OneDrive folder, identified by an ID
* Download the bits of the new document if the file was a Micrsoft Word document (the API I'm using can convert any Office document, but wanted to start simple)
* Upload to Foxit's API service, convert to PDF, and download when done
* Use GMail to mail the PDF to a human reviewer.

## How to use

* You'll need to determine a OneDrive folder ID to monitor, or select an entire account instead, just be careful when testing. 
* When the workflow is done, it emails to myself, so please connect your own GMail and set a preferred email address for testing. 

## Requirements

* A Microsoft OneDrive account
* Foxit developer account (https://developer-api.foxit.com)
* A Gmail account
* At least one Word document - we all have that, right?

## Next Steps

This workflow could be modified to work with any Office style document, and could also upload the PDF version back to OneDrive.

## 🔗 Nodes Used

HTTP Request, Microsoft OneDrive, Gmail, Filter, Microsoft OneDrive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
