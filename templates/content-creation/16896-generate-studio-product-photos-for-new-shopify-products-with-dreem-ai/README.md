# 🎬 Generate studio product photos for new Shopify products with Dreem AI

> ⚡ **38 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow triggers on new Shopify products, generates studio-style product shots from one product image using Dreem.ai and appends the rendered images back to the Shopify product listing, with optional Slack posting and approval before publishing.

## How it works
1. A Shopify webhook fires when a product is created. Products without a photo are skipped.
2. he Dreem node generates your chosen shot types (defaults: flat lay + ghost mannequin) from the product's first image.
3. Sends the product’s first image (and optionally a second/back image URL) to Dreem AI to generate the configured product shot types and provides an n8n callback URL.
4. Waits for Dreem AI to call back with the render result and verifies the render status is completed.
5. Optionally posts the generated image links to Slack and waits for an Approve/Reject response.
6. Finished shots are appended to the product, keeping existing photos. An optional second row renders back-view shots from the product's second image.

## Setup
1. Install the Dreem community node and add a Dreem API key credential (dreem_pk_...) to the Dreem generate nodes.
2. Add a Shopify Admin access token credential with read_products and write_products scopes and select it in the Shopify trigger and update nodes.
3. Review and adjust the Dreem shotCodes and output aspect ratio for your desired front shots (and enable/configure the back-shots row if you want back images).
4. Optional: Add a Slack OAuth2 credential, choose a target channel, and enable the Slack posting/approval and timeout alert steps if you want human review or notifications.

## Requirements
- Dreem account + API key, Shopify store with Admin API access, Slack (optional, for approvals)

## Additional info
Pick different shot codes on the Generate node (the sticky lists the full menu), enable the back-shots row, or turn on Slack approval.

## 🔗 Nodes Used

Slack, Shopify Trigger, Shopify

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
