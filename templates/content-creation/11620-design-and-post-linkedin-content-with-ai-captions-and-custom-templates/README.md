# 🎬 Design and post LinkedIn content with AI captions and custom templates

> ⚡ **672 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

This workflow leverages n8n to automate LinkedIn content creation from start to finish. Upload an image and quote through a web form, and get a professionally designed post with AI-generated captions, ready to publish in seconds.

## Features
* Randomly selects from 6 professional design templates for visual variety
* Converts HTML designs to high-quality images (90-95% JPEG quality)
* Generates engaging captions using OpenAI's GPT models
* Built-in caption editor for customization before posting
* Direct publishing to LinkedIn profiles or company pages
* Auto-compresses images for optimal LinkedIn upload

## Prerequisites
1. **N8N Instance**: A running n8n instance (cloud or self-hosted)
2. **OpenAI API**: Active account with API access for caption generation
3. **LinkedIn Account**: Profile or company page with API access
4. **Image Conversion API**: HTML CSS to Image account
5. **Web Hosting**: Platform to host the web form (Netlify, Vercel, or custom server)

## Setup Instructions

### 1. Deploy Web Form
* Download the provided web form template
* Host on your preferred platform
* Copy both webhook URLs from your n8n workflow
* Update form's webhook endpoints with your n8n URLs

### 2. Configure Image Conversion

* Sign up at [htmlcsstoimage.com](https://htmlcsstoimage.com/)
* Get your API credentials (User ID + API Key)
* Add to HTTP Request node as Basic Auth credentials

### 3. Connect OpenAI API
* Create API key at [OpenAI Platform](https://platform.openai.com/settings/)
* In the ChatGPT HTTP Request node, add Header parameter:
  * Key: `Authorization`
  * Value: `Bearer YOUR_API_KEY`
* Recommended model: `gpt-4` or `gpt-3.5-turbo`

### 4. Authenticate LinkedIn
* Create LinkedIn OAuth2 credential in n8n
* Follow the authentication flow and grant required permissions
* Select the credential in the "Create a post" LinkedIn node
* Choose post destination (personal profile or company page)

### 5. Test the Workflow
* Submit test data through the web form
* Monitor n8n execution panel for successful completion
* Verify image generation, caption quality, and LinkedIn posting
* Adjust settings as needed based on results

## Notes
* Processing time averages 10-20 seconds from upload to preview
* All 6 design templates are fully responsive and LinkedIn-optimized
* Caption editor allows full customization before publishing to LinkedIn

For questions or issues, please contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/gilbert-onyebuchi/). 

## 🔗 Test with sample data first.
**[Access Web Form Template](https://sites.google.com/view/template-n8n/linkedin-post-designer)**

## 🔗 Nodes Used

Edit Image, HTTP Request, Webhook, LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
