# 📁 Automatic PDF compression with iLovePDF for Google Drive files

> ⚡ **184 views** · 📁 [File Management](../)

## Description

### Watch Google Drive folder and use iLovePDF Compress Tool to save it in another Google Drive folder

This n8n template shows how to upload a file in your Google Drive desired folder, compress it with the iLovePDF tool and move the compressed file to another folder.

### Good to know
This is just an example of using it for you to know how the flow should start to work without issues. After the "combine" step, you can change it according your needs but **always maintaining the four main steps of ILoveAPI's request workflow: start, upload, process and download** (e.g., an step for sending an email with the compressed file instead of moving it to another folder)

Use cases are many: With this template you can monitor a 'to-process' folder for large documents, automatically compress them for better storage efficiency, and move them to an archive folder, all without manual intervention. Then you can explore adapting it to have the functionalities that go best with you!

### How it works
**1. Google Drive Trigger:** The workflow starts when a new file is added to a specific Google Drive folder (the source folder).
**2. Authentication:** The Public Key is sent to the iLoveAPI authentication server to get a time-sensitive **Bearer Token**.
**3. Start Task:** A new `compress` task is initiated with the iLoveAPI server, returning a **Task ID** and **Server Address**.
**4. Download/Upload:** The file is downloaded from Google Drive and then immediately uploaded to the dedicated iLoveAPI Server using the Task ID.
**5. Process:** The main compression is executed by sending the Task ID, the `server_filename`, and the original file name to the iLoveAPI `/process` endpoint.
**6. Download Compressed File:** Download the compressed file's binary data from the iLoveAPI `/download` endpoint.
**7. Save Compressed File:** The compressed PDF is uploaded to the designated Google Drive folder (the destination folder).
**8. Move Original File:** The original file in the source folder is moved to a separate location (e.g., an 'Archived' folder) to prevent the workflow from processing it again

### How to use
* **Credentials:** Set up your Google Drive and iLoveAPI credentials in n8n workflow.
* **iLoveAPI Public Key:** Paste your iLoveAPI public key into the **Send your iLoveAPI public key to their server** node's body for authentication, and then in the **Get task from iLoveAPI server** node's body.
* **Source/Destination Folders:** In the **Upload your file to Google Drive** (Trigger) and **Save compressed file in your Google Drive** (Action) nodes, select your desired source and destination folders, respectively.

### Requirements
* **Google Drive** account/credentials (for file monitoring and storage) -see the docs provided in the node if needed.
* **iLoveAPI** account/API key (for the compression service).
* An **n8n** instance (cloud or self-hosted).

Need Help?
See the [iLoveAPI documentation](https://www.iloveapi.com/docs/api-reference#introduction)

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
