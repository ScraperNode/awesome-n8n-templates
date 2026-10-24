# 📱 Create and post AI social captions from WordPress blogs to Facebook, Instagram, X, and LinkedIn with GPT-4o via OpenRouter

> ⚡ **230 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Every time you publish a blog post on WordPress, this workflow automatically creates unique, platform-optimised captions for Facebook, Instagram, Twitter and LinkedIn — and publishes them all simultaneously without any manual effort.

Built for content creators, digital marketing agencies, SEO agencies, bloggers, and businesses that publish blog content regularly and want to maximise reach across social media without spending hours manually writing different versions for each platform.

---

## The Problem This Solves

Most businesses publish a blog post and then either copy and paste the same text to every social media platform — which performs poorly because each platform has different audience expectations, character limits, tone and algorithm preferences — or they skip social media promotion entirely because writing four different captions for one post takes too much time.

The result is wasted content. Hours of writing a great blog post go unnoticed because the distribution is manual, inconsistent, or nonexistent.

This workflow solves that completely. One WordPress publish triggers everything. The AI writes platform-specific captions that actually match how each platform works. Every post gets promoted everywhere automatically.

---

## How It Works

**Step 1 — WordPress Webhook Trigger**

The workflow starts the instant you publish a post on WordPress. This requires a webhook plugin installed on your WordPress site — the recommended free option is **WP Webhooks** (available on WordPress.org plugin directory). When you publish or update a post to published status, WP Webhooks sends a POST request to your n8n webhook URL with the full post data including title, content, permalink, thumbnail URL, and post type.

No polling. No scheduled checks. The workflow fires in real time the moment your post goes live.

**Step 2 — Post Type and Status Filter**

Before any processing happens, the workflow checks two conditions:
- The post type must be `post` (not page, product, or custom post type)
- The post status must be `publish` (not draft, pending, or scheduled)

This ensures the workflow only runs for actual published blog posts and ignores everything else — drafts, page updates, WooCommerce products, and any other WordPress content types.

**Step 3 — HTML to Markdown Conversion**

WordPress post content arrives as raw HTML with tags, shortcodes, and formatting markup. Before sending this to an AI model, the workflow converts the HTML content to clean Markdown text using the built-in Markdown node. This removes HTML tags, cleans up formatting, and gives the AI clean, readable text that produces significantly better caption quality than feeding raw HTML.

**Step 4 — Data Normalization**

A Set node extracts and organises all the data needed for the rest of the workflow into clean variables:
- `post_title` — the blog post title
- `post_content` — the cleaned Markdown content
- `post_link` — the full permalink URL to the published post
- `post_thumbnail` — the featured image URL used for visual posts on Facebook and Instagram
- `facebook_page_id` — your Facebook Page ID for the Graph API call
- `instagram_id` — your Instagram Business Account ID for the Graph API call

**Step 5 — AI Caption Generator**

An AI agent powered by OpenRouter (GPT-4o) reads the post title, link, and the first 800 characters of the post content, then generates four completely different captions — one for each platform — in a single API call.

Each caption is written according to strict platform-specific guidelines:

**Twitter/X caption:** Maximum 220 characters. One punchy insight or hook from the post. One to two hashtags only. Ends with the post link. Short, direct, and conversational.

**Facebook caption:** Starts with a bold question or statement. Three to five bullet points of what readers will learn. Ends with the post link. Friendly and conversational tone. Maximum three hashtags.

**Instagram caption:** Opens with a bold hook in the first 125 characters to survive the truncation. Three to five key takeaways as short bullet points. Ends with "Link in bio to read the full guide." Three to five relevant hashtags. Does not include the URL in the body since Instagram does not make links clickable in captions.

**LinkedIn caption:** Professional tone throughout. Hook or surprising statement to open. Three to four short paragraphs covering the problem, what the post covers, the key insight, and a call to action with the link. Two to three professional hashtags. Between 800 and 1200 characters total for maximum LinkedIn algorithmic reach.

The output is enforced as strict JSON via a Structured Output Parser — ensuring reliable, parseable data for the downstream publishing nodes every time.

**Step 6 — Simultaneous Publishing to All Platforms**

After caption generation, the workflow publishes to all four platforms in parallel:

**Twitter/X:** The Twitter node posts the caption directly using OAuth2 authentication. No additional steps required.

**Facebook:** An HTTP Request node calls the Facebook Graph API `/{page_id}/photos` endpoint, sending the Facebook caption as the message and the WordPress featured image URL as the photo. This creates a photo post with the caption on your Facebook Page, which performs significantly better than link-only posts in terms of reach and engagement.

**Instagram:** Instagram publishing requires two steps as per the official Meta Graph API requirements. First, an HTTP Request node calls `/{instagram_id}/media` to create a media container with the caption and featured image URL. Second, another HTTP Request node calls `/{instagram_id}/media_publish` with the container ID returned from the first step. This is the official two-step publishing flow required by Meta.

**LinkedIn:** The thumbnail image is first downloaded via an HTTP Request node (LinkedIn requires binary image data, not just a URL). Then the LinkedIn node creates a post using the downloaded image binary along with the LinkedIn caption. The post is published to your company organisation page using OAuth2 authentication.

---

## WordPress Plugin Required

This workflow requires a webhook plugin installed on your WordPress site to send post data to n8n when a post is published.

