# 🎬 Create on-model Shopify product photos with Dreem AI and Slack approvals

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow fires when a new Shopify product is created, renders it on a virtual model with Dreem.ai, and appends the shot back to the product - with optional Slack posting and approval.

## How it works
1. A Shopify webhook fires when a product is created. Products without a photo are skipped.
2. The Dreem node renders the product's first image on your chosen virtual model and pose (400+ talents, 700+ poses). A second product image is used as the back reference for accurate back-facing renders.
3. Dreem renders in the background and calls the workflow back.
4. Optional: enable the disabled Slack nodes for an Approve / Reject step before anything goes live.
5. The on-model shot is appended to the Shopify product, keeping existing photos.

## Setup
1. Add a Shopify Admin API access token credential with at least `read_products` and `write_products` scopes.
2. Install the Dreem community node and add a Dreem API key credential (`dreem_pk_...`).
3. In the Dreem step, set the `talentId` and `shotCodes` you want to use and ensure your products include a front image (and optionally a second image for back reference).
4. (Optional) Add a Slack OAuth2 credential, enable the disabled Slack steps, and select the target Slack channel for posting and approvals.

## Requirements
- Dreem account + API key, Shopify store with Admin API access, Slack (optional, for approvals)



## Customization
- Swap talent and pose on the Generate node, add styling image URLs to control the rest of the outfit, or turn on Slack approval.

## 🔗 Nodes Used

Slack, Shopify Trigger, Shopify

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
