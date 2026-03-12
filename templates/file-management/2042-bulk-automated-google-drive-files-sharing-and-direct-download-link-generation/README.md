# 📁 Bulk automated Google Drive files sharing and direct download link generation

> ⚡ **5,547 views** · 📁 [File Management](../)

## Description

This N8N workflow automates the process of sharing files from Google Drive. It includes OAuth2 authentication, batch processing, public link generation, and access status modification for efficient file handling. Suitable for users seeking to streamline their Google Drive file sharing process. sutiable for bulk actions, tested on 4.2K files folder working like charm.

![xeL6OxvdLi.png](fileId:725)

### How It Works

1. **Initialize Workflow**: The process begins with a Manual Trigger, allowing the user to start the workflow at their convenience.
2. **Folder ID Specification**: A 'Set Folder ID' node where the user can enter the desired Google Drive Folder ID.
3. **List Files from Google Drive**: The 'Google Drive' node lists all files within the specified folder using OAuth2 authentication.
4. **Batch Processing**: The 'Loop Over Items' node processes the files in batches for efficiency.
5. **Generate Public Links**: The 'Generate Download Links' node creates downloadable links for each file.
6. **Change File Access**: The 'Change Status' node alters the file status to make them publicly accessible.
7. **Merge and Output**: A 'Merge' node consolidates the data, preparing it for further actions or output.

### Set Up Steps

* **Estimated Time**: The setup should take approximately 10-15 minutes.
* **Initial Setup**: You'll need to provide OAuth2 credentials for Google Drive and specify a folder ID.
* **Customization**: Adjust the batch size and file access permissions according to your needs.
* **Detailed Descriptions**: For specific configuration details, refer to the sticky notes within the workflow.

### Example Item output
```JSON
{
"link": "https://drive.google.com/u/3/uc?id=1hojqPfXchNTY8YRTNkxSo-8txK9re-V4&export=download&confirm=t&authuser=0",
"name": "firefox_rNjA0ybKu7.png",
"kind": "drive#permission",
"id": "anyoneWithLink",
"type": "anyone",
"role": "reader",
"allowFileDiscovery": false
}
```
You can store the output data with any data store node you want, for example save them into Excel Sheet or Airtable etc...
```
Keywords: n8n workflow, Google Drive integration, file sharing automation, batch file processing, public link generation, OAuth2 authentication, workflow automation
```

## 🔗 Nodes Used

Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
