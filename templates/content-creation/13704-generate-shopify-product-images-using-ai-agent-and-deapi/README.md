# 🎬 Generate Shopify product images using AI Agent and deAPI

> ⚡ **74 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?

- E-commerce store owners using Shopify                                                                                                     
- Product managers who need consistent product imagery                                                                                      
- Marketing teams looking to automate visual content creation                                                                               
- Dropshipping businesses needing quick product photos

## What problem does this solve?

Creating professional product images is time-consuming and expensive. This workflow eliminates the need for manual photo editing by automatically generating styled hero images and transparent PNGs ready for your product catalog.

## What this workflow does

1. **Triggers** when a new product is created in Shopify
2. **Extracts** product title, description, category, and tags
3. **AI Agent** analyzes the product data and uses the deAPI Prompt Booster tool to create an optimized image generation prompt
4. **Generates** a professional product image using deAPI
5. **Removes background** to create a transparent PNG version
6. **Updates** the Shopify product with both images (hero + transparent)

## Setup

### Requirements
- **Self-hosted n8n instance** (deAPI node is not yet available on n8n Cloud)
- [deAPI](https://deapi.ai) account for image generation and prompt boosting
- Shopify scopes: `read_products`, `write_products`, `write_files`
- Anthropic account for the AI Agent

### Installing the deAPI Node
1. Go to **Settings** → **Community Nodes**
2. Install `n8n-nodes-deapi`

### Configuration
1. Add your deAPI credentials (API key + webhook secret)
2. Add your Shopify credentials (Shop subdomain + APP secret key + Access token)
3. Add your Anthropic credentials (API key)
4. Ensure your n8n instance has an HTTPS webhook URL
5. [Set up](https://help.shopify.com/en/manual/fulfillment/setup/notifications/webhooks#create-webhooks) the webhook URL for the product creation event in Shopify

## How to customize this workflow

- **Change the AI model**: Swap Anthropic for any other LLM providers
- **Adjust the prompt**: Modify the AI Agent system message for different photography styles
- **Add more processing**: Insert upscaling(e.g. deAPI Upscale an Image) or additional image transformations
- **Different e-commerce platform**: Replace Shopify nodes with WooCommerce, BigCommerce, etc.
- **Add human review**: Insert a Wait node + Slack notification before uploading to Shopify

## 🔗 Nodes Used

Shopify Trigger, Shopify, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
