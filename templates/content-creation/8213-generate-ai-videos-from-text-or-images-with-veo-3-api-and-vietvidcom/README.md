# 🎬 Generate AI videos from text or images with Veo 3 API and VietVid.com

> ⚡ **1,694 views** · 🎬 [Content Creation & Video](../)

## Description

# Veo 3 Video Generator via VietVid.com API (n8n)

## Overview
This workflow leverages the **VietVid.com Veo3 model** to generate AI videos from simple text descriptions or optional images.  
Users interact via a **form interface**, inputting a prompt (e.g., a scene description), choosing aspect ratio and model, then the system automatically submits the request to the VietVid API, monitors the generation status in real time, and retrieves the final video output.  

It’s ideal for **content creators, marketers, and developers** exploring **text-to-video AI creation**, supporting intelligent video generation with minimal setup.

---

## Prerequisites
- A **VietVid.com account and API key**: Register at [VietVid.com](https://vietvid.com) to obtain your free or paid API key.  
- An active **n8n instance** (cloud or self-hosted) with HTTP Request, Wait, and form submission capabilities.  
- Basic knowledge of **AI prompts for video generation** to achieve optimal results.  

---

## Setup Instructions

### 1. Obtain API Key
- Register at **VietVid.com** and generate your API key.  
- Store it securely—**do not share publicly**.  

### 2. Configure the Form
- In the **Form Trigger** node, ensure the following fields are available:
  - `text_prompt` — video description (e.g., *“A serene mountain landscape at sunset with birds flying”*)  
  - `ImageURL [optional]` — optional image input for image-to-video  
  - `api_Token` — your VietVid API key  
  - `aspect_Ratio [16:9,9:16]` — dropdown to select ratio  
  - `model` — choose between `veo3` and `veo3_fast`  

### 3. Test the Workflow
- Click **Execute Workflow** in n8n.  
- Access the generated form URL.  
- Submit your **prompt, API key, and options**.  
- The workflow will **poll the VietVid API every 10 seconds** until the video is ready.  

### 4. Handle Outputs
- The final **Set node** formats and displays the video links:
  - `720p_link` — always available when ready.  
  - `1080p_link` — available only for **16:9 aspect ratio**.  

---

## Customization Tips
- **Enhance prompts**: Add details like style (*realistic, cinematic, animated*), duration, actions, and camera/lighting for better results.  
- **Stability**: Fix the `seeds` value (e.g., `50000`) for more consistent characters.  
- **Webhook Response**: Add a **Webhook Response node** to return a clean JSON payload for frontend integrations.  
- **Adjust polling delay**: Modify Wait node (8–15s) if needed to balance speed vs. API calls.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
