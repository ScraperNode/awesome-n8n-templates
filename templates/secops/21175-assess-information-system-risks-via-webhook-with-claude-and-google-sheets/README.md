# 🔒 Assess information system risks via webhook with Claude and Google Sheets

> ⚡ **0 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow receives a webhook request describing an information system scenario, uses Anthropic Claude to generate a five-part risk assessment with a fixed JSON schema, returns the report to the caller, and logs the results (including a Markdown report) to a Google Sheets Assessments tab.

## How it works
1. Receives a POST webhook request containing `system_name`, `industry`, and a `scenario` description.
2. Validates an optional shared secret via the `x-api-key` header and rejects scenarios shorter than the configured minimum length.
3. Sends the scenario to Anthropic Claude to assess confidentiality, integrity, availability, compliance, and operational risk and produce an overall rating, executive summary, and assumptions.
4. Enforces a structured JSON output so each risk dimension is limited to Critical/High/Medium/Low and includes a description, mitigation, and framework/regulation reference.
5. Builds a combined JSON response and a formatted Markdown report from the structured assessment.
6. Responds to the webhook with the report JSON and appends the assessment details to Google Sheets.

## Setup
1. Create a Google Sheet with an `Assessments` tab and columns matching the workflow’s mapped fields (e.g., Timestamp, System Name, Overall Rating, dimension ratings, Executive Summary, Scenario, Report).
2. Add an Anthropic (Claude) credential and a Google Sheets OAuth credential, then select the target spreadsheet in the Google Sheets node.
3. (Optional) Set a `shared_secret` value in the workflow settings and send it as an `x-api-key` header in your webhook requests.

## Requirements
- Anthropic API key and a Google account.

## Customization
- Change the frameworks, default industry, length limits and shared secret in **Settings**. Add a dimension to the prompt and the parser schema.

## 🔗 Nodes Used

Google Sheets, Webhook, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
