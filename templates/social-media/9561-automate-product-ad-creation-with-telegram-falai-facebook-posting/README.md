# 📱 Automate product ad creation with Telegram, Fal.AI & Facebook posting

> ⚡ **1,063 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

This workflow automates the entire process of creating and publishing social media ads — directly from Telegram.  
By simply sending a product photo to your Telegram bot, the system analyzes the image, generates an AI-based advertising prompt, creates a marketing image via Fal.AI, writes an engaging Facebook/Instagram caption, and posts it automatically.  

This template saves hours of manual work for marketers and small business owners who constantly need to design, write, and publish product campaigns. It eliminates repetitive steps like prompt writing, AI model switching, and post scheduling — letting you focus on strategy, not execution.  

The workflow integrates seamlessly with **Fal.AI** for image generation, **OpenAI Vision** for image analysis, and the **Facebook Graph API** for automated publishing.  
Whether you’re launching a 10.10 campaign or promoting a new product line, this template transforms your product photo into a ready-to-publish ad in just minutes.  

---

## Who’s it for
This workflow is designed for:
- **Marketers and e-commerce owners** who need to create social content quickly.  
- **Agencies** managing multiple clients’ campaigns.  
- **Small business owners** who want to automate Facebook/Instagram posts.  
- **n8n creators** who want to learn AI-assisted content automation.

---

## What problem does this solve
Manually creating ad images and captions is time-consuming and repetitive.  
You need to:
1. Edit the product photo.  
2. Write a creative brief or prompt.  
3. Generate an image in Fal.AI or Midjourney.  
4. Write a caption.  
5. Log into Facebook and post.  

This workflow combines all five steps into one automation — triggered directly by sending a Telegram message.  
It handles **AI analysis, image creation, caption writing, and posting**, removing human friction while maintaining quality and creative control.

---

## What this workflow does
The workflow is divided into **four main zones**, color-coded inside the canvas:

### 🟩 Zone 1 – Product Image Analysis
- Trigger: User sends a product image to a Telegram bot.  
- n8n retrieves the file path using Telegram API.  
- OpenAI Vision analyzes the product photo and describes color, material, and shape.  
- An AI agent converts this into structured data for generating ad prompts.

### 🟥 Zone 2 – Generate Ad Image Prompt
- The AI agent creates a professional advertising prompt based on the product description and campaign (e.g., “10.10 Sale”).  
- The prompt is sent to the user for confirmation via Telegram before proceeding.

### 🟨 Zone 3 – Create Ad Image via Fal.AI
- The confirmed prompt and image are sent to **Fal.AI**’s image generation API.  
- The system polls the generation status until completion.  
- The generated image is sent back to Telegram for user review and approval.

### 🟦 Zone 4 – Write Caption & Publish
- The approved image is re-analyzed by AI to write a Facebook/Instagram caption.  
- The user confirms the text on Telegram.  
- Once approved, the workflow uploads the final post (image + caption) to Facebook automatically using the Graph API.

---

## Setup
### Prerequisites
- **n8n self-hosted or Cloud account**  
- **Telegram Bot Token** (via @BotFather)  
- **Fal.AI API key**  
- **Facebook Page Access Token** with publishing permissions  
- **OpenAI API Key** for image analysis and text generation  

### Steps
1. Create a **Telegram Bot** and paste its token into n8n Credentials.  
2. Set up **Fal.AI Credentials** under HTTP Request → Authentication.  
3. Connect your **Facebook Page** through Facebook Graph API credentials.  
4. In the **HTTP Request node**, set:  
   - URL: `https://fal.run/fal-ai/nano-banana`  
   - Auth: Bearer {{ $credentials.FalAI.apiKey }}  
5. Configure all LLM and Vision nodes using your **OpenAI credentials**.

---

## Node settings

### 🟩 Analyze Image (OpenAI Vision)
```json
{
  "model": "gpt-4o-mini",
  "input": [
    {
      "role": "user",
      "content": [
        { "type": "image_url", "image_url": "{{$json.image_url}}" },
        { "type": "text", "text": "Describe this product in detail for advertising context." }
      ]
    }
  ]
}
```

---

### 🟥 Set Node – Prepare Fal.AI Body
```json
{
  "prompt": {{ JSON.stringify(($json.ad_prompt || '').replace(/\r?\n/g, ' ')) }},
  "image_urls": [{{ JSON.stringify($json.image_url || '') }}],
  "num_images": 1,
  "output_format": "jpeg"
}
```

---

### 🟦 HTTP Request (Facebook Graph API)
```json
{
  "method": "POST",
  "url": "https://graph.facebook.com/v19.0/me/photos",
  "body": {
    "caption": "{{ $json.caption_text }}",
    "url": "{{ $json.final_image_url }}",
    "access_token": "{{ $credentials.facebook.accessToken }}"
  }
}
```

---

## How to customize the workflow
- **Change AI Models:** Swap Fal.AI for Flux, Veo3, or SDXL by adjusting API endpoints.  
- **Add Channels:** Extend the workflow to post on LINE OA or Instagram.  
- **Add Approval Logic:** Keep Telegram confirmation steps before every publish.  
- **Brand Rules:** Adjust AI prompt templates to enforce tone, logo, or color palette consistency.  
- **Multi-language Posts:** Add translation nodes for global campaigns.

---

## Troubleshooting
| Problem | Cause | Solution |
|----------|--------|-----------|
| Telegram message not triggering | Webhook misconfigured | Reconnect Telegram Trigger |
| Fal.AI API error | Invalid JSON or token | Use `JSON.stringify()` in Set node and check credentials |
| Facebook upload fails | Missing permissions | Ensure Page Access Token has `pages_manage_posts` |
| LLM parser error | Output not valid JSON | Add `Structured Output Parser` and enforce schema |

---

## ⚠️ Security Notes
- **Do NOT hardcode API keys** in Set or HTTP Request nodes.  
- Always store credentials securely under **n8n Credentials Manager**.  
- For self-hosted setups, use `.env` variables for sensitive keys (OpenAI, Fal.AI, Facebook).  

---

### 🏷️ Hashtags
#n8n #Automation #AIworkflow #FalAI #FacebookAPI #TelegramBot #nanobanana #NoCode #MarketingAutomation #SocialMediaAI #JaruphatJ #WorkflowTemplate #OpenAI #LLM #ProductAds #CreativeAutomation

## Product Image
![Alt text](https://drive.google.com/thumbnail?id=1G0BrS1Zj1BMisa9VObeBQrR3s9ZPyMzS&sz=w300)

## Process Step
![Alt text](https://drive.google.com/thumbnail?id=1hEPQsXbhTIymeDKoav0u5nMEiTFTQzsX&sz=w300) ![Alt text](https://drive.google.com/thumbnail?id=1f_8h34SdhFGv6AxgWA7Ab5V6NdDwe4hK&sz=w300)  ![Alt text](https://drive.google.com/thumbnail?id=1I00j2SHiZ8mOQORTeVOjSNbXf0x_1dkh&sz=w300)  ![Alt text](https://drive.google.com/thumbnail?id=1YOwB-6z3kD2ITzK6ZPSyo_JtrrKTmlrB&sz=w300)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Facebook Graph API, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
