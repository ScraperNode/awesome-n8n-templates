# 💬 Triage client intake and send tailored advisory emails with Groq and Gmail

> ⚡ **8 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives client intake submissions via a webhook, sends a tailored confirmation email through Gmail, generates a personalized advisory reply using Groq’s OpenAI-compatible Chat Completions API, and emails both the client response and an internal notification to Cyrus with urgency-based routing.

## How it works
1. Receives an intake form submission via a POST webhook and immediately returns a JSON acknowledgement to the form.
2. Sends a service-specific HTML confirmation email to the client using Gmail based on the selected offering.
3. Sends the intake details (story, urgency, goals, and context) to Groq’s Chat Completions API to generate a personalized written response.
4. Checks the submitted urgency score and classifies the intake as urgent when the score is 7 or higher.
5. Emails Cyrus a formatted intake summary via Gmail, using an URGENT alert version for high-urgency submissions and a standard version otherwise.
6. Emails the AI-generated personal response to the client via Gmail.

## Setup
1. Create and connect a Gmail OAuth2 credential for sending emails, and update the internal notification recipient address if needed.
2. Add a Groq API key and store it securely, then replace the hardcoded Authorization bearer token in the Groq HTTP request.
3. Publish the webhook and copy the production URL to your intake form or frontend so submissions POST to /intake-form.
4. Ensure your form sends the expected fields (at minimum email, name, service, urgency, area, and story) so the email templates and urgency routing work correctly.

## 🔗 Nodes Used

Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
