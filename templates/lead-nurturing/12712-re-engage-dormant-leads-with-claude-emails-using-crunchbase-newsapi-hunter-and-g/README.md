# 💬 Re-engage dormant leads with Claude emails using Crunchbase, NewsAPI, Hunter, and Gmail

> ⚡ **17 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## What this workflow does

  Automatically re-engages dormant leads by detecting trigger events (funding rounds, company news, leadership changes) and generating personalized outreach emails. The workflow identifies leads inactive for 90+ days, checks multiple data sources for re-engagement opportunities, and sends AI-generated email drafts to sales reps for approval.

  ## How it works

  1. **Schedule** - Runs weekly (every Monday by default)
  2. **CRM Data** - Pulls leads that have been inactive for 90+ days
  3. **Trigger Detection** - Checks three sources in parallel:
     - Crunchbase for funding events
     - NewsAPI for company news
     - Hunter.io for leadership changes
  4. **AI Email** - Claude generates a personalized re-engagement email based on the detected trigger
  5. **Rep Notification** - Sends the complete lead profile and email draft to the assigned sales rep for review

  ## Setup steps

  1. Replace **Load inactive leads (mock)** with your CRM integration (Salesforce, HubSpot, Pipedrive)
  2. Add API credentials for trigger detection:
     - NewsAPI (free at newsapi.org)
     - Crunchbase (optional, paid)
     - Hunter.io (free tier available)
  3. Add your **Anthropic API** credentials for Claude
  4. Add your **Gmail OAuth** credentials
  5. Test with **Test workflow manually** node before enabling schedule

  ## API keys required

  | Service | Purpose | Cost |
  |---------|---------|------|
  | NewsAPI | Company news detection | Free (100 req/day) |
  | Crunchbase | Funding event detection | $99/mo (optional) |
  | Hunter.io | Leadership change detection | Free tier available |
  | Anthropic | AI email generation | Pay per use |
  | Gmail | Send notifications | Free |

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
