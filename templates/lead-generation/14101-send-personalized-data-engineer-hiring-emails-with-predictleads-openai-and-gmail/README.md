# 🎣 Send personalized data engineer hiring emails with PredictLeads, OpenAI and Gmail

> ⚡ **165 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Find companies hiring data engineers, enrich them with tech stack data from PredictLeads, and send AI-personalized service offering emails.

This workflow takes a target company domain, queries PredictLeads for data engineer job openings, enriches each result with company info and technology stack data, then uses OpenAI to generate a personalized outreach email that references the company's current tools (e.g., "I see you're on Snowflake and looking for pipeline engineers").

How it works:
1. Schedule trigger runs the workflow daily at 8 AM.
2. Sets the target company domain to query.
3. Fetches data engineer job openings from PredictLeads for that domain.
4. Loops through results and enriches each company with PredictLeads company data.
5. Fetches the company's technology stack from PredictLeads Technology Detections API.
6. Builds a personalized prompt combining company info, industry, and detected tech stack.
7. Sends the prompt to OpenAI to generate a tailored outreach email.
8. Sends the email via Gmail with a personalized subject line.

Setup:
- Set the target domain in the "set domain" node (default: stripe.com).
- Connect your Gmail account (OAuth2) for sending outreach emails.
- Add your OpenAI API key in the Generate Personalized Email HTTP Request node.
- Add your PredictLeads API credentials (X-Api-Key and X-Api-Token headers).

Requirements:
- Gmail OAuth2 credentials.
- OpenAI API account (uses gpt-4o-mini, ~$0.003-0.008 per call).
- PredictLeads API account (https://docs.predictleads.com).

Notes:
- Change the domain in the Set node to target different companies, or connect a Google Sheet for batch processing.
- The AI prompt references the company's tech stack for maximum personalization.
- PredictLeads Job Openings, Company, and Technology Detections API docs: https://docs.predictleads.com

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
