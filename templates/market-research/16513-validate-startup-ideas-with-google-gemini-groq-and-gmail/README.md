# 📊 Validate startup ideas with Google Gemini, Groq, and Gmail

> ⚡ **208 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects a startup idea via an n8n form, uses Google Gemini to generate a SWOT-style analysis, assigns a viability score, uses Groq to turn the results into a structured validation report, and emails the final report through Gmail.

## How it works
1. Receives a startup idea, industry, and target audience from an n8n Form trigger.
2. Sends the submission to Google Gemini to generate a professional analysis covering the problem, business model, and SWOT factors.
3. Generates a startup viability score (currently a random value from 80–100) and packages it with the Gemini analysis.
4. Sends the score and analysis to Groq (Llama 3.3 70B) to compile a full validation report with an executive summary, market potential, recommendations, and final verdict.
5. Emails the generated validation report to the configured recipient using Gmail.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Groq API, and a Gmail OAuth2 connection.
2. Replace the placeholder recipient address in the Gmail step ("YOUR_EMAIL@example.com") with your target email address before activating the workflow.
3. Publish the n8n form, then share the form URL with the users who should submit their startup ideas for validation.

## 🔗 Nodes Used

Gmail, AI Agent, n8n Form Trigger, Google Gemini Chat Model, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
