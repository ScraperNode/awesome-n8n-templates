# 🎬 AI image generator from text built on fal.ai

> ⚡ **27,273 views** · 🎬 [Content Creation & Video](../)

## Description

## Who this template is for

This template is for developers, content creators, or application builders who want to integrate an AI-powered text-to-image generation service into their applications or systems via an API endpoint.

## Use case

Creating a secure API endpoint that converts text prompts into AI-generated images, with built-in content moderation to prevent inappropriate content generation. This can be used for creative applications, content creation tools, prototyping interfaces, or any system that needs on-demand image generation.

## How this workflow works

1. Receives text prompt through a webhook endpoint
2. Filters the prompt for inappropriate content using AI moderation
3. Submits valid prompts to the Fal.ai Flux image generation service
4. Polls for completion status and retrieves the generated image when ready
5. Returns the image results in a structured JSON format to the client

## Set up steps

1. Create a Fal.ai account and obtain API credentials
2. Configure the HTTP Header Auth credentials with your Fal.ai API key
3. Set up an OpenAI API key for the content moderation component
4. Deploy the workflow and note the webhook URL for your API endpoint
5. Test the endpoint by sending a POST request with a JSON body containing a "prompt" field

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
