# 🎬 Automate video voiceover & subtitles with Whisper, OpenAI TTS & FFmpeg

> ⚡ **272 views** · 🎬 [Content Creation & Video](../)

## Description

# Automate Video Editing with AI

### Who’s it for
This workflow is ideal for **content creators, training providers, agencies, and businesses** that need to quickly turn raw videos into **polished, captioned, or narrated content** — without hiring editors or spending hours in manual editing tools.  

It’s especially valuable for those who want **full freedom of video editing capacity on their own platform** instead of relying on costly SaaS tools with heavy limitations, recurring fees, or watermarks.  
With this template, you get enterprise-grade AI editing **self-hosted in your n8n**, under your control.

Perfect for:  
- **E-learning & educators** producing accessible multilingual lessons  
- **Corporate trainers** automating internal tutorials and compliance walkthroughs  
- **Social media teams** creating captioned, high-engagement clips  
- **Product teams** generating quick demos and explainer videos  

---

### How it works / What it does
This template combines **AI transcription, TTS voiceover, and video editing with FFmpeg** into a single automated pipeline:  

- **Voiceover Mode**  
  - Transcribes video with **OpenAI Whisper**  
  - Cleans text using on-screen frames for accuracy  
  - Generates natural **AI voiceovers (EN/AR)** with OpenAI Speech  
  - Re-times the video to match the narration → synced professional dub  

- **Subtitle Mode**  
  - Merges multiple video clips with FFmpeg  
  - Transcribes or translates audio to generate **SRT subtitles**  
  - Hardcodes captions directly into the final MP4 (style customizable)  

✅ Output: a **ready-to-publish MP4** with AI voiceover or burned-in subtitles.

---

### Requirements
- n8n self-hosted or cloud instance  
- Server with **FFmpeg installed**  
- **OpenAI API key** (Whisper + Speech)  
- (Optional) Google Drive credentials for delivery  

---

### How to customize the workflow
- Swap voices in the **OpenAI Speech** node (change “ash” / “verse” to another).  
- Add languages by extending the dropdown in the **Upload Video** form.  
- Change subtitle style (font, margins, background) in the **Apply Subtitle** node.  
- Route final videos to Slack, Notion, or Dropbox instead of Drive.  

---

### Why it matters / Benefits
⚡ **Save hours of manual editing** — no need for Premiere/DaVinci for basic voiceovers and captions.  
💰 **Cut production costs** — avoid hiring voice actors and editors for every video.  
🌍 **Multilingual content instantly** — create English ↔ Arabic versions without re-recording.  
📈 **Boost engagement** — subtitles increase video watch time on social media.  
🎨 **Professional results on autopilot** — clean transcripts, natural AI voices, synced visuals.  

💡 **SaaS vs Self-Hosted**  
- **Descript, Kapwing, Synthesia** → $30–100/month per user, limited exports, watermarks on free tiers.  
- **This workflow** → one-time template + your own server, only pay **OpenAI usage (~$0.006/min for Whisper)**.  
- You get **unlimited exports, no restrictions, and full data ownership**.  

---

### What you win buying this template
- A **ready-made AI editing studio** inside n8n.  
- End-to-end automation: upload → AI → polished video.  
- Works for **solo creators and agencies** delivering client-ready assets.  
- Scales with your content: handle 1 video or 100, just drop them in.  

---

👉 **By purchasing, you get:**  
- Full workflow JSON file.  
- Email delivery with setup **guidelines**.  
- Access to a **step-by-step walkthrough video**.  
- **Contact Us** via services@quantumti.ae.

## 🔗 Nodes Used

HTTP Request, Google Drive, FTP, SSH, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
