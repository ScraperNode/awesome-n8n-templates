# 🎬 Generate animal battle videos with Flux AI, Creatomate & multi-platform publishing

> ⚡ **276 views** · 🎬 [Content Creation & Video](../)

## Description

**Author: [Jadai Kongolo](https://www.instagram.com/jadai_ai_automation/)**

## Overview
This comprehensive n8n workflow automates the entire production pipeline for creating viral "versus" style battle videos. The system generates dramatic AI-powered fight scenes between animals (or any characters you choose), complete with photorealistic imagery, cinematic effects, and automatic multi-platform publishing. Perfect for content creators looking to generate engaging short-form content at scale without manual editing or design work.

## Use Cases
1. **Viral Social Media Content**: Automatically produce trending "X vs Y" battle videos that perform exceptionally well on TikTok, Instagram Reels, and YouTube Shorts. These comparison-style videos consistently generate high engagement and shares.

2. **Educational Entertainment**: Create visually stunning educational content comparing animals, historical figures, sports teams, or any competitive matchups while maintaining viewer interest through dramatic AI-generated imagery.

3. **Automated Content Pipeline**: Build a hands-free content factory that can produce multiple videos per day on schedule, complete with automatic posting to all major social platforms through integrated social media management tools.

👉 check out the UGC version of this [here](https://kongolo.gumroad.com/l/qkkndj)

## How It Works

### Stage 1 - Scene Generation
The workflow begins by fetching a main character from your Google Sheets database (filtered by "To Do" status). An AI agent powered by GPT-4.1-mini then generates eight unique opponents from your specified category, ensuring each comes from a different environment or background for maximum variety and interest.

### Stage 2 - AI Image Creation
The system creates three distinct types of images for each matchup:

**Close-Up Portraits**: Generates fierce, intimidating close-up shots of both the main character and each opponent using Flux image generation through PiAPI. The AI creates hyper-realistic, photorealistic images showing each character roaring with detailed textures, dramatic lighting, and threatening expressions.

**Battle Aftermath Scenes**: A separate AI agent determines the realistic winner based on each character's strengths, then generates a dramatic full-body scene showing the victor standing dominantly over the defeated opponent. These images include visible battle scars, wounds, and cinematic composition that makes the outcome unmistakably clear.

The workflow includes intelligent polling mechanisms (90-second waits) to ensure all images are fully generated before proceeding, then aggregates and stores all image URLs in your Google Sheet for reference.

### Stage 3 - Video Assembly
Using Creatomate's video rendering API, the workflow combines all generated images with background music and animated transitions into a polished final video. The template creates a fast-paced montage showing all eight battles with "VS" graphics and dynamic cuts timed to music beats.

### Stage 4 - Multi-Platform Publishing
Once rendered, the video is automatically uploaded to Blotato's social media management platform and simultaneously published to:
- **Instagram Reels** with optimized captions
- **TikTok** with proper AI-generated content disclosure
- **YouTube Shorts** as unlisted for review

The workflow updates your Google Sheet with "Created" status and final video URL for tracking and analytics.

## Customization Options

### Content Themes
- Modify the Google Sheet to change from animals to any category: superheroes, historical warriors, vehicles, mythical creatures, sports teams, etc.
- Adjust AI prompts in the "Scene Creator" node to control opponent selection criteria
- Edit the "Image Prompt Generator" to customize visual style (fantasy, sci-fi, realistic, cartoon, etc.)

### Video Production
- Change video dimensions in "Generate Close Ups" and "Generate Scene" nodes for different platform requirements
- Replace the Creatomate template with your own design for different visual styles
- Swap background music by updating the music source URL in the "Render Video" node
- Adjust the number of battles per video (currently 8 scenes)

### Publishing Settings
- Configure posting schedules via the Schedule Trigger node
- Modify platform-specific settings (privacy levels, comments, duets) in Instagram/TikTok/YouTube nodes
- Add or remove social platforms by connecting additional Blotato API endpoints
- Customize captions using data from your Google Sheet

### AI Models
- Switch between different OpenRouter models for cost/quality tradeoffs
- Use GPT-4.1 for complex winner determination and GPT-4.1-mini for faster scene generation
- Experiment with different Flux models through PiAPI for various artistic styles

## Prerequisites
- **Google Sheets**: Connected Google account with access to the workflow template
- **OpenRouter API**: For GPT-4.1 and GPT-4.1-mini access
- **PiAPI Account**: For Flux image generation (use referral code for bonus credits)
- **Creatomate Account**: For video rendering with template access
- **Blotato Account**: For multi-platform social media publishing (use promo code "NATE30" for 30% off for 6 months)

---

# 🛠️ Setup Guide  

1. **Make a copy** of this [Google Sheet Template](https://docs.google.com/spreadsheets/d/1hBjE1LR5rmSlEkwkNIwf_NnbjBS_cALS5FJ0r6vh7nM/edit?usp=sharing) and connect it to the five Google Sheet nodes in the workflow:
   - `Get Main Character`
   - `Add Close Ups`
   - `Add Winner`
   - `Get Elements`
   - `Update Video Status`

2. Connect your [OpenRouter](https://openrouter.ai/) API key to the two OpenRouter nodes in the "Output Parser & Chat Models" section:
   - `GPT 4.1-mini`
   - `GPT 4.1`

3. Create a [PiAPI](https://piapi.ai/workspace) account and connect your API key to:
   - `Generate Close Ups`
   - `Generate Scene`
   - `Get Close Ups`
   - `Get Winners`

4. Create a [Creatomate](https://creatomate.com/) account and connect your template ID and API key to the `Render Video` node.  
   You can duplicate the same template shown in the video by using the source code linked in the same Skool post where you downloaded the workflow.

5. Connect your [Blotato](https://blotato.com/) account and get your API key to enable auto-publishing:
   - Configure the `Upload to Blotato` node
   - Add your account IDs to `Instagram`, `TikTok`, and `YouTube` nodes
 
6. Customize the `Schedule Trigger` node to set your desired posting frequency (daily, weekly, etc.)

---

The Generate authentic, influencer-style UGC videos on autopilot version of this AI video generator can be found [here](https://kongolo.gumroad.com/l/qkkndj).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
