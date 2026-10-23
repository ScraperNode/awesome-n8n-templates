# ⚡ Send WhatsApp alerts for new LinkedIn messages via Nilyo

> ⚡ **1 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow listens for new LinkedIn messages via Nilyo, fetches recent conversation context, and sends you a WhatsApp alert with the sender, the latest message, and a short thread preview.

## How it works
1. Triggers when Nilyo receives a new `message.new` event from your LinkedIn inbox.
2. Sets the WhatsApp alert recipient name and how many recent thread messages to include.
3. Filters out messages you sent yourself, system events, and empty messages.
4. Uses Nilyo to read the latest messages from the LinkedIn conversation referenced by the event.
5. Aggregates the retrieved messages into a single thread context.
6. Sends a WhatsApp message via Nilyo to the configured contact with the new message and a preview of earlier messages.

## Setup
1. Install and enable the Nilyo community node (`n8n-nodes-nilyo`) in your n8n instance.
2. Create a Nilyo personal token (Agent access) and add it as a Nilyo API credential in n8n.
3. Connect your LinkedIn account and WhatsApp account in Nilyo.
4. Update the alert recipient name in the workflow Settings to match a unique contact/chat name in your WhatsApp.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
