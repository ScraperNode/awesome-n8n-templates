# 🎬 General 3D presentation workflow with Midjourney, GPT-4o-image and Kling APIs

> ⚡ **1,309 views** · 🎬 [Content Creation & Video](../)

## Description

### Who is this template for?
This workflow creates 360° or 180° spinning videos of high-quality 3D models with [PiAPI](https://piapi.ai) API. 

**Good for:**

- **Designers**: Generate inspiration into 3D designs and make them spin to gain concrete details in a efficient way. 
- **Online shoppers**: Show protential products from all angles in videos and preview overall texture of models.
- **Content Creators** (including toy bloggers): Make fun videos of collectible models. 
- **3D beginners:** Get simple spinning animations easily and make fun with them in a convenient way. 

### How to customize this workflow to your need？
To use this workflow, usually we need four steps:  
1. Fill in x-api-key in Mijdourney Generator node and Generate Kling Video node, fill in Header Parameters of GPT-4o Image Generator (e.g., Bearer + your X-API-Key)
2. Enter your model prompt based on your inspiration.
3. Click Test Workflow.
4. Get the video URL in the last node.


### Use Case 
The prompt node concludes the main features of creations. An example for users' reference is listed as follow: 
#### Input Prompt
A blind box character design, in the chibi style, a super cute little girl wearing a white long-sleeved dress and pearl earrings with her head bowed in a prayer pose, facing upwards, wearing an oversized off-white dress with large round pearls on the shoulders, minimalist simple dress with Ruffles, against a beige background, a full-body shot in a three-quarter profile view, with a black, blue, and gray color scheme, soft lighting, 3D rendering, clay material, high detail, in the Pixar style. Clean white skin, brown renaissance braided bun. --ar 1:1 --niji 6

### Output Video
An Example for your reference.
<video src="https://static.piapi.ai/n8n-instruction/general-3d-presentation/example1.mp4" controls />


### More Example Results for Reference
<video src="https://static.piapi.ai/n8n-instruction/general-3d-presentation/example3.mp4" controls />

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
