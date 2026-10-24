# 🎬 Generate AI images from a form for free with Veida (no API key)

> ⚡ **30 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Turn a text prompt into a finished image inside n8n, with no API key and no account. The workflow calls the free anonymous tier of Veida's [free AI image generator](https://veida.ai/image?utm_source=n8n&utm_medium=template) and returns the image as binary data you can pipe into Drive, Slack, Notion or S3.

## How it works
1. 1. **Image request form** collects a prompt and an aspect ratio (1:1, 16:9, 9:16, 4:3).
2. **Prepare request** mints a random anonymous client id for this execution. The free tier is metered per client id, so each run stays independent.
3. **Start generation** posts the prompt to the generation endpoint behind the [ChatGPT image generator](https://veida.ai/image/chatgpt-image-generator?utm_source=n8n&utm_medium=template) and gets a task id back.
4. **Free quota used up?** branches on the API's `wall: true` answer, so an exhausted quota returns a readable message instead of a silent failure.
5. **Wait 20s -> Check status -> Image ready?** polls until the job reports `success`, loops while it is still processing, and reports the reason if the model rejects the prompt.
6. **Download image** fetches the result as a binary file on the `image` property.

Measured end to end: 40-120 seconds per image.

## Setup
1. There is nothing to configure. Import the JSON, click **Execute workflow**, open the form URL, type a prompt and submit. No credentials, no environment variables, no billing setup - the two HTTP Request nodes already point at the public endpoints used by [Veida](https://veida.ai/?utm_source=n8n&utm_medium=template).

If you self-host behind a proxy, allow outbound requests to `veida.ai` and `cdn.veida.ai`.

## Requirements
- - n8n 1.60 or newer (Form Trigger v2.2, Wait, Code, IF, HTTP Request - all core nodes).
- Outbound HTTPS access to `veida.ai` and `cdn.veida.ai`.
- No API key and no account. The anonymous allowance is small and also capped per IP per day; see [what the free tier includes](https://veida.ai/pricing?utm_source=n8n&utm_medium=template) before you build a high-volume automation on it.

## Customization
- - **Change the trigger.** Swap the form for Schedule, RSS, Airtable, Gmail or a Webhook to generate blog covers, social posts or product mockups without a human in the loop.
- **Change the prompt.** The prompt is a plain string in the *Prepare request* node, so you can build it from a spreadsheet row or an LLM node. Ready-made prompts live in the [AI image prompt library](https://veida.ai/image/prompts?utm_source=n8n&utm_medium=template).
- **Change the model.** The `model` field in *Start generation* selects the engine. Signed-in accounts can point it at heavier models such as [GPT Image 2](https://veida.ai/image/gpt-image-2?utm_source=n8n&utm_medium=template) instead of the free one.
- **Change the destination.** The last node outputs binary data, so any storage or messaging node connects straight to it.

## Additional info
Free-tier output is 1K, watermarked, one image per run. Signing in raises the allowance, removes the watermark, and unlocks the editing models - including [Nano Banana 2 Lite image editor](https://veida.ai/image/nano-banana-2-lite?utm_source=n8n&utm_medium=template), which takes an input image rather than only a prompt. There are [example images](https://veida.ai/showcases?utm_source=n8n&utm_medium=template) if you want to see the output quality before importing.

The workflow does not store anything: the anonymous client id is generated per execution and thrown away, and nothing is written back to Veida.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
