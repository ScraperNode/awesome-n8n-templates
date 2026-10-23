# 🔬 Create client onboarding packets with GPT-4.1-mini and Gmail drafts

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

How it works
- Receives client intake data via a POST webhook from any form tool (Typeform, Tally, your website, etc.)
- Normalises and validates all incoming fields into a clean structured object
- Sends the intake data to GPT-4.1-mini which generates a full onboarding packet — project brief, success metrics, kickoff checklist, first-week plan, and clarifying questions
- Parses the AI output and formats it into a Gmail-ready HTML email
- Saves a pre-written kickoff email as a Gmail draft addressed to your client, ready for your review
- Returns the complete packet as a JSON response to the webhook caller

Set up steps
- Connect your OpenAI credential to the OpenAI node (GPT-4.1-mini or higher recommended)
- Connect your Gmail OAuth2 credential to the Gmail node
- Activate the workflow and copy the generated webhook URL
- Point your intake form to the webhook URL using a POST request
- Map your form fields to: client_name, client_email, company, website, service, goal, target_audience, deadline, budget, notes, sender_name
- Submit a test entry to confirm the Gmail draft is created correctly

## 🔗 Nodes Used

Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
