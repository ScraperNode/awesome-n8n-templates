# 💬 Send a Whatsapp message via Twilio when a certain Onfleet event happens

> ⚡ **2,826 views** · 💬 [Support Chatbots](../)

## Description

**Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template listens to an Onfleet event and communicates via a **Whatsapp** message. You can easily streamline this with the recipient of the delivery or your customer support numbers.

**Configurations**

- Update the Onfleet trigger node with your own Onfleet credentials, to register for an **Onfleet API key**, please visit https://onfleet.com/signup to get started
- You can easily change which Onfleet event to listen to. Learn more about Onfleet webhooks with [Onfleet Support](https://support.onfleet.com/hc/en-us/articles/360045763852-Webhooks)
- Update the Twilio node with your own Twilio credentials, add your own expressions to the `to` number or simply source the **recipient's phone number** from the Onfleet event
- Toggle `To Whatsapp` to `OFF` if you want to simply use Twilio's SMS API

## 🔗 Nodes Used

Twilio, Onfleet Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
