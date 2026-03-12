# 🎬 Generate fashion model product ads with Gemini AI via OpenRouter

> ⚡ **556 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow is a user-friendly tool that automates the creation of high-quality advertising images for products. It takes a simple product image uploaded by a user and uses AI to transform it into a professional, photorealistic advertisement featuring a fashion model actively using the product. The final image is then made available for the user to download.

Step-by-Step Breakdown:
Here is a breakdown of the automated process:

Form Submission: The workflow is triggered by a public form. The user uploads a product image and selects a character model (male or female) from a dropdown menu.

Image Processing: The uploaded image file is extracted and prepared for the AI. This includes converting the binary file data into a format that the AI model can understand.

AI Image Generation: An HTTP request is sent to a large language model (Google's Gemini via OpenRouter). The request includes a prompt that combines the user's selected character model and the uploaded product image. The AI is instructed to generate a new, photorealistic image of the model using the product.

Data Conversion: The AI's output, which is a base64 encoded image string, is then processed. The workflow separates the image data from its metadata.

Final Image Delivery: The base64 data is converted back into a binary file, which is then provided to the user for automatic download via a completion form.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
