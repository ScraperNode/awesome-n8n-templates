# 📁 Automate screenshot upload to Postimages.org with Airtop browser automation

> ⚡ **982 views** · 📁 [File Management](../)

## Description

# Automating File (Image) Upload to Postimages.org

## Use Case
Manually uploading screenshots or other image files to hosting platforms like Postimages.org can be tedious and time-consuming. This automation simplifies the process by automatically uploading an image to Postimages.org and validating the result, which is especially useful for repetitive QA tasks, reporting, or archiving visual web data.

## What This Automation Does
This automation uploads a screenshot to [Postimages.org](https://postimages.org/) using the following steps:

- Creates a browser session using Airtop.
- Navigates to the Postimages.org upload page.
- Takes a screenshot using the browser session.
- Uploads the screenshot to the site via the "Choose images" button.
- Waits briefly to ensure upload processing.
- Captures a post-upload screenshot for validation.

## How It Works
1. **Session Initialization**: Starts a browser session using the Airtop node.
2. **Navigation**: Opens the URL `https://postimages.org/` in a new window.
3. **Screenshot Capture**: Takes a screenshot to use for upload.
4. **File Upload**: Uploads the screenshot to the site using the file upload interaction.
5. **Validation**: Waits 5 seconds and then captures a second screenshot to confirm the image was uploaded successfully.

## Setup Requirements
1. [Airtop API Key](https://portal.airtop.ai/api-keys) — required for session creation and browser interactions.

## Next Steps
- **Customize for Other Sites**: Adapt this workflow to automate file uploads to different platforms.
- **Integrate with Reporting Tools**: Combine this automation with workflows that require image reporting or archiving.
- **Enhance Validation**: Add logic to parse the upload confirmation or retrieve the image URL programmatically for logging or sharing.

Read more about how to [automate file uploads to the web](https://www.airtop.ai/automations/simple-file-upload-n8n)

## 🔗 Nodes Used

Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
