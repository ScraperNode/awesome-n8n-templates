# ⚒️ Guardrail AI inputs and outputs with GPT-4o-mini and n8n Guardrails

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

Protect your workflows with n8n's native Guardrails node, placed before and after your AI step. The input guardrails catch jailbreak attempts and PII before they reach your model. The output guardrails scan AI responses for NSFW content and secret keys before they reach your users.

**What you'll do**
- Send clean input and watch it pass through both input and output guardrails successfully.
- Send a prompt injection attempt and see the input guardrails block it with jailbreak detection.
- Send a message containing PII and see it get flagged before reaching the AI.
- See how flagged outputs fall back to a safe templated response.

**What you'll learn**
- How to use n8n's Guardrails node for input and output validation
- How jailbreak detection catches prompt injection attempts using an LLM-based check
- How PII detection identifies personal data (SSNs, credit card numbers, emails, and more)
- How to build fallback paths that return safe responses when guardrails trigger

**Why it matters**
Guardrails are the seatbelts of your AI workflow. You hope you don't need them, but when a user sends a prompt injection attempt or the AI leaks sensitive data, you'll be glad they're there. This template uses n8n's dedicated Guardrails node to make safety checks a first-class part of your workflow without writing custom validation code.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Guardrails

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
