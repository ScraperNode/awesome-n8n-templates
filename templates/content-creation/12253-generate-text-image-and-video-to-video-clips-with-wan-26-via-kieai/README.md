# 🎬 Generate text-, image-, and video-to-video clips with WAN 2.6 via KIE.AI

> ⚡ **562 views** · 🎬 [Content Creation & Video](../)

## Description

**This n8n template provides a comprehensive suite of WAN 2.6 video generation capabilities through the KIE.AI API. The workflow includes three independent video generation workflows: text-to-video, image-to-video, and video-to-video. Each workflow can be used independently to create videos from different input types, making it perfect for content creators, marketers, and video production teams.**

**Use cases are many:** Create videos from text descriptions without any input media, transform static images into animated videos, enhance existing videos with new styles and effects, generate engaging video content for social media, automate video production workflows, create video variations from the same source, produce marketing videos at scale, repurpose content across different video formats, or streamline video creation pipelines for content teams!

### **Good to know**

- The workflow includes three independent WAN 2.6 video generation capabilities via KIE.AI API:
  - **Text-to-Video:** Creates videos directly from text prompts without requiring input images or videos
  - **Image-to-Video:** Transforms static images into animated videos based on text prompts
  - **Video-to-Video:** Enhances or transforms existing videos with new styles and effects
- Each workflow can be used independently based on your input type and needs
- Supports two resolution options: 720p or 1080p
- Supports three duration options: 5, 10, or 15 seconds
- Text-to-video creates videos purely from text descriptions - no media input required
- Image-to-video animates static images with customizable prompts for style and movement
- Video-to-video allows you to transform existing videos with new visual styles and effects
- KIE.AI pricing: Check current rates at https://kie.ai/ for video generation costs
- Processing time: Varies based on video length and KIE.AI queue, typically 1-5 minutes for generation
- Media requirements: Image and video files must be publicly accessible via URL (HTTPS recommended)
- Supported image formats: PNG, JPG, JPEG, WEBP
- Supported video formats: MP4, MOV, AVI, WEBM
- Automatic polling system handles processing status checks and retries for all workflows

### **How it works**

The template includes three independent workflows that can be used separately based on your input type:

**1. Text-to-Video (Top Section):**
1. **Video Parameters Setup:** Set prompt, duration (5, 10, or 15 seconds), and resolution (720p or 1080p) in 'Set Video Parameters' node
2. **Video Generation Submission:** Parameters are submitted to KIE.AI API using WAN 2.6 text-to-video model
3. **Processing Wait:** Workflow waits 5 seconds, then polls the generation status
4. **Status Check:** Checks if video generation is complete, queuing, generating, or failed
5. **Polling Loop:** If still processing, workflow waits and checks again until completion
6. **Video URL Extraction:** Once complete, extracts the generated video file URL from the API response
7. **Video Download:** Downloads the generated video file for local use

**2. Image-to-Video (Middle Section):**
1. **Video Parameters Setup:** Set prompt, image URL, duration, and resolution in 'Set Prompt & Image Url' node
2. **Video Generation Submission:** Parameters are submitted to KIE.AI API using WAN 2.6 image-to-video model
3. **Processing Wait:** Workflow waits 5 seconds, then polls the generation status
4. **Status Check:** Checks if video generation is complete, queuing, generating, or failed
5. **Polling Loop:** If still processing, workflow waits and checks again until completion
6. **Video URL Extraction:** Once complete, extracts the generated video file URL from the API response
7. **Video Download:** Downloads the generated video file for local use

**3. Video-to-Video (Bottom Section):**
1. **Video Parameters Setup:** Set prompt, video URL, duration, and resolution in 'Set Video URL and Prompt' node
2. **Video Generation Submission:** Parameters are submitted to KIE.AI API using WAN 2.6 video-to-video model
3. **Processing Wait:** Workflow waits 5 seconds, then polls the generation status
4. **Status Check:** Checks if video generation is complete, queuing, generating, or failed
5. **Polling Loop:** If still processing, workflow waits and checks again until completion
6. **Video URL Extraction:** Once complete, extracts the generated video file URL from the API response
7. **Video Download:** Downloads the generated video file for local use

