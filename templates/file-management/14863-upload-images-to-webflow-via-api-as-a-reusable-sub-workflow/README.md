# 📁 Upload images to Webflow via API as a reusable sub-workflow

> ⚡ **46 views** · 📁 [File Management](../)

## Description

Uploading an image to Webflow's Asset Manager through the API is surprisingly complex. It requires computing an MD5 hash, announcing the file to Webflow, then uploading the binary to Amazon S3 with specific headers. This template wraps that entire process into a clean, reusable sub-workflow you can call from any main workflow.

## How it works

- **Sub-workflow trigger** receives `imageData` (binary), `fileName`, and `wfSiteId`.
- **MD5 hash computation** generates the file hash that Webflow's API requires.
- **First HTTP node** (POST to Webflow's `/v2/sites/:site_id/assets`) announces the file and returns an S3 upload URL along with required upload details (credentials, policy, signature).
- **Second HTTP node** (POST to the S3 upload URL) sends the binary file as a multipart form request using the upload details from the previous step.
- **Set node** extracts and returns `originalFileName`, `fileId`, and `assetUrl` to the calling workflow.

## How to use

1. **Import** this template as a workflow in your n8n instance.
2. **Set up Webflow credentials**: Create a Bearer Auth credential with your Webflow API token. The token must have the `assets:write` scope.
3. **Call this workflow as a sub-workflow** from your main workflow using the Execute Workflow node.
4. **Provide the required inputs:**
   - `imageData`: The binary image data
   - `fileName`: File name including extension (max 100 characters)
   - `wfSiteId`: Your Webflow site ID
5. **Use the output**: The sub-workflow returns `originalFileName`, `fileId`, and `assetUrl`, which you can then use in subsequent steps (e.g., updating a CMS item, sending a notification, etc.).

## Requirements

- **Webflow** account with API access, Bearer Auth credential with `assets:write` scope

## Notes & customization

- **Upload to a specific folder:** Webflow's API accepts an optional `parentFolder` parameter in the first request. If you want to upload into a specific folder in the Asset Manager, add the folder ID to the body of the first HTTP node.
- **Other file types:** While this template is designed for images, Webflow's Asset API may accept other file types (e.g., videos, PDFs). The upload mechanism is the same, so worth testing if your use case requires it.
- **CMS integration:** A natural next step after uploading is attaching the asset to a CMS collection item. This is a single additional HTTP request in your main workflow using the returned `assetUrl` and the relevant collection/item IDs.
- **File name limit:** Webflow requires file names under 100 characters including the extension. Consider adding validation in your calling workflow if file names come from user input.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
