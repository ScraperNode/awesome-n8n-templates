# 🎬 Generate videos from text prompts using GPT-5 and Google Veo-3

> ⚡ **2,415 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**🎬 GPT-5 Cinematic Video Generator (n8n + AI/ML API + Google Veo-3)**
This n8n workflow transforms even a single word into a fully rendered cinematic video using **Google Veo-3 image-to-video** and prompt expansion with **GPT-5**. Ideal for rapid creative prototyping, content creation, and AI-driven video production.

---

**🚀 Key Features**

* **Ultra-Short Input Ready** – Works with just one keyword or a short idea.
* **AI Prompt Expansion** – GPT-5 adds cinematic elements: camera motion, mood, color palette, and composition.
* **Automated Video Generation** – Veo-3 i2v model creates smooth, visually appealing clips.
* **Smart Polling** – Waits until video is ready, with success/fail handling.
* **Direct Output** – Returns ready-to-use video URL for download or publishing.

---

**🛠 Setup Guide**

1. **Create AI/ML API Credentials**

   * Get your API key from [AI/ML API Keys](https://aimlapi.com/app/keys).
   * In n8n &gt; Credentials, add **AI/ML account** (Bearer token).

2. **(Optional) Change Image Source**

   * Edit the `Set image URL` node to point to your desired still image for video generation.

3. **Run from Chat**

   * Send a word or short phrase via **Chat Trigger** to start the process.

4. **(Optional) Extend Output**

   * Add Google Drive upload, YouTube publish, or database logging nodes for a complete content pipeline.

---

**💡 How It Works**

1. **Trigger** – Receives chat input (keyword or brief).
2. **Prompt Expansion** – GPT-5 turns it into a cinematic, Veo-3-optimized description.
3. **Video Creation** – Sends prompt + image to Veo-3 image-to-video.
4. **Polling** – Checks generation status every 30 seconds until complete.
5. **Result** – Returns direct video URL, ready for your next steps.

## 🔗 Nodes Used

HTTP Request, Stop and Error, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
