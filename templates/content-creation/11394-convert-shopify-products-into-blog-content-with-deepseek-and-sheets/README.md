# 🎬 Convert Shopify products into Blog content with DeepSeek and Sheets

> ⚡ **837 views** · 🎬 [Content Creation & Video](../)

## Description

[![Watch the video](https://img.youtube.com/vi/RCwFc57V6oo/maxresdefault.jpg)](https://www.youtube.com/watch?v=RCwFc57V6oo)

## **Overview**

Stop struggling with content creation for your e-commerce store. This workflow acts as your automated AI Content Marketer, instantly transforming your Shopify product details into high-quality, SEO-optimized blog posts. It handles everything from reading product data to writing the article and uploading it directly to your store as a draft.

#### What this workflow does

- Fetches Product Data: Automatically pulls product titles and descriptions directly from your Shopify store (configurable limit).
- Data Logging: Backs up the raw product data into Google Sheets for record-keeping before processing.
- AI SEO Writing: Uses a powerful LLM (via OpenRouter/DeepSeek) to write a complete, engaging blog post based on the product's features. It generates an SEO-friendly title and formats the body content in clean HTML (headings, bullet points, etc.).
- Smart Parsing: A custom Code node ensures the AI's output is strictly formatted as JSON, separating the Blog Title from the Blog Content to prevent errors.
- Auto-Drafting in Shopify: Uploads the generated article directly to your specific Shopify Blog ID as a "Draft" (so you can review it before publishing).
- Email Notification: Sends a confirmation email via Gmail to let you know your new blog posts are ready for review.

#### Setup Requirements
To run this workflow, you will need to set up credentials in n8n for the following services:

- Shopify Admin API: To fetch products and create articles. (You will need your Shop Name and an Access Token).
- OpenRouter (or OpenAI): To power the AI Agent. The template is configured for DeepSeek via OpenRouter, but can be swapped for OpenAI.
- Google Sheets: To log product data and generated blog content.
- Gmail: To send the completion notification.

#### How to use
- Configure Variables: Double-click the "Variables" node (Set node) at the start of the workflow. Enter your shop name (e.g., my-store from my-store.myshopify.com) and your blogId (found in the URL when viewing your blog in Shopify Admin).
- Connect Google Sheets: Open the Google Sheets nodes and map them to a sheet in your Drive. Ensure your sheet has columns for ID, Title, and Description.
- Select AI Model: In the Chat Model node, ensure your API key is connected (OpenRouter is used by default for cost-efficiency).
- Run: Execute the workflow. It will process your products and populate your Shopify Blog with new drafts automatically.

#### Video Tutorial
Watch the full setup guide here: [Guide](https://www.youtube.com/watch?v=RCwFc57V6oo)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Shopify, Gmail, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
