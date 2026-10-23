# 🎬 Generate SEO WordPress blog posts from Google Sheets with Perplexity and GPT-5

> ⚡ **169 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow pulls blog topic ideas from Google Sheets, researches each topic with Perplexity, generates an SEO-ready HTML article plus metadata with OpenAI GPT-5, then creates a WordPress draft and attaches a DALL·E cover image as the featured image.

## How it works
1. Starts when you manually run the workflow.
2. Reads a content idea (from the PROMPT column) from a Google Sheets content plan.
3. Uses Perplexity to research the topic with a defined recency window and returns bullet-point findings.
4. Uses OpenAI GPT-5 to write a structured output containing an SEO title, meta description, slug, and the full article body formatted as HTML.
5. Creates a new WordPress post using the generated title, slug, and HTML content with the configured post status.
6. Generates a photorealistic cover image with OpenAI DALL·E, uploads it to the WordPress media library, and sets it as the post’s featured image.
7. Updates the original Google Sheets row to record publishing details such as the WordPress post ID.

## Setup
1. Create a Google Sheet (for example with columns like PROMPT, TITLE, and ID POST) and select the target spreadsheet and sheet/tab in both Google Sheets nodes.
2. Add credentials for Google Sheets OAuth2, Perplexity, OpenAI (for GPT-5 text and DALL·E image generation), and WordPress (REST API access, typically via an application password).
3. Update the Configuration values, especially wordpress_site_url, wordpress_post_status, language, word-count limits, and the Perplexity search recency.
4. Ensure your WordPress site allows REST API media uploads and that the WordPress credential has permission to create posts and upload media.

## Additional info
# Generate SEO content with Perplexity and GPT-5 for WordPress
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Generate-SEO-content-with-Perplexity-and-GPT-5-for-WordPress-3a03d6550fd9817f9752dbe45c942969)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
