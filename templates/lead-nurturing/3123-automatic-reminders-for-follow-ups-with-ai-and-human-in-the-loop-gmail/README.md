# 💬 Automatic reminders for follow-ups with AI and human in the loop Gmail

> ⚡ **14,861 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This n8n template extends the idea of follow-up reminders by having an AI agent suggest and book the next call or message to re-engage prospects which have been ignored.

What makes this template particularly interesting and actually usable is that it uses the Human-in-the-loop approach to wait for a user's approval before actually making the booking or otherwise not if the user declined.

A twist on a traditional idea where we can reduce the number of actionable tasks a human has to make by delegating them to AI.

## How it works
* A scheduled trigger checks your google calendar for sales meetings which happened a few days ago.
* For each event, gmail search is used to figure out if a follow-up message has been sent or received from the other party since the meeting. If none, it might mean the user needs a reminder to follow-up.
* For leads applicable for follow-up, we first get an AI Agent to find available meeting slots in the calendar.
* These slots and reminder are sent to the user via send-and-approval mode of the gmail node. The user replies in natural language either picking a slot, suggesting an entirely new slot or declines the request.
* When accepted, another AI Agent books the meeting in the calendar with the proposed dates and lead.
* When declined, no action is taken.

## How to use
* Update all calendar nodes (+subnodes) to point to the right calendar. If this is a shared-purpose calendar, you may need to either filter or create a new calendar.
* Update the gmail nodes to point to the right accounts.

## Requirements
* Google OAuth for Email and Calendar
* OpenAI for LLM

## Customising the template
* Not using Google? Swap out for Microsoft Outlook/Calendar or something else.
* Try swapping out or adding in additional send-for-approval methods such as telegram or whatsapp.

## 🔗 Nodes Used

Google Calendar, Gmail, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
