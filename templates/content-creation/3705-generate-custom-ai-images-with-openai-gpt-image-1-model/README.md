# 🎬 Generate custom AI images with OpenAI GPT-Image-1 model

> ⚡ **13,393 views** · 🎬 [Content Creation & Video](../)

## Description

**How it works**  
1. Trigger the workflow manually via the n8n UI.  
2. Define key parameters like the image prompt, number of images, size, quality, and model.  
3. Send a POST request to OpenAI’s image generation API using those inputs.  
4. Split the API response to handle multiple images.  
5. Convert the base64 image data into downloadable binary files.

**Set up steps**  
Initial setup takes around 5–10 minutes. You’ll need an OpenAI API key, a configured HTTP Request node with credentials, and to customize the prompt/parameter fields in the “Set Variables” node. No advanced config or external services needed.

**Important Note**
You have to make sure to complete OpenAI's new verification requirements to use their new image API:
https://help.openai.com/en/articles/10910291-api-organization-verification

It only takes a few minutes and does not cost any money.

## 🔗 Nodes Used

HTTP Request, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
