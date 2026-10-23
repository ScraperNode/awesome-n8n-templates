# 💬 Run an AI hospital triage and booking chatbot with Mistral and Supabase

> ⚡ **84 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow powers an AI hospital chatbot using Mistral AI and Supabase to answer medical questions from a knowledge base, manage patients, doctors, and appointments, triage urgent messages with email escalation, and run daily automations for no-show risk scoring and appointment reminders.

## How it works
1. Receives a POST webhook request containing a patient chat message.
2. Uses Mistral AI to triage the message into severity and emotion, then logs severe or panicked cases to Supabase and emails staff via Gmail.
3. Uses a Mistral AI agent with conversation memory to interpret the request and either answer normally or call Supabase tools to register patients, list doctors, and view, book, or cancel appointments.
4. For medical questions, searches the Supabase medical_knowledge table and replies using the retrieved content.
5. Returns the final plain-text response to the calling chatbot via the webhook response.
6. Runs daily on a schedule to score no-show risk from Supabase appointment history and writes high-risk flags to the Supabase risk_alerts table.
7. Runs daily on a schedule to find appointments in the next three hours from Supabase and sends reminder emails to patients via Gmail.

## Setup
1. Add Supabase credentials and ensure tables exist for patients, doctors, appointments, medical_knowledge, emergency_alerts, and risk_alerts with the fields referenced in the workflow.
2. Add Mistral Cloud credentials for the chat agents and configure HTTP Header Auth for the Mistral embeddings API request.
3. Add Gmail OAuth2 credentials, set the staff escalation email address, and ensure patient email addresses are available for appointment reminders.
4. Copy the webhook URL for the /ai-chat endpoint and configure your chatbot or frontend to POST a JSON body with a message field.
5. Populate the Supabase doctors and medical_knowledge records (including title/content) and adjust the daily schedule trigger hour and reminder window logic if needed.

## Additional info
Need Help or Customization?

Digital Biz Tech can help tailor this workflow to your business.

We offer free setup support, including credential configuration and deployment.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)

Developer: SUPRIYA S
LinkedIn: [https://www.linkedin.com/in/supriya-s-74228a2a5](https://www.linkedin.com/in/supriya-s-74228a2a5)

You can also DM us on LinkedIn for any help or customization.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Supabase, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
