# 🔬 Assess technical documentation compliance with GPT‑4o and send Slack alerts

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### This n8n template demonstrates how to use AI to automatically review technical documentation against predefined compliance standards — and alert your team via Slack.

Use cases: Engineering teams maintaining API docs, product teams enforcing terminology standards, or localization teams checking readiness before translation handoff.

### How it works
* A document URL or raw text is passed in via manual trigger (or webhook).
* The document content is fetched and extracted as plain text.
* An AI model scores the document across 4 compliance dimensions: Structure, Terminology, Localization Readiness, and Completeness.
* The AI returns a structured JSON report with scores and gap descriptions per dimension.
* A compliance status is determined: PASS / WARNING / FAIL based on the overall score.
* A formatted Slack alert is sent to the appropriate channel based on status severity.
* All results are logged for historical tracking.

### How to use
* Replace the document URL in the `Set Document Input` node with your own source.
* Update the AI prompt in the `Score Documentation with AI` node to match your standards.
* Add your Slack webhook URLs for each severity channel.
* Optionally connect to Google Sheets or PostgreSQL for audit logging.

### Requirements
* OpenAI or Anthropic API key for AI scoring
* Slack incoming webhook URLs
* Document accessible via URL or passed as text

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
