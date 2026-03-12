# 🎫 Gmail AI Auto-Responder: Create Draft Replies to incoming emails

> ⚡ **72,331 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow automatically generates draft replies in Gmail.
It's designed for anyone who manages a high volume of emails or often face writer's block when crafting responses.
Since it doesn't send the generated message directly, you're still in charge of editing and approving emails before they go out.

## How It Works:
- Email Trigger: activates when new emails reach the Gmail inbox
- Assessment: uses OpenAI gpt-4o and a JSON parser to determine if a response is necessary.
- Reply Generation: crafts a reply with OpenAI GPT-4 Turbo
- Draft Integration: after converting the text to html, it places the draft into the Gmail thread as a reply to the first message

## Set Up Overview (~10 minutes):
- OAuth Configuration ([follow n8n instructions here](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)):
  - Setup Google OAuth in Google Cloud console. Make sure to add Gmail API with the modify scope.
  - Add Google OAuth credentials in n8n. Make sure to add the n8n redirect URI to the   Google Cloud Console consent screen settings.
- OpenAI Configuration: add OpenAI API Key in the credentials
- Tweaking the prompt: edit the system prompt in the "Generate email reply" node to suit your needs

## Detailed Walkthrough
Check out this [blog post](https://medium.com/@nchourrout/i-made-an-email-auto-responder-to-conquer-my-writers-block-aa2b91db6741) where I go into more details on how I built this workflow.

Reach out to me [here](https://flowful.ai/contact) if you need help building automations for your business.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
