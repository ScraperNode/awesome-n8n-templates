# 🔬 Template for Google Drive and Google Docs with clear structure and purpose

> ⚡ **771 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![Automate Image Transfer from Google Drive to Google Docs with Resizing.png](fileId:2120)



**Description**

This n8n workflow automates the process of retrieving images from a specific Google Drive folder, resizing them, and inserting them into a Google Docs document.
It ensures images are processed in numeric order, automatically resized to fit the document, and uploaded in batches to prevent timeouts.

This template is designed for content creators, documentation teams, and businesses who need to automatically insert images (e.g., product photos, reports, or scanned documents) into Google Docs with minimal manual effort.

**How it works**

1. Retrieves image files from a Google Drive folder.
2. Filters and sorts files based on numeric order in the filename.
3. Generates direct image URIs and resizes them automatically (width & height).
4. Inserts the resized images into the target Google Docs document via API.
5. Uses a batch loop to avoid timeouts and ensure all images are uploaded successfully.

**Requirements / Pre-conditions**

1. An n8n instance (self-hosted or cloud).
2. Connected Google Drive credential in n8n.
3. Connected Google Docs credential in n8n.
4. A target Google Drive folder containing supported image files.
5. A Google Docs document ready to receive the images.
6. Supported formats: PNG, JPG, JPEG, GIF, WEBP.
Error handling: If a file is not an image or exceeds Google Docs API limits, the workflow will skip it and continue processing the rest.

**Setup Steps**

1. Google Drive Credential
Connect your Google Drive account in n8n to grant access to the folder containing the images.
2. Google Docs Credential
Connect your Google Docs account to allow image insertion into the document.
3. Folder & File Filter
In the Search File node, replace the placeholder {{YOUR_FOLDER_ID}} with your Google Drive folder ID.
4. Google Docs Document ID
In the Insert Image (HTTP Request) node, replace {{YOUR_DOCUMENT_ID}} with your target Google Docs document ID.
(Make sure you rename this node to something descriptive, e.g., Insert Image to Google Doc.)
5. Batch Loop
The workflow includes a batch processing loop to prevent timeout errors when dealing with large sets of images. You can adjust the batch size if needed.
6. Run the workflow
Execute the workflow, and images will be automatically retrieved, resized, and inserted into the document.

**Customization**

- Resize Dimensions: Adjust the width/height in the Image Resize node to fit your document’s style.
- Ordering Logic: Modify the sorting step if you want alphabetical or upload-date order instead of numeric order.
- Error Notifications: Add an email or Slack node to notify you when an image fails to insert.
- Image Placement: By default, images are appended. You can adjust the insert logic (e.g., after specific headings).

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
