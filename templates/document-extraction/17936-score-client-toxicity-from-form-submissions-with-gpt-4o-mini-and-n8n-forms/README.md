# 🔬 Score client toxicity from form submissions with GPT-4o Mini and n8n Forms

> ⚡ **13 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a client’s message via an n8n Form, analyzes it with OpenAI (GPT-4o Mini) to score toxicity and identify warning signs, then generates a styled HTML report showing the score, verdict, flags, and protection tips on the form completion page.

## How it works
1. Receives a client message or project brief through an n8n Form submission.
2. Sends the text to OpenAI (GPT-4o Mini) to return strict JSON containing a 0–100 toxicity score, a verdict, red/yellow/green flags, and protection tips.
3. Parses the AI’s JSON and renders a formatted HTML report with color-coded sections and an overall verdict.
4. Displays the generated report directly on the n8n Form completion page.

## Setup
1. Add an OpenAI API credential and select it in the GPT-4o Mini node.
2. Activate the workflow and open the form’s Production URL from the Form Trigger.
3. (Optional) Customize the analysis prompt, verdict thresholds, or the HTML styling in the code step to match your criteria.

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
