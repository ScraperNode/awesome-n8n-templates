# 🎬 Generate and approve UGC ad videos with OpenRouter, Fal, Replicate, and Discord

> ⚡ **65 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a UGC video request via an n8n form, analyzes the uploaded product image with OpenRouter, generates image/video prompts, and posts them to Discord for human approval. Approved prompts trigger Replicate (minimax/video-01) video generation and the job is logged to an n8n Data Table.

## How it works
1. Receives a submission from an n8n Form with a product image, UGC prompt, and selected video style.
2. Sends the image and prompt to OpenRouter for product-detail extraction, then uses an OpenRouter chat model to generate structured UGC image and video prompts plus negative constraints.
3. Parses the AI response into clean JSON fields and calls the Fal API (fal-ai/nano-banana-2/edit) before posting the prompt preview to Discord.
4. Collects a reviewer decision in a second n8n Form and either starts Replicate video generation, regenerates the prompts using the reviewer feedback, or stops on rejection.
5. If approved, submits the video prompt to Replicate (minimax/video-01), waits, polls the prediction status until it succeeds, and posts the resulting video URL to Discord.
6. Sets final job metadata, saves a job record to an n8n Data Table, and sends a completion notification to Discord.

## Setup
1. Add OpenRouter credentials (API key/OAuth as configured) for both the product analysis request and the OpenRouter chat model used by the AI agent.
2. Add an HTTP Header Auth credential for Fal and ensure the endpoint https://fal.run/fal-ai/nano-banana-2/edit is accessible for image editing/generation.
3. Add an HTTP Header Auth credential for Replicate and confirm access to the minimax/video-01 model.
4. Create and connect a Discord webhook credential and set it to the channel where you want previews, approvals, and final results posted.
5. Create/select the n8n Data Table used for job logging (ugc_jobs) and adjust the table/column mapping if you want additional fields recorded.

## 🔗 Nodes Used

HTTP Request, Discord, AI Agent, n8n Form Trigger, n8n Form, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
