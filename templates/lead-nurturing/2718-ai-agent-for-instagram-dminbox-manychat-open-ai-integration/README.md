# 💬 AI agent for Instagram DM/inbox. Manychat + Open AI integration

> ⚡ **46,687 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Automate Instagram DMs with OpenAI GPT and ManyChat

### How It Works:  
Once connected, GPT will automatically initiate conversations with messages from new recipients in Intagram.

## Who Is This For?
This workflow is ideal for
- marketers,
- business owners
- content creators

who want to automatically respond to Instagram direct messages using OpenAI GPT. 

By integrating ManyChat, you can manage conversations, nurture leads, and provide instant replies at scale.

## What This Workflow Does
- **Captures** incoming Instagram DMs through ManyChat’s integration.  
- **Processes** messages with GPT to generate a relevant response.  
- **Delivers** instant replies back to Instagram users, creating efficient, AI-driven communication.  

## Setup
1. **Import the Template**: Copy the n8n workflow into your workspace.  
2. **OpenAI Credentials**: Add your OpenAI API key in n8n so GPT can generate responses.  
3. **ManyChat Account**: Create (or log in to) your ManyChat account.  
4. **Connect Instagram**: Link your Instagram profile as a channel in ManyChat.  
5. **ManyChat Custom Field**: Create a custom field for storing user input or conversation context.  
6. **Configure Default Reply**: In ManyChat, set up the default Instagram reply flow to point to your n8n webhook.  
7. **Add External Request**: Create an external request step in ManyChat to send messages to n8n.  
8. **Test the Flow**: Send yourself a DM on Instagram to confirm the workflow triggers and GPT responds correctly.  

## Instructions and links:

[Notion instruction](https://shadowed-pound-d6e.notion.site/Instagram-GPT-light-version-Manychat-X-N8N-176293bddff880899a9ac255585d29f7?pvs=4)

[Register in ManyChat](https://manychat.partnerlinks.io/vm4wkw8j81tc)

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
