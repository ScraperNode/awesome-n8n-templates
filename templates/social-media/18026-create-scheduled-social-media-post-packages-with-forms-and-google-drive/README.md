# 📱 Create scheduled social media post packages with forms and Google Drive

> ⚡ **75 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow collects scheduled social post details via an n8n form and creates a Google Drive package containing a tweet.txt file and 1–4 numbered images, while validating inputs, preventing duplicate package folders, and cleaning up incomplete uploads.

## How it works
1. Receives a submission from an n8n Form Trigger with a scheduled date/time, post text, an optional label, and 1–4 uploaded PNG/JPG images.
2. Validates the date and time format, ensures the post text is not empty, verifies the image count and file types, and generates a canonical package folder name.
3. If the submission is invalid, returns a form completion message listing the corrections needed.
4. If valid, checks Google Drive in the configured parent folder to see whether a folder with the generated package name already exists.
5. If a duplicate exists, returns a form completion message indicating nothing was created.
6. If no duplicate exists, creates a new Google Drive folder, writes the post text to tweet.txt, renames images to 01–04 with their original extensions, and uploads all files to the folder.
7. If any upload fails, deletes the newly created folder and returns an error message; otherwise, returns a success message confirming the package was created.

## Setup
1. Create a Google Drive OAuth credential in n8n and connect it to the Google Drive nodes.
2. Set the destination parent folder by replacing PASTE_GOOGLE_DRIVE_PARENT_FOLDER_ID_HERE in the workflow with your Google Drive folder ID.
3. Activate the workflow and use the generated form URL to submit scheduled post packages.

## 🔗 Nodes Used

Google Drive, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
