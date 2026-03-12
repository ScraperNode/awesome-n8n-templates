# 💬 Personalized LinkedIn responses with OpenAI GPT & Notion-based routing

> ⚡ **3,391 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Who is this for?

This workflow is for professionals and teams who want to automate LinkedIn message replies with intelligent, human-like responses — without losing control over tone or accuracy. Ideal for founders, sales teams, DevRel, or community managers handling high-volume inbound messages.

## What problem is this workflow solving?

Responding to every LinkedIn message manually is slow and inconsistent. Basic AI bots generate replies without context or nuance. This subworkflow solves both problems by using structured message routing from Notion and profile insights from UniPile to craft smart, context-aware responses.

## What this workflow does

This workflow takes the sender’s message and profile (from [LinkedIn Auto Message Router with Request Detection](#)) and references your centralized [Notion database of message types](https://www.notion.so/1da5b6e0c94f808680b6eab8e340d60e). It uses that to either match the message to a known response or generate a new one using OpenAI's GPT model — all while following professional tone guidelines.

This is the **third workflow in a 3-part automation system**:

- Receives data from **[LinkedIn Auto Message Router with Request Detection](#)**
- Uses **[UniPile LinkedIn Profile Lookup Subworkflow](#)** to enrich responses based on follower count or org data

### Example Use Case

If a message comes from someone with low reach (e.g., under 1,000 followers), the AI politely deflects a meeting request. If an influencer reaches out, the AI immediately offers a booking link. Your team controls this logic by updating the Notion database — no edits to the workflow required.

## Setup

1. Connect this workflow as a subworkflow in your router or Slack approval flow
2. Store your Notion API key and database ID in n8n
3. Provide the following parent inputs:
   - `message` – The LinkedIn message text
   - `sender` – Name of the sender
   - `chatid` – Session ID (optional for memory)
   - `linkedinprofile` – Enriched array with LinkedIn context (follower count, connection info, etc.)

4. Add your preferred AI model credentials (supports OpenAI, Gemini, or Ollama)
5. Optional: Customize system prompt to better match your brand voice

## How to customize this workflow to your needs

- Update the Notion schema to include industry-specific categories or actions
- Change the AI tone (e.g., humorous, more corporate, etc.)
- Add conditional logic for auto-sending messages without Slack approval
- Extend to support multiple platforms (e.g., email, X/Twitter, Instagram DMs)

## 🔗 Nodes Used

Notion, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
