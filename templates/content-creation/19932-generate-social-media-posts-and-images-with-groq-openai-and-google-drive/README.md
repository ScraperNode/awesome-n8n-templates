# 🎬 Generate social media posts and images with Groq, OpenAI and Google Drive

> ⚡ **121 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects an image idea via an n8n Form, uses Groq to generate an optimized image prompt, creates an image with OpenAI, uploads it to Google Drive, then generates Instagram/LinkedIn/X copy and returns an HTML page showing the posts and image link.

## How it works
1. Receives an image idea and a target resolution from an n8n Form submission.
2. Uses Groq (openai/gpt-oss-120b) to turn the user input into a structured image-generation prompt.
3. Generates an image with OpenAI (gpt-image-1-mini) using the prompt and selected resolution.
4. Uploads the generated image to a specified Google Drive folder and captures a shareable link.
5. Uses Groq to generate platform-specific posts for Instagram, LinkedIn, and X (Twitter) based on the image prompt.
6. Uses Groq to convert the social posts plus the Google Drive image link into a structured HTML page.
7. Displays the generated HTML as the form completion response.

## Setup
1. Add Groq API credentials for the prompt generator, post generator, and HTML generator steps.
2. Add OpenAI API credentials (or enable the managed AI gateway) for the image generation step.
3. Connect Google Drive OAuth2 credentials and select the target Drive and folder ID where images are uploaded.
4. Review the Form fields (input and resolution options) and update the Google Drive folder selection if you want to store images elsewhere.

## 🔗 Nodes Used

Google Drive, AI Agent, Structured Output Parser, n8n Form Trigger, OpenAI, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
