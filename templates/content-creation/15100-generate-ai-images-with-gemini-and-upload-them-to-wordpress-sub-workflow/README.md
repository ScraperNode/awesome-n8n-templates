# 🎬 Generate AI images with Gemini and upload them to WordPress (sub-workflow)

> ⚡ **61 views** · 🎬 [Content Creation & Video](../)

## Description

## 🖼️ Generate AI Image with Gemini and Upload to WordPress
**Sub-workflow** — Called by a parent workflow to generate a photorealistic AI image from a text prompt and upload it directly to the WordPress Media Library.

### How it works
1. Receives a `query` string field via the Execute Workflow Trigger (passthrough mode).
2. Sends the query to **Google Gemini** to generate a professional, photorealistic image.
3. Uploads the resulting binary image to your **WordPress Media Library** via the WP REST API.
4. Returns `url`, `media_id`, and `alt` to the calling parent workflow.

### Setup
1. Connect your **Google Gemini (PaLM) API** credential to the **Gemini — Generate Image** node.
2. Connect your **WordPress API** credential to the **WP — Upload Image to Media Library** node.
3. Update the WordPress URL in that node to point to your site: `https://your-site.com/wp-json/wp/v2/media`.
4. Call this workflow from a parent workflow, passing a JSON field named `query`.

### Customization
- Change the Gemini model in **Gemini — Generate Image** to adjust image quality or style.
- Edit the prompt prefix in the same node to change the default photorealistic tone.
- The filename in the `Content-Disposition` header uses a timestamp — adjust as needed.

⚠️ **Community Node Notice:** This workflow uses `@n8n/n8n-nodes-langchain.googleGemini`, a LangChain community node. It requires a **self-hosted n8n instance** with the LangChain add-on installed.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
