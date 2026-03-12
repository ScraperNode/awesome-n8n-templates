# 🔬 Generate consulting proposals and contracts with GPT-4o, Google Docs, Gmail and Slack

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who’s it for
Consultants, agencies, freelancers, and professional service firms who need to create customized proposals and contracts quickly and efficiently.

## How it works / What it does
This n8n workflow automates the entire proposal and contract creation process:
1. Triggers when a new client is added to Google Sheets or CRM.
2. Normalizes client data for processing.
3. Generates personalized proposal content using OpenAI AI models based on templates, pricing, and client info.
4. Creates a Google Doc proposal.
5. Converts the proposal to PDF.
6. Sends the proposal via Gmail or Outlook.
7. Optionally routes the proposal to DocuSign or PandaDoc for e-signature collection.
8. Logs the proposal and client info in Google Sheets for tracking.
9. Sends Slack notifications to internal teams.
10. Routes high-value clients for priority follow-up via email and Slack alerts.

## How to set up
1. Connect Google Sheets or your CRM for client data.
2. Configure Gmail or Outlook credentials.
3. Add OpenAI credentials for proposal generation.
4. Connect Slack for notifications.
5. Optional: Connect DocuSign/PandaDoc.
6. Customize decision nodes for priority clients or additional workflows.

## Requirements
- n8n account with Google Sheets, Gmail/Outlook, Slack integrations.
- Optional DocuSign/PandaDoc accounts for signature collection.
- OpenAI API key for AI proposal generation.

## How to customize
- Adjust templates in OpenAI prompts for company tone/style.
- Modify Sheet columns for additional client info.
- Change decision logic to define what counts as a high-value client.
- Add other integrations like CRM updates or analytics dashboards.

---

**Created by Hyrum Hurst / QuarterSmart**  
**Keywords:** AI proposal automation, contract automation, consulting, proposal generation, n8n workflow, QuarterSmart

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Google Docs, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
