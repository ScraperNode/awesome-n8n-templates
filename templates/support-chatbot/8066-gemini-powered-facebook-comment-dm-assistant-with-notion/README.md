# 💬 Gemini-powered Facebook comment & DM assistant with Notion

> ⚡ **1,373 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

## What Problem Does It Solve?

Customers often ask product questions or prices in comments.

Businesses waste time replying manually, leading to delays.

Some comments only need a short thank-you reply, while others need a detailed private response.

This workflow solves these by:

Replying with a friendly public comment.

Sending a private message with details when needed.

Handling compliments, complaints, and unclear comments in a consistent way.

## How to Configure It

Facebook Setup

Connect your Facebook Page credentials in n8n.

Add the webhook URL from this workflow to your Facebook App/Webhook settings.

AI Setup

Add your Google Gemini API key (or swap for OpenAI/Claude).

The included prompt is generic — you can edit it to match your brand tone.

Optional Logging

If you want to track processed messages, connect a Notion database or another CRM.

## How It Works

Webhook catches new Facebook comments.

AI Agent analyzes the comment and categorizes it (question, compliment, complaint, unclear, spam).

Replying:

For questions/requests → public reply + private message with full details.

For compliments → short thank-you reply.

For complaints → apology reply + private message for clarification.

For unclear comments → ask politely if they need help.

For spam/offensive → ignored (no reply).

Replies and messages are sent instantly via the Facebook Graph API.

## Customization Ideas

Change the AI prompt to match your brand voice.

Add forwarding to Slack/Email if a human should review certain replies.

Log conversations in Notion, Google Sheets, or a CRM for reporting.

Expand to Instagram or WhatsApp with small adjustments.

If you need any help [Get In Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

HTTP Request, Webhook, Facebook Graph API, Notion, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
