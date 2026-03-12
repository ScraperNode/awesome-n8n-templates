# 🔬 Extract construction blueprint data with VLM run and Microsoft Office Suite

> ⚡ **390 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Automatically process Construction Blueprints into structured Excel entries with VLM extraction**

&gt;**Disclaimer:** This template uses community nodes, including the VLM Run node. It requires a self-hosted n8n instance and will not run on n8n Cloud.

**What this workflow does**

1. **Monitors OneDrive** for new blueprints in a target folder
2. **Downloads the file** inside n8n for processing
3. **Sends the file to VLM Run** for VLM analysis
4. **Fetches details** from the `construction.blueprint` domain as JSON
5. **Appends normalized fields** to an Excel sheet as a new row

## Setup

**Prerequisites:** Microsoft account, VLM Run API credentials, OneDrive access, Excel Online, n8n. Install the verified **VLM Run** node by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.

**Quick Setup:**

1. Create the OneDrive folder you want to watch and copy its Folder ID

   * OneDrive web: open the folder in your browser, then copy the value of the `id=` URL parameter. It is URL-encoded.
   * Alternative in n8n: use a OneDrive node with the operation set to List to browse folders and copy the `id` field from the response.

2. Create an Excel sheet with headers like: `timestamp, file_name, file_id, mime_type, size_bytes, uploader_email, document_type, document_number, issue_date, author_name, drawing_title_numbers, revision_history, job_name, address, drawing_number, revision, drawn_by, checked_by, scale_information, agency_name, document_title, blueprint_id, blueprint_status, blueprint_owner, blueprint_url`

3. Configure OneDrive OAuth2 for the trigger and download nodes

   * Use Microsoft OAuth2 in n8n. Approve requested scopes for file access and offline access when prompted.
   * Test the connection by listing a known folder.

4. Add VLM Run API credentials from [https://app.vlm.run/dashboard](https://app.vlm.run/dashboard) to the VLM Run node

5. Configure Excel Online OAuth2 and set Spreadsheet ID and target sheet tab

6. Test by uploading a sample file to the watched OneDrive folder and activate

## Perfect for

* Converting uploaded construction blueprint documents into clean text
* Organizing extracted blueprint details into structured sheets
* Quickly accessing key attributes from technical files
* Centralized archive of blueprint-to-text conversions

## Key Benefits

* **End to end automation** from OneDrive upload to structured Excel entry
* **Accurate text extraction** of construction blueprint documents
* **Organized attribute mapping** for consistent records
* **Searchable archives** directly in Excel
* **Hands-free processing** after setup

## How to customize

**Extend by adding:**

* Version control that links revisions of the same drawing and highlights superseded rows
* Confidence scores per extracted field with threshold-based routing to manual or AI review
* Auto-generate a human-readable summary column for quick scanning of blueprint details
* Split large multi-sheet PDFs into per-drawing rows with individual attributes
* Cross-system sync to Procore, Autodesk Construction Cloud, or BIM 360 for project-wide visibility

## 🔗 Nodes Used

Microsoft Excel 365, Microsoft OneDrive, Microsoft OneDrive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
