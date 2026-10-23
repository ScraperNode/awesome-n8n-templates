# ⚡ Create Notion tasks from inbound SMS with Twilio and rule-based date parsing

> ⚡ **3 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow triggers on inbound Twilio SMS messages, parses simple due-date phrases using a deterministic rule table, and creates a task page in a Notion database with either a populated Due date or a Needs Review flag.

## How it works
1. Triggers when a new inbound SMS is received by your Twilio number.
2. Normalizes the message by trimming the SMS body, creating a lowercased copy for matching, and capturing the sender number and receive time.
3. Parses the SMS text against a fixed set of regex rules (for example, “tomorrow”, “next mon”, or “in 3 days”), converts the first match into an ISO due date using Luxon, and removes the matched phrase from the task title.
4. Checks whether a due date was successfully extracted from the message.
5. Creates a Notion database page with the parsed Due date and a Source note when a rule matches.
6. Creates a Notion database page marked Needs Review and stores the original SMS text in Source when no date phrase is found.

## Setup
1. Add your Twilio credentials and configure your Twilio phone number’s inbound messaging webhook to send POST requests to the Twilio Trigger production URL.
2. Add your Notion credentials and set the target Notion database ID in both Notion steps.
3. Ensure your Notion database has a title property, a date property named Due, a checkbox named Needs Review, and a rich text property named Source.
4. Set the TIMEZONE constant in the due-date parsing code to match your preferred timezone (it defaults to America/Halifax).

## Requirements
- A Twilio account (Account SID and Auth Token) with a phone number that can receive inbound SMS. Some countries require registering the number or sender before it can receive.
- A Notion account with an internal integration, and a database shared with that integration.
- An n8n instance reachable from the public internet (n8n Cloud, or self-hosted behind a public URL) so Twilio can reach the trigger webhook.

## Customization
- Extend the rule table with more phrases, such as weekday names, end of week, or explicit calendar dates.
- Route messages from different senders to different databases by branching on the From number.
- Add a keyword parser that reads a tag like !urgent and sets a Notion priority or select property.
- Swap Notion for another task store, such as a Google Sheet or Todoist, by replacing the two create nodes.

## Additional info
The due-date parser is a fixed rule table rather than a model, so the same wording always produces the same date and the rules are readable and testable in one Code node instead of a black box. Nothing is dropped: a message with no recognizable date still becomes a task, flagged Needs Review with the original text kept in the Source property, so you can fix it by hand later. Because it only receives messages and never sends one, it runs end to end on a Twilio trial, where custom outbound bodies are blocked but inbound is unrestricted.

## 🔗 Nodes Used

Notion, Twilio Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
