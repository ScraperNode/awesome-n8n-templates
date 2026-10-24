# 🔬 Rewrite legal time entry narratives with SharePoint, Microsoft Graph, and GPT-4o

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This scheduled workflow pulls attorney time entries and related client billing guidelines from SharePoint via Microsoft Graph, uses OpenAI (GPT-4o) to rewrite narratives and check compliance, writes the AI-reviewed narrative back to SharePoint, and emails a run digest through Microsoft Outlook.

## How it works
1. Runs every two hours on a schedule.
2. Fetches Time Entries, Projects, Billing Guidelines, and Clients from SharePoint lists using the Microsoft Graph API.
3. Selects time entries that have a narrative and a Status of “Complete”, then joins each entry to its project, client, and applicable firm-wide and client-specific billing guidelines.
4. Sends each selected entry to OpenAI (GPT-4o) to rewrite the narrative and return a strict JSON result with an AI narrative and any compliance issues.
5. Updates the corresponding SharePoint time entry with the AI narrative, sets Status to “AI Reviewed” or “Flagged”, and appends issues to Notes when flagged.
6. Builds an HTML summary of processed and flagged entries and sends the digest email via Microsoft Outlook.

## Setup
1. Create four SharePoint lists (Time Entries, Projects, Billing Guidelines, and Clients) and ensure the required columns/lookup IDs exist.
2. Add a generic OAuth2 credential for Microsoft Graph with permissions to read/write SharePoint lists and send mail, and update the site ID and list IDs in the configuration values.
3. Add an OpenAI credential and keep the model set to GPT-4o (or update it to your preferred compatible model).
4. Add a Microsoft Outlook credential and set the digest To/CC recipient addresses in the configuration values.
5. Verify and fill in the SharePoint internal column names (not display names) for narrative, AI narrative, status, notes, and lookup fields in the configuration values.

## Requirements
- Microsoft 365 with SharePoint and Outlook
- OpenAI API key (GPT-4o)
- Azure app registration for the Graph OAuth2 credential (`Sites.ReadWrite.All`)

## Customization
- Edit `firmBillingRules` in Config to change billing standards without touching the AI prompt.
- Add gold-standard example narratives to the system prompt for firm-specific voice.
- Pairs with the LEDES 1998B conversion template from AI Solutions for a complete pre-bill-to-e-billing pipeline.

## 🔗 Nodes Used

HTTP Request, Microsoft Outlook, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
