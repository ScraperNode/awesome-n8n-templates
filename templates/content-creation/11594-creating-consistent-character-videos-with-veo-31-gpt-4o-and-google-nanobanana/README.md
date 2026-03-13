# 🎬 Creating consistent character videos with Veo 3.1, GPT-4o, and Google NanoBanana

> ⚡ **2,683 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

**This n8n template demonstrates how to create consistent character videos using AI image and video generation. The workflow generates photorealistic videos featuring the same character across different poses, locations, and outfits, maintaining perfect character consistency throughout cinematic transitions.**

**Use cases are many:** Create consistent character content for social media, generate cinematic videos for brand campaigns, produce lifestyle content with the same character, automate video content creation for TikTok/Instagram, create character-based storytelling videos, or scale video production with consistent visual identity!

### **Good to know**

- The workflow maintains perfect character consistency across frames using reference images
- Uses multiple AI services: GPT-4o for prompt generation, Google Nano Banana Edit for image generation, and Veo 3.1 for video creation
- Features 100 unique locations (beaches, cities, cafes, rooftops, etc.) and 15 different poses
- KIE.AI pricing: Check current rates for Veo 3.1 and Nano Banana Edit models
- Processing time: ~5-10 minutes per complete video (depends on AI service queue)
- Output format: 9:16 aspect ratio videos optimized for TikTok/Instagram
- Automatically generates social media content (titles, descriptions, hashtags) using GPT-4o
- Includes AI disclosure labels for TikTok compliance

### **How it works**

1. **Location & Pose Selection:** Randomly selects one location from 100 options and 3 unique poses from 15 options
2. **AI Story Creation:** GPT-4o generates cinematic prompts for first frame, last frame, and video motion while maintaining character identity from reference images
3. **Start Frame Generation:** Google Nano Banana Edit creates the first frame image with character in initial pose, location, and outfit
4. **End Frame Generation:** Nano Banana Edit generates the final frame using start frame as reference, changing only pose/expression while maintaining consistency
5. **Video Generation:** Veo 3.1 creates smooth cinematic video transition between frames with natural character movement
6. **Content Creation:** GPT-4o generates engaging title, description, and hashtags for social media
7. **Auto-Publishing:** Automatically posts to TikTok (with AI disclosure) and Instagram, plus sends previews via Telegram

The workflow ensures the same character appears in both frames with identical facial features, hair, skin tone, and overall appearance, while only pose and expression change. The video features dynamic camera movements (arc shots, dolly pushes, crane rises, etc.) for cinematic quality.

### **How to use**

1. **Setup Credentials:** Configure OpenAI API, KIE.AI API, Blotato API, and Telegram Bot credentials
2. **Add Reference Images:** Update the 5 reference image URLs in the "Create Start Frame" node with your character images
3. **Configure Social Media:** Set up Blotato accounts for TikTok and Instagram posting
4. **Set Telegram Chat ID:** Replace `YOUR_TELEGRAM_CHAT_ID` with your Telegram chat ID for previews
5. **Deploy Workflow:** Import the template and activate the workflow
6. **Trigger Generation:** Use the schedule trigger (default: every 6 hours) or replace with manual/webhook trigger
7. **Receive Content:** Get previews via Telegram and published posts on TikTok & Instagram

**Pro tip:** The workflow uses 5 reference images to maintain character consistency. For best results, use clear, high-quality photos of your character from different angles. The workflow automatically handles character identity preservation across all generated content.

### **Requirements**

- **OpenAI API** account for GPT-4o prompt generation and social media content creation
- **KIE.AI API** account for Veo 3.1 video generation and Google Nano Banana Edit image generation
- **Blotato API** account for TikTok and Instagram posting automation
- **Telegram Bot** setup for preview delivery (optional but recommended)
- **n8n** instance (cloud or self-hosted)
- **Reference Images:** 5 high-quality images of your character (URLs or hosted images)

### **Customizing this workflow**

**Character Variations:** Modify the reference images to create videos with different characters while maintaining the same workflow structure.

**Location Customization:** Edit the location pool in the "Code in JavaScript" node to add or modify locations (currently 100 options).

**Pose Library:** Expand or customize the pose library in the JavaScript code node (currently 15 poses with detailed guidance).

**Social Media Platforms:** Add more platforms by duplicating the Blotato nodes and configuring additional accounts (YouTube, Facebook, etc.).

**Content Style:** Adjust GPT-4o prompts in "Story Creator Agent" and "Title Description" nodes to change content tone, style, or language.

**Scheduling:** Replace the schedule trigger with webhook, form, or manual trigger based on your needs.

**Video Settings:** Modify Veo 3.1 parameters (aspect ratio, watermark, seeds) in the "Veo 3.1" node for different output formats.

**Batch Processing:** Add loops to generate multiple videos with different location/pose combinations automatically.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
