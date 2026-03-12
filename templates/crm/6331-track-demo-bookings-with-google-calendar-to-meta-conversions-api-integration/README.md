# 🤝 Track demo bookings with Google Calendar to Meta Conversions API integration

> ⚡ **143 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who is this workflow for?
**If you're using Meta Ads to generate new leads** to your sales pipeline, this workflow is for you! 🙌🏻

## What this workflow does
- Triggers every time you have a new calendar event on a chosen Google Acount
- Filter only events with the same name of your "Schedule a demo" event
- Formats and send event to Meta Conversion API

## What events can I send?
Any event you'd like! It's preconfigured with the "Schedule" event, but you can change to "Purchase", "InitiateCheckout", "Lead" and custom events.


## Setup Guide
- Connect Google OAuth2 to n8n
- Get your PIXEL ID and Access Token from Meta
- Set your configuration node with Pixel ID, Access Token, source_url and event_name


## Requirements
- Meta Access Token + Pixel ID (via Meta Conversion API): [Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/get-started)
- Google Access (via OAuth2): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)
 

**This free template was created by [pdf noodle](https://pdfnoodle.com).**

Feel free to [contact us via the founder Linkedin](https://www.linkedin.com/in/marceloamiranda/), if you have any questions! 👋🏻

## 🔗 Nodes Used

HTTP Request, Google Calendar Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
