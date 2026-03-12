# 🎬 Generate consistent styled images from references with Google Gemini and Sheets

> ⚡ **137 views** · 🎬 [Content Creation & Video](../)

## Description

## Who’s it for

This workflow is designed for creators, designers, and automation builders who need to generate **visually consistent images at scale**.  
It is ideal for teams producing branded visuals, social media assets, or AI-generated images where preserving a recognizable visual style is important.

If you already manage prompts and image references in Google Sheets and want a repeatable, automated image generation pipeline, this template is a good fit.

## How it works / What it does

The workflow is triggered via a webhook and reads pending image generation tasks from a Google Sheet.  
For each row, it downloads a reference image and analyzes its visual characteristics using **Google Gemini**, including color palette, composition, and overall artistic style.

Using this analysis, Gemini generates a new image that follows the same visual style while applying your provided prompt.  
The generated image is uploaded to Google Drive, and the original Google Sheet is updated with the result or an error message.

Real-time status updates are sent during execution using **ntfy.sh** notifications.

## How to set up

1. Create a Google Sheet with columns such as `gorsel_id`, `ana_prompt`, `stil_prompt`, `referans_url`, and `durum`.
2. Connect credentials for Google Sheets, Google Drive, and Google Gemini.
3. Replace the Document ID and Folder ID values in the corresponding nodes.
4. Update the ntfy topic name with your own unique topic.
5. Activate the workflow and trigger it using the webhook URL.

## Requirements

- Google Sheets account  
- Google Drive account  
- Google Gemini (PaLM) API credentials  
- Self-hosted n8n instance  

&gt; This workflow uses community nodes and is supported on self-hosted n8n instances only.

## How to customize the workflow

You can adjust the **Wait** nodes to better align with your API rate limits.  
To control how closely the generated image matches the reference style, modify the instructions in the **Analyze – Gemini – Visual Style** node.

You can also extend the workflow with additional approval steps, storage locations, or notification channels without changing the core logic.


---

### 🧑‍💻 Creator Information
Developed by: Adem Tasin
🌐 Website: [ademtasin.com](ademtasin.com)
💼 LinkedIn: [ademtasin](https://www.linkedin.com/in/adem-tasin/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
