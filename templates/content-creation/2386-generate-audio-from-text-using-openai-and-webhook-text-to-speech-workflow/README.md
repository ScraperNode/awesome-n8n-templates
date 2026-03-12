# 🎬 Generate audio from text using OpenAI and Webhook | Text to speech workflow

> ⚡ **12,189 views** · 🎬 [Content Creation & Video](../)

## Description

**Who is this for?**
This workflow is ideal for developers, content creators, or customer support teams looking to automate text-to-speech conversion using OpenAI.

**What problem does this solve?**
It automates the process of converting text inputs into speech, reducing manual effort and enhancing productivity.

**What this workflow does:**
This workflow triggers when a text input is received via a webhook, converts it into audio using the OpenAI API, and sends the generated speech back through a webhook response.

**Setup:**

1. Ensure you have an OpenAI API key (you can get it from OpenAI website).
2. Set up the webhook URL and parameters.
3. Configure the OpenAI node with your API key (Create New Credentials).
4. set up the `responde to webhook` node.

## 🔗 Nodes Used

Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
