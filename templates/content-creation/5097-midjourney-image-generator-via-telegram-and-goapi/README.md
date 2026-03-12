# 🎬 Midjourney Image Generator via Telegram and GoAPI

> ⚡ **2,792 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow connects Telegram to Midjourney through GoAPI, enabling automated image generation and upscaling directly from chat.

### How it Works
* **Telegram Command Trigger**: The workflow activates upon receiving a message in Telegram.
* **Image Generation**: Your prompt is sent to GoAPI, which then generates an image using Midjourney.
* **Upscale Selection**: You receive the generated image and select an option for upscaling.
* **Image Upscaling**: The selected image is upscaled via GoAPI.
* **Notifications and Logs**: Progress updates are sent to Telegram, and all images are logged in Discord.

### Set Up Steps
1.  Create a Telegram Bot and update credentials in Telegram nodes.
2.  Create a GoAPI account, obtain an API key, and update the three HTTP nodes: "Get Generation Task," "Upscale," and "Get Upscale Task".
3.  (Optional) Configure the Discord node for logging if desired.

Setup takes approximately 10-15 minutes. Detailed descriptions are available in sticky notes within the workflow.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Discord

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
