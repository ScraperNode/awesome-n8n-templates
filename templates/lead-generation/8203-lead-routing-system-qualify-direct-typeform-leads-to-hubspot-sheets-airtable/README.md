# 🎣 Lead routing system: Qualify & direct Typeform leads to HubSpot, Sheets & Airtable

> ⚡ **219 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works
This workflow starts whenever a new lead submits a Typeform. It captures the lead’s details, checks their budget, and routes them based on priority and source. High-budget leads are pushed into HubSpot with a follow-up task for sales. Facebook leads are logged in Google Sheets for marketing, while SurveyMonkey leads are stored in Airtable for campaign tracking. Finally, every lead receives an automated Gmail acknowledgment to confirm receipt and set expectations.

## Step-by-step

**Capture Leads**
- The workflow listens for new form responses from Typeform.

- Each lead’s details — name, email, phone, budget, and message — are captured for processing.

**Prioritize High-Budget Leads**
- The budget field is checked.

- If the budget is greater than $5,000 → the lead is flagged as high priority.

- These leads are added or updated in HubSpot CRM.

- A priority follow-up task is created in HubSpot for the sales team.

**Route by Lead Source**

- If the source is Facebook → the lead is logged in a Google Sheet for marketing analysis.

- If the source is SurveyMonkey → the lead is stored in Airtable for structured campaign tracking.

**Send Auto-Response**
- After storage, every lead receives an automated Gmail reply.

- The email thanks them for their interest and assures them that the sales team will follow up within 24 hours.

## Why use this?

- Captures and organizes leads from multiple channels in one workflow.

- Flags and escalates high-budget leads instantly to sales.

- Routes leads to the right system (HubSpot, Google Sheets, Airtable) based on their source.

- Automates acknowledgment emails, improving response time and customer experience.

- Saves manual effort by centralizing lead capture, qualification, and routing in one place.

## 🔗 Nodes Used

Airtable, Google Sheets, Typeform Trigger, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
