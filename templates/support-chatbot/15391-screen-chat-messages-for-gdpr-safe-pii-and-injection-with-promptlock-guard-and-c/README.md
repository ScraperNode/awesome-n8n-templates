# 💬 Screen chat messages for GDPR-safe PII and injection with PromptLock Guard and Claude

> ⚡ **18 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
An AI chat assistant that screens every incoming message for personal data and prompt-injection attacks before it reaches the language model. Personal data is redacted, injection attempts are refused, and clean messages pass straight through — a GDPR-safe way to run a chatbot for EU or regulated audiences.



## How it works
1. Every chat message arrives through n8n's built-in Chat Trigger and is screened by PromptLock Guard before it reaches the model. Guard detects personal data — names, emails, phone numbers, dates of birth and more — and checks for prompt injection using rules plus a DeBERTa v3 machine-learning classifier. On the default Redact setting, detected PII is replaced with labels like [GDPR_EMAIL] at every risk level, so raw personal data never reaches the LLM. An "Injection Detected?" check routes any message carrying an injection attempt to a refusal, whichever verdict Guard returned. Clean or redacted messages continue to Claude, which replies on the screened text. Higher-risk messages can be held for human review, and any screening error fails closed.



## Setup
1. Install the n8n-nodes-promptlock-guard community node (Settings → Community Nodes) and create a PromptLock credential with your API key — free at promptlock.io.
2. Open the "Claude Generates Reply" node and add your Anthropic API credential.
3. Optional: on the "PromptLock Compliance Guard" node, choose which compliance frameworks to screen (GDPR, HIPAA, PCI-DSS) and set the Action on High Risk. The template ships on Redact.
4. Activate the workflow and click Open Chat to test. Try a clean message, one containing an email or phone number, and a prompt-injection attempt to see each path in action.

## Requirements
- n8n with community nodes enabled (self-hosted, or Cloud with verified community nodes)
- The n8n-nodes-promptlock-guard community node
- A PromptLock API key (free tier available at promptlock.io)
- An Anthropic API key for the Claude reply node

## Customization
- Frameworks: screen for GDPR, HIPAA and/or PCI-DSS on the Guard node
- Action on High Risk: Redact (default), Flag (hold for review), Block (refuse), or Score Only (shadow mode — observe and log, change nothing)
- Swap or edit the Claude model and system prompt in the reply nod
- Extend the Hold-for-Review lane with a Slack alert or a spreadsheet for your review queue

## Additional info
• Prompt-injection screening is always on — every message is checked regardless of the frameworks you select.
• The workflow fails closed: if screening is unavailable, messages are refused rather than passed through unscreened.
• Redact is the only mode that strips PII at every risk level, which is why this GDPR template ships on it; Flag and Block act only above the built-in risk threshold.

## 🔗 Nodes Used

HTTP Request, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
