# 🎬 Create and publish AI recipe infographics with Gemini, Nanobanana Pro and Blotato

> ⚡ **166 views** · 🎬 [Content Creation & Video](../)

## Description

## Overview

This workflow automatically creates and publishes AI-generated recipe infographics using n8n and AI agents.

By entering a single dish name, the system researches the recipe, generates structured cooking content, designs a visual infographic using Nanobanana Pro, uploads the image to Blotato’s media server, and publishes the post to Facebook using Blotato as the posting service.

The workflow is designed for food content creators, social media managers, and automation builders who want to consistently produce and publish high-quality recipe infographics without manual research, design, or posting.

---

## What can this workflow do?

- Accept a dish name as the only user input  
- Automatically research ingredients, cooking steps, and timing details  
- Generate social-ready captions optimized for engagement  
- Create clean and readable recipe infographics using Nanobanana Pro  
- Monitor image generation status and handle retries  
- Upload generated images to Blotato’s media server  
- Publish recipe posts to Facebook via Blotato automatically  

This workflow reduces manual work while keeping recipe content production structured, scalable, and repeatable.

---

## How it works

The workflow starts with a simple input form where the user submits a dish name. This dish name is used as the single source of truth for the entire automation.

An AI research agent analyzes the dish and generates structured recipe data, including ingredients, preparation steps, and cooking time. This data is normalized so it can be reused reliably in later steps.

Next, an AI agent generates a concise, social-friendly caption optimized for food content and Facebook engagement. In parallel, another AI agent converts the structured recipe data into a detailed infographic prompt.

This prompt is sent to Nanobanana Pro to generate a complete recipe infographic image. The workflow waits for the rendering process to finish and checks the generation status to ensure only completed images continue.

Once the infographic is ready, the image is uploaded to Blotato’s media server. Finally, the workflow calls Blotato’s posting API to publish the post to Facebook using the Facebook account already connected inside Blotato.

---

## Setup steps

1. Connect an AI model (Gemini or compatible LLM) for recipe research, caption generation, and prompt creation  
2. Configure the input form to accept a dish name  
3. Set up Nanobanana Pro as the image generation engine for recipe infographics  
4. Connect your Blotato account and ensure Facebook is logged in inside Blotato  
5. Configure the Blotato media upload node  
6. Configure the Blotato post creation node for Facebook publishing  

Once configured, the workflow runs end to end with no manual intervention beyond entering a dish name.

---
## Documentation

For a full walkthrough, prompt optimization tips, and scaling strategies for food content automation, watch the detailed tutorial on [YouTube](https://youtu.be/BipWKSrMoKM).

## 🔗 Nodes Used

HTTP Request, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
