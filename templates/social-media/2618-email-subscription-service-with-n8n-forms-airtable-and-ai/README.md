# 📱 Email subscription service with n8n forms, Airtable and AI

> ⚡ **3,247 views** · 📱 [Social Media & Email Marketing](../)

## Description

This n8n template shows how anyone can build a simple newsletter-like subscription service where users can enrol themselves to receive messages/content on a regular basis. It uses n8n forms for data capture, Airtable for database, AI for content generation and Gmail for email sending.

### How it works
* An n8n form is setup up to allow users to subscribe with a desired topic and interval of which to recieve messages via n8n forms which is then added to the Airtable.
* A scheduled trigger is executed every morning and searches for subscribers to send messages for based on their desired intervals.
* Once found, Subscribers are sent to a subworkflow which performs the text content generation via an AI agent and also uses a vision model to generate an image.
* Both are attached to an email which is sent to the subscriber. This email also includes an unsubscribe link.
* The unsubscribe flow works similarly via n8n form interface which when submitted disables further scheduled emails to the user.

## How to use
* Make a copy of sample Airtable here: [https://airtable.com/appL3dptT6ZTSzY9v/shrLukHafy5bwDRfD](https://airtable.com/appL3dptT6ZTSzY9v/shrLukHafy5bwDRfD)
* Make sure the workflow is "activated" and the forms are available and reachable by your audience.

## Requirements
* Airtable for Database
* OpenAI for LLM (but compatible with others)
* Gmail for Email (but can be replaced with others)

## Customising this workflow
* This simple use can be extended to deliver any types of content such as your company newsletter, promotions, social media posts etc.
* Doesn't have to be limited to just email - try social messaging, Whatsapp, Telegram and others.

## 🔗 Nodes Used

Airtable, Edit Image, Execute Sub-workflow, Gmail, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
