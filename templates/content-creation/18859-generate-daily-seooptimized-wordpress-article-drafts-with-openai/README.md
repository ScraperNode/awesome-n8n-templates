# 🎬 Generate daily SEO‑optimized WordPress article drafts with OpenAI

> ⚡ **86 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This scheduled workflow generates SEO article metadata and full HTML content with OpenAI, then creates a draft post in WordPress (optionally notifying the Google Indexing API) with Rank Math SEO fields populated.

## How it works
1. Runs every day at 09:00 based on a cron schedule.
2. Rotates through a predefined list of topics and focus keywords and prepares the site, audience, and WordPress settings.
3. Uses OpenAI to generate structured SEO metadata such as H1 title, meta description, slug, outline, tags, and an FAQ block.
4. Uses OpenAI to write the article body in HTML following the generated outline and internal-link rules.
5. Combines the intro, article body, conclusion, and FAQ, then converts any markdown-like formatting into clean HTML and adds a “Leia também” section and tag line.
6. Creates a new WordPress post as a draft via the WordPress REST API, setting the slug, category, and Rank Math focus keyword/title/description fields.
7. Updates the WordPress post to set the featured image ID and, if enabled, sends the post URL to the Google Indexing API before finishing.

## Setup
1. Add an OpenAI credential and keep the selected model (or update it) in the OpenAI Chat Model node.
2. Add WordPress API credentials and ensure your WordPress site allows REST API post creation at `/wp-json/wp/v2/posts`.
3. Update the configuration in the theme-selection code (UrlBlog, company/niche/audience, topic list, category ID, featured media ID, and internal page slugs).
4. If you enable the optional Google Indexing API step, add a Google OAuth2 credential and confirm your content type is eligible for Indexing API notifications.
5. Review that posts are created with status `draft` and change to `publish` only after you are happy with the output and prompts.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
