# 👥 Analyze resume PDFs for ATS fit with OpenRouter GPT via webhook

> ⚡ **267 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow accepts a resume PDF via webhook, extracts the text, and uses OpenRouter (OpenAI model) to generate an ATS-style analysis and score for a specified job role, returning a clean JSON response to the requester.

## How it works
1. Receives a POST webhook request containing a resume PDF (and an optional job_role value in the request body).
2. Extracts text content from the uploaded PDF file.
3. Sends the resume text and target job role to an AI agent backed by an OpenRouter chat model to produce an ATS analysis as JSON.
4. Cleans the AI output, parses it as JSON, and normalizes fields like ats_score, missing_skills, and improvement_suggestions.
5. Returns the final structured JSON (or an error payload with the raw AI output if parsing fails) in the webhook response.

## Setup
1. Add an OpenRouter API credential and select it in the OpenRouter Chat Model node.
2. Configure the calling app to send a POST request to the workflow webhook URL with the resume PDF in the resume_file binary field and optionally include body.job_role.
3. Ensure the incoming file is a PDF and that the Extract from File node’s binary property name matches the uploaded file property.

## 🔗 Nodes Used

Webhook, AI Agent, Extract from File, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
