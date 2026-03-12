# ⚙️ Send HTTP requests to a list of URLs

> ⚡ **3,456 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How it works
This workflow reads a list of URLs every 15 minutes, and sends an HTTP request to every URL on the list.

## Set up steps
1. Schedule the workflow to run at your desired frequency (default is every 15 minutes).
2. Add your desired URLs to the list. The list should be in the same format as the image below (Don't forget to have single quotes around every URL in the list, and separate each one with a comma!):

![urlslist.png](fileId:796)

3. Turn the workflow ON.

## Ideas to customize the workflow for your own use cases:
- Change the HTTP method
- Add headers
- Add a request body

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
