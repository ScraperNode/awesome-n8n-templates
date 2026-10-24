# 🎬 Generate and publish SEO blog posts to WordPress with Gemini and DALL-E 3

> ⚡ **284 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow receives a blog generation request via webhook, uses Google Gemini to write a full SEO-optimized post, generates a featured image with DALL-E 3, and automatically publishes the completed post to WordPress with a Telegram notification.

## How it works
1. A webhook receives the blog generation request containing the keyword and target audience fields.
2. The Set Blog Input Fields node normalizes and extracts the incoming request data for use across the workflow.
3. Gemini SEO Outline Generator creates an SEO-optimized structure including title, meta description, URL slug, H2/H3 headings, and a DALL-E image prompt.
4. Gemini Blog Writer uses the outline to write a complete 900 to 1200 word blog post in clean HTML format with proper heading tags.
5. DALL-E 3 generates a unique high-quality featured image using the prompt produced by Gemini.
6. The AI-generated image is downloaded and uploaded to the WordPress Media Library via the WordPress REST API.
7. The complete blog post is published to WordPress with the featured image attached, then a Telegram notification is sent with the live post link.

## Setup
1. Add your Google Gemini API key as a credential in n8n — this is used by both the Gemini SEO Outline Generator and Gemini Blog Writer nodes. Get it free at aistudio.google.com.
2. Add your OpenAI API key as a credential in n8n — this is used by the Generate Image with DALL-E node. Get it at platform.openai.com.
3. In WordPress go to Users → Profile → Application Passwords → Add New → copy the generated password.
4. In the Post Image to WordPress node replace YOUR_WORDPRESS_SITE_URL, YOUR_WP_USERNAME, and YOUR_WP_APP_PASSWORD with your actual WordPress site values.
5. Add your WordPress site URL and Application Password as a WordPress credential in n8n — used by the Publish Blog to WordPress node.
6. Create a Telegram bot via @BotFather, get your Chat ID from @userinfobot, add the bot token as a Telegram credential in n8n, and replace YOUR_TELEGRAM_CHAT_ID in the Notify via Telegram node.

## Requirements
- Google Gemini API key — free tier available at aistudio.google.com
- OpenAI API key with DALL-E 3 access — platform.openai.com
- WordPress site with REST API enabled and Application Password created
- Telegram Bot Token and Chat ID — optional, delete the Notify via Telegram node if not needed

## Customization
- Edit the Gemini SEO Outline Generator prompt to change heading depth, add schema markup instructions, or request a specific number of H2 sections
- Edit the Gemini Blog Writer prompt to change tone — replace professional with casual, technical, or humorous — or adjust word count targets
- Change the DALL-E image style by editing the image_prompt field — try flat design illustration, watercolor, minimalist, or 3D render
- Change the WordPress post status in the Publish Blog to WordPress node from publish to draft to review before going live
- Add a Google Sheets node after the Notify via Telegram node to log all published posts with keyword, URL, and publish date

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, Wordpress, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
