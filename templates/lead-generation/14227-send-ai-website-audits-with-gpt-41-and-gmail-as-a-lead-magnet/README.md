# 🎣 Send AI website audits with GPT-4.1 and Gmail as a lead magnet

> ⚡ **77 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works

- A prospect submits a form with their email and website URL
- The workflow fetches and cleans the website HTML, extracting key business signals
- An Analyst Agent reads the content and produces a structured JSON diagnostic (business type, offers, pain points, funnels, copy kit)
- A Writer Agent converts the diagnostic into a personalised email with 10 actionable improvements, written automatically in the lead's language
- A branded HTML email is assembled and sent via Gmail with numbered improvement cards, a booking CTA and a professional footer

## Set up steps

- Connect your OpenAI API credentials to both AI model nodes (~2 min)
- Connect your Gmail account to the Send Email node (~1 min)
- Open the **Build Email HTML** node and fill in the 6 constants at the top: your name, email, cal.com booking link, Instagram URL, LinkedIn URL and logo image URL (~3 min)
- Activate the workflow and share the form URL with your leads

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
