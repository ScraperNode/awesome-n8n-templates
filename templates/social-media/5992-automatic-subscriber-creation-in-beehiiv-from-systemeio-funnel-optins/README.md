# 📱 Automatic subscriber creation in Beehiiv from Systeme.io funnel optins

> ⚡ **367 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Purpose

This workflow automatically creates a subscriber in a given Beehiiv publication when a new opt-in is registered in a given Systeme.io sales funnel.

**Good to know:** the integration with Systeme.io is done **at the sales funnel level**, not at the account level. If you have several sales funnels, you can use the same workflow several times.

## Quick Setup

1. Configure your sales funnel in Systeme.io to [create and trigger a webhook after an opt-in](https://help.systeme.io/article/144-how-to-create-and-trigger-a-webhook-after-an-opt-in-or-a-sale)
    1. Open the **“On New Systeme.io Optin”** node to find the webhook URL needed to configure your sales funnel on Systeme.io
2. Configure the “**Configure Workflow”** node
    1. Add your [Beehiiv publication ID](https://www.beehiiv.com/support/article/13091918395799-how-to-access-your-publication-id-or-api-keys)
    2. If you know the subscriber's first and last name and want to send it to Beehiiv, [configure the custom field names for first and last name](https://www.beehiiv.com/support/article/7712894720023-using-custom-fields-with-your-subscribers)
    3. Add one or more email addresses to which to send alert notifications in the event of a problem (separated by commas).
3. If you have not already done so :
    1. Connect your Beehiiv account in the **“Create New Beehiiv Subscriber”** node
    2. Connect your Gmail account in the **“Send Email Alert (Beehiiv API error)”** node

## How It Works

1. As soon as a new opt-in is registered on your sales funnel, Systeme.io triggers the workflow (via a webhook)
    1. Only requests actually coming from Systeme.io are considered (whitelisting of their IP addresses for security reasons)
2. A new subscriber is added to your Beehiiv publication (via an API call)
    1. If available in Systeme.io, UTM tags (utm_source, utm_medium and utm_campaign) are transferred to Beehiiv to correctly track where your subscribers are coming from
3. If an error occurs during the Beehiiv API call, an alert notification is sent to you (via email)

## Requirements

1. A [Systeme.io](https://systeme.io/) account
2. A [Beehiiv](https://www.beehiiv.com/) account with an active publication
3. A Gmail account

## Benefits

- Automate & scale your email marketing efforts seamlessly
- No more manual tasks to keep your subscriber list always up-to-date
- Focus on creating a newsletter that stands out, not on the technical side

## Check Out My Other Templates

👉 https://n8n.io/creators/belmehel/

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
