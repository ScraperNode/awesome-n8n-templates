# 🎬 Create UGC ad videos from Telegram briefs with OpenAI, Perplexity, and Kie AI

> ⚡ **32 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a product brief and photo via Telegram, uploads the image to imgbb, analyzes it with OpenAI and Perplexity, generates a multi-shot storyboard with OpenAI, then uses Kie.ai (Nano Banana Pro and Sora 2 Pro Storyboard) to render a video and returns it to Telegram.

## How it works
1. Triggers when a Telegram user sends a message and presents a form to collect brand details, product info, a product photo, video length, scene count, orientation, concept prompt, and spoken language.
2. Uploads the submitted product photo to imgbb to get a public image URL, then sends a confirmation summary back to the user on Telegram.
3. Uses OpenAI (GPT-4o vision) to describe the product photo and Perplexity to research the product and target audience.
4. Uses OpenAI (GPT-5.1) to generate a Sora-style storyboard with per-shot English text-to-video prompts, durations, and a separate first-frame text-to-image prompt, then normalizes and cleans the output.
5. Sends the first-frame prompt and product image URL to Kie.ai Nano Banana Pro to generate an opening image, polling Kie.ai until the image job succeeds or reporting errors to Telegram.
6. Builds a Kie.ai Sora 2 Pro Storyboard payload using the opening image, aspect ratio, total duration, and shot list, then creates the video job and polls Kie.ai until it completes or reports errors.
7. Downloads the resulting MP4 from Kie.ai and sends the video file and a clickable video link back to the user on Telegram.

## Setup
1. Create a Telegram bot with @BotFather and add Telegram credentials in n8n for the Telegram Trigger and Telegram send nodes.
2. Create an imgbb API key and replace the placeholder value in the imgbb upload request (the `key` query parameter).
3. Add OpenAI API credentials for GPT-4o image analysis and GPT-5.1 chat-based storyboard generation.
4. Add a Perplexity API key credential for the Perplexity research step.
5. Create a Kie.ai API key and configure an HTTP Header Auth credential (Authorization: Bearer <API_KEY>) for all Kie.ai HTTP Request nodes, and update the callback URL if your Kie.ai model requires a reachable endpoint.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
