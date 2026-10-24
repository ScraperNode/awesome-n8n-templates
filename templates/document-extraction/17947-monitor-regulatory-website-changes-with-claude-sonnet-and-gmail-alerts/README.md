# 🔬 Monitor regulatory website changes with Claude Sonnet and Gmail alerts

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to monitor regulatory websites, detect page changes via hashing, analyze potential compliance impact with Anthropic Claude Sonnet, log findings to n8n Data Tables, and email the relevant compliance owner through Gmail.

## How it works
1. Runs on a daily schedule and loads a predefined list of regulatory sources (URL, sector, jurisdiction, and owner email).
2. Visits each source URL, retrieves the page content, and generates a cryptographic hash to represent the current state.
3. Looks up the prior stored hash for the same URL in an n8n Data Table and compares it to determine whether the page changed.
4. Stores the latest hash and last-checked timestamp back into the watch-state n8n Data Table for use in the next run.
5. When a change is detected, sends the extracted page text to Anthropic Claude Sonnet and parses the response into a structured impact assessment (summary, severity, affected areas, actions, deadline, confidence).
6. Writes the assessment to an audit-log n8n Data Table and emails a formatted alert to the source’s compliance owner via Gmail.

## Setup
1. Add an Anthropic (Claude) credential/connection for the LangChain AI Agent and select the Claude Sonnet 4.6 model.
2. Add a Gmail OAuth2 credential and ensure the workflow can send emails to your compliance-owner distribution addresses.
3. Create two n8n Data Tables named `reg_radar_watch_state` and `reg_radar_audit_log` with columns matching the fields written by the workflow (including `url` as the matching column in the watch-state table).
4. Update the monitored source list (URLs, sectors, jurisdictions, and ownerEmail values) to match your organization and adjust the schedule interval if needed.

## Requirements
- Anthropic API Account: An active credential with access to the Claude API (specifically Claude 3.5 Sonnet or newer) to power the LangChain AI Agent.
- Gmail OAuth2 Configuration: A configured Google workspace or personal Gmail account connected via OAuth2 in n8n to send outbound alert emails.
- n8n Data Tables: Your n8n instance must support and have the Data Tables feature enabled to maintain the reg_radar_watch_state and reg_radar_audit_log databases.

## Customization
- Monitored Sources: Open the Load Watch Sources Code node to add, remove, or modify the target regulatory URLs, sectors, jurisdictions, and the specific compliance owner emails for each domain.
- Execution Schedule: The Daily Watch Cycle trigger can be adjusted to run hourly, weekly, or on specific business days depending on the urgency of the regulatory domain.
- AI Assessment Rules: Modify the system prompt inside the Analyze Regulatory Impact Agent node to instruct the AI to look for specific compliance frameworks (e.g., GDPR, HIPAA, SOC2) or adjust its severity scoring logic.
- Email Template Branding: The Alert Compliance Owner Gmail node uses an inline-styled HTML template. You can edit the HTML/CSS to match your organization's internal communications branding.

## Additional info
Dynamic Content Sensitivity: Because the workflow relies on exact cryptographic hashing (Compute Content Hash), webpages containing dynamic elements (like rotating news carousels, live timestamps, or session IDs) may trigger false positive "changes."

Text Extraction Limitations: The Fetch Source Page node extracts raw HTML text. If a regulatory body uses heavily JavaScript-rendered Single Page Applications (SPAs) or publishes updates exclusively in PDF format, you may need to supplement this workflow with a headless browser integration (like Browserless) or a PDF parser.

State Management: The workflow relies on an immutable audit ledger. If you ever need to reset the baseline for a specific URL, you will need to manually clear its corresponding row in the reg_radar_watch_state Data Table.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
