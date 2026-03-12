# 🤖 Meeting management agent

> ⚡ **826 views** · 🤖 [AI Chatbots & Agents](../)

## Description

---

**Use cases are many:** Let users book, check, reschedule, or cancel meetings directly from Telegram. Perfect for solopreneurs, agencies, or teams who want an AI-powered assistant that prevents double-bookings, manages Google Calendar, and even sends email invites automatically.

---

**Good to know**
At time of writing, this workflow uses **OpenAI GPT-4.1-mini** for natural conversation handling. See [OpenAI Pricing](https://openai.com/pricing) for updated info.
This workflow relies on **Google Calendar** for scheduling — if the model says “conflict found,” it means an event already exists in that time slot.

---

**How it works**

* **Telegram Chat**: A user types natural requests like “Book a meeting with Sarah tomorrow at 2 PM” or “Do I have meetings on Friday?”.
* **AI Agent (OpenAI)**: Interprets the request, calculates dates (using Date & Time), and decides whether to create, update, or delete a meeting.
* **Conflict Checking**: Before booking, the agent checks Google Calendar for existing events to avoid overlaps.
* **Meeting Management**:

  * **Create**: Adds new events with title, description, attendees.
  * **Update**: Edits existing events.
  * **Delete**: Cancels meetings if requested.
  * **Get**: Lists all meetings for a date or time range.
* **Notifications**: Replies instantly on Telegram and, if needed, sends a Gmail email with meeting details.
* **Memory**: Keeps context of the conversation so users can speak naturally (“reschedule that meeting to 4 PM instead”).

---

**How to use**

* Start a Telegram chat with the bot.
* Type a request in plain English (no need for structured inputs).
* The agent will confirm or suggest alternatives if a conflict exists.
* Meetings appear in Google Calendar and details can be emailed via Gmail.

---

**Requirements**

* Telegram bot connected to n8n
* OpenAI API key (for AI-driven scheduling assistant)
* Google Calendar account (for event creation & conflict checking)
* Gmail account (for sending invites & confirmations)

---

**Customising this workflow**

* Add support for multiple calendars (work, personal, shared).
* Change the conflict-resolution logic (e.g., auto-suggest nearest free slot).
* Include recurring meetings (weekly standups, monthly reviews).
* Add Slack or WhatsApp integration for multi-platform scheduling.
* Extend Gmail invites with calendar attachments (.ics files).

---

👉 [Rakin Jakaria](https://www.youtube.com/@RakinJakaria)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
