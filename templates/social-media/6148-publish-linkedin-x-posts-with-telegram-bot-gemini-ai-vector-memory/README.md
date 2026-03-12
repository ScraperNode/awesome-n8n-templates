# 📱 Publish LinkedIn & X posts with Telegram Bot, Gemini AI & Vector Memory

> ⚡ **1,152 views** · 📱 [Social Media & Email Marketing](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Overview

This is a Telegram Bot capable of receiving information from the user in the form of text messages, voice messages, images or documents (e.g., presentations, PDFs, HTML pages), and publishing posts to the user's social platforms.

The bot always sends the user a draft of the post for verification before publishing it.

The bot saves relevant information to its long-term memory (vector store), so you don't need to repeat it in every interaction (e.g., who you are, your company, product, etc.).

This template supports creating posts in LinkedIn and X.

# Setup

## Requirements
To use this template your will need:
1. Google's AI Studio API key. Get one here: https://aistudio.google.com/app/apikey
2. Telegram Bot API key. You receive one when you register a new Telegram Bot via @BotFather bot in Telegram.
3. LinkedIn API key. Follow the instructions here to create one: https://docs.n8n.io/integrations/builtin/credentials/linkedin/
4. X API key. Follow the instructions here to create one: https://docs.n8n.io/integrations/builtin/credentials/twitter/

## Step-by-step instruction
1. Import this template
2. Create a new Telegram Bot or get an API key for existing one.
3. Configre Telegram nodes with Telegram API key.
4. Obtain a Google's AI Studio API key. Set it in "Describe document", "Describe audio" and "Google Gemini Chat Model".
5. Create an API key for LinkedIn.
6. Create an API key for X.
7. Set our LinkedIn key in "Create post in LinkedIn" nodes.
8. Set your X key in "Create X (Twitter) post" node.

## Other
Bright-colored notes in the template highlight information that needs to be set before launching the template.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
