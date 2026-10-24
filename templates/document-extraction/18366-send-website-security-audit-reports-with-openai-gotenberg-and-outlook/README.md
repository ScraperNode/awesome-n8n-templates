# 🔬 Send website security audit reports with OpenAI, Gotenberg, and Outlook

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a landing page URL via an n8n form, fetches the page HTML and HTTP response headers, uses OpenAI (GPT-4.1) to audit client-side security issues and header configuration, generates an HTML/PDF security report via Gotenberg, and emails the results using Microsoft Outlook.

## How it works
1. Receives a landing page URL submitted through an n8n form.
2. Uses an HTTP request to retrieve the page HTML and the full HTTP response headers (following redirects).
3. Sends the response headers to OpenAI (GPT-4.1) to assess security header, cookie, and content security misconfigurations.
4. Sends the page HTML/content to OpenAI (GPT-4.1) to identify client-side vulnerabilities, information leakage, and weaknesses.
5. Merges and aggregates the audit outputs, extracts and scores key security headers, and computes summary metrics like header grade and warning counts.
6. Uses OpenAI (GPT-4.1) to generate platform-specific remediation steps for WordPress, GoDaddy Hosting, Hostinger Hosting, and Squarespace.
7. Builds a branded HTML report, converts it to a PDF via a Gotenberg HTTP endpoint, and emails the PDF (and summary HTML) through Microsoft Outlook.

## Setup
1. Add OpenAI credentials for the GPT-4.1 chat model used to analyze headers, content, and to generate fix instructions.
2. Configure the Gotenberg PDF service endpoint URL and HTTP Basic Auth credentials used by the PDF generation request.
3. Add Microsoft Outlook credentials and set the recipient email address for delivering the report.
4. Review the branding placeholders (company name, website, phone, email) and update them in the report-generation code before sending reports to customers.

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, AI Agent, OpenAI Chat Model, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
