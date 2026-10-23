# 🎬 Create SEO-ready WordPress blog drafts with Claude, Imagen and Slack

> ⚡ **74 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Send an article brief via webhook and get back a fully-written WordPress draft — complete with SEO metadata, a generated featured image, and a Slack notification to your team — using Anthropic Claude, Google Imagen, Rank Math SEO and Slack.

## How it works
1. **Initialise**: A CONFIG node holds your site-specific settings — WordPress URL, author, default category, Slack channel, image style prompt, tone guide, and style guide. A token validator secures the endpoint before processing begins.
2. **Create article**: The brief is combined with the TONE_GUIDE and STYLE_GUIDE (set in CONFIG, overridable per request) and sent to Anthropic Claude which returns a structured JSON payload containing: the article body as HTML, an excerpt, suggested tags, a focus keyword, an SEO title, a meta description, and an image subject line.
3. **Create featured image (optional)**: If ENABLE_IMAGE_GENERATION is true, the image subject from Claude's output is prefixed with IMAGE_STYLE_PROMPT and sent to Google Imagen 4. The resulting image is uploaded to the WordPress media library, and assigned alt text derived from the focus keyword. 
4. **Create draft WordPress post**: Creates or collects the IDs of the suggested tags from WordPress, and creates a post in draft status via the WordPress REST API with the generated HTML body, excerpt, category, author, tags, and featured image attached.
5. **Customise SEO (optional)**: Updates the draft post with Rank Math SEO meta fields (focus keyword, SEO title, and meta description) via the WordPress REST API. This requires the Rank Math plugin plus a small config change in WordPress to expose those fields to the REST API (this can be easily done by adding the script below as a mu-plugin)
6. **Notify on completion**: A Slack message is sent to your configured channel with the draft title, a direct edit link, the assigned tags, and any affiliate notes. The webhook returns a JSON response containing the post ID and draft URL.

## Setup
1. Link credentials in the relevant nodes: - Anthropic API → GENERATE ARTICLE CONTENT - Google AI (PaLM) API → GENERATE IMAGE (the credential is labelled "PaLM" in n8n but supports Imagen 4) - WordPress Application Password → UPLOAD IMAGE, UPSERT TAG, CREATE POST, SET RANK MATH SEO - Slack OAuth2 → SLACK NOTIFICATION
2. Update the CONFIG values for your WordPress site URL, default category ID, author ID, and (optionally) a Slack channel ID.
3. If you want featured images, keep image generation enabled and ensure your Google AI project has access to the configured Imagen model.
4. If you want Rank Math fields to be written via the REST API, install Rank Math and update your WordPress configuration to expose the Rank Math meta fields on posts (see code below). Skip if you don't use Rank Math.
5. Activate the workflow, then copy the webhook URL from the article-publisher node and send a POST request 

    { "prompt": "Write an article about building n8n automation pipelines" }

## Requirements
- n8n (self-hosted or cloud)
- Anthropic API key — console.anthropic.com
- WordPress with Application Password enabled (Settings → Users → Application Passwords)
- Google AI API key with Imagen 4 access — aistudio.google.com (optional — only needed if image generation is enabled)
- Slack app with OAuth2 (optional — only needed for Slack notifications)
- Rank Math plugin + custom configuration (optional — only needed for programmatic SEO fields)

## Customization
- **Adjust tone and structure per article** — Pass tone_guide and style_guide in the webhook body to override the CONFIG defaults for a single request. Useful for guest posts, different content categories, or multilingual sites
- **Disable image generation** — Set ENABLE_IMAGE_GENERATION to false in CONFIG. The workflow skips the Imagen step entirely and creates the draft without a featured image.
- **Change the image style** — Enable image generation and update IMAGE_STYLE_PROMPT in CONFIG. This prefix is prepended to the image subject Claude suggests, so you control the visual style globally while Claude picks the subject per article. 
- **Customise the Rank Math SEO fields** — include the config change below on your WordPress site to register the necessary meta fields for setting the focus keyword, SEO title, and meta description via REST API. Create a file called rank-math-rest.php with the content below in the wp-content/mu-plugins/ folder for WordPress to load it automatically.

```
<?php
// Register Rank Math SEO meta fields for REST API access.
add_action( 'rest_api_init', function () {
    $fields = [
        'rank_math_focus_keyword',
        'rank_math_title',
        'rank_math_description',
    ];
    foreach ( $fields as $field ) {
        register_post_meta( 'post', $field, [
            'show_in_rest'      => true,
            'single'            => true,
            'type'              => 'string',
            'sanitize_callback' => 'sanitize_text_field',
            'auth_callback'     => function () {
                return current_user_can( 'edit_posts' );
            },
        ] );
    }
} );
```

## Additional info
### Background
For more information on how the system works and how to use it for content creation, see [building an automated wordpress publishing pipeline with n8n and claude](https://www.triple8labs.com/lab-notes/building-an-automated-wordpress-publishing-pipeline-with-n8n-and-claude/)

### Who's it for
- Content teams and solo publishers who want to go from article brief to reviewable WordPress draft in seconds, not hours
- Developers and technical bloggers who want to keep their own voice and structure while automating the grunt work
- Agencies managing multiple WordPress sites who need a repeatable, prompt-driven drafting pipeline

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
