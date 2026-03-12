# 🎬 Generate & auto-post tech news AI avatar videos to social media with Heygen and Blotato

> ⚡ **998 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Description
This fully automated AI Avatar Social Media system creates talking head AI clone videos, WITHOUT having to film or edit yourself. It combines n8n, AI agent, HeyGen, and Blotato to research, create, and distribute talking head AI clone videos to every social media platform every single day.

This template is ideal for content creators, social media managers, social media agencies, small businesses, and marketers who want to to scale short-form video creation, without manually filming and editing every single video.

## Overview
**1. Trigger: Schedule**
- Configured to run once daily at 10am

**2. AI News Research**
- Research viral news from tech-focused forum, Hackernews
- Fetch the selected news item, plus discussion comments

**3. AI Writer**
- AI writes 30-second monologue script
- AI writes short video caption

**4. Create Avatar Video**
- Call Heygen API (requires paid API plan), specifying your avatar ID and voice ID
- Create avatar video, optionally passing in an image/video background if you have a green screen avatar (matte: true)

**5. Get Video**
- Wait awhile, then fetch completed avatar video
- Upload video to Blotato

**6. Publish to Social Media via Blotato**
- Connect your Blotato account
- Choose your social accounts
- Either post immediately or schedule for later"

## 📄 Documentation
[Full Tutorial](https://help.blotato.com/api/templates/3-hackernews-to-ai-clone-videos)

## Troubleshooting
Check your [Blotato API Dashboard](https://my.blotato.com/api-dashboard) to see every request, response, and error. Click on a request to see the details.

## Need Help?
In the Blotato web app, click the orange button on the bottom right corner. This opens the Support messenger where I help answer technical questions.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
