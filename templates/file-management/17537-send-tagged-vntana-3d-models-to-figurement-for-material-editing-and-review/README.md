# 📁 Send tagged VNTANA 3D models to Figurement for material editing and review

> ⚡ **7 views** · 📁 [File Management](../)

## Description

## Quick Overview
This workflow receives VNTANA asset-published webhook events, filters for products tagged “Figurement,” downloads the published GLB model from VNTANA, and uploads it to Figurement via its scene import API for material editing and review.

## How it works
1. Receives a POST webhook from VNTANA when an asset is published.
2. Checks whether the published product’s tags contain the value “Figurement,” and stops if it does not.
3. Extracts the product UUID, client UUID, organization UUID, and GLB blob ID from the webhook payload.
4. Downloads the GLB model file from VNTANA using the product and client identifiers.
5. Uploads the GLB to Figurement with a multipart/form-data request to the scene import endpoint.

## Setup
1. Configure VNTANA to send asset publish events to this workflow’s production webhook URL.
2. Add VNTANA API credentials for the VNTANA community node so the workflow can download models.
3. Add an HTTP Header Auth credential for Figurement (Authorization: Bearer <FIGUREMENT_API_KEY>) and assign it to the import request.
4. Ensure the assets you want routed are tagged with “Figurement” in VNTANA (or update the tag value in the filter to match your tag).

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
