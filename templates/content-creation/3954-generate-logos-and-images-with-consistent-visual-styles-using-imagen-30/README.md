# 🎬 Generate logos and images with consistent visual styles using Imagen 3.0

> ⚡ **23,816 views** · 🎬 [Content Creation & Video](../)

## Description

### This n8n template allows you to use AI to generate logos or images which mimic visual styles of other logos or images. The model used to generate the images is Google's Imagen 3.0.

With this template, users will be able to automate design and marketing tasks such as creating variants of existing designs, remixing existing assets to validate different styles and explore a range of designs which would have been otherwise too expensive and time-consming previously.

![banner](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/vu8uyt2w5qheyetpqj7q)

### How it works
* A form trigger is used to capture the source image to reference styles from and a prompt for the target image to generate.
* The source image is passed to Gemini 2.0 to be analysed and its visual style and tone extracted as a detailed description.
* This visual style description is then combined with the user's initial target image prompt. This final prompt is given to Imagen 3.0 to generate the images.
* A quick webpage is put together with the generated images to present back to the user.
* If the user provided an email address, a copy of this HTML page will be sent.

### How to use
* Ensure the workflow is live to share the form publicly.
* The source image must be accessible to your n8n instance - either a public image of the internet or within your network.
* For best results, select a source image which has strong visual identity as these will allow the LLM to better describe it.
* For your prompt, refer to the imagen prompt guide found here: [https://ai.google.dev/gemini-api/docs/image-generation#imagen-prompt-guide](https://ai.google.dev/gemini-api/docs/image-generation#imagen-prompt-guide)

### Requirements
* Gemini for LLM and Imagen model.
* Cloudinary for image CDN.
* Gmail for email sending.

### Customising this workflow
* Feel free to swap any of these out for tools and services you prefer.
* Want to fully automate? Switch the form trigger for a webhook trigger!

## 🔗 Nodes Used

HTTP Request, Gmail, n8n Form Trigger, Convert to File, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
