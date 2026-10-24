# 💬 Reply to LinkedIn messages with OpenAI GPT and escalate complex cases to Discord

> ⚡ **23 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for

This workflow is for sales teams, growth agencies, and solo operators running LinkedIn outreach campaigns who want to automate prospect reply handling without losing the human touch on complex cases.

## How it works

1. A webhook receives incoming LinkedIn message events and filters out invalid entries — ensuring a LinkedIn URL is present and the message is not sent by the agent itself.
2. The Unipile API resolves the contact's public LinkedIn identifier, then fetches the full conversation history for that chat thread.
3. An AI agent powered by OpenAI GPT analyzes the conversation and classifies the prospect (Meeting Request, Info Request, Not Interested, or Escalation), then drafts a contextual reply.
4. A conditional branch evaluates the classification: if escalation is required, a formatted alert is posted to a Discord channel; otherwise, the workflow waits a randomized business-hours delay before posting the AI-generated reply back to LinkedIn via the Unipile API.

## How to set up

- [ ] Configure the **Webhook** node with the correct path to receive LinkedIn reply events
- [ ] Add your **Unipile API credentials** (base URL + API key) to the three HTTP Request nodes
- [ ] Set your **OpenAI API credentials** in the OpenAI Chat Model node
- [ ] Configure the **Discord** bot token and target channel ID for escalation alerts
- [ ] Update the AI agent system prompt with your identity, company details, and booking link
- [ ] Adjust the **Wait** node logic to match your preferred reply delay window

## Requirements

- Unipile account with a connected LinkedIn account
- OpenAI API account
- Discord bot with access to a notification channel

## How to customize

- Swap the OpenAI model for another provider (Anthropic Claude, Mistral) by replacing the language model sub-node.
- Extend the classification logic in the IF node to add more routing branches (e.g. route "Not Interested" prospects to a CRM update step).
- Replace the Discord alert with a Slack message or an email notification via Gmail for escalation handling.

## 🔗 Nodes Used

HTTP Request, Webhook, Discord, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
