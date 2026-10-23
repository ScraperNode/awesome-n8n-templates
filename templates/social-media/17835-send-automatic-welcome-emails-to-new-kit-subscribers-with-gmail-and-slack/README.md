# 📱 Send automatic welcome emails to new Kit subscribers with Gmail and Slack

> ⚡ **19 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
Kit only automates welcome emails on paid plans. This workflow sends one within seconds of every confirmed subscriber, from your own Gmail or SMTP, then optionally tags them in Kit and pings Slack. Works on the free plan.

## How it works
1. Kit calls this workflow's webhook the moment a subscriber confirms their subscription — the subscriber.subscriber_activate event.
2. A Code node pulls the subscriber's email and first name out of Kit's payload, and fails loudly if the request didn't come from Kit.
3. Gmail sends your welcome email, personalised with their first name, from your own mailbox — so it lands in the inbox and replies reach you.
4. The subscriber is tagged "welcomed" through Kit's v4 API, so you can segment on it later.
5. A Slack message tells you the list just grew.
6. A separate manual branch registers the webhook with Kit once, so you never touch curl or Kit's API console.

## Setup
1. Open Kit Subscriber Trigger and replace CHANGE-ME in the webhook path with a long random string. Kit does not sign its webhooks, so the secret URL is the authentication — keep it private.
2. Connect your Gmail account in Send Gmail Welcome Email and rewrite the subject and body in your own voice. The subscriber's details are available as {{ $json.first_name }} and {{ $json.email }}.
3. Create a Header Auth credential named X-Kit-Api-Key holding your Kit API key (Kit → Settings → Developer) and select it in Post Subscriber Tag to Kit and Register Kit Webhook via API. Put your tag's ID in the tagging node's URL — find it under Kit → Grow → Tags.
4. Paste a Slack incoming webhook URL into Post New Subscriber to Slack, or delete that node if you don't want the ping.
5. Activate the workflow, then execute the Register Kit Webhook via API branch once. Activation must come first, because it registers the production URL. Test by subscribing with a spare address and confirming.

## Requirements
- A Kit (ConvertKit) account on any plan, including free — with an API key from Kit → Settings → Developer.
- A Gmail account connected to n8n, or any SMTP server if you self-host.
- A Slack incoming webhook URL, if you want the notification — otherwise delete that node.
- The workflow must be activated before you run the registration branch, because it registers the production webhook URL.

## Customization
- Self-hosting n8n? Swap the Gmail node for the Send Email (SMTP) node — any provider works, including your own domain's SMTP or a Brevo/Mailjet free tier.
- Only want the email? Delete Post Subscriber Tag to Kit and Post New Subscriber to Slack; the main path keeps working on its own.
- Want a multi-email sequence? Duplicate the email node and put Wait nodes between the copies (day 2, day 5, …) for a free-plan onboarding drip.
- Using beehiiv, Mailchimp or Buttondown instead? Point their subscriber-created webhook at the same URL and adjust the field names in Parse Subscriber Data.
- Edit the welcome copy, the tag ID and the Slack message text to match your newsletter's voice.

## Additional info
Kit does not sign its webhooks, so this template uses a secret-URL pattern — the webhook path holds a long random string you choose, and anyone who learns that URL could trigger fake welcomes. Keep it private and rotate it if it leaks.

The registration branch means you never have to touch curl or Kit's API console: activate the workflow, click Execute workflow once, and Kit calls your production URL for every new confirmed subscriber from then on.

The parser fails loudly with the offending payload if a request arrives without a subscriber object, so a misconfigured webhook shows up as a clear error rather than a silently skipped email.

That's all seven fields. Reminder on the one that isn't a paste: overwrite the auto-generated Title with

Send automatic welcome emails to new newsletter subscribers (works on Kit's free plan)

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
