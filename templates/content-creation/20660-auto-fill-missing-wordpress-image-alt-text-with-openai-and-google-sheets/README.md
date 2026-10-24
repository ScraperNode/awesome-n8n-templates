# 🎬 Auto-fill missing WordPress image alt text with OpenAI and Google Sheets

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow scans your WordPress media library for images missing alt text, generates context-aware alt text with OpenAI vision using the attached post/page title and excerpt, and logs suggestions to Google Sheets for review or applies them to WordPress automatically.

## How it works
1. Runs daily (or manually) to generate alt text suggestions, and runs hourly to apply any approved suggestions from Google Sheets.
2. Reads the existing Google Sheets log and fetches images from the WordPress REST API media endpoint page by page.
3. Keeps only JPEG/PNG/WebP/GIF images with empty alt text, skips media IDs already present in the log, and limits the batch size to the configured maximum.
4. Retrieves the title and excerpt of the WordPress post the image is attached to (falling back to pages), or uses only the media metadata when the image is unattached.
5. Downloads the medium-sized image and sends it with the context to an OpenAI vision chat model to return structured alt text, a decorative flag, and a confidence score.
6. In review mode, appends a pending row to Google Sheets, or in auto mode, updates the image alt text in WordPress and logs the result in Google Sheets as applied or decorative.
7. On the hourly run, reads Google Sheets rows with status approved, writes the (optionally edited) alt text back to WordPress for each media item, and updates the row status to applied.

## Setup
1. Create a WordPress Application Password and configure a WordPress API credential in n8n for your site URL, username, and application password.
2. Create a Google Sheet with a Log tab and the expected columns, then connect a Google Sheets credential and set the sheet ID and tab name in the workflow configuration.
3. Add an OpenAI credential (or replace the model with another vision-capable chat model) and ensure the selected model supports image input.
4. Update the Config values for wp_base_url (no trailing slash), mode (review or auto), alt_language, max_per_run, max_alt_length, and your target sheet settings before activating.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
