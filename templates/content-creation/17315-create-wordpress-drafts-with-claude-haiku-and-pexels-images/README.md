# 🎬 Create WordPress drafts with Claude Haiku and Pexels images

> ⚡ **37 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow takes a blog post title and content, generates a short Pexels search phrase with Anthropic Claude, downloads a matching stock photo from Pexels, uploads it to your WordPress media library, creates a draft WordPress post, and sets the uploaded image as the featured image.

## How it works
1. Runs when you manually execute the workflow.
2. Sets a sample WordPress post title and HTML content to use as input.
3. Sends the post title to Anthropic Claude to generate a short photo search phrase and cleans it for use as keywords.
4. Searches the Pexels API for a landscape image matching the generated keywords and downloads the top result.
5. Uploads the downloaded image to your WordPress site via the WordPress REST API as a media item.
6. Creates a new WordPress post as a draft with the provided title and content, then updates the post to set the uploaded media item as its featured image.

## Setup
1. Add an Anthropic API credential and select a Claude model in the keyword-generation step.
2. Create a Pexels API key and configure it as an HTTP Header Auth credential for the Pexels search request.
3. Create a WordPress Application Password and configure the WordPress API credential, then replace https://your-site.com with your WordPress site URL in the media upload and post update requests.
4. Replace the sample title and content with your own input source (or connect your content-generation step) and adjust the post status if you want to publish instead of saving drafts.

## Requirements
- Pexels API key (free) and WordPress Application Passwords

## Customization
- Searches Pexels for a landscape photo matching that phrase.
- Change post Status from Draft to Publish if you want fully automated publishing

## Additional info
This is one piece of a larger daily content automation pipeline. For the full system (AI article generation, topic rotation, single CONFIG node, 9 documented production pitfalls): meridianiainc.gumroad.com/l/ai-blog-autopilot

Suggested title: "Auto-publish WordPress posts with a matching Pexels image" 
(the auto-generated title overemphasizes the specific AI model used, which is 
an implementation detail, not the core value of the workflow)

## 🔗 Nodes Used

HTTP Request, Wordpress, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
