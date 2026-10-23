# 📱 Subscribe new Mighty Networks members to a Kit onboarding drip sequence

> ⚡ **30 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is this for?

This workflow is built for **community builders**, **course creators**, and **membership site operators** who use **Mighty Networks** for their community and **Kit (ConvertKit)** for email marketing.

If you're manually adding new members to your email list every time someone joins your community this template eliminates that entirely.

## What problem does this solve?

- New community members don't get added to your email sequences fast enough (or at all)
- Manually exporting member lists and importing them into Kit is tedious and error-prone
- Inconsistent webhook payload formats from Mighty Networks make integrations fragile
- No visibility into whether a subscription actually went through

## What this workflow does

When a new member joins your Mighty Networks community, this workflow automatically:

- **Receives the webhook** from Mighty Networks in real time
- **Parses the member data** (email, first name, full name) with smart fallback logic that handles 5 different Mighty Networks payload formats
- **Subscribes them to your Kit email sequence** via the Kit API no manual entry required
- **Logs the result** with subscription ID and API response for easy debugging

The entire flow runs in under 2 seconds from join to subscription.

## Setup

### Credentials needed
- **Kit (ConvertKit)** API credentials (add via n8n credentials panel)

### Configuration
1. Copy the webhook URL from the **Mighty Networks Webhook** node
2. In your Mighty Networks admin → Integrations → Webhooks, create a new webhook pointing to that URL. Set the trigger to "New Member Joined"
3. Open the **Kit: Subscribe to Onboarding Sequence** node and replace the sequence ID with your own (find it in your Kit dashboard under Sequences)

### Test it
Add a test member to your Mighty Networks community and verify they appear in your Kit sequence within a few seconds.

## How to customize this workflow

- **Different email platform?** Replace the Kit HTTP Request node with your platform's API call (Mailchimp, ActiveCampaign, etc.)
- **Add tagging?** Insert a Kit "Add Tag" API call after the subscribe step to tag members by community or source
- **Multiple sequences?** Add a Switch node before the subscribe step to route members to different sequences based on which Mighty Networks group they joined
- **Slack notification?** Add a Slack node after Log Result to notify your team when a new member is enrolled

## 🔗 Nodes Used

Webhook, ConvertKit

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
