# 🎬 Generate product creative images with Google Nano-Banana model via Defapi

> ⚡ **2,100 views** · 🎬 [Content Creation & Video](../)

## Description

## Overview
This workflow utilizes the Defapi API with Google's Nano-Banana model to generate AI-powered product creative images from text prompts and product images. Users can interact through a simple form, providing a text prompt describing the desired creative scene, a product image URL, and their API key. The system automatically submits the request to the Defapi API, monitors the generation status in real time, and retrieves the final creative image output. This solution is ideal for marketers, product designers, e-commerce businesses, and content creators who want to quickly generate compelling product advertisements and creative visuals with minimal setup.


## Prerequisites
- A Defapi account and API key: Sign up at [Defapi.org](https://defapi.org) to obtain your API key.
- An active n8n instance (cloud or self-hosted) with HTTP Request and form submission capabilities.
- Basic knowledge of AI prompts for product creative generation to achieve optimal results.
- A product image URL for creative generation.

## Setup Instructions
1.  **Obtain API Key**: Register at Defapi.org and generate your API key. Store it securely—do not share it publicly.
2.  **Configure the Form**: In the "Submit Image for Creative Generation" node, ensure the following fields are set up: prompt (creative scene description), img_url (product image URL), api_key.
3.  **Test the Workflow**:
    - Click "Execute Workflow" in n8n.
    - Access the generated form URL, submit your prompt, image URL, and API key.
    - The workflow will wait 10 seconds and then poll the API status until the image generation is complete.
4.  **Handle Outputs**: The final node formats and displays the generated creative image URL for download or embedding.

## Customization Tips
- **Enhance Prompts**: Include specifics like scene setting, lighting, style (e.g., realistic, artistic, cinematic), product placement, and visual elements to improve AI creative image quality.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
