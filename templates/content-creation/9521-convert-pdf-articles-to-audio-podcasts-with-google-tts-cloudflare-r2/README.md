# 🎬 Convert PDF articles to audio podcasts with Google TTS & Cloudflare R2

> ⚡ **1,228 views** · 🎬 [Content Creation & Video](../)

## Description

# Convert PDF Articles to Podcast

**Workflow Name:** Convert PDF Articles to Podcast
**Author:** Devjothi Dutta
**Category:** Productivity, Content Creation, Automation
**Complexity:** Medium
**Setup Time:** 45-60 minutes

---

![Convert PDF to Podcast  N8N.png](fileId:2822)

---

## 📖 Description

Transform any PDF article, research paper, or document into a high-quality audio podcast automatically. This workflow extracts text from PDFs, converts it to natural-sounding speech using Google Cloud Text-to-Speech, stores the audio files in cloud storage, and generates an RSS feed compatible with all major podcast apps (Apple Podcasts, Spotify, Pocket Casts, etc.).

Perfect for consuming long-form content while commuting, exercising, or multitasking. Turn your reading list into a personal podcast feed.

## 👥 Who's it for

**For Professionals:**
- Convert industry reports and whitepapers to audio
- Listen to research papers during commutes
- Stay updated with long-form articles hands-free

**For Students:**
- Turn textbooks and study materials into audio
- Create audio versions of lecture notes
- Study while exercising or commuting

**For Content Creators:**
- Repurpose written content into audio format
- Create podcast episodes from blog posts
- Reach audio-focused audiences

**For Busy Readers:**
- Convert saved articles to a personal podcast
- Listen to newsletters and essays on the go
- Build a private audio library

## ✨ Key Features

- **📄 PDF Text Extraction** - Automatically extracts text from any PDF file
- **🎙️ Natural Voice Synthesis** - High-quality WaveNet voices from Google Cloud TTS
- **☁️ Cloud Storage** - Files hosted on Cloudflare R2 (S3-compatible) with public URLs
- **📻 RSS Feed Generation** - Full iTunes-compatible podcast feed with metadata
- **📧 Email Notifications** - Instant alerts when new episodes are ready
- **🎨 Custom Branding** - Configurable podcast name, artwork, and descriptions
- **⚙️ Modular Configuration** - Easy-to-update centralized config node
- **🔄 Automated Workflow** - Set it and forget it - fully automated pipeline

## 🛠️ Requirements

### Required Services:
1. **n8n** (self-hosted or cloud) - Workflow automation platform
2. **Google Cloud Platform** - Text-to-Speech API access
   - Free tier: 1 million characters/month (WaveNet voices)
   - Paid: $16 per 1 million characters
3. **Cloudflare R2** - Object storage for audio files and RSS feed
   - Free tier: 10GB storage, unlimited egress
4. **Email Service** - SMTP or email service for notifications

### Required Community Nodes:
- **Cloudflare R2 Storage** (`n8n-nodes-cloudflare-r2-storage`)
  - Install via: Settings → Community Nodes → Install
  - Search for: `n8n-nodes-cloudflare-r2-storage`
  - **Important:** Install this BEFORE importing the workflow

### Optional:
- Custom domain for podcast feed URLs
- Podcast artwork (3000x3000px recommended)

## 📦 What's Included

This workflow package includes:
- Complete n8n workflow JSON (ready to import)
- [Comprehensive setup guide](https://github.com/devdutta/PDF-to-Podcast---N8N/blob/main/WORKFLOW_SUBMISSION.md)
- [Architecture documentation](https://github.com/devdutta/PDF-to-Podcast---N8N/blob/main/related-docs/ARCHITECTURE.md)
- [Configuration templates](https://github.com/devdutta/PDF-to-Podcast---N8N/blob/main/related-docs/CONFIGURATION_TEMPLATES.md)
- [Credentials setup instructions](https://github.com/devdutta/PDF-to-Podcast---N8N/blob/main/related-docs/CREDENTIALS_SETUP.md)
- [Testing and validation checklist](https://github.com/devdutta/PDF-to-Podcast---N8N/blob/main/related-docs/TESTING_CHECKLIST.md)
- [RSS feed customization guide](https://github.com/devdutta/PDF-to-Podcast---N8N/blob/main/related-docs/RSS_CUSTOMIZATION.md)
- [Troubleshooting documentation](https://github.com/devdutta/PDF-to-Podcast---N8N/blob/main/related-docs/TROUBLESHOOTING.md)

## 🚀 Quick Start

1. **Install community node** (required):
   - Go to Settings → Community Nodes → Install
   - Search for: `n8n-nodes-cloudflare-r2-storage`
   - Click Install and wait for completion
2. **Import workflow** into your n8n instance
3. **Configure credentials:**
   - Google Cloud TTS API key
   - Cloudflare R2 credentials (Access Key ID + Secret)
   - SMTP email credentials
4. **Update Workflow Config node** with your settings:
   - R2 bucket name and public URL
   - Podcast name and description
   - Artwork URL
   - Email recipient
5. **Test with a sample PDF** to verify setup
6. **Add RSS feed URL** to your podcast app

## 📊 Workflow Stats

- **Nodes:** 10
- **Complexity:** Medium
- **Execution Time:** ~2-5 minutes per PDF (depends on length)
- **Monthly Cost:** $0-20 (depending on usage and free tiers)
- **Maintenance:** Minimal (set and forget)

## 🎨 Customization Options

- Change TTS voice (20+ English voices available)
- Adjust speech speed and pitch
- Customize RSS feed metadata
- Add custom intro/outro audio
- Configure file retention policies
- Set up webhook triggers for remote submission

## 🔧 How it Works

1. User uploads PDF to n8n
2. Text is extracted from PDF
3. Text is sent to Google TTS API
4. Audio file (.mp3) is generated
5. Files uploaded to R2 storage:
   - Original PDF
   - Generated MP3 audio
6. RSS feed is generated/updated with:
   - Episode title (from PDF filename)
   - Audio URL
   - Duration and file size
   - Publication date
   - Rich HTML description
7. RSS feed uploaded to R2
8. Email notification sent with episode details

## 💡 Pro Tips

- **Voice Selection:** Test different WaveNet voices to find your preferred style
- **Batch Processing:** Process multiple PDFs by running workflow multiple times
- **Quality vs Cost:** WaveNet voices sound better but cost more than Standard voices
- **Storage Management:** Set up R2 lifecycle rules to auto-delete old episodes
- **Custom Domains:** Use Cloudflare for custom podcast feed URLs

## 🔗 Related Workflows

- PDF to Email Summary
- Document Translation to Audio
- Blog RSS to Podcast
- Multi-language Audio Generation

## 📧 Support & Feedback

For questions, issues, or feature requests:
- GitHub: [PDF-to-Podcast---N8N Repository](https://github.com/devdutta/PDF-to-Podcast---N8N)
- n8n Community Forum: Tag @devdutta
- Email: devjothi@gmail.com

## 📄 License

MIT License - Free to use, modify, and distribute

---

**⭐ If you find this workflow useful, please share your feedback and star the workflow!**

---

## 🔗 Nodes Used

Send Email, HTTP Request, Read PDF, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
