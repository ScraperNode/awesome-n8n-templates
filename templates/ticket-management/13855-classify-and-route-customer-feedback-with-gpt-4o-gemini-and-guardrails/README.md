# 🎫 Classify and route customer feedback with GPT-4o, Gemini, and guardrails

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

The full end-to-end workflow that chains all patterns together. This template processes customer feedback from intake to team routing, with normalization, validation, native guardrails, AI classification, and confidence-based branching at every step.

**What you'll do**
- Send customer feedback through a webhook and watch it flow through every stage.
- See the data get normalized, validated, and scanned by n8n's native Guardrails node for jailbreak attempts and PII.
- Watch the AI classify feedback (bug report, feature request, praise, complaint, question) with a confidence score and generate a personalized response draft.
- See AI-generated responses pass through output guardrails that check for NSFW content and secret keys before reaching users.
- Watch high-confidence results route automatically: bug reports and feature requests to the product team, complaints to customer success, and praise to marketing as testimonial candidates.

**What you'll learn**
- How to chain normalization, validation, native guardrails, AI, and routing into a single pipeline
- How to use n8n's Guardrails node for both input screening (jailbreak, PII, secret keys) and output screening (NSFW, secret keys)
- How confidence-based branching separates high-confidence results from items that need human review
- How Switch nodes route classified feedback to the right destination (product team, customer success, or marketing)
- How every step between AI nodes is deterministic and inspectable
- How all these patterns work together in a production-ready workflow

**Why it matters**
This is the complete picture. Individual patterns are useful on their own, but the real power comes from combining them into a pipeline where AI handles the judgment calls and everything else follows explicit, testable rules. Import this template as your starting point and connect your own integrations.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, OpenRouter Chat Model, Guardrails

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
