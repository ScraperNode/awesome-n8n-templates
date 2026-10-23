# 🎬 Generate Seedance 2 AI videos from form input and email links with Gmail

> ⚡ **9 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects video parameters via an n8n form, creates a Seedance 2 video generation job through the Kie.ai API, polls until the job succeeds, and emails the resulting video link using Gmail.

## How it works
1. Receives a video generation request from an n8n form with a prompt, reference image URL, duration, resolution, and aspect ratio.
2. Sends these inputs to the Kie.ai API to create a Seedance 2 video generation task and retrieves a task ID.
3. Waits briefly, then calls the Kie.ai API to fetch the task status using the task ID.
4. Repeats the wait-and-status-check loop until the API reports the task state as "success".
5. Sends an email via Gmail containing the generated video result link/details returned by the API.

## Setup
1. Create a Kie.ai API token and add it to the Authorization header in both Kie.ai HTTP requests (createTask and recordInfo).
2. Connect a Gmail OAuth2 credential in n8n for sending the email.
3. Set the email recipient address in the Gmail step (or map it from the form fields if you want it to be user-provided).
4. Ensure the reference image URL you submit in the form is publicly accessible so Kie.ai can fetch it.

## Requirements
- A Kie.ai account with an active API token and sufficient credits.
- An n8n instance with access to the Form Trigger, HTTP Request, Wait, IF, and Gmail nodes.
- A connected Gmail OAuth2 credential.
- A publicly accessible reference image URL.

## Customization
- Add an email field to the form so users can choose where the generated video link is sent.
- Change the waiting interval depending on average Seedance generation time.
- Add failure handling for insufficient credits, invalid API responses, or failed generation jobs.
- Save generated video links to Google Sheets, Google Drive, Airtable, Slack, or another destination.
- Adjust available duration, resolution, and aspect-ratio options in the form.

## Additional info
Seedance video generation is asynchronous, so completion time may vary. The workflow continues checking the task until the API returns a successful state. Kie.ai usage may consume paid credits, and users should connect their own API token before running the workflow. Do not include a personal or production API token in the public template.

## 🔗 Nodes Used

HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
