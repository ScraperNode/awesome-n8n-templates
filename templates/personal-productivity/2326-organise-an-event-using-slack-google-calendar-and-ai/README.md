# ⚡ Organise an Event using Slack, Google Calendar and AI

> ⚡ **8,010 views** · ⚡ [Personal Productivity](../)

## Description

This n8n workflow takes Slack conversations and turns them into Calendar events complete with accurate date and times and location information. Adding and removing attendees are also managed automatically.

## How it works

* Workflow monitors a Slack channel for invite messages with a "📅" reaction and sends this to the AI agent.
* AI agent parses the message determining the time, date and location.
* Using its Location tool, the AI agent searches for the precise location address from Google Maps.
* Using its Calendar tool, the AI agent creates a Google Calendar invite with the title, description and location address for the user.
* Back in the Slack channel, others can RSVP to the invite by reacting with the "✅" emjoi.
* The workflow polls the message after a while and adds the users who have reacted to the Calendar Invite as attendees. Conversely, removing any attendees who have since removed their reaction.

## Examples

**Jill**: "Hey team, I'm organising a round of Laser Tag (Bunker 51) next Thursday around 6pm. Please RSVP with a ✅"

**AI**: "I've helped you create an event in your calendar https://cal.google.com/..."

**Jack**: "✅"

**AI**: "I've added Jack to the event as an attendee".

## Requirements
* Slack channel to attach the workflow
* OpenAI account to use a GPT model
* Google Calendar to create and update events

## Customising the Workflow

This workflow can work with other messaging platforms that support reactions or tagging like features such as discord. Don't use Google Calendar? Swap it out for Outlook or your own.

Use any combinations of emjoi reactions and add new rules like "RSVP maybe" which could send reminder updates nearer the event date.

## 🔗 Nodes Used

Slack, Google Calendar, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
