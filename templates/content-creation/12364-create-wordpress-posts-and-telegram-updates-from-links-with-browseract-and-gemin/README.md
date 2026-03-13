# 🎬 Create WordPress posts and Telegram updates from links with BrowserAct and Gemini

> ⚡ **45 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Auto-generate Wordpress posts and social media updates from links With BrowserAct

This workflow acts as an intelligent content engine. Simply send a link to your Telegram bot (e.g., a product page or news article), and it will automatically scrape the content, rewrite it into a high-quality blog post using AI, generate custom artwork, and publish it to WordPress while simultaneously creating an engaging Telegram update.

## Target Audience
Content marketers, bloggers, and social media managers looking to repurpose content at scale.

## How it works
1. **Analyze Input**: The workflow receives a message via **Telegram**. An **AI Agent** classifies it to determine if it's a request to process a link or just a chat.
2. **Scrape & Clean**: If a link is detected, **BrowserAct** scrapes the target page. An AI "Content Editor" then cleans the text and structures it into a blog format.
3. **Visual Creativity**: A separate AI Agent analyzes the original images from the article to understand the style, then generates a unique, artistic image prompt.
4. **Generate Assets**:
    * **Text**: An AI writes the full blog post (HTML formatted for WordPress) and a punchy Telegram caption.
    * **Image**: **Google Gemini** generates a new header image based on the artistic prompt.
5. **Publish**:
    * **WordPress**: The workflow uploads the generated image and publishes the new article.
    * **Telegram**: It sends the generated image and the engaging caption back to your chat.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **WordPress**, **BrowserAct**, **Google Gemini**, and **OpenRouter** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Telegram and WordPress Post Architect** template is saved in your BrowserAct account.
3. **Configure Telegram**: Ensure your bot is created via BotFather and the API token is added to the Telegram credentials.
4. **Activate**: Turn on the workflow.
5. **Test**: Send an article link to your bot to see it transform into a new post.

## Requirements
* **BrowserAct** account with the **Telegram and WordPress Post Architect** template.
* **WordPress** account (Application Password).
* **Telegram** account (Bot Token).
* **Google Gemini** & **OpenRouter** accounts.

## How to customize the workflow
1. **Change Image Style**: Modify the system prompt in the **Image Prompt** agent to enforce a specific art style (e.g., "Minimalist Line Art" or "Cyberpunk").
2. **Add SEO**: Update the **Generate Web Structure** agent to automatically include SEO keywords or meta descriptions in the JSON output.
3. **Multi-Platform**: Add a **Twitter** or **LinkedIn** node at the end to cross-post the Telegram update to other social networks.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Wordpress, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
