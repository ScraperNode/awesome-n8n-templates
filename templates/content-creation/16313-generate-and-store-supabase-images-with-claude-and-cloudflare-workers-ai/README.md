# 🎬 Generate and store Supabase images with Claude and Cloudflare Workers AI

> ⚡ **14 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow listens for new rows in a Supabase `image_jobs` table, uses Anthropic Claude to expand each prompt, generates an image with Cloudflare Workers AI (FLUX), uploads the image to Supabase Storage, and writes the public image URL back to the original Supabase record.

## How it works
1. Receives a webhook call from a Supabase Database Webhook when a new row is inserted into the `image_jobs` table.
2. Extracts the inserted record ID and `prompt` value from the webhook payload and stops early with a JSON response if the prompt is empty.
3. Sends the prompt idea to Anthropic Claude to produce a single, detailed image-generation prompt.
4. Calls Cloudflare Workers AI (FLUX) to generate an image from the enhanced prompt.
5. Converts the returned base64 image into binary data and uploads it to a public Supabase Storage bucket using the job ID as the filename.
6. Builds the public Supabase Storage URL, updates the Supabase row with `status = done` and `image_url`, and returns the URL in the webhook response.

## Setup
1. Create the `image_jobs` table in Supabase (for example by running the provided `new-workflows-setup.sql`) and ensure it includes fields like `prompt`, `status`, `image_url`, and `error_message`.
2. Create a Supabase Storage bucket named `generated-images` (or update the bucket name in the workflow) and enable Public access so the public URL works.
3. Add credentials for Supabase (project URL/host and `service_role` key), Anthropic Claude (HTTP header auth `x-api-key`), and Cloudflare Workers AI (HTTP header auth `Authorization: Bearer <token>`) and replace the placeholders in the workflow.
4. In the Config step, set `supabaseUrl` to your Supabase project URL and confirm the bucket name and Claude model value.
5. In Cloudflare, set your account ID in the Workers AI request URL, then create a Supabase Database Webhook for `image_jobs` inserts pointing to your n8n webhook URL `/webhook/generate-image`.

## 🔗 Nodes Used

HTTP Request, Webhook, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
