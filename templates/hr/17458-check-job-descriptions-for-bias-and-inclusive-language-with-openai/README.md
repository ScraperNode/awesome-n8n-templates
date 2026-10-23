# 👥 Check job descriptions for bias and inclusive language with OpenAI

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow collects a job description via an n8n Form, validates the text length, then uses OpenAI to score inclusivity, detect gender-coded wording, and flag discouraging phrases with suggested rewrites, returning the results as a formatted HTML report.

## How it works
1. Receives a job description submission through an n8n Form, with optional role title and industry.
2. Normalizes the form fields into clean values and checks the job description is at least 150 characters long.
3. If the text is too short, returns an on-page error message asking for a fuller job description.
4. Truncates very long text to stay within model limits and sends the job description context to an OpenAI chat model for bias and inclusive-language analysis.
5. Parses and auto-corrects the AI output into a structured bias report with an inclusivity score, gender-coding details, flagged phrases, and suggested rewrites.
6. Builds an HTML report from the structured results and displays it back to the user in the form completion page.

## Setup
1. Add an OpenAI API credential to the OpenAI chat model node.
2. Activate the workflow and open the Form Trigger production URL to submit test job descriptions.
3. Optionally adjust the minimum length check (150 characters) and the maximum input size (12,000 characters) to match your needs.

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
