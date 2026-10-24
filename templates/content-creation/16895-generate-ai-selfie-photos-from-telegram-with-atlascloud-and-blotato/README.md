# 🎬 Generate AI selfie photos from Telegram with AtlasCloud and Blotato

> ⚡ **38 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow listens for a two-photo Telegram album, uploads both images to Blotato for public hosting, sends them with a caption prompt to AtlasCloud (Nano Banana 2 Lite) to generate an edited “AI selfie,” then posts the result to Instagram and Facebook and replies with the image on Telegram.

## How it works
1. Triggers when a Telegram bot receives a message and buffers album uploads until it has two photos plus the caption text.
2. Stores the caption as the edit prompt and sets generation options such as model, aspect ratio, output format, and poll interval.
3. Downloads each photo from Telegram and uploads both to Blotato to obtain stable public image URLs.
4. Sends the two hosted image URLs and the prompt to the AtlasCloud generateImage API using the Nano Banana 2 Lite edit model.
5. Waits and polls the AtlasCloud prediction status until it is marked completed or succeeded.
6. Extracts the generated image URL, publishes it to Instagram and Facebook via Blotato, and sends the generated photo back to the originating Telegram chat.

## Setup
1. Create a Telegram bot and add your Telegram API credentials to the Telegram Trigger and Telegram nodes.
2. Add an AtlasCloud API key as an HTTP Header Auth credential and select it on both AtlasCloud HTTP Request steps.
3. Install/enable the Blotato community node, add your Blotato API credentials, and select the target Instagram account and Facebook Page in the publish steps.
4. Update the configuration values (model, aspect ratio, output format, and poll wait time) to match your preferred output.
5. Activate the workflow and send a Telegram album containing exactly two photos with a caption describing the desired composition.

## Additional info
## Generate AI selfie photos with a public figure from Telegram using Nano Banana 2 Lite

# 📥 [Open full documentation on Notion](https://automatisation.notion.site/Generate-AI-selfie-photos-with-a-public-figure-from-Telegram-Nano-Banana-2-Lite-3963d6550fd9816a822ac698aa31a6c6)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
