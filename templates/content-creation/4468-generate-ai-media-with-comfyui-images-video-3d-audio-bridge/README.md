# 🎬 Generate AI media with ComfyUI: Images, video, 3D & audio bridge

> ⚡ **3,229 views** · 🎬 [Content Creation & Video](../)

## Description

Unlock low-cost, high-control generative media workflows directly from n8n by integrating with ComfyUI. Ideal for indie creators, AI developers, or small teams seeking scalable media automation—from images to video, 3D, and even audio—this workflow makes generative content production more flexible and programmable than ever.

## How it works

* Accept a media generation request via an n8n trigger (HTTP webhook, schedule, etc.)
* Parse input and inject it into a ComfyUI payload
* Send the payload to your local or remote ComfyUI instance
* Wait for and collect the output media files (e.g., images, videos, 3D models, or audio)
* Send the result to a destination like email, Telegram, S3, or upload it back to a CMS or client app

✨ The format and complexity of the media are entirely dependent on the ComfyUI workflow you use, meaning this n8n integration is as powerful and creative as your ComfyUI setups.

## Set up steps

1. Set up and run a local or remote ComfyUI instance with API access enabled
2. Load or create a ComfyUI workflow that suits your content goals (image gen, video stitching, etc.)
3. Open this n8n template and set your ComfyUI server URL, input template, and output handling preferences
4. Connect additional services for input (e.g., Airtable, HTTP) and output (e.g., Notion, Slack, S3) depending on your use case

## 🔗 Nodes Used

HTTP Request, Discord, Execute Sub-workflow, Execute Workflow Trigger, Read/Write Files from Disk, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
