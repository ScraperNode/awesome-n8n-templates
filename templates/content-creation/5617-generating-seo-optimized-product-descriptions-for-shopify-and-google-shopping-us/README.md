# 🎬 Generating SEO-optimized product descriptions for Shopify and Google Shopping using AI

> ⚡ **4,180 views** · 🎬 [Content Creation & Video](../)

## Description

Tired of spending HOURS writing product descriptions that don’t rank or convert? This could be your solution.

This free Product Description Writer workflow for n8n uses a multi-agent AI system to turn your product list into conversion-focused, SEO-ready copy. It analyzes your product images, identifies key features, and writes optimized titles and descriptions for platforms like Shopify and Google Shopping. It can process your entire catalog in minutes, saving you countless hours of manual work.

This workflow is perfect for:
* 🛒 Shopify stores
* 🛒 Etsy sellers
* 🛒 Product managers
* 🛒 Digital marketers
* 🛒 Anyone who hates writing product copy manually!

***

### How it works

This workflow automates the entire product description process in a few high-level steps:
1.  **Reads Your Products**: The workflow starts by reading product data from your specified Google Sheet, including the product name, an image URL, and optional fields like brand voice or target market.
2.  **Analyzes Product Images**: It downloads each product image and uses an AI vision model (GPT-4o-mini) to perform a detailed visual analysis, extracting objective information like materials, colors, features, and structure.
3.  **Writes Optimized Copy**: The visual analysis and your original data are passed to two specialized AI agents. The first drafts a Shopify-optimized title and description, while the second refines it and generates additional SEO-focused copy for Google Merchant Center.
4.  **Updates Your Spreadsheet**: The final, optimized product titles and descriptions for both Shopify and Google are automatically written back to the original Google Sheet.

### Set up steps

Setting up this workflow takes only a few minutes. You will need to configure credentials for the following services:
* **Google Sheets**: To allow the workflow to read your product list and write back the results.
* **OpenAI**: To power the AI agents that analyze images and generate the copy.

Detailed instructions and customization tips are included in the sticky notes inside the workflow itself.

---
## Benefits
- **Automated Vision-Based Copywriting**: Reduces manual description writing time.
- **Multi-Channel Ready**: Outputs are optimized for both Shopify and Google Merchant Center standards.
- **Brand Alignment**: Uses optional user-provided draft descriptions and brand voice to maintain brand tone.
- **SEO and Conversion Focus**: Titles and descriptions are optimized for both search engines and consumer engagement.
- **Image-Centric Accuracy**: Uses actual product images for accurate attribute extraction, minimizing errors from missing or vague text data.
---
## Tips & Customization
- To adjust brand voice or tone, modify the **system prompts** in the Shopify and GMC AI agents.
- To extend the workflow for scheduled runs, add a **cron trigger** or a Google Sheets "status column" filter.
- For QA/debugging, consider adding logging nodes to Slack or Discord, or export AI outputs to a review sheet before updating the main sheet.
- To improve Shopify or GMC field mappings, edit the final Google Sheets update node's column settings.
- For speed optimization, the batch size in the **Loop Over Items** node can be adjusted, but be mindful of API rate limits.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Schedule Trigger, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
