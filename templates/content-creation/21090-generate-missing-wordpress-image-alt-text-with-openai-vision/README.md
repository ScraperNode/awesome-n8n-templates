# 🎬 Generate missing WordPress image alt text with OpenAI vision

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually or every Monday at 9am, finds WordPress media library images missing alt text, generates concise descriptions with the OpenAI Chat Completions API using vision, validates the results, and optionally writes the alt text back to WordPress via the REST API.

## How it works
1. Runs either manually or on a weekly schedule (Monday at 9am).
2. Fetches the most recent image attachments from the WordPress REST API media endpoint.
3. Filters to images with no existing alt text, limits the run to supported formats (JPEG/PNG/WebP), and selects a suitable image URL for each item.
4. Sends each image URL (and optional title context) to the OpenAI Chat Completions API to generate alt text in the configured language and maximum length.
5. Validates and normalizes the returned alt text (JSON parsing, removes “Image of…”-style prefixes, enforces max length) and marks items as ready or skipped.
6. If dry run is enabled, outputs the proposed alt text; otherwise, updates the WordPress media item’s `alt_text` field via the WordPress REST API.

## Setup
1. Create a WordPress Application Password for a user with permission to edit media, and add it to an n8n HTTP Basic Auth credential used by the WordPress API requests.
2. Add an OpenAI API credential for the OpenAI Chat Completions request.
3. In the Config step, set your WordPress `siteUrl`, choose the OpenAI model, language, limits (images to scan and max per run), and the `maxAltLength` value.
4. Run once with `dryRun` set to true to review proposed alt text, then set `dryRun` to false to enable updates.
5. Ensure your WordPress image URLs are publicly accessible so OpenAI can fetch the images from `source_url`.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
