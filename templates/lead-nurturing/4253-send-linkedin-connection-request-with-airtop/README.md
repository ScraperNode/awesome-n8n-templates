# 💬 Send Linkedin connection request with Airtop

> ⚡ **2,291 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automating LinkedIn Connection Requests

## Use Case

Automatically sending LinkedIn connection requests to prospects can significantly streamline your outreach process. This automation ensures you only send requests to users you're not already connected with, and can optionally include a personalized message.

## What This Automation Does

This automation sends a LinkedIn connection request using the following input parameters:

- **linked_url**: The LinkedIn profile URL of the person you want to connect with.
- **airtop_profile**: The name of your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn.
- **message** *(optional)*: The note you want to include with your connection request.

## How It Works

1. Starts an Airtop browser session using your authenticated profile.
2. Opens the target LinkedIn profile in a new browser window.
3. Detects if you're already connected or if a connection request is pending.
4. If the "Connect" button is available:
   - If no message is provided, clicks "Connect" and sends the request without a note.
   - If a message is provided, clicks "Add a note", types the message, and sends the request.
5. Terminates the browser session.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) logged in to LinkedIn (requires one-time authentication).

## Next Steps

- **Pair with People Enrichment**: Use with the [LinkedIn Profile Finder](https://www.airtop.ai/blog/find-linkedin-profile-from-email) to generate URLs before sending requests.
- **CRM Integration**: Log connection attempts and responses in your CRM.
- **Campaign Sequencing**: Combine with message follow-up automations for a complete outreach flow.

Read more about [automating Linkedin Connection Requests](https://www.airtop.ai/automations/send-linkedin-connection-request-n8n)

## 🔗 Nodes Used

Execute Workflow Trigger, n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
