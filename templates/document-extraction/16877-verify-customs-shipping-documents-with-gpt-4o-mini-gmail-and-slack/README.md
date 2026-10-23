# 🔬 Verify customs shipping documents with GPT-4o-mini, Gmail and Slack

> ⚡ **47 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives shipment document text via a webhook, uses OpenAI (GPT-4o-mini) to extract key fields from the Bill of Lading, cross-checks the extracted data against Invoice and Packing List fields, then emails a compliance verdict via Gmail and sends failure alerts to Slack.

## How it works
1. Receives a POST request via webhook containing submitterEmail, shipmentRef, and the plain-text Commercial Invoice, Packing List, and Bill of Lading.
2. Uses OpenAI (GPT-4o-mini) to extract structured Bill of Lading fields into JSON, and posts a Slack alert if the extraction fails.
3. Compares key fields across the Invoice, Packing List, and Bill of Lading (for example consignee/shipper names, ports, package counts, gross weight, HS codes, quantities, and shipping marks) and calculates a verdict and discrepancy list.
4. Emails a “READY_TO_FILE” report via Gmail when all checks pass.
5. Emails a “NEEDS_CORRECTION” report via Gmail with detailed mismatch explanations and check IDs when discrepancies are found.
6. Sends a Slack message when any workflow-level error occurs so issues are visible even if the run fails early.

## Setup
1. Add an OpenAI credential and ensure the OpenAI node is configured to use your model access (GPT-4o-mini).
2. Add a Gmail OAuth2 credential and confirm the recipient field uses the incoming submitterEmail value.
3. Add a Slack OAuth2 credential and set the target channel ID for both Slack alert steps.
4. Copy the production webhook URL and configure your source system to POST JSON with submitterEmail, shipmentRef, invoiceText, packingText, and bolText.

## 🔗 Nodes Used

Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
