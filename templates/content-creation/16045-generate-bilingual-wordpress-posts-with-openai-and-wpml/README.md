# 🎬 Generate bilingual WordPress posts with OpenAI and WPML

> ⚡ **99 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow generates an SEO-friendly blog post in Italian and English with OpenAI, publishes both versions to WordPress via the REST API, links them as WPML translations through a custom endpoint, generates a featured image, uploads it to the WordPress media library, and assigns it to both posts.

## How it works
1. Runs manually when you click “Test workflow” in n8n.
2. Sets a topic prompt used to generate the article.
3. Uses OpenAI to produce structured output containing an Italian and English title and HTML article content.
4. Creates the Italian WordPress post and then creates the English WordPress post via the WordPress REST API.
5. Calls a custom WordPress REST endpoint to link the two posts as WPML translations.
6. Generates a realistic cover image with OpenAI, uploads it to the WordPress media library, and sets it as the featured image for both posts.

## Setup
1. Add OpenAI credentials for text generation (chat model) and image generation (gpt-image-1).
2. Add WordPress API credentials and replace all instances of `YOUR_URL` with your WordPress site URL.
3. Install and configure WPML with the `it` and `en` language codes (or update the workflow to match your site’s languages).
4. Add the provided PHP code to your theme’s `functions.php` (or a custom plugin) to expose `/wp-json/custom/v1/link-translation`, and verify it is reachable.
5. Replace `YOUR_PROMPT` with your desired topic prompt before running the workflow.

## Additional info
### MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### Need help customizing?
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/)

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
