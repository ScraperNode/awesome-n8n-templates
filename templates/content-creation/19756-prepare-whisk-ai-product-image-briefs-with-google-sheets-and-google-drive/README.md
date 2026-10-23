# 🎬 Prepare Whisk AI product image briefs with Google Sheets and Google Drive

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Prepare reusable product-image briefs for manual creation in [Whisk AI](https://whisk-ai.io/), track tasks in Google Sheets, and collect finished images through an authenticated form that archives them in Google Drive. No Whisk API key is required.

## How it works
1. Receives a product brief submission via an n8n form with HTTP Basic Auth.
2. Validates the product name, HTTPS reference image URL, selected scene and aspect ratio, and optional instructions, then generates a standardized prompt and task ID.
3. Appends the brief (including prompt, status, and timestamps) to a Google Sheets tab and displays the prompt plus manual steps to generate the image in Whisk AI.
4. Receives a completed image upload via a second n8n form with the task ID and optional creation notes.
5. Validates the task ID and file type/size, looks up the matching brief in Google Sheets, and checks Google Drive for an existing archived file for that task.
6. Uploads the image to a specified Google Drive folder (or reuses the existing archived file on retry) and updates the original Google Sheets row with the Drive file ID/URL, review notes, updated status, and timestamp.

## Setup
1. Create a Google Sheet with a tab (default: “Briefs”) containing the required header columns: brief_id, product_name, source_image_url, scene, aspect_ratio, prompt, status, created_at, drive_file_id, drive_file_url, review_notes, updated_at.
2. Add Google Sheets OAuth2 credentials and Google Drive OAuth2 credentials, then grant access to the target spreadsheet and archive folder.
3. Replace the placeholder Google Sheet ID and tab name in both configuration steps, and set the Google Drive folder ID for archiving.
4. Set HTTP Basic Auth on both forms and copy the second form’s production URL into the return_form_url value so the first form can link to it.
5. (Optional) Adjust max_upload_bytes (default 10 MB) and the scene/aspect-ratio prompt text to match your team’s requirements.

## Requirements
- n8n with Google Sheets and Google Drive OAuth2 credentials, a tracking sheet, an archive folder, and HTTP Basic Auth for both forms. Image creation happens manually in the Whisk website; its usage charges apply separately.

## Customization
- Edit scene prompts, supported ratios and the upload-size limit. Reviewers can mark rows approved or needs_revision. Create a new brief for each image revision.

## Additional info
This template organizes human-led creation and does not automate Whisk image generation. Submit one return per task at a time: sequential retries reuse the archived file, but concurrent uploads are not transactionally locked. Keep task-prefixed filenames unchanged. Review product shape, packaging text and logos before use.

## 🔗 Nodes Used

Google Sheets, Google Drive, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
