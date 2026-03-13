# 🎬 E-commerce product mockups from images with OpenAI DALL-E, remove.bg and G-Drive

> ⚡ **52 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for
This **n8n workflow** automatically generates professional e-commerce product mockups from product images. The workflow is perfect for e-commerce store owners, product marketers, and content creators who need to create consistent, high-quality product visuals for their online stores, social media, and marketing materials.

## Features
* **Dual Input Methods**: Accepts product images via file upload or URL
* **Background Removal**: Automatically removes backgrounds from product images using remove.bg API
* **AI-Powered Mockups**: Generates premium e-commerce mockups using OpenAI's DALL-E
* **Professional Prompts**: Uses detailed design prompts for luxury e-commerce aesthetics
* **Google Drive Integration**: Automatically saves both PNG files and final mockups to Google Drive

## How It Works
1. The workflow starts with a form submission where users provide:
   - Product image (file upload or URL)
   - Product name/title
2. System detects whether the image is a file or a URL.
3. For uploaded files:
   - Processed through remove.bg to remove the background
   - Transparent PNG is uploaded to Google Drive
   - OpenAI generates a professional mockup based on product image
   - Final mockup uploaded on Drive & notify user
4. For URL inputs:
   - Image downloaded from the URL
   - Background removal and mockup generation process is applied
   - Results are delivered back to the user

## Requirements
- **remove.bg API credentials** for background removal
- **OpenAI API credentials** for DALL-E image generation
- **Google Drive OAuth2 credentials** for file storage

## Important Notes
- **Image Processing**: All images are processed with professional-grade background removal
- **AI Prompting**: The workflow uses detailed prompts designed for luxury e-commerce aesthetics
- **File Storage**: Both PNG files and final mockups are stored in a designated Google Drive folder
- **Conditional Logic**: The workflow intelligently routes based on input type (file vs. URL)
- **Error Handling**: Includes retry logic for AI image generation

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, OpenAI, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
