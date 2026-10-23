# 🔬 Create and monitor individualized Google Forms with Drive and webhooks

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow copies a Google Forms template for a specific customer, updates and publishes the new form, sets up a Google Forms watch for responses, and processes incoming watch notifications via an n8n webhook to fetch and extract the selected answer.

## How it works
1. Starts manually and sets the Google Form template ID, customer name, and destination Google Drive folder ID.
2. Calls the Google Drive API to copy the template form into the target folder and stores the new form ID alongside the workflow’s resume webhook URL in an n8n Data Table.
3. Fetches the new form details from the Google Forms API, updates the form title/description and choice options, and publishes the form so it accepts responses.
4. Creates a Google Forms watch that publishes response events to a Google Cloud Pub/Sub topic.
5. Receives the Pub/Sub push notification via an n8n webhook, looks up the matching resume URL in the n8n Data Table by form ID, and calls that URL to continue the original execution.
6. After the execution resumes, fetches the latest responses from the Google Forms API, extracts the selected choice value, and passes it to a placeholder step for custom processing.

## Setup
1. Create Google OAuth2 credentials and add an n8n OAuth2 credential with scopes for Google Drive and Google Forms (including forms.body and forms.responses.readonly).
2. Create a Google Form template, then set its form ID, your target Google Drive parent folder ID, and the customer name in the workflow parameters.
3. Update the Google Forms API request bodies to match the questions/items you want to modify and the response fields you want to extract.
4. Set up a Google Cloud Pub/Sub topic for form responses and a push subscription pointing to the n8n webhook URL used for incoming watch notifications.
5. Create an n8n Data Table with at least form_id and hook_url columns and select it in the workflow so copied forms can be mapped back to their execution resume URLs.

## 🔗 Nodes Used

HTTP Request, Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
