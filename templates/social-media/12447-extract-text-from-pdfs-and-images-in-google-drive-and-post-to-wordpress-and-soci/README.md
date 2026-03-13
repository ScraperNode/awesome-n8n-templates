# 📱 Extract text from PDFs and images in Google Drive and post to WordPress and social media with OpenAI GPT-4.1 and DALL·E

> ⚡ **142 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Who is this for?
This workflow is designed for content creators, social media managers, digital marketers, and business owners who want to automate their content creation and distribution process across multiple platforms. It's perfect for those who regularly create content from PDFs or images and want to streamline their social media posting workflow.

## Key Features
* Monitors a specific Google Drive folder for new PDFs or images
* Extracts text from PDFs or images using AI
* Optionally generates new images from text using OpenAI's DALL-E
* Automatically posts content with images to multiple platforms
* Sends notifications about successful posts
* Handles different file types with specialized extraction methods

## Workflow Does
This workflow automates monitoring a Google Drive folder for new PDFs and images, extracting content using AI, and distributing it across social media platforms like WordPress, Facebook, Telegram, LinkedIn, and Discord. It can also generate new images from text and sends notifications about successful posts. The process ensures efficient handling of different file types and streamlines content sharing across multiple channels.

## Requirements
- Google Drive account with a dedicated folder for content
- OpenAI API credentials for image generation
- WordPress API credentials for website posting
- Social media API credentials:
  * Facebook Graph API
  * Telegram Bot API
  * LinkedIn OAuth2 API
  * Discord Bot API
  * X/Twitter OAuth2 API
- Gmail credentials for email notifications
- Rapiwa account for WhatsApp notifications

## Important Notes
- Make sure all API credentials are properly configured before running the workflow
- The workflow handles both PDF and image files differently based on their MIME type
- Image generation is optional and can be disabled if not needed
- All social media posting nodes can be individually enabled or disabled based on your needs
- The workflow includes rate limiting to avoid API restrictions


## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Edit Image, HTTP Request, Telegram, Google Drive, Discord, Wordpress

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
