# 🎬 Create personalized Shopify upsell photos with Dreem.ai and Slack

> ⚡ **9 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
On every Shopify order, this workflow pairs the purchased item with your newest arrival and generates one personalized on-model photo in dreem.ai: the new piece as the main garment, the customer's purchase styled into the look. Can be added to your email provider.

## How it works
1. A Shopify webhook fires on every new order and picks up the purchased item.
2. The workflow pulls your catalog's newest arrival as the second half of the look.
3. The Dreem node renders both pieces styled together on your chosen virtual model.
4. Dreem renders in the background (up to 20 minutes) and calls the workflow back.
5. The finished pairing posts to Slack, so a human sees every look before a customer does.
6. A documented hand-off shows how to fire the render into Klaviyo, Drip, or any ESP as a custom event on the customer's profile.

## Setup
1. Add Shopify Admin API access token credentials with permission to read orders and products, and connect them to the Shopify trigger and product nodes.
2. Install the Dreem community node and add a Dreem API key credential, then set the Dreem talentId/shotCodes and confirm the callback URL uses the workflow resume URL.
3. Add Slack OAuth2 credentials, choose the target channel in both Slack message steps, and update the message text if you want a different approval/review format.

## Requirements
- Dreem account + API key, Shopify store with Admin API access (orders + products), Slack, an ESP (Klaviyo, Drip, etc.) for the email step

## Customization
- Swap the pairing logic (newest arrival → bestseller), the talent and pose, or the ESP event payload.

## 🔗 Nodes Used

Slack, Shopify Trigger, Shopify

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
