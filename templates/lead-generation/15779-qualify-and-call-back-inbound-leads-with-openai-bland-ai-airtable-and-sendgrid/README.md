# 🎣 Qualify and call back inbound leads with OpenAI, Bland AI, Airtable and SendGrid

> ⚡ **76 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### Qualify and Call Back Inbound Leads with OpenAI, Bland AI, Airtable & SendGrid

This n8n template demonstrates how to capture inbound leads from a form, qualify them with OpenAI, and route the hottest ones to a Bland AI voice agent that calls them back, books a meeting on Google Calendar, and confirms by email, all without a human touching the lead.

Use cases are many: instant follow-up on paid-ad leads, voice qualification for high-ticket consulting inquiries, or replacing the "first response" SDR seat entirely!

Good to know

- Each Bland AI call is billed per minute. The default `max_duration` in this template is 5 minutes; see [Bland AI pricing](https://www.bland.ai/pricing) for the current rate.
- OpenAI calls for qualification cost fractions of a cent per lead, but volume adds up; set a budget alert on your OpenAI account if you're running paid traffic. You can also use Claude.
- Outbound calling is regulated. Make sure you have consent on your form and check the rules for your country (TCPA in the US, PECR in the UK, etc.) before going live.

How it works

1. We capture the lead via a webhook; your form, quiz, or landing page posts the payload (`name`, `email`, `phone`, `company`, plus any qualification fields you collect).
2. A code node normalises the payload, an IF node rejects anything missing required fields, and the lead is written to Airtable so you have a single source of truth.
3. OpenAI is then used to qualify the lead. We give it the cleaned payload and ask it to return one of three next actions: `nurture_email`, `priority_email`, or `ai_call`.
4. Low-intent leads get a SendGrid nurture email. Medium-intent leads get a priority email. High-intent leads continue down to the voice path.
5. For the voice path, we pull free slots from Google Calendar, format them into a natural-speech sentence ("I have Tuesday at 2 or Thursday at 10…"), and POST to Bland AI with the script, the lead's number, and a callback URL.
6. Bland AI calls the lead, runs the script, and posts the outcome back to the second webhook in this same workflow.
7. If a slot was booked, we create the Google Calendar event, update the Airtable record, and send a SendGrid confirmation. If the call failed (no answer, declined, error), we update Airtable and send a priority follow-up email so a human can step in.

How to use

- The webhook trigger is set up for a typical form payload, but feel free to swap it for a Typeform/Tally trigger, a Calendly cancellation, or any inbound source.
- Tune the prompt inside the **AI Lead Qualification** node to match your ICP; the routing logic only cares that the model returns one of the three action strings.
- Edit the voice script inside the **Trigger AI Phone Call** body to match your company name, agent name, and offer before going live.
- The Bland AI `webhook` field inside the request body must point to the production URL of the **Call Outcome Webhook** node in this same workflow so Bland can post back.

Requirements

- OpenAI account for lead qualification
- Bland AI account for the outbound voice agent
- Airtable base with a `Leads` table
- SendGrid account for emails
- Google Calendar for availability and event creation

Customising this workflow

AI voice follow-up works for plenty of inbound flows beyond sales calls. Try it for booking demos, recovering abandoned checkout carts with a quick "is everything okay?" call, or as a re-engagement layer on stale leads in your CRM.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Google Calendar, SendGrid, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
