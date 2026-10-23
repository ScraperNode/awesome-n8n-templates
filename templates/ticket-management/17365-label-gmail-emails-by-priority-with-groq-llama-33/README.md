# 🎫 Label Gmail emails by priority with Groq Llama 3.3

> ⚡ **36 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls Gmail for new emails, sends the email text to Groq’s OpenAI-compatible chat completions API (Llama 3.3) to classify it, and then applies the matching Gmail label for Action Required, Promotions, or Other.

## How it works
1. Triggers when a new email is received in Gmail (polled every minute).
2. Sends the email body/snippet to Groq’s chat completions endpoint (Llama 3.3 70B) and requests a JSON category classification.
3. Parses the model’s JSON response and falls back to `Other` if parsing fails, while keeping the original Gmail message ID.
4. If the category is `Action Required`, adds the configured Gmail label to the message.
5. If the category is `Promotions`, adds the configured Gmail label; otherwise, adds the configured `Other` label.

## Setup
1. Create and select a Gmail OAuth2 credential for the trigger and all Gmail label actions.
2. Add your Groq API key by replacing `Bearer YOUR_GROQ_API_KEY` in the Authorization header of the HTTP request.
3. Create the three Gmail labels (Action Required, Promotions, Other) and select their label IDs/names in each corresponding Gmail “add labels” action.

## Requirements
- A Gmail account (OAuth2 credential) and a free Groq API key from console.groq.com — no credit card required. Works on n8n Cloud or self-hosted.

## Customization
- Edit the plain-English rules in the system prompt of the AI node to add categories or domain-specific rules (e.g. "emails from acme.com are always Action Required"). You can also swap Groq for OpenAI or any OpenAI-compatible endpoint by changing the URL, model and Authorization header.

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
