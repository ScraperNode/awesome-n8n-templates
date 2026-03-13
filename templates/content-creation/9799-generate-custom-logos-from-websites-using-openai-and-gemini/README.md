# 🎬 Generate custom logos from websites using OpenAI and Gemini

> ⚡ **572 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Transform any website into a custom logo in seconds with AI-powered analysis—no design skills required!

## 📋 What This Template Does
This workflow receives a website URL via webhook, captures a screenshot and fetches the page content, then leverages OpenAI to craft an optimized prompt based on the site's visuals and text. Finally, Google Gemini generates a professional logo image, which is returned as a binary response for immediate use.
- Automates screenshot capture and content scraping for comprehensive site analysis
- Intelligently generates tailored logo prompts using multimodal AI
- Produces high-quality, context-aware logos with Gemini's image generation
- Delivers the logo directly via webhook response

## 🔧 Prerequisites
- n8n self-hosted or cloud instance with webhook support
- ScreenshotOne account for website screenshots
- OpenAI account with API access
- Google AI Studio account for Gemini API

## 🔑 Required Credentials

### ScreenshotOne API Setup
1. Sign up at screenshotone.com and navigate to Dashboard → API Keys
2. Generate a new access key with screenshot permissions
3. In the workflow, replace "[Your ScreenshotOne Access Key]" in the "Capture Website Screenshot" node with your key (no n8n credential needed—it's an HTTP query param)

### OpenAI API Setup
1. Log in to platform.openai.com → API Keys
2. Create a new secret key with chat completions access
3. Add to n8n as "OpenAI API" credential type and assign to "OpenAI Prompt Generator" node

### Google Gemini API Setup
1. Go to aistudio.google.com/app/apikey
2. Create a new API key (free tier available)
3. Add to n8n as "Google PaLM API" credential type and assign to "Generate Logo Image" node

## ⚙️ Configuration Steps
1. Import the workflow JSON into your n8n instance
2. Assign the required credentials to the OpenAI and Google Gemini nodes
3. Replace the placeholder API key in the "Capture Website Screenshot" node's query parameters
4. Activate the workflow to enable the webhook
5. Test by sending a POST request to the webhook URL with JSON body: {"websiteUrl": "https://example.com"}

## 🎯 Use Cases
- **Marketing teams prototyping brand assets**: Quickly generate logo variations for client websites during pitches, saving hours on manual design
- **Web developers building portfolios**: Auto-create matching logos for new sites to enhance visual consistency in demos
- **Freelance designers iterating ideas**: Analyze competitor sites to inspire custom logos without starting from scratch
- **Educational projects on AI design**: Teach students how multimodal AI combines text and images for creative outputs

## ⚠️ Troubleshooting
- **Screenshot fails (timeout/error)**: Increase "timeout" param to 120s or check URL accessibility; verify API key and quotas at screenshotone.com
- **Prompt generation empty**: Ensure OpenAI credential has sufficient quota; test node isolation with a simple query
- **Logo image blank or low-quality**: Refine the prompt in "Generate Logo Prompt" for more specifics (e.g., add style keywords); check Gemini API limits
- **Webhook not triggering**: Confirm POST method and JSON body format; view execution logs for payload details

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
