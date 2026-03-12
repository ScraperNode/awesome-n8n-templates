# 🎬 Generate product descriptions from images and publish to Shopify using AI

> ⚡ **259 views** · 🎬 [Content Creation & Video](../)

## Description

## Who’s it for
This template is ideal for ecommerce founders, dropshippers, Shopify store owners, product managers, and agencies who want to automate product listing creation. It removes manual work by generating titles, descriptions, tags, bullet points, alt text, and SEO metadata directly from a product image and basic input fields.

## What it does / How it works
This workflow starts with a webhook that receives product information along with an uploaded image.  
The image is uploaded to an online image host so it can be used inside Shopify.  
At the same time, the image is analyzed by Google Gemini using your provided product name, material type, and details.  
Gemini returns structured JSON containing:

- Title  
- Description  
- Tags  
- Bullet points  
- Alt text  
- SEO title  
- SEO description  

The workflow cleans and parses the AI output, merges it with the uploaded image URL, and constructs a complete Shopify product payload.  
Finally, it creates a new product in Shopify automatically using the generated content and the provided product variants, vendor, options, and product type.

## Requirements
- Google Gemini (PaLM) API credentials  
- Shopify private access token  
- Webhook endpoint for receiving data and files  
- An imgbb (or any image hosting) API key  

## How to set up
1. Connect your Gemini and Shopify credentials.  
2. Replace the imgbb API key and configure the hosting node.  
3. Provide vendor, product type, variants, and options in the webhook payload.  
4. Ensure your source system sends `file`, `product_name`, `material_type`, and extra fields.  
5. Run the webhook URL and test with a sample product.

## How to customize the workflow
- Change the AI prompt for different product categories  
- Add translation steps for multi-language stores  
- Add price calculation logic  
- Push listings to multiple Shopify stores  
- Save generated metadata into Google Sheets or Notion

## 🔗 Nodes Used

HTTP Request, Webhook, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
