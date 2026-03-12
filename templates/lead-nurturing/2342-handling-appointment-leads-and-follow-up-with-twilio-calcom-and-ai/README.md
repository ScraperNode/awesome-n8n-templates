# 💬 Handling appointment leads and follow-up with Twilio, Cal.com and AI

> ⚡ **28,321 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This n8n workflow builds an appointment scheduling AI agent which can
* Take enquiries from prospective customers and help them book an appointment by checking appointment availability
* Where no appointment is booked, the Agent is able to send follow-up messages to re-engage leads.
* After an appointment is booked, the agent is able reschedule or even cancel the booking for the user without human intervention.

For small outfits, this workflow could contribute the necessary "man-power" required to increase business sales.

The sample Airtable can be found here: https://airtable.com/appO2nHiT9XPuGrjN/shroSFT2yjf87XAox

**2024-10-22** Updated to Cal.com API v2.

## How it works

* The customer sends an enquiry via SMS to trigger our workflow. For this trigger, we'll use a Twilio webhook.
* The prospective or existing customer's number is logged in an Airtable Base which we'll be using to track all our enquries.
* Next, the message is sent to our AI Agent who can reply to the user and decide if an appointment booking can be made. The reply is made via SMS using Twilio.
* A scheduled trigger which runs every day, checks our chat logs for a list of prospective customers who have yet to book an appointment but still show interest.
* This list is sent to our AI Agent to formulate a personalised follow-up message to each lead and ask them if they want to continue with the booking.
* The follow-up interaction is logged so as to not to send too many messages to the customer.

## Requirements
* A Twilio account to receive customer messages.
* An Airtable account and Base to use as our datastore for enquiries.
* Cal.com account to use as our scheduling service.
* OpenAI account for our AI model.

## Customising this workflow

Not using Airtable? Swap this out for your CRM of choice such as hubspot or your own service.

Not using Cal.com? Swap this out for API-enabled services such as Acuity Scheduling or your own service.

## 🔗 Nodes Used

Airtable, Twilio, Schedule Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
