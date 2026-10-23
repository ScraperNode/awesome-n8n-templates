# 👥 Check job descriptions for bias and inclusive language with OpenAI

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow collects a job description via an n8n Form, validates and trims the text, then uses the OpenAI Chat Model to generate an inclusivity score, gender-coding read, and flagged phrases with suggested rewrites, returning the results as an HTML report on the form.

## How it works
1. Receives a job description (plus optional role title and industry) through an n8n Form Trigger.
2. Normalizes the submitted fields and checks that the job description is at least 150 characters long.
3. Returns a friendly HTML error message to the form when the submission is too short.
4. Truncates very long job descriptions to stay within model limits.
5. Sends the prepared text to the OpenAI Chat Model and parses the response into a structured bias report (score, summary, gender coding, flags, and readability note).
6. Formats the structured results into an HTML report and displays it back to the user in the form completion page.

## Setup
1. Add an OpenAI credential to the OpenAI Chat Model node (or replace it with another supported chat model and credentials).
2. Activate the workflow and use the Form Trigger production URL to access the form and run end-to-end tests.
3. If needed, adjust the minimum length check (150 characters) and the maximum text length cutoff (12,000 characters) to match your use case.

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
