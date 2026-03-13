# 🎬 Repurpose YouTube videos to multiple content types with OpenRouter AI and Airtable

> ⚡ **1,149 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

# YouTube Content Repurposing Automation

## Who's it for

This workflow is for content creators, marketers, agencies, coaches, and businesses who want to maximize their YouTube content ROI by automatically generating multiple content assets from single videos. It's especially useful for professionals who want to:

- Repurpose YouTube videos into blogs, social posts, newsletters, and tutorials without manual effort
- Scale their content production across multiple channels and platforms
- Create consistent, high-quality content derivatives while saving time and resources
- Build automated content systems that generate multiple revenue streams
- Maintain active presence across social media, email, and blog platforms simultaneously

## What problem is this workflow solving

Content creators face significant challenges when trying to maximize their video content:

**Time-intensive manual repurposing**: Converting one YouTube video into multiple content formats traditionally requires hours of manual writing, editing, and formatting across different platforms.

**Inconsistent content quality**: Manual repurposing often leads to varying quality levels and missed opportunities to optimize content for specific platforms.

**High costs for content services**: Hiring ghostwriters or content agencies to repurpose videos can cost thousands of dollars monthly.

**Scaling bottlenecks**: Manual processes prevent creators from efficiently scaling their content across multiple channels and formats.

This workflow solves these problems by automatically extracting YouTube video transcripts, using AI to generate multiple high-quality content formats (tutorials, blog posts, social media content, newsletters), and organizing everything in Airtable for easy management and distribution.

## How it works

**Automated Video Processing**  
Starts with a manual trigger and retrieves YouTube URLs from your Airtable configuration, processing only videos marked as "selected" while filtering out those marked for deletion.

**Intelligent Transcript Extraction**  
Uses Scrape Creator API to extract video transcripts, automatically cleaning and formatting the text for optimal AI processing and content generation.

**Multi-Format Content Generation**  
Leverages OpenRouter models, o you can easily test different AI models and choose the one that delivers the best results for your needs:
- Step-by-step tutorials with code snippets and technical details
- YouTube scripts with hooks, titles, and conclusions
- Blog posts optimized for lead generation
- Structured summaries with key takeaways
- LinkedIn posts with engagement triggers
- Newsletter content for email marketing
- Twitter/X posts for social media

**Smart Content Filtering**  
Processes only the content types you've selected in Airtable, ensuring efficient resource usage and faster execution times.

**Automated Content Organization**  
Matches and combines all generated content pieces by URL, then updates your Airtable with complete, ready-to-use content assets organized by type and source video.

## How to set up

### Required credentials

- **OpenRouter API key** 
- **Airtable Personal Access Token** 
- **[Scrape Creators API Key](Scrape Creator API key)** - For YouTube transcript extraction and processing

### Airtable base setup

Create an Airtable base with one main table:

**Videos Table**:
- **title** (Single line text): Video title for reference
- **url** (URL): YouTube video URL to process
- **Status** (Single select): Options: "selected", "delete", "processed"
- **output** (Multiple select): Content types to generate
  - summary
  - tutorial  
  - blog-post
  - linkedin
  - newsletter
  - tweeter
  - youtube
- **summary** (Long text): Generated video summary
- **tutorial** (Long text): Generated step-by-step tutorial
- **key_take_aways** (Long text): Extracted key insights
- **blog_post** (Long text): Generated blog post content
- **linkedin** (Long text): LinkedIn post content
- **newsletter** (Long text): Email newsletter content
- **tweeter** (Long text): Twitter/X post content
- **youtube_titles** (Long text): YouTube video title suggestions
- **youtube_hook** (Long text): Video opening hooks
- **youtube_steps** (Long text): Video step breakdowns
- **youtube_conclusion** (Long text): Video ending/CTAs

### API Configuration

**Scrape Creator Setup**:
1. Sign up for Scrape Creator API
2. Obtain your API key from the dashboard
3. Configure the HTTP Request node with your credentials
4. Set the endpoint to: `https://api.scrapecreators.com/v1/youtube/video/transcript`

**OpenAI Setup**:
1. Create an OpenRouter account and generate an API key

### Workflow Configuration

1. Import the workflow JSON into your n8n instance
2. Update all credential references with your API keys
3. Configure the Airtable nodes with your base and table IDs
4. Test the workflow with a single video URL first

## Requirements

- **n8n instance** (self-hosted or cloud)
- **Active API subscriptions** for OpenRouter (or the LLM or your choice), Airtable, and Scrape Creator
- **YouTube video URLs** - Must be publicly accessible videos with available transcripts
- **Airtable account** - Free tier sufficient for most use cases

## How to customize the workflow

### Modify content generation prompts

Edit the LLM Chain nodes to customize content style and format:
- **Tutorial node**: Adjust technical depth and formatting preferences
- **Blog post node**: Modify tone, length, and CTA strategies
- **LinkedIn node**: Customize engagement hooks and professional tone
- **Newsletter node**: Tailor subject lines and email marketing approach

### Adjust AI model selection

Update the OpenRouter Chat Model to use different models

### Add new content formats

Create additional LLM Chain nodes for new content types:
- Instagram captions
- TikTok scripts
- Podcast descriptions
- Course outlines

## 🔗 Nodes Used

Airtable, HTTP Request, Filter, Basic LLM Chain, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
