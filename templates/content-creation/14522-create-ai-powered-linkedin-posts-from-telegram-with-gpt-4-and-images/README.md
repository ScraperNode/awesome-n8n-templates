# 🎬 Create AI-powered LinkedIn posts from Telegram with GPT-4 and images

> ⚡ **130 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🚀 **Description**

Turn Telegram into your personal AI-powered LinkedIn content assistant.

This workflow lets you create high-quality LinkedIn posts from a simple chat message, refine them with natural feedback, generate matching AI images, and publish directly to LinkedIn—all without leaving Telegram.

Perfect for creators, founders, and professionals who want to stay consistent on LinkedIn without switching between tools.

## **⚙️ How it works**

**1. Start with an idea:** Send a topic to your Telegram bot (e.g., “Write about AI in marketing”).

**2. Instant LinkedIn draft:** AI generates a structured, engaging post with a strong hook, insights, and CTA—ready to publish.

**3. Refine with feedback:** Ask for changes like “make it shorter” or “more professional,” and the workflow updates your draft instantly.

**4. Add an AI-generated image (optional):** Describe the visual you want, and the workflow creates a polished, LinkedIn-ready image.

**5. Approve before publishing:** Review and approve both the post and image to maintain full control.

**6. Publish in one step:** The workflow posts directly to LinkedIn with or without the image.

**7. Clean and reset automatically:** Your draft is cleared after publishing, and inactive sessions are cleaned up automatically.

## 🛠️ Set up steps

**Estimated time: 10–15 minutes**

1. Create a Telegram bot and connect it in n8n
2. Add your OpenAI API key (for content and image generation)
3. Connect your LinkedIn account via OAuth
4. Activate the workflow and start chatting with your bot

## 🔗 Nodes Used

Telegram, Telegram Trigger, LinkedIn, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
