# 📱 Schedule LinkedIn posts with AI content generation and Telegram approval

> ⚡ **1,594 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Overview
This workflow automates LinkedIn posts using OpenAI. The prompts are stored in the workflow and can be customized as needed to fit your needs. The workflow uses a combination of a Schedule Trigger, some code that determines what day of the week it is (no posting Friday - Sunday), a prompts node to set your OpenAI prompts, a random selection of a prompt so that you are not generating content that looks repetitive. We send that all to OpenAI API, select a random time, have the final LinkedIn post sent to your Telegram for approval, once approved wait for the correct time slot, and then Post to your LinkedIn account using the LinkedIn node.

## How it works:

Run or schedule the workflow in n8n
The automation can be triggered manually or on a custom schedule (excluding weekends if needed).

You should customize the prompts in the Prompt Node to suit your needs.

A random LinkedIn post prompt is selected
Pre-written prompts are rotated to keep content fresh and non-repetitive.

OpenAI generates the LinkedIn post
The prompt is sent to OpenAI via API, and the result is returned in clean, ready-to-use form.

You receive the draft via Telegram.
The post is sent to Telegram for quick approval or review.

Post is scheduled or published via the LinkedIn Connector

Once approved, the workflow delays until the target time, then sends the content to LinkedIn.

## What's needed:
An OpenAPI API key, LinkedIn Account, and a Telegram Account.

## For Telegram you will need to configure the Bot service.

Step-by-Step: Telegram Approval for Your Workflow
A. Set Up a Telegram Bot
	1. Open Telegram and search for “@BotFather”.
	2. Start a chat and type /newbot to create a bot.
	3. Give your bot a name and a unique username (e.g., YourApprovalBot).
	4. Copy the API token that BotFather gives you.

B. Add Your Bot to a Private Chat (with You)
- Find your bot in Telegram, click “Start” to activate it.
- Send a test message (like “hello”) so the chat is created.

C. Get Your User ID
- Search for “userinfobot” or use sites like userinfobot in Telegram.
Type /start and it will reply with your Telegram user ID.

## OpenAI powers the LinkedIn post creation

1.  **Add Your OpenAI API Key**:
    * Log in to your OpenAI Platform account: **`https://platform.openai.com/`**.
    * Go to **API keys** and create a new secret key.
    * In n8n, create a new **"OpenAI API"** credential and paste your API key. Give it a name.
2.  **Apply Credential to Nodes**: OpenAI Message Node

## Connect your LinkedIn account to the Linked in Node
1.	Select your account from the LinkedIn Dropdown box.

## 🔗 Nodes Used

Telegram, LinkedIn, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
