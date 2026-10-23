# ⚡ Submit home inventory images via web form to a property workflow

> ⚡ **38 views** · ⚡ [Personal Productivity](../)

## Description

## What it does
This provides a web form for use with my [personal property inventory workflow](https://creators.n8n.io/workflows/15263), allowing you to upload image(s) and an optional description with a simple web interface.

## How it works
1. Displays web form allowing you upload image(s) and an optional description
2. Resizes images and converts to webp format
3. Posts image(s) and description to webhook of the [personal property inventory workflow](https://creators.n8n.io/workflows/15263).

## Requirements
- A running [personal property inventory workflow](https://creators.n8n.io/workflows/15263).
  
## How to use
- Update the HTTP Request node's URL to point to your [personal property inventory workflow](https://creators.n8n.io/workflows/15263).
- Set the HTTP Request node's authentication to match that of the webhook of the [personal property inventory workflow](https://creators.n8n.io/workflows/15263).

## 🔗 Nodes Used

Edit Image, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
