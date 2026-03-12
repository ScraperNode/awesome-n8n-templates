# 🔬 Moderate and govern user content with OpenAI GPT-4o, Slack and Gmail

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates end-to-end AI-driven content moderation for platforms managing user-generated content, including marketplaces, communities, and enterprise systems. It is designed for product, trust & safety, and governance teams seeking scalable, policy-aligned enforcement without subjective scoring. The workflow validates structured review, goal, and feedback data using a Performance Signal Agent that standardizes moderation signals and removes ambiguity. A Governance Agent then orchestrates policy enforcement, eligibility checks, escalation logic, and audit preparation. Content enters via webhook, is classified, validated, and routed by action type (approve, flag, escalate). Enforcement logic determines whether to store clean content, flag violations, or trigger escalation emails and team notifications. All actions are logged for traceability and compliance. This template solves inconsistent moderation decisions, lack of structured governance controls, and manual escalation overhead by embedding deterministic checkpoints, structured outputs, and audit-ready logging into a single automated pipeline.

## Setup Steps
1. Connect OpenAI API credentials for AI agents.
2. Configure Google Sheets or database for logging.
3. Connect Gmail for escalation emails.
4. Define moderation policies and routing rules.
5. Activate webhook and test sample content.

## Prerequisites
n8n account, OpenAI API key, Google Sheets or DB access, Gmail credentials, defined moderation policies.
## Use Cases
Marketplace listing moderation, enterprise HR review screening
## Customization
Adjust policy rules, add risk scoring, integrate Slack instead of Gmail
## Benefits
Improves moderation accuracy, reduces manual review, enforces governance consistency

## 🔗 Nodes Used

Send Email, Slack, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
