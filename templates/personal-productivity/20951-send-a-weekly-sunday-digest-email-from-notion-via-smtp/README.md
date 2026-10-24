# ⚡ Send a weekly Sunday digest email from Notion via SMTP

> ⚡ **0 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs every Sunday and pulls invoices, projects, pipeline deals, and content items from four Notion databases, then compiles them into a single plain-text digest and sends it to your email address via SMTP.

## How it works
1. Runs every Sunday at 09:00 (or on manual test trigger).
2. Reads the Finance Notion database and fetches pages where the Status select field equals Overdue.
3. Reads the Projects Notion database and fetches pages where the Status select field equals Active.
4. Reads the Pipeline Notion database and keeps deals in Contacted, Proposal, or Negotiation where Last touched is missing or older than the configured threshold.
5. Reads the Content Notion database and keeps items where the Status select field is Draft or Scheduled.
6. Builds a plain-text email with counts and bullet lists for each section and sends it via the n8n Email (SMTP) node.

## Setup
1. Create a Notion integration, add the Notion credentials in n8n, and share all four target databases with the integration.
2. Paste your four Notion database IDs (finance, projects, pipeline, content) and the recipient email address into the workflow settings values.
3. Add an SMTP credential for the Email Send node (or replace it with Gmail/Outlook) and set the from/to behavior to match your mail provider.
4. Ensure your Notion databases use the expected property names (Name, Status, Amount, Stage, Last touched, Deal name, Title) or update the filters and digest-building logic accordingly.

## 🔗 Nodes Used

Send Email, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
