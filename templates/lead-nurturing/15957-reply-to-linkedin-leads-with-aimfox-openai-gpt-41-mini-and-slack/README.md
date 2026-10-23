# 💬 Reply to LinkedIn leads with Aimfox, OpenAI GPT-4.1-mini, and Slack

> ⚡ **56 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives first-reply LinkedIn webhook events from Aimfox, fetches the full conversation for context, uses OpenAI to classify lead intent and draft a short reply for interested leads, sends the reply back via Aimfox, and posts outcome notifications to Slack.

## How it works
1. Receives a POST webhook from Aimfox when a prospect sends their first reply in a LinkedIn campaign.
2. Extracts key event fields and fetches the full conversation thread from the Aimfox API.
3. Reorders and aggregates the conversation messages into a single context string for the AI.
4. Uses OpenAI to classify the latest prospect reply as INTERESTED, NOT_INTERESTED, or NEEDS_REVIEW.
5. If INTERESTED, waits a random 3–15 minutes, then uses OpenAI to generate a concise, human-sounding LinkedIn reply using the full conversation context.
6. Sends the generated reply to the prospect through the Aimfox API and posts a confirmation to a Slack channel with the message and LinkedIn profile link.
7. If NOT_INTERESTED or NEEDS_REVIEW, posts the prospect’s reply to Slack so the team can close out or handle the conversation manually.

## Setup
1. Create an Aimfox webhook that triggers on first reply and paste the n8n webhook URL into Aimfox.
2. Add an Aimfox API credential (HTTP Header Auth) and confirm the account/recipient ID and conversation URN fields in the Aimfox API request URLs match your Aimfox payload.
3. Add an OpenAI API key and review both OpenAI prompts to match your business, offer, and tone.
4. Add Slack credentials and select the channel where you want “sent”, “not interested”, and “needs review” notifications posted.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
