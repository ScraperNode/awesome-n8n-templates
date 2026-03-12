# 🎬 Generate video ads with Gemini 2.5 flash images & FAL WAN animation

> ⚡ **2,802 views** · 🎬 [Content Creation & Video](../)

## Description

![Captura de pantalla 20250828 a las 1.25.30.png](fileId:2268)

This automated workflow template transforms a single product image into a complete professional advertisement video with dynamic motion and custom soundtrack. Perfect for e-commerce businesses, marketing agencies, and content creators who need to quickly produce high-quality video ads for social media platforms like TikTok, Instagram Reels, and YouTube Shorts.

***Note: This workflow uses FAL.ai API for AI image generation with Gemini Bano Banana and video creation with Wan, Google Gemini for intelligent storyboarding, ImgBB for image hosting, and Upload-Post.com for automated social media publishing.***

## Who Is This For?
- **E-commerce Businesses:** Transform product photos into engaging video advertisements that drive sales and increase conversion rates across social media platforms.
- **Marketing Agencies:** Scale video ad production for multiple clients without expensive video equipment or extensive editing time.
- **Social Media Managers:** Create consistent, professional video content for brands that stands out in crowded social feeds.
- **Content Creators & Influencers:** Generate eye-catching product showcase videos for sponsored content and affiliate marketing campaigns.
- **Small Business Owners:** Compete with larger brands by creating professional-quality video ads on a budget.

## What Problem Does This Workflow Solve?
Creating professional video advertisements traditionally requires expensive equipment, design skills, and hours of editing time. This workflow addresses these challenges by:
- **AI-Powered Visual Enhancement:** Automatically generates 4 unique variations of your product image with different lighting, backgrounds, and visual effects.
- **Intelligent Motion Generation:** Converts static images into dynamic 5-second video clips with smooth camera movements, rotations, and visual effects.
- **Automated Storyboarding:** Uses AI to create a cohesive visual narrative that showcases your product from multiple appealing angles.
- **Professional Audio Integration:** Automatically generates and adds suitable background music that matches your product and brand aesthetic.
- **Seamless Video Composition:** Combines all video clips into a single 20-second advertisement with smooth transitions.
- **Multi-Platform Publishing:** Automatically uploads finished videos to TikTok, Instagram, and YouTube with optimized formatting.

## How It Works
1. **Product Upload:** Submit a single product image and brief description through the web form interface.
2. **AI Storyboard Creation:** Google Gemini AI analyzes your product and creates a 4-frame visual story with lighting enhancements, background changes, and cinematic effects.
3. **Image Generation:** FAL.ai Gemini 2.5 Flash creates 4 unique variations of your product image based on the AI-generated prompts.
4. **Video Animation:** Each enhanced image is converted into a 5-second video clip with specific motion patterns (rotation, zoom, lighting sweeps, camera orbits).
5. **Quality Control:** The system monitors video generation progress and ensures all clips are successfully created before proceeding.
6. **Video Sequencing:** FFmpeg API combines all 4 video clips into a seamless 20-second advertisement with smooth transitions.
7. **Audio Enhancement:** AI generates appropriate background music that matches your product category and brand style.
8. **Final Composition:** Audio and video are merged to create the complete advertisement.
9. **Automated Publishing:** The finished video is automatically uploaded to TikTok, Instagram Reels, and YouTube with your product description.

## Setup
1. **FAL.ai API Setup:** 
   - Create account at [fal.ai](https://fal.ai) and obtain API credentials
   - Add your API token to the HTTP request authentication nodes
2. **Google Gemini API:**
   - Set up Google AI Studio account and get API key
   - Configure the Google Gemini Chat Model node with your credentials
3. **ImgBB Configuration:**
   - Register at [imgbb.com](https://imgbb.com) for image hosting
   - Update the `imgbb_api_key` in the "Set APIs Vars" node
4. **Upload-Post Integration:**
   - Create account at [upload-post.com](https://upload-post.com)
   - Connect your social media accounts (TikTok, Instagram, YouTube)
   - Add your Upload-Post credentials to the final upload node
5. **Workflow Configuration:**
   - Adjust video parameters (resolution, frame rate, duration) in the image-to-video nodes
   - Customize audio prompts in the "Create Sounds" node
   - Modify social media posting settings in the "Upload Post" node

## Requirements
- **Accounts:** n8n, FAL.ai, Google AI Studio, ImgBB, Upload-Post.com
- **API Keys:** FAL.ai API token, Google Gemini API key, ImgBB API key, Upload-Post credentials
- **Social Media:** Connected TikTok, Instagram, and YouTube accounts for automated publishing

## Features
- **AI-Powered Image Enhancement:** Creates 4 professional variations with lighting, background, and effect improvements
- **Dynamic Video Generation:** Converts static images to engaging videos with camera movements and visual effects
- **Intelligent Audio Matching:** Generates background music that complements your product and target audience
- **Multi-Platform Optimization:** Automatically formats videos for TikTok, Instagram Reels, and YouTube Shorts (9:16 aspect ratio)
- **Progress Monitoring:** Built-in status checking ensures reliable video generation before proceeding to next steps
- **Automated Publishing:** Direct upload to social media platforms with optimized descriptions and formatting
- **Scalable Processing:** Handles multiple video generations simultaneously for efficient batch processing
- **Professional Quality:** Produces broadcast-ready videos suitable for paid advertising campaigns

Use this template to revolutionize your product marketing strategy, automatically converting any product photo into multiple high-quality video advertisements ready for immediate social media deployment.

## 🔗 Nodes Used

HTTP Request, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
