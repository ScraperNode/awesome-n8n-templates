# 🔬 Score freelancer proposal PDFs from form submissions with OpenAI GPT-4o Mini

> ⚡ **20 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a client’s requirements and a freelancer’s proposal PDF via an n8n Form, extracts the PDF text, and uses OpenAI (GPT-4o Mini) to score the proposal and generate a structured evaluation that is rendered as an HTML report on the form completion page.

## How it works
1. Receives a form submission containing the client requirements text and an uploaded proposal PDF.
2. Extracts the full text from the uploaded PDF.
3. Sends the requirements and extracted proposal text to OpenAI (GPT-4o Mini) to score the proposal across five criteria and return strict JSON with a verdict, strengths, weaknesses, red flags, and improvements.
4. Parses the AI JSON response and converts it into a styled HTML scorecard with a score breakdown and feedback sections.
5. Displays the generated HTML report on the form completion page.

## Setup
1. Add an OpenAI credential and select it in the GPT-4o Mini chat model node.
2. Activate the workflow and use the Form Trigger’s production URL to access the submission form.
3. Confirm the PDF extraction node reads from the correct binary field name ("Proposal_PDF") that matches the form’s file upload field.

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, Extract from File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
