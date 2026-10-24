# 🎬 Send AI reminders for content and important days with Mistral, Supabase and Gmail

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs on schedules and via a webhook to send AI-generated email reminders for upcoming events and “important days” stored in Supabase, and to generate and store long-form content ideas using Mistral Cloud, delivering notifications through Gmail.

## How it works
1. Runs daily on a schedule, retrieves event records from Supabase, and filters to upcoming, non-low-priority events.
2. Calculates days remaining for each event and keeps only events occurring within the next 0–7 days.
3. Uses Mistral Cloud (via an AI Agent) to generate a concise reminder email subject and body for each due event.
4. Sends the reminder email through Gmail and logs the sent notification to a Supabase notifications table.
5. Runs daily on a second schedule, retrieves “important days” from Supabase, calculates the next occurrence date, and checks whether the day matches the configured “notify days before” value.
6. Prevents duplicate “important day” notifications by checking Supabase, generates a reminder email with Mistral Cloud, and sends it via Gmail.
7. Receives a POST webhook request with platform/topic/audience inputs, generates structured content JSON using Mistral Cloud, stores it in Supabase, and returns the JSON in the webhook response.

## Setup
1. Add Supabase credentials and ensure the tables exist with the required fields: events, important_days, notifications, and ai_generated_content.
2. Add a Gmail OAuth2 credential and set the recipient email address(es) in the Gmail send steps.
3. Add a Mistral Cloud API credential and keep it connected to the AI Agent steps used for email/content generation.
4. Update schedule times (and any “notify days before” values in important_days) to match your timezone and reminder policy.
5. If using webhook content generation, copy the webhook URL from n8n and configure your source app to POST the required fields (platform, topic, audience, tone, length) to /generate-ai.

## Additional info
Need Help or Customization?

Digital Biz Tech can help tailor this workflow to your business.

We offer free setup support, including credential configuration and deployment.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)

Developer: MANASA C
Email: [manasa8072@gmail.com](mailto:manasa8072@gmail.com)

You can also DM us on LinkedIn for any help or customization.

## 🔗 Nodes Used

Webhook, Gmail, Supabase, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
