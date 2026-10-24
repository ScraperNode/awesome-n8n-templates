# 🔬 Analyze contract risk and red flags with OpenAI from a web form

> ⚡ **22 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects pasted contract or terms-of-service text via an n8n Form and uses OpenAI to generate a structured risk score, plain-English summary, and flagged clauses, then returns a color-coded HTML report to the submitter.

## How it works
1. Receives a submission from an n8n Form containing the contract text, the submitter’s role, and an optional document type.
2. Normalizes the submitted fields and checks the contract text is at least 200 characters long.
3. If the text is too short, returns an HTML message asking the user to paste more content.
4. Truncates very long submissions to stay within model limits and notes whether truncation occurred.
5. Sends the prepared text to OpenAI with instructions to return a structured JSON risk report (overall risk score, reason, summary, and flagged clauses).
6. Formats the AI output into a color-coded HTML report and displays it as the form completion response.

## Setup
1. Add an OpenAI API credential to the OpenAI Chat Model node and select the model you want to use.
2. Activate the workflow and use the Form Trigger production URL to share or embed the form where users will submit contract text.
3. Optionally adjust the minimum length check (200 characters) and the truncation limit (14,000 characters) to match your preferred validation and model context size.

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
