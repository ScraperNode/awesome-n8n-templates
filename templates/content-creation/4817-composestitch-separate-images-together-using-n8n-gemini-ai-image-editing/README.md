# 🎬 Compose/Stitch separate images together using n8n & Gemini AI image editing

> ⚡ **4,296 views** · 🎬 [Content Creation & Video](../)

## Description

### This n8n template demonstrates how to use AI to compose or "stitch" separate images together to generate a new image which retains the source assets and consistent style.

Use cases are many: Try producing storyboard scenes with consistent characters, marketing material with existing product assets or trying on different articles on fashion!

**Good to know**
* At time of writing, each image generated will cost $0.039 USD. See Gemini Pricing for updated info.
* The model used in this workflow is geo-restricted! If it says model not found, it may not be available in your country or region.

### How it works
* We'll import our required assets via our Cloud storage using the HTTP node.
* The images are then converted to base64 strings and aggregated so we can use it for our AI model.
* Gemini's image generation model is used which takes all 3 images and a prompt that we define. Our prompt instructs the model on how to compose the final image.
* Gemini generates a new image but uses the original 3 assets to do so. The consistency to the source images is very high and shows little signs of hallucinations!
* Gemini's output is base64 so we use a "Convert to file" node to convert the data to binary.
* The final binary image is then uploaded to Google Drive to complete the demonstration.

### How to use
* The manual trigger node is used as an example but feel free to replace this with other triggers such as webhook or even a form.
* Technically, you should be able to compose even more images but of course, the generation will take longer and cost more.

### Requirements
* Gemini account for LLM and Image generation
* Google drive for upload

### Customising this workflow
* AI Image editing can be used for many use-cases. Try a popular use-case such as virtual try-on for fashion or applying branding on editing image assets.

## 🔗 Nodes Used

HTTP Request, Google Drive, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
