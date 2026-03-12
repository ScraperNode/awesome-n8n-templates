# 🎬 Generate videos from text or images with Sora 2 AI - no watermark

> ⚡ **9,866 views** · 🎬 [Content Creation & Video](../)

## Description

## Sora 2 Video Generator - No Watermark (Minimal Setup)

### This n8n workflow enables you to generate professional AI videos using OpenAI's Sora 2 without watermarks. Create videos from text descriptions or animate your images with a simple web form interface - ready to use in just 5 minutes!

Generate cinematic AI videos for social media, marketing campaigns, product demos, or creative projects. The workflow handles both text-to-video and image-to-video generation with automatic status polling until your video is ready.

**Good to know:**

• Kie.AI charges per video generation. Check their pricing page for current rates
• Videos typically take 30-60 seconds for standard quality, 60-120 seconds for HD
• The workflow automatically retries status checks every 30 seconds until completion
• No watermarks on output videos 

---

### How it works

• Users submit video requests via a beautiful web form with description, aspect ratio, and quality options
• The workflow detects if an image was uploaded and routes to either text-to-video or image-to-video 
• For image uploads, the file is automatically uploaded to ImgBB to generate a public URL
• The request is sent to Sora 2 API via Kie.AI with your specifications (prompt, quality, aspect ratio)
• The workflow waits 30 seconds, then checks if video generation is complete
• If not ready, it automatically loops back and checks again every 30 seconds
• Once complete, the video is downloaded and optionally sent via Telegram notification
• Clean, watermark-free MP4 video output ready for use

---

### Set up steps

**Step 1: Get Kie.AI API Key**
• Sign up at kie.ai and navigate to your dashboard
• Go to API Keys section and generate a new key
• Copy the API key for the next step

**Step 2: Configure n8n Credentials**
• In n8n, go to Credentials → New Credential
• Select "HTTP Header Auth"
• Name: `Kie Ai(Veo and more)` (exact name required)
• Header Name: `Authorization`
• Header Value: `Bearer YOUR_API_KEY`
• Save the credential

**Step 3: ImgBB Setup (for Image-to-Video)**
• Get a free API key from api.imgbb.com
• Open the "Upload to ImgBB" node in the workflow
• Replace the `YOUR_ImgBB_API_KEY` parameter with your ImgBB API key

**Step 4: (Optional) Telegram Notifications**
• Create a bot with @BotFather on Telegram
• Get your Chat ID from @get_id_bot
• Update YOUR_CHAT_ID in both Telegram nodes
• Or delete Telegram nodes entirely if not needed

### Requirements

• Kie.AI account with API access for Sora 2
• ImgBB account for image hosting (free tier available)
• (Optional) Telegram bot for video delivery notifications

---

### Customising this workflow

• Adjust wait times in the Wait nodes if generation takes longer in your region
• Add email notifications instead of/in addition to Telegram
• Modify the form to collect additional metadata (user info, project names, etc.)
• Add error handling nodes for production deployments
• Connect to cloud storage (Google Drive, Dropbox) instead of Telegram for video delivery
• Integrate with your existing CMS or content management system

**For assistance and support:** contact@bilsimaging.com

## 🔗 Nodes Used

HTTP Request, Telegram, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
