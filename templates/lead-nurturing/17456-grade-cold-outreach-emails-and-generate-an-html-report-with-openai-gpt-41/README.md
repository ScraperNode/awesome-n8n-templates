# 💬 Grade cold outreach emails and generate an HTML report with OpenAI GPT-4.1

> ⚡ **7 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow collects a cold email subject and body via an n8n Form, validates the input, and uses OpenAI to generate a structured A–F quality grade with copy and deliverability feedback, returning the results as a formatted HTML report.

## How it works
1. Receives a submission from an n8n Form with the email subject line, email body, and optional offer and target audience details.
2. Cleans and maps the form fields into a consistent subject/body/offer/audience payload.
3. Validates that the subject is present and the email body is at least 50 characters, returning an HTML error message if it is too short.
4. Truncates very long email bodies (over 6000 characters) to keep the AI request within limits.
5. Sends the subject and body to an OpenAI chat model with instructions to score spam risk, subject strength, personalization, value proposition, CTA, tone, and length, and to return fixes and rewritten subject lines in a structured JSON schema.
6. Builds an HTML scorecard from the structured results and displays it back to the form submitter.

## Setup
1. Add an OpenAI credential in the OpenAI chat model node (or replace it with another compatible chat model provider).
2. Activate the workflow and open the n8n Form Trigger production URL to share it with users.
3. Optionally adjust the minimum-length validation and truncation limits, and edit the grading prompt to match your outreach standards.

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
