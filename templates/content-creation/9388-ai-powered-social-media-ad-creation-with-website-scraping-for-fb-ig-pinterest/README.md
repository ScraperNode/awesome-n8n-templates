# 🎬 AI-powered social media ad creation with website scraping for FB, IG & Pinterest

> ⚡ **385 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Purpose & Audience
This workflow empowers marketing teams, agencies and solopreneurs to instantly generate on-brand, platform-optimized social media ads — without designers or complex setup.

### Perfect for:
- Running performance marketing campaigns
- A/B testing ad creatives
- Scaling content for multiple platforms
- Non-technical users who want AI-powered design

## Key Features
**Smart Prompt Engineering:**
 – Scrapes your provided landing page to auto-extract brand voice, offers, and content
 – Use Gemini AI to craft Ideogram-optimized prompts

**Multi-Platform Ad Generation:**
Facebook, Instagram & Pinterest.
 – Supports 7 formats:
  • Facebook Feed (1200x630)
  • Facebook Story (1080x1920)
  • Instagram Feed (1080x1080)
  • Instagram Story & Reel (1080x1920)
  • Pinterest Pin (1000x1500)
  • Pinterest Story (1080x1920)

**Powered by Ideogram v3 Turbo (Replicate):**
 – Public, affordable, around 33 images for $1
 – Understands layout, branding, and text placement
 – ~$0.03/image with $1 free credit

**Delivers Directly to Slack:**
 – Get all generated ads in your team channel with auto-captions (platform, offer, context)


## How It Works (Step-by-Step)
1. **User fills out a simple form with:**
 – Business context, offer, brand colors, platform, and desired ad sizes
 – Additional Features: Landing page URL + toggle to scrape & enhance prompt with AI

2. **If enabled, the workflow:**
 – Scrapes your website using Firecrawl
 – Sends content + form data to Gemini to generate a professional Ideogram prompt

3. **For each selected dimension, the workflow:**
 – Calls Ideogram v3 Turbo on Replicate with the correct aspect ratio
 – Downloads the image from the response URL

4. **All ads are uploaded to Slack with rich captions for easy review & sharing**

## How to Set Up
**Get a Replicate API Token**
1. Sign up at replicate.com
2. Replace YOUR_REPLICATE_API_TOKEN in all 7 HTTP Request nodes

**Create a Slack App**
1. Go to api.slack.com/apps → “Create New App”
2. Add files:write scope → Install to workspace
3. Add as OAuth2 credential in n8n

**Set Up Firecrawl**
1. Get API key at firecrawl.dev
2. Create a Header Auth credential with: Authorization: Bearer YOUR_FIRECRAWL_TOKEN

Activate the workflow and share the Form Trigger URL with your team! 

## Value Proposition
- Go from idea to ad in 60 seconds — no design skills, no designers, no information sharing, no hassle.
- This workflow saves hours of manual design work, ensures brand consistency, and leverages cutting-edge AI — all while costing less than $5 for 100 ads. 
- Ideal for agile marketing teams who need speed, quality, and scalability. 

## Available Models: Customization Option
If you’re comfortable with low-code tools and want to use any other model from the hundreds available at Replicate (https://replicate.com/explore), you’re welcome to do so. Simply update your "POST" request to match the specific schema of the chosen model, and you’re all set. Don’t worry about the schema details—Replicate provides clear, easy-to-follow documentation for each model. Some models are free with limited quotas, while others require payment. Overall, it offers the most comprehensive library of image models available.

## 🔗 Nodes Used

HTTP Request, Slack, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
