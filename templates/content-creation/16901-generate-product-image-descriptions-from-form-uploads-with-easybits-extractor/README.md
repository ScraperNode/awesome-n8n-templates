# 🎬 Generate product image descriptions from form uploads with Easybits Extractor

> ⚡ **14 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects product images through an n8n Form, sends each image to the easybits Extractor to generate a product description, then returns a styled results page with thumbnails and copy-to-clipboard buttons for each generated description.

## How it works
1. Receives a submission from an n8n Form where the user uploads one or more JPG/PNG product images and optionally enters a product name.
2. Splits the uploaded files into one item per image, renames the binary field to `data`, and creates a base64 data URI for showing thumbnails in the final page.
3. Processes images one at a time in a loop to ensure each image is sent as a separate request.
4. Sends each image to the easybits Extractor and reads back the structured response (including a `description`, and potentially `product_type`).
5. Combines all per-image results into a single HTML response, adding a fallback message when the Extractor returns an empty/`UNCLEAR` description and adding a copy button for successful descriptions.
6. Displays the combined HTML on the n8n Form completion screen so the user can view and copy each description.

## Setup
1. Install and enable the easybits Extractor community node (`@easybits/n8n-nodes-extractor`) if you are self-hosting n8n.
2. Create an Extractor pipeline in easybits Extractor and add the required easybits credentials (API key and Pipeline ID) to the Extractor node.
3. Activate the workflow and open the generated n8n Form URL to upload product images and view the generated descriptions.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
