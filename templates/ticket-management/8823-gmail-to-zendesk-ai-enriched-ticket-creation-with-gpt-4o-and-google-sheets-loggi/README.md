# 🎫 Gmail to Zendesk: AI-enriched ticket creation with GPT-4o and Google Sheets logging

> ⚡ **87 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Description
Turn incoming Gmail messages into structured Zendesk tickets, enriched by Azure OpenAI, and log key details to Google Sheets for tracking. Ideal for IT Support teams needing fast, consistent intake and documentation. ⚡

## What This Template Does
- Fetches new emails via Gmail Trigger. ✉️
- Normalizes Gmail data and formats it for downstream steps.
- Enriches and structures content with Azure OpenAI Chat Model and Output Parsers.
- Creates Zendesk tickets from the processed data. 🎫
- Appends or updates logs in Google Sheets for auditing and reporting. 📊

## Key Benefits
1. Saves time by automating ticket creation and logging. ⏱️
2. Improves ticket quality with AI-driven normalization and structure.
3. Ensures consistent records in Google Sheets for easy reporting.
4. Reduces manual errors in IT Support intake. ✅

## Features
- Gmail-triggered intake flow for new messages.
- AI enrichment using Azure OpenAI Chat Model with parsing and memory tooling.
- Zendesk ticket creation (create: ticket) with structured fields.
- Google Sheets logging (appendOrUpdate: sheet).
- Modular design with Execute Workflow nodes for reuse and scaling.

## Requirements
- n8n instance (Cloud or self-hosted).
- Gmail credentials configured in n8n for the Gmail Trigger.
- Zendesk credentials with permission to create tickets.
- Google Sheets credentials with access to the target spreadsheet (append/update enabled).
- Azure OpenAI credentials configured for the Azure OpenAI Chat Model and associated parsing.

## Target Audience
- IT Support and Helpdesk teams handling email-based requests. 🛠️
- Operations teams standardizing inbound email workflows.
- Agencies and MSPs offering managed support intake.
- Internal automation teams centralizing ticket capture and logging.

## Step-by-Step Setup Instructions 
- Connect Gmail credentials in n8n and select the inbox/label for the Gmail Trigger.
- Add Zendesk credentials and confirm ticket creation permissions.
- Configure Google Sheets credentials and select the target sheet for logs.
- Add Azure OpenAI credentials to the Azure OpenAI Chat Model node and verify parsing steps.
- Import the workflow, assign credentials to each node, update any placeholders, and run a test.
- Rename the final email/logging nodes descriptively (e.g., “Log to Support Sheet”) and schedule if needed.

## 🔗 Nodes Used

Google Sheets, Zendesk, Gmail Trigger, AI Agent, Structured Output Parser, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
