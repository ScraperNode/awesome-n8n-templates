# ⚙️ Create Qwease incidents from monitoring alerts and notify Microsoft Teams

> ⚡ **47 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow receives monitoring alerts via a webhook, creates an incident (INC) ticket in Qwease through its REST API, and posts an alert message to a Microsoft Teams channel.

## How it works
1. Receives an HTTP POST monitoring alert on an n8n webhook endpoint.
2. Normalizes incoming payload fields into a ticket title and description, using fallbacks when fields are missing.
3. Creates an INC ticket in Qwease via an authenticated HTTP request to the Qwease REST API.
4. Posts a notification to a Microsoft Teams channel including the created Qwease ticket identifier and alert title.

## Setup
1. Configure your monitoring tool (RMM/uptime/SIEM) to send alerts as HTTP POST requests to the workflow’s webhook URL.
2. Add an HTTP Bearer Auth credential for the Qwease API and verify the Qwease API endpoint is reachable.
3. Set the Qwease `form` and `for_user` tenant IDs in the request body to match your Qwease instance.
4. Connect Microsoft Teams OAuth credentials and select the target Team and Channel in the Teams message action.

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Teams

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
