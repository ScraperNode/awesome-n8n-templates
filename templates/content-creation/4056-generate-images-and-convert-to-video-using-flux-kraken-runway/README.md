# 🎬 Generate images and convert to video using Flux, Kraken & Runway

> ⚡ **6,182 views** · 🎬 [Content Creation & Video](../)

## Description

**(Image Generation → Hosting → Video Generation)**

*This workflow is designed for creators, automation enthusiasts, and indie hackers who want to generate image-based videos automatically using AI tools — at a low cost.*

---

## ⚙️ Workflow Overview

This automation performs the following steps:

1. **Trigger** (Schedule or manual)
2. **Generate an image** using **Flux** (choose between two APIs)
3. **Upload the image** to **Kraken.io** to get a public URL
4. **Send the image** to **Runway ML** (choose between two APIs) to generate a video
5. **Receive the video** as a URL — ready for posting, download, or further automation

---

## 🛠️ Step-by-Step Setup

### 🖼️ Flux (Image Generation)

You can use **either** of the following providers:

#### Option 1: Flux by BlackForest Labs (Direct API)

🔑 Get your API key here: [https://docs.bfl.ml/](https://docs.bfl.ml/)

* Paste your API key in the **HTTP Request** node named `Flux (Blackforest)`
* You can customize prompts or styles inside the JSON body

#### Option 2: Flux via RapidAPI

🔑 Subscribe and get your key here:
[https://rapidapi.com/poorav925/api/ai-text-to-image-generator-flux-free-api/playground/apiendpoint\_e38039ee-1912-4ef9-b4d4-270d72fca851](https://rapidapi.com/poorav925/api/ai-text-to-image-generator-flux-free-api/playground/apiendpoint_e38039ee-1912-4ef9-b4d4-270d72fca851)

* Enter your RapidAPI key in the `X-RapidAPI-Key` header
* Optional: tweak prompts, style, or resolution inside the JSON body

---

### 🐙 Kraken.io (Hosting the Image Publicly)

Runway ML requires the image to be publicly accessible. We use **Kraken.io** to host the generated image and return a public URL.

🔑 Get your API credentials: [https://kraken.io/account/api-credentials](https://kraken.io/account/api-credentials)

#### Setup:

1. Copy your **API Key** and **API Secret**
2. Open the `Kraken Upload` node in n8n
3. Replace placeholders with your credentials
4. The node uploads your image and gives back a **public image URL** for Runway to use

---

### 🎬 RunwayML (Video Generation)

You also have two options here:

#### Option 1: Runway Official API

🔑 Get your credentials at: [https://dev.runwayml.com/](https://dev.runwayml.com/)

* Use the public image URL from Kraken in the JSON body
* Paste your **Bearer token** in the `Authorization` header
* Customize other settings like video length, style, FPS, etc.

#### Option 2: Runway via RapidAPI

🔑 Subscribe and get your key here:
[https://rapidapi.com/fortunehoppers/api/runwayml/playground/apiendpoint\_93c8554d-8097-40cd-8252-3d4dec9c0e68](https://rapidapi.com/fortunehoppers/api/runwayml/playground/apiendpoint_93c8554d-8097-40cd-8252-3d4dec9c0e68)

* Paste your RapidAPI key in the request header
* Customize prompt and generation options in the body
* Use the Kraken-generated image URL as the input source

---

## 📤 What to Do with the Video

Once the video is generated, you’ll get a direct video URL. You can:

* Save it to Google Sheets or Notion
* Send it via email
* Trigger a YouTube upload automation
* Or download manually for editing and reposting

---

## 💡 Optional Tips & Notes

* You can schedule this workflow to generate AI videos daily or weekly
* Combine it with a Google Sheet of prompts for bulk automation
* Try using a consistent visual style or theme for better branding
* This workflow is lightweight and affordable — perfect for indie projects or experimental content generation
* Great for shorts, quote visuals, music loops, AI art promos, etc.

---

## 🔗 Resources

* [Flux (Blackforest) Docs](https://docs.bfl.ml/)
* [Flux on RapidAPI](https://rapidapi.com/poorav925/api/ai-text-to-image-generator-flux-free-api/)
* [RunwayML Official Docs](https://dev.runwayml.com/)
* [Runway on RapidAPI](https://rapidapi.com/fortunehoppers/api/runwayml/)
* [Kraken.io API Dashboard](https://kraken.io/account/api-credentials)

---

## 🙋 Need Help?

Feel free to reach out:

* 🐦 Twitter: [@juppfy](https://x.com/juppfy)
* 📧 Email: [joseph@uppfy.com](mailto:joseph@uppfy.com)

If you’d like to hire me for custom n8n workflows or product automations, don’t hesitate to get in touch.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
