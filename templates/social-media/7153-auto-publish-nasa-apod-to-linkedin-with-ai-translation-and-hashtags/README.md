# 📱 Auto-publish NASA APOD to LinkedIn with AI translation and hashtags

> ⚡ **400 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Auto-publish NASA APOD to LinkedIn with AI translation and hashtags
Transform NASA's daily astronomical wonders into engaging LinkedIn content automatically. This workflow fetches NASA's Astronomy Picture of the Day, translates it to Brazilian Portuguese using AI, generates strategic hashtags, and publishes everything to your LinkedIn profile with the stunning space image attached.

## Who's it for
Content creators, astronomy enthusiasts, science communicators, and anyone wanting to share high-quality educational content consistently on LinkedIn. Perfect for Portuguese-speaking professionals who want to engage their network with fascinating space discoveries while building their personal brand as a science advocate.

## How it works
The workflow runs on a daily schedule and handles the complete content pipeline automatically. It fetches the latest NASA APOD through the official API, including both the image and detailed explanation. The English description gets professionally translated to selected language using Google Gemini 2.5 Flash, while maintaining scientific accuracy and terminology.

Smart hashtag generation combines fixed branding tags with content-specific ones, mixing Portuguese and English for maximum reach. The final post includes the NASA image, translated description, and strategic hashtags, then gets published to your LinkedIn profile automatically.

## How to set up
You'll need accounts for Google AI Studio (free), LinkedIn Developer (free), and a Telegram bot for notifications. The setup takes about 15 minutes and uses only free services and APIs.

First, create your Google AI Studio account and get an API key for the AI translation services. Then set up a LinkedIn OAuth2 application to enable posting permissions. Create a Telegram bot through BotFather and get your chat ID for notifications.

Configure the Settings node with your Telegram chat ID and preferred language. The workflow comes with all prompts and configurations ready to use. Test each component individually before activating the daily automation.

## Requirements
- LinkedIn account with posting permissions
- Google AI Studio API key (free tier available)
- Telegram bot token and your chat ID
- Basic understanding of OAuth2 setup for LinkedIn
- NASA API key (optional - demo key included)

All services used have generous free tiers, making this workflow completely free to operate indefinitely.

## How to customize the workflow
The centralized Settings node makes customization simple. Change the target language from Brazilian Portuguese to any other language by updating the translate_to_language variable. Modify the posting schedule in the CRON trigger to match your preferred timing.

Customize the post template in the "Create Final Post Text" node to match your personal brand voice. Adjust the hashtag strategy by editing the AI prompt in the "Generate Hashtags" node. Add additional social platforms by duplicating the LinkedIn publisher with different credentials.

The AI prompts can be fine-tuned for different writing styles or specific astronomical topics. You can also extend the workflow to include additional content processing, image enhancements, or cross-posting to multiple platforms while maintaining the core NASA APOD automation.

## 🔗 Nodes Used

Telegram, LinkedIn, NASA, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