All workflows automatically handle different processing states (queuing, generating, success, fail) and retry polling until video generation is complete. Each workflow operates independently, allowing you to use only the video generation type you need.

### **How to use**

1. **Setup Credentials:** 
   - Configure KIE.AI API key as HTTP Bearer Auth credential (used for all three workflows)
2. **Choose Your Workflow:**
   - **For Text-to-Video:** Update 'Set Video Parameters' node with prompt, duration (5/10/15), and resolution (720p/1080p)
   - **For Image-to-Video:** Update 'Set Prompt & Image Url' node with prompt, image URL (publicly accessible), duration, and resolution
   - **For Video-to-Video:** Update 'Set Video URL and Prompt' node with prompt, video URL (publicly accessible), duration, and resolution
3. **Set Video Parameters:** 
   - **prompt:** Detailed text description of the desired video content, style, and effects
   - **duration:** 5, 10, or 15 seconds (only these values supported)
   - **resolution:** 720p or 1080p (only these values supported)
   - **image_url/video_urls:** Publicly accessible URL for image-to-video or video-to-video workflows
4. **Deploy Workflow:** Import the template and activate the workflow
5. **Trigger Generation:** Use manual trigger to test, or replace with webhook/other trigger
6. **Receive Video:** Get generated video file URL and download the video file

**Pro tip:** Write detailed, descriptive prompts to guide the video generation - the more specific your prompt, the better the video output. Include scene details, camera movements, lighting, style, and visual effects in your prompt. For image-to-video and video-to-video, ensure your input media is hosted on public URLs (HTTPS recommended). The workflows automatically handle polling, status checks, and video download, so you can set it and forget it. You can use different workflows for different use cases - text-to-video for pure creation, image-to-video for animating static content, and video-to-video for enhancing existing videos.

### **Requirements**

- **KIE.AI API** account for accessing WAN 2.6 video generation models
- **Text Prompt** describing the desired video content (required for all workflows)
- **Image File URL** (for image-to-video) that is publicly accessible (HTTPS recommended)
- **Video File URL** (for video-to-video) that is publicly accessible (HTTPS recommended)
- **Duration** value: 5, 10, or 15 seconds only
- **Resolution** value: 720p or 1080p only
- **n8n** instance (cloud or self-hosted)
- Supported image formats: PNG, JPG, JPEG, WEBP
- Supported video formats: MP4, MOV, AVI, WEBM

### **Customizing this workflow**

**Workflow Selection:** Use only the workflows you need by removing or disabling nodes for text-to-video, image-to-video, or video-to-video. Each workflow operates independently.

**Trigger Options:** Replace the manual trigger with webhook trigger for API-based video generation requests, schedule trigger for batch processing, or form trigger for user submissions.

**Video Settings:** Modify duration (5, 10, or 15 seconds) and resolution (720p or 1080p) in the respective 'Set' nodes to match your content needs. Note: Only these specific values are supported.

**Prompt Engineering:** Enhance prompts in the 'Set' nodes with detailed scene descriptions, visual effects, camera movements, style effects, and artistic directions for better video quality. The more descriptive your prompt, the better the output.

**Workflow Chaining:** Connect workflows together - generate a video with text-to-video, then enhance it with video-to-video, or create an image-to-video, then transform it further.

**Batch Processing:** Add loops to process multiple prompts, images, or videos from a list or spreadsheet automatically, generating videos in batch.

**Storage Integration:** Add nodes to save generated videos to Google Drive, Dropbox, S3, or other storage services before or after download.

**Post-Processing:** Add nodes between video generation and download to add captions, apply filters, add watermarks, or integrate with video editing tools.

**Error Handling:** Add notification nodes (Email, Slack, Telegram) to alert when video generation completes, fails, or encounters errors.

**Content Management:** Add nodes to log video generation results, track processing status, or store outputs in databases or spreadsheets.

**Video Variations:** Create multiple video variations with different prompts and settings for A/B testing or content variations.

**Social Media Integration:** Add nodes after video download to automatically upload videos to YouTube, Instagram, TikTok, or other platforms.

**Quality Control:** Add conditional logic to check video quality, file size, or other characteristics before proceeding with download or distribution.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
