# 🎬 Auto-generate & post AI images to Facebook using Gemini & Pollinations AI

> ⚡ **7,880 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### This workflow is designed for content creators or AI artists who want to automate posting unique AI-generated images to their Facebook Page multiple times a day. It uses Google Gemini via LangChain to generate imaginative image prompts, and Pollinations AI to generate the images. Posts are published with hashtags and a clean caption.


## Who Is It For
   - AI artists
   - Facebook page managers
   - Digital marketers looking for automated creative content


## What It Does
   - Triggers 3x daily at 7:00, 11:00, and 17:00 (local time)
   - Generates random AI image prompts in a retro-futuristic, cinematic, or surreal style using Google Gemini
   - Fetches images from Pollinations AI using custom prompts
   - Posts images automatically to your Facebook Page with hashtags


## Requirements
   - n8n self-hosted or desktop (workflow uses schedule trigger)
   - Pollinations API (no auth needed)
   - Facebook Page with Facebook Graph API token:
   - Required scopes: pages_manage_posts, pages_read_engagement, pages_show_list
   - Google Gemini API Key (used via LangChain node)


## How to Customize
   - Change the prompt style in the Basic LLM Chain node (promptType: define) to suit your theme.
   - Adjust Set The Generator Image node if you want:
   - Different image sizes (width / height)
   - Different seed randomness
   - Other Pollinations models (&model=kontext)
   - Add Telegram/Twitter nodes if you want cross-posting
   - Use Set node to allow easy user-level configuration of models, hashtags, times, etc.

## 🔗 Nodes Used

HTTP Request, Facebook Graph API, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
