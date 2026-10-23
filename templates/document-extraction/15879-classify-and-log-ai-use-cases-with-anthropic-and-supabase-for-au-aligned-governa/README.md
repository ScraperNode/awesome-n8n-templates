# 🔬 Classify and log AI use cases with Anthropic and Supabase for AU-aligned governance

> ⚡ **59 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Turn AI policy into a working governance process aligned to Australian Government AI.gov.au guidance.

This workflow helps teams submit, review, classify, and track AI use cases before they become business risk. It validates each request, screens risk with an AI model, classifies the use case as normal, elevated, or prohibited, creates a human oversight checklist, logs the record in Supabase, and sends email notifications.

## Key features

- AI use-case intake
- Required-field validation
- AI-powered risk screening
- Normal / elevated / prohibited classification
- Human oversight checklist
- Supabase AI register logging
- Evidence trail for audit and review
- Email notifications
- Incident logging path
- Review reminder support

## Benefits

- Turns AI policy into a practical workflow
- Helps teams track which AI systems are being used
- Reduces manual AI governance admin
- Creates clearer ownership and accountability
- Supports human oversight before AI systems are relied on
- Improves audit readiness with register and evidence logging
- Gives SMEs a simple starting point for responsible AI governance

## Who it is for

- SMEs adopting AI tools
- GRC and compliance teams
- AI governance leads
- Consultants
- Operations teams

## How it works

1. A user submits an AI use case through a webhook
2. The workflow validates the required fields
3. An AI model screens the risk
4. The use case is classified as normal, elevated, or prohibited
5. A human oversight checklist is generated
6. The record is saved in Supabase
7. An email notification is sent to the requester and owner

## Setup

You need:

- Supabase
- An AI model credential, such as Anthropic or another compatible model
- SMTP or email credentials
- A webhook URL from your n8n instance

Create a Supabase table called `ai_register`, connect your credentials, replace placeholder values, then test with a sample AI use case.

## Notes

This workflow does not replace legal, compliance, security, or regulatory advice. Human review is required before acting on AI governance outcomes.

This workflow is inspired by and aligned to the Australian Government AI.gov.au AI Policy Guide and Template. CYBERPULSE AI is not affiliated with or endorsed by the Australian Government. Users should verify the latest official guidance directly from AI.gov.au.

## Support

For setup help, customization, or implementation support, contact CYBERPULSE AI:

info@cyberpulsesolutions.com

## Official Australian Government guidance

This workflow is inspired by and aligned to the Australian Government AI.gov.au AI Policy Guide and Template.

For the latest official guidance, visit:

https://www.ai.gov.au

CYBERPULSE AI is not affiliated with or endorsed by the Australian Government.

## 🔗 Nodes Used

Send Email, Function, Webhook, Supabase, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
