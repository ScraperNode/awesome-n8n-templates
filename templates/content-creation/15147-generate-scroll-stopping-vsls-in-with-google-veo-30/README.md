# 🎬 Generate Scroll-Stopping VSLs in with Google Veo 3.0

> ⚡ **16 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

**1. Gather product info** – Takes product details (name, audience, tone, CTA, script) and product image URL from a form

**2. Describe the product** – Uses GPT-4o to analyze the product image and generate a detailed visual description

**3. Generate VSL prompt** – Uses GPT-4o to consolidate the script and product description into a single 120–180 word Veo 3 prompt with centered framing, action cues, and dialogue formatting

**4. Create video** – Generates an 8-second AI video with Veo 3.0 and uploads to GCS

**5. Add captions** – Uses Creatomate to overlay captions onto the video

**6. Deliver** – Downloads the final video and sends it to Telegram

---

## Set up steps

1. **API Keys** – Set up accounts for Google Cloud (Veo 3.0 + GCS), OpenAI, and Creatomate

2. **Credentials in n8n** – Add each API key as a credential in your n8n instance

3. **Configure variables** – Update the `SET1` node with your Google Cloud `PROJECT_ID` and `CLIENT_EMAIL`

4. **Enter product data** – Fill in the `Form` node with your product name, target audience, tone, call to action, and script

5. **Test** – Execute the workflow to generate a VSL for your product

## 🔗 Nodes Used

HTTP Request, Telegram, Google Cloud Storage, Convert to File, OpenAI, JWT

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
