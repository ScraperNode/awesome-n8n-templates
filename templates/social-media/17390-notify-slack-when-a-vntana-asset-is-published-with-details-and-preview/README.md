# 📱 Notify Slack when a VNTANA asset is published with details and preview

> ⚡ **6 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow listens for VNTANA asset publish events, fetches the published asset’s details and first render, and posts a rich notification to Slack with tags, polygon count, and a direct link back to the asset in VNTANA.

## How it works
1. Receives a webhook request from VNTANA when an asset is published.
2. Fetches full asset/product details from VNTANA, including tags and metadata.
3. Downloads the asset’s renders from VNTANA and keeps only the first render for preview.
4. Builds a Slack-ready message payload including the asset name, tags, polygon count (if available), and a direct VNTANA URL.
5. Posts the formatted notification to a Slack channel.
6. Uploads the render image to Slack as a file reply in the same message thread.

## Setup
1. Install the VNTANA community node, create VNTANA API credentials, and set your VNTANA Workspace UUID in the VNTANA nodes.
2. Add a Slack credential and set the destination channel for the Slack message and file upload.
3. Register a VNTANA webhook subscribed to `asset.published` and paste the n8n webhook URL into VNTANA.
4. Update `ORG_SLUG` and `WORKSPACE_SLUG` in the code step so the workflow can build the correct VNTANA asset link.

## 🔗 Nodes Used

Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
