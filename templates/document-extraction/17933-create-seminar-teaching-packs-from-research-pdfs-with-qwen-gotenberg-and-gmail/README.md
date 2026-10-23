# 🔬 Create seminar teaching packs from research PDFs with Qwen, Gotenberg and Gmail

> ⚡ **33 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a research paper PDF via an n8n Form, uses an AI agent (with schema validation) to generate a seminar-ready teaching pack and slide plan, renders it to a PDF with Gotenberg, and emails the finished pack to the requester via Gmail.

## How it works
1. Starts when someone submits an n8n Form with a paper PDF, their email address, session length, student level, and optional focus.
2. Extracts text from the uploaded PDF and stops with a “no text” message if the file appears to be image-only or too short.
3. Sends the paper text plus the session parameters to a LangChain AI agent to produce a structured teaching pack JSON that is validated and auto-fixed against a predefined schema.
4. Converts the structured teaching pack into print-ready HTML for an A4 handout and slide-by-slide delivery plan.
5. Posts the HTML to a self-hosted Gotenberg endpoint to render it into a PDF file.
6. Emails the generated PDF teaching pack to the submitted email address using Gmail and shows a completion message in the form.

## Setup
1. Provide credentials for the chat model used by the AI agent (Alibaba Cloud Qwen) and for Mistral (used for fallback and JSON auto-fix), or swap these model nodes for your preferred provider.
2. Connect a Gmail account in the Gmail node so the workflow can send the PDF as an email attachment.
3. Make Gotenberg reachable from n8n and confirm the render URL (default `http://gotenberg:3000/forms/chromium/convert/html`), or replace the rendering steps with a different PDF service.
4. Share the n8n Form production URL from the “Upload a paper” trigger so users can submit papers.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, Structured Output Parser, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
