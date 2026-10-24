# 🎬 Generate real-estate marketing images and videos with OpenAI and Google Drive

> ⚡ **474 views** · 🎬 [Content Creation & Video](../)

## Description

# 🏡 Automated Real-Estate Content Generation Workflow

This n8n workflow automates turning short user ideas into production-ready real-estate marketing assets (photorealistic images and optional 360° videos). A form submission seeds a prompt board → an LLM refines prompts → the refined prompt is sent to an image/video generator → assets are uploaded to Google Drive and an approval email is sent so stakeholders can accept/reject outputs.

---

## ⚙️ How It Works (High Level)

1. **Trigger:**  
   User submits the ideation form (`On form submission`).

2. **Record:**  
   The raw idea is appended to Google Sheets (`Append row in sheet`).

3. **Refine:**  
   An AI agent (LangChain/OpenAI) refines the prompt into a photorealistic prompt and produces captions & variants (`AI Agent`).

4. **Store Refined Prompt:**  
   Update the sheet with the improved prompt (`Append or update row in sheet`).

5. **Generate Asset:**  
   Send improved prompt to OpenAI image/video generation nodes (`Generate an image2` / `Generate a video`).

6. **Upload & Share:**  
   Upload resulting files to Google Drive (`Upload file / Upload file1`) and set sharing permissions (`Share file / Share file1`).

7. **Approval Flow:**  
   Email the requester with the asset + improved prompt and wait for approval (`Send message and wait for response`).

8. **Decision:**  
   A `Switch` node routes approved outputs to final storage/notifications and rejected ones back for rework (or sends a failure email).

9. **Video Branch:**  
   Separate flow → refine → HTTP → video generator → upload → share → update sheet (parallel video pipeline).

---


## Quick Setup Guide
👉 [Demo & Setup Video](https://drive.google.com/file/d/1a1n-XZIJkKsmBDjdNsG6Vg_AKv8AJxe5/view?usp=sharing)
👉 [Sheet Template](https://docs.google.com/spreadsheets/d/1NEtQvs2hlcqmrFfSC6e1cReC25g2FEvxTiqdXOgtnjM/edit?usp=sharing)
👉 [Course](https://www.udemy.com/course/n8n-automation-mastery-build-ai-powered-enterprise-ready/?referralCode=2EAE71591D3BEB80F2CC)

---

## 🔑 Nodes of Interest (Quick Reference)

- `On form submission` — Form trigger for ideation input  
- `Append row in sheet` — Initial recording to Google Sheets  
- `AI Agent` — LangChain/OpenAI agent for prompt refinement  
- `Generate an image2` — OpenAI image generation node  
- `Upload file / Upload file1` — Google Drive upload nodes  
- `Share file / Share file1` — Set file sharing permissions  
- `Send message and wait for response` — Gmail approval workflow  
- `Switch` — Approval vs rejection routing  
- `Form + AI Agent1 + Generate a video` — Video generation pipeline  
- `Wait / Wait1` — Handle long-running generation  
- `OpenAI Chat Model / OpenAI Chat Model1` — LLM configuration nodes  

---

## 🔐 What You'll Need (Credentials & Access)

- Google Sheets OAuth2 (sheet access)  
- Google Drive OAuth2 (file storage)  
- OpenAI API Key (image/video + LLM)  
- Gmail OAuth2 (email approvals)  
- n8n webhook/public form access  
- Optional: External HTTP endpoints for video processing  

💡 **Tip:** Store credentials securely in n8n credential manager and avoid hardcoding secrets.

---

## ⚡ Recommended Settings & Best Practices

- **Model & Prompt Control:**  
  Use strong system prompts enforcing photorealism and real-estate context.

- **Rate Limits & Retries:**  
  Add retry logic with exponential backoff for API calls.

- **Wait Times:**  
  Use `Wait` nodes for long video generation tasks.

- **File Size & Format:**  
  Standardize image sizes (e.g., 1792×1024) and compress videos.

- **Sharing Permissions:**  
  Use *view-only links* for approvals.

- **Logging & Observability:**  
  Track prompt, model, timestamp in Google Sheets.

- **Security:**  
  Use credential manager, rotate API keys regularly.

- **Cost Control:**  
  Monitor OpenAI usage and apply limits.

- **Input Validation:**  
  Validate prompt length and required fields.

---

## 🚀 Customization Ideas

- Property type presets (apartment, villa, office, etc.)  
- Auto-generate captions, hashtags, and listing descriptions  
- Add AI moderation before sharing assets  
- Replace Google Drive with S3 / Cloudflare R2 + CDN  
- Auto-post approved assets to social media or CMS  
- A/B test prompts for performance optimization  
- Multi-language prompt support  
- Slack/Telegram approval dashboard instead of email  

---

## 🏷️ Tags

n8n, automation, real-estate, prompt-engineering, OpenAI, DALL·E, video, google-sheets, google-drive, gmail, approval-flow, image-generation

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
