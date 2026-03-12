# 🎬 Generate marketing ad banners with LINE, Gemini, and Nano Banana Pro

> ⚡ **7,617 views** · 🎬 [Content Creation & Video](../)

## Description

## About This Template
This workflow creates high-quality, text-rich advertising banners from simple LINE messages. 

It combines **Google Gemini** (for marketing-focused prompt engineering) and **Nano Banana Pro** (accessed via Kie.ai API) to generate images with superior text rendering capabilities. It also handles the asynchronous API polling required for high-quality image generation.

## How It Works
1.  **Input:** Users send a banner concept via LINE (e.g., "Coffee brand, morning vibe").
2.  **Prompt Engineering:** Gemini optimizes the request into a detailed prompt, specifying lighting, composition, and Japanese catch-copy placement.
3.  **Async Generation:** The workflow submits a job to Nano Banana Pro (Kie API) and intelligently waits/polls until the image is ready.
4.  **Hosting:** The final image is downloaded and uploaded to a public AWS S3 bucket.
5.  **Delivery:** The image is pushed back to the user on LINE.

## Who It’s For
* Marketing teams creating A/B test assets.
* Japanese market advertisers needing accurate text rendering.
* Developers looking for an example of **Async API Polling** patterns in n8n.

## Requirements
* **n8n** (Cloud or Self-hosted).
* **Kie.ai API Key** (for Nano Banana Pro model).
* **Google Gemini API Key**.
* **AWS S3 Bucket** (Public access enabled).
* **LINE Official Account** (Messaging API).

## Setup Steps
1.  **Credentials:** Configure the "Header Auth" credential for the Kie.ai nodes (Header: `Authorization`, Value: `Bearer YOUR_API_KEY`).
2.  **AWS:** Ensure your S3 bucket allows public read access so LINE can display the image.
3.  **Webhook:** Add the production webhook URL to your LINE Developers console.

## 🔗 Nodes Used

HTTP Request, Webhook, AWS S3, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
