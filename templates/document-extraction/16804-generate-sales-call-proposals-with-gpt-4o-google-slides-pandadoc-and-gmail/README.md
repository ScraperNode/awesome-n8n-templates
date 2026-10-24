# 🔬 Generate sales call proposals with GPT-4o, Google Slides, PandaDoc, and Gmail

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow captures details via an n8n form, uses OpenAI to generate structured proposal copy, and then produces a client-ready proposal either by filling a Google Slides template or by creating a PandaDoc document with pricing, before emailing the proposal to the prospect via Gmail.

## How it works
1. Triggers when a sales rep submits the built-in n8n “Sales Call Logging Form” with the prospect and deal details.
2. Sends the submitted company, problem, solution, scope, timeline, and cost to OpenAI (GPT‑4o) to generate proposal fields as a single JSON object.
3. For the PandaDoc path, creates a PandaDoc document from a template via the PandaDoc API and injects the OpenAI-generated text plus a pricing table based on the form’s Cost value.
4. Emails the PandaDoc proposal to the prospect using Gmail.
5. For the Google Slides path, copies a proposal template in Google Drive and names it using the OpenAI-generated proposal title.
6. Replaces placeholder tokens in the copied Google Slides presentation with the OpenAI-generated proposal sections.
7. Emails the Google Slides proposal link to the prospect using Gmail.

## Setup
1. Add an OpenAI API credential and confirm the selected GPT‑4o model is available in your OpenAI account.
2. Connect Google Drive, Google Slides, and Gmail OAuth2 credentials and update the Google Slides template file ID used for the copy operation.
3. If you use the PandaDoc path, add your PandaDoc API key in the HTTP Authorization header and ensure the template UUID matches a template in your PandaDoc workspace with the referenced token names.
4. Review and customize the Gmail subject/body text, sender details, and any hardcoded fields (for example initials, sender email, and fixed cost token).
5. Publish the n8n form(s) and share the form URL internally so sales can submit deal details during calls.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Google Slides, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
