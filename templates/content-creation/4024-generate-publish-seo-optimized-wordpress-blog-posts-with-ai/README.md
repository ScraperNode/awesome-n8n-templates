# 🎬 Generate & publish SEO-optimized WordPress blog posts with AI

> ⚡ **12,530 views** · 🎬 [Content Creation & Video](../)

## Description

# Generate and Publish SEO-Optimized Blog Posts to WordPress

BlogBlitz is an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow that writes and publishes SEO-ready WordPress posts for you. Trigger it from Telegram or let it run on schedule, and it produces 1,500–2,500-word articles on Technology, AI, Tech Facts, History, or Tips, complete with catchy titles, slugs, meta descriptions, and realistic featured images. Made for bloggers and marketers who want a site that stays fresh without writing everything by hand.

*Last updated: September 2026.*

## Who is this for?
Bloggers, content marketers, and WordPress site owners who want high-quality, SEO-ready content without manual writing or formatting.

## What problem is this workflow solving?
Writing good blog posts takes time and skill: ideas, drafts, images, SEO fields, publishing. BlogBlitz automates the whole chain, from topic to published post plus a notification, so your site stays active and easy to find.

## What this workflow does
- **Triggers**: Runs every 3 hours via a Schedule Trigger, or on demand with the Telegram command ("generate").  
- **Generates Content**: Uses OpenRouter to pick a category (e.g., Technology, AI) and create a title, slug, focus keyphrase, and meta description.  
- **Writes Articles**: OpenAI crafts 1,500–2,500-word posts with SEO-friendly structure, headings, and a call-to-action.  
- **Adds Visuals**: Generates realistic featured images with OpenAI and uploads them to WordPress.  
- **SEO Features**: Generates optimized slug, focus keyphrase, and meta description.  
- **Publishes**: Posts articles to WordPress with proper categories and featured images.  
- **Notifies**: Sends publish alerts with links to Discord and Telegram.  

## Setup
1. **[n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin) (Cloud or self-hosted)**: Ensure you have a cloud or self-hosted [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance.  
2. **Credentials**:  
   - WordPress: API access for `wp-json/wp/v2` endpoint ([REST API docs](https://developer.wordpress.org/rest-api/)).  
   - OpenAI: For article and image generation.  
   - OpenRouter: For title and category generation.  
   - Telegram: Bot API for triggers and notifications.  
   - Discord: Webhook for publish alerts.  
3. **WordPress Configuration**:  
   - Set up categories (Technology [ID:3], AI [ID:4], Tech Fact [ID:7], Tech History [ID:8], Tech Tips [ID:9]).  
   - Ensure an admin user ID is available (default: 1).   
4. **Node Setup**:  
   - Use the Edit Fields node to centralize variables like category IDs.  
5. **Test**: Send “generate” via Telegram to test the workflow. Check WordPress for the published post.  


## How to customize this workflow to your needs
- **Change Categories**: Update the WordPress Post Draft node to match your site’s category IDs.  
- **Adjust Schedule**: Modify the Schedule Trigger node for different intervals (e.g., daily).  
- **Tweak Tone**: Edit the prompt in the Basic LLM Chain node for a different writing style (e.g., formal or casual).  
- **Add Platforms**: Extend notifications to Slack or email by adding nodes.  
- **Image Style**: Adjust the OpenAI image node for different sizes or styles (e.g., “natural” instead of “vivid”).  

## Pre-Requirements
- **[n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Instance**: Cloud or self-hosted.  
- **Credentials**:  
  - WordPress API (wp-json/wp/v2 endpoint).  
  - OpenAI API for text and images.  
  - OpenRouter API for AI content.  
  - Telegram bot API.  
  - Discord Webhook API.  
- **Dependencies**: `@n8n/n8n-nodes-langchain` package.  
- **WordPress Setup**: Categories and admin user ID configured.  
- **Network**: Stable internet for API calls.  

---
*Made by: [khmuhtadin](https://khmuhtadin.com)*  
*Tag: wordpress, blog, seo, openai, telegram*  
*Category: AI Automation, Blogging*
Need a custom? **[Contact Me](https://khmuhtadin.com/contact)**

### Quick Answers
**How often does it publish?**  
Every 3 hours by default. Change the Schedule Trigger to any interval you like, or trigger it manually with "generate" on Telegram.  
**What topics does it cover?**  
Technology, AI, Tech Facts, History, and Tips. Categories and IDs are configurable in the Edit Fields node.  
**Where do I get notified?**  
Publish alerts with post links go to Discord and Telegram automatically.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Discord, Wordpress, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
