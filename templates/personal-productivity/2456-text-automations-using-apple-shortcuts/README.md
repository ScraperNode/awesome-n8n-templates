# ⚡ Text automations using Apple Shortcuts

> ⚡ **5,199 views** · ⚡ [Personal Productivity](../)

## Description

## Overview
- This workflow answers user requests sent via Mac Shortcuts
- Several Shortcuts call the same webhook, with a query and a type of query
- Types of query are:
  - translate to english
  - translate to spanish
  - correct grammar (without changing the actual content)
  - make content shorter
  - make content longer

## How it works
- Select a text you are writing
- Launch the shortcut
- The text is sent to the webhook
- Depending on the type of request, a different prompt is used
- Each request is sent to an OpenAI node
- The workflow responds to the request with the response from GPT
- Shortcut replace the selected text with the new one

For a demo and setup instructions:
[![Check the explanations](https://cdn.loom.com/sessions/thumbnails/c5b657568af64bb1b50fa8e8a91c45d1-1db3990a618986c9-full-play.gif)](https://www.loom.com/share/c5b657568af64bb1b50fa8e8a91c45d1?sid=a406be73-55eb-4754-9f51-9ddf49b22d69)

## How to use it
- Activate the workflow
- [Download this Shortcut template](https://drive.usercontent.google.com/u/0/uc?id=16zs5iJX7KeX_4e0SoV49_KfbU7-EF0NE&export=download)
- Install the shortcut
- In step 2 of the shortcut, change the url of the Webhook
- In Shortcut details, "add Keyboard Shortcut" with the key you want to use to launch the shortcut
- Go to settings, advanced, check "Allow running scripts"
- You are ready to use the shortcut. Select a text and hit the keyboard shortcut you just defined

## 🔗 Nodes Used

Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
