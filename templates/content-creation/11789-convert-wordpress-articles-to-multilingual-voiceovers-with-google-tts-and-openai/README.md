# 🎬 Convert WordPress articles to multilingual voiceovers with Google TTS and OpenAI

> ⚡ **33 views** · 🎬 [Content Creation & Video](../)

## Description

## WordPress → AI VoiceOver Automation (n8n + Google Cloud)

Automatically convert your WordPress articles into multilingual voiceovers with professional-quality audio. Want to add **audio versions** of your WordPress posts? Looking for a workflow that is **fully automated, scalable, and customizable**? This complete automation system generates **high-quality voiceovers** in multiple languages (IT + EN by default), updates your WordPress site, and logs everything in Google Sheets — all without writing a single line of code.

---

## What is this product?

This is a full end-to-end automation solution that integrates:

* **n8n**: the automation engine orchestrating all steps
* **OpenAI**: for advanced text cleaning and normalization
* **Google Translate** for automatic multilingual processing (optional)
* **Google Cloud Text-to-Speech (Long Audio)**: to create realistic long-form audio
* **Google Sheets** for status tracking and full audit trail
* **WordPress** both the content source and the final publishing platform

With just a few minutes of setup, this system can:

✔ fetch your WordPress posts
✔ clean the text professionally
✔ translate them (optional)
✔ generate natural-sounding long-form audio
✔ automatically publish audio players to your VoiceOver page
✔ log each processed post in Google Sheets 
---

## ✨ Key Features

### Automatic VoiceOver generation (IT + EN)

Uses Google’s Long Audio TTS to generate high-quality, natural speech — not the typical "robotic" TTS. 

### Built-in multilingual support

Includes an English translation pipeline by default (you can add more languages easily).

### Real-time tracking with Google Sheets

Every processed post is logged with: ID, Title, Date, Content, Link, Status (done).

### Fully automated scheduling

Run the automation hourly, daily, or on any custom schedule inside n8n.

### Automatic WordPress page updates

The workflow inserts the audio players directly into your WordPress VoiceOver page.

### Extensible and customizable

You can add:

* additional languages
* different voices
* notification steps (Telegram, Email, Slack)
* alternative content sources (RSS, Notion, API)

---

## What’s included with your purchase

1️⃣ **Complete n8n Workflow (JSON)**
Ready to import into your n8n instance — fully structured and modular.

2️⃣ **Google Cloud TTS Microservice (Full Code)**
Includes:

* `main.py` (FastAPI long-TTS endpoint)
* `Dockerfile`
* `requirements.txt`
  Deployable on Cloud Run in minutes.

3️⃣ **Professional documentation (Notion + ZIP)**
Step-by-step setup guides for:

* WordPress setup
* n8n configuration
* Google Cloud setup (TTS, Translate, Sheets, IAM, Cloud Run)
* Deploying the microservice
* Connecting everything inside n8n
* Full Troubleshooting & FAQ

4️⃣ **Lifetime documentation updates**
Whenever improvements or optimizations are released, you get access automatically.

---

## ⭐ Who is this for?

Perfect for:

* Bloggers
* Content creators
* Digital publishers
* Marketing agencies
* SEO and accessibility specialists
* Businesses with multilingual blogs
* Anyone who wants to turn their written content into audio at scale

No coding or technical expertise required.

---

## Minimum technical requirements

* A WordPress site
* An n8n instance (self-hosted or cloud)
* A Google Cloud account
* An OpenAI API key
* A Google Sheet (template included)

The setup guide walks you through every step.

---

## What you get

* ✔ Full n8n workflow
* ✔ Complete TTS microservice code
* ✔ Detailed documentation (Notion + ZIP)
* ✔ Google Sheets template
* ✔ Setup guides, diagrams, examples
* ✔ Full Troubleshooting + extensive FAQ
* ✔ Lifetime documentation updates

---

## Why choose this automation?

Because it gives you:

* Hands-free voiceover production
* A scalable way to repurpose written content
* Modern, reliable infrastructure powered by Google Cloud
* A modular system you can extend as your project grows

You don’t need to build anything from scratch — everything is ready for you.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, Google Translate, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
