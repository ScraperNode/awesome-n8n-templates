# 🎬 Visual storytelling content factory: Gemini & Replicate AI with human-in-the-loop publishing

> ⚡ **1,306 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

This n8n workflow **automates the entire content creation and publishing pipeline** for engaging, AI-generated visual stories, ensuring image and video quality with human-in-the-loop approvals.

### What it does:
It takes a narrative concept (e.g., 'A Day in the Life of a Serene Skeleton') and transforms it into a series of unique images and videos, which are then published across multiple social media platforms.

### How it works:

**Creative Conceptualization**: An AI 'Creative Director' develops a detailed narrative, including scenes, moods, and character details.

**Prompt Engineering**: An AI 'Creative Technician' translates the narrative into precise text-to-image and text-to-video prompts, maintaining a consistent artistic style, lighting, and character appearance.

**AI Asset Generation**: Replicate's AI models (Qwen-Image for images and Seedance-1-Lite for videos) create the visual content from these prompts.

**Human-in-the-Loop Approval**: Generated images and videos are sent to **Slack** for manual review. Users can approve or request regeneration, ensuring creative control and quality.

**Multi-Platform Publishing**: Approved content is automatically published via **Blotato** to Instagram and Facebook (videos), and TikTok (image slideshows), ready for your audience.

### Technical Requirements:

- Replicate Account with Balance: For image and video generation (using Qwen-Image and Seedance-1-Lite).

- Blotato Subscription: For seamless publishing to multiple social media platforms.

- OpenRouter Account with Balance: To access various Large Language Models (LLMs) like Gemini 2.5 Flash for creative direction and prompt generation.

- Slack Account: For the human-in-the-loop approval process.

### Customization Potential:
This workflow serves as a robust foundation that can be easily adapted for various use cases beyond story narratives, such as:

- Automating product publishing with AI-generated visuals and descriptions.

- Creating dynamic advertising content for campaigns.

- Generating personalized visual content for marketing.

- Scaling content creation for personal or e-commerce brands.

### Why use it?
Ideal for content creators, marketers, and businesses seeking to scale their visual content production, maintain creative control through human oversight, and automate distribution (with scheduling option) to key social media channels (Instagram, Facebook, TikTok, X, Pinterest, YouTube, and more). Customize the initial story brief to unleash endless themed narratives tailored to your brand.

## 🔗 Nodes Used

Edit Image, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