**Recommended: WP Webhooks (Free)**
Available at wordpress.org/plugins/wp-webhooks

After installing WP Webhooks on your WordPress site:
1. Go to Settings → WP Webhooks in your WordPress dashboard
2. Click Send Data tab
3. Add a new webhook
4. Select trigger: Post Published or Post Updated
5. Paste your n8n webhook URL as the delivery URL
6. Save and test

The plugin will send a POST request to n8n with the full post data every time you publish a blog post.

**Alternative options:**
- WPBrutha Webhooks
- Bit Integrations (free plugin with webhook sending)
- Custom code using WordPress `transition_post_status` hook if you prefer a code-based approach

---

## Payload Structure

Your n8n webhook node expects this data structure from WordPress:

```json
{
  "post": {
    "post_title": "Your Blog Post Title",
    "post_content": "<p>Your full HTML post content</p>",
    "post_type": "post",
    "post_status": "publish"
  },
  "post_permalink": "https://yoursite.com/your-post-slug/",
  "post_thumbnail": "https://yoursite.com/wp-content/uploads/featured-image.jpg"
}
```

The exact field names depend on which WordPress webhook plugin you use. Adjust the Set node field mappings to match the payload structure sent by your chosen plugin.

---

## Requirements

- WordPress website with admin access
- WP Webhooks plugin (free) or any WordPress webhook plugin installed and configured
- n8n instance (self-hosted or cloud) with a publicly accessible webhook URL
- OpenRouter API key (supports GPT-4o, Claude, Gemini, and 200+ other models)
- Twitter/X Developer account with OAuth2 app credentials
- Facebook Page with a System User token from Meta Business Portfolio or a long-lived Page Access Token
- Instagram Business Account connected to your Facebook Page via Meta Business Portfolio
- LinkedIn Company Page with OAuth2 app credentials

---

## Setup Steps

1. Install and activate WP Webhooks on your WordPress site
2. Copy the n8n webhook URL from the Webhook node in this workflow
3. Configure WP Webhooks to send to your n8n webhook URL on post publish
4. Add your OpenRouter API key to n8n credentials
5. Connect your Twitter/X OAuth2 credentials in the Create Tweet node
6. Add your Facebook Page Access Token or System User Token to the HTTP Query Auth credential used in Post on FB node
7. Add the same token to the Instagram nodes — Create Media Container and Post On IG
8. Update the `facebook_page_id` value in the Clean Data node with your actual Facebook Page ID
9. Update the `instagram_id` value in the Clean Data node with your actual Instagram Business Account ID
10. Connect your LinkedIn OAuth2 credentials in the Create a post node
11. Update the LinkedIn organisation URN in the Create a post node with your actual company page URN
12. Publish a test post on WordPress and verify all four platforms receive their posts

---

## Customization Options

- **Change the AI model** — swap GPT-4o for any OpenRouter model including Claude Sonnet, Gemini Flash, or Mistral to reduce cost per run
- **Adjust caption length and style** — edit the platform guidelines in the system prompt to match your brand voice or preferred posting style
- **Add more platforms** — extend the workflow with TikTok, Pinterest, Threads, or YouTube community posts by adding nodes after the AI Agent
- **Filter by category or tag** — add an IF node after the filter to only trigger for posts in specific WordPress categories
- **Add a delay between platforms** — add Wait nodes between publishing steps if you prefer staggered posting
- **Schedule posts instead of immediate publishing** — replace the direct publishing nodes with a scheduling tool like Postiz or Buffer API
- **Content length control** — the AI currently reads the first 800 characters of post content. Increase or decrease this slice in the user prompt to give the AI more or less context
- **Language support** — the AI will match the language of your blog post automatically. Write in Urdu, Arabic, French, or any other language and captions will be generated in the same language

---

## Use Cases

- **SEO and digital marketing agencies** promoting client blog content across all platforms automatically
- **Bloggers and content creators** who publish regularly and want consistent social media presence without manual effort
- **ecommerce businesses** promoting product guides, how-to articles, and SEO content
- **SaaS companies** distributing thought leadership content and product updates
- **Local businesses** sharing informative blog posts about their services
- **News and media sites** distributing articles to social audiences in real time

---

## Nodes Used

- Webhook — receives WordPress post data on publish
- IF — filters for published blog posts only
- Markdown — converts HTML post content to clean text
- Set — normalizes and extracts post data into clean variables
- AI Agent (LangChain) — generates four platform-specific captions simultaneously
- Structured Output Parser — enforces JSON output from the AI agent
- OpenRouter Chat Model — powers the AI caption generation
- Twitter node — publishes to Twitter/X
- HTTP Request (Facebook) — posts photo with caption to Facebook Page via Graph API
- HTTP Request (Instagram container) — creates Instagram media container via Graph API
- HTTP Request (Instagram publish) — publishes Instagram container to feed
- HTTP Request (LinkedIn image) — downloads featured image binary for LinkedIn
- LinkedIn node — publishes image post to LinkedIn company page

---




*Built with Meta Graph API v25.0, OpenRouter, Twitter API v2, and LinkedIn API. Compatible with any WordPress site running version 4.7 or above with the WordPress REST API enabled.*

## 🔗 Nodes Used

HTTP Request, Webhook, X (Formerly Twitter), LinkedIn, Markdown, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
