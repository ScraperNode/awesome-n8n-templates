# 📋 Prepare reviewable client delivery jobs from Google Sheets with Prooftask and Slack

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow is manually run to create and persist a draft client delivery job in Prooftask by posting your mapped project, criteria, and delivery materials to the Prooftask Agents API.

## How it works
1. Starts when you run the workflow manually.
2. Builds a single delivery payload containing a persistent requestId, a Prooftask projectId, a workflow reference, and delivery materials mapped to agreed criterion IDs.
3. Validates that exactly one job is being prepared and that the requestId and projectId match the required ID formats.
4. Sends the payload to the Prooftask Agents API to create and persist a saved delivery job and returns the created job details for you to record.

## Setup
1. Create or select an existing Prooftask project with agreed delivery criteria and note the project ID and criterion IDs you will reference.
2. Create a Prooftask scoped Agent token and configure an n8n HTTP Header Auth credential with `Authorization: Bearer <token>` for the Prooftask request.
3. Replace the example values in the input payload (requestId, projectId, workflowReference, summary, materials, references, and files) with your real delivery data and keep the same requestId when retrying the same delivery preparation.

## Requirements
- An existing Prooftask project with agreed criteria, an authorized scoped Agent grant, and an n8n Header Auth credential. Prooftask service availability and pricing apply separately.

## Additional info
Preparation creates a saved delivery job; it does not send the delivery, accept work, sign, or pay. Persist the returned job ID in your own task system and review the exact materials before deliberate submission using the separate send-job workflow. No API token or customer data is included. Export syntax and workflow graph were validated; authenticated production-engine execution has not been claimed. Setup and companion workflows: https://github.com/cognitive-emergence/prooftask-integrations/tree/main/n8n

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
