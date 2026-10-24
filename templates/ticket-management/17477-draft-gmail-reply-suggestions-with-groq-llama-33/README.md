# 🎫 Draft Gmail reply suggestions with Groq Llama 3.3

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls Gmail for new emails, sends the message content to Groq’s Llama 3.3 chat completions API to generate a JSON reply draft decision, and creates a Gmail draft reply only when the message appears to need a human response.

## How it works
1. Polls Gmail every minute for newly received emails.
2. Sends the email text (up to 3,000 characters) to the Groq Chat Completions API (Llama 3.3 70B) to decide whether a reply is needed and to generate a reply draft in JSON.
3. Parses the model’s JSON response and extracts the decision, draft text, and original subject.
4. Creates a Gmail draft reply with a subject like “Re: <original subject>” when the message is marked as needing a reply.

## Setup
1. Connect a Gmail OAuth2 credential and select it in both the Gmail Trigger and Gmail Draft nodes.
2. Create a Groq API key and replace `Bearer YOUR_GROQ_API_KEY` in the Authorization header of the HTTP Request node.
3. Customize the system prompt (for example, replace `[YOUR COMPANY / SHOP NAME]` and adjust tone and rules) to match your support style.

## Requirements
- A Gmail account (OAuth2 credential) and a free Groq API key from console.groq.com — no credit card required. Runs on n8n Cloud or self-hosted.

## Customization
- Edit the system prompt in the HTTP Request node to change tone, reply length or the rules for when a reply is needed (for example "always draft a reply for anyone at acme.com"). Nothing is ever sent automatically — the workflow only creates a Gmail draft, so you stay in control. You can also swap Groq for OpenAI or any OpenAI-compatible endpoint by changing the URL, model and Authorization header.

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
