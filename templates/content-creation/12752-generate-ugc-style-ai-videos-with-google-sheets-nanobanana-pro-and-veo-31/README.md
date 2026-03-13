# 🎬 Generate UGC-style AI videos with Google Sheets, NanoBanana Pro and Veo 3.1

> ⚡ **820 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## 🎬 AI-Powered UGC Video Generator

Automatically create **consistent, professional UGC (User-Generated Content) videos** at scale using cutting-edge AI models. This workflow combines three reference images into hyper-realistic selfie-style photos, then transforms them into engaging 8-second videos perfect for TikTok, Instagram Reels, and social media ads.

***

## ✨ What This Workflow Does

**Part 1: Image Generation**
- Combines 3 reference images (product + character + background) using **NanoBanana Pro**
- AI agent generates optimized prompts for realistic UGC selfie photos
- Analyzes output quality before proceeding to video generation

**Part 2: Video Creation**
- Transforms static images into dynamic 8-second videos using **Google Veo 3.1**
- AI agent creates natural dialogue and scene descriptions
- Batch processes multiple tasks automatically via Google Sheets

***

## 🎯 Perfect For

- **E-commerce brands** creating product demonstration videos
- **Marketing agencies** producing social media ad content at scale
- **Content creators** generating consistent UGC-style videos
- **A/B testing** multiple video variations quickly
- **Dropshippers** needing authentic product videos without filming

***

## 🚀 Key Features

✅ **Consistent Characters** - Same person, style, and aesthetic across all videos  
✅ **Batch Processing** - Manage multiple tasks via Google Sheets  
✅ **Multi-Model Support** - Primary + fallback AI models for reliability  
✅ **Smart Error Handling** - Automatic retries and status tracking  
✅ **Dual Workflow** - Separate pipelines for image and video generation  
✅ **Quality Analysis** - AI checks image quality before video creation

***

## 🛠️ Required APIs

**Essential:**
- [Google Sheets API](https://console.cloud.google.com/) (free)
- [Atlas Cloud API](https://goto.atlascloud.ai/Kristian?ref=TM2L4K) (for NanoBanana Pro & Veo 3.1)

**Choose at least ONE:**
- [OpenAI API](https://platform.openai.com) (GPT-5-Mini recommended)
- [Groq API](https://groq.com) (fast & free tier available)
- [Google Gemini API](https://aistudio.google.com/app/apikey) (alternative)

***

## 📋 How It Works

### Image Generation Pipeline:
1. Reads tasks from Google Sheets (Status: "Ready")
2. AI agent generates optimized image prompt
3. Downloads and uploads 3 reference images to temp storage
4. NanoBanana Pro combines images into realistic UGC selfie
5. Analyzes output image quality
6. Updates sheet with results (Status: "Edited")

### Video Generation Pipeline:
1. Reads edited tasks from Google Sheets (Status: "Edited")
2. AI agent generates video prompt with natural dialogue
3. Veo 3.1 transforms image into 8-second video
4. Polls generation status every 10 seconds
5. Updates sheet with final video (Status: "Finished")

***

## 💡 Pro Tips

- **Use high-quality reference images** (minimum 1024x1024px)
- **Keep character photos consistent** (same person, similar lighting)
- **Write clear scene descriptions** for better results
- **Test with 1 task first** before running large batches
- **Monitor API quotas** to avoid rate limits

***

## 📺 Full Tutorial

Complete setup walkthrough available on YouTube: [Watch Tutorial](https://youtu.be/wOdtH54A8iE)

***

## 🎓 What You'll Learn

- Setting up multi-step AI automation workflows
- Integrating multiple AI models (OpenAI, Groq, Gemini)
- Using NanoBanana Pro for advanced image editing
- Generating videos with Google Veo 3.1
- Managing batch processes via Google Sheets
- Implementing fallback models for reliability
- Handling errors and status tracking

***

## 📊 Google Sheets Template Structure

The workflow includes a pre-built template with these columns:
- **Task ID** - Unique identifier
- **Product Photo** - Product image URL
- **Character** - Person reference image URL
- **Background** - Scene background URL
- **Product Name** - Name of the product
- **Product Description** - Details about the product
- **Target Market** - Audience for the video
- **Video Scene** - Scene description for video
- **Status** - Workflow status (Ready → Edited → Finished)
- **Image Prompt** - Generated prompt for image
- **Image Result** - Output image URL
- **Analyze Image** - Quality analysis results
- **Video Prompt** - Generated prompt for video
- **Video Result** - Final video URL
- **Error Message** - Error details if failed

***

## 🔄 Status Flow
```
Ready → Edited → Finished
  ↓        ↓         ↓
Error    Error    Error
```

***

## ⚙️ Customization Options

**Adjust Image Style:**
- Modify the Image Prompt Agent system message
- Change composition (close-up, medium shot, wide)
- Adjust lighting (natural, studio, dramatic)

**Modify Video Output:**
- Edit Video Prompt Agent for different styles
- Change duration (default: 8 seconds)
- Customize dialogue language (default: Indonesian)
- Adjust camera angles and movements

**Add More AI Models:**
- Connect additional providers as fallbacks
- Models are tried in order until success
- Supports OpenAI, Anthropic, Groq, Gemini

***

## 🔐 Security Notes

- Never commit API keys to version control
- Use environment variables in production
- Don't share your Google Sheets publicly
- Rotate API keys regularly
- Set billing alerts on all platforms

***

## 📞 Support & Updates

**Created by:** [Kristian Ekachandra](https://yapp.ink/aichandre)

Follow for more AI automation workflows:
- 🎥 YouTube: [@aichandre](https://www.youtube.com/@aichandre)
- 📸 Instagram: [@aichandre](https://www.instagram.com/aichandre)
- 🎵 TikTok: [@aichandre](https://www.tiktok.com/@aichandre)

***

## 🏷️ Tags

`ai-video` `ugc` `content-creation` `video-generation` `batch-processing` `google-sheets` `openai` `groq` `nanobanana-pro` `veo-3.1` `marketing` `social-media` `tiktok` `instagram-reels` `automation`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
