# 🎬 🎨 Interactive image editor with FLUX.1 fill tool for inpainting

> ⚡ **17,618 views** · 🎬 [Content Creation & Video](../)

## Description

&gt; Like this template? [Connect with Eduard](https://www.linkedin.com/in/parsadanyan/) via LinkedIn.

This workflow is a prototype of an AI-powered image editing interface, similar to Photoshop's Generative Fill feature, but running entirely in the browser. It provides a web-based editor that allows users to:

* Select areas in images using an adjustable brush tool
* Input text prompts to guide the AI generation
* Compare original and generated images side by side
* Iterate on edits with different prompts and settings
* Save or reuse generated images

&gt; 🎨 Perfect for [product catalog management](https://www.reddit.com/r/n8n/comments/1h98n7a/have_a_product_catalog_make_a_flux1_in_painting/), seasonal content updates, and creative image editing tasks!

📋 Requirements
--------------
* [FLUX API Access](https://api.bfl.ai/): You'll need API credentials from FLUX to use this workflow.
* Configure the [HTTP Header Auth credential](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) in n8n with your FLUX API key


🔧 Key Components
----------------

* [FLUX Fill API](https://api.us1.bfl.ai/scalar#tag/tasks/POST/v1/flux-pro-1.0-fill) for AI-powered image generation
* [Konva.js](https://konvajs.org/) for canvas manipulation
* [img-comparison-slider](https://www.npmjs.com/package/img-comparison-slider) for result visualization
* [Custom CSS/JS](https://github.com/ed-parsadanyan/n8n-flux-fill-demo) for editor functionality


1. **Simple Editor Interface**
   * HTML page with an editor is served on the Webhook call
   * Adjustable brush selection tool
   * Provides several mock examples and allows uploading custom images
   * Basic prompt and FLUX model parameter controls

2. **Image Processing Pipeline**
   * Handles image and mask separately
   * Processes FLUX Fill API requests
   * Delivers results back to the editor

3. **Result Viewer**
   * Split-screen comparison of original and generated images
   * Interactive slider for before/after comparison
   * Options to save or continue editing
   * Support for multiple iteration cycles

🎯 Use Cases
-----------

This prototype is particularly useful for:

* Testing AI-powered image editing concepts
* Quick product visualization experiments
* Exploring creative image variations
* Demonstrating inpainting capabilities

&gt; 💡 **Pro Tip**: Save masks for frequently edited areas to quickly generate variations with different prompts!

The workflow can be extended to integrate with various data sources and can be customized for specific business needs.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
