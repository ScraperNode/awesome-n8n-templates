# 🔬 Post weekly workflow diagrams to Slack with Pixtex

> ⚡ **20 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every Monday at 9:00 AM, fetches a selected n8n workflow via the n8n API, renders the workflow diagram to a PNG image using Pixtex, and uploads the image to a Slack channel as a file.

## How it works
1. Runs every Monday at 9:00 AM using a schedule trigger.
2. Retrieves the chosen workflow JSON from your n8n instance using the n8n API.
3. Sends the workflow JSON to Pixtex to render the workflow diagram as a PNG image.
4. Uploads the rendered image to Slack as a file in the selected channel.

## Setup
1. Create an n8n API key (Settings → API) and add it as an n8n API credential, then select the workflow ID to document.
2. Add a Slack credential and choose the target Slack channel for the file upload.
3. (Optional) Add a Pixtex API key if you want higher limits or to remove the watermark, and adjust the rendering options (format, background, scale) as needed.

## Requirements
- An n8n API key (Settings -> API) so the workflow can fetch itself
- A Slack credential with permission to upload files
- No Pixtex account is needed. Renders work without any credential.

## Customization
- Set Format to PDF on the render node to get a client-ready document instead of a Slack image
- Swap Slack for Gmail, Google Drive or Telegram. The image is just binary data on the item.
- Change background, icon pack, scale, layout and padding under Options on the render node
- Change the schedule, or replace the trigger entirely to render on demand
- Point it at a different workflow, or loop over several to document a whole instance

## Additional info
The image is generated from the workflow JSON itself, so it can never drift from what the workflow actually does. That is the point of running it on a schedule rather than taking a screenshot once.

## 🔗 Nodes Used

Slack, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
