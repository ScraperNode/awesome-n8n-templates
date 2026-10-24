# 🎬 Restore and animate old photos into talking videos with Muse and Google Drive

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow uses an n8n form to upload or link to an old photo, then calls the useapi.net Muse API (third-party) to optionally restore it and generate one or two short talking-video takes, with optional saving of the final MP4 and restored image to Google Drive.

## How it works
1. A user opens the authenticated n8n form, uploads a photo (or provides an HTTPS image URL), chooses restore options, writes the spoken line, and submits.
2. The workflow uploads the image to useapi.net Muse Assets and reads the selected Muse account’s quota to show a “Before you spend” confirmation page with an allowance estimate.
3. If restoration is chosen, it starts an asynchronous Muse image job, polls until completion, and shows a page to accept the restored photo, redo with updated notes, or use the original.
4. It starts one or two asynchronous Muse video jobs to animate the chosen image and speak the provided line, polls until finished, and displays each take for the user to pick or redo with a new line/motion.
5. If enabled, it downloads the selected MP4 (and restored image) from useapi.net and uploads them to Google Drive.
6. It displays a final results page with an embedded player, signed download links served through a dedicated webhook, and updated quota usage information.

## Setup
1. Create a useapi.net account, add at least one Muse account in useapi.net, and generate a useapi.net API token.
2. In n8n, create an HTTP Header Auth credential with `Authorization: Bearer <token>` and select it on the workflow’s useapi.net HTTP Request steps.
3. Create an HTTP Basic Auth credential and keep it selected on the form so only authorized users can access the workflow.
4. (Optional) Add Google Drive OAuth2 credentials and set the target folder ID in the workflow code so the “Save to Google Drive” option can upload files.

## Requirements
- A useapi.net subscription ($15/month flat) and API token
- A Muse (muse.ai) account added at useapi.net, created in the US or Canada; the free Muse plan works
- Optional: Google Sheets and Google Drive credentials, for batch mode and saving the files

## Customization
- Edit the restore and talk prompts and the default motion at the top of the Read the form node
- Turn on Google Sheet batch mode, link lifetime (linkHours) and Drive saving in the Settings node; the aspect ratio is part of the prompt

## Additional info
useapi.net is a third-party API, not affiliated with Meta; I maintain it. In our tests a take used about 2-3% of a free Muse account's weekly allowance and a restore 0-1%. Code, README, a sheet template and screenshots: https://github.com/useapi/muse-api/tree/main/n8n

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
