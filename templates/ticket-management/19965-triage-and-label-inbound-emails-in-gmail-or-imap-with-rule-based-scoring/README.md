# 🎫 Triage and label inbound emails in Gmail or IMAP with rule-based scoring

> ⚡ **18 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow deterministically classifies inbound emails using local JavaScript rules (no AI) and routes them into high-priority, low-priority bulk, or general inbox actions, producing prepared outputs you can connect to Gmail or IMAP labeling, starring, and archiving steps.

## How it works
1. Runs manually to generate a set of sample inbound email messages for testing.
2. Scores each email against a taxonomy of rule categories using headers, sender patterns, subject/body regex, and attachment heuristics.
3. Selects the best-matching category, assigns a label, and produces suggested actions like star, archive, and mark-as-read based on the match.
4. Routes each classified email into high-priority, low-priority bulk, or general inbox based on the suggested routing branch.
5. Outputs a ready-to-execute action payload for high-priority messages to star and apply the selected labels.
6. Outputs a ready-to-execute action payload for bulk messages to apply labels and archive/mark-as-read as configured, while leaving unclassified messages untouched.

## Setup
1. Replace the sample email generator with a live email source such as Gmail Trigger or IMAP Email Trigger.
2. Customize the category taxonomy (sender patterns, header checks, regex rules, attachment rules, and actions) in the JavaScript rule engine, or supply a per-item `custom_taxonomy`.
3. Add and configure your mailbox action nodes (for example Gmail: Add Labels, Star Message, Move to Archive, Mark as Read) after the corresponding high-priority and bulk outputs, and map `email_id`/labels to your provider’s fields.

## Requirements
- n8n version 1.0.0 or higher
- Gmail OAuth2 credentials with gmail.modify scope
- No external AI model subscription or API key required

## Customization
- Edit rules and category keywords in Configure Label Rules node
- Toggle dry-run mode, auto-create labels, and archive/read in Configure Gmail Triage
- Adjust score thresholds and priority weights per category
- Customize safety label names for OTP and critical alert protection

## Additional info
This workflow is a deterministic, zero-AI alternative to LLM-dependent email labelers. It leverages RFC header standards (List-Unsubscribe, Auto-Submitted), literal keyword matching, sender domains, and attachment extensions with zero recurring token fees and zero private data leakage. Includes built-in safety overrides ensuring OTPs and critical alerts are never archived or marked as read.

## 🔗 Nodes Used

HTTP Request, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
