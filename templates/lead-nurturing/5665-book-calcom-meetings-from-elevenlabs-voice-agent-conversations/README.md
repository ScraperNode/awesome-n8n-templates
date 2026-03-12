# 💬 Book Cal.com meetings from ElevenLabs voice agent conversations

> ⚡ **888 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This is a specific use case. The [ElevenLabs guide for Cal.com bookings](https://elevenlabs.io/docs/conversational-ai/guides/integrations/cal-com) is comprehensive but I was having trouble with the booking API request. So I built a simple workflow to validate the request and handle the booking creation.

## Who's this for?
You have an ElevenLabs voice agent (or other external service) booking meetings in your Cal.com account and you want more control over the `book_meeting` tool called by the voice agent.

## How's it work?
* Request is received by the webhook trigger node
* Request sent from ElevenLabs voice agent, or other source
* Request body contains contact info for the user with whom a meeting will be booked in Cal.com
* Workflow validates input data for required fields in Cal.com
* If validation fails, a 400 bad request response is returned
* If valid, meeting is booked in Cal.com api

## How do I use this?
Create a `custom tool` in the ElevenLabs agent setup, and connect it to the webhook trigger in this workflow. Add authorization for security.
![image.png](fileId:1666)
Instruct your voice agent to call this tool **after** it has collected the required information from the user.

## Expected input structure
*Note: Modify this according to your needs, but be sure to reflect your changes in all following nodes. Requirements here depend on required fields in your Cal.com `event type`. If you have multiple `event types` in Cal.com with varying required fields, you'll need to handle this in this workflow, and provide appropriate instructions in your **voice agent prompt**.*
```
"body": {
  "attendee_name": "Some Guy",
  "start": "2025-07-07T13:30:00Z",
  "attendee_phone": "+12125551234",
  "attendee_timezone": "America/New_York",
  "eventTypeId": 123456,
  "attendee_email": "someguy@example.com",
  "attendee_company": "Example Inc",
  "notes": "Discovery call to find synergies."
}
```

## Modifications
*Note: ElevenLabs doesn't handle webhook response headers or body, and only recognizes the response code. In other words, if the workflow responds with `400 Bad request` that's the only info the voice agent gets back; it doesn't get back any details, eg. "User email still needed".*

You can modify the structure of the expected webhook request body, and then you should reflect that structure change in all following nodes in the workflow. Ie. if you change `attendee_name` to `attendeeFirstName` and `attendeeLastName` then you need to make this change in the following nodes that use these properties. You can also require or make optional other user data for the Cal.com `event type` which would reduce or increase the data the voice agent must collect from the user.

You can modify the authorization of this webhook to meet your security needs. ElevenLabs has some limitations and you should be mindful of those, but it also offers a `secret` feature with proves useful.

An improvement to this workflow could include a GET request to a CRM or other db to get info on the user interacting with the voice agent. This could reduce some of the data collection needed from the voice agent, like if you already have the user's email address, for example. I believe you can also get the user's phone number if the voice agent is set up on a dial-in interface, so then the agent wouldn't need to ask for it. This all depends on your use case.

A savvy step might be prompting the voice agent to get an email, and using the email in this workflow to pull enrichment data from Apollo.io or similar ;-)

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
