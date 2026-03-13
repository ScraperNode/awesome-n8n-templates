# 🎬 Generate video from an image with ByteDance Seedance 1.5 Pro via KIE.AI

> ⚡ **805 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**This n8n template demonstrates how to generate animated videos from static images using ByteDance Seedance 1.5 Pro model through the KIE.AI API. The workflow creates dynamic video content based on text prompts and input images, supporting custom aspect ratios, resolutions, and durations for versatile video creation.**

**Use cases are many:** Create animated videos from product photos, generate social media content from images, produce video ads from static graphics, create animated story videos, transform photos into dynamic content, generate video presentations, create animated thumbnails, or produce video content for marketing campaigns!

### **Good to know**

- The workflow uses ByteDance Seedance 1.5 Pro model via KIE.AI API for high-quality image-to-video generation
- Creates animated videos from static images based on text prompts
- Supports multiple aspect ratios (9:16 vertical, 16:9 horizontal, 1:1 square)
- Configurable resolution options (720p, 1080p, etc.)
- Customizable video duration (in seconds)
- KIE.AI pricing: Check current rates at https://kie.ai/ for video generation costs
- Processing time: Varies based on video length and KIE.AI queue, typically 1-5 minutes
- Image requirements: File must be publicly accessible via URL (HTTPS recommended)
- Supported image formats: PNG, JPG, JPEG
- Output format: Video file URL (MP4) ready for download or streaming
- Automatic polling system handles processing status checks and retries

### **How it works**

1. **Video Parameters Setup:** The workflow receives video prompt and image URL (set in 'Set Video Parameters' node or via trigger)
2. **Video Generation Submission:** Parameters are submitted to KIE.AI API using ByteDance Seedance 1.5 Pro model
3. **Processing Wait:** Workflow waits 5 seconds, then polls the generation status
4. **Status Check:** Checks if video generation is complete, queuing, generating, or failed
5. **Polling Loop:** If still processing, workflow waits and checks again until completion
6. **Video URL Extraction:** Once complete, extracts the generated video file URL from the API response
7. **Video Download:** Downloads the generated video file for local use or further processing

The workflow automatically handles different processing states (queuing, generating, success, fail) and retries polling until video generation is complete. The Seedance model creates smooth, animated videos from static images based on the provided text prompt, bringing images to life with natural motion.

### **How to use**

1. **Setup Credentials:** Configure KIE.AI API key as HTTP Bearer Auth credential
2. **Set Video Parameters:** Update 'Set Video Parameters' node with:
   - **prompt:** Text description of the desired video animation/scene
   - **image_url:** Publicly accessible URL of the input image
3. **Configure Video Settings:** Adjust in 'Submit Video Generation Request' node:
   - **aspect_ratio:** 9:16 (vertical), 16:9 (horizontal), 1:1 (square)
   - **resolution:** 720p, 1080p, etc.
   - **duration:** Video length in seconds (e.g., 8, 10, 15)
4. **Deploy Workflow:** Import the template and activate the workflow
5. **Trigger Generation:** Use manual trigger to test, or replace with webhook/other trigger
6. **Receive Video:** Get generated video file in the output, ready for download or streaming

**Pro tip:** For best results, ensure your image is hosted on a public URL (HTTPS) and matches the desired aspect ratio. Use clear, high-quality images for better video generation. Write detailed, descriptive prompts to guide the animation - the more specific your prompt, the better the video output. The workflow automatically handles polling and status checks, so you don't need to worry about timing.

### **Requirements**

- **KIE.AI API** account for accessing ByteDance Seedance 1.5 Pro video generation
- **Image File URL** that is publicly accessible (HTTPS recommended)
- **Text Prompt** describing the desired video animation/scene
- **n8n** instance (cloud or self-hosted)
- Supported image formats: PNG, JPG, JPEG

### **Customizing this workflow**

**Trigger Options:** Replace the manual trigger with webhook trigger for API-based video generation, schedule trigger for batch processing, or form trigger for user image uploads.

**Video Settings:** Modify aspect ratio, resolution, and duration in 'Submit Video Generation Request' node to match your content needs (TikTok vertical, YouTube horizontal, Instagram square, etc.).

**Prompt Engineering:** Enhance prompts in 'Set Video Parameters' node with detailed descriptions, camera movements, animation styles, and scene details for better video quality.

**Output Formatting:** Modify the 'Extract Video URL' code node to format output differently (add metadata, include processing time, add file size, etc.).

**Error Handling:** Add notification nodes (Email, Slack, Telegram) to alert when video generation fails or completes.

**Post-Processing:** Add nodes after video generation to save to cloud storage, upload to YouTube/Vimeo, send to video editing tools, or integrate with content management systems.

**Batch Processing:** Add loops to process multiple images from a list or spreadsheet automatically, generating videos for each image.

**Storage Integration:** Connect output to Google Drive, Dropbox, S3, or other storage services for organized video file management.

**Social Media Integration:** Automatically post generated videos to TikTok, Instagram Reels, YouTube Shorts, or other platforms.

**Video Enhancement:** Chain with other video processing workflows - add captions, music, transitions, or combine multiple generated videos.

**Aspect Ratio Variations:** Generate multiple versions of the same video in different aspect ratios (9:16, 16:9, 1:1) for different platforms.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
