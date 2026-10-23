# 🎬 Repurpose law firm field notes into compliant marketing content with Anthropic Claude

> ⚡ **29 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow receives law firm field notes or anonymized case wins via webhook, validates them for privileged language, uses Anthropic Claude to generate four marketing assets, runs a keyword safety scan, logs the event via a Bar-Compliance Guardrail workflow, and emails the final content package via SMTP.

## How it works
1. Receives a POST webhook submission containing a field note or case win (direct JSON or Fluent Forms format).
2. Normalizes the payload and rejects submissions that are too short or contain privileged or legal-advice language.
3. Builds an Anthropic Claude prompt using n8n Variables (firm name and delivery emails) and the submitted practice area and content type.
4. Calls the Anthropic Messages API to generate a LinkedIn post, newsletter blurb, Google Business Profile post, and FAQ entry as JSON.
5. Parses Claude’s response, honors Claude’s self-reported safety flag, and runs a post-hoc keyword scan to flag legal-sounding language across all generated assets.
6. If the outputs are safe, calls the Bar-Compliance Guardrail workflow to log the generation event to a compliance audit sheet.
7. If the guardrail approves, sends the formatted content package to the firm’s marketing inbox via SMTP.

## Setup
1. Create an Anthropic API key and add an n8n Header Auth credential that sends it as the x-api-key header for requests to api.anthropic.com.
2. Configure an SMTP credential for the sending mailbox used to deliver the content package email.
3. Set n8n Variables for FIRM_NAME, FIRM_EMAIL, FIRM_FROM_EMAIL, and GUARDRAIL_WORKFLOW_ID.
4. Deploy and activate the Bar-Compliance Guardrail workflow and copy its numeric workflow ID into GUARDRAIL_WORKFLOW_ID.
5. Copy the webhook Production URL from the workflow and configure it in your source form/app (or send POST JSON directly to that URL).

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
