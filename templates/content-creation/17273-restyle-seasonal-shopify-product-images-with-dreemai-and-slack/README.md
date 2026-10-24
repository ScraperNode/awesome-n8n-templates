# 🎬 Restyle seasonal Shopify product images with dreem.ai and Slack

> ⚡ **10 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Shopify product photos that still look like summer in October cost conversions .This workflow automates the seasonal restyle: tag the products you want refreshed, set the season's model, pose, and styling once per flip, and on the day the whole batch gets new-season product photos from Dreem AI.

## How it works
1. A schedule trigger fires March 1 (spring/summer) and September 1 (autumn/winter) at 09:00.
2. Fetches all products from Shopify and keeps only those whose tags include `seasonal-restyle`.
3. The Dreem node renders each product's first image on the model and pose you set for the season. Add styling image URLs (coat, scarf, knitwear) and Dreem dresses the look around your product.
4. Waits for dreem.ai to call back within 20 minutes and checks whether the render status is `completed`.
5. The seasonal shot is appended to each product; existing images stay. An optional second row renders a male-model version.
6. If the render does not complete in time, posts a “skipped” message for that product to a Slack channel.
7. After the batch finishes, posts a “catalog restyle complete” message to Slack.

## Setup
1. Add Shopify Admin API access-token credentials with `read_products` and `write_products` permissions.
2. Add a dreem.ai API key and set the desired talent ID, shot code(s), and aspect ratio for the seasonal render (and enable/configure the optional male render path if needed).
3. Add Slack OAuth2 credentials and choose the target channel for the “skipped” and “complete” notifications.
4. Tag the Shopify products you want processed with `seasonal-restyle` and ensure each has at least one product image for dreem.ai to use as input.

## Requirements
- Dreem account + API key, Shopify store with Admin API access, Slack

## Customization
- Change the flip dates, the seasonal styling URLs, the talent and pose, or enable the male-model row.

## 🔗 Nodes Used

Slack, Shopify, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
