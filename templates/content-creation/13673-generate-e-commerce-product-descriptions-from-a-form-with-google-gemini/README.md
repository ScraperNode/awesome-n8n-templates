# 🎬 Generate e-commerce product descriptions from a form with Google Gemini

> ⚡ **40 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for

E-commerce store owners, product marketers, and agencies who need high-quality product descriptions at scale. Works great for Shopify, Amazon, or any platform that needs SEO-friendly copy.

## What this workflow does

Users fill out a simple web form with their product name, key features, target audience, preferred tone, and language options. Google Gemini generates a complete product listing package including an SEO-optimized title, meta description, full product description, benefit-driven bullet points, and keyword suggestions. If multiple languages are selected, a second Gemini call translates and localizes the content for each market. A Code node formats everything into a clean structure, then the results are saved to Google Sheets as a searchable product copy database. Finally, the finished descriptions are emailed to the specified address via Gmail.

## How to set up

1. Get a free Google Gemini API key from Google AI Studio
2. Create a Google Sheet called "Product Descriptions" with columns matching the node fields
3. Connect your Gmail account for delivery emails
4. Activate the workflow and share the form URL with your team or clients

## Requirements

- Google Gemini API key (free tier available)
- Google Sheets account
- Gmail account
- n8n instance (self-hosted or cloud)

## How to customize

- Edit the prompt in "Generate Description" to match your brand voice or platform requirements (Amazon vs Shopify formatting)
- Add or remove languages in the form dropdown and the "Translate Descriptions" prompt
- Adjust the SEO keyword count and description length in the AI prompt

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
