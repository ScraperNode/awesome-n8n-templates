# 💬 Build an AI-powered SMS support system with Twilio, GPT-4 and PostgreSQL

> ⚡ **186 views** · 💬 [Support Chatbots](../)

## Description

## How it works

1. **User Signup & Verification:**  
   The workflow starts when a user signs up. It generates a verification code and sends it via SMS using Twilio.

2. **Code Validation:**  
   The user replies with the code. The workflow checks the code and, if valid, creates a session for the user.

3. **Conversational AI:**  
   Incoming SMS messages are analyzed by Chat GPT AI for sentiment, intent, and urgency. The workflow stores the conversation context and generates smart, AI-powered replies.

4. **Escalation Handling:**  
   If the AI detects urgency or frustration, the workflow escalates the session—alerting your team and sending a supportive SMS to the user.

---

## Set up steps

- **Estimated setup time:** 10–20 minutes for most users.
- **What you’ll need:**  
  - A free n8n account (self-hosted or cloud)
  - Free Twilio account (for SMS)
  - OpenAI API key (for AI)
  - A PostgreSQL database (Supabase, Neon, or local)

- **Setup process:**  
  1. Import this workflow into n8n.
  2. Add your Twilio and OpenAI credentials as environment variables or n8n credentials.
  3. Update webhook URLs in your Twilio console (for incoming SMS).
  4. (Optional) Adjust sticky notes in the workflow for detailed, step-by-step guidance.

## 🔗 Nodes Used

Cron, HTTP Request, Postgres, Webhook, AWS S3, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
