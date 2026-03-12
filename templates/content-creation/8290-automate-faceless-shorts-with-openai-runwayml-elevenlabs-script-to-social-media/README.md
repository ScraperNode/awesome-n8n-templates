# 🎬 Automate faceless shorts with OpenAI, RunwayML & ElevenLabs: script to social media

> ⚡ **199 views** · 🎬 [Content Creation & Video](../)

## Description

### ⚙️ Faceless YouTube Generator - Automate Faceless YouTube Shorts with AI: Generate Scripts, Videos, Audio, and Captions in Minutes!

Tired of grinding out YouTube content? This n8n workflow turns AI into your personal video factory—creating engaging, faceless shorts on autopilot. Perfect for creators, marketers, or side-hustlers looking to monetize without showing your face. From script writing to final upload, it's all handled: AI-generated scripts (optimized for 20-second hooks), stunning image-to-video animations via RunwayML, immersive audio with ElevenLabs, and pro captions. Scale your channel effortlessly and watch the views (and revenue) roll in!

### 🧑‍💻 Author: LeeWei

---

### 🚀 How It Works

• **Trigger & Script Magic**: Starts via Google Sheets webhook—AI crafts a punchy 213-223 character script (via Anthropic) for ~20-second shorts, ensuring viral potential.
• **Visuals on Autopilot**: Splits scenes, generates high-quality images with OpenAI, then animates them into videos using RunwayML's Gen3a Turbo.
• **Audio Layering**: Adds soothing background sounds and professional voice-overs (Adam voice) via ElevenLabs for that polished, immersive feel.
• **Final Polish & Upload**: Merges everything in Creatomate, slaps on captions with Replicate, uploads to Google Drive/YouTube, and updates your sheet—ready to post!

Setup takes 15-20 minutes with API keys. Plug-and-play: Import the JSON into n8n, and you're set—edit only API tokens and credentials as noted.

### 🚀 Steps to Connect:

1. **Google Sheets & Drive Setup**
    - Use your existing Google OAuth2 credentials in the "Google Sheets" and "Google Drive" nodes.
    - Clone the demo sheet (ID: 1Co9tTJelYyefLLxzkoOhUBU3XuQIspBpDudtZLynW2M) and update the ID in "Update Video Status" if needed. Tweak folder IDs in "Upload to Drive" nodes for custom storage.

2. **Anthropic API Key**
    - Head to [Anthropic](https://www.anthropic.com/) and grab your API key.
    - Paste it into the "Anthropic Chat Model" node credentials.

3. **OpenAI API Key**
    - Visit [OpenAI](https://platform.openai.com/) for your API key.
    - Add it to the "OpenAI Chat Model" node credentials.

4. **RunwayML API Key**
    - Sign up at [RunwayML](https://runwayml.com/) and get your token.
    - Replace "YOUR_API_TOKEN" in the "Authorization" headers of "Generate Videos" and "Get Generated Videos" HTTP nodes.

5. **ElevenLabs API Key**
    - Go to [ElevenLabs](https://try.elevenlabs.io/mjxkz7027sqp) and generate your key.
    - Swap "YOUR_API_TOKEN" in the "xi-api-key" headers of "Generate Audio (Background sound)" and "Text to Speech (Adam Voice)" nodes.

6. **Creatomate API Key**
    - Register at [Creatomate](https://creatomate.com/) for your token.
    - Update "YOUR_API_TOKEN" in the "Authorization" header of the "Render Video with Creatomate" HTTP node.

7. **Replicate API Key**
    - Get your token from [Replicate](https://replicate.com/).
    - Insert "YOUR_API_TOKEN" in the "Authorization" header of the "Add Captions - replicate" HTTP node.

8. **(Optional) YouTube Upload**
    - For direct uploads, add your Google YouTube OAuth credentials to the "Upload Video" node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
