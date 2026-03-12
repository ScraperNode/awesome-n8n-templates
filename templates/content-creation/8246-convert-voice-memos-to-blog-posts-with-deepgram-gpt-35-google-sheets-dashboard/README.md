# 🎬 Convert voice memos to blog posts with Deepgram, GPT-3.5 & Google Sheets dashboard

> ⚡ **38 views** · 🎬 [Content Creation & Video](../)

## Description

## Voice Memo to Blog Post with Deepgram, GPT-3.5 & Softr for Creators  
### *Turn Voice Memos into Published Blog Posts Using AI and Automation*

Stop letting great ideas vanish in your Notes app. This workflow transforms your **voice memos into polished blog posts, LinkedIn articles, or newsletters** — automatically.

Perfect for:
- Coaches and course creators who teach best by speaking
- Homemakers sharing wisdom without typing
- Solopreneurs building authority without burnout
- Anyone who thinks out loud but hates writing

The workflow:
1. 🎙️ Transcribes your voice memo using **Deepgram** (via n8n’s Voice to Text node)
2. ✍️ Rewrites it into a publish-ready post using **GPT-3.5**
3. 🖼️ Generates a **featured image** using HTML to Image
4. 📊 Saves the post to **Google Sheets** as your content calendar
5. 📨 Emails you a draft for review
6. 🖥️ Syncs to your **Softr dashboard** for visual content planning

No typing. No staring at a blank screen. Just speak — and publish.

---

## Prerequisites

Before using this workflow, ensure you have the following accounts:

| Service | Purpose | Free Tier Available? |
|--------|--------|----------------------|
| [n8n](https://n8n.io) | Orchestrate the automation | Yes |
| [Deepgram](https://deepgram.com) | Voice-to-text transcription | Yes (free tier) |
| [OpenAI](https://openai.com) | AI writing (GPT-3.5 or GPT-4) | Yes |
| [Google Sheets](https://sheets.google.com) | Store blog drafts and metadata | Yes |
| [SMTP Email](https://smtp.email) | Send draft emails (e.g., Gmail) | Yes (via app password) |
| [Softr](https://softr.io) | Build a visual content dashboard | Yes |

🔐 You’ll need API keys for: Deepgram, OpenAI, and SMTP  
✅ All credentials should be stored securely in n8n

---

## Google Sheets Setup

Your Google Sheet must have the following **columns** for the workflow to work correctly:

| Column Name | Purpose | Example |
|------------|--------|--------|
| `Date` | When the post was created | 2025-09-05 |
| `Title` | Blog post title (AI-generated or custom) | "What I Learned About Boundaries" |
| `Content` | AI-generated post body | "Today, I realized..." |
| `Image_URL` | Link to generated featured image | https://.../image.png |
| `Status` | Publishing status | Draft, Published, Reviewed |
| `Audio_URL` (optional) | Link to original voice memo | https://.../memo.mp3 |

📌 **Tip**: Name your sheet **"Content Calendar"** and share it with your n8n service account or use OAuth.

---

## Step-by-Step Setup Instructions

### 1. Import the Workflow into n8n
1. Go to your n8n dashboard.
2. Click **Workflows &gt; Create from JSON**.
3. Paste the provided JSON.
4. Click **Import**.

### 2. Set Up Credentials
For each service, go to **Credentials &gt; Add New**:
- **Deepgram**: Enter your API key
- **OpenAI**: Use your GPT API key
- **Google Sheets**: Connect via OAuth or service account
- **SMTP**: Enter your email credentials (e.g., Gmail app password)

🔐 Never hardcode keys — always use n8n’s secure credential system.

### 3. Configure the AI Prompt
In the **HubGPT: Rewrite as Blog Post** node:
- Edit the prompt to match your tone:
  ```text
  Rewrite this raw voice memo into a warm, engaging blog post:
  {{ $json["text"] }}
  Use short paragraphs, friendly tone, and end with a question to engage readers.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
