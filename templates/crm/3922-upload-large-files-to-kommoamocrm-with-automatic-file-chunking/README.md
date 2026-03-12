# 🤝 Upload large files to Kommo/AmoCRM with automatic file chunking

> ⚡ **690 views** · 🤝 [CRM & Sales Operations](../)

## Description

Upload files from any source to your account Kommo or AmoCRM with a simple and reusable workflow.
## Advantages of workflow
- It can split a large file into small ones and upload chunks.
- Works for Kommo and amoCRM
- There are 3 required parameters in total (drive_url, file_name and file_base64)
## Where it can be useful
- To send files in a message to clients chat in Kommo or amoCRM
- To upload the generated files to the transaction or contact fields
- To upload files to notes
## How it works
1. Checking the file availability
2. Opening the session to download the file
3. Split the file into chunks, if necessary.
4. Send parts of the file to CRM one at a time.
## Installation Steps
1. Import workflow
2. Configuring Oauth2 credentials in Kommo or amoCRM
3. Applying credentials for specific workflow steps
4. Specifying the link to the file and the disk_url address
5. Launching a workflow to upload a file to a Kommo or amoCRM account

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Stop and Error, Execute Workflow Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
