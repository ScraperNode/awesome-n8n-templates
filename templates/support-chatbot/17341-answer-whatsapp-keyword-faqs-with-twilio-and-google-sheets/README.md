# 💬 Answer WhatsApp keyword FAQs with Twilio and Google Sheets

> ⚡ **6 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives inbound WhatsApp messages via Twilio, extracts a one-word keyword, looks up the matching answer in a Google Sheets FAQ tab, and replies on WhatsApp with either the stored answer or a help message listing supported keywords.

## How it works
1. Triggers when Twilio receives an inbound WhatsApp message.
2. Extracts the first word from the message body, normalizes it to an uppercase keyword, and captures the sender’s WhatsApp number.
3. Routes supported keywords (HOURS, PRICING, RETURNS) to an FAQ lookup and sends anything else to a fallback path.
4. Searches Google Sheets (FAQ sheet) for a row where the keyword column matches the inbound keyword.
5. Builds a reply using the sheet’s answer field, or builds a help reply listing valid keywords when the keyword is unknown.
6. Sends the reply back to the original sender via Twilio WhatsApp.

## Setup
1. Add your Twilio credentials and configure your Twilio WhatsApp Sandbox (or WhatsApp-enabled number) to send inbound messages to this workflow’s Twilio trigger.
2. Add Google Sheets OAuth credentials, select the target spreadsheet, and ensure it has an “FAQ” sheet with “keyword” and “answer” columns.
3. Set the Twilio WhatsApp “from” number in the send step to your Twilio WhatsApp sandbox/approved sender number.

## Requirements
- A Twilio account with WhatsApp enabled. The Sandbox is enough to test, production needs a WhatsApp-approved sender number.
- A Google account with access to the FAQ spreadsheet.
- An n8n instance reachable from the public internet, since Twilio delivers inbound messages to the trigger's URL.
- No AI model, no vector store, and no paid API beyond Twilio's per-message cost.

## Customization
- Add a keyword in two places: a new rule in Route The Keyword and a matching row in the FAQ tab. The sheet alone is not enough, because the Switch decides what counts as supported.
- Reword any answer by editing its cell. No workflow change and no redeploy.
- Match differently by editing Normalize Keyword And Sender, which takes the first word, strips punctuation, and uppercases it. Contains-matching is a one-node change.
- Hand unknown keywords to a person by replacing Build The Help Reply with a Slack or email notification.
- Support more than one language by adding a language column and filtering the lookup on it.

## Additional info
WhatsApp only allows freeform replies inside the 24 hour customer service window that opens when the customer messages you. This workflow always replies to an inbound message, so it stays inside that window by design, but it cannot be repurposed to start a conversation, since outbound-first messaging requires an approved WhatsApp template. On the Sandbox a session expires three days after joining and testers rejoin with the same code. Matching is deliberately exact: first word only, punctuation stripped and uppercased, so 'hours', 'Hours?' and 'HOURS' all resolve to the same row while what are your hours falls through to the help reply. That is the tradeoff for keeping a model out of the loop, and it means answers are reproducible and cost nothing per lookup. Anything the Switch does not recognise still gets the help message listing the supported keywords, so a customer never receives silence.

## 🔗 Nodes Used

Google Sheets, Twilio, Twilio Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
