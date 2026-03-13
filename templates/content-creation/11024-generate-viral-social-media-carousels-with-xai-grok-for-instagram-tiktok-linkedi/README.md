# 🎬 Generate viral social media carousels with xAI Grok for Instagram, TikTok, LinkedIn & X

> ⚡ **1,163 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

# AI Automated "Viral Style" Carousels Generator for Instagram, TikTok, LinkedIn, or X

## 🚀 Overview
Automate your **social media content creation** with this powerful n8n workflow! Generate engaging, **viral-style carousels** for Instagram, TikTok, LinkedIn, or X (Twitter) in minutes. This template leverages **AI (xAI Grok)** to craft compelling, high-retention text and uses n8n's **Edit Image** node to automatically design your slides with your custom branding.

Output examples:

![1.png](fileId:3403)
![2.png](fileId:3402)

## ✨ Features
* **AI-Powered Content:** Utilizes xAI Grok to generate witty, substantive, 7-slide carousel content based on a theme and CTA.
* **Multi-Platform Ready:** Perfect for **Instagram carousels**, **TikTok carousels**, **LinkedIn carousels**, and **X (Twitter) threads**.
* **Automated Design:** Overlays AI-generated text onto your chosen background image, creating visually consistent slides.
* **Easy Customization:** Adapt the AI persona, font styles, colors, and background images to match your brand.
* **Google Drive Integration:** Seamlessly downloads your background template and uploads finished carousel slides.
* **No Code Automation:** Set up once and generate endless content with minimal effort.

## 💡 How it Works
1.  **Input Trigger:** Provide a `theme` and `call to action (CTA)` via a webhook or manual trigger.
2.  **Content Generation:** The AI (acting as "The Carousel Cynic") writes 7 distinct slides, each with a provocative title and a detailed description, formatted for maximum engagement.
3.  **Image Assembly:**
    * Downloads a base background image from Google Drive.
    * Loops through each of the 7 AI-generated slides.
    * Uses the **Edit Image** node to dynamically add the slide's title and description to the background.
    * Outputs sequentially numbered `.png` files (e.g., `1.png`, `2.png`).
4.  **Output & Storage:** Uploads all final carousel images to a specified folder in your Google Drive, ready for publishing.

## 🛠️ Setup Steps
1.  **xAI Credentials:** Add your xAI API Key to the **xAI Grok Chat Model** node.
2.  **Google Drive Integration:**
    * Connect your Google Drive OAuth2 credentials.
    * In the **Download file** node, update the `File ID` to point to your desired blank background image.
    * In the **Upload file** node, select the Google Drive folder where you want to save the generated carousels.
3.  **Customization (Optional):**
    * Adjust AI persona in the **AI Agent** node's "System Prompt."
    * Modify `fontSize`, `fontColor`, `positionX`, and `positionY` in the **Params Style Config** node to perfectly align text on your background images.

## 🎁Bonus
Added in workflow a Canva link to editable background style I use in my carousels.

## 🔑 Keywords
AI, Automation, Social Media, Carousel, Instagram, TikTok, LinkedIn, X, Twitter, Content Creation, Viral Content, Marketing, Grok, xAI, Image Generation, No-code, Workflow, Productivity, Creator Economy, Digital Marketing, Engagement, Visual Content, Dynamic Image, Automated Marketing.

## 🔗 Nodes Used

Edit Image, Webhook, Google Drive, AI Agent, Structured Output Parser, xAI Grok Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
