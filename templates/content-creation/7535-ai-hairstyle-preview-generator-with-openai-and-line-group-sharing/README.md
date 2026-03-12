# 🎬 AI hairstyle preview generator with OpenAI and LINE group sharing

> ⚡ **468 views** · 🎬 [Content Creation & Video](../)

## Description

### Overview

This workflow takes an **image + instruction text** from an n8n Form, edits **only the hairstyle** while **keeping the face unchanged**, uploads the result to **Cloudinary**, and **pushes** the image to a designated **LINE group**. It’s designed for salons or creative teams that need quick, consistent “hair-only” edits and one-click sharing to a staff group.

### Key Features

* Accepts image and free-form instructions via **n8n Forms**
* Enforces **identity preservation**: face is not altered; **only the hairstyle** is modified
* Uses **OpenAI Image Edit** to generate the edited image
* Uploads the output to **Cloudinary** and returns a public URL
* Sends the final image to a **LINE group** via the **Push API** (no `replyToken` required)
* Optional safety: store the **groupId** once (via webhook) in n8n **Data Store** and reuse it, avoiding mis-sending to individuals

### Requirements

* OpenAI API key (Image Edit capable model)
* Cloudinary account with an **unsigned** `upload_preset`
* LINE Official Account (Messaging API enabled) and the bot **added to the target group** (to capture `groupId` once)
* n8n with **Forms** enabled and **Data Store** available

### Notes

* Replace placeholders like `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_UPLOAD_PRESET`, `LINE_CHANNEL_TOKEN`, and `LINE_GROUP_ID` with your values.

## 🔗 Nodes Used

HTTP Request, Webhook, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
