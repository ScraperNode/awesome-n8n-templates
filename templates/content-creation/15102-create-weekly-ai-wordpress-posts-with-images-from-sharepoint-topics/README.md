# 🎬 Create weekly AI WordPress posts with images from SharePoint topics

> ⚡ **41 views** · 🎬 [Content Creation & Video](../)

## Description

## AI Article Publisher — Scheduled WordPress Post from Topic List

This workflow automatically generates and publishes a full-length, SEO-optimized WordPress article on a weekly schedule. Topics are sourced from a SharePoint list. The AI agent writes the article body with embedded inline images, generates a separate featured (hero) image, creates a WordPress draft, and sends a notification email when complete.

### How it works
1. **Schedule Trigger** fires on a configurable schedule (default: every Monday at 10 AM)
2. **Get Topics** pulls unposted items from a SharePoint list where PostID is null
3. **Fetch WP Categories** retrieves all WordPress categories from your site
4. **Format Categories** + **Match Categories AI** selects the best-fit category IDs for the topic
5. **Write Article** (AI Agent + web search) writes a 1,500–2,500-word HTML article with 3–4 embedded inline images via the image tool
6. **Strip Code Fences** + **Generate Title** clean the output and produce an SEO-optimized title
7. **Add Draft to WP** creates the post as a draft in WordPress
8. **Generate Feature Image** + **Upload Image** → **Attach Featured Media** sets the hero image on the post
9. **Update SharePoint PostID** stamps the list item with the new WP Post ID to prevent re-processing
10. **Build Notification Email** + **Send Notification** delivers a formatted HTML email summary to your team

### Setup
- **WordPress credential**: Create an Application Password in WP Admin → Users → Profile. Set the WordPress API credential in all WordPress nodes.
- **WordPress site URL**: Replace `YOUR_WP_SITE_URL` placeholder in HTTP Request nodes with your domain (e.g., `https://yoursite.com`).
- **SharePoint credential**: Add a Microsoft SharePoint OAuth2 credential and select your SharePoint site and list in the **Get Topics** and **Update SharePoint PostID** nodes.
- **OpenAI credential**: Add your OpenAI API key. GPT-4.1 (or GPT-4o) is recommended for the article agent; GPT-4.1-mini for category matching and title generation.
- **Google Gemini credential**: Required for the **Generate Feature Image** node. Add a Google PaLM/Gemini API key.
- **Image sub-workflow**: The **Generate and Upload Image** tool calls a separate image-generation sub-workflow. Deploy that workflow first and update the workflow ID in the tool node.
- **Notification email**: Replace `YOUR_NOTIFICATION_EMAIL` in the **Send Notification** node with your email address.

### Customization
- Change `status: 'draft'` to `'publish'` in **Add Draft to WP** to auto-publish articles.
- Adjust the article tone and CTA in the **Write Article** system prompt to match your brand voice.
- Swap the SharePoint list for a Google Sheet or Airtable by replacing the **Get Topics** and **Update Record** nodes.

Visit [automatedintelligentsolutions.com](https://automatedintelligentsolutions.com) for more information and workflows.

## 🔗 Nodes Used

HTTP Request, Wordpress, Microsoft Outlook, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
