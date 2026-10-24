# 🔬 Generate legal tech project proposals with Google Sheets, GPT-4o, SerpApi and Gmail

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow receives project requirements via a webhook, pulls service pricing from Google Sheets, uses OpenAI to analyze scope and estimate effort, optionally looks up missing service pricing via SerpApi, then generates a branded HTML proposal, renders it to PDF and DOCX via HTTP services, and emails it via Gmail.

## How it works
1. Receives a project proposal request through a POST webhook and immediately returns a JSON acknowledgment response.
2. Reads a service catalog and pricing table from Google Sheets and combines it with the submitted form data.
3. Uses OpenAI (gpt-4o-mini) to analyze requirements, propose phases and required services, and flag any services missing from the pricing catalog.
4. If services are missing, queries SerpApi (Google search) and parses snippets to estimate market price ranges for those services.
5. Builds a cost breakdown, budget comparison, and timeline based on the analysis and available pricing data.
6. Uses OpenAI (gpt-4o) to generate proposal HTML, then applies branding and prepares an email body and filenames.
7. Sends the HTML to Gotenberg for PDF rendering and to a Pandoc-based HTTP endpoint for DOCX conversion, then emails both files as attachments via Gmail.

## Setup
1. Configure the webhook path in n8n and use the generated webhook URL in your intake form or source system that submits project requests.
2. Add Google Sheets credentials and replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID, ensuring the sheet contains the expected pricing columns (for example Title, Category, Retail, Unit).
3. Add OpenAI credentials for both gpt-4o-mini (analysis) and gpt-4o (proposal generation) in the connected OpenAI nodes.
4. Add SerpApi credentials (api_key) if you want the optional market-pricing lookup for missing services to work.
5. Update the Gotenberg and Pandoc HTTP Request node URLs and authentication (basic auth / header auth) to point to your document rendering services.
6. Add Gmail OAuth2 credentials and update the recipient list and any placeholder email addresses used in the email body and recipients field.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
