# 👥 Tailor Markdown resumes to job descriptions with Claude, PDFShift and Gmail

> ⚡ **68 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs manually to tailor a Markdown resume to a pasted job description using Anthropic Claude, converts the tailored resume HTML to a PDF with PDFShift, and emails the PDF along with a match score and change/gap report via Gmail.

## How it works
1. Runs when you click Test workflow in n8n.
2. Loads the job description, Markdown resume, target role, styling, and API keys from a configuration step.
3. Sends the job description and resume to Anthropic Claude and requests a structured JSON output with a fit score, tailored sections, keywords, gaps, and suggestions.
4. Renders the structured resume data into a styled HTML template and prepares an HTML match report for the email body.
5. Converts the rendered HTML into a PDF using the PDFShift API.
6. Emails the generated PDF and the match report to the configured recipient using Gmail.

## Setup
1. Add your Anthropic API key in the config values used by the Anthropic HTTP request.
2. Add your PDFShift API key in the config values used to authenticate the PDF conversion request.
3. Connect a Gmail account in the Gmail node and set the recipient email address in the config values.
4. Paste your target job description and your resume in Markdown into the config values, and optionally adjust the target role, rules, model name, and accent color.

## 🔗 Nodes Used

HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
