# 🎬 Create & share lip-synced avatar videos with Infinitalk AI & upload to TikTok/YouTube

> ⚡ **910 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

This workflow automates the process of generating and publishing a **talking avatar video**.
It takes a **video** and an **audio file** as inputs, then uses the Infinitalk API to create a lip-synced avatar that naturally matches the audio. Once generated, the video is:

1. Retrieved and stored (Google Drive upload).
2. Optimized with an **AI-generated YouTube title** for better SEO.
3. Automatically uploaded to **YouTube** and **TikTok** via the Upload-Post API.

---

### **Key Advantages**

* ✅ **Full Automation**: From video generation to social media publishing, everything is handled automatically.
* ✅ **AI-Powered Content Optimization**: Uses GPT-based AI to create SEO-friendly and catchy YouTube titles, increasing reach and engagement.
* ✅ **Multi-Platform Publishing**: Videos are instantly shared across YouTube and TikTok, saving time on manual uploads.
* ✅ **Seamless Storage Integration**: Generated videos are saved to Google Drive for archiving or reuse.
* ✅ **Scalable Workflow**: Can be reused for multiple videos, podcasts, tutorials, or marketing clips with minimal effort.
* ✅ **Natural Lip-Sync**: Infinitalk API ensures avatars sync realistically with audio, creating professional-looking videos.
* ✅ **Customizable**: Resolution, number of frames, and acceleration options can be adjusted for different needs (e.g., faster processing vs. higher quality).

---

### How It Works

The process begins with a form submission where users provide a video URL (for the avatar), an audio URL (for lip-sync), and a text prompt describing the video content. The system then:

1. **Video Generation**: Sends the inputs to Fal.ai's Infinitalk API which creates a talking avatar video where the character lip-syncs to the provided audio with natural facial expressions
2. **Status Monitoring**: Continuously checks the processing status every 60 seconds until the video generation is completed
3. **Title Generation**: Uses OpenAI's GPT model to create an SEO-optimized YouTube title based on the original prompt
4. **File Handling**: Downloads the generated video and uploads it to Google Drive for storage
5. **Multi-Platform Distribution**: Automatically publishes the video to both YouTube and TikTok using the Upload-Post service

The workflow includes conditional logic to ensure each step executes in the correct order and only proceeds when previous operations are successful.

---
### Set Up Steps

**Step 1: Configure Fal.ai API**
- Create an account at Fai AI and obtain your API key
- In the "Create Video" node, set up Header Authentication with:
  - Name: "Authorization"
  - Value: "Key YOURAPIKEY"

**Step 2: Configure Upload-Post Service**
- Get your API key from [Upload-Post Manage Api Keys](https://www.upload-post.com/)
- Set up the authentication header in both upload nodes:
  - Name: Authorization
  - Value: Apikey YOUR_API_KEY_HERE
- Create social media profiles in Upload-Post and replace "YOUR_USERNAME" in the upload nodes with your profile name
- Note: Free plan supports all platforms except TikTok (requires paid upgrade)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
