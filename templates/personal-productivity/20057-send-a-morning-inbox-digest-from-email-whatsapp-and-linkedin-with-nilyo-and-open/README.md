# ⚡ Send a morning inbox digest from email, WhatsApp, and LinkedIn with Nilyo and OpenAI

> ⚡ **2 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning and uses Nilyo to collect recent WhatsApp messages, incoming emails, and pending LinkedIn invitations, then uses OpenAI to write a short briefing and sends the digest to you on WhatsApp.

## How it works
1. Runs every day at 8:00 based on a schedule trigger.
2. Sets the digest recipient name and lookback window (in hours) used to fetch recent activity.
3. Uses Nilyo to pull recent WhatsApp messages, recent emails, and received LinkedIn invitations, continuing even if one source fails.
4. Waits for all three sources to return and aggregates the combined results into a single dataset.
5. Sends the aggregated data to OpenAI Chat to generate a plain-text briefing grouped into “needs an answer today”, “can wait”, and “ignore”.
6. Sends the generated briefing to the configured recipient via WhatsApp using Nilyo.

## Setup
1. Install and enable the Nilyo community node (`n8n-nodes-nilyo`) in your n8n instance.
2. Create a Nilyo personal token (Agent access), add it as a Nilyo API credential, and connect your Email, WhatsApp, and LinkedIn accounts in Nilyo.
3. Add an OpenAI API credential for the chat model used to write the briefing.
4. Update the Settings values for `digest_recipient` and `lookback_hours` to match your WhatsApp contact name and desired time window.

## 🔗 Nodes Used

Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
