# 🔒 AI-powered security analysis for n8n with Google Gemini and n8n audit API

> ⚡ **244 views** · 🔒 [SecOps & Security Automation](../)

## Description

# Generate a security audit report from an n8n instance to a web form
This workflow provides a deep-dive security assessment of an n8n instance using the native Audit API and AI analysis.

## Who’s it for
* This template is for n8n administrators and DevSecOps engineers who need to maintain a high security standard across their automation infrastructure. 
* It is particularly useful for teams managing self-hosted instances with multiple users.

## How it works
* The workflow triggers via an n8n Form where you provide your instance URL and API key. 
* It calls the official n8n Audit API to scan for five categories of risk: instance settings, credentials, database (SQL injection), nodes, and filesystem access. 
* A Code node parses this data, which is then analyzed by Google Gemini to create a prioritized remediation plan.

## Requirements
* n8n version v1.0 or higher.
* A Google Gemini API Key.
* An n8n API Key with 'Audit' scope permissions.

## How to set up
1. Create a Google Gemini API credential in n8n.
2. Ensure your n8n API key has the correct scopes.
3. Execute the workflow and enter your credentials into the trigger form.

## How to customize the workflow
* You can easily swap the Google Gemini node for OpenAI or Anthropic. 
* You can also add a 'Send Email' or 'Slack' node at the end to automatically route the report to your security channel instead of just viewing it in the browser.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
