# 🎬 Generate multi-angle on-model Shopify product photos with Dreem.ai

> ⚡ **32 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
A Shopify product page with only one photo reads like a listing nobody finished. This workflow runs weekly to find Shopify products that have only one image, generates multi-angle on-model photos with Dreem.ai from that image and adds the new photos back to the product in Shopify.

## How it works
1. A schedule trigger runs the audit every Monday at 09:00. Change the cadence in one click.
2. The catalog is pulled and filtered down to products with exactly one image.
3. The Dreem node renders the product on your chosen virtual model in the poses you pick - add 2-3 shot codes for a real multi-angle set.
4. Each render calls the workflow back when ready (up to 20 minutes per product). Timed-out products are skipped, posted to Slack, and retried next Monday.
5. New shots are appended to the product, keeping the original photo. Once a product has more than one image it drops out of next week's scan, so the loop is safe by design.
6. Posts an “audit complete” message to Slack after all eligible products have been processed.

## Setup
1. Add Shopify Admin API access token credentials with read/write product permissions and select them for the Shopify steps.
2. Add a Dreem.ai API key credential, then set the talent ID, shot codes (poses), and aspect ratio you want Dreem.ai to generate.
3. Add Slack OAuth2 (or a Slack bot token) credentials and set the target channel for both Slack messages.

## Requirements
- Dreem account + API key, Shopify store with Admin API access, Slack (recommended - run summaries and timeout retries)


## Customization
- Change the schedule, the shot codes, or the talent and pose on the Dreem node.

## 🔗 Nodes Used

Slack, Shopify, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
