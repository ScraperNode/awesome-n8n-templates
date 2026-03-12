# 🎬 End-to-end Ai blog research and writer with Gemini AI, Supabase and Nano-Banana

> ⚡ **1,225 views** · 🎬 [Content Creation & Video](../)

## Description

# Blog Research and Writer n8n Workflow - Ai Blog Writer

**Fully automated blog creation system using n8n + AI Agents + Image Generation**

[Example Blog](https://livesume.com/blog/building-personal-brand-social-media-guide)

## Overview

This workflow automates the entire blog creation pipeline—from topic research to final publication. Three specialized AI agents collaborate to produce publication-ready blog posts with custom images, all saved directly to your Supabase database.

## How It Works

### 1. **Research Agent** (Topic Discovery)
- **Triggers**: Runs on schedule (default: daily at 4 AM)
- **Process**:
  - Fetches existing blog titles from Supabase to avoid duplicates
  - Uses Google Search + RSS feeds to identify trending topics in your niche
  - Scrapes competitor content to find content gaps
  - Generates detailed topic briefs with SEO keywords, search intent, and differentiation angles
- **Output**: Comprehensive research document with SERP analysis and content strategy

### 2. **Writer Agent** (Content Creation)
- **Triggers**: Receives research from Agent 1
- **Process**:
  - Writes full blog article based on research brief
  - Follows strict SEO and readability guidelines (no AI fluff, natural tone, actionable content)
  - Structures content with proper HTML markup
  - Includes key sections: hook, takeaways, frameworks, FAQs, CTAs
  - Places image placeholders with mock URLs (`https://db.com/image_1`, etc.)
- **Output**: Complete JSON object with title, slug, excerpt, tags, category, and full HTML content

### 3. **Image Prompt Writer** (Visual Generation)
- **Triggers**: Receives blog content from Agent 2
- **Process**:
  - Analyzes blog content to determine number and type of images needed
  - Generates detailed 150-word prompts for each image (feature image + content images)
  - Creates prompts optimized for Nano-Banana image model
  - Names each image descriptively for SEO
- **Output**: Structured prompts for 3-6 images per blog post

### 4. **Image Generation Pipeline**
- **Process**:
  - Loops through each image prompt
  - Generates images via Nano-Banana API (Wavespeed.ai)
  - Downloads and converts images to PNG
  - Uploads to Supabase storage bucket
  - Generates permanent signed URLs
  - Replaces mock URLs in HTML with real image URLs
- **Output**: Blog HTML with all images embedded

### 5. **Publication**
- Final blog post saved to Supabase `blogs` table as draft
- Ready for immediate publishing or review

## Key Features

✅ **Duplicate Prevention**: Checks existing blogs before researching new topics  
✅ **SEO Optimized**: Natural language, proper heading structure, keyword integration  
✅ **Human-Like Writing**: No robotic phrases, varied sentence structure, actionable advice  
✅ **Custom Images**: Generated specifically for each blog's content  
✅ **Fully Structured**: JSON output with all metadata (tags, category, excerpt, etc.)  
✅ **Error Handling**: Automatic retries with wait periods between agent calls  
✅ **Tool Integration**: Google Search, URL scraping, RSS feeds for research

## Setup Requirements

### 1. **API Keys Needed**
- **Google Gemini API**: For Gemini 2.5 Pro/Flash models (content generation/writing)
- **Groq API (optional)**: For Kimi-K2-Instruct model (research/writing)
- **Serper.dev API**: For Google Search (2,500 free searches/month)
- **Wavespeed.ai API**: For Nano-Banana image generation
- **Supabase Account**: For database and image storage

### 2. **Supabase Setup**
- Create `blogs` table with fields:
  - `title`, `slug`, `excerpt`, `category`, `tags`, `featured_image`, `status`, `featured`, `content`
- Create storage bucket for blog images
- Configure bucket as public or use signed URLs

### 3. **Workflow Configuration**

**Update these placeholders:**

- **RSS Feed URLs**: Replace `[your website's rss.xml]` with your site's RSS feed
- **Storage URLs**: Update Supabase storage paths in "Upload object" and "Generate presigned URL" nodes
- **API Keys**: Add your credentials to all HTTP Request nodes
- **Niche/Brand**: Customize Research Agent system prompt with your industry keywords
- **Writing Style**: Adjust Writer Agent prompt for your brand voice

## Customization Options

### Change Image Provider
Replace the "nano banana" node with:
- Gemini Imagen 3/4
- DALL-E 3
- Midjourney API
- Any Wavespeed.ai model

### Adjust Schedule
Modify "Schedule Trigger" to run:
- Multiple times daily
- Specific days of week
- On-demand via webhook

### Alternative Research Tools
Replace Serper.dev with:
- Perplexity API (included as alternative node)
- Custom web scraping
- Different search providers

## Output Format

```json
{
  "title": "Your SEO-Optimized Title",
  "slug": "your-seo-optimized-title",
  "excerpt": "Compelling 2-3 sentence summary with key benefits.",
  "category": "Your Category",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "author_name": "Your Team Name",
  "featured": false,
  "status": "draft",
  "content": "<article>...complete HTML with embedded images...</article>"
}
```

## Performance Notes

- **Average runtime**: 15-25 minutes per blog post
- **Cost per post**: ~$0.10-0.30 (depending on API usage)
- **Image generation**: 10-15 seconds per image with Nano-Banana
- **Retry logic**: Automatically handles API timeouts with 5-15 minute wait periods

## Best Practices

1. **Review Before Publishing**: Workflow saves as "draft" status for human review
2. **Monitor API Limits**: Track Serper.dev searches and image generation quotas
3. **Test Custom Prompts**: Adjust Research/Writer prompts to match your brand
4. **Image Quality**: Review generated images; regenerate if needed
5. **SEO Validation**: Check slugs and meta descriptions before going live

## Workflow Architecture

**3 Main Phases:**
1. Research → Writer → Image Prompts (Sequential AI Agent chain)
2. Image Generation → Upload → URL Replacement (Loop-based processing)
3. Final Assembly → Database Insert (Single save operation)

**Error Handling:**
- Wait nodes between agents prevent rate limiting
- Retry logic on agent failures (max 2 retries)
- Conditional checks ensure content quality before proceeding

---

**Result**: Hands-free blog publishing that maintains quality while saving 3-5 hours per post.

## 🔗 Nodes Used

Edit Image, HTTP Request, Supabase, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
