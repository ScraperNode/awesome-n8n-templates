# 📱 Summarize RSS articles and publish AI images to WordPress and social media

> ⚡ **79 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who it's for
This **n8n workflow** is designed for **content creators**, **bloggers**, **digital marketers**, and **social media managers** who want to fully automate their content distribution pipeline. The workflow creates an end-to-end multi-channel publishing system that fetches new articles from an RSS feed (e.g., Paul Graham's essays), extracts and AI-summarizes the content, generates ultra-realistic visual prompts, creates stunning images via OpenAI (DALL-E), and instantly publishes the article along with the generated image across WordPress, Facebook, Instagram, LinkedIn, Telegram, and Discord simultaneously.

## Features
* Automatically fetches new articles via RSS feeds
* Filters irrelevant items using regex rules
* Extracts full article content (title + body text)
* Splits long articles and generates AI-powered summaries (GPT-4.1-mini)
* Combines original titles with clean summaries
* Converts summaries into detailed image generation prompts
* Creates images using OpenAI DALL·E
* Publishes full posts directly to WordPress
* Generates SEO-optimized featured images with metadata
* Downloads, resizes (5000×5000), and uploads images to WordPress media library with alt text and captions
* Posts images with captions to Facebook Pages via Graph API
* Publishes Instagram posts using the 2-step Graph API process
* Sends formatted posts to Telegram channels
* Publishes to LinkedIn personal profiles and company pages
* Shares rich media posts to Discord channels
## Requirements
* **OpenAI API**: Generates summaries, image prompts, and DALL·E images
* **WordPress API**: Creates posts, uploads media, and sets featured images
* **Facebook Graph API**: Publishes to Facebook Pages and Instagram (2-step process)
* **LinkedIn API**: Posts to personal profiles and company pages
* **Telegram Bot API**: Sends images with captions to channels
* **Discord Bot API**: Sends rich embed posts with title, summary, and imag

## Important Notes
* The workflow processes items one by one using a loop; the top output must remain connected to ensure continuous iteration.
* A regex filter is used to allow only valid article URLs and prevent malformed links.
* WordPress image flow must stay in order: Create Post → Download Image → Resize (5000×5000) → Upload Media → Update Metadata → Set Featured Image.
* Instagram publishing requires a two-step Graph API process: create media object → publish using returned ID.
* Dynamic expressions (e.g., `{{ $('Loop Over Items').item.json.title }}`) must remain unchanged for proper data mapping.
* WordPress automatically generates a URL-safe slug from the article title to handle special characters.

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spapgreen)

## 🔗 Nodes Used

Edit Image, HTTP Request, Telegram, Discord, Wordpress, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
