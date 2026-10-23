# 🔒 Review security architecture risks and route alerts with OpenAI GPT-4.1

> ⚡ **3 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow runs on a weekly schedule or manual trigger, consolidates architecture inputs into a single context, and uses OpenAI GPT-4.1 to produce a structured security architecture review with a risk score and findings, then routes the resulting report to a standard or critical escalation path.

## How it works
1. Runs every Monday at 07:00 or starts manually to initiate a security architecture review.
2. Sets review parameters such as the security frameworks to assess against, critical categories, and the critical risk-score threshold.
3. Combines the provided diagram description, documentation text, and infrastructure configuration into one architecture context and extracts preliminary security signals (for example open CIDRs, missing HTTPS, or hardcoded secret patterns).
4. Sends the normalized context and configuration to an OpenAI GPT-4.1-powered agent to generate a JSON security review with an executive summary, overall risk score, and categorized findings.
5. Parses the agent’s JSON output, computes the highest finding severity, and stops early when no findings are returned.
6. Builds a markdown security review summary report and routes it to standard distribution or, when severity is Critical or risk score exceeds the threshold, waits briefly before preparing a critical alert payload.

## Setup
1. Add an OpenAI credential and ensure the workflow’s OpenAI chat model is set to a model you have access to (default: gpt-4.1).
2. Provide input fields for each run—diagramDescription, documentText, and infrastructureConfig—via an upstream step or by pasting test data before execution.
3. Update the configured reviewFrameworks, criticalCategories, criticalRiskScoreThreshold, and reviewerTeamId values to match your organization’s standards.
4. Connect the “standard” and “critical” prepared outputs to your delivery tools (for example Slack, email, Jira, or Confluence) and map reportMarkdown and key metadata into your message or ticket fields.

## 🔗 Nodes Used

Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
