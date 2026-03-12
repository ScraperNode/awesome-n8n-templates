# 🎬 Automate print-on-demand: design to Shopify with AI, mockups & social promotion

> ⚡ **963 views** · 🎬 [Content Creation & Video](../)

## Description

Who’s it for
This template is designed for Print-on-Demand (POD) business owners, independent artists, and e-commerce managers who want to automate the process of turning raw design files into listed products without manual data entry.
How it works
This workflow acts as an automated merchandise factory that handles everything from image processing to marketing.
Trigger: The workflow starts when a new design file is uploaded to a specific Google Drive folder.
Analyze: OpenAI Vision analyzes the image to determine the subject, mood, and color palette, and assesses copyright risk.
Process: The image background is removed using Remove.bg, and the clean asset is uploaded to Cloudinary.
Mockup: The workflow generates realistic product mockups (e.g., T-shirts, Tote bags) by overlaying the design onto base product images using Cloudinary transformations.
Copywriting: OpenAI writes an SEO-friendly product title, description, and tags based on the visual analysis.
Draft: A draft product is created in Shopify with the generated details and mockup image.
Approval: A message is sent to Slack with the product details and mockup. The workflow pauses and waits for a human to click "Approve" or "Reject".
Publish & Promote: If approved, the product is published to Shopify and automatically posted to Instagram and Pinterest. If rejected, a notification is sent to Slack.
How to set up
Base Images: Upload your blank product images (e.g., a white t-shirt, a tote bag) to your Cloudinary account and note their Public IDs.
Configuration: Open the Workflow Configuration node and fill in all the required fields, including your API keys and the Cloudinary Public IDs for your base products.
Credentials: Configure the credentials for Google Drive, OpenAI, Shopify, Slack, Instagram, and Pinterest in their respective nodes.
Folder ID: Update the Google Drive Trigger node with the ID of the folder you want to watch.
Requirements
n8n (Self-hosted or Cloud)
Google Drive account
OpenAI API key (Access to GPT-4o model recommended for Vision capabilities)
Remove.bg API key
Cloudinary account
Shopify store
Slack workspace
Instagram Business account
Pinterest account
How to customize
Mockups: You can modify the Code - Generate Mockup URLs node to add more product types (e.g., Hoodies, Mugs) by adding their Cloudinary Public IDs.
Prompt Engineering: Adjust the system prompt in the OpenAI - SEO Copywriting node to match your brand voice or language style.
Social Channels: Add or remove nodes to support other platforms like Twitter (X) or Facebook Pages.

## 🔗 Nodes Used

HTTP Request, Slack, Shopify, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
