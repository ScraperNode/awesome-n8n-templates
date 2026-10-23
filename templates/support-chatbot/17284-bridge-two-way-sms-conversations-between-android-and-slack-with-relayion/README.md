# 💬 Bridge two-way SMS conversations between Android and Slack with Relayion

> ⚡ **5 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow uses Relayion and Slack to mirror inbound SMS messages into a Slack channel and let teammates reply in a Slack thread to send an SMS back to the original sender, adding a ✅ or ❌ reaction to confirm whether the outgoing text was sent.

## How it works
1. Triggers when Relayion receives an inbound SMS message.
2. Formats the SMS content and sender phone number into a Slack message and posts it to a configured Slack channel.
3. Triggers when a new message is posted in the configured Slack channel.
4. Verifies the Slack message is a threaded reply from a human (not a new top-level post and not a bot message).
5. Fetches the thread root message from Slack, extracts the original sender phone number, and uses the threaded reply text as the outbound SMS body.
6. Sends the SMS reply via Relayion and reacts to the Slack reply with a ✅ on success or ❌ if the send returns an error.

## Setup
1. Create and connect a Relayion account with a paired Android device, and enable "Include Body" on the Relayion inbound webhook so SMS text is included.
2. Create a Slack app/bot, add Slack OAuth credentials in n8n including the Signing Secret (Slack app → Basic Information → App Credentials), and grant the bot permissions to read the target channel and write messages and reactions.
3. Invite the bot to your target Slack channel (/invite @YourAppName), or Slack API calls will fail with channel_not_found.
4. Replace REPLACE_WITH_SLACK_CHANNEL_ID in both the Set Slack Channel ID step (used for posting inbound SMS) and the Slack trigger's Channel field (used for capturing replies).
5. Activate the workflow, then copy the Slack trigger's Production webhook URL (not the Test URL) and paste it into your Slack app's Event Subscriptions Request URL field.

## Requirements
- A Relayion account with at least one paired Android device. A Slack workspace where you can create and install an app.

## Customization
- Edit the message format in Prepare Slack Message Text, or swap the reactions used in Post Success Reaction / Post Failure Reaction.

## Additional info
This workflow uses Relayion (relayion.com) to connect an Android device as the SMS gateway. You'll need a Relayion account with at least one paired device before setting this up. Relayion ships natively in n8n's two most recent releases; on older versions, install the community node n8n-nodes-relayion from the Community Hub instead (self-hosted n8n only, not available on n8n Cloud).

## 🔗 Nodes Used

HTTP Request, Slack, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
