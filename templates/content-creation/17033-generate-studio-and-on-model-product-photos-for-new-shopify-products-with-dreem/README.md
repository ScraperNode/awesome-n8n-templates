# 🎬 Generate studio and on-model product photos for new Shopify products with Dreem AI

> ⚡ **68 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow turns every new Shopify product into a complete photo set with Dreem.ai: studio product shots plus an on-model render, generated from one photo and added straight back to the listing. Optional Slack approval before anything goes live.

## How it works
1. A Shopify webhook fires on every new product. Products without a photo are skipped.
2. The Dreem node renders your chosen shot types from the product's first image (defaults: flat lay + ghost mannequin).
3. The first generated product shot becomes the garment input for the on-model render - a clean studio input instead of your raw upload - on the talent and pose you pick.
4. Each render calls the workflow back when ready.
5. Product shots + on-model shot are appended to the product, keeping existing photos. An optional second row adds back-view shots.

## Setup
1. Add a Shopify Admin access token credential with read_products and write_products scopes and select it in the Shopify trigger and update nodes.
2. Install the Dreem community node and add a Dreem API key credential (dreem_pk_...) to the Dreem generate nodes.
3. Ensure new Shopify products include at least one image (and a second image if you plan to enable back-shot generation).
4. Set your desired Dreem `shotCodes`, output aspect ratio, and the on-model `talentId`/pose in the Dreem nodes.
5. (Optional) Connect Slack OAuth2, choose a channel, and enable the disabled Slack approval/timeout nodes if you want human review or timeout alerts.

## Requirements
- Dreem account + API key, Shopify store with Admin API access, Slack (optional, for approvals)

## Additional info
Change shot codes, talent, and pose on the Dreem nodes; enable back shots or Slack approval.

## 🔗 Nodes Used

Slack, Shopify Trigger, Shopify

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
