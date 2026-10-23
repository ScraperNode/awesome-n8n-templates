# 📱 Send localized 9am RSS coffee newsletters with rrule.net and Brevo

> ⚡ **16 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
Fetch an RSS feed, build a localized morning digest, and send it with Brevo at 09:00 local time in Paris, New York, Tokyo, and Perth from one target-aware rrule.net schedule.

## How it works
1. One rrule.net Schedule Trigger emits an execution at 09:00 in each configured target timezone.
2. The manual preview branch injects a sample Paris execution without creating or changing the remote schedule.
3. The workflow matches target_id to its locale, timezone, sender, recipient, and localized copy.
4. It reads the configured RSS feed and keeps the requested number of usable articles.
5. It creates a responsive localized HTML email and sends it through Brevo.
6. It returns the message ID, execution ID, scheduled time, target, recipient, and article count.

## Setup
1. Install @rrulenet/n8n-nodes-rrulenet version 0.1.4 or later.
2. Create a rrule.net API key and add it as an rrule.net API credential in n8n.
3. Add a Brevo API credential and configure a verified sender in Brevo.
4. In Configure regional audiences, replace the example sender and recipient addresses.
5. Optionally change the RSS feed URL, article limit, localized copy, and regional audience settings.
6. Run When clicking 'Execute workflow' and check the rendered Paris email and its links.
7. Activate the workflow only after the preview succeeds.

## Requirements
- n8n with the verified rrule.net community node
- An rrule.net account and API key
- A Brevo account, API credential, and verified sender
- A suitable RSS feed

## Customization
- Add or replace regional targets and localized copy
- Use a company blog, curated feed, or internal RSS source
- Replace Brevo with another n8n-supported email provider
- Add Slack or another channel for delivery reports
- Implement the consent, unsubscribe, and list-management behavior required for public marketing email

## Additional info
One target-aware rrule.net schedule replaces four separate fixed-UTC jobs and preserves 09:00 wall-clock delivery through DST changes. The manual preview sends a real email after credentials and real addresses are configured.

## 🔗 Nodes Used

RSS Read, Brevo

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
