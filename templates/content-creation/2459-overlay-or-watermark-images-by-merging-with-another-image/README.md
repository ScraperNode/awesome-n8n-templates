# 🎬 Overlay or watermark images by merging with another image

> ⚡ **6,865 views** · 🎬 [Content Creation & Video](../)

## Description

## Instructions

This automation *overlays* a `background` image with another image, making it easy to add watermarks or logos.

You can use this automation to **watermark** your images by overlaying them with a transparent version of your logo. If you'd like to **place your logo in a specific corner**, feel free to _adjust the position_ of the overlay image in the code node.

## How it Works

1. Both images are downloaded, so we can process binary files (you can modify the source, tho.)
2. We extract metadata, focusing on the dimensions of each image.
3. The position of the overlay image is calculated (default: dead center of the background image).
4. The two images are *composited* together.

## Limitations and Optimisation Opportunities

1. The overlay image must be the same size or smaller than the background image for proper alignment.
2. The overlay image does not automatically scale to match the proportions of the background image.

![Image](https://cloud.let-the-work-flow.com/logo-64.png)  
Enjoy the workflow! ❤️  
[let the work flow](https://let-the-work-flow.com) — Workflow Automation & Development

## 🔗 Nodes Used

Edit Image, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
