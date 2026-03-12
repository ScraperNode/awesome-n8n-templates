# 🎬 AI video generator with Google Veo3 API (Veo 3 fast)

> ⚡ **14,939 views** · 🎬 [Content Creation & Video](../)

## Description

## Overview
This workflow leverages the KIE. AI Veo3 model to generate AI videos from simple text descriptions.  Users interact via a form interface, inputting a prompt (e.g., a scene description), and the system automatically submits the request to the KIE. AI API, monitors the generation status in real time, and retrieves the final video output.  It's ideal for content creators, marketers, or developers exploring text-to-video AI creation, supporting intelligent video generation with minimal setup.


## Prerequisites
- A KIE. AI account and API key: Sign up at [KIE.AI](https://kie.ai) to obtain your free or paid API key.
- An active n8n instance (cloud or self-hosted) with HTTP Request and form submission capabilities.
- Basic knowledge of AI prompts for video generation to achieve optimal results.

## Setup Instructions
1.  **Obtain API Key**: Register at KIE. AI and generate your API key.  Store it securely—do not share it publicly.
2.  **Configure the Form**: In the "On Form Submission" node, ensure fields like "prompt" (for video description) and "api_key" are set up.  Example prompt: `"A serene mountain landscape at sunset with birds flying." `
3.  **Test the Workflow**:
- Click "Execute Workflow" in n8n.
- Access the generated form URL, submit your prompt and API key.
- The workflow will poll the API every 10 seconds until the video is ready, then display the results.
4.  **Handle Outputs**: The final node formats and displays the video file URL for download or embedding.

## Customization Tips
- **Enhance Prompts**: Include specifics like duration, style (e.g., realistic, animated), actions, and visual elements to improve AI video quality.

- **Keywords for SEO**: This template focuses on AI video generation, text-to-video models, Veo3 API integration, and automated workflows.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
