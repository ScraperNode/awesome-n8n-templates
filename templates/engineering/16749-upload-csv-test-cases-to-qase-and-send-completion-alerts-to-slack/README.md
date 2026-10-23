# ⚒️ Upload CSV test cases to Qase and send completion alerts to Slack

> ⚡ **19 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
### This workflow upload test cases from a CSV file into Qase App and sends a confirmation message to your Slack channel.


## How it works
1. Receives a form submission containing a public CSV URL and a selected Qase project option.
2. Downloads the CSV file from the provided URL and extracts its rows into individual test-case items.
3. Maps each row into the JSON payload Qase expects (including project code, fields like severity/priority/type, and optional parsed steps).
4. Creates the test cases in Qase by sending a POST request per item to the Qase Cases API for the mapped project.
5. Aggregates the upload responses into a single result.
6. Sends a Slack incoming-webhook message confirming the test case upload is complete.

## Setup
1. Create a Qase API token and add it to the Qase HTTP Header Auth credentials used for the Qase API request.
2. Create a Slack Incoming Webhook, paste the webhook URL into the Slack notification HTTP request node, and customize the message text if needed.
3. Ensure the uploaded CSV is publicly accessible via URL and uses the expected columns (for example: title, description, preconditions, postconditions, severity, priority, type, layer, behavior, automation, and optional steps_raw).
4. Update the project-code mapping in the JavaScript mapping step and the form dropdown options so each selection resolves to a valid Qase project code.
5. Use the generated form/webhook URL from the form trigger and share it with users who will submit the CSV URL and project choice.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
