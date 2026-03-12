# 🎬 Build an image restoration service with n8n & Gemini AI image editing

> ⚡ **2,267 views** · 🎬 [Content Creation & Video](../)

## Description

### This n8n template demonstrates how to build a simple but effective vintage image restoration service using an AI model with image editing capabilities.

With Gemini now capable of multimodal output, it's a great time to explore this capability for image or graphics automation. Let's see how well it does for a task such as image restoration.

**Good to know**
* At time of writing, each image generated will cost $0.039 USD. See Gemini Pricing for updated info.
* The model used in this workflow is geo-restricted! If it says model not found, it may not be available in your country or region.

### How it works
* Images are imported into our workflow via the HTTP node and converted to base64 strings using the Extract from file node.
* The image data is then pipelined to Gemini's Image Generation model. A prompt is provided to instruct Gemini to "restore" the image to near new condition - of course, feel free to experiment with this prompt to improve the results!
* Gemini's responds with the image as a base64 string and hence, a convert to file node is used to transform the data to binary.
* With the restored image as a binary, we can then use this with our Google Drive node to upload it to our desired folder.

### How to use
* This demonstration uses 3 random images sourced from the internet but any typical image file will work.
* Use a webhook node to allow integration from other applications.
* Use a telegram trigger for instant mobile service!

### Requirements
* Google Gemini for LLM/Image generation
* Google Drive for Upload Storage

### Customising this workflow
* AI image editing can be applied to many use-cases not just image restoration. Try using it to add watermarks, branding or modify an existing image for marketing purposes.

## 🔗 Nodes Used

HTTP Request, Google Drive, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
