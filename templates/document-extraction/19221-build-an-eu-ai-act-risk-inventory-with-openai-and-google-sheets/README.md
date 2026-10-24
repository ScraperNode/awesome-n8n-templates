# 🔬 Build an EU AI Act risk inventory with OpenAI and Google Sheets

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects internal AI system reports via an n8n form, uses OpenAI to propose an EU AI Act risk class with validation rules, stores each entry in Google Sheets, and emails management and the data protection officer when a case is prohibited, high risk, or unclear.

## How it works
1. Receives an AI system submission through an n8n Form trigger with details like purpose, data types, decision impact, and external visibility.
2. Normalizes the submission, generates a report ID, flags potential Annex III areas via keyword matching, and determines whether Art. 50 transparency may apply.
3. Sends the normalized report to OpenAI (gpt-4.1-mini) to propose an EU AI Act risk class, relevant provision, reasoning, obligations, and open questions as strict JSON.
4. Validates and corrects the proposal by rejecting unknown classes, escalating to Annex III high risk when the keyword pre-check indicates it, and adding Art. 50 transparency obligations when output leaves the company.
5. Appends the resulting record to a Google Sheets “AI inventory” spreadsheet with a “Proposal - human review pending” status and the proposed classification details.
6. Sends an email notification via SMTP to management (CC the DPO) for prohibited, high-risk, or unclear submissions, otherwise parks the entry for periodic review with a next-review date.

## Setup
1. Add OpenAI credentials for the OpenAI node and confirm the selected model (gpt-4.1-mini) is available in your account.
2. Add Google Sheets credentials, create a spreadsheet with a sheet named “AI inventory,” and update the Google Sheet document ID (YOUR_SHEET_ID) and column structure to match the mappings.
3. Configure SMTP email credentials and replace the example sender, recipient, and CC addresses in the email notification step.
4. Publish the n8n form and share the form URL internally, ensuring users do not submit sensitive personal data in the free-text fields.

## Requirements
- An OpenAI API key with access to gpt-4.1-mini
- A Google account with access to Google Sheets
- An SMTP mailbox for the notification emails

## Customization
- Extend the Annex III keyword list with the terms your industry uses
- Swap the OpenAI node for a locally hosted model when reports contain personal data
- Replace Google Sheets with your GRC tool by exchanging the append node

## 🔗 Nodes Used

Send Email, Google Sheets, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
