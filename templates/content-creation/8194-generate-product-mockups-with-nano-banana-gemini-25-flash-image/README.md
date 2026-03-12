# 🎬 Generate product mockups with Nano Banana (Gemini 2.5 Flash Image)

> ⚡ **7,715 views** · 🎬 [Content Creation & Video](../)

## Description

## This n8n template uses AI to generate product mockups by composing a product image onto a model or template image.

This workflow provides a powerful solution for creating dynamic marketing assets and e-commerce visuals. Use cases are many: Instantly create virtual try-on images for apparel, place your product into different scenes for advertisements, or generate custom marketing material without needing a physical photoshoot.

### Good to know
* This workflow uses the **OpenRouter API** to access Google's Gemini model. You will need an OpenRouter account.
* The model used is `google/gemini-2.5-flash-image-preview:free`. While this specific model may be free, costs can vary depending on the model you choose and your usage on OpenRouter. Always check their latest pricing.
* The workflow is triggered by a form. To use it, you must activate the workflow and use its Production URL.

### How it works
* A user submits a **product image**, a **template/model image**, and a **text prompt** via the n8n form trigger.
* The images are then converted to **Base64 strings** so they can be used in an API request.
* A multimodal payload is sent to the OpenRouter API. Gemini's image generation model is used, which takes all 3 inputs (the two images and the prompt) to understand how to compose the final image.
* Gemini generates a new image based on the instructions and returns it as a Base64 string.
* The workflow extracts this output string and uses a "Convert to file" node to convert the data back into a binary image file, ready for use.

### How to use
* First, set up your **OpenRouter API credential** in n8n.
* Activate the workflow.
* Open the **Production URL** for the form trigger.
* Upload your product image, your template image, and write a descriptive prompt.
* Submit the form to execute the workflow and generate your image.

### Requirements
* An active n8n instance.
* An OpenRouter account and API key.

### Customising this workflow
* You can easily change the AI model by editing the JSON body in the **HTTP Request** node. OpenRouter provides access to a wide variety of models from different providers.
* Add a final step to automatically save the generated image. You can connect nodes for services like **Google Drive, AWS S3, or Dropbox** after the "Convert to File" node.
* Replace the **Form Trigger** with a **Webhook Trigger** to run this workflow programmatically from another application or service.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
