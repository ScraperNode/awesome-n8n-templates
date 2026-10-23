# 💬 Qualify and book Facebook leads with ElevenLabs voice calls, Cal, Supabase, Slack and Gmail

> ⚡ **467 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it Works
As soon as a new lead fills out your form through facebook ads, the data gets sent to n8n immediately and saved to Supabase. Then an outbound call gets triggered instantly to qualify the lead and book a meeting if applicable. As soon as this step is completed, a slack and email notification is sent to the team

## Set up steps
1. download and import workflow into n8n
2. Add credentials for Facebook, Eleven Labs, Cal, Supabase, Slack and Gmail
3. Run workflow node by node and edit accordingly

## Requirements
1. Facebook Account: Includes facebook ads account, business page, Facebook leads form
2. Eleven Labs Account
3. Cal Account
4. Supabase Account
5. Slack Account
6. Gmail Account

## Who this is for

This is for any business running facebook ads and wants to qualify leads and book appointment with qualified leads using voice agents.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, Supabase, Facebook Lead Ads Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
