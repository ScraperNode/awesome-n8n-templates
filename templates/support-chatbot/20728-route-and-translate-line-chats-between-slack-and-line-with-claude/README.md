# 💬 Route and translate LINE chats between Slack and LINE with Claude

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow routes LINE customer messages into Slack for Japanese-speaking staff, using Anthropic Claude to detect language and translate messages to Japanese, then translating staff replies back to the customer’s language with number/URL guards and a blind back-translation before sending via the LINE Messaging API.

## How it works
1. Receives LINE webhook events, verifies the LINE signature, deduplicates redelivered events, and keeps only text messages.
2. Uses Anthropic Claude to detect the customer’s language, translate the message into Japanese, and generate an acknowledgment in the customer’s language.
3. Sends the acknowledgment reply via the LINE Messaging API and posts the original text plus Japanese translation into an existing Slack thread or creates a new Slack thread for the customer, then stores/updates the thread and language in an n8n Data Table.
4. Triggers on Slack messages and only processes human staff replies posted inside an existing customer thread (excluding bot posts and messages prefixed with //).
5. Looks up the matching customer record by Slack thread timestamp, prepares the Japanese reply text, and if needed uses Anthropic Claude to translate it to the customer’s language.
6. Validates that numbers, URLs, and emails from the Japanese reply appear in the translation, posts a Slack warning and stops if validation fails, otherwise blind back-translates the sent text to Japanese for review.
7. Sends the final text to the customer via the LINE Messaging API push endpoint, adds a ✅ reaction to the Slack reply, updates the Data Table status to replied, and posts the translation plus back-translation (or any send failure) back into the Slack thread.

## Setup
1. Create an n8n Data Table (for example `line_slack_threads`) with string columns `line_user_id`, `slack_ts`, `status`, `last_inquiry`, `language`, and `language_name`, and select it in all Data Table nodes.
2. Add credentials for Slack (to use the Slack Trigger and post messages/reactions), Anthropic (Claude), LINE Messaging API header auth (`Authorization: Bearer <channel access token>`), and the LINE channel secret for the signature HMAC step.
3. Select the target Slack channel in every Slack node (including the Slack Trigger) and set your preferred tone/glossary terms in the translation settings.
4. Publish the workflow, then configure the LINE webhook URL to point to the webhook trigger path and enable Slack Events so Slack can call the Slack Trigger for new thread replies.

## Requirements
- LINE Official Account with the Messaging API (channel access token and channel secret)
- Slack workspace and a Slack app with the bot scopes chat:write, channels:read, channels:history and reactions:write
- Anthropic API key
- n8n reachable over HTTPS, for the LINE and Slack webhooks
- One Data Table: line_slack_threads (columns are listed in the sticky note)

## Customization
- Put your shop terms in the glossary of Translation settings (Japanese term = translation per language code)
- Edit the acknowledgment texts and low_confidence in Config
- Change the tone in Translation settings, or the rules in the two translation prompts
- Use another staff language by changing the translation prompts and the number guard's wording
- Add a step that holds the translation for approval before it is sent

## Additional info
Translation can still be wrong. The number guard checks digits, URLs and emails only: it does not read kanji numerals such as 三千円, and a translation that rewrites 15:00 as 3 PM is stopped on purpose. The back-check is read by a person, not by the workflow. I could read English and Japanese only, so Chinese and Korean were checked through the back-translation, not by a native reader.

The back-translation is a separate Claude call that never sees the Japanese. In my test of 84 translations (21 Japanese sentences into four languages), the back-translation written in the same call equalled the Japanese original in 36 cases (43%), but only 3 (4%) when done blind. The number guard stopped none of the good translations, and stopped the one I broke on purpose. That is a small test; try your own wording.

If the customer's language is unknown, staff replies are sent as written (Japanese), and the acknowledgment goes out in Japanese and English. Customer messages are sent to Anthropic for translation. Text messages only; images and stickers are ignored.

Costs to know: push messages count against your monthly LINE quota (200 on the free plan); Slack also triggers the workflow for the bot's own posts, so one customer message used several executions in testing.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Filter, Slack Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
