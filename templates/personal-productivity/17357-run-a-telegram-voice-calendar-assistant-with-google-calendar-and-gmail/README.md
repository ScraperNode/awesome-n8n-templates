# ⚡ Run a Telegram voice calendar assistant with Google Calendar and Gmail

> ⚡ **131 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
Send a text or voice message to a Telegram bot and it books, reschedules, or cancels Google Calendar events for you. It resolves attendee names to email addresses, attaches a Meet link, and drafts a Gmail confirmation for external guests.

## How it works
1. A Telegram trigger receives every incoming message and an If node checks whether it carries a voice file.
2. Voice notes are downloaded and transcribed with Whisper. Text messages skip that path. Both converge on the same field, so the agent always sees one shape of input.
3. The orchestrator agent reads the request and resolves any attendee mentioned by name into an email address using the Google Workspace directory before delegating anything.
4. Calendar work goes to a sub-agent owning four tools: create, update, look up, and delete. Multiple attendees are added by creating with the first, then updating once per remaining attendee.
5. Deletes are never executed blind. The event is looked up, handed back for your confirmation, and only then removed.
6. If an event includes an attendee outside your domain, a Gmail sub-agent drafts a confirmation. It only drafts, it never sends.

## Setup
1. Create a Telegram bot with BotFather and attach its credential to the trigger, the voice download node, and the send node.
2. Attach a Google Calendar OAuth2 credential to the four calendar tool nodes. The calendar is set to primary, so it resolves to whichever account you connect and needs no editing.
3. Attach a Gmail OAuth2 credential to both Gmail tool nodes, and a Google Workspace Admin credential to Get Contacts. Skip that node if you are on a personal Gmail account.
4. Attach an OpenRouter credential to both model nodes and an OpenAI credential to the transcription node.
5. Open both agent system messages and replace yourcompany.com with your own email domain. This decides who counts as an external attendee.
6. In the same system messages, change Asia/Ho_Chi_Minh and the +07:00 offset to your own timezone.

## Requirements
- Telegram bot token
- Google Calendar and Gmail OAuth2 credentials
- Google Workspace Admin credential, only needed for resolving attendee names to emails
- OpenAI API key for voice transcription
- OpenRouter API key, or swap both model nodes for any other provider

## Customization
- Swap either model node. The orchestrator does the harder reasoning, the sub-agents run fine on a cheaper model.
- Remove the Gmail sub-agent entirely if you do not want confirmation drafts.
- Change the Gmail sub-agent from drafting to sending directly, if you are comfortable with that.
- Replace the Telegram trigger and send node with Slack, WhatsApp, or a chat trigger, leaving everything else unchanged.
- Adjust the memory window on either memory node if conversations need longer context.

## Additional info
Deleting an event always takes two turns. The calendar sub-agent looks the event up and reports its title and time back, the orchestrator asks you to confirm, and only a confirmed request naming the event ID triggers the delete.

The Gmail sub-agent never sends. Nothing leaves your mailbox unless you open the draft and send it yourself.

Get Contacts requires an admin account on a Google Workspace domain. On a personal Gmail account that node will fail, so either remove it and pass email addresses directly, or replace it with a Google Contacts node.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, OpenAI, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
