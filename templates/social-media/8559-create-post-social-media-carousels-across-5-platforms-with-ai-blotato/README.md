# 📱 Create & post social media carousels across 5 platforms with AI & Blotato

> ⚡ **1,381 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description
This AI Agent Carousel Maker uses ChatGPT and Blotato to write, generate, and auto-post social media carousels to 5 social platforms: Instagram, Tiktok, Facebook, Twitter, and Pinterest. 

Simply chat with the AI agent, confirm which prebuilt viral carousel template you want to use, then the AI Agent populates the template with your personalized information and quotes, and posts to social media on autopilot.

## Who Is This For?
This is perfect for entrepreneurs, small businesses, content creators, digital marketing agencies, social media marketing agencies, and influencers.

## How It Works

**1. Chat: AI Agent Carousel Maker**
- Chat with AI agent about your desired carousel  
- Confirm quotes and carousel template to use

**2. Carousel Generation**
- AI agent calls corresponding Blotato tool to generate carousel  
- Wait and fetch completed carousel

**3. Publish to Social Media via Blotato**
- Choose your social accounts  
- Either post immediately or schedule for later

## Setup
- Sign up for OpenAPI API access and create credential  
- Sign up for Blotato.com  
- Generate Blotato API Key by going to Settings &gt; API &gt; Generate API Key (paid feature only)  
- Create Blotato credential  
- If you're using n8n, ensure you have ""Verified Community Nodes"" enabled in your n8n Admin Panel. Then, install ""Blotato"" verified community node.  
- Click ""Open chat"" to test workflow  
- Complete SETUP sticky notes in BROWN in this template

## Tips & Tricks
- AFTER your first successful run, open each carousel template tool call (i.e. pink nodes attached to AI Agent Carousel Maker) and tweak the parameters, but DO NOT change the ""quotes"" parameter unless you're an n8n expert.  
- DO NOT edit the 'quotes' parameter unless you're an n8n expert.  
- When adding a new template, DO NOT duplicate an existing node. Instead, click '+ Tool' &gt; Blotato Tool &gt; Video &gt; Create &gt; select new template. This ensures template parameters are correctly loaded.  
- While testing: enable only 1 social platform, and deactivate the rest. Add optional parameter 'scheduledTime' so that you don't accidentally post to social media. Check your content calendar here: https://my.blotato.com/queue/schedules

## 📄 Documentation
[Full Tutorial](https://help.blotato.com/api/templates/5-automate-instagram-carousels-with-ai-chat)

## Troubleshooting
Check [Blotato API Dashboard](https://my.blotato.com/api-dashboard) and logs to review requests, responses, and errors. Verify template parameters and n8n node configuration if runs fail.

You can also:
- [View all video/carousel templates available](https://my.blotato.com/videos/new)
- [Check how your carousels look](https://my.blotato.com/videos)

## Need Help?
In the Blotato web app, click the orange button on the bottom right corner. This opens the Support messenger where I help answer technical questions.

Connect with me: [Linkedin](https://www.linkedin.com/in/sabrinaramonov) | [Youtube](https://www.youtube.com/@sabrina_ramonov)

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
