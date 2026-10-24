# 👥 Check job descriptions for bias with forms and OpenAI GPT-4.1

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow collects a job description via an n8n form and uses OpenAI to score inclusivity, identify gender-coded language, and flag discouraging phrases with suggested rewrites, returning the results as a formatted HTML report.

## How it works
1. Receives a job description submission through an n8n Form Trigger, with optional role title and industry context.
2. Validates that the job description has at least 150 characters and returns an on-page error message if it is too short.
3. Trims very long job description text to stay within model limits before analysis.
4. Sends the prepared job description to an OpenAI chat model to generate a structured bias and inclusive-language report (score, gender-coding details, flagged phrases, and readability note).
5. Formats the structured results into an HTML report with severity highlighting and word chips for gender-coded terms.
6. Displays the HTML report back to the user in the form completion page.

## Setup
1. Add an OpenAI API credential to the OpenAI chat model node and confirm the selected model is available to your account.
2. Activate the workflow and use the Form Trigger production URL to access the form.
3. Optionally adjust the minimum-length check (150 characters) and the maximum text limit (12,000 characters) to match your usage and cost constraints.

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
