# 🤝 Send weekly NUACOM call analysis reports with OpenAI and Gmail

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs every Monday, pulls the previous week’s NUACOM calls for selected extensions, analyzes call AI data and transcriptions with an OpenAI-powered agent, and emails a consolidated HTML insights report via Gmail.

## How it works
1. Runs every Monday at 08:00.
2. Fetches the previous week’s calls from NUACOM for the configured extensions.
3. Keeps only answered calls longer than 40 seconds and retrieves NUACOM AI call analysis data for each call.
4. Compacts the call fields and groups all calls into a single payload for weekly analysis.
5. Uses an OpenAI chat model (via the n8n AI Agent) to generate an HTML report covering pain points, competitors, objections, and qualifying-question coverage.
6. Sends the generated report by email through Gmail.

## Setup
1. Add NUACOM API credentials and enable NUACOM AI call analysis so transcriptions/summaries are available.
2. Update the NUACOM call search settings (extensions, date range logic if needed, and the minimum duration threshold).
3. Add an OpenAI API credential and choose the model used by the AI Agent.
4. Add a Gmail OAuth2 credential and set the recipient email address (and any subject/message options) for the report.

## 🔗 Nodes Used

Gmail, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
