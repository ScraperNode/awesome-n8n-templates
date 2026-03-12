# 🎫 Classify support tickets by confidence and route with OpenRouter AI

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

Combine AI classification with confidence-based routing and category-based fan-out. This template classifies incoming support tickets, routes them by confidence level, and shows an example of how to fan high-confidence items out to the right team.

**What you'll do**
- Send a support ticket and watch the AI classify it by category and urgency.
- See how a Confidence Threshold switch routes items to high, medium, or low confidence paths.
- Watch high-confidence tickets fan out to Billing, Technical, Sales, or General teams.

**What you'll learn**
- How to combine AI classification with Switch nodes for multi-path routing
- How to implement confidence thresholds that balance automation with human review

**Why it matters**
Not every AI classification deserves the same level of trust. High-confidence results can be auto-routed. Medium ones get flagged for review. Low ones go straight to a human. This lets you phase in automation gradually while keeping quality high.

## 🔗 Nodes Used

Webhook, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
