# 🎬 Product visualization in Spaces with AI: Generate & publish videos to social media

> ⚡ **971 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

![Captura de pantalla 20250828 a las 1.13.15.png](fileId:2267)

This automation template is a revolutionary AI-powered interior design and product visualization workflow that allows users to seamlessly place any object or artwork into real spaces using artificial intelligence. Upload two photos - one of your product/artwork and another of the target space - and watch as AI intelligently composites them together, then converts the result into a captivating animated video with professional camera movements. The final video is automatically published across TikTok, Instagram Reels, and YouTube Shorts for maximum reach.

***Note: This workflow uses Google's Gemini 2.5 Flash (Nano Banana) for intelligent image composition and FAL AI's WAN v2.2-a14b model for video generation. Each complete generation costs approximately $0.25 USD, making it an incredibly cost-effective solution for professional-quality content creation.***

## Who Is This For?
- **Interior Designers & Architects:** Visualize how furniture, artwork, or decor will look in client spaces before making purchases or installations.
- **Art Dealers & Galleries:** Show potential buyers how paintings or sculptures would appear in their homes or offices with realistic placement and lighting.
- **E-commerce Retailers:** Create compelling product demonstrations by showing furniture, artwork, or home decor items in realistic room settings.
- **Real Estate Professionals:** Help clients visualize how their furniture or art collection would look in new properties.
- **Content Creators & Influencers:** Generate engaging "before and after" style content showing product placements in various environments.
- **Marketing Agencies:** Scale visual content production for furniture brands, art dealers, and home decor companies.

## What Problem Does This Workflow Solve?
Traditional product visualization requires expensive 3D rendering software, professional photography setups, or costly photoshoot arrangements. This workflow eliminates these barriers by:
- **Intelligent Object Placement:** AI analyzes both the object/artwork and target space to determine optimal positioning, scale, and lighting integration.
- **Realistic Integration:** Advanced AI composition ensures shadows, reflections, and lighting match perfectly between the object and environment.
- **Professional Animation:** Converts static compositions into cinematic videos with smooth camera movements that highlight the placement naturally.
- **Cost-Effective Production:** At just $0.25 per generation, it's exponentially cheaper than traditional 3D rendering or professional photography.
- **Instant Multi-Platform Distribution:** Automatically formats and publishes content across all major social media platforms simultaneously.

## How It Works
1. **Dual Image Upload:** Users upload two photos through an intuitive web form:
   - **Photo 1:** The object, artwork, or furniture piece to be placed
   - **Photo 2:** The target room or space where the item should appear
   - **Optional Description:** Additional context about the desired placement
2. **Image Processing & Hosting:** Both images are automatically uploaded to ImgBB for reliable cloud access throughout the workflow.
3. **AI-Powered Composition:** Google's Gemini 2.5 Flash (Nano Banana) analyzes both images and intelligently composites the object into the space, considering:
   - Proper scale and proportions
   - Realistic lighting and shadows
   - Perspective and depth matching
   - Environmental integration
4. **Video Generation:** FAL AI's WAN v2.2-a14b model transforms the composed image into a professional 4-second video featuring:
   - Smooth camera panning movements
   - Natural motion blur effects
   - Cinematic framing and composition
5. **Quality Assurance:** Automated status monitoring ensures successful generation before proceeding to publication.
6. **Multi-Platform Publishing:** The final video is automatically uploaded to TikTok, Instagram Reels, and YouTube Shorts with customizable captions.

## Setup
1. **FAL AI Credentials:** Create an account at [fal.ai](https://fal.ai) and add your API credentials for:
   - Gemini 2.5 Flash (Nano Banana) image composition
   - WAN v2.2-a14b image-to-video conversion
2. **ImgBB API Setup:** 
   - Sign up at [imgbb.com](https://imgbb.com) for free image hosting
   - Generate an API key and update the `imgbb_api_key` value in the "Set APIs Vars" node
3. **Upload-Post Configuration:** 
   - Create an account at [upload-post.com](https://upload-post.com)
   - Connect your TikTok, Instagram, and YouTube accounts
   - Add your Upload-Post credentials to the "Upload Post" node
4. **Prompt Customization:** In the "Set Prompts" node, fine-tune:
   - `prompt-image-edit`: "Place the [object] in the room on the back wall, respecting the [object] perfectly and the background room and the camera frame in the photo of the room."
   - `prompt-image-to-video`: Camera movement style and cinematic effects
5. **Cost Management:** Monitor usage as each generation costs approximately $0.25 USD through the FAL AI services.

## Requirements
- **Accounts:** n8n, fal.ai, imgbb.com, upload-post.com, social media accounts (TikTok, Instagram, YouTube).
- **API Keys & Credentials:** FAL AI API token, ImgBB API key, Upload-Post authentication.
- **Budget:** Approximately $0.25 USD per complete workflow execution.
- **Social Media Setup:** Business/Creator accounts connected through Upload-Post platform.

## Features
- **Dual-Image Intelligence:** Sophisticated AI analysis of both object and space for perfect integration
- **Cost-Effective Processing:** Only $0.25 per generation compared to hundreds for traditional methods
- **Advanced AI Models:** Google Gemini 2.5 Flash (Nano Banana) + FAL WAN v2.2-a14b for premium quality
- **Realistic Lighting Integration:** AI matches shadows, reflections, and ambient lighting automatically
- **Professional Video Output:** Cinematic camera movements optimized for social media engagement
- **Multi-Platform Optimization:** Automatic formatting for TikTok, Instagram Reels, and YouTube Shorts
- **Robust Error Handling:** Built-in retry mechanisms and quality verification
- **Scalable Production:** Handle multiple object-space combinations efficiently

Transform your product visualization workflow today - simply upload a photo of any object and the space where you want to place it, and let AI create stunning, professional videos that showcase perfect integration for just $0.25 per generation.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
