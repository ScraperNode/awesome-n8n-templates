# 📁 Remove backgrounds and upscale product photos in bulk with Apify and Google Sheets

> ⚡ **0 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow reads product image URLs from Google Sheets, removes their backgrounds and upscales the cutouts in bulk using Apify actors, then writes the processed image URL, dimensions, and status back to the same sheet.

## How it works
1. Starts manually and reads rows from a Google Sheets spreadsheet containing an `image_url` column.
2. Deduplicates the image URLs and sends them as a single batch to Apify’s Background Remover API actor to generate transparent PNG cutouts.
3. Maps background-removal results back to the original sheet row numbers and collects only successful cutout URLs for further processing.
4. If any cutouts succeeded, sends the cutout URLs to Apify’s Image Upscaler API actor to upscale them 2× and return final image URLs and dimensions.
5. Combines upscale results and any failures, then updates the matching rows in Google Sheets with `result_url`, `width`, `height`, `status`, and `error`.

## Setup
1. Create a Google Sheet with columns `image_url`, `result_url`, `width`, `height`, `status`, and `error`, and populate `image_url` with publicly accessible image URLs.
2. Add Google Sheets credentials in n8n and select the target spreadsheet and sheet in both the read and update steps.
3. Add an Apify API token credential and connect it to both Apify actor steps (Background Remover Batch and Image Upscaler Batch).
4. (Optional) Adjust the upscaling `scale` value (for example, change from `2` to `4`) and the Apify maximum charge limits to match your quality and cost requirements.

## Requirements
- An Apify account (pay per image, no subscription to the actors) and a Google account.

## Customization
- Replace Google Sheets with Airtable, Google Drive or a webhook; remove the upscaling step if you only need cutouts.

## Additional info
Failed images are marked in the sheet with the reason and are never charged. Each Apify node has a maximum cost per run of $5 that you can raise.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
