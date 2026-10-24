# 💬 Send AI-powered inbound LinkedIn replies with La Growth Machine and OpenAI

> ⚡ **3 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow listens for new La Growth Machine inbox messages, uses OpenAI to draft a context-aware reply based on the lead and recent thread history, and sends the response back via La Growth Machine as a LinkedIn message.

## How it works
1. Triggers when a new inbox message is received in La Growth Machine.
2. Filters the event to only continue when the message is inbound (received from the lead).
3. Adds the campaign objective, product context, and tone guidelines used to steer the reply.
4. Sends the lead details and recent conversation history to OpenAI to generate the next reply text.
5. Sends the generated reply back to the lead through La Growth Machine as a LinkedIn message.

## Setup
1. Connect your La Growth Machine API credentials and ensure the trigger has access to your inbox messages.
2. Add your OpenAI API credentials and confirm the selected model (gpt-4o) is available for your account.
3. Replace the placeholder memberId in the send step with your La Growth Machine Member ID (for example, by looking it up in LGM).

## 🔗 Nodes Used

Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
