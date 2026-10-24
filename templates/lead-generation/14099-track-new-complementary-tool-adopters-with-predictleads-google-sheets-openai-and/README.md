# 🎣 Track new complementary-tool adopters with PredictLeads, Google Sheets, OpenAI and Gmail

> ⚡ **53 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Track companies adopting tools that complement yours and send AI-drafted co-marketing outreach emails to new adopters.

This workflow reads a list of complementary tools (with their PredictLeads technology IDs) from Google Sheets, discovers companies that recently adopted each tool via the PredictLeads Technology Detections API, compares against previously scanned domains to find new adopters, enriches each new company, and uses OpenAI to draft a personalized co-marketing partnership email.

How it works:
1. Schedule trigger runs the workflow daily at 8 AM.
2. Reads complementary tool names and PredictLeads tech IDs from Google Sheets.
3. Loops through each tool and discovers recent technology adopters via PredictLeads.
4. Reads previously scanned domains from a separate Google Sheets tab.
5. Compares current detections against previous scans to identify new adopters only.
6. Limits processing to 2 new companies per tool per run (adjustable).
7. Enriches each new adopter with PredictLeads company data.
8. Builds a structured prompt and sends it to OpenAI to draft a co-marketing email.
9. Sends the email via Gmail.
10. Logs the domain, tool name, and timestamp to the Previous Scan sheet to prevent duplicates.

Setup:
- Create a Google Sheet with two tabs:
  - "Complementary Tools" with columns: tool_name, tech_id (PredictLeads technology ID).
  - "Previous Scan" with columns: domain, tool_name, detected_at, email_sent.
- Connect your Gmail account (OAuth2) for sending outreach emails.
- Add your OpenAI API key in the Draft Co-Marketing Email HTTP Request node.
- Add your PredictLeads API credentials (X-Api-Key and X-Api-Token headers).

Requirements:
- Google Sheets OAuth2 credentials.
- Gmail OAuth2 credentials.
- OpenAI API account (uses gpt-4o-mini, ~$0.003-0.008 per call).
- PredictLeads API account (https://docs.predictleads.com).

Notes:
- The Limit node caps outreach at 2 companies per tool per run -- adjust as needed.
- Technology IDs for the complementary tools can be found via the PredictLeads API.
- The Previous Scan tab prevents the same company from being contacted twice.
- PredictLeads Technology Detections and Company API docs: https://docs.predictleads.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
