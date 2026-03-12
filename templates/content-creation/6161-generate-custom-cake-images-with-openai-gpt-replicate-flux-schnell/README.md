# 🎬 Generate custom cake images with OpenAI GPT & Replicate Flux Schnell

> ⚡ **749 views** · 🎬 [Content Creation & Video](../)

## Description

## Who’s it for
This template is designed for bakeries, event planners, and e-commerce platforms that want to automatically generate **custom cake designs**. It’s also ideal for marketers or digital creators who need personalized celebratory visuals for social media or email campaigns.

## How it works
This workflow converts simple user input (e.g., “Sarah’s Birthday”) into a creative cake design:
1. **Webhook:** Captures user input from the Bolt frontend form.
2. **OpenAI GPT:** Generates a detailed and creative cake design prompt.
3. **Replicate Flux Schnell:** Produces a unique cake image using the AI-generated prompt.
4. **HTTP Response:** Sends the final cake image back to the frontend.

## How to set up
1. Import this template into n8n.
2. Add your **OpenAI API Key** under n8n **Credentials** for the OpenAI Chat Model node.
3. Add your **Replicate API Token** as an **HTTP Header Auth credential** (do not hardcode it).
4. Update the **Webhook node** URL in the Bolt frontend form to send a `POST` request to n8n.
5. (Optional) Customize the OpenAI prompt in the Prompt Generator node to adjust cake style, colors, or decorations.

## Requirements
- n8n account (cloud or self-hosted).
- **OpenAI API Key** for prompt generation.
- **Replicate API Token** for AI image generation.
- A Bolt frontend or any form that can call the webhook endpoint.

## How to customize the workflow
- Replace "cake" with any product type (e.g., mugs, greeting cards, or T-shirts).
- Add a database node (Google Sheets or Supabase) to log user requests and images.
- Implement input moderation by adding an OpenAI moderation node before the prompt generation.
![Screenshot 20250723 at 09.53.44.png](fileId:1833)  [Frontend](https://calm-cendol-1a3ff2.netlify.app)

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
