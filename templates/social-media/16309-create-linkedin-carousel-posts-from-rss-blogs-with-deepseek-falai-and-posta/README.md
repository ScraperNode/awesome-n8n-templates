# 📱 Create LinkedIn carousel posts from RSS blogs with DeepSeek, fal.ai and Posta

> ⚡ **34 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow fetches the latest blog post from an RSS feed, uses DeepSeek to generate 5-slide carousel copy, creates AI background images with fal.ai, builds a PDF carousel in Posta, and publishes the post to LinkedIn via a connected Posta social account.

## How it works
1. Starts when you manually execute the workflow.
2. Reads your blog’s RSS feed, sorts items by publish date, and selects the newest post.
3. Sends the post title and content to DeepSeek (via an LLM chain) to generate minified JSON containing a caption, tags, and five slides with titles, bodies, and image prompts.
4. Splits the slide list into individual items, applies a theme color, and generates a square background image for each slide with fal.ai.
5. Downloads each generated image and uploads it to Posta as media, then re-associates the uploaded media IDs with the corresponding slide text.
6. Uses Posta to render the slides into a text carousel PDF, then publishes the PDF to the selected LinkedIn account with the generated caption and hashtags.

## Setup
1. Add your Posta API credential, select the target LinkedIn social account ID, and update any fixed values like the logoMediaId used for the PDF.
2. Add your DeepSeek API credential and confirm the LLM output stays valid minified JSON for the parser.
3. Add your fal.ai API credential and adjust the image generation prompt or theme_color value to match your brand.
4. Replace the RSS feed URL with your blog feed and confirm the feed provides title and content fields (for example, content:encoded).

## Additional info
Video explanation: https://youtu.be/CC-_i6LanLg

## 🔗 Nodes Used

HTTP Request, RSS Read, Basic LLM Chain, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
