# 🔬 File water well completion permits with OpenAI, state APIs, Google Drive and Gmail

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow automates regulatory well compliance by integrating data ingestion, AI-driven validation, and state filing. It uses an OpenAI agent to check Water Board APIs, validates construction measurements, manages the 48-hour cure delay, and handles final record archiving alongside automated Gmail updates.


## How it works
1. Receives a POSTed well completion report via an n8n webhook.
2. Normalizes the incoming payload into typed fields like license expiry, grout depth, and setback distances.
3. Uses an OpenAI chat model–powered agent to call a State Water Board API endpoint and return the minimum grout depth and setback requirements for the reported county and aquifer type.
4. Compares the reported grout depth and setbacks against the returned minimums and checks whether the driller license is expired.
5. If the license or setbacks fail, tags the record as non-compliant; otherwise waits 48 hours and fetches a post-cure grout depth reading from a county field inspection API.
6. Verifies the post-cure reading against the minimum (with a 1 ft tolerance), tags the record as ready to file or on hold for cure failure, then posts the filing record to the State Water Board portal.
7. Uploads an archive copy of the filed record to Google Drive and sends a status email through Gmail.

## Setup
1. Create and select credentials for OpenAI, State Water Board API (HTTP Header Auth), County Field Inspection API (HTTP Header Auth), Google Drive OAuth2, and Gmail OAuth2.
2. Replace the placeholder State Water Board and county inspection API URLs with your real endpoints, and confirm the expected request/response formats for the grout-minimum lookup and post-cure reading.
3. Set the Google Drive driveId and folderId for the archive upload destination.
4. Update the Gmail recipient address (or map it from the webhook payload) to notify the correct driller/regulator contacts.
5. Ensure your n8n execution data retention can cover the 48-hour wait, and adjust the wait duration and post-cure tolerance if your local regulations differ.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
